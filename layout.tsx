import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'TopAI.tools - Discover the Best AI Tools',
    template: '%s | TopAI.tools',
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
  authors: [{ name: 'TopAI.tools' }],
  creator: 'TopAI.tools',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://topai.tools',
    siteName: 'TopAI.tools',
    title: 'TopAI.tools - Discover the Best AI Tools',
    description:
      'Explore the most comprehensive directory of AI tools. Find the perfect AI solution for your needs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TopAI.tools - AI Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TopAI.tools - Discover the Best AI Tools',
    description:
      'Explore the most comprehensive directory of AI tools. Find the perfect AI solution for your needs.',
    images: ['/og-image.png'],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
