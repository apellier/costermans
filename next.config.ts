import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Par défaut, ce plugin cherche le fichier dans './src/i18n/request.ts'
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* Vos autres options de config ici si nécessaire */
};

export default withNextIntl(nextConfig);