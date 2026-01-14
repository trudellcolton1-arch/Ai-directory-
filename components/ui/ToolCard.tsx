import Link from 'next/link';
import Image from 'next/image';
import { Star, BadgeCheck } from 'lucide-react';
import type { Tool } from '@/lib/types';
import { cn, getPricingColor } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = getPricingColor(tool.pricing_type);

  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="card p-4 hover:shadow-lg transition-all duration-200 group"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="relative w-12 h-12 rounded-xl bg-surface-200 flex items-center justify-center overflow-hidden shrink-0 border border-surface-300">
          {tool.logo_url ? (
            <Image
              src={tool.logo_url}
              alt={tool.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          ) : (
            <span className="text-xl font-bold text-surface-500">
              {tool.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-display font-semibold text-surface-950 truncate group-hover:text-brand-500 transition-colors">
              {tool.name}
            </h3>
            {tool.is_verified && (
              <BadgeCheck className="w-4 h-4 text-brand-500 shrink-0" />
            )}
            {tool.is_featured && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0" />
            )}
          </div>

          <p className="text-sm text-surface-600 line-clamp-2 mb-2">
            {tool.tagline}
          </p>

          <div className="flex items-center gap-2">
            <span className={cn('badge text-xs', pricingColors)}>
              {tool.pricing_type}
            </span>
            {tool.category && (
              <span className="badge bg-surface-200 text-surface-600 text-xs">
                {tool.category.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
