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
};

export default withNextIntl(nextConfig);