'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Sparkles, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-surface-200/50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 shrink-0 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-surface-950 hidden sm:block">
              TopAI<span className="text-brand-500">.tools</span>
            </span>
          </Link>

          {/* Search bar - desktop */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-4"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-100 border border-surface-300 rounded-xl text-surface-900 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm"
              />
            </div>
          </form>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/pricing" className="btn-ghost text-sm">
              Get Featured
            </Link>
            <Link href="/submit" className="btn-primary text-sm py-2">
              <Plus className="w-4 h-4" />
              Submit Tool
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-surface-200 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-surface-700" />
            ) : (
              <Menu className="w-6 h-6 text-surface-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-surface-200/50 animate-fade-in">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-10 text-sm"
                />
              </div>
            </form>
            <nav className="flex flex-col gap-2">
              <Link
                href="/pricing"
                className="px-4 py-2 hover:bg-surface-200 rounded-lg transition-colors text-surface-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Featured
              </Link>
              <Link
                href="/submit"
                className="btn-primary justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Plus className="w-4 h-4" />
                Submit Tool
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
