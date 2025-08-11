import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Café Costermans',
    default: 'Café Costermans - Secret Terrace in Brussels Sablon'
  },
  description: 'Experience refined café culture at our secret terrace in Brussels\' historic Sablon district. Heritage meets modern hospitality at Café Costermans.',
  keywords: ['café Brussels', 'Sablon restaurant', 'terrace dining Brussels', 'brunch Brussels', 'antique district café', 'heritage restaurant Brussels', 'Place du Grand Sablon'],
  authors: [{ name: 'Café Costermans' }],
  creator: 'Café Costermans',
  publisher: 'Café Costermans',
  alternates: {
    canonical: 'https://costermans.be',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://costermans.be',
    title: 'Café Costermans - Secret Terrace in Brussels Sablon',
    description: 'Experience refined café culture at our secret terrace in Brussels\' historic Sablon district. Heritage meets modern hospitality.',
    siteName: 'Café Costermans',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Café Costermans - Secret Terrace in Brussels Sablon',
    description: 'Experience refined café culture at our secret terrace in Brussels\' historic Sablon district.',
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Café Costermans',
    description: 'A refined café and brunch destination in the heart of Brussels\' Sablon district, connected to the heritage of Costermans Antiquaire.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Place du Grand Sablon',
      addressLocality: 'Brussels',
      postalCode: '1000',
      addressCountry: 'BE',
    },
    telephone: '+32123456789',
    email: 'hello@costermans.be',
    url: 'https://costermans.be',
    priceRange: '€€',
    servesCuisine: ['European', 'Belgian', 'Brunch'],
    openingHours: [
      'Mo-Fr 08:00-17:00',
      'Sa 09:00-18:00', 
      'Su 09:00-16:00'
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.8394',
      longitude: '4.3587',
    },
    sameAs: [
      // Add social media URLs when available
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
