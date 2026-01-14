import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

// Server-side Stripe client
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
  typescript: true,
});

// Client-side Stripe promise
let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

// Pricing configuration
export const PRICING_TIERS = [
  {
    id: 'weekly',
    name: 'Weekly Boost',
    price: 29,
    duration: '7 days',
    features: [
      'Featured placement for 7 days',
      'Highlighted in category',
      'Priority in search results',
    ],
    stripePriceId: 'price_weekly_boost', // Replace with actual Stripe price ID
  },
  {
    id: 'monthly',
    name: 'Monthly Feature',
    price: 99,
    duration: '30 days',
    popular: true,
    features: [
      'Featured placement for 30 days',
      'Homepage spotlight',
      'Highlighted in category',
      'Priority in search results',
      'Verified badge',
    ],
    stripePriceId: 'price_monthly_feature', // Replace with actual Stripe price ID
  },
  {
    id: 'quarterly',
    name: 'Quarterly Pro',
    price: 249,
    duration: '90 days',
    features: [
      'Featured placement for 90 days',
      'Permanent homepage presence',
      'Top of category listing',
      'Priority in all search results',
      'Verified badge',
      'Analytics dashboard access',
      'Dedicated support',
    ],
    stripePriceId: 'price_quarterly_pro', // Replace with actual Stripe price ID
  },
];

export async function createCheckoutSession({
  toolId,
  toolName,
  priceId,
  successUrl,
  cancelUrl,
}: {
  toolId: string;
  toolName: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const tier = PRICING_TIERS.find((t) => t.stripePriceId === priceId);
  
  if (!tier) {
    throw new Error('Invalid pricing tier');
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${tier.name} - ${toolName}`,
            description: `Featured listing for ${tier.duration}`,
          },
          unit_amount: tier.price * 100,
        },
        quantity: 1,
      },
    ],
    metadata: {
      tool_id: toolId,
      tier_id: tier.id,
      duration_days: tier.duration.includes('7') ? '7' : tier.duration.includes('30') ? '30' : '90',
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return session;
}

export async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  const { tool_id, duration_days } = session.metadata || {};
  
  if (!tool_id || !duration_days) {
    throw new Error('Missing metadata in session');
  }

  const durationDays = parseInt(duration_days, 10);
  const endsAt = new Date();
  endsAt.setDate(endsAt.getDate() + durationDays);

  return {
    toolId: tool_id,
    durationDays,
    endsAt: endsAt.toISOString(),
    paymentId: session.payment_intent as string,
    amountCents: session.amount_total || 0,
  };
}
