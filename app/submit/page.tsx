import type { Metadata } from 'next';
import { SubmitForm } from '@/components/ui/SubmitForm';

export const metadata: Metadata = {
  title: 'Submit Your AI Tool',
  description: 'Submit your AI tool to be featured in our directory. Get discovered by thousands of users looking for the best AI solutions.',
};

export default function SubmitPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-wide max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-950 mb-4">
            Submit Your AI Tool
          </h1>
          <p className="text-lg text-surface-600">
            Get your AI tool discovered by thousands of users. Free submission,
            or get featured for maximum visibility.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="card p-4 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-surface-900 mb-1">Reach Users</h3>
            <p className="text-sm text-surface-600">Get discovered by AI enthusiasts</p>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-surface-900 mb-1">Quick Review</h3>
            <p className="text-sm text-surface-600">Submissions reviewed within 48h</p>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl mb-2">✨</div>
            <h3 className="font-semibold text-surface-900 mb-1">Free Listing</h3>
            <p className="text-sm text-surface-600">Basic listing is always free</p>
          </div>
        </div>

        {/* Form */}
        <div className="card p-6 md:p-8">
          <SubmitForm />
        </div>
      </div>
    </div>
  );
}
