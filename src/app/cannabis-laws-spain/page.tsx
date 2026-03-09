import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { FAQSection } from '@/components/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cannabis Laws in Spain 2026 — What Tourists Need to Know',
  description:
    'Complete guide to cannabis laws in Spain 2026. Learn what\'s legal, penalties for violations, differences by region, and what tourists can and cannot do.',
  keywords: [
    'cannabis laws spain',
    'is weed legal in spain',
    'spain cannabis law 2026',
    'cannabis penalties spain',
    'cannabis social clubs legal spain',
  ],
  authors: [{ name: 'Madrid Cannabis Guide' }],
  openGraph: {
    type: 'article',
    url: 'https://madridcannabisguide.com/cannabis-laws-spain',
    title: 'Cannabis Laws in Spain 2026 — What Tourists Need to Know',
    description:
      'Complete guide to cannabis laws in Spain 2026. Learn what\'s legal, penalties for violations, and more.',
    images: [
      {
        url: 'https://madridcannabisguide.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cannabis Laws in Spain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis Laws in Spain 2026',
    description:
      'Complete guide to cannabis laws in Spain 2026. Learn what\'s legal and what\'s not.',
    images: ['https://madridcannabisguide.com/og-image.jpg'],
  },
  metadataBase: new URL('https://madridcannabisguide.com'),
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Cannabis Laws Spain', url: '/cannabis-laws-spain' },
];

const faqItems = [
  {
    question: 'Is cannabis completely legal in Spain?',
    answer:
      'No. Cannabis is decriminalized for private consumption, meaning personal use won\'t result in criminal charges. However, it\'s not fully legal. Public consumption, trafficking, and commercial sales remain illegal. Cannabis social clubs operate in a legal gray area—they\'re private associations, not commercial businesses, which is why they\'re tolerated by authorities.',
  },
  {
    question: 'Can I smoke weed in public in Spain?',
    answer:
      'No, public consumption is illegal and can result in administrative fines ranging from €601 to €30,000 depending on the severity. "Public" includes streets, parks, beaches, bars, and restaurants. Private spaces like your home or registered cannabis social clubs are different. Always check local rules—some regions enforce this more strictly than others.',
  },
  {
    question: 'What makes cannabis social clubs legal?',
    answer:
      'Cannabis social clubs are private member associations, not commercial businesses. Members pay fees to cover operational costs, not to purchase cannabis. The consumption happens within the private space of the club. This legal distinction is what allows them to operate despite cannabis not being fully legal. However, they still exist in a gray area and are constantly being reviewed by authorities.',
  },
  {
    question: 'Are there differences in cannabis laws between Spanish regions?',
    answer:
      'Yes. Catalonia (especially Barcelona) has been more liberal and has more established cannabis social clubs. Madrid is growing in this area but has more restrictions. Andalusia and other regions vary. Always check local regulations for the specific region you\'re in, as they can differ significantly from national law.',
  },
  {
    question: 'What happens if I\'m caught with cannabis for personal use?',
    answer:
      'If caught with a small amount for personal consumption, you won\'t face criminal charges. However, police can confiscate it, and you may receive an administrative fine (€300-600 for public possession). Larger amounts or evidence of dealing can result in criminal charges. Private consumption is not prosecuted, but possession in public spaces is.',
  },
];

export default function CannabisCannabisLawsPage() {
  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title="Cannabis Laws in Spain 2026 — What Tourists Need to Know"
        description="Complete guide to cannabis laws in Spain 2026. Learn what's legal, penalties for violations, and what tourists can do."
        datePublished="2026-01-15"
        dateModified="2026-03-09"
        url="https://madridcannabisguide.com/cannabis-laws-spain"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <main className="w-full bg-gradient-to-b from-[#0a0f0d] via-[#0a0f0d] to-[#111916]">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-16 sm:py-24 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
            <div className="absolute -bottom-32 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-emerald-400">
              <span>⚖️</span>
              <span>Legal Guide</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e8ece9] tracking-tight">
              Cannabis Laws in Spain 2026
            </h1>

            <p className="mb-8 text-lg sm:text-xl text-[#e8ece9]/80 leading-relaxed">
              What tourists and residents need to know about cannabis legality, penalties, and the legal status of social clubs in Spain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#e8ece9]/70">
              <span>📅 Updated March 2026</span>
              <span>⏱️ 8 min read</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <article className="mx-auto max-w-4xl space-y-16">
            {/* Section: Is Cannabis Legal in Spain? */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Is Cannabis Legal in Spain?
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  The short answer: <strong className="text-[#e8ece9]">it's complicated</strong>. Spain has one of Europe's most progressive cannabis policies, but it's not straightforward.
                </p>

                <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-6">
                  <h3 className="mb-4 font-semibold text-emerald-100">Here's the distinction:</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                      <span><strong>Private consumption:</strong> Decriminalized. No criminal charges if caught with small amounts for personal use.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-400 font-bold flex-shrink-0">⚠</span>
                      <span><strong>Public consumption:</strong> Illegal. Can result in fines €601–€30,000.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                      <span><strong>Sale/trafficking:</strong> Illegal. Criminal penalties apply.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">?</span>
                      <span><strong>Cannabis social clubs:</strong> Legal gray area. Private associations tolerated by authorities.</span>
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed">
                  Spain decriminalized cannabis for personal use in the 1990s, and courts have consistently ruled that private consumption in spaces where third parties can't access cannabis (your home, a private club) isn't prosecutable. This is the foundation of the cannabis social club scene.
                </p>
              </div>
            </section>

            {/* Section: Cannabis Social Clubs Legal Framework */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Cannabis Social Clubs: The Legal Framework
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Cannabis social clubs are the only legal way to consume cannabis in Spain. They exist in a complex legal space that authorities have largely tolerated, especially in regions like Catalonia and Madrid.
                </p>

                <h3 className="text-xl font-semibold text-[#e8ece9]">How They Legally Operate</h3>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9] mb-2">Private Association</h4>
                      <p className="text-sm leading-relaxed">Clubs are registered as private, non-profit member associations, not commercial businesses. This legal distinction is crucial.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9] mb-2">Member Contributions</h4>
                      <p className="text-sm leading-relaxed">Members pay fees to cover operational costs (rent, utilities, staff), not to purchase cannabis. The financial model is transparent membership, not sales.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9] mb-2">Private Space</h4>
                      <p className="text-sm leading-relaxed">Consumption happens in registered private spaces where access is restricted to members. No public consumption, advertising, or external sales.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9] mb-2">Self-Growing</h4>
                      <p className="text-sm leading-relaxed">Clubs cultivate cannabis collectively for member consumption. Growing for personal use is legal; growing for sale is not.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-6 mt-8">
                  <p className="text-sm text-amber-100/90">
                    <strong>Important:</strong> While this model is tolerated by authorities, cannabis social clubs don't have explicit legal protection in Spanish law. They operate in a gray area, constantly subject to political and judicial scrutiny.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: What Tourists Need to Know */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                What Tourists Need to Know
              </h2>

              <div className="space-y-8 text-[#e8ece9]/80">
                <div>
                  <h3 className="text-lg font-semibold text-[#e8ece9] mb-4">✓ What You CAN Do</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>Join a registered cannabis social club with an invitation from a member</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>Consume cannabis privately inside a club in designated areas</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>Possess cannabis for personal consumption in private spaces</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 flex-shrink-0">→</span>
                      <span>Consume cannabis in your private residence if you're renting legally</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#e8ece9] mb-4">✗ What You CANNOT Do</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Smoke in public spaces (streets, parks, beaches, bars, restaurants)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Buy cannabis on the street or from dealers</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Travel with cannabis across borders or on planes</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Grow cannabis without a legal permit (even for personal use)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Sell, distribute, or traffic in cannabis</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm leading-relaxed italic pt-4 border-t border-[#1a2420]">
                  The key distinction: consumption is decriminalized and tolerated in private spaces. Everything else—public consumption, possession in public, buying on the street, selling—remains illegal and can result in fines or criminal charges.
                </p>
              </div>
            </section>

            {/* Section: Penalties for Public Consumption */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Penalties for Public Consumption & Violations
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Spain treats cannabis violations as administrative infractions, not criminal offenses (unless dealing/trafficking). Here's what you need to know:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a2420]">
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Violation</th>
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Fine Range</th>
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Smoking in public</td>
                        <td className="py-4 px-4">€601–€30,000</td>
                        <td className="py-4 px-4 text-xs">Varies by region and severity</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Possession in public</td>
                        <td className="py-4 px-4">€300–€600</td>
                        <td className="py-4 px-4 text-xs">Minor possession for personal use</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Possession with intent to sell</td>
                        <td className="py-4 px-4">Criminal charges</td>
                        <td className="py-4 px-4 text-xs">Prison time possible</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4">Trafficking/Distribution</td>
                        <td className="py-4 px-4">Criminal charges</td>
                        <td className="py-4 px-4 text-xs">3–15+ years prison</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-6 mt-8">
                  <p className="text-sm text-red-100/90">
                    <strong>⚠️ Important for Tourists:</strong> Fines are enforceable and collected. A €600 fine for public smoking isn't a warning—it's an actual penalty. Always follow local rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Regional Differences */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Regional Differences in Spain
              </h2>

              <div className="space-y-8 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  While national law is consistent, enforcement and local attitudes toward cannabis vary significantly by region:
                </p>

                <div className="space-y-5">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h3 className="font-semibold text-emerald-100 mb-2">Catalonia (Barcelona)</h3>
                    <p className="text-sm leading-relaxed">Most liberal region. Barcelona has 100+ cannabis social clubs and a well-established culture. Authorities are accustomed to clubs and generally tolerate them.</p>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h3 className="font-semibold text-emerald-100 mb-2">Madrid</h3>
                    <p className="text-sm leading-relaxed">Growing cannabis club scene, but stricter enforcement than Barcelona. Clubs exist but are more careful about discretion. Still very accessible for tourists.</p>
                  </div>

                  <div className="rounded-lg bg-amber-950/20 border border-amber-900/30 p-6">
                    <h3 className="font-semibold text-amber-100 mb-2">Andalusia (Seville, Granada)</h3>
                    <p className="text-sm leading-relaxed">Moderate presence of cannabis clubs. Tourism-heavy regions like these have clubs but enforcement can be stricter. Always be discreet.</p>
                  </div>

                  <div className="rounded-lg bg-amber-950/20 border border-amber-900/30 p-6">
                    <h3 className="font-semibold text-amber-100 mb-2">Basque Country, Galicia</h3>
                    <p className="text-sm leading-relaxed">Growing legalization movements. Clubs exist but fewer than Barcelona or Madrid. Local attitudes are generally progressive.</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed italic pt-6 border-t border-[#1a2420]">
                  <strong>Bottom line:</strong> If you're visiting Madrid, you're in a good position—the city has a solid cannabis club infrastructure and growing acceptance. Always ask about local rules before traveling to other regions.
                </p>
              </div>
            </section>

            {/* Section: Recent Legal Developments */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Recent Legal Developments 2025–2026
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Spain's cannabis laws are evolving. Here are the key trends:
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-emerald-400 font-bold flex-shrink-0">📍</span>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9]">Growing acceptance of clubs</h4>
                      <p className="text-sm text-[#e8ece9]/70 mt-1">More cities are developing regulatory frameworks for cannabis social clubs rather than banning them outright.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-emerald-400 font-bold flex-shrink-0">📍</span>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9]">Medical cannabis legalization</h4>
                      <p className="text-sm text-[#e8ece9]/70 mt-1">Spain has expanded medical cannabis access. This is separate from recreational clubs but shows a policy shift.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-emerald-400 font-bold flex-shrink-0">📍</span>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9]">Madrid's position</h4>
                      <p className="text-sm text-[#e8ece9]/70 mt-1">The city government has been debating regulations. Currently, clubs operate but lack formal regulation—expect clarity in 2026.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="text-emerald-400 font-bold flex-shrink-0">📍</span>
                    <div>
                      <h4 className="font-semibold text-[#e8ece9]">EU-level discussions</h4>
                      <p className="text-sm text-[#e8ece9]/70 mt-1">Spain is part of broader EU conversations about cannabis policy. Dutch-style regulation is being discussed.</p>
                    </div>
                  </li>
                </ul>

                <p className="text-sm leading-relaxed italic pt-6 border-t border-[#1a2420]">
                  The trajectory is clear: Spain is moving toward more regulated, not less, cannabis access. Social clubs are likely to become more formalized in the next few years.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <div className="mt-16">
              <CTA
                variant="inline"
                headline="Ready to Join Madrid's Cannabis Community?"
                text="Get your invitation to a verified cannabis social club and experience the legal way to enjoy cannabis in Spain."
              />
            </div>

            {/* Internal Links */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916]/50 p-8 sm:p-10 mt-16">
              <h3 className="mb-6 text-lg font-semibold text-emerald-100">Related Articles</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/how-to-join-cannabis-club"
                  className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all"
                >
                  <div className="text-xl">👥</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">
                      How to Join a Cannabis Club
                    </h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Step-by-step membership guide</p>
                  </div>
                  <svg className="h-5 w-5 text-emerald-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/cannabis-club-etiquette"
                  className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all"
                >
                  <div className="text-xl">🤝</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">
                      Cannabis Club Etiquette
                    </h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Rules and respect guidelines</p>
                  </div>
                  <svg className="h-5 w-5 text-emerald-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 sm:py-20 lg:py-24 bg-[#0a0f0d]">
          <FAQSection
            items={faqItems}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about cannabis laws in Spain"
            includeSchema={true}
          />
        </section>

        {/* Bottom CTA */}
        <section className="px-4 py-12 sm:py-16 lg:py-20 bg-[#111916]">
          <CTA
            variant="banner"
            headline="Want to Experience Cannabis Legally in Madrid?"
            text="Join thousands of tourists and locals who enjoy cannabis responsibly in Madrid's cannabis social clubs. Get your invitation today."
          />
        </section>
      </main>
    </>
  );
}
