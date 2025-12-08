import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.maisoncostermans.be' // Replace with actual domain
  const locales = ['fr', 'en', 'nl']
  const pages = [
    '', // home
    '/day',
    '/night',
    '/about',
    '/contact',
    '/legal'
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
    case '': return 1.0 // homepage
    case '/day':
    case '/night': return 0.9 // main menu pages
    case '/about':
    case '/contact': return 0.8 // important pages
    case '/legal': return 0.3 // legal page
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