import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ExternalLink,
  ArrowLeft,
  Star,
  BadgeCheck,
  Globe,
  Tag,
  Calendar,
  TrendingUp,
  Share2,
} from 'lucide-react';
import { getToolBySlug, getRelatedTools, recordClick } from '@/lib/data';
import { ToolCard } from '@/components/ui/ToolCard';
import { cn, getPricingColor, formatDate, formatNumber, absoluteUrl } from '@/lib/utils';

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: tool.meta_title || tool.name,
    description: tool.meta_description || tool.tagline,
    openGraph: {
      title: tool.meta_title || tool.name,
      description: tool.meta_description || tool.tagline,
      url: absoluteUrl(`/tool/${tool.slug}`),
      images: tool.screenshot_url ? [{ url: tool.screenshot_url }] : undefined,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = await getRelatedTools(tool, 4);
  const pricingColors = getPricingColor(tool.pricing_type);

  // The actual click tracking happens client-side via API route
  const visitUrl = tool.affiliate_url || tool.website_url;

  return (
    <div className="min-h-screen">
      {/* Back button */}
      <div className="container-wide py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-surface-600 hover:text-surface-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to directory
        </Link>
      </div>

      {/* Main content */}
      <div className="container-wide pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="card p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Logo */}
                <div className="relative w-20 h-20 rounded-2xl bg-surface-200 flex items-center justify-center overflow-hidden shrink-0 border border-surface-300">
                  {tool.logo_url ? (
                    <Image
                      src={tool.logo_url}
                      alt={tool.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-surface-500">
                      {tool.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-display font-bold text-surface-950">
                      {tool.name}
                    </h1>
                    {tool.is_verified && (
                      <BadgeCheck className="w-6 h-6 text-brand-500" />
                    )}
                    {tool.is_featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-lg text-surface-600 mb-4">
                    {tool.tagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn('badge text-sm', pricingColors)}>
                      {tool.pricing_type}
                      {tool.starting_price && ` • ${tool.starting_price}`}
                    </span>

                    {tool.category && (
                      <Link
                        href={`/category/${tool.category.slug}`}
                        className="badge bg-surface-200 text-surface-700 hover:bg-surface-300 transition-colors"
                      >
                        {tool.category.name}
                      </Link>
                    )}

                    {tool.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="badge bg-surface-200/50 text-surface-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            {tool.screenshot_url && (
              <div className="card overflow-hidden">
                <div className="relative aspect-video bg-surface-200">
                  <Image
                    src={tool.screenshot_url}
                    alt={`${tool.name} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              </div>
            )}

            {/* Description */}
            {tool.description && (
              <div className="card p-8">
                <h2 className="text-xl font-display font-semibold text-surface-950 mb-4">
                  About {tool.name}
                </h2>
                <div className="prose prose-invert prose-surface max-w-none">
                  <p className="text-surface-600 leading-relaxed whitespace-pre-wrap">
                    {tool.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="card p-6 sticky top-24">
              <a
                href={visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-base py-4 mb-4"
                onClick={() => {
                  // Track click via API
                  fetch('/api/clicks', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ toolId: tool.id }),
                  });
                }}
              >
                <Globe className="w-5 h-5" />
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-surface-200">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-surface-950">
                    {formatNumber(tool.click_count)}
                  </div>
                  <div className="text-sm text-surface-500">Visits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-surface-950">
                    {formatNumber(tool.upvotes)}
                  </div>
                  <div className="text-sm text-surface-500">Upvotes</div>
                </div>
              </div>

              {/* Meta info */}
              <div className="space-y-3 pt-4 mt-4 border-t border-surface-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Added
                  </span>
                  <span className="text-surface-700">
                    {formatDate(tool.created_at)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-500 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Pricing
                  </span>
                  <span className="text-surface-700 capitalize">
                    {tool.pricing_type}
                  </span>
                </div>
              </div>

              {/* Share */}
              <div className="pt-4 mt-4 border-t border-surface-200">
                <button
                  className="btn-secondary w-full justify-center"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: tool.name,
                        text: tool.tagline,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="container-wide py-16 border-t border-surface-200/50">
          <h2 className="section-title mb-8">Similar Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTools.map((relatedTool) => (
              <ToolCard key={relatedTool.id} tool={relatedTool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
