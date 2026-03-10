import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Par défaut, ce plugin cherche le fichier dans './src/i18n/request.ts'
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/:locale(fr|en|nl)/day',
        destination: '/:locale/cafe/day',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|nl)/night',
        destination: '/:locale/cafe/night',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|nl)/about',
        destination: '/:locale/cafe/about',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|nl)/contact',
        destination: '/:locale/cafe/contact',
        permanent: true,
      },
      {
        source: '/:locale(fr|en|nl)/legal',
        destination: '/:locale/cafe/legal',
        permanent: true,
      },
      // Non-locale paths (middleware will handle locale prefix after redirect)
      {
        source: '/day',
        destination: '/cafe/day',
        permanent: true,
      },
      {
        source: '/night',
        destination: '/cafe/night',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/cafe/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/cafe/contact',
        permanent: true,
      },
      {
        source: '/legal',
        destination: '/cafe/legal',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);