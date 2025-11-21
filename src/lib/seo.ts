import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  locale: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}

const baseUrl = 'https://www.cafecostermans.be';
const siteName = 'Café Costermans';
const defaultImage = '/images/home/hero.jpg';

export function generatePageMetadata({
  title,
  description,
  path,
  locale,
  keywords = [],
  image = defaultImage,
  type = 'website'
}: SEOConfig): Metadata {
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const canonicalUrl = locale === 'fr' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Generate alternate language URLs
  const alternateLanguages = {
    'fr': `${baseUrl}${path}`,
    'en': `${baseUrl}/en${path}`,
    'nl': `${baseUrl}/nl${path}`,
    'x-default': `${baseUrl}${path}`
  };

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      type,
      locale: getOpenGraphLocale(locale),
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
          type: 'image/jpeg',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@cafecostermans',
      site: '@cafecostermans',
    },
  };
}

function getOpenGraphLocale(locale: string): string {
  const localeMap: Record<string, string> = {
    'fr': 'fr_BE',
    'en': 'en_US',
    'nl': 'nl_BE'
  };
  return localeMap[locale] || 'en_US';
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export const keywordsByLanguage = {
  fr: {
    default: [
      'café Bruxelles',
      'restaurant Sablon',
      'terrasse Bruxelles',
      'brunch Bruxelles',
      'café quartier antiquaires',
      'restaurant patrimoine Bruxelles',
      'Place du Grand Sablon',
      'cuisine belge',
      'café artisanal',
      'terrasse secrète',
      'intérieur cosy',
      'restaurant Bruxelles'
    ],
    pages: {
      home: ['café Costermans', 'adresse secrète Bruxelles', 'terrasse cachée Sablon'],
      day: ['brunch Bruxelles', 'menu déjeuner', 'café du matin', 'restaurant de jour'],
      night: ['dîner Bruxelles', 'restaurant soir', 'sélection vins', 'cocktails artisanaux'],
      about: ['café patrimoine', 'histoire Costermans', 'tradition familiale', 'connexion antiquaires'],
      contact: ['contact café', 'réservation Bruxelles', 'localisation Sablon', 'heures ouverture'],
      legal: ['mentions légales', 'politique confidentialité', 'café Costermans juridique']
    }
  },
  en: {
    default: [
      'café Brussels',
      'Sablon restaurant',
      'terrace dining Brussels',
      'brunch Brussels',
      'antique district café',
      'heritage restaurant Brussels',
      'Place du Grand Sablon',
      'Belgian cuisine',
      'artisan coffee',
      'secret terrace',
      'cozy interior',
      'Brussels dining'
    ],
    pages: {
      home: ['café Costermans', 'secret address Brussels', 'hidden terrace Sablon'],
      day: ['brunch Brussels', 'lunch menu', 'morning coffee', 'daytime dining'],
      night: ['dinner Brussels', 'evening dining', 'wine selection', 'craft cocktails'],
      about: ['heritage café', 'Costermans history', 'family tradition', 'antique connection'],
      contact: ['contact café', 'Brussels reservation', 'Sablon location', 'opening hours'],
      legal: ['legal notice', 'privacy policy', 'café Costermans legal']
    }
  },
  nl: {
    default: [
      'café Brussel',
      'restaurant Zavel',
      'terras Brussel',
      'brunch Brussel',
      'café antiekwijk',
      'erfgoed restaurant Brussel',
      'Grote Zavel',
      'Belgische keuken',
      'ambachtelijke koffie',
      'geheim terras',
      'gezellig interieur',
      'restaurant Brussel'
    ],
    pages: {
      home: ['café Costermans', 'geheim adres Brussel', 'verborgen terras Zavel'],
      day: ['brunch Brussel', 'lunch menu', 'ochtendkoffie', 'dagrestaurant'],
      night: ['diner Brussel', 'avondrestaurant', 'wijnselectie', 'ambachtelijke cocktails'],
      about: ['erfgoed café', 'Costermans geschiedenis', 'familietraditie', 'antiek connectie'],
      contact: ['contact café', 'Brussel reservering', 'Zavel locatie', 'openingstijden'],
      legal: ['juridische informatie', 'privacybeleid', 'café Costermans juridisch']
    }
  }
} as const;

export function getKeywordsForPage(locale: string, page: keyof typeof keywordsByLanguage.fr.pages): string[] {
  const lang = locale as keyof typeof keywordsByLanguage;
  const langKeywords = keywordsByLanguage[lang] || keywordsByLanguage.fr;
  return [...langKeywords.default, ...langKeywords.pages[page]];
}