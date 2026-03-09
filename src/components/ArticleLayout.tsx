import { ReactNode } from 'react';
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

/**
 * Article Layout Component
 * Comprehensive wrapper for article pages with SEO and UX features:
 * - Hero section with metadata
 * - Breadcrumb navigation
 * - Table of contents
 * - Prose content area with refined typography
 * - Sidebar/footer CTA
 * - Author bio
 * - Related articles section
 * - Schema markup for search engines
 */
export function ArticleLayout({
  title,
  subtitle,
  children,
  image,
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
        <nav className="mb-8 flex items-center gap-2 text-sm text-emerald-200/60">
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
                className="hover:text-emerald-100 transition-colors"
              >
                {breadcrumb.label}
              </a>
            </div>
          ))}
        </nav>
      )}

      {/* Hero Section */}
      <header className="mb-12 border-b border-emerald-900/30 pb-8 sm:pb-12">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-100 leading-tight">
          {title}
        </h1>
        <p className="mb-6 text-xl sm:text-2xl text-emerald-100/80 leading-relaxed max-w-3xl">
          {subtitle}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-emerald-100/60">
          {lastUpdated && (
            <div className="flex items-center gap-2">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Updated {lastUpdated}</span>
            </div>
          )}

          {readingTime && (
            <div className="flex items-center gap-2">
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
                  d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
                />
              </svg>
              <span>{readingTime} min read</span>
            </div>
          )}

          <div className="flex items-center gap-2">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
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
            <div className="mb-10 rounded-lg overflow-hidden border border-emerald-900/30">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Prose Content */}
          <div className="prose prose-sm sm:prose-base max-w-none prose-invert mb-12">
            <style>{`
              .prose {
                --tw-prose-body: rgb(232, 236, 233);
                --tw-prose-headings: rgb(16, 185, 129);
                --tw-prose-lead: rgb(179, 229, 252);
                --tw-prose-links: rgb(245, 158, 11);
                --tw-prose-bold: rgb(232, 236, 233);
                --tw-prose-counters: rgb(156, 163, 175);
                --tw-prose-bullets: rgb(55, 65, 81);
                --tw-prose-hr: rgb(75, 85, 99);
                --tw-prose-quotes: rgb(107, 114, 128);
                --tw-prose-quote-borders: rgb(75, 85, 99);
                --tw-prose-captions: rgb(107, 114, 128);
                --tw-prose-code: rgb(232, 236, 233);
                --tw-prose-pre-code: rgb(232, 236, 233);
                --tw-prose-pre-bg: rgb(17, 25, 22);
                --tw-prose-th-borders: rgb(75, 85, 99);
                --tw-prose-td-borders: rgb(75, 85, 99);
              }

              .prose h2 {
                @apply text-2xl sm:text-3xl font-bold text-emerald-100 mt-10 mb-4;
              }

              .prose h3 {
                @apply text-xl sm:text-2xl font-semibold text-emerald-100 mt-8 mb-3;
              }

              .prose h4 {
                @apply text-lg font-semibold text-emerald-100 mt-6 mb-2;
              }

              .prose p {
                @apply text-emerald-100/90 leading-relaxed mb-4;
              }

              .prose li {
                @apply text-emerald-100/90 mb-2;
              }

              .prose ul, .prose ol {
                @apply pl-6 mb-6;
              }

              .prose ul li:before {
                @apply bg-amber-400;
              }

              .prose strong {
                @apply text-emerald-100 font-semibold;
              }

              .prose em {
                @apply text-emerald-100/80 italic;
              }

              .prose a {
                @apply text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2;
              }

              .prose blockquote {
                @apply border-l-4 border-amber-400/50 pl-6 py-2 my-6 italic text-emerald-100/70;
              }

              .prose code {
                @apply px-2 py-1 bg-slate-800 rounded text-amber-100 font-mono text-sm;
              }

              .prose pre {
                @apply bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6;
              }

              .prose pre code {
                @apply px-0 py-0 bg-transparent text-emerald-100 text-sm;
              }

              .prose table {
                @apply w-full border-collapse my-6;
              }

              .prose th {
                @apply bg-emerald-950/40 border border-emerald-900/30 px-4 py-2 text-left font-semibold text-emerald-100;
              }

              .prose td {
                @apply border border-emerald-900/30 px-4 py-2 text-emerald-100/80;
              }

              .prose hr {
                @apply border-t border-emerald-900/30 my-8;
              }
            `}</style>
            {children}
          </div>

          {/* Inline CTA */}
          {cta && cta.variant === 'inline' && (
            <div className="mb-12">
              {/* Note: Import and use CTA component here */}
              <div className="rounded-lg border border-emerald-900/30 bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 p-6 sm:p-8">
                <h3 className="mb-3 text-xl font-semibold text-emerald-100">
                  {cta.headline || 'Get Your Club Invitation'}
                </h3>
                <p className="mb-6 text-sm text-emerald-100/80 leading-relaxed">
                  {cta.text ||
                    'Discover exclusive cannabis clubs in Madrid and get direct access to verified locations.'}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                    className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-amber-400 active:scale-95"
                  >
                    Get Invited Now
                  </a>
                  <a
                    href="https://weedmadrid.com"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                  >
                    Browse all clubs on Weed Madrid
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
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Author Bio */}
          {authorBio?.show && (
            <div className="rounded-lg border border-emerald-900/30 bg-slate-950/40 p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-900 to-amber-900 flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-emerald-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-emerald-100 mb-1">
                    Madrid Cannabis Guide Team
                  </h4>
                  <p className="text-sm text-emerald-100/70">
                    {authorBio?.text ||
                      "Your trusted resource for cannabis culture, legal information, and social guidance in Madrid. We're committed to providing accurate, up-to-date information for visitors and locals alike."}
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
            <aside className="mb-8 rounded-lg border border-emerald-900/30 bg-slate-950/40 p-6 sticky top-6">
              <h3 className="mb-4 font-semibold text-emerald-100 text-sm uppercase tracking-wide">
                Contents
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm text-emerald-100/70 hover:text-amber-400 transition-colors ${
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
            <aside className="rounded-lg border border-emerald-900/30 bg-slate-950/40 p-6">
              <h3 className="mb-4 font-semibold text-emerald-100 text-sm uppercase tracking-wide">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article, index) => (
                  <a
                    key={`related-${index}`}
                    href={article.href}
                    className="block group rounded-md border border-emerald-900/20 bg-emerald-950/20 p-4 hover:border-amber-500/50 hover:bg-emerald-950/40 transition-all"
                  >
                    {article.image && (
                      <div className="mb-3 rounded overflow-hidden h-32 bg-emerald-900/30">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <h4 className="font-semibold text-emerald-100 text-sm mb-1 group-hover:text-amber-400 transition-colors">
                      {article.title}
                    </h4>
                    {article.excerpt && (
                      <p className="text-xs text-emerald-100/60">
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
          {/* Note: Import and use CTA component here */}
          <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-emerald-800/30 to-amber-900/20" />
            <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-emerald-100 sm:text-4xl">
                  {cta.headline ||
                    "Ready to Explore Madrid's Cannabis Scene?"}
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-emerald-100/80">
                  {cta.text ||
                    'Get invited to verified cannabis clubs and discover the best social spaces in the city.'}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <a
                    href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                    className="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-4 font-semibold text-slate-950 transition-all hover:bg-amber-400 active:scale-95 text-base sm:text-lg"
                  >
                    Get Your Club Invitation
                  </a>
                  <a
                    href="https://weedmadrid.com"
                    className="inline-flex items-center gap-2 px-6 py-4 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    Browse all clubs on Weed Madrid
                    <svg
                      className="h-5 w-5"
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
