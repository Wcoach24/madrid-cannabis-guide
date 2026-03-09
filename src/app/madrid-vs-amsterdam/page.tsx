import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Madrid vs Amsterdam for Cannabis — Which City is Better in 2026?',
  description: 'Compare cannabis culture, prices, legal status, and experiences in Madrid and Amsterdam. Which city is better for cannabis tourism? Complete analysis.',
  keywords: 'madrid vs amsterdam, cannabis europe, best weed city, legal cannabis comparison',
  openGraph: {
    title: 'Madrid vs Amsterdam for Cannabis — Which City is Better in 2026?',
    description: 'Compare cannabis culture, prices, legal status, and experiences in Madrid and Amsterdam.',
    type: 'article',
    locale: 'es_ES',
    url: 'https://madridcannabisguide.com/madrid-vs-amsterdam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madrid vs Amsterdam for Cannabis',
    description: 'Which European city is better for cannabis tourism?',
  },
};

const faqItems = [
  {
    question: 'Is it legal to buy cannabis in both cities?',
    answer: 'Both cities operate in legal gray areas. Amsterdam has regulated coffeeshops with explicit police tolerance. Madrid has unregulated social clubs in a legal gray zone. Both are tolerated but neither is fully "legal." Possession limits exist in both places.',
  },
  {
    question: 'Which city is actually cheaper?',
    answer: 'Madrid is typically 20-30% cheaper than Amsterdam: Madrid €8-14/gram vs Amsterdam €10-15/gram. But quality-conscious Madrid clubs charge premium prices. Amsterdam has fixed government tax and regulations that increase prices.',
  },
  {
    question: 'Can I visit both in one trip?',
    answer: 'Absolutely. Many travelers do the "Amsterdam to Madrid" route (flights under €100, 2-3 hours). You could experience both cities\' cannabis cultures in one week. Consider Amsterdam first (easier access), then Madrid (more authentic experience).',
  },
  {
    question: 'Which city has better quality cannabis?',
    answer: 'Madrid\'s best clubs often have superior quality because they focus on curated selections for locals. Amsterdam coffeeshops are commercialized and prioritize quantity. But Amsterdam has consistent quality. Madrid requires choosing the right club.',
  },
  {
    question: 'Is Amsterdam still worth visiting for cannabis?',
    answer: 'Yes, for the convenience and variety. Walk in freely, try multiple coffeeshops, explore other attractions. But it\'s increasingly touristy, crowded, and expensive. The "Amsterdam cannabis dream" is fading compared to emerging scenes like Madrid.',
  },
];

