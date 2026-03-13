import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "./supabase";

let stripePromise;

const api = async (path, options = {}) => {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Billing request failed");
  return data;
};

export const startCheckout = async ({ plan, email, scenario }) => {
  let data;
  try {
    data = await api("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ plan, email, scenario }),
    });
  } catch {
    const legacyPlan = plan === "pro" ? "pro_ai" : "full_access";
    data = await api("/api/create-checkout", {
      method: "POST",
      body: JSON.stringify({ plan: legacyPlan, email }),
    });
  }

  if (data.url) {
    window.location.href = data.url;
    return;
  }

  const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
  if (!key) throw new Error("Missing VITE_STRIPE_PUBLISHABLE_KEY");
  stripePromise = stripePromise || loadStripe(key);
  const stripe = await stripePromise;
  if (!stripe) throw new Error("Stripe failed to initialize");
  const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
  if (error) throw error;
};

export const getCheckoutStatus = async (sessionId) => api(`/api/checkout-status?session_id=${encodeURIComponent(sessionId)}`);

export const claimEntitlement = async (sessionId) => {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;
  const userId = data?.session?.user?.id;
  if (!token) throw new Error("Please log in to claim this purchase.");
  try {
    return await api("/api/claim-entitlement", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ session_id: sessionId }),
    });
  } catch {
    return api("/api/claim-purchase", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId, user_id: userId }),
    });
  }
};

export const loadEntitlement = async (userId) => {
  if (!userId) return null;
  const { data, error } = await supabase
    .from("billing_entitlements")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (!error && data) return data;

  const { data: legacySub } = await supabase
    .from("subscriptions")
    .select("plan,status")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!legacySub) return null;
  const active = ["active", "trialing", "past_due"].includes(legacySub.status || "");
  return {
    full_access: active,
    pro_ai: active && legacySub.plan === "pro_ai",
    status: active ? "active" : "inactive",
  };
};
