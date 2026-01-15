import Link from 'next/link';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { getFeaturedTools, getRecentTools, getCategoriesWithCounts, getToolStats } from '@/lib/data';
import { ToolCard } from '@/components/ui/ToolCard';
import { SearchHero } from '@/components/ui/SearchHero';
import { formatNumber, getCategoryIcon } from '@/lib/utils';

export default async function HomePage() {
  const [featuredTools, recentTools, categories, stats] = await Promise.all([
    getFeaturedTools(6),
    getRecentTools(12),
    getCategoriesWithCounts(),
    getToolStats(),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container-wide py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 text-brand-500 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{formatNumber(stats.tools)}+ AI Tools</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-surface-950 mb-6">
            Discover the Best{' '}
            <span className="text-brand-500">AI Tools</span>
          </h1>
          <p className="text-lg md:text-xl text-surface-600 mb-10">
            Explore the most comprehensive directory of AI tools. Find the perfect solution for writing, image generation, coding, productivity, and more.
          </p>

          {/* Hero Search Bar */}
          <SearchHero placeholder="Search 1000+ AI tools..." />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/search" className="btn-secondary text-base py-3 px-6">
              Browse All Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/submit" className="btn-ghost text-base py-3 px-6">
              Submit Your Tool
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-wide py-12 border-t border-surface-200/50">
        <h2 className="section-title mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.slice(0, 14).map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="card p-4 text-center hover:shadow-lg transition-all group"
            >
              <div className="text-2xl mb-2">{getCategoryIcon(category.slug)}</div>
              <div className="font-medium text-surface-950 group-hover:text-brand-500 transition-colors text-sm">
                {category.name}
              </div>
              <div className="text-xs text-surface-500 mt-1">
                {category.tool_count || 0} tools
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="container-wide py-12 border-t border-surface-200/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Featured Tools</h2>
            <Link href="/search?sort=popular" className="text-sm text-brand-500 hover:text-brand-600 flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Tools */}
      <section className="container-wide py-12 border-t border-surface-200/50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-brand-500" />
            Recently Added
          </h2>
          <Link href="/search?sort=newest" className="text-sm text-brand-500 hover:text-brand-600 flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recentTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-wide py-16 border-t border-surface-200/50">
        <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-brand-500/10 to-transparent">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-surface-950 mb-4">
            Have an AI Tool to Share?
          </h2>
          <p className="text-surface-600 mb-6 max-w-xl mx-auto">
            Submit your AI tool to our directory and reach thousands of potential users looking for the perfect AI solution.
          </p>
          <Link href="/submit" className="btn-primary text-base py-3 px-8">
            Submit Your Tool
          </Link>
        </div>
      </section>
    </div>
  );
}
