import type { Metadata } from 'next';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { PRICING_TIERS } from '@/lib/stripe';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Get Featured - Pricing',
  description: 'Boost your AI tool visibility with featured placements. Get discovered by thousands of users.',
};

const tierIcons = {
  weekly: Zap,
  monthly: Star,
  quarterly: Crown,
};

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-950 mb-4">
            Get Your Tool Featured
          </h1>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto">
            Boost your visibility and get discovered by thousands of users looking for AI tools.
            Choose the plan that works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier) => {
            const Icon = tierIcons[tier.id as keyof typeof tierIcons] || Star;

            return (
              <div
                key={tier.id}
                className={cn(
                  'card p-6 md:p-8 relative',
                  tier.popular && 'ring-2 ring-brand-500 scale-105'
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-brand-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4',
                    tier.popular
                      ? 'bg-brand-500 text-white'
                      : 'bg-surface-200 text-surface-600'
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-surface-950 mb-1">
                    {tier.name}
                  </h2>
                  <p className="text-surface-500 text-sm">{tier.duration}</p>
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-display font-bold text-surface-950">
                    ${tier.price}
                  </span>
                  <span className="text-surface-500 ml-1">one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={cn(
                        'w-5 h-5 shrink-0 mt-0.5',
                        tier.popular ? 'text-brand-500' : 'text-green-500'
                      )} />
                      <span className="text-surface-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    'w-full py-3 rounded-xl font-semibold transition-all',
                    tier.popular
                      ? 'bg-brand-500 text-white hover:bg-brand-600'
                      : 'bg-surface-200 text-surface-700 hover:bg-surface-300'
                  )}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-surface-950 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold text-surface-900 mb-2">
                What does &quot;featured&quot; mean?
              </h3>
              <p className="text-surface-600">
                Featured tools appear at the top of search results, on the homepage, and are highlighted
                in their category. This significantly increases visibility and clicks.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-surface-900 mb-2">
                When does my feature start?
              </h3>
              <p className="text-surface-600">
                Your featured placement starts immediately after payment is confirmed. You&apos;ll see
                the changes within minutes.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-surface-900 mb-2">
                Can I get a refund?
              </h3>
              <p className="text-surface-600">
                We offer a 7-day money-back guarantee if you&apos;re not satisfied with the results.
                Contact us at support@topai.tools for refund requests.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-surface-900 mb-2">
                My tool isn&apos;t listed yet. Can I still buy a feature?
              </h3>
              <p className="text-surface-600">
                Yes! First submit your tool through our submission form. Once approved,
                you can purchase a featured placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
