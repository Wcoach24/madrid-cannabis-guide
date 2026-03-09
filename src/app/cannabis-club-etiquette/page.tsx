import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Cannabis Club Etiquette in Madrid — Rules, Tips & What to Expect (2026)',
  description: 'Learn the essential rules and etiquette for cannabis social clubs in Madrid. Don\'t make these mistakes on your first visit. Complete guide to club culture and social norms.',
  keywords: 'cannabis club etiquette, Madrid cannabis rules, social club tips, what to expect cannabis club',
  openGraph: {
    title: 'Cannabis Club Etiquette in Madrid — Rules, Tips & What to Expect (2026)',
    description: 'Learn the essential rules and etiquette for cannabis social clubs in Madrid. Don\'t make these mistakes on your first visit.',
    type: 'article',
    locale: 'es_ES',
    url: 'https://madridcannabisguide.com/cannabis-club-etiquette',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis Club Etiquette in Madrid',
    description: 'Learn the essential rules and etiquette for cannabis social clubs in Madrid.',
  },
};

const faqItems = [
  {
    question: 'Can I take photos inside a cannabis club?',
    answer: 'No. Photography and video recording are strictly prohibited in cannabis clubs. Clubs are private spaces and members value privacy. Taking photos without permission can result in immediate removal and potential bans. Respect other members\' confidentiality.',
  },
  {
    question: 'Should I tip the budtender?',
    answer: 'Yes, tipping is appreciated but not mandatory. €1-2 is standard for small purchases, or 5-10% for larger orders. Staff work hard to maintain quality service and a welcoming atmosphere. Tipping shows respect and can improve your relationship with the club.',
  },
  {
    question: 'What if I\'m new and don\'t know anyone?',
    answer: 'Most clubs have policies for tourists and newcomers. Arrive during quieter hours, be friendly and respectful, and staff will guide you through the process. Ask questions if you\'re unsure about anything. Clubs want you to have a positive experience.',
  },
  {
    question: 'Is it okay to bring my own rolling papers or supplies?',
    answer: 'Yes, bringing your own supplies is completely normal and expected. Many members prefer using their own rolling papers, grinders, and filters. Most clubs provide some supplies but you\'ll feel more comfortable with your own.',
  },
  {
    question: 'What should I do with empty containers or trash?',
    answer: 'Always throw trash in the designated bins. If you use a product, ensure the packaging is disposed of properly. Keep your area clean and respect the shared space. Some clubs have specific protocols for waste management.',
  },
];

