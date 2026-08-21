import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getHqPage } from '@/lib/hqContent';
import { absoluteUrl, formatDate } from '@/lib/utils';

/**
 * /p/<slug> — HQ-written SEO articles, served on aitoolfindr.co so the search
 * value lands on our own domain. HQ owns generation and sanitizes upstream;
 * this route only reads and renders. ISR: re-checked every 10 minutes, so a
 * newly published article appears without a redeploy.
 */
export const revalidate = 600;

const SITE_NAME = 'AI Tool Findr';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getHqPage(slug);
  // Throw in metadata (not just the page body) so the 404 status is set
  // before any streaming starts — a Suspense/loading boundary above this
  // route would otherwise flush a 200 shell and turn this into a soft 404.
  if (!page) notFound();
  const url = absoluteUrl(`/p/${page.slug}`);
  const description = page.metaDescription ?? undefined;
  return {
    title: page.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
    },
  };
}

export default async function HqContentPage({ params }: Props) {
  const { slug } = await params;
  const page = await getHqPage(slug);
  if (!page) notFound();

  const url = absoluteUrl(`/p/${page.slug}`);
  const siteUrl = absoluteUrl('');
  const article = page.jsonLd ?? {
    '@type': 'Article',
    headline: page.title,
    description: page.metaDescription ?? undefined,
    datePublished: page.publishedAt ?? undefined,
    dateModified: page.publishedAt ?? undefined,
    inLanguage: 'en',
    author: { '@type': 'Organization', name: SITE_NAME, url: siteUrl },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: siteUrl },
    mainEntityOfPage: url,
    url,
  };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      article,
      ...(page.faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: page.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container-wide py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-surface-600 hover:text-surface-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to directory
        </Link>
      </div>

      <div className="container-wide pb-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight text-surface-950">
            {page.title}
          </h1>
          {page.publishedAt && (
            <div className="mt-3 text-sm text-surface-500">
              Published {formatDate(page.publishedAt)}
            </div>
          )}

          <div
            className="hq-body mt-10 border-t border-surface-200/50 pt-10"
            /* Written and sanitized upstream by HQ; this site renders read-only. */
            dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
          />

          {page.faq.length > 0 && (
            <section className="mt-12 border-t border-surface-200/50 pt-10">
              <h2 className="text-xl font-display font-bold text-surface-950">
                Frequently asked questions
              </h2>
              <div className="mt-5 space-y-3">
                {page.faq.map((f) => (
                  <details key={f.q} className="group card px-5 py-4">
                    <summary className="cursor-pointer list-none font-semibold text-surface-900 transition-colors group-open:text-brand-400">
                      {f.q}
                    </summary>
                    <p className="mt-3 leading-relaxed text-surface-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      <style>{`
        .hq-body { color: #aaaaaa; font-size: 1.0625rem; line-height: 1.75; }
        .hq-body h2 { color: #f5f5f5; font-size: 1.5rem; font-weight: 700; letter-spacing: -.01em; margin: 2.25rem 0 .75rem; }
        .hq-body h3 { color: #f5f5f5; font-size: 1.17rem; font-weight: 600; margin: 1.75rem 0 .5rem; }
        .hq-body p { margin: 0 0 1.1rem; }
        .hq-body a { color: #22c55e; text-decoration: underline; text-underline-offset: 3px; }
        .hq-body a:hover { color: #86efac; }
        .hq-body ul, .hq-body ol { margin: 0 0 1.1rem; padding-left: 1.4rem; }
        .hq-body li { margin-bottom: .45rem; }
        .hq-body strong { color: #cccccc; }
        .hq-body blockquote { border-left: 3px solid #16a34a; padding-left: 1rem; color: #888888; margin: 1.5rem 0; }
        .hq-body table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: .95rem; display: block; overflow-x: auto; }
        .hq-body th, .hq-body td { border: 1px solid #262626; padding: .55rem .8rem; text-align: left; }
        .hq-body th { color: #f5f5f5; background: #1a1a1a; }
        .hq-body code { background: #1a1a1a; border-radius: 5px; padding: .1em .35em; font-size: .92em; }
        .hq-body img { max-width: 100%; border-radius: 12px; }
      `}</style>
    </div>
  );
}
