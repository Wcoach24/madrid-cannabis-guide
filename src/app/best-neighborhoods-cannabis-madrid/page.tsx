import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { FAQSection } from '@/components/FAQSection';
import { ArticleSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Best Neighborhoods for Cannabis Clubs in Madrid — District Guide (2026)',
  description:
    'Complete district guide to cannabis clubs in Madrid. Find the best neighborhoods, top clubs by area, transport tips, and how to choose based on your location.',
  keywords: [
    'best neighborhoods cannabis madrid',
    'cannabis clubs by area madrid',
    'where to find weed madrid',
    'cannabis clubs madrid neighborhoods',
    'vallehermoso chamberí cannabis',
  ],
  authors: [{ name: 'Madrid Cannabis Guide' }],
  openGraph: {
    type: 'article',
    url: 'https://madridcannabisguide.com/best-neighborhoods-cannabis-madrid',
    title: 'Best Neighborhoods for Cannabis Clubs in Madrid — District Guide',
    description:
      'Complete guide to cannabis clubs by neighborhood in Madrid. Find the best areas and clubs.',
    images: [
      {
        url: 'https://madridcannabisguide.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cannabis Neighborhoods Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Cannabis Neighborhoods in Madrid',
    description:
      'Complete guide to cannabis clubs by neighborhood in Madrid.',
    images: ['https://madridcannabisguide.com/og-image.jpg'],
  },
  metadataBase: new URL('https://madridcannabisguide.com'),
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Best Neighborhoods', url: '/best-neighborhoods-cannabis-madrid' },
];

const faqItems = [
  {
    question: 'Which neighborhood has the best cannabis clubs in Madrid?',
    answer:
      'Vallehermoso and Chamberí are the top neighborhoods for cannabis clubs in Madrid. They have the highest concentration of clubs, are easily accessible, and are tourist-friendly. Malasaña and Centro are good alternatives if you\'re staying downtown. Choose based on where you\'re staying to minimize travel.',
  },
  {
    question: 'Is it safe to visit cannabis clubs in these neighborhoods?',
    answer:
      'Yes, these neighborhoods are very safe. Madrid\'s cannabis club areas are well-established parts of the city with normal foot traffic. Clubs are professional establishments, not dangerous places. The vibe is like visiting any local bar or café. Standard city precautions apply (watch your stuff, don\'t flash expensive items), but crime is not a concern.',
  },
  {
    question: 'How do I get to these neighborhoods from my hotel?',
    answer:
      'Madrid Metro is the fastest and cheapest way to get anywhere. Download the TMB app or get a T-Casual card (€12.35 for 10 journeys). Most neighborhoods mentioned are 1-3 metro stops from major tourist areas. Buses also work. Avoid taxis unless necessary—Metro is reliable and efficient.',
  },
  {
    question: 'Are cannabis clubs obvious from the street or hidden?',
    answer:
      'Cannabis clubs are discreet by design. They don\'t have obvious storefronts or neon signs saying "Cannabis Club." Instead, look for unmarked doors, buzzers, or small plaques with club names. You need to know where you\'re going or have the address. This is intentional—it keeps clubs legal and respects privacy.',
  },
  {
    question: 'What\'s the atmosphere in each neighborhood?',
    answer:
      'Vallehermoso/Chamberí is upscale and professional. Malasaña/Centro is artsy and young. Lavapiés is diverse and bohemian. Salamanca is wealthy and sophisticated. Usera is working-class but friendly. Each has a different vibe, but all have welcoming clubs. Pick based on your preference for nightlife, dining, and atmosphere.',
  },
];

export default function BestNeighborhoodsCannabisPage() {
  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title="Best Neighborhoods for Cannabis Clubs in Madrid — District Guide (2026)"
        description="Complete guide to cannabis clubs by neighborhood in Madrid. Find the best areas, transport tips, and club locations."
        datePublished="2026-01-25"
        dateModified="2026-03-09"
        url="https://madridcannabisguide.com/best-neighborhoods-cannabis-madrid"
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
              <span>📍</span>
              <span>District Guide</span>
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e8ece9] tracking-tight">
              Best Neighborhoods for Cannabis Clubs in Madrid
            </h1>

            <p className="mb-8 text-lg sm:text-xl text-[#e8ece9]/80 leading-relaxed">
              Complete district guide to Madrid's cannabis scene. Discover where to find clubs, navigate each neighborhood, and choose the best area for your visit.
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
            {/* Overview */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Madrid's Cannabis Club Geography
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Madrid has a vibrant cannabis culture distributed across multiple neighborhoods. Each area has its own character, club density, and vibe. Here's how to navigate the city's cannabis landscape.
                </p>

                <div className="bg-emerald-950/30 border border-emerald-900/30 rounded-lg p-6">
                  <h3 className="mb-4 font-semibold text-emerald-100">Quick Ranking:</h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">🥇</span>
                      <span><strong>Vallehermoso / Chamberí:</strong> Most clubs, best infrastructure, most accessible</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">🥈</span>
                      <span><strong>Malasaña / Centro:</strong> Good club count, downtown convenience, young vibe</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold flex-shrink-0">🥉</span>
                      <span><strong>Lavapiés / Salamanca:</strong> Growing scenes, diverse, quality clubs</span>
                    </li>
                  </ol>
                </div>

                <p className="text-sm leading-relaxed italic border-t border-[#1a2420] pt-6">
                  <strong>Pro tip:</strong> Start with Vallehermoso or Malasaña if you're visiting. Both have excellent clubs and are easy to navigate.
                </p>
              </div>
            </section>

            {/* Vallehermoso / Chamberí */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                🥇 Vallehermoso & Chamberí — The Gold Standard
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  <strong className="text-emerald-100">This is where you want to be.</strong> Vallehermoso and Chamberí are Madrid's premier cannabis neighborhoods. They're upscale, professional, safe, and have the highest-quality clubs.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">📍 Location & Access</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>North-central Madrid, near Plaza de España</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Metro: Línea 1, 2, 10 (Ríos Rosas, Chamberí, Rubén Darío)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>10-15 min from most tourist hotels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🎯 Why This Area?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Highest concentration of clubs in Madrid</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Professional, established infrastructure</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Safe, upscale, respectful community</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-950/20 border border-amber-900/30 p-6">
                  <h4 className="font-semibold text-amber-100 mb-3">🏘️ The Neighborhood</h4>
                  <p className="text-sm leading-relaxed">
                    Vallehermoso and Chamberí are upscale, residential areas with tree-lined streets, elegant apartments, and a quiet vibe during the day. In the evenings, the streets come alive with locals going to restaurants, bars, and clubs. There's excellent dining, shopping, and culture. This is where affluent Madrileños live—hence the professional, sophisticated atmosphere.
                  </p>
                </div>

                <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                  <h4 className="font-semibold text-emerald-100 mb-3">💰 Price & Clubs</h4>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Club membership:</strong> €15-30 (higher quality facilities)</li>
                    <li><strong>Consumption contribution:</strong> €8-12 per gram</li>
                    <li><strong>Club quality:</strong> High. Expect comfortable lounges, good cannabis selection, professional staff</li>
                    <li><strong>Best for:</strong> Tourists, first-timers, anyone wanting a premium experience</li>
                  </ul>
                </div>

                <div className="bg-emerald-900/10 border border-emerald-800/30 rounded-lg p-4">
                  <p className="text-sm text-emerald-100">
                    <strong>Our recommendation:</strong> If you're visiting Madrid for the first time and want the best cannabis club experience, start here. The clubs are professional, the area is safe, and you'll feel comfortable.
                  </p>
                </div>
              </div>
            </section>

            {/* Malasaña / Centro */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                🥈 Malasaña & Centro — Downtown Alternative
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  <strong className="text-emerald-100">The young, artsy vibe.</strong> Malasaña and Centro are downtown neighborhoods with excellent cannabis clubs, vibrant nightlife, and a younger energy. Perfect if you're staying downtown or want a more bohemian atmosphere.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">📍 Location & Access</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Central Madrid, near Plaza Mayor</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Metro: Línea 1, 5 (Tribunal, Bilbao, Noviciado)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Walking distance from most downtown hotels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🎯 Why This Area?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Great if staying downtown</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Young, artsy, lively atmosphere</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Lots of restaurants, bars, nightlife</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-950/20 border border-amber-900/30 p-6">
                  <h4 className="font-semibold text-amber-100 mb-3">🏘️ The Neighborhood</h4>
                  <p className="text-sm leading-relaxed">
                    Malasaña is the heart of Madrid's alternative scene. Graffiti art, vintage shops, indie cafés, and a young creative energy define the area. Centro includes the famous Puerta del Sol and Plaza Mayor—the tourist heart of the city. Clubs here cater to a younger, more eclectic crowd. The vibe is more casual and social than Vallehermoso.
                  </p>
                </div>

                <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                  <h4 className="font-semibold text-emerald-100 mb-3">💰 Price & Clubs</h4>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Club membership:</strong> €10-25 (slightly cheaper than Vallehermoso)</li>
                    <li><strong>Consumption contribution:</strong> €6-10 per gram</li>
                    <li><strong>Club quality:</strong> Good. Comfortable, less formal than Vallehermoso, more social</li>
                    <li><strong>Best for:</strong> Social visitors, young travelers, those seeking nightlife and dining</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Lavapiés */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                🌍 Lavapiés — Diverse & Bohemian
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  <strong className="text-emerald-100">The multicultural gem.</strong> Lavapiés is Madrid's most diverse neighborhood with cannabis clubs, international food, and a bohemian community. Good option if you want to experience authentic Madrid beyond tourism.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">📍 Location & Access</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>South of Centro, near Atocha train station</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Metro: Línea 1 (Lavapiés)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>5-10 min from Atocha, walking distance from Centro</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🎯 Why This Area?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Authentic, multicultural Madrid</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Several quality clubs</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Great food and culture</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-950/20 border border-amber-900/30 p-6">
                  <h4 className="font-semibold text-amber-100 mb-3">🏘️ The Neighborhood</h4>
                  <p className="text-sm leading-relaxed">
                    Lavapiés is downtown but more bohemian. You'll find international food, art galleries, cultural spaces, and a diverse community. The vibe is laid-back and artistic. It's less touristy than Centro but less upscale than Vallehermoso. Perfect for travelers wanting to experience local Madrid.
                  </p>
                </div>

                <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                  <h4 className="font-semibold text-emerald-100 mb-3">💰 Price & Clubs</h4>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Club membership:</strong> €10-20 (budget-friendly)</li>
                    <li><strong>Consumption contribution:</strong> €5-10 per gram</li>
                    <li><strong>Club quality:</strong> Good. More laid-back, diverse members, real local experience</li>
                    <li><strong>Best for:</strong> Budget travelers, those seeking authentic local experience</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Salamanca */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                💎 Salamanca — Upscale & Sophisticated
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  <strong className="text-emerald-100">For luxury seekers.</strong> Salamanca is Madrid's wealthiest neighborhood with premium shopping, excellent restaurants, and high-end cannabis clubs. A great option if you want luxury and don't mind paying more.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">📍 Location & Access</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>East Madrid, upscale residential area</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Metro: Línea 9, 10 (Serrano, Goya)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>10-15 min from most hotels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">🎯 Why This Area?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Premium clubs and experience</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Excellent dining and shopping</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Wealthy, educated, sophisticated crowd</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-amber-950/20 border border-amber-900/30 p-6">
                  <h4 className="font-semibold text-amber-100 mb-3">🏘️ The Neighborhood</h4>
                  <p className="text-sm leading-relaxed">
                    Salamanca is Madrid's answer to Beverly Hills. High-end designer stores, Michelin-starred restaurants, luxury apartments, and an affluent community. It's beautiful but expensive. The cannabis clubs here reflect this—they're premium establishments with top-tier facilities.
                  </p>
                </div>

                <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                  <h4 className="font-semibold text-emerald-100 mb-3">💰 Price & Clubs</h4>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Club membership:</strong> €25-50 (premium fees)</li>
                    <li><strong>Consumption contribution:</strong> €10-15 per gram</li>
                    <li><strong>Club quality:</strong> Excellent. Upscale interiors, top cannabis selection, professional service</li>
                    <li><strong>Best for:</strong> Luxury travelers, business visitors, those seeking premium experience</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usera / Carabanchel */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                🌱 Usera & Carabanchel — Emerging Scenes
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  <strong className="text-emerald-100">The up-and-coming neighborhoods.</strong> Usera and Carabanchel are south-central working-class neighborhoods with a growing cannabis scene. Good options if you're staying south of central Madrid.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">📍 Location & Access</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>South-central Madrid, residential</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>Metro: Línea 6, 11 (Usera, Aluche)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">•</span>
                        <span>10-20 min from downtown, less touristy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6">
                    <h4 className="font-semibold text-emerald-100 mb-3">💰 Price & Clubs</h4>
                    <ul className="space-y-3 text-sm">
                      <li><strong>Club membership:</strong> €10-15 (budget-friendly)</li>
                      <li><strong>Consumption contribution:</strong> €5-8 per gram</li>
                      <li><strong>Club quality:</strong> Good. Growing infrastructure, friendly locals</li>
                      <li><strong>Best for:</strong> Budget travelers, those seeking local, non-touristy experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Choosing Your Neighborhood */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                How to Choose: Decision Matrix
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Choose your cannabis neighborhood based on your priorities:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a2420]">
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Your Priority</th>
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Best Neighborhood</th>
                        <th className="text-left py-4 px-4 font-semibold text-emerald-100">Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">First-time visitor</td>
                        <td className="py-4 px-4">Vallehermoso/Chamberí</td>
                        <td className="py-4 px-4 text-xs">Professional, safest experience</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Budget conscious</td>
                        <td className="py-4 px-4">Lavapiés or Usera</td>
                        <td className="py-4 px-4 text-xs">Cheapest clubs and fees</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Staying downtown</td>
                        <td className="py-4 px-4">Malasaña/Centro</td>
                        <td className="py-4 px-4 text-xs">Walking distance, nightlife</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Luxury experience</td>
                        <td className="py-4 px-4">Salamanca</td>
                        <td className="py-4 px-4 text-xs">Premium clubs, great dining</td>
                      </tr>
                      <tr className="border-b border-[#1a2420]/50">
                        <td className="py-4 px-4">Local, authentic vibe</td>
                        <td className="py-4 px-4">Lavapiés</td>
                        <td className="py-4 px-4 text-xs">Diverse, less touristy</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4">Social, young crowd</td>
                        <td className="py-4 px-4">Malasaña</td>
                        <td className="py-4 px-4 text-xs">Artsy, vibrant, nightlife</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Transport Tips */}
            <section className="rounded-lg border border-[#1a2420] bg-[#111916] p-8 sm:p-10">
              <h2 className="mb-6 text-3xl font-bold text-emerald-400">
                Getting Around: Madrid Metro Guide
              </h2>

              <div className="space-y-6 text-[#e8ece9]/80">
                <p className="leading-relaxed">
                  Madrid's Metro is the fastest, cheapest, and most reliable way to reach any neighborhood's cannabis clubs.
                </p>

                <div className="rounded-lg bg-emerald-950/20 border border-emerald-900/30 p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald-100 mb-2">🎫 Getting a Metro Card</h4>
                    <p className="text-sm leading-relaxed">
                      Buy a <strong>T-Casual card</strong> at any Metro station (€12.35 for 10 journeys, valid 3 months). It's the cheapest option. Download the <strong>TMB app</strong> for directions and real-time info.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-emerald-100 mb-2">⏱️ Travel Times to Key Areas</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">→</span>
                        <span><strong>Sol (city center)</strong> to Vallehermoso: 8-10 min</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">→</span>
                        <span><strong>Sol</strong> to Malasaña: 5 min</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">→</span>
                        <span><strong>Sol</strong> to Lavapiés: 3 min</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 flex-shrink-0">→</span>
                        <span><strong>Sol</strong> to Salamanca: 10 min</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-emerald-100 mb-2">🚌 Alternative: Buses</h4>
                    <p className="text-sm leading-relaxed">
                      Madrid has excellent bus networks. Buses use the same T-Casual card and are good for some routes, but Metro is generally faster and more direct to cannabis neighborhoods.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-emerald-100 mb-2">🚕 Uber/Taxis</h4>
                    <p className="text-sm leading-relaxed">
                      Taxis exist and Uber works. However, they're expensive for frequent trips. Use Metro. If you take a cab to a club, be discreet—no need to announce your destination.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="mt-16">
              <CTA
                variant="inline"
                headline="Visit Madrid's Best Cannabis Club"
                text="Located in the heart of Vallehermoso, we offer the ultimate cannabis club experience in Madrid. Professional, welcoming, premium facilities."
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
                  href="/cannabis-laws-spain"
                  className="group flex items-center gap-3 rounded-lg p-4 border border-emerald-900/30 hover:border-emerald-700/50 hover:bg-emerald-950/20 transition-all"
                >
                  <div className="text-xl">⚖️</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#e8ece9] group-hover:text-emerald-100 transition-colors line-clamp-2">
                      Cannabis Laws in Spain
                    </h4>
                    <p className="text-xs text-[#e8ece9]/60 mt-1">Legal framework and what's allowed</p>
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
            subtitle="Navigate Madrid's neighborhoods with confidence"
            includeSchema={true}
          />
        </section>

        {/* Bottom CTA */}
        <section className="px-4 py-12 sm:py-16 lg:py-20 bg-[#111916]">
          <CTA
            variant="banner"
            headline="Find Your Perfect Cannabis Club in Madrid"
            text="Discover verified cannabis social clubs in Madrid's best neighborhoods. Professional. Safe. Legal."
          />
        </section>
      </main>
    </>
  );
}
