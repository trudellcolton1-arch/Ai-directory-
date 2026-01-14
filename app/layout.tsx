import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'AI Tool Findr - Discover the Best AI Tools',
    template: '%s | AI Tool Findr',
  },
  description:
    'Explore the most comprehensive directory of AI tools. Find the perfect AI solution for writing, image generation, coding, productivity, and more.',
  keywords: [
    'AI tools',
    'artificial intelligence',
    'machine learning',
    'AI directory',
    'best AI tools',
    'AI software',
    'ChatGPT alternatives',
    'AI productivity',
  ],
  authors: [{ name: 'AI Tool Findr' }],
  creator: 'AI Tool Findr',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aitoolfindr.co',
    siteName: 'AI Tool Findr',
    title: 'AI Tool Findr - Discover the Best AI Tools',
    description:
      'Explore the most comprehensive directory of AI tools. Find the perfect AI solution for your needs.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'AI Tool Findr - AI Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tool Findr - Discover the Best AI Tools',
    description:
      'Explore the most comprehensive directory of AI tools. Find the perfect AI solution for your needs.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
