import Link from "next/link";
import { FAQSchema } from "@/components/SchemaMarkup";

// FAQ data for schema markup
const faqData = [
  {
    question: "Is weed legal in Madrid?",
    answer:
      "Cannabis is decriminalized in Spain for personal consumption, but not fully legal. The legal way to access cannabis in Madrid is through cannabis social clubs, which operate in a legal gray area but are tolerated by authorities.",
  },
  {
    question: "Can tourists join cannabis clubs?",
    answer:
      "Yes, tourists can join cannabis social clubs in Madrid, but you typically need an invitation from a member or need to be introduced by someone. Many clubs have specific procedures for welcoming visitors and tourists.",
  },
  {
    question: "How much does weed cost in Madrid clubs?",
    answer:
      "Prices typically range from €5-10 per gram at most social clubs, with discounts for larger quantities. Club memberships are usually free or inexpensive (€5-20), and prices vary depending on the quality and type of cannabis.",
  },
  {
    question: "What do I need to join a cannabis club?",
    answer:
      "You typically need a valid ID, passport, or resident card. Some clubs require proof of age (18+), an invitation from an existing member, and to fill out a membership form. Requirements vary by club.",
  },
  {
    question: "Is it safe to smoke weed in Madrid?",
    answer:
      "Cannabis is tolerated in private spaces and social clubs in Madrid. However, smoking in public spaces can result in fines (€300-600). Always respect local laws and the rules of cannabis clubs to ensure a safe experience.",
  },
];

