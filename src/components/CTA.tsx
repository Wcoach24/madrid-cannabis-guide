import { ReactNode } from 'react';

interface CTAProps {
  variant: 'inline' | 'banner';
  headline?: string;
  text?: string;
  className?: string;
}

/**
 * CTA Component
 * Renders call-to-action sections with two variants:
 * - inline: Card-style CTA for embedding in content
 * - banner: Full-width section for page bottom
 */
export function CTA({
  variant,
  headline,
  text,
  className = '',
}: CTAProps): ReactNode {
  if (variant === 'inline') {
    return (
      <InlineCTA headline={headline} text={text} className={className} />
    );
  }

  return <BannerCTA headline={headline} text={text} className={className} />;
}

/**
 * Inline CTA - Card variant for embedding in content
 */
function InlineCTA({
  headline = 'Get Your Club Invitation',
  text = 'Discover exclusive cannabis clubs in Madrid and get direct access to verified locations.',
  className = '',
}: Omit<CTAProps, 'variant'>): ReactNode {
  return (
    <div
      className={`rounded-lg border border-emerald-900/30 bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 p-6 sm:p-8 ${className}`}
    >
      <h3 className="mb-3 text-xl font-semibold text-emerald-100">
        {headline}
      </h3>
      <p className="mb-6 text-sm text-emerald-100/80 leading-relaxed">
        {text}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="https://madridcannabisclubs.com"
          className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-amber-400 active:scale-95"
          aria-label="Get your club invitation"
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
  );
}

/**
 * Banner CTA - Full-width section variant for page bottom
 */
function BannerCTA({
  headline = "Ready to Explore Madrid's Cannabis Scene?",
  text = 'Get invited to verified cannabis clubs and discover the best social spaces in the city.',
  className = '',
}: Omit<CTAProps, 'variant'>): ReactNode {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-emerald-800/30 to-amber-900/20" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.1)_25%,rgba(16,185,129,0.1)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.1)_75%,rgba(16,185,129,0.1))] bg-[length:40px_40px] opacity-10" />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-emerald-100 sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-emerald-100/80">
            {text}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="https://madridcannabisclubs.com"
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
  );
}