export default function MadridVsAmsterdamPage() {
  return (
    <main className="w-full bg-[#0a0f0d]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Madrid vs Amsterdam for Cannabis — Which City is Better in 2026?',
            description: 'Compare cannabis culture, prices, legal status, and experiences in Madrid and Amsterdam.',
            image: 'https://madridcannabisguide.com/og-madridamsterdam.jpg',
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
        <div className="absolute inset-0 -z-20"><Image src="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1200/madrid-cannabis-guide/madrid-plaza-comparison" alt="Panoramic view of Madrid plaza showcasing the city vibrant culture compared to Amsterdam" fill className="object-cover" sizes="100vw" priority /></div><div className="absolute inset-0 -z-15 bg-[#0a0f0d]/75" /><div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111916] border border-emerald-900/30">
            <span className="text-emerald-400">🌍</span>
            <span className="text-sm text-emerald-300/80">Comparative Analysis</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#e8ece9]">
            Madrid vs Amsterdam for Cannabis
          </h1>

          <p className="text-xl text-[#e8ece9]/70 mb-8 leading-relaxed max-w-2xl">
            Which European city offers the better cannabis experience? Direct comparison of legal status, prices, quality, culture, and the future of cannabis tourism.
          </p>

          <div className="flex items-center gap-4 text-sm text-[#e8ece9]/60 mb-8">
            <span>📅 Updated March 2026</span>
            <span>•</span>
            <span>⏱️ 12 min read</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
              <div className="text-sm font-semibold text-emerald-400 mb-1">Madrid</div>
              <div className="text-xs text-[#e8ece9]/60">Authentic, Cheaper, Quality-Focused</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
              <div className="text-sm font-semibold text-amber-400 mb-1">Amsterdam</div>
              <div className="text-xs text-[#e8ece9]/60">Convenient, Regulated, Tourist-Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-[#111916]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#e8ece9]">
            Two Different Models, Two Different Experiences
          </h2>

          <div className="space-y-6 text-[#e8ece9]/80">
            <p>
              Madrid and Amsterdam are the two defining cannabis destinations in Europe, but they represent completely different models of cannabis culture and legal frameworks. Amsterdam has decades of established coffeeshop culture with regulatory frameworks. Madrid has emerging, unregulated social clubs with intimate, local vibes.
            </p>

            <p>
              Amsterdam is the tourist destination: convenient, commercialized, predictable. Madrid is the emerging scene: authentic, quality-focused, still relatively undiscovered by mass tourism. Understanding the differences helps you choose which experience aligns with what you're looking for.
            </p>

            <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">The Bottom Line</h3>
              <p>
                Madrid wins for quality and value. Amsterdam wins for convenience and variety. If you had to choose one for 2026, Madrid is the better choice for authentic experience and better pricing. But both cities are worth experiencing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL FRAMEWORK COMPARISON */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Legal Framework: Amsterdam vs Madrid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-amber-950/20 border border-amber-900/50">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Amsterdam (Netherlands)</h3>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Legal Status</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Cannabis is decriminalized. Coffeeshops operate under explicit government tolerance and licensing. Sales are technically illegal but regulated and taxed.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Possession Limits</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Adults can carry up to 5g. Coffeeshops are limited to 500g in stock. Government monitors production through licensed growers.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Regulation</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  High regulation. Health inspections, product testing, licensing requirements. Prices reflect government tax (19% VAT + margins).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Recent Changes</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  2024-2026: Amsterdam banning tourists from some neighborhoods. Overcrowding and resident complaints increasing. Scene becoming more restrictive.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Madrid (Spain)</h3>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Legal Status</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Cannabis is decriminalized for personal consumption. Social clubs operate in a legal gray area—tolerated but not officially regulated or licensed.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Possession Limits</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Consumption and possession for personal use decriminalized. Clubs operate under assumption of self-regulation and member responsibility.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Regulation</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Low regulation. Clubs are self-governed member organizations. No government oversight of products or operations. Prices reflect minimal overhead.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Emerging Trend</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  2024-2026: Growing scene with 500+ clubs. Becoming more accessible to tourists. Less saturated than Amsterdam. More room for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Accessibility for Tourists
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                🏃 Amsterdam: Walk In & Buy
              </h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Amsterdam coffeeshops are designed for tourists. No membership, no invitations needed. Walk in with ID, order from the menu, sit down and consume. It's that simple. Perfect for people who want zero friction and immediate access.
              </p>
              <ul className="text-[#e8ece9]/70 space-y-2">
                <li>✓ No membership process</li>
                <li>✓ Immediate access</li>
                <li>✓ English-speaking staff</li>
                <li>✓ Tourist-friendly infrastructure</li>
                <li>✓ Multiple options on every street</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
                🔑 Madrid: Requires Invitation, More Rewarding
              </h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Madrid clubs require membership or invitation. More friction to entry, but worth it. You'll interact with locals, join a real community, and have a more authentic experience. Once in, access is easier for future visits.
              </p>
              <ul className="text-[#e8ece9]/70 space-y-2">
                <li>⚠️ Requires membership process</li>
                <li>⚠️ May need introduction or invitation</li>
                <li>✓ Worth the effort for authenticity</li>
                <li>✓ Easier to find if you know what to look for</li>
                <li>✓ More intimate, local experience</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
              <h4 className="font-semibold text-emerald-300 mb-2">Verdict on Accessibility</h4>
              <p className="text-[#e8ece9]/70">
                If you want zero friction and immediate access: Amsterdam. If you're willing to do a little research and effort for a better experience: Madrid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & VARIETY */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Quality & Product Variety
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-amber-400">Amsterdam Coffeeshops</h3>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Variety</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  High variety. Each coffeeshop carries 10-20+ strains. Easy comparison shopping. You can visit 3-4 shops to find your favorite.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Quality Consistency</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Regulated and tested. Consistent quality across coffeeshops. You know roughly what to expect. Less variation, less surprise.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Products</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Flower, hash, edibles, concentrates. Wide range. Many shops have mushrooms and other products too.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Commercialization</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Heavily commercialized. Designed for tourists. Standardized menus and pricing. Feels corporate.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-emerald-400">Madrid Clubs</h3>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Variety</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Curated, not mass-market. Quality clubs have 5-12 strains. Less is more—focuses on premium selections rather than quantity.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Quality Consistency</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Unregulated but community-monitored. Top clubs have excellent quality. Bottom clubs vary. Requires knowing which club to choose.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Products</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Mostly flower and hash. Edibles rare. Concentrates uncommon. Focus on traditional formats. Less variety than Amsterdam.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
                <h4 className="font-semibold text-[#e8ece9] mb-2">Authenticity</h4>
                <p className="text-[#e8ece9]/70 text-sm">
                  Local, member-focused culture. Clubs pride themselves on quality and community. Feels genuine and personal.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
            <h4 className="font-semibold text-emerald-300 mb-2">Quality Winner: Madrid</h4>
            <p className="text-[#e8ece9]/70">
              Top Madrid clubs have superior quality because they focus on excellence rather than volume. But you need to find the right club. Amsterdam is safer for consistent baseline quality.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING COMPARISON */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Price Comparison
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm text-[#e8ece9]">
              <thead>
                <tr className="border-b border-[#1a2420]">
                  <th className="text-left p-4 font-semibold text-emerald-400">Category</th>
                  <th className="text-left p-4 font-semibold text-amber-400">Madrid</th>
                  <th className="text-left p-4 font-semibold text-amber-400">Amsterdam</th>
                  <th className="text-left p-4 font-semibold text-emerald-400">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold">Cannabis/Gram</td>
                  <td className="p-4">€8-14</td>
                  <td className="p-4">€10-15</td>
                  <td className="p-4 text-emerald-400">Madrid -20%</td>
                </tr>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold">Hash/Gram</td>
                  <td className="p-4">€5-8</td>
                  <td className="p-4">€8-12</td>
                  <td className="p-4 text-emerald-400">Madrid -25%</td>
                </tr>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold">Membership Fee</td>
                  <td className="p-4">€0-30</td>
                  <td className="p-4">€0</td>
                  <td className="p-4 text-amber-400">Amsterdam +€0</td>
                </tr>
                <tr className="border-b border-[#1a2420] hover:bg-[#111916]/80 transition-colors">
                  <td className="p-4 font-semibold">First Gram Total</td>
                  <td className="p-4">€8-40</td>
                  <td className="p-4">€10-15</td>
                  <td className="p-4 text-emerald-400">Madrid cheaper</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
              <h4 className="font-semibold text-emerald-300 mb-2">Why Madrid is Cheaper</h4>
              <ul className="text-[#e8ece9]/70 space-y-1 text-sm">
                <li>• No government tax (illegal market)</li>
                <li>• Lower operating costs</li>
                <li>• No licensing fees</li>
                <li>• Less commercialization</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-amber-950/20 border border-amber-900/50">
              <h4 className="font-semibold text-amber-300 mb-2">Why Amsterdam is Expensive</h4>
              <ul className="text-[#e8ece9]/70 space-y-1 text-sm">
                <li>• 19% VAT added to prices</li>
                <li>• Licensing and regulation costs</li>
                <li>• Higher rent in city center</li>
                <li>• Commercialized, tourist-focused</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & CULTURE */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Experience & Culture Comparison
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-amber-900/50">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Amsterdam: The Tourist Experience</h3>
              <ul className="text-[#e8ece9]/80 space-y-2">
                <li>🏨 Crowded with tourists (especially weekends)</li>
                <li>📸 Instagram-friendly, social media heavy</li>
                <li>🚴 Beautiful canal walks between shops</li>
                <li>🍺 Beer and weed culture mixed (many bars next to coffeeshops)</li>
                <li>⏰ Regulated hours (typically 10am-1am)</li>
                <li>💬 English spoken everywhere</li>
                <li>🎉 Party vibe, nightlife focused</li>
                <li>⚠️ Aggressive vendors, tourist traps common</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-emerald-900/50">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Madrid: The Local Experience</h3>
              <ul className="text-[#e8ece9]/80 space-y-2">
                <li>👥 Mostly locals, some tourists (less crowded)</li>
                <li>🤫 Discrete, privacy-focused culture</li>
                <li>🌃 Vibrant city life, tapas bars, nightlife everywhere</li>
                <li>🍷 Cannabis + Spanish culture + food deeply integrated</li>
                <li>24/7 Many clubs open 24/7 for members</li>
                <li>🗣️ Spanish common, but English available</li>
                <li>🤝 Community-focused, relationship-building</li>
                <li>✓ Authentic, less commercialized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT TRENDS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Current Trends & Future Outlook
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                🚨 Amsterdam: Restrictions & Decline
              </h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Amsterdam's golden era is ending. 2024-2026 changes show declining tolerance:
              </p>
              <ul className="text-[#e8ece9]/70 space-y-2">
                <li>✗ Tourist bans in certain neighborhoods (De Pijp, others)</li>
                <li>✗ Increased police attention and raids</li>
                <li>✗ Coffeeshops closing due to regulation</li>
                <li>✗ Overcrowding and resident backlash</li>
                <li>✗ Rising prices as costs increase</li>
                <li>✗ Aging scene, less innovation</li>
              </ul>
              <p className="text-[#e8ece9]/70 mt-4 font-semibold">
                Outlook: Amsterdam will remain accessible but become more restrictive and commercialized.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
                🚀 Madrid: Growth & Opportunity
              </h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Madrid is in growth phase. 2024-2026 trends show rapid expansion:
              </p>
              <ul className="text-[#e8ece9]/70 space-y-2">
                <li>✓ 500+ clubs operating and growing</li>
                <li>✓ Increasing accessibility for tourists</li>
                <li>✓ Better quality control emerging</li>
                <li>✓ Less saturated than Amsterdam</li>
                <li>✓ Better prices and value</li>
                <li>✓ More authentic, less touristy</li>
              </ul>
              <p className="text-[#e8ece9]/70 mt-4 font-semibold">
                Outlook: Madrid will become Europe's premier cannabis destination by 2027-2028.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VERDICT */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-gradient-to-r from-emerald-950/50 to-amber-950/30 border border-emerald-900/50">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#e8ece9]">
              Which City Should You Choose?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Choose Madrid If...</h3>
                <ul className="text-[#e8ece9]/80 space-y-2">
                  <li>✓ You want the best value and cheaper prices</li>
                  <li>✓ You prioritize quality over convenience</li>
                  <li>✓ You want an authentic, local experience</li>
                  <li>✓ You're willing to do a bit of research to find clubs</li>
                  <li>✓ You want to be part of a growing, vibrant scene</li>
                  <li>✓ You're visiting Spain anyway</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-3">Choose Amsterdam If...</h3>
                <ul className="text-[#e8ece9]/80 space-y-2">
                  <li>✓ You want zero friction and immediate access</li>
                  <li>✓ You prefer a regulated, consistent experience</li>
                  <li>✓ You want to explore multiple shops easily</li>
                  <li>✓ You're looking for a classic tourist experience</li>
                  <li>✓ You want complete certainty and no surprises</li>
                  <li>✓ You're visiting the Netherlands anyway</li>
                </ul>
              </div>

              <div className="mt-8 p-6 rounded-lg bg-[#111916] border border-emerald-500/50">
                <h3 className="text-2xl font-bold text-emerald-300 mb-4">🏆 Overall Winner: Madrid (2026)</h3>
                <p className="text-[#e8ece9]/80">
                  For authenticity, value, quality, and future-proofing, Madrid is the better choice in 2026. Amsterdam is still accessible but declining in appeal. Madrid offers a more rewarding, authentic cannabis experience at better prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOT BOTH */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#e8ece9]">
            Why Not Experience Both?
          </h2>

          <div className="space-y-6 text-[#e8ece9]/80 mb-8">
            <p>
              The smartest move: visit both cities in one trip. Combine Amsterdam and Madrid for the ultimate European cannabis experience.
            </p>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">Suggested 7-Day Itinerary</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold text-[#e8ece9]">Days 1-3: Amsterdam</span>
                  <span className="text-[#e8ece9]/70 ml-2">Walk in coffeeshops, explore canal city, experience regulated scene</span>
                </li>
                <li>
                  <span className="font-semibold text-[#e8ece9]">Day 3-4: Travel</span>
                  <span className="text-[#e8ece9]/70 ml-2">Flight Amsterdam→Madrid (€50-100, 2-3 hours). Rest, explore city.</span>
                </li>
                <li>
                  <span className="font-semibold text-[#e8ece9]">Days 4-7: Madrid</span>
                  <span className="text-[#e8ece9]/70 ml-2">Join clubs, experience local scene, explore Spanish culture and food</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
              <h4 className="font-semibold text-emerald-300 mb-2">Best Approach</h4>
              <p>
                Visit Amsterdam first (easier entry point, no membership needed). Then move to Madrid to experience the authentic, emerging scene. You'll appreciate Madrid more after experiencing Amsterdam's commercialization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <CTA
            variant="inline"
            headline="Ready to Experience Madrid's Cannabis Scene?"
            text="Madrid offers better value, quality, and authenticity than Amsterdam in 2026. Get invited to verified clubs and discover Spain's vibrant cannabis culture."
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <FAQSection
            items={faqItems}
            title="Common Questions About Madrid vs Amsterdam"
            subtitle="Get answers to questions comparing the two cannabis destinations."
            includeSchema={true}
          />
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
                Understand the rules and social norms before your first visit.
              </p>
            </Link>

            <Link
              href="/prices-what-to-expect"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                Pricing Guide →
              </h3>
              <p className="text-[#e8ece9]/70">
                Complete breakdown of costs and how to budget your visit.
              </p>
            </Link>

            <Link
              href="/how-to-join-cannabis-club"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                How to Join a Club →
              </h3>
              <p className="text-[#e8ece9]/70">
                Step-by-step guide to finding and joining your first club.
              </p>
            </Link>

            <Link
              href="/cannabis-laws-spain"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                Spanish Cannabis Laws →
              </h3>
              <p className="text-[#e8ece9]/70">
                Understand the legal framework behind Spain's social clubs.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* EXTERNAL LINKS */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#e8ece9] mb-6">
            Start Your Madrid Cannabis Experience
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
            Last updated: March 2026 | Analysis based on current market research
          </p>
        </div>
      </section>
    </main>
  );
}
