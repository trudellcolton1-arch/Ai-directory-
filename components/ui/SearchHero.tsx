'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';

interface SearchHeroProps {
  placeholder?: string;
  className?: string;
}

export function SearchHero({
  placeholder = "Search for AI tools...",
  className = ""
}: SearchHeroProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/search');
    }
  };

  const popularSearches = [
    'ChatGPT',
    'Image Generator',
    'Writing Assistant',
    'Code Helper',
    'Video Editor',
  ];

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-14 pr-32 py-4 bg-white border-2 border-surface-300 rounded-2xl text-surface-900 placeholder:text-surface-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-lg shadow-lg"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2.5 px-5"
          >
            Search
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Popular searches */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
        <span className="text-sm text-surface-500">Popular:</span>
        {popularSearches.map((term) => (
          <button
            key={term}
            onClick={() => router.push(`/search?q=${encodeURIComponent(term)}`)}
            className="px-3 py-1.5 text-sm bg-surface-200/80 hover:bg-surface-300 text-surface-700 rounded-full transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
