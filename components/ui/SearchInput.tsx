'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  className?: string;
}

export function SearchInput({ className = '' }: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  // Update local state when URL changes
  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim()) {
      params.set('q', query.trim());
    } else {
      params.delete('q');
    }
    params.delete('page'); // Reset pagination

    router.push(`${pathname}?${params.toString()}`);
  };

  const clearSearch = () => {
    setQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search AI tools by name, description, or feature..."
          className="w-full pl-12 pr-24 py-3.5 bg-white border-2 border-surface-300 rounded-xl text-surface-900 placeholder:text-surface-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="p-2 hover:bg-surface-200 rounded-lg transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-surface-500" />
            </button>
          )}
          <button type="submit" className="btn-primary py-2 px-4 text-sm">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
