'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export function SubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      tool_name: formData.get('tool_name') as string,
      website_url: formData.get('website_url') as string,
      description: formData.get('description') as string,
      contact_email: formData.get('contact_email') as string,
      is_owner: formData.get('is_owner') === 'on',
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-display font-bold text-surface-950 mb-2">
          Submission Received!
        </h2>
        <p className="text-surface-600">
          Thank you for submitting your tool. We&apos;ll review it and get back to you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="tool_name" className="block text-sm font-medium text-surface-700 mb-2">
          Tool Name *
        </label>
        <input
          type="text"
          id="tool_name"
          name="tool_name"
          required
          className="input"
          placeholder="e.g., ChatGPT, Midjourney"
        />
      </div>

      <div>
        <label htmlFor="website_url" className="block text-sm font-medium text-surface-700 mb-2">
          Website URL *
        </label>
        <input
          type="url"
          id="website_url"
          name="website_url"
          required
          className="input"
          placeholder="https://your-tool.com"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-surface-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="input resize-none"
          placeholder="Tell us about your tool and what makes it special..."
        />
      </div>

      <div>
        <label htmlFor="contact_email" className="block text-sm font-medium text-surface-700 mb-2">
          Contact Email *
        </label>
        <input
          type="email"
          id="contact_email"
          name="contact_email"
          required
          className="input"
          placeholder="you@example.com"
        />
        <p className="text-xs text-surface-500 mt-1">
          We&apos;ll only use this to notify you about your submission status.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="is_owner"
          name="is_owner"
          className="mt-1 w-4 h-4 rounded border-surface-300 text-brand-500 focus:ring-brand-500"
        />
        <label htmlFor="is_owner" className="text-sm text-surface-600">
          I am the owner or authorized representative of this tool
        </label>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center py-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Tool
          </>
        )}
      </button>
    </form>
  );
}
