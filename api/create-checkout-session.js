import { json, stripe } from "./_lib/clients.js";

const MONTHLY_PRICE = process.env.STRIPE_PRICE_PRO_MONTHLY;
const FOUNDERS_SETUP_AMOUNT = 1999;

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return json(res, 200, { ok: true });
  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed" });

  try {
    const { plan, email, scenario } = req.body || {};
    if (!plan) return json(res, 400, { error: "Missing plan" });

    const origin = req.headers.origin || process.env.VITE_APP_URL || "http://localhost:5173";
    const successUrl = `${origin}/calculator?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/calculator?checkout=cancelled`;

    const isFounders = plan === "full" || plan === "founders";

    const lineItems = [{ price: MONTHLY_PRICE, quantity: 1 }];

    const sessionParams = {
      mode: "subscription",
      line_items: lineItems,
      customer_email: email || undefined,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
      metadata: {
        plan_tier: isFounders ? "founders" : "monthly",
        income: String(scenario?.income ?? ""),
        filing_status: String(scenario?.filingStatus ?? ""),
      },
      subscription_data: {
        metadata: { plan_tier: isFounders ? "founders" : "monthly" },
      },
    };

    if (isFounders) {
      sessionParams.subscription_data.trial_period_days = 90;
      sessionParams.invoice_creation = { enabled: false };
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Founders Club — 3-Month Access" },
          unit_amount: FOUNDERS_SETUP_AMOUNT,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return json(res, 200, { id: session.id, url: session.url });
  } catch (error) {
    return json(res, 500, { error: error.message || "Checkout session failed" });
  }
}
