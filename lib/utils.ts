import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function getTimeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)}w ago`;
  
  return formatDate(date);
}

export function getPricingColor(type: string): string {
  switch (type) {
    case 'free':
      return 'text-green-400 bg-green-400/10';
    case 'freemium':
      return 'text-cyan-400 bg-cyan-400/10';
    case 'paid':
      return 'text-orange-400 bg-orange-400/10';
    case 'enterprise':
      return 'text-purple-400 bg-purple-400/10';
    default:
      return 'text-gray-400 bg-gray-400/10';
  }
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export function absoluteUrl(path: string): string {
  return `${getBaseUrl()}${path}`;
}

// Category icons mapping
export const CATEGORY_ICONS: Record<string, string> = {
  writing: '✍️',
  image: '🖼️',
  video: '🎬',
  audio: '🎵',
  coding: '💻',
  productivity: '⚡',
  marketing: '📈',
  data: '📊',
  chatbots: '🤖',
  design: '🎨',
  business: '💼',
  education: '📚',
  research: '🔬',
  other: '🔧',
};

export function getCategoryIcon(slug: string): string {
  return CATEGORY_ICONS[slug] || '🔧';
}
