import { ReactNode } from 'react';
import Image from 'next/image';
import { ArticleSchema, BreadcrumbSchema } from './SchemaMarkup';

interface Breadcrumb {
  label: string;
  href: string;
}

interface TableOfContentsItem {
  id: string;
  label: string;
  level: number;
}

interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  readingTime?: number;
  lastUpdated?: string;
  breadcrumbs?: Breadcrumb[];
  tableOfContents?: TableOfContentsItem[];
  cta?: {
    variant: 'inline' | 'banner';
    headline?: string;
    text?: string;
  };
  relatedArticles?: Array<{
    title: string;
    href: string;
    excerpt?: string;
    image?: string;
  }>;
  publishedAt?: string;
  modifiedAt?: string;
  authorBio?: {
    show?: boolean;
    text?: string;
  };
}

export function ArticleLayout({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  readingTime,
  lastUpdated,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  tableOfContents,
  cta,
  relatedArticles,
  publishedAt = new Date().toISOString(),
  modifiedAt = new Date().toISOString(),
  authorBio = { show: true },
}: ArticleLayoutProps): ReactNode {
  return (
    <article className="w-full">
      {/* Schema Markup */}
      <ArticleSchema
        title={title}
        description={subtitle}
        datePublished={publishedAt}
        dateModified={modifiedAt}
        image={image}
      />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema
          items={breadcrumbs.map((b) => ({
            name: b.label,
            url: b.href,
          }))}
        />
      )}

      {/* Breadcrumb Navigation */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]/60">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={`breadcrumb-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              <a
                href={breadcrumb.href}
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                {breadcrumb.label}
              </a>
            </div>
          ))}
        </nav>
      )}

      {/* Hero Section */}
      <header className="mb-12 border-b border-[var(--color-border)] pb-8 sm:pb-12">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
          {title}
        </h1>
        <p className="mb-6 text-xl sm:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          {subtitle}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[var(--color-text-secondary)]/60">
          {lastUpdated && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Updated {lastUpdated}</span>
            </div>
          )}

          {readingTime && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
              </svg>
              <span>{readingTime} min read</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Madrid Cannabis Guide</span>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Featured Image */}
          {image && (
            <div className="relative mb-10 rounded-lg overflow-hidden border border-[var(--color-border)] aspect-[16/9]">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
          )}

          {/* Prose Content */}
          <div className="prose prose-sm sm:prose-base max-w-none prose-invert mb-12">
            <style>{`
              .prose {
                --tw-prose-body: var(--color-text-primary);
                --tw-prose-headings: var(--color-cannabis-medium);
                --tw-prose-lead: var(--color-text-secondary);
                --tw-prose-links: var(--color-accent-amber);
                --tw-prose-bold: var(--color-text-primary);
                --tw-prose-counters: #9ca3af;
                --tw-prose-bullets: #374151;
                --tw-prose-hr: #4b5563;
                --tw-prose-quotes: #6b7280;
                --tw-prose-quote-borders: #4b5563;
                --tw-prose-captions: #6b7280;
                --tw-prose-code: var(--color-text-primary);
                --tw-prose-pre-code: var(--color-text-primary);
                --tw-prose-pre-bg: var(--color-bg-secondary);
                --tw-prose-th-borders: #4b5563;
                --tw-prose-td-borders: #4b5563;
              }

              .prose h2 {
                font-family: var(--font-heading);
                @apply text-2xl sm:text-3xl font-bold mt-10 mb-4;
                color: var(--color-text-primary);
              }

              .prose h3 {
                font-family: var(--font-heading);
                @apply text-xl sm:text-2xl font-semibold mt-8 mb-3;
                color: var(--color-text-primary);
              }

              .prose h4 {
                font-family: var(--font-heading);
                @apply text-lg font-semibold mt-6 mb-2;
                color: var(--color-text-primary);
              }

              .prose p {
                color: var(--color-text-secondary);
                @apply leading-relaxed mb-4;
              }

              .prose li {
                color: var(--color-text-secondary);
                @apply mb-2;
              }

              .prose ul, .prose ol {
                @apply pl-6 mb-6;
              }

              .prose strong {
                color: var(--color-text-primary);
                @apply font-semibold;
              }

              .prose em {
                color: var(--color-text-secondary);
                @apply italic;
              }

              .prose a {
                color: var(--color-accent-amber);
                @apply transition-colors underline underline-offset-2;
              }
              .prose a:hover {
                color: var(--color-cannabis-light);
              }

              .prose blockquote {
                border-left: 4px solid var(--color-accent-amber);
                @apply pl-6 py-2 my-6 italic;
                color: var(--color-text-secondary);
              }

              .prose code {
                background: var(--color-bg-secondary);
                color: var(--color-accent-amber);
                @apply px-2 py-1 rounded font-mono text-sm;
              }

              .prose pre {
                background: var(--color-bg-primary);
                @apply rounded-lg p-4 overflow-x-auto mb-6;
              }

              .prose pre code {
                background: transparent;
                color: var(--color-text-primary);
                @apply px-0 py-0 text-sm;
              }

              .prose table {
                @apply w-full border-collapse my-6;
              }

              .prose th {
                background: var(--color-bg-secondary);
                border: 1px solid var(--color-border);
                color: var(--color-text-primary);
                @apply px-4 py-2 text-left font-semibold;
              }

              .prose td {
                border: 1px solid var(--color-border);
                color: var(--color-text-secondary);
                @apply px-4 py-2;
              }

              .prose hr {
                border-top: 1px solid var(--color-border);
                @apply my-8;
              }
            `}</style>
            {children}
          </div>

          {/* Inline CTA */}
          {cta && cta.variant === 'inline' && (
            <div className="mb-12">
              <div className="rounded-lg border border-[var(--color-cannabis-dark)]/30 bg-gradient-to-br from-[var(--color-cannabis-dark)]/20 to-[var(--color-cannabis-dark)]/10 p-6 sm:p-8">
                <h3 className="mb-3 text-xl font-semibold text-[var(--color-text-primary)]">
                  {cta.headline || 'Get Your Club Invitation'}
                </h3>
                <p className="mb-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {cta.text || 'Discover exclusive cannabis clubs in Madrid and get direct access to verified locations.'}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                    className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-amber)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:brightness-110 active:scale-95"
                  >
                    Get Invited Now
                  </a>
                  <a
                    href="https://weedmadrid.com"
                    className="inline-flex items-center gap-2 text-[var(--color-accent-amber)] hover:text-[var(--color-cannabis-light)] text-sm font-medium transition-colors"
                  >
                    Browse all clubs on Weed Madrid
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Author Bio */}
          {authorBio?.show && (
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[var(--color-cannabis-dark)] to-[var(--color-accent-amber)]/30 flex-shrink-0 flex items-center justify-center">
                  <svg className="h-8 w-8 text-[var(--color-cannabis-light)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                    Madrid Cannabis Guide Team
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {authorBio?.text || "Your trusted resource for cannabis culture, legal information, and social guidance in Madrid. We're committed to providing accurate, up-to-date information for visitors and locals alike."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Table of Contents */}
          {tableOfContents && tableOfContents.length > 0 && (
            <aside className="mb-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sticky top-6">
              <h3 className="mb-4 font-semibold text-[var(--color-text-primary)] text-sm uppercase tracking-wide">
                Contents
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-amber)] transition-colors ${
                      item.level === 2 ? 'pl-0' : 'pl-4'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <aside className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
              <h3 className="mb-4 font-semibold text-[var(--color-text-primary)] text-sm uppercase tracking-wide">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article, index) => (
                  <a
                    key={`related-${index}`}
                    href={article.href}
                    className="block group rounded-md border border-[var(--color-border)] bg-[var(--color-bg-primary)]/50 p-4 hover:border-[var(--color-accent-amber)]/50 hover:bg-[var(--color-bg-primary)] transition-all"
                  >
                    {article.image && (
                      <div className="mb-3 rounded overflow-hidden h-32 bg-[var(--color-bg-secondary)]">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <h4 className="font-semibold text-[var(--color-text-primary)] text-sm mb-1 group-hover:text-[var(--color-accent-amber)] transition-colors">
                      {article.title}
                    </h4>
                    {article.excerpt && (
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {article.excerpt}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Banner CTA at bottom */}
      {cta && cta.variant === 'banner' && (
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <section className="relative w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cannabis-dark)]/40 via-[var(--color-cannabis-dark)]/30 to-[var(--color-accent-amber)]/20" />
            <div className="absolute inset-0 bg-cannabis-pattern" />
            <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                  {cta.headline || "Ready to Explore Madrid's Cannabis Scene?"}
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-text-secondary)]">
                  {cta.text || 'Get invited to verified cannabis clubs and discover the best social spaces in the city.'}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <a
                    href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                    className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-amber)] px-8 py-4 font-semibold text-[var(--color-bg-primary)] transition-all hover:brightness-110 active:scale-95 text-base sm:text-lg"
                  >
                    Get Your Club Invitation
                  </a>
                  <a
                    href="https://weedmadrid.com"
                    className="inline-flex items-center gap-2 px-6 py-4 text-[var(--color-accent-amber)] hover:text-[var(--color-cannabis-light)] font-medium transition-colors"
                  >
                    Browse all clubs on Weed Madrid
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
