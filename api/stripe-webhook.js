// api/stripe-webhook.js
// Vercel serverless function — handles Stripe events
// Deploy at: https://your-domain.com/api/stripe-webhook

import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const PRICE_TO_PLAN = {
  [process.env.STRIPE_PRICE_FULL_MONTHLY]: "full_access",
  [process.env.STRIPE_PRICE_PRO_MONTHLY]: "pro_ai",
};

export const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

const isActive = (status) => ["active", "trialing", "past_due"].includes(status || "");
const minCommitmentIso = (startDateUnix) => {
  if (!startDateUnix || Number.isNaN(Number(startDateUnix))) return null;
  return new Date((Number(startDateUnix) + 60 * 60 * 24 * 30 * 3) * 1000).toISOString();
};

const safeUpsert = async (table, payload, onConflict) => {
  try {
    const query = supabase.from(table).upsert(payload, onConflict ? { onConflict } : undefined);
    const { error } = await query;
    if (error) throw error;
    return true;
  } catch (error) {
    console.warn(`Webhook: upsert failed for ${table}`, error.message);
    return false;
  }
};

const safeUpdate = async (table, updates, filterColumn, filterValue) => {
  try {
    const { error } = await supabase.from(table).update(updates).eq(filterColumn, filterValue);
    if (error) throw error;
    return true;
  } catch (error) {
    console.warn(`Webhook: update failed for ${table}`, error.message);
    return false;
  }
};

const syncEntitlementByUser = async (userId, plan, subscriptionId, status) => {
  if (!userId) return;
  await safeUpsert(
    "billing_entitlements",
    {
      user_id: userId,
      full_access: isActive(status),
      pro_ai: isActive(status) && plan === "pro_ai",
      status: isActive(status) ? "active" : "inactive",
      source_subscription_id: subscriptionId,
    },
    "user_id"
  );
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rawBody = await getRawBody(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  console.log(`Processing Stripe event: ${event.type}`);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        await handleCheckoutCompleted(session);
        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object;
        await handleSubscriptionUpdated(subscription);
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        await handleSubscriptionDeleted(subscription);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// ── checkout.session.completed ──────────────────────────────
async function handleCheckoutCompleted(session) {
  const { customer, subscription: subscriptionId, customer_email } = session;

  // Fetch full subscription from Stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const priceId = subscription.items.data[0].price.id;
  const plan = PRICE_TO_PLAN[priceId] || "full_access";
  const normalizedPlan = plan === "pro_ai" ? "pro" : "full";
  const normalizedEmail = (customer_email || "").toLowerCase();

  // Try to find user by email
  const { data: users } = await supabase.auth.admin.listUsers();
  const matchedUser = users?.users?.find(
    (u) => u.email?.toLowerCase() === normalizedEmail
  );

  if (matchedUser) {
    // Authenticated user — upsert subscription directly
    await upsertSubscription({
      userId: matchedUser.id,
      stripeCustomerId: customer,
      stripeSubscriptionId: subscriptionId,
      stripePriceId: priceId,
      plan,
      subscription,
    });
    await syncEntitlementByUser(matchedUser.id, plan, subscriptionId, subscription.status);
    console.log(`Linked subscription to user: ${matchedUser.id}`);
  }

  // Guest checkout fallback (legacy + new)
  await safeUpsert(
    "purchase_claims",
    {
      stripe_session_id: session.id,
      stripe_customer_id: customer,
      stripe_price_id: priceId,
      plan,
      email: customer_email,
    },
    "stripe_session_id"
  );
  await safeUpsert(
    "billing_guest_access",
    {
      stripe_checkout_session_id: session.id,
      email: normalizedEmail,
      plan_tier: normalizedPlan,
      status: "active",
      expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      claimed_by_user_id: matchedUser?.id || null,
    },
    "stripe_checkout_session_id"
  );

  // New billing subscription mirror
  await safeUpsert(
    "billing_subscriptions",
    {
      user_id: matchedUser?.id || null,
      email: normalizedEmail,
      stripe_customer_id: customer,
      stripe_subscription_id: subscriptionId,
      stripe_price_id: priceId,
      plan_tier: normalizedPlan,
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      min_commitment_end: minCommitmentIso(subscription.start_date),
    },
    "stripe_subscription_id"
  );

  if (normalizedEmail && customer) {
    await safeUpsert(
      "billing_customers",
      {
        user_id: matchedUser?.id || null,
        email: normalizedEmail,
        stripe_customer_id: customer,
      },
      "stripe_customer_id"
    );
  }

  console.log(`Stored/updated purchase records for: ${customer_email}`);
}

// ── customer.subscription.updated ──────────────────────────
async function handleSubscriptionUpdated(subscription) {
  const priceId = subscription.items.data[0].price.id;
  const plan = PRICE_TO_PLAN[priceId] || "full_access";
  const normalizedPlan = plan === "pro_ai" ? "pro" : "full";
  const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;

  const { data: customerRow } = await supabase
    .from("billing_customers")
    .select("user_id,email")
    .eq("stripe_customer_id", customerId)
    .maybeSingle();

  await safeUpdate(
    "subscriptions",
    {
      status: subscription.status,
      stripe_price_id: priceId,
      plan,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      updated_at: new Date().toISOString(),
    },
    "stripe_subscription_id",
    subscription.id
  );

  await safeUpsert(
    "billing_subscriptions",
    {
      user_id: customerRow?.user_id || null,
      email: (customerRow?.email || "").toLowerCase(),
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      stripe_price_id: priceId,
      plan_tier: normalizedPlan,
      status: subscription.status,
      current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      min_commitment_end: minCommitmentIso(subscription.start_date),
    },
    "stripe_subscription_id"
  );

  await syncEntitlementByUser(customerRow?.user_id, plan, subscription.id, subscription.status);
}

// ── customer.subscription.deleted ──────────────────────────
async function handleSubscriptionDeleted(subscription) {
  const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;
  const { data: customerRow } = await supabase
    .from("billing_customers")
    .select("user_id")
    .eq("stripe_customer_id", customerId)
    .maybeSingle();

  await safeUpdate("subscriptions", { status: "canceled", updated_at: new Date().toISOString() }, "stripe_subscription_id", subscription.id);
  await safeUpdate("billing_subscriptions", { status: "canceled", updated_at: new Date().toISOString() }, "stripe_subscription_id", subscription.id);
  await syncEntitlementByUser(customerRow?.user_id, "full_access", subscription.id, "canceled");
}

// ── helpers ─────────────────────────────────────────────────
async function upsertSubscription({ userId, stripeCustomerId, stripeSubscriptionId, stripePriceId, plan, subscription }) {
  const { error } = await supabase.from("subscriptions").upsert({
    user_id: userId,
    stripe_customer_id: stripeCustomerId,
    stripe_subscription_id: stripeSubscriptionId,
    stripe_price_id: stripePriceId,
    plan,
    status: subscription.status,
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    cancel_at_period_end: subscription.cancel_at_period_end,
    updated_at: new Date().toISOString(),
  }, { onConflict: "stripe_subscription_id" });

  if (error) throw error;
}