export default function Home() {
  return (
    <>
      {/* FAQ Schema Markup */}
      <FAQSchema items={faqData} />

      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-20 px-4 sm:py-32 md:py-40">
          {/* Gradient background overlay */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-cannabis-medium)] rounded-full mix-blend-screen opacity-5 blur-3xl" />
            <div className="absolute -bottom-32 left-0 w-96 h-96 bg-[var(--color-accent-amber)] rounded-full mix-blend-screen opacity-5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
              The Complete Cannabis Guide to{" "}
              <span className="text-gradient">Madrid</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
              Everything tourists and expats need to know about cannabis social
              clubs, laws, and culture in Madrid — updated for 2026
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-cannabis-medium)]">✓</span>
                Updated March 2026
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-cannabis-medium)]">✓</span>
                Based on local experience
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-cannabis-medium)]">✓</span>
                Legal compliance verified
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-[var(--color-accent-amber)] text-[var(--color-bg-primary)] hover:bg-[#f5a820] transition-colors duration-200 hover-glow"
              >
                Get Club Invitation <span>→</span>
              </a>
              <Link
                href="/cannabis-laws-spain"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
              >
                Read the Laws <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* QUICK LINKS GRID */}
        <section className="py-20 px-4 border-t border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-[var(--color-text-primary)]">
              Essential Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Laws */}
              <article className="group p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-cannabis-medium)] transition-all duration-300 hover-glow flex flex-col">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  Cannabis Laws in Spain
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  Understand the legal landscape of cannabis in Spain, what's
                  allowed and what's not, and how social clubs operate within
                  the law.
                </p>
                <Link
                  href="/cannabis-laws-spain"
                  className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                >
                  Read guide <span>→</span>
                </Link>
              </article>

              {/* Card 2: How to Join */}
              <article className="group p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-cannabis-medium)] transition-all duration-300 hover-glow flex flex-col">
                <div className="text-4xl mb-4">🔑</div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  How to Join a Club
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  Step-by-step instructions on finding a club, getting invited,
                  membership requirements, and what to expect on your first
                  visit.
                </p>
                <Link
                  href="/how-to-join-cannabis-club"
                  className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                >
                  Read guide <span>→</span>
                </Link>
              </article>

              {/* Card 3: Neighborhoods */}
              <article className="group p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-cannabis-medium)] transition-all duration-300 hover-glow flex flex-col">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  Best Neighborhoods
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  Discover the best neighborhoods in Madrid for cannabis
                  culture, where clubs are concentrated, and local atmosphere
                  and vibe.
                </p>
                <Link
                  href="/best-neighborhoods-madrid"
                  className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                >
                  Read guide <span>→</span>
                </Link>
              </article>

              {/* Card 4: Etiquette */}
              <article className="group p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-cannabis-medium)] transition-all duration-300 hover-glow flex flex-col">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  Club Etiquette
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  Learn the unwritten rules of cannabis clubs: what's acceptable,
                  how to behave, respect traditions, and make the most of your
                  experience.
                </p>
                <Link
                  href="/cannabis-club-etiquette"
                  className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                >
                  Read guide <span>→</span>
                </Link>
              </article>

              {/* Card 5: Prices */}
              <article className="group p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-cannabis-medium)] transition-all duration-300 hover-glow flex flex-col">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  Prices & What to Expect
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  Complete pricing guide for cannabis in Madrid, membership
                  costs, quality indicators, product types, and how to get the
                  best value.
                </p>
                <Link
                  href="/prices-what-to-expect"
                  className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                >
                  Read guide <span>→</span>
                </Link>
              </article>

              {/* Card 6: Madrid vs Amsterdam */}
              <article className="group p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-cannabis-medium)] transition-all duration-300 hover-glow flex flex-col">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  Madrid vs Amsterdam
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                  How cannabis culture in Madrid compares to Amsterdam. Key
                  differences in laws, club culture, availability, and visitor
                  experience.
                </p>
                <Link
                  href="/madrid-vs-amsterdam"
                  className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                >
                  Read guide <span>→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* WHY MADRID SECTION */}
        <section className="py-20 px-4 border-t border-[var(--color-border)] bg-gradient-to-b from-transparent via-[var(--color-bg-secondary)]/30 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-[var(--color-text-primary)]">
              Why Madrid for Cannabis?
            </h2>

            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto text-center mb-16">
              Madrid has become one of Europe's most popular destinations for
              cannabis tourism. With a vibrant cannabis social club scene, rich
              culture, world-class food and nightlife, and a relaxed attitude
              toward cannabis consumption, Madrid offers an unforgettable
              experience.
            </p>

            {/* Stats/Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-center hover:border-[var(--color-cannabis-medium)] transition-colors">
                <div className="text-5xl font-bold text-[var(--color-cannabis-medium)] mb-4">
                  500+
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  Active cannabis social clubs across Madrid
                </p>
              </div>

              {/* Stat 2 */}
              <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-center hover:border-[var(--color-cannabis-medium)] transition-colors">
                <div className="text-5xl font-bold text-[var(--color-accent-amber)] mb-4">
                  €6-10
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  Average price per gram at quality clubs
                </p>
              </div>

              {/* Stat 3 */}
              <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-center hover:border-[var(--color-cannabis-medium)] transition-colors">
                <div className="text-5xl font-bold text-[var(--color-cannabis-light)] mb-4">
                  24/7
                </div>
                <p className="text-[var(--color-text-secondary)]">
                  Many clubs open around the clock for members
                </p>
              </div>
            </div>

            {/* Legal way note */}
            <div className="mt-12 p-6 rounded-lg border-l-4 border-[var(--color-cannabis-medium)] bg-[var(--color-bg-secondary)] max-w-3xl mx-auto">
              <p className="text-[var(--color-text-primary)]">
                <span className="font-semibold text-[var(--color-cannabis-medium)]">
                  Important:
                </span>{" "}
                <span className="text-[var(--color-text-secondary)]">
                  Cannabis social clubs are the legal and culturally accepted way
                  to access cannabis in Madrid. Always join through proper channels
                  and respect local laws and club rules.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="py-20 px-4 border-t border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-[var(--color-text-primary)]">
              Your Path to Madrid's Cannabis Scene
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting lines (desktop only) */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-cannabis-medium)] to-transparent z-0" />

              {/* Step 1 */}
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent-amber)] text-[var(--color-bg-primary)] font-bold text-2xl flex items-center justify-center mb-6 mx-auto">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                    Learn the Laws
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Understand Spain's cannabis regulations and how social clubs
                    operate legally.
                  </p>
                  <Link
                    href="/cannabis-laws-spain"
                    className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                  >
                    Explore <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-cannabis-medium)] text-[var(--color-bg-primary)] font-bold text-2xl flex items-center justify-center mb-6 mx-auto">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                    Get Invited to a Club
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Secure an invitation and complete the membership process at
                    a reputable club.
                  </p>
                  <a
                    href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                    className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                  >
                    Find Club <span>→</span>
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-cannabis-light)] text-[var(--color-bg-primary)] font-bold text-2xl flex items-center justify-center mb-6 mx-auto">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                    Enjoy Responsibly
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Experience Madrid's cannabis culture while respecting club
                    rules and local laws.
                  </p>
                  <Link
                    href="/cannabis-club-etiquette"
                    className="inline-flex items-center gap-2 text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
                  >
                    Learn Etiquette <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED GUIDE PREVIEW */}
        <section className="py-20 px-4 border-t border-[var(--color-border)] bg-gradient-to-b from-transparent via-[var(--color-bg-secondary)]/30 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
                  How to Join a Cannabis Club
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                  Not sure where to start? Our comprehensive guide walks you
                  through the entire process of joining a cannabis social club
                  in Madrid, from getting an invitation to your first purchase.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--color-cannabis-medium)] font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-[var(--color-text-secondary)]">
                      Find reputable clubs and how to get introductions
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--color-cannabis-medium)] font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-[var(--color-text-secondary)]">
                      Membership requirements and what to bring with you
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--color-cannabis-medium)] font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-[var(--color-text-secondary)]">
                      What to expect on your first visit and how to order
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--color-cannabis-medium)] font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-[var(--color-text-secondary)]">
                      Pricing structure, payment methods, and budget planning
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--color-cannabis-medium)] font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <p className="text-[var(--color-text-secondary)]">
                      Tips for veterans and how to find the best clubs for you
                    </p>
                  </div>
                </div>

                <Link
                  href="/how-to-join-cannabis-club"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold bg-[var(--color-cannabis-medium)] text-[var(--color-bg-primary)] hover:bg-[var(--color-cannabis-light)] transition-colors duration-200 hover-glow"
                >
                  Read Full Guide <span>→</span>
                </Link>
              </div>

              {/* Right: Visual highlight */}
              <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cannabis-medium)]/10 to-[var(--color-accent-amber)]/5 -z-10" />
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)]">
                    <h4 className="font-semibold text-[var(--color-cannabis-medium)] mb-2">
                      Getting Started
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      The first step is getting an invitation from someone who's
                      already a member, or finding a club that accepts tourists
                      through online directories.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)]">
                    <h4 className="font-semibold text-[var(--color-cannabis-medium)] mb-2">
                      What You Need
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Valid ID or passport, proof of age (18+), and in some cases,
                      a referral from a current member or club approval.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)]">
                    <h4 className="font-semibold text-[var(--color-cannabis-medium)] mb-2">
                      First Visit
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Expect to fill out membership forms, pay a small membership
                      fee, and browse available products with help from staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-4 border-t border-[var(--color-border)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-[var(--color-text-primary)]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <details className="group p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer hover:border-[var(--color-cannabis-medium)] transition-colors">
                <summary className="flex items-center justify-between font-semibold text-lg text-[var(--color-text-primary)]">
                  <span>Is weed legal in Madrid?</span>
                  <span className="text-[var(--color-cannabis-medium)] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                  Cannabis is decriminalized in Spain for personal consumption,
                  but not fully legal. The legal way to access cannabis in Madrid
                  is through cannabis social clubs, which operate in a legal gray
                  area but are tolerated by authorities. Public consumption and
                  commercial sale are prohibited.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer hover:border-[var(--color-cannabis-medium)] transition-colors">
                <summary className="flex items-center justify-between font-semibold text-lg text-[var(--color-text-primary)]">
                  <span>Can tourists join cannabis clubs?</span>
                  <span className="text-[var(--color-cannabis-medium)] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                  Yes, tourists can join cannabis social clubs in Madrid, but you
                  typically need an invitation from a member or need to be
                  introduced by someone. Many clubs have specific procedures for
                  welcoming visitors and tourists. Some operate online directories
                  or have tourist-friendly policies.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer hover:border-[var(--color-cannabis-medium)] transition-colors">
                <summary className="flex items-center justify-between font-semibold text-lg text-[var(--color-text-primary)]">
                  <span>How much does weed cost in Madrid clubs?</span>
                  <span className="text-[var(--color-cannabis-medium)] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                  Prices typically range from €5-10 per gram at most social clubs,
                  with discounts for larger quantities. Club memberships are
                  usually free or inexpensive (€5-20), and prices vary depending
                  on the quality and type of cannabis offered. Premium strains
                  may cost more.
                </p>
              </details>

              {/* FAQ 4 */}
              <details className="group p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer hover:border-[var(--color-cannabis-medium)] transition-colors">
                <summary className="flex items-center justify-between font-semibold text-lg text-[var(--color-text-primary)]">
                  <span>What do I need to join a cannabis club?</span>
                  <span className="text-[var(--color-cannabis-medium)] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                  You typically need a valid ID, passport, or resident card. Some
                  clubs require proof of age (18+), an invitation from an existing
                  member, and to fill out a membership form. Requirements vary by
                  club, but identification and age verification are universal.
                </p>
              </details>

              {/* FAQ 5 */}
              <details className="group p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] cursor-pointer hover:border-[var(--color-cannabis-medium)] transition-colors">
                <summary className="flex items-center justify-between font-semibold text-lg text-[var(--color-text-primary)]">
                  <span>Is it safe to smoke weed in Madrid?</span>
                  <span className="text-[var(--color-cannabis-medium)] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-[var(--color-text-secondary)] mt-4 leading-relaxed">
                  Cannabis is tolerated in private spaces and social clubs in
                  Madrid. However, smoking in public spaces can result in fines
                  (€300-600). Always respect local laws and the rules of cannabis
                  clubs to ensure a safe and legal experience.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-20 px-4 border-t border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl p-12 md:p-20 bg-gradient-to-r from-[var(--color-cannabis-medium)]/20 to-[var(--color-accent-amber)]/20 border border-[var(--color-border)]">
            {/* Gradient overlay */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent-amber)] rounded-full mix-blend-screen opacity-10 blur-3xl" />
              <div className="absolute -bottom-32 left-0 w-96 h-96 bg-[var(--color-cannabis-medium)] rounded-full mix-blend-screen opacity-10 blur-3xl" />
            </div>

            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                Ready to Visit Madrid's Best Cannabis Clubs?
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
                Get your invitation and join thousands of tourists and locals
                who've discovered Madrid's thriving cannabis social club scene.
              </p>
              <a
                href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-lg font-semibold text-lg bg-[var(--color-accent-amber)] text-[var(--color-bg-primary)] hover:bg-[#f5a820] transition-colors duration-200 hover-glow"
              >
                Explore Club Directory <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* BACKLINK SECTION */}
        <section className="py-16 px-4 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/40">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--color-text-secondary)] mb-4">
              Looking for a complete directory of Madrid's cannabis clubs?{" "}
              <a
                href="https://weedmadrid.com"
                className="text-[var(--color-cannabis-medium)] font-semibold hover:text-[var(--color-cannabis-light)] transition-colors"
              >
                Visit Weed Madrid
              </a>{" "}
              — the most comprehensive club directory and community for cannabis
              enthusiasts in Spain's capital.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