export default function CannabisClubEtiquettePage() {
  return (
    <main className="w-full bg-[#0a0f0d]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Cannabis Club Etiquette in Madrid — Rules, Tips & What to Expect (2026)',
            description: 'Learn the essential rules and etiquette for cannabis social clubs in Madrid.',
            image: 'https://madridcannabisguide.com/og-etiquette.jpg',
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
        <div className="absolute inset-0 -z-20"><Image src="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1200/madrid-cannabis-guide/cozy-etiquette-interior" alt="Stylish interior of a private members club representing cannabis club etiquette in Madrid" fill className="object-cover" sizes="100vw" priority /></div><div className="absolute inset-0 -z-15 bg-[#0a0f0d]/75" /><div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
          <div className="absolute -bottom-32 left-0 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen opacity-5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111916] border border-emerald-900/30">
            <span className="text-emerald-400">🤝</span>
            <span className="text-sm text-emerald-300/80">Club Culture & Social Norms</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#e8ece9]">
            Cannabis Club Etiquette in Madrid
          </h1>

          <p className="text-xl text-[#e8ece9]/70 mb-8 leading-relaxed max-w-2xl">
            Everything you need to know about club rules, unwritten social norms, and how to behave respectfully in Madrid's cannabis social clubs. Master the etiquette and ensure a welcoming experience.
          </p>

          <div className="flex items-center gap-4 text-sm text-[#e8ece9]/60 mb-8">
            <span>📅 Updated March 2026</span>
            <span>•</span>
            <span>⏱️ 8 min read</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
              <div className="text-2xl font-bold text-emerald-400 mb-1">5</div>
              <div className="text-xs text-[#e8ece9]/60">Golden Rules</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
              <div className="text-2xl font-bold text-emerald-400 mb-1">8</div>
              <div className="text-xs text-[#e8ece9]/60">Do's & Don'ts</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
              <div className="text-2xl font-bold text-emerald-400 mb-1">10</div>
              <div className="text-xs text-[#e8ece9]/60">First Visit Tips</div>
            </div>
            <div className="p-4 rounded-lg bg-[#111916] border border-[#1a2420]">
              <div className="text-2xl font-bold text-emerald-400 mb-1">5</div>
              <div className="text-xs text-[#e8ece9]/60">FAQ Answers</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ETIQUETTE MATTERS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-[#111916]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#e8ece9]">
            Why Etiquette Matters
          </h2>

          <div className="space-y-6 text-[#e8ece9]/80">
            <p>
              Cannabis social clubs in Madrid aren't commercial businesses like coffeeshops in Amsterdam—they're private member-owned communities built on trust, privacy, and respect. Understanding and following proper etiquette isn't just about being polite; it's about respecting the legal and cultural framework that allows these clubs to exist.
            </p>

            <div className="p-6 rounded-lg bg-[#111916] border border-emerald-900/30">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">The Core Principle</h3>
              <p>
                Cannabis clubs operate in a legal gray area. They work because members act responsibly and maintain discretion. Breaking etiquette rules puts the entire club at risk. When you join, you're part of a community that has to police itself and self-regulate.
              </p>
            </div>

            <p>
              Your behavior affects not just your experience, but the club's ability to operate and other members' safety and privacy. This is why clubs have strict rules and can ban members who violate them.
            </p>
          </div>
        </div>
      </section>

      {/* GOLDEN RULES */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            The 5 Golden Rules
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-emerald-400">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-emerald-400 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e8ece9] mb-2">Don't Share the Location on Social Media</h3>
                  <p className="text-[#e8ece9]/70">
                    The #1 rule: never post about the club on Instagram, TikTok, or any social platform. Don't tag locations, mention the address, or even post vague stories from inside. This puts the club at risk with authorities and other members' privacy. Many clubs ban members for social media violations immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-emerald-400">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-emerald-400 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e8ece9] mb-2">Don't Bring Non-Members</h3>
                  <p className="text-[#e8ece9]/70">
                    Clubs have membership policies for a reason. You can't just bring random friends. If someone wants to join, they need to go through the official process: getting their own invitation, signing membership paperwork, and paying any fees. Many clubs explicitly ban this with penalties.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-emerald-400">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-emerald-400 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e8ece9] mb-2">Respect Quiet Hours</h3>
                  <p className="text-[#e8ece9]/70">
                    Some clubs have designated quiet areas or hours. Some residents live above or near the club. Keep noise at a reasonable level, especially late at night. If you want to have a loud party, go to a bar. Clubs are social spaces, not nightclubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-emerald-400">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-emerald-400 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e8ece9] mb-2">Keep Everything Inside the Club</h3>
                  <p className="text-[#e8ece9]/70">
                    What you purchase stays in the club. Never take cannabis or paraphernalia outside. This is illegal and puts the club's legal status at risk. The entire point of clubs is that consumption stays in a controlled, private environment. Breaking this rule will get you banned.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border-l-4 border-emerald-400">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-emerald-400 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#e8ece9] mb-2">Consume Responsibly (Or You're Out)</h3>
                  <p className="text-[#e8ece9]/70">
                    Rowdy, aggressive, or disruptive behavior gets you banned. If you're getting too intoxicated, the staff may ask you to leave. Clubs want a relaxed, peaceful atmosphere. If you can't control yourself, you're not welcome back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DO'S SECTION */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            The Do's — What Good Etiquette Looks Like
          </h2>

          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Bring Valid ID
              </h3>
              <p className="text-[#e8ece9]/70">
                Always carry a valid passport, ID card, or resident card. Clubs are required to verify age and identity. Have it ready and be willing to provide it. Many clubs won't let you in without it.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Be Respectful & Polite
              </h3>
              <p className="text-[#e8ece9]/70">
                A simple "hola" and "gracias" go a long way. Staff and members notice politeness. Being respectful creates a better atmosphere for everyone and makes staff more willing to help you. Don't be demanding or entitled.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Follow House Rules
              </h3>
              <p className="text-[#e8ece9]/70">
                Each club has specific rules posted (or verbally explained). Read them. Ask if you're unsure. Rules vary—some clubs allow vaping, some don't; some have specific areas for consumption. Follow them exactly.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Tip the Staff
              </h3>
              <p className="text-[#e8ece9]/70">
                €1-2 for regular purchases, or 5-10% for larger orders. Tipping shows appreciation and is standard practice. Staff are knowledgeable and work hard. Good tippers get better recommendations and service.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Keep the Space Clean
              </h3>
              <p className="text-[#e8ece9]/70">
                Don't leave a mess. Use ashtrays, dispose of trash properly, and wipe up after yourself. Clubs rely on members to maintain cleanliness. A dirty member gets noticed and may be asked to leave.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                <span className="text-xl">✓</span> Engage in Light Conversation
              </h3>
              <p className="text-[#e8ece9]/70">
                Clubs are social spaces. It's okay to chat with other members about cannabis strains, the club, Madrid culture, etc. But respect personal space and don't pry into other people's business. Some members want solitude—respect that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DON'TS SECTION */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            The Don'ts — What Gets You Banned
          </h2>

          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> No Photos or Videos Inside
              </h3>
              <p className="text-[#e8ece9]/70">
                This is absolute. No exceptions. Not even for "private" stories or "just for friends." Clubs value privacy above all. Taking photos without permission results in immediate removal and permanent ban. Your phone may be confiscated.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> No Dealing or Selling
              </h3>
              <p className="text-[#e8ece9]/70">
                Clubs are for members to consume what they purchase. Do not sell, trade, or deal products. This is a serious violation and results in immediate bans. Staff are trained to spot dealers and may involve authorities.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> Don't Take Products Outside
              </h3>
              <p className="text-[#e8ece9]/70">
                Everything must be consumed inside. You cannot leave with products, even a tiny leftover. This is illegal and defeats the entire purpose of social clubs. If caught outside the club with cannabis, you face legal consequences.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> No Rowdy or Aggressive Behavior
              </h3>
              <p className="text-[#e8ece9]/70">
                No shouting, fighting, harassment, or intimidation. Clubs want a calm, peaceful environment. If you're being loud or aggressive, staff will ask you to leave. Multiple violations result in permanent bans.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> Don't Share Club Information
              </h3>
              <p className="text-[#e8ece9]/70">
                Don't post the address, give detailed directions, or share identifying information about the club online or to people who aren't members. This includes reviews on Google Maps or tourist sites. Discretion is everything.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> Don't Bring Other Drugs
              </h3>
              <p className="text-[#e8ece9]/70">
                Clubs are for cannabis only. Don't bring cocaine, MDMA, heroin, or other substances. Using other drugs inside can get you banned and may result in police involvement. Clubs want to maintain a safe, controlled environment.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-red-500/30 transition-colors">
              <h3 className="text-lg font-semibold text-amber-500 mb-3 flex items-center gap-2">
                <span className="text-xl">✗</span> Don't Pressure Other Members
              </h3>
              <p className="text-[#e8ece9]/70">
                Respect other people's consumption choices. Don't pressure someone to smoke more, or judge them for smoking less. Some members are there for pain relief or casual use. Let people do their thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST VISIT TIPS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            First Visit: 10 Tips to Avoid Mistakes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">1</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Arrive Sober</h4>
                <p className="text-sm text-[#e8ece9]/70">You need to sign legal paperwork and be coherent to make decisions.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">2</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Ask Questions</h4>
                <p className="text-sm text-[#e8ece9]/70">Staff expect newcomers to ask. "What's the house rule?" or "Can I record?" is normal.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">3</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Start Small</h4>
                <p className="text-sm text-[#e8ece9]/70">Try a small amount first to see how you react. Quality cannabis is strong.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">4</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Read the Menu</h4>
                <p className="text-sm text-[#e8ece9]/70">Clubs have product lists showing strains, prices, and effects. Study it before ordering.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">5</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Watch Others</h4>
                <p className="text-sm text-[#e8ece9]/70">Observe how members behave and interact. This gives you unspoken norms immediately.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">6</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Respect Silence</h4>
                <p className="text-sm text-[#e8ece9]/70">Some areas or times are quieter. Don't force conversation if the vibe is relaxed.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">7</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Bring Cash</h4>
                <p className="text-sm text-[#e8ece9]/70">While some clubs take cards, cash is safer and more private.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">8</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Know Your Limit</h4>
                <p className="text-sm text-[#e8ece9]/70">Spanish cannabis is potent. Know when to stop to stay comfortable.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">9</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Don't Rush</h4>
                <p className="text-sm text-[#e8ece9]/70">Take your time. Come early to avoid rush hours and stress.</p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#111916] border border-[#1a2420] flex gap-4">
              <span className="text-2xl font-bold text-amber-500 flex-shrink-0">10</span>
              <div>
                <h4 className="font-semibold text-[#e8ece9] mb-1">Smile & Enjoy</h4>
                <p className="text-sm text-[#e8ece9]/70">A positive attitude is infectious. Enjoy the experience and the community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL NORMS & CULTURE */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#e8ece9]">
            Social Norms & Club Culture
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Conversation Etiquette</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Light conversation is welcome. Talk about cannabis strains, the club, Madrid, travel, etc. But don't pry into personal details, politics, or religion. Keep it chill. Some members wear headphones or sit alone—that's a signal they want solitude. Respect that.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Bring Your Own Supplies</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Most members bring their own rolling papers, grinders, filters, and bongs. Some clubs provide basic supplies, but quality-conscious members always bring their own. This is normal and expected. If you don't have supplies, ask staff—they often have extras.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Gender & Inclusive Spaces</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Madrid's cannabis clubs are welcoming to all genders and identities. Treat everyone with respect and dignity. There's no "bro culture" or exclusion in well-managed clubs. Women often feel safer in clubs than street dealing—respect that.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Music & Vibe</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Most clubs have relaxed music or no music. Some have TVs for sports. The vibe is chill, not party-like. If you want loud bass and dancing, go to a club. Clubs are about comfortable consumption and social connection.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Consumption Methods</h3>
              <p className="text-[#e8ece9]/80 mb-4">
                Most people roll joints or use bongs. Vaping is sometimes allowed. Some clubs discourage it. Ask before vaping. Never use a pipe or cigarette papers from other countries—stick to European styles that clubs recognize. Don't mix tobacco and cannabis without asking if it's okay.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-emerald-950/20 border border-emerald-900/50">
              <h4 className="font-semibold text-emerald-300 mb-2">Pro Tip: Timing Matters</h4>
              <p className="text-[#e8ece9]/70">
                Visit during weekday afternoons for a quieter, more relaxed experience. Weekends and nights get busy and loud. If you want to chat with staff or other regulars, midweek is ideal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAVING THE CLUB */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#e8ece9]">
            Leaving the Club — Final Etiquette Rules
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Consume Everything Inside</h3>
              <p className="text-[#e8ece9]/80">
                This cannot be overstated: you cannot leave the club with any cannabis products, not even a crumb. If you purchase a gram and only smoke half, you must consume the rest inside or give it away to another member. Leaving with product is illegal and will result in lifetime bans from all clubs if caught.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Leave No Trace</h3>
              <p className="text-[#e8ece9]/80">
                Before leaving, ensure your area is clean. Put trash in bins, wipe up any residue, and take all your personal items. The club should look as if you were never there. This shows respect and keeps the space pleasant for the next member.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Thank the Staff</h3>
              <p className="text-[#e8ece9]/80">
                A simple "gracias" or "thanks" when leaving shows appreciation. If it was your first time, mention it. Staff will remember you positively and provide better service on future visits.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111916] border border-[#1a2420]">
              <h3 className="text-xl font-semibold text-[#e8ece9] mb-3">Be Discreet When Exiting</h3>
              <p className="text-[#e8ece9]/80">
                Don't draw attention to the club or where you came from when leaving. Walk out casually, don't linger outside the door, and don't talk loudly about the club on the street. Keep it low-key.
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
            headline="Ready to Experience Madrid's Cannabis Culture?"
            text="Learn the etiquette, find a club, and enjoy a safe, respectful experience with thousands of cannabis enthusiasts."
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto">
          <FAQSection
            items={faqItems}
            title="Frequently Asked Questions"
            subtitle="Clear answers to common questions about club etiquette and expectations."
            includeSchema={true}
          />
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-16 px-4 border-t border-[#1a2420] bg-gradient-to-b from-transparent via-[#111916]/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#e8ece9] text-center">
            Continue Learning
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/how-to-join-cannabis-club"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                How to Join a Cannabis Club →
              </h3>
              <p className="text-[#e8ece9]/70">
                Step-by-step guide to finding clubs, getting invited, and completing membership.
              </p>
            </Link>

            <Link
              href="/prices-what-to-expect"
              className="p-6 rounded-lg bg-[#111916] border border-[#1a2420] hover:border-emerald-500/50 hover:bg-[#111916]/80 transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#e8ece9] mb-2 group-hover:text-emerald-400 transition-colors">
                Prices & What to Expect →
              </h3>
              <p className="text-[#e8ece9]/70">
                Understand pricing, quality levels, and how to budget your visit.
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
                Understand Spain's legal framework and how social clubs operate.
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
                Compare cannabis culture, prices, and experiences between two top cities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* EXTERNAL LINKS */}
      <section className="py-16 px-4 border-t border-[#1a2420]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#e8ece9] mb-6">
            Explore More Resources
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-[#0a0f0d] font-semibold hover:bg-amber-400 transition-colors"
            >
              Find Cannabis Clubs →
            </a>
            <a
              href="https://weedmadrid.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-500/50 text-emerald-400 font-semibold hover:bg-emerald-950/30 transition-colors"
            >
              Browse Club Directory →
            </a>
          </div>

          <p className="text-[#e8ece9]/60 text-sm mt-6">
            Last updated: March 2026 | Verified with local cannabis community
          </p>
        </div>
      </section>
    </main>
  );
}
