import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "Guides",
    links: [
      { label: "Cannabis Laws in Madrid", href: "#laws" },
      { label: "How to Join Cannabis Clubs", href: "#join" },
      { label: "Best Neighborhoods", href: "#neighborhoods" },
      { label: "Cannabis Etiquette Guide", href: "#etiquette" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Find Clubs on Weed Madrid",
        href: "https://weedmadrid.com",
        external: true,
      },
      {
        label: "Club Invitations",
        href: "https://madridcannabisclubs.com",
        external: true,
      },
      { label: "Prices & Strains", href: "#prices" },
      { label: "Madrid vs Amsterdam", href: "#comparison" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] mt-20">
      {/* Legal Notice */}
      <div className="bg-[var(--color-bg-primary)]/50 border-b border-[var(--color-border)] px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto text-sm text-[var(--color-text-secondary)] space-y-2">
          <p className="font-semibold text-[var(--color-cannabis-light)]">
            Important Legal Disclaimer
          </p>
          <p>
            Cannabis is legal in Spain for personal consumption in private spaces and through cannabis clubs. However, laws vary by region and change frequently. This guide is for informational purposes only and does not constitute legal advice. Always verify current laws with official Spanish government sources.
          </p>
          <p>
            This site is intended for adults 18+ only. By accessing this site, you confirm you are of legal age in your jurisdiction. We comply with GDPR and do not collect personal data without consent.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-6 h-6 text-[var(--color-cannabis-medium)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-label="Cannabis leaf"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <div>
                <p className="font-bold text-[var(--color-text-primary)]">
                  Madrid Cannabis Guide
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  2026
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Your complete guide to cannabis culture, clubs, and etiquette in
              Madrid.
            </p>
          </div>

          {/* Footer Links */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-cannabis-light)] transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-border)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--color-text-secondary)]">
              © {currentYear} Madrid Cannabis Guide. All rights reserved.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Discover cannabis clubs worldwide on{" "}
              <Link
                href="https://weedmadrid.com"
                className="text-[var(--color-cannabis-medium)] hover:text-[var(--color-cannabis-light)] transition-colors font-medium"
              >
                Weed Madrid
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
