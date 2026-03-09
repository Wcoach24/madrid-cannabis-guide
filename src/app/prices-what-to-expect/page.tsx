import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Cannabis Club Prices in Madrid 2026 — What to Expect & Cost Guide',
  description: 'Complete pricing guide for cannabis in Madrid social clubs. Membership fees, gram prices, quality levels, and how to budget for your first visit. Updated 2026.',
  keywords: 'weed prices madrid, cannabis club prices, cost guide, how much cannabis costs',
  openGraph: {
    title: 'Cannabis Club Prices in Madrid 2026 — What to Expect & Cost Guide',
    description: 'Complete pricing guide for cannabis in Madrid social clubs. Membership fees, gram prices, and how to budget.',
    type: 'article',
    locale: 'es_ES',
    url: 'https://madridcannabisguide.com/prices-what-to-expect',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis Club Prices in Madrid 2026',
    description: 'Complete pricing guide for cannabis in Madrid social clubs.',
  },
};

const faqItems = [
  {
    question: 'Why is cannabis not cheaper in Madrid than Amsterdam?',
    answer: 'While Madrid can be cheaper, higher-quality clubs may charge premium prices (€10-14/gram) because their cannabis is often superior in quality and freshness. Amsterdam coffeeshops are commercialized and prioritize volume. Madrid clubs prioritize quality and control. You get what you pay for.',
  },
  {
    question: 'Is membership really free at some clubs?',
    answer: 'Some clubs have no membership fee and survive on product sales margin. Others charge €10-50 annually. Membership fees are typically waived for tourists or first-time visitors, or you pay a small fee (€5-10) and it\'s credited toward your first purchase.',
  },
  {
    question: 'Can I negotiate prices?',
    answer: 'No. Prices are fixed. Cannabis clubs are not street markets. Prices are clearly posted and non-negotiable. However, discounts for bulk purchases (2g, 5g, 10g) are standard at most clubs.',
  },
  {
    question: 'What\'s the price difference between strains?',
    answer: 'Standard strains: €8-10/gram. Premium/popular strains: €10-14/gram. Rare or top-shelf: €14-18/gram. Hash is sometimes cheaper (€5-8/gram) but less common. Edibles and pre-rolls vary widely (€3-8 each).',
  },
  {
    question: 'Is it worth buying premium cannabis?',
    answer: 'Yes. Premium strains have better flavor, effects, and freshness. If you\'re trying cannabis for the first time, start with mid-range (€9-11/gram). If you\'re a regular smoker, premium is worth the extra cost.',
  },
];

