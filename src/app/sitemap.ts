import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://costermans.be' // Use official domain
  const locales = ['fr', 'en', 'nl']
  const pages = [
    '', // hub
    '/cafe',
    '/cafe/day',
    '/cafe/night',
    '/cafe/about',
    '/cafe/contact',
    '/cafe/legal'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add pages for each locale
  locales.forEach(locale => {
    pages.forEach(page => {
      const url = locale === 'fr'
        ? `${baseUrl}${page}` // Default locale (French) without prefix
        : `${baseUrl}/${locale}${page}`

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: getPriority(page),
        alternates: {
          languages: getAlternateLanguages(baseUrl, page)
        }
      })
    })
  })

  return sitemap
}

function getPriority(page: string): number {
  switch (page) {
    case '': return 1.0 // homepage (hub)
    case '/cafe': return 0.9 // cafe home
    case '/cafe/day':
    case '/cafe/night': return 0.8 // main menu pages
    case '/cafe/about':
    case '/cafe/contact': return 0.7 // important pages
    case '/cafe/legal': return 0.3 // legal page
    default: return 0.5
  }
}

function getAlternateLanguages(baseUrl: string, page: string) {
  return {
    'fr': `${baseUrl}${page}`,
    'en': `${baseUrl}/en${page}`,
    'nl': `${baseUrl}/nl${page}`
  }
}