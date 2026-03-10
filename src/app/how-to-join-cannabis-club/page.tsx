import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { FAQSection } from '@/components/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'How to Join a Cannabis Club in Madrid (2026)',
  description:
    'Complete step-by-step guide to joining a cannabis social club in Madrid in 2026. Learn about membership requirements, the invitation process, and what to expect on your first visit.',
  keywords: [
    'how to join cannabis club madrid',
    'cannabis club membership madrid',
    'join weed club madrid',
    'cannabis club invitation madrid',
    'madrid cannabis club requirements',
  ],
  authors: [{ name: 'Madrid Cannabis Guide' }],
  alternates: {
    canonical: 'https://madridcannabisguide.com/how-to-join-cannabis-club',
  },
  openGraph: {
    type: 'article',
    url: 'https://madridcannabisguide.com/how-to-join-cannabis-club',
    locale: 'en_US',
    title: 'How to Join a Cannabis Club in Madrid (2026)',
    description:
      'Complete guide to joining a cannabis social club in Madrid. Learn membership requirements and the full process.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/madrid-cannabis-guide/friends-welcome-join-v2',
        width: 1200,
        height: 630,
        alt: 'How to Join a Cannabis Club in Madrid — Step-by-Step Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Cannabis Club Madrid 2026',
    description: 'Step-by-step guide to joining a cannabis club in Madrid.',
    images: ['https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/madrid-cannabis-guide/friends-welcome-join-v2'],
  },
  metadataBase: new URL('https://madridcannabisguide.com'),
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'How to Join', url: '/how-to-join-cannabis-club' },
];

const faqItems = [
  {
    question: 'Do I need an invitation to join a cannabis club?',
    answer:
      'Yes, technically you need an invitation from an existing member. However, most clubs have systems to help tourists get invitations. You can contact clubs directly online, request an invitation through their website, or use club referral services. It\'s not as difficult as it sounds.',
  },
  {
    question: 'What documents do I need to bring?',
    answer:
      'Bring a valid photo ID (passport, national ID card, or driver\'s license), proof of age (18+), and cash for your membership fee. Some clubs may accept credit cards, but cash is safer and more discrete. Bring €20-50 for your first visit.',
  },
  {
    question: 'How much does membership cost?',
    answer:
      'Membership fees typically range from €5-50, depending on the club. Most clubs charge €15-30 for an annual membership. Some offer lifetime memberships for €30-100. Additional contributions might be required for consumption amounts, which are usually reasonable (€5-15 per session).',
  },
  {
    question: 'Can tourists join or do I need to be a resident?',
    answer:
      'Tourists can absolutely join cannabis clubs in Madrid. In fact, tourism is a significant part of the club business model. You just need a valid passport and an invitation or direct request to the club. Many clubs have online forms for tourists to request membership.',
  },
  {
    question: 'What happens on my first visit?',
    answer:
      'You\'ll arrive with your invitation or after contacting the club. Staff will verify your ID and age, explain club rules, have you sign a membership form, and collect your fee. Then you\'ll be shown the consumption area, introduced to how the club works, and you can start using the space. Most first visits take 15-20 minutes for check-in.',
  },
];

export default function HowToJoinCannabisClubPage() {
  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title="How to Join a Cannabis Club in Madrid — Step-by-Step Guide"
        description="Complete guide to joining a cannabis social club in Madrid. Learn membership requirements, the invitation process, and what to expect."
        datePublished="2026-01-20"
        dateModified="2026-03-09"
        url="https://madridcannabisguide.com/how-to-join-cannabis-club"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* HowTo Schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Join a Cannabis Club in Madrid",
            description: "Step-by-step guide to joining a cannabis social club in Madrid, Spain as a tourist or resident.",
            totalTime: "PT1H",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: "20",
            },
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Research and Choose a Club",
                text: "Browse online platforms and trusted directories to find a reputable cannabis club in Madrid that fits your preferences for location, atmosphere, and product selection.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Get an Invitation",
                text: "Request an invitation through the club's website or from an existing member. Fill in your basic information and preferred visit date.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Prepare Your Documents",
                text: "Gather your valid photo ID (passport, national ID, or driver's license), proof you are 18+, and cash for the membership fee (€15-30).",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Visit the Club",
                text: "Bring your invitation and ID to the club. Complete the short onboarding process, pay your membership fee, and receive your membership card.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Enjoy Responsibly",
                text: "Follow club etiquette, respect other members' privacy, consume only within the club premises, and never take products outside.",
              },
            ],
          }),
        }}
      />

      <main className="w-full bg-gradient-to-b from-[#0a0f0d] via-[#0a0f0d] to-[#111916]">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-16 sm:py-24 md:py-32">
          <div className="absolute inset-0 -z-20"><Image src="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1200/madrid-cannabis-guide/friends-welcome-join-v2" alt="Diverse group of friends welcoming new member at a social club in Madrid showing how to join a cannabis club" fill className="object-cover" sizes="100vw" priority /></div><div className="absolute inset-0 -z-15 bg-[#0a0f0d]/75" /><div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
            <div className="absolute -bottom-32 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-emerald-400">
              <span>👥</span>
              <span>Membership Guide</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e8ece9] tracking-tight">
              How to Join a Cannabis Club in Madrid
            </h1>

            <p className="mb-8 text-lg sm:text-xl text-[#e8ece9]/80 leading-relaxed">
              Complete step-by-step guide to joining Madrid's cannabis social clubs. From getting an invitation to your first visit—everything you need to know.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#e8ece9]/70">
              <span>📅 Updated March 2026</span>
              <span>⏱️ 10 min read</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <article className="mx-auto max-w-4xl space-y-16">
            {/* Section: What Are Cannabis Social Clubs? */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                What Are Cannabis Social Clubs?
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Cannabis social clubs are private, member-based associations where adults (18+) can legally consume cannabis in a controlled, private environment. They're the only fully legal way to access cannabis in Spain.
                </p>

                <div className="rounded-lg bg-emerald-950/30 border border-emerald-900/30 p-6">
                  <h3 className="mb-4 font-semibold text-emerald-100">Key Characteristics:</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">•</span>
                      <span><strong>Private associations:</strong> Not commercial businesses, but member-run clubs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">•</span>
                      <span><strong>Members-only:</strong> You must be a registered member to access the space</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">•</span>
                      <span><strong>Safe environment:</strong> Supervised spaces with rules and responsible consumption culture</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">•</span>
                      <span><strong>Affordable:</strong> Low membership fees (€5-50) and reasonable consumption contributions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">•</span>
                      <span><strong>Diverse community:</strong> Mix of locals, tourists, professionals, and students</span>
                    </li>
                  </ul>
                </div>

                <p className="leading-relaxed text-sm italic border-t border-[#1a2420] pt-6">
                  Cannabis social clubs are vastly different from street dealers. They're organized, safe, <Link href="/cannabis-laws-spain" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">legal (in a gray area)</Link>, and focused on responsible community consumption. Make sure to read our <Link href="/cannabis-club-etiquette" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">etiquette guide</Link> before your first visit.
                </p>
              </div>
            </section>

            {/* Section: Requirements */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Membership Requirements
              </h2>

              <div className="space-y-8 text-[#e8ece9]/80">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <div className="text-3xl mb-3">🔞</div>
                    <h3 className="font-semibold text-emerald-100 mb-2">Age (18+)</h3>
                    <p className="text-sm leading-relaxed">You must be at least 18 years old. A valid government-issued photo ID is required to verify age. No exceptions.</p>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <div className="text-3xl mb-3">🪪</div>
                    <h3 className="font-semibold text-emerald-100 mb-2">Valid ID</h3>
                    <p className="text-sm leading-relaxed">Passport, national ID card, or driver's license. For tourists, a passport is most common. ID must not be expired.</p>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <div className="text-3xl mb-3">✍️</div>
                    <h3 className="font-semibold text-emerald-100 mb-2">Membership Form</h3>
                    <p className="text-sm leading-relaxed">You'll sign a membership agreement confirming you understand club rules and will consume responsibly. Usually a quick 1-page form.</p>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <div className="text-3xl mb-3">💵</div>
                    <h3 className="font-semibold text-emerald-100 mb-2">Membership Fee</h3>
                    <p className="text-sm leading-relaxed">€5-50 annual membership (usually €15-30). Cash preferred. Some clubs offer lifetime memberships for €30-100.</p>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <div className="text-3xl mb-3">🎫</div>
                    <h3 className="font-semibold text-emerald-100 mb-2">Invitation or Request</h3>
                    <p className="text-sm leading-relaxed">Most clubs accept direct requests from tourists. Contact them online, visit in person, or use their invitation request system.</p>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <div className="text-3xl mb-3">📖</div>
                    <h3 className="font-semibold text-emerald-100 mb-2">Know the Rules</h3>
                    <p className="text-sm leading-relaxed">You'll receive a club rulebook or explanation. Key rules: respect other members, don't share cannabis outside the club, follow consumption guidelines.</p>
                  </div>
                </div>

                <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-6 mt-8">
                  <p className="text-sm text-amber-100/90">
                    <strong>Note:</strong> Each club has slightly different requirements. Most are flexible with tourists. Contact your chosen club directly to confirm their specific requirements before visiting.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Step-by-Step Process */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Step-by-Step Process: 5 Easy Steps
              </h2>

              <div className="space-y-8 text-[#e8ece9]/80">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-950/40 text-2xl font-bold text-emerald-400">
                        1
                      </div>
                      <div className="mt-4 h-32 w-0.5 bg-emerald-500/30"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Get an Invitation (or Request One)</h3>
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                          Technically, you need an invitation from an existing member. But here's the good news: most Madrid clubs have systems for tourists to request membership directly:
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-3">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Visit the club's website and fill out a membership request form</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Call or WhatsApp the club directly (most have contact info online)</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Visit the club in person and ask to join (you'll often be processed immediately)</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-emerald-400 flex-shrink-0">→</span>
                            <span>Use referral services like {' '}<a href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid" className="text-amber-400 hover:text-amber-300" target="_blank" rel="noopener">weedmadrid.com</a> to get connected</span>
                          </li>
                        </ul>
                        <p className="text-sm leading-relaxed italic pt-2 border-t border-[#1a2420]">
                          <strong>Timeline:</strong> Instant to 24 hours if requesting online; immediate if visiting in person.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-950/40 text-2xl font-bold text-emerald-400">
                        2
                      </div>
                      <div className="mt-4 h-32 w-0.5 bg-emerald-500/30"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Gather Your Documents</h3>
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                          Before your first visit, prepare these documents:
                        </p>
                        <div className="bg-emerald-950/20 rounded-lg p-4 space-y-2 text-sm">
                          <div className="flex gap-3">
                            <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                            <span><strong>Valid passport</strong> (for tourists) or national ID</span>
                          </div>
                          <div className="flex gap-3">
                            <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                            <span><strong>Cash</strong> for membership and consumption (€20-50 recommended)</span>
                          </div>
                          <div className="flex gap-3">
                            <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                            <span><strong>Your confirmation/invitation</strong> (email, screenshot, or club acceptance)</span>
                          </div>
                        </div>
                        <p className="text-sm text-[#e8ece9]/70">
                          No credit card? Bring cash. No invitation email? The club will note your name in their system, or you'll be welcomed as a walk-in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-950/40 text-2xl font-bold text-emerald-400">
                        3
                      </div>
                      <div className="mt-4 h-32 w-0.5 bg-emerald-500/30"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Visit the Club</h3>
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                          Locate the club and arrive during their hours of operation (usually afternoon/evening, closed mornings). Look for discreet entrances—clubs don't have obvious storefronts for privacy reasons.
                        </p>
                        <div className="bg-emerald-950/20 rounded-lg p-4 space-y-3 text-sm">
                          <p><strong>What to expect:</strong></p>
                          <ul className="space-y-2">
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Door buzzer or intercom (ring and introduce yourself)</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Staff member greets you, verifies your ID</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>You'll be shown to reception/office area</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-950/40 text-2xl font-bold text-emerald-400">
                        4
                      </div>
                      <div className="mt-4 h-32 w-0.5 bg-emerald-500/30"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Complete Membership</h3>
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                          This is the official part. The club staff will:
                        </p>
                        <div className="bg-emerald-950/20 rounded-lg p-4 space-y-3 text-sm">
                          <ul className="space-y-2">
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">1.</span>
                              <span><strong>Check your ID</strong> and verify your age</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">2.</span>
                              <span><strong>Have you sign a membership form</strong> (1-2 pages, standard agreement)</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">3.</span>
                              <span><strong>Collect your membership fee</strong> (€15-30 typically, cash preferred)</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">4.</span>
                              <span><strong>Explain club rules</strong> (consumption areas, responsible use, respect)</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">5.</span>
                              <span><strong>Show you the space</strong> (lounge, consumption area, facilities)</span>
                            </li>
                          </ul>
                        </div>
                        <p className="text-sm text-[#e8ece9]/70">
                          This process typically takes 15-20 minutes. Friendly staff will answer questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-950/40 text-2xl font-bold text-emerald-400">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Enjoy & Contribute</h3>
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">
                          You're now a member. You can use the club's facilities and consume cannabis responsibly. When you consume, you'll make a contribution (€5-15 per session, typically) to cover the cannabis and operational costs.
                        </p>
                        <div className="bg-emerald-950/20 rounded-lg p-4 space-y-3 text-sm">
                          <p><strong>What you get:</strong></p>
                          <ul className="space-y-2">
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Access to safe, legal consumption space</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Community of like-minded adults</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Quality-controlled cannabis</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Comfortable lounge and social spaces</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-emerald-400 flex-shrink-0">•</span>
                              <span>Often: snacks, drinks, WiFi, comfortable seating</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: First Visit Experience */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Your First Visit: What to Expect
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Your first visit to a cannabis club is an experience. Here's what typically happens from start to finish:
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/10 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🚪 Entry & Check-In (5 min)</h4>
                    <p className="text-sm leading-relaxed">You'll ring the buzzer, be asked who you are, and the door will unlock. Inside, staff greets you warmly. The vibe is professional but friendly. No judgment—just business.</p>
                  </div>

                  <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/10 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">📋 Paperwork (5 min)</h4>
                    <p className="text-sm leading-relaxed">Fill out a membership form (standard legal protection for the club). You'll be asked to agree to rules: no fighting, no dealing, consume only in designated areas, respect other members.</p>
                  </div>

                  <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/10 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">💵 Payment (2 min)</h4>
                    <p className="text-sm leading-relaxed">Pay your membership fee (€15-30, usually). They'll explain consumption contributions (€5-10 per gram, roughly). Cash is preferred and discrete.</p>
                  </div>

                  <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/10 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🏠 Tour (3 min)</h4>
                    <p className="text-sm leading-relaxed">You'll be shown the lounge area, seating, restrooms, and consumption zone. Most clubs have comfortable couches, TV, WiFi. Some have snacks and drinks available. It's a proper social club vibe.</p>
                  </div>

                  <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/10 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🍃 Browse & Choose (5 min)</h4>
                    <p className="text-sm leading-relaxed">Staff will show you available cannabis options. You'll see different strains, potencies, and pricing. Ask questions—staff are knowledgeable and happy to recommend. Most clubs have menu boards or catalogs.</p>
                  </div>

                  <div className="rounded-lg border border-emerald-900/30 bg-emerald-950/10 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🌬️ Consume & Relax (As long as you want)</h4>
                    <p className="text-sm leading-relaxed">You can now enjoy your cannabis in the lounge. Many members chat, watch TV, or just relax. The atmosphere is chill and social. You can stay for 30 minutes or several hours. No rush. No judgment.</p>
                  </div>
                </div>

                <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-6 mt-8">
                  <p className="text-sm text-amber-100/90">
                    <strong>Pro tip:</strong> Your first visit might feel a bit nerve-wracking, but clubs are used to welcoming first-timers. Staff are professionals and want you to feel comfortable. Most visits are low-key and welcoming.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Costs Breakdown */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Cost Breakdown: Budget Your First Visit
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Joining a cannabis club is very affordable. Here's what you can expect to spend:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a2420]">
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Item</th>
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Cost</th>
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4 font-semibold">Membership Fee</td>
                        <td className="py-4 px-4">€15–30</td>
                        <td className="py-4 px-4 text-xs">Annual, one-time cost</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4 font-semibold">Consumption Contribution</td>
                        <td className="py-4 px-4">€5–15</td>
                        <td className="py-4 px-4 text-xs">Per session/gram</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold"><strong>First Visit Total</strong></td>
                        <td className="py-4 px-4 font-semibold"><strong>€20–45</strong></td>
                        <td className="py-4 px-4 text-xs font-semibold">For membership + 1 consumption</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                  <h4 className="font-semibold text-emerald-100 mb-3">Budget Breakdown for €30 Spend:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-between">
                      <span>Membership</span>
                      <span className="text-emerald-400">€20</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>1g quality cannabis (€8-10)</span>
                      <span className="text-emerald-400">€10</span>
                    </li>
                    <li className="border-t border-emerald-900/30 mt-2 pt-2 flex items-center justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-emerald-400">€30</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm leading-relaxed italic">
                  Compared to street dealers or tourist-targeted vendors, cannabis clubs are incredibly affordable and transparent about pricing. For a detailed breakdown, see our <Link href="/prices-what-to-expect" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">complete price guide</Link>.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <div className="mt-16">
              <CTA
                variant="inline"
                headline="Request Your Club Invitation"
                text="Don't wait. Get connected to Madrid's best cannabis social clubs and complete your membership application today."
              />
            </div>

            {/* External Links Section */}
            <section className="rounded-lg border border-amber-900/30 bg-gradient-to-br from-amber-950/20 to-emerald-950/10 p-8 sm:p-10 mt-16">
              <h3 className="mb-4 text-xl font-bold text-amber-100">Skip the Research — Get Connected Now</h3>
              <p className="mb-6 text-sm text-[#e8ece9]/70">Ready to join a cannabis club today? Get an instant invitation to a verified club in Madrid's best neighborhood.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors"
                >
                  🎫 Get Your Club Invitation
                </a>
                <a
                  href="https://www.weedmadrid.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700/50 hover:bg-emerald-950/30 px-6 py-3 text-sm font-semibold text-emerald-100 transition-colors"
                >
                  📋 Browse Club Directory
                </a>
              </div>
            </section>

            {/* Internal Links */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916]/50 p-8 sm:p-10 mt-16">
              <h3 className="mb-6 text-lg font-semibold text-emerald-100">Continue Reading</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/cannabis-laws-spain" className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all">
                  <div className="text-xl">⚖️</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">Cannabis Laws in Spain</h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Legal framework and what's allowed</p>
                  </div>
                </Link>
                <Link href="/cannabis-club-etiquette" className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all">
                  <div className="text-xl">🤝</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">Cannabis Club Etiquette</h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Rules, tips & what to expect</p>
                  </div>
                </Link>
                <Link href="/best-neighborhoods-cannabis-madrid" className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all">
                  <div className="text-xl">📍</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">Best Neighborhoods</h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Where to find clubs in Madrid</p>
                  </div>
                </Link>
                <Link href="/prices-what-to-expect" className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all">
                  <div className="text-xl">💰</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">Prices & What to Expect</h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Complete cost guide 2026</p>
                  </div>
                </Link>
                <Link href="/madrid-vs-amsterdam" className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all">
                  <div className="text-xl">🆚</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">Madrid vs Amsterdam</h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Which city is better for cannabis?</p>
                  </div>
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
            subtitle="Common questions about joining cannabis clubs"
            includeSchema={true}
          />
        </section>

        {/* Bottom CTA */}
        <section className="px-4 py-12 sm:py-16 lg:py-20 bg-[#111916]">
          <CTA
            variant="banner"
            headline="Ready to Join Madrid's Cannabis Community?"
            text="Get your membership at a verified cannabis social club. Simple process, affordable fees, safe environment."
          />
        </section>
      </main>
    </>
  );
}