export default function PricesWhatToExpectPage() {
  return (
    <main className="w-full bg-[#0a0f0d]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Cannabis Club Prices in Madrid 2026 — What to Expect & Cost Guide',
            description: 'Complete pricing guide for cannabis in Madrid social clubs.',
            image: 'https://madridcannabisguide.com/og-prices.jpg',
            datePublished: '2026-03-09',
            dateModified: '2026-03-09',
            author: {
              '@type': 'Organization',
              name: 'Madrid Cannabis Guide',
              url: 'https://madridcannabisguide.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Madrid Cannabis Guide',
              logo: {
                '@type': 'ImageObject',
                url: 'https://madridcannabisguide.com/logo.png',
              },
            },
          }),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 px-4 sm:py-24 md:py-32">
        <div className="absolute inset-0 -z-20"><Image src="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1200/madrid-cannabis-guide/euro-prices-money" alt="Euro currency representing cannabis club membership prices and costs in Madrid Spain" fill className="object-cover" sizes="100vw" priority /></div><div className="absolute inset-0 -z-15 bg-[#0a0f0d]/75" /><div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111916] border border-emerald-900/30">
            <span className="text-amber-400">💰</span>
            <span className="text-sm text-amber-300/80">Pricing & Budgeting</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#e8ece9]">
            Cannabis Prices in Madrid 2026
          </h1>

          <p className="text-xl text-[#e8ece9]/70 mb-8 leading-relaxed max-w-2xl">
            What does cannabis actually cost in Madrid's social clubs? Complete breakdown of membership fees, gram prices, quality levels, and how to budget for the best value.
          </p>

          <div className="flex items-center gap-4 text-sm text-[#e8ece9]/60 mb-8">
            <span>📅 Updated March 2026</span>
            <span>•</span>
            <span>⏱️ 10 min read</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420] text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">€20-50</div>
              <div className="text-xs text-[#e8ece9]/60">Membership</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420] text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">€8-14</div>
              <div className="text-xs text-[#e8ece9]/60">Per Gram</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420] text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">€3-8</div>
              <div className="text-xs text-[#e8ece9]/60">Pre-rolls</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420] text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">€5-8</div>
              <div className="text-xs text-[#e8ece9]/60">Hash/gram</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420] text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">€15-30</div>
              <div className="text-xs text-[#e8ece9]/60">Edibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-[#111916]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#e8ece9]">
            How Cannabis Club Pricing Works
          </h2>

          <div className="space-y-6 text-[#e8ece9]/80">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">The "Contribution" Model</h3>
              <p>
                Cannabis clubs don't sell cannabis—they sell "contributions." This legal distinction is important. When you pay €10 for a gram, you're technically making a "contribution" to the club's operating costs, not purchasing a product. This gray area legal structure allows clubs to operate. Understanding this model helps explain why prices are what they are.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">No Sales Tax</h3>
              <p>
                Prices listed are final. There's no VAT or additional tax like you'd see in a legal retail store. What you see is what you pay. This makes budgeting straightforward.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Cash Is Standard</h3>
              <p>
                Most clubs operate on a cash-only basis because of banking restrictions. Some accept cards, but expect to pay cash. No credit card fees or transaction costs. This is why clubs don't inflate prices with payment processing fees.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Bulk Discounts Are Real</h3>
              <p>
                Buy 1g at €10/gram, buy 5g at €8.50/gram, buy 10g at €7.50/gram. Bulk pricing is standard practice and can save you 20-25% if you buy larger quantities. Clubs want you to come back frequently—bulk pricing encourages loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP FEES */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Membership Fees Explained
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">💸 No Membership Fee</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Some clubs don't charge membership at all. They make money on product margins only. These clubs are often budget-friendly but quality can vary.
              </p>
              <div className="text-sm text-emerald-300">
                <strong>Common in:</strong> Budget neighborhoods, less-established clubs
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">💳 €5-15 Per Year</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Light membership fee to cover basic operating costs. Often waived for first-time visitors or credited toward your first purchase.
              </p>
              <div className="text-sm text-emerald-300">
                <strong>Common in:</strong> Mid-range clubs with good value
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">📋 €20-35 Per Year</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Standard membership fee at quality clubs. Gives you access to a curated selection of premium products and a professional environment.
              </p>
              <div className="text-sm text-emerald-300">
                <strong>Common in:</strong> Established, quality-focused clubs
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">🏆 €30-50 Per Year</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Premium membership at elite clubs. Often includes discounts on products, exclusive strains, and VIP treatment.
              </p>
              <div className="text-sm text-emerald-300">
                <strong>Common in:</strong> Top-tier clubs with curated selections
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
            <h4 className="font-semibold text-emerald-300 mb-2">💡 Pro Tip: Tourist Membership</h4>
            <p className="text-[#e8ece9]/70">
              Many clubs offer €0 or €5 temporary memberships for tourists. You only pay once. Ask when joining if they have a tourist discount or first-visit special. It's common practice.
            </p>
          </div>
        </div>
      </section>

      {/* CANNABIS PRICES BY QUALITY */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Cannabis Flower: Price by Quality Level
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-amber-600">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-[#e8ece9]">Standard Quality</h3>
                <span className="text-2xl font-bold text-amber-400">€8-9/g</span>
              </div>
              <p className="text-[#e8ece9]/80 mb-4">
                Basic, everyday cannabis. Good for casual users or first-timers. Decent flavor and effects, but not premium. Usually the best value for money.
              </p>
              <ul className="text-sm text-[#e8ece9]/70 space-y-1 ml-4">
                <li>✓ 15-18% THC average</li>
                <li>✓ Decent taste and smell</li>
                <li>✓ Consistent effects</li>
                <li>✓ Best value option</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-amber-500">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-[#e8ece9]">Premium Quality</h3>
                <span className="text-2xl font-bold text-amber-400">€10-13/g</span>
              </div>
              <p className="text-[#e8ece9]/80 mb-4">
                High-quality strains with strong flavor profiles and consistent potency. These are the most popular strains and regularly restocked. Most regular visitors stick to this tier.
              </p>
              <ul className="text-sm text-[#e8ece9]/70 space-y-1 ml-4">
                <li>✓ 18-22% THC average</li>
                <li>✓ Strong, distinct flavor</li>
                <li>✓ Beautiful appearance</li>
                <li>✓ Reliable effects</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-amber-400">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-[#e8ece9]">Top Shelf / Rare Strains</h3>
                <span className="text-2xl font-bold text-amber-400">€14-18/g</span>
              </div>
              <p className="text-[#e8ece9]/80 mb-4">
                The finest cannabis available. Rare genetics, exceptional quality, often from small-batch grows. Limited availability. For connoisseurs or special occasions.
              </p>
              <ul className="text-sm text-[#e8ece9]/70 space-y-1 ml-4">
                <li>✓ 22%+ THC, often 24-28%</li>
                <li>✓ Exceptional flavor complexity</li>
                <li>✓ Perfect bag appeal</li>
                <li>✓ Rare/limited availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS AVAILABLE */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            What Products Are Available?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">🌿 Flower (Most Common)</h3>
              <p className="text-[#e8ece9]/80 mb-3">
                Dried cannabis buds sold by weight. Available in 1g, 2g, 5g, 10g increments.
              </p>
              <div className="text-sm text-amber-300 font-semibold">Prices: €8-18/gram</div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">🔨 Hash/Hashish</h3>
              <p className="text-[#e8ece9]/80 mb-3">
                Compressed resin from cannabis plants. More potent per gram, stronger flavor.
              </p>
              <div className="text-sm text-amber-300 font-semibold">Prices: €5-10/gram</div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">🚬 Pre-rolled Joints</h3>
              <p className="text-[#e8ece9]/80 mb-3">
                Ready-to-smoke joints. Convenience premium applies—costs slightly more.
              </p>
              <div className="text-sm text-amber-300 font-semibold">Prices: €3-7 per joint</div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">🍫 Edibles (Varies)</h3>
              <p className="text-[#e8ece9]/80 mb-3">
                Brownies, gummies, baked goods. Availability varies by club. Slower onset, longer duration.
              </p>
              <div className="text-sm text-amber-300 font-semibold">Prices: €8-25 per item</div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">💨 Concentrates/Oils</h3>
              <p className="text-[#e8ece9]/80 mb-3">
                High-potency extracts. Not all clubs carry them. Requires specific equipment.
              </p>
              <div className="text-sm text-amber-300 font-semibold">Prices: €15-25/gram</div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">🌾 CBD Products</h3>
              <p className="text-[#e8ece9]/80 mb-3">
                Low-THC or THC-free cannabis. Growing availability for medical users.
              </p>
              <div className="text-sm text-amber-300 font-semibold">Prices: €5-12/gram</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLES */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Madrid vs Amsterdam vs Street Prices
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-[#e8ece9]">
              <thead>
                <tr className="border-b border-[#1a2420]">
                  <th className="text-left p-4 font-semibold text-emerald-400">Location</th>
                  <th className="text-left p-4 font-semibold text-emerald-400">Price/Gram</th>
                  <th className="text-left p-4 font-semibold text-emerald-400">Quality</th>
                  <th className="text-left p-4 font-semibold text-emerald-400">Safety</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold text-amber-400">Madrid Club</td>
                  <td className="p-4">€8-14</td>
                  <td className="p-4">High Quality</td>
                  <td className="p-4">✓ Safe</td>
                </tr>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold text-amber-400">Amsterdam Coffeeshop</td>
                  <td className="p-4">€10-15</td>
                  <td className="p-4">Variable</td>
                  <td className="p-4">✓ Safe</td>
                </tr>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold text-amber-400">Madrid Street</td>
                  <td className="p-4">€5-8</td>
                  <td className="p-4">Unpredictable</td>
                  <td className="p-4">✗ Unsafe</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-lg bg-red-950/20 border border-red-900/50">
            <h4 className="font-semibold text-red-300 mb-2">⚠️ Never Buy on the Street</h4>
            <p className="text-[#e8ece9]/70">
              While street prices look cheaper, you risk: low quality, contamination, scams, and legal problems. Social clubs are the only legal and safe way to access cannabis in Madrid. The slightly higher price is worth your safety.
            </p>
          </div>
        </div>
      </section>

      {/* BUDGETING */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            How Much Should You Budget?
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-emerald-900/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">First Visit</h3>
              <div className="space-y-2 text-[#e8ece9]/80">
                <div className="flex justify-between">
                  <span>Membership fee (if applicable):</span>
                  <span className="font-semibold text-amber-400">€0-20</span>
                </div>
                <div className="flex justify-between">
                  <span>First purchase (1-2 grams):</span>
                  <span className="font-semibold text-amber-400">€10-20</span>
                </div>
                <div className="flex justify-between">
                  <span>Tip (optional but appreciated):</span>
                  <span className="font-semibold text-amber-400">€1-2</span>
                </div>
                <div className="border-t border-[#1a2420] pt-3 mt-3 flex justify-between font-semibold">
                  <span>Total for first visit:</span>
                  <span className="text-amber-400">€11-42</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-emerald-900/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Casual User (Monthly)</h3>
              <div className="space-y-2 text-[#e8ece9]/80">
                <div className="flex justify-between">
                  <span>2-3 visits per month @ €12/visit:</span>
                  <span className="font-semibold text-amber-400">€24-36</span>
                </div>
                <div className="flex justify-between">
                  <span>Tips:</span>
                  <span className="font-semibold text-amber-400">€3-5</span>
                </div>
                <div className="border-t border-[#1a2420] pt-3 mt-3 flex justify-between font-semibold">
                  <span>Total per month:</span>
                  <span className="text-amber-400">€27-41</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-emerald-900/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Regular User (Monthly)</h3>
              <div className="space-y-2 text-[#e8ece9]/80">
                <div className="flex justify-between">
                  <span>1-2 visits per week @ 5g bulk purchase:</span>
                  <span className="font-semibold text-amber-400">€50-80</span>
                </div>
                <div className="flex justify-between">
                  <span>Tips:</span>
                  <span className="font-semibold text-amber-400">€10-15</span>
                </div>
                <div className="border-t border-[#1a2420] pt-3 mt-3 flex justify-between font-semibold">
                  <span>Total per month:</span>
                  <span className="text-amber-400">€60-95</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
            <h4 className="font-semibold text-emerald-300 mb-2">💡 Budgeting Tips</h4>
            <ul className="text-[#e8ece9]/70 space-y-2">
              <li>• Buy in bulk (5g+) to get 10-15% discount per gram</li>
              <li>• Visit midweek for quieter clubs and better browsing</li>
              <li>• Standard quality is good value—save premium for special occasions</li>
              <li>• Many clubs offer loyalty discounts after 3-4 visits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#e8ece9]">
            Payment Methods & What to Bring
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">💵 Cash (Recommended)</h3>
              <ul className="text-[#e8ece9]/80 space-y-2">
                <li>✓ Most clubs prefer cash</li>
                <li>✓ More private than card</li>
                <li>✓ No transaction fees</li>
                <li>✓ Immediate access to products</li>
                <li>✓ Bring €20-100 for flexibility</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">💳 Card (Sometimes)</h3>
              <ul className="text-[#e8ece9]/80 space-y-2">
                <li>⚠️ Only 30-40% of clubs accept cards</li>
                <li>⚠️ May charge 2-3% fee</li>
                <li>✓ Easier if you have no cash</li>
                <li>✓ Call ahead to confirm acceptance</li>
                <li>⚠️ Less anonymous than cash</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
            <h4 className="font-semibold text-emerald-300 mb-3">🏪 What to Bring</h4>
            <ul className="text-[#e8ece9]/70 space-y-2">
              <li>• Valid ID/Passport (mandatory)</li>
              <li>• Cash (€20-100 recommended)</li>
              <li>• Your own rolling supplies (optional but appreciated)</li>
              <li>• Water bottle (for staying hydrated)</li>
              <li>• Headphones (if you want to be left alone)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <CTA
            variant="inline"
            headline="Ready to Visit a Madrid Cannabis Club?"
            text="Now that you know what to expect price-wise, find a reputable club and plan your first visit with confidence."
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <FAQSection
            items={faqItems}
            title="Frequently Asked Questions About Pricing"
            subtitle="Get answers to the most common questions about cannabis club prices."
            includeSchema={true}
          />
        </div>
      </section>

      {/* QUALITY INDICATORS */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            How to Evaluate Quality (Before You Buy)
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">👃 Smell & Aroma</h3>
              <p className="text-[#e8ece9]/80">
                Quality cannabis has a strong, distinct smell. Lack of smell suggests old product. Fruity, pine, citrus, or earthy notes indicate quality. Musty or moldy smell = avoid.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">👀 Appearance</h3>
              <p className="text-[#e8ece9]/80">
                Dense, colorful buds with visible crystals (trichomes). Avoid brown, dry, or crumbly cannabis. Look for deep greens, purples, or oranges depending on strain. Visible hairs (pistils) are good signs.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">✋ Feel & Texture</h3>
              <p className="text-[#e8ece9]/80">
                Properly cured cannabis is slightly sticky but not wet. It should break apart, not crumble to dust. Too dry = low quality or old. Too wet = mold risk.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3">🧪 Potency & Effects</h3>
              <p className="text-[#e8ece9]/80">
                Ask staff about THC percentage. 15-18% is moderate, 18-22% is strong, 22%+ is very potent. First-timers should start with 15-18%. Effects should be noticeable within 5-15 minutes of smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-[#111916]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#e8ece9] text-center">
            Learn More About Madrid's Cannabis Scene
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/cannabis-club-etiquette"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                Club Etiquette →
              </h3>
              <p className="text-[#e8ece9]/70">
                Learn the unwritten rules and how to behave respectfully in cannabis clubs.
              </p>
            </Link>

            <Link
              href="/how-to-join-cannabis-club"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                How to Join →
              </h3>
              <p className="text-[#e8ece9]/70">
                Step-by-step guide to finding clubs and completing membership.
              </p>
            </Link>

            <Link
              href="/cannabis-laws-spain"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                Cannabis Laws in Spain →
              </h3>
              <p className="text-[#e8ece9]/70">
                Understand the legal framework behind social clubs.
              </p>
            </Link>

            <Link
              href="/madrid-vs-amsterdam"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                Madrid vs Amsterdam →
              </h3>
              <p className="text-[#e8ece9]/70">
                Compare prices, culture, and experiences between two top cities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* EXTERNAL LINKS */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#e8ece9] mb-6">
            Find Verified Cannabis Clubs
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-[#0a0f0d] font-semibold hover:bg-amber-400 transition-colors"
            >
              Get Club Invitations →
            </a>
            <a
              href="https://weedmadrid.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/50 text-emerald-400 font-semibold hover:bg-emerald-950/30 transition-colors"
            >
              Browse Club Directory →
            </a>
          </div>

          <p className="text-[#e8ece9]/60 text-sm mt-6">
            Last updated: March 2026 | Prices based on current market survey
          </p>
        </div>
      </section>
    </main>
  );
}
