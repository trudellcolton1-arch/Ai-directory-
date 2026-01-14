import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-display font-bold text-surface-300 mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-surface-950 mb-4">
          Page Not Found
        </h2>
        <p className="text-surface-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/search" className="btn-secondary">
            <Search className="w-4 h-4" />
            Search Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
