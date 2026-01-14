'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Filter, SortAsc } from 'lucide-react';
import type { Category } from '@/lib/types';

interface SearchFiltersProps {
  categories: Category[];
}

export function SearchFilters({ categories }: SearchFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || '';
  const currentPricing = searchParams.get('pricing') || '';
  const currentSort = searchParams.get('sort') || 'newest';

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete('page'); // Reset to page 1 when filtering
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-surface-100 rounded-xl border border-surface-200">
      <div className="flex items-center gap-2 text-surface-600">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filters:</span>
      </div>

      {/* Category filter */}
      <select
        value={currentCategory}
        onChange={(e) => updateFilter('category', e.target.value)}
        className="px-3 py-2 bg-white border border-surface-300 rounded-lg text-sm text-surface-700 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.slug}>
            {cat.icon} {cat.name}
          </option>
        ))}
      </select>

      {/* Pricing filter */}
      <select
        value={currentPricing}
        onChange={(e) => updateFilter('pricing', e.target.value)}
        className="px-3 py-2 bg-white border border-surface-300 rounded-lg text-sm text-surface-700 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
      >
        <option value="">All Pricing</option>
        <option value="free">Free</option>
        <option value="freemium">Freemium</option>
        <option value="paid">Paid</option>
        <option value="enterprise">Enterprise</option>
      </select>

      {/* Sort */}
      <div className="flex items-center gap-2 ml-auto">
        <SortAsc className="w-4 h-4 text-surface-600" />
        <select
          value={currentSort}
          onChange={(e) => updateFilter('sort', e.target.value)}
          className="px-3 py-2 bg-white border border-surface-300 rounded-lg text-sm text-surface-700 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500"
        >
          <option value="newest">Newest First</option>
          <option value="popular">Most Popular</option>
          <option value="trending">Trending</option>
        </select>
      </div>
    </div>
  );
}
