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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
