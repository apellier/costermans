import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { spaceGrotesk } from '@/lib/fonts';
import { generatePageMetadata, defaultKeywords } from '@/lib/seo';
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = generatePageMetadata({
  title: 'Café Costermans',
  description: 'Experience refined café culture at our secret terrace in Brussels\' historic Sablon district. Heritage meets modern hospitality at Café Costermans.',
  path: '',
  locale: 'fr', // Default locale
  keywords: defaultKeywords,
  image: '/images/home/hero.jpg'
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Café Costermans',
    description: 'A refined café and brunch destination in the heart of Brussels\' Sablon district, connected to the heritage of Costermans Antiquaire.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5 place du grand sablon',
      addressLocality: 'Bruxelles',
      postalCode: '1000',
      addressCountry: 'BE',
    },
    email: 'cafecostermans@gmail.com',
    url: 'https://costermans.be',
    priceRange: '€€',
    servesCuisine: ['European', 'Belgian', 'Brunch'],
    openingHours: [
      'Tu 09:00-18:00',
      'We 09:00-23:00',
      'Th 09:00-23:00',
      'Fr 09:00-23:00',
      'Sa 09:00-18:00',
      'Su 09:00-18:00'
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.8394',
      longitude: '4.3587',
    },
    sameAs: [
      'https://www.instagram.com/cafecostermans/?hl=fr'
    ],
  };

  return (
    <html lang={locale} className={spaceGrotesk.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
