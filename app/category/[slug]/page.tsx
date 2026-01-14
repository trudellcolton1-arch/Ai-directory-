import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCategoryBySlug, getToolsByCategory } from '@/lib/data';
import { ToolCard } from '@/components/ui/ToolCard';
import { Pagination } from '@/components/ui/Pagination';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} AI Tools`,
    description: category.description || `Discover the best ${category.name.toLowerCase()} AI tools. Browse our curated collection of ${category.name.toLowerCase()} solutions.`,
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || '1', 10);

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const { tools, total } = await getToolsByCategory(slug, page);
  const totalPages = Math.ceil(total / 24);

  return (
    <div className="min-h-screen">
      <div className="container-wide py-8">
        {/* Back button */}
        <Link
          href="/search"
          className="inline-flex items-center gap-2 text-sm text-surface-600 hover:text-surface-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Browse all tools
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            {category.icon && (
              <span className="text-4xl">{category.icon}</span>
            )}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-950">
              {category.name} AI Tools
            </h1>
          </div>
          {category.description && (
            <p className="text-lg text-surface-600 max-w-2xl">
              {category.description}
            </p>
          )}
          <p className="text-surface-500 mt-2">
            {total} tool{total !== 1 ? 's' : ''} in this category
          </p>
        </div>

        {/* Tools Grid */}
        {tools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          <div className="text-center py-16">
            <p className="text-xl text-surface-600 mb-4">No tools in this category yet</p>
            <p className="text-surface-500 mb-6">
              Be the first to submit a tool in {category.name}!
            </p>
            <Link href="/submit" className="btn-primary">
              Submit a Tool
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Dynamic rendering - categories are fetched at request time
export const dynamic = 'force-dynamic';
