import type { MetadataRoute } from 'next'

const BASE_URL = 'https://madridcannabisguide.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/cannabis-laws-spain', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/how-to-join-cannabis-club', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/best-neighborhoods-cannabis-madrid', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/cannabis-club-etiquette', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/prices-what-to-expect', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/madrid-vs-amsterdam', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date('2026-03-09'),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
