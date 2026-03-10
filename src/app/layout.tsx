import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cannabis Clubs Madrid — Complete Guide (2026)",
  description:
    "Discover the complete guide to cannabis clubs, laws, neighborhoods, and etiquette in Madrid. Learn how to join clubs, find the best dispensaries, and navigate cannabis culture in Spain's capital.",
  keywords: [
    "cannabis clubs Madrid",
    "weed madrid",
    "how to join cannabis clubs",
    "Madrid cannabis laws",
    "cannabis neighborhoods Madrid",
  ],
  authors: [{ name: "Madrid Cannabis Guide" }],
  alternates: {
    canonical: "https://madridcannabisguide.com",
  },
  openGraph: {
    type: "website",
    url: "https://madridcannabisguide.com",
    locale: "en_US",
    title: "Cannabis Clubs Madrid — Complete Guide (2026)",
    description:
      "Discover the complete guide to cannabis clubs, laws, neighborhoods, and etiquette in Madrid.",
    images: [
      {
        url: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/madrid-cannabis-guide/hero-madrid-gran-via",
        width: 1200,
        height: 630,
        alt: "Madrid Cannabis Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cannabis Clubs Madrid — Guide 2026",
    description:
      "Your complete guide to cannabis in Madrid — clubs, laws, neighborhoods, and etiquette.",
    images: ["https://res.cloudinary.com/dhuc2wmhp/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/madrid-cannabis-guide/hero-madrid-gran-via"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://madridcannabisguide.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Madrid Cannabis Guide",
              url: "https://madridcannabisguide.com",
              description:
                "Complete guide to cannabis clubs, laws, and culture in Madrid",
              sameAs: [
                "https://madridcannabisclubs.com",
                "https://weedmadrid.com",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
                addressRegion: "Madrid",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased font-body`}>
        <ReadingProgress />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
