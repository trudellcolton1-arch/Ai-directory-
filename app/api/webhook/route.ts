import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { stripe, handleSuccessfulPayment } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe signature' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        if (session.payment_status === 'paid') {
          const paymentData = await handleSuccessfulPayment(session);
          const supabase = createAdminClient();

          // Update tool to featured
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (supabase.from('tools') as any)
            .update({
              is_featured: true,
              is_verified: true,
              featured_until: paymentData.endsAt,
            })
            .eq('id', paymentData.toolId);

          // Record the purchase
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (supabase.from('featured_purchases') as any).insert({
            tool_id: paymentData.toolId,
            stripe_payment_id: paymentData.paymentId,
            amount_cents: paymentData.amountCents,
            duration_days: paymentData.durationDays,
            ends_at: paymentData.endsAt,
          });

          console.log('Featured purchase recorded:', paymentData);
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', paymentIntent.id);
        // TODO: Send notification email about failed payment
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
