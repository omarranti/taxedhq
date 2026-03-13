import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const MONTHLY_PRICE = process.env.STRIPE_PRICE_PRO_MONTHLY;
const FOUNDERS_SETUP_AMOUNT = 1999;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    plan,
    email,
    success_url = `${process.env.VITE_APP_URL}/calculator?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url = `${process.env.VITE_APP_URL}/calculator?checkout=canceled`,
  } = req.body;

  if (!MONTHLY_PRICE) return res.status(500).json({ error: "Missing price config" });

  const isFounders = plan === "full" || plan === "full_access" || plan === "founders";
  const lineItems = [{ price: MONTHLY_PRICE, quantity: 1 }];

  try {
    const sessionParams = {
      mode: 'subscription',
      line_items: lineItems,
      success_url,
      cancel_url,
      metadata: { plan: isFounders ? "founders" : "monthly" },
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { plan: isFounders ? "founders" : "monthly" },
      },
    };

    if (isFounders) {
      sessionParams.subscription_data.trial_period_days = 90;
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: { name: 'Founders Club — 3-Month Access' },
          unit_amount: FOUNDERS_SETUP_AMOUNT,
        },
        quantity: 1,
      });
    }

    if (email) {
      sessionParams.customer_email = email;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return res.status(200).json({ url: session.url, session_id: session.id });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return res.status(500).json({ error: err.message });
  }
}
