import { ReactNode } from 'react';

interface CTAProps {
  variant: 'inline' | 'banner';
  headline?: string;
  text?: string;
  className?: string;
}

export function CTA({ variant, headline, text, className = '' }: CTAProps): ReactNode {
  if (variant === 'inline') {
    return <InlineCTA headline={headline} text={text} className={className} />;
  }
  return <BannerCTA headline={headline} text={text} className={className} />;
}

function InlineCTA({
  headline = 'Get Your Club Invitation',
  text = 'Discover exclusive cannabis clubs in Madrid and get direct access to verified locations.',
  className = '',
}: Omit<CTAProps, 'variant'>): ReactNode {
  return (
    <div className={`rounded-lg border border-[var(--color-cannabis-dark)]/30 bg-gradient-to-br from-[var(--color-cannabis-dark)]/20 to-[var(--color-cannabis-dark)]/10 p-6 sm:p-8 ${className}`}>
      <h3 className="mb-3 text-xl font-semibold text-[var(--color-text-primary)]">{headline}</h3>
      <p className="mb-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">{text}</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
          className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent-amber)] px-6 py-3 font-semibold text-[var(--color-bg-primary)] transition-all hover:brightness-110 active:scale-95"
          aria-label="Get your club invitation"
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
  );
}

function BannerCTA({
  headline = "Ready to Explore Madrid's Cannabis Scene?",
  text = 'Get invited to verified cannabis clubs and discover the best social spaces in the city.',
  className = '',
}: Omit<CTAProps, 'variant'>): ReactNode {
  return (
    <section className={`relative w-full overflow-hidden rounded-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cannabis-dark)]/40 via-[var(--color-cannabis-dark)]/30 to-[var(--color-accent-amber)]/20" />
      <div className="absolute inset-0 bg-cannabis-pattern" />
      <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">{headline}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-text-secondary)]">{text}</p>
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
  );
}
