import { Suspense } from 'react';
import type { Metadata } from 'next';
import { searchTools, getCategories } from '@/lib/data';
import { ToolCard } from '@/components/ui/ToolCard';
import { SearchFilters } from '@/components/ui/SearchFilters';
import { SearchInput } from '@/components/ui/SearchInput';
import { Pagination } from '@/components/ui/Pagination';

export const metadata: Metadata = {
  title: 'Browse All AI Tools',
  description: 'Discover and explore our complete collection of AI tools. Filter by category, pricing, and more.',
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    pricing?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const page = parseInt(params.page || '1', 10);
  const sort = (params.sort as 'newest' | 'popular' | 'trending') || 'newest';

  const [{ tools, total }, categories] = await Promise.all([
    searchTools({
      q: params.q,
      category: params.category,
      pricing: params.pricing,
      sort,
      page,
    }),
    getCategories(),
  ]);

  const totalPages = Math.ceil(total / 24);

  return (
    <div className="min-h-screen">
      <div className="container-wide py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-950 mb-2">
            {params.q ? `Search results for "${params.q}"` : 'Browse All AI Tools'}
          </h1>
          <p className="text-surface-600">
            {total} tool{total !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Search Input */}
        <Suspense fallback={<div className="h-14 bg-surface-200 rounded-xl animate-pulse mb-4" />}>
          <SearchInput className="mb-4" />
        </Suspense>

        {/* Filters */}
        <Suspense fallback={<div className="h-12 bg-surface-200 rounded-xl animate-pulse" />}>
          <SearchFilters categories={categories} />
        </Suspense>

        {/* Results */}
        {tools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination currentPage={page} totalPages={totalPages} />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-surface-100 rounded-2xl mt-8">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl text-surface-700 mb-2 font-medium">No tools found</p>
            <p className="text-surface-500 mb-6 max-w-md mx-auto">
              {params.q
                ? `We couldn't find any tools matching "${params.q}". Try different keywords or browse all tools.`
                : 'Try adjusting your filters to find what you\'re looking for.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/search" className="btn-secondary">
                Browse All Tools
              </a>
              <a href="/submit" className="btn-ghost">
                Submit a Tool
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
