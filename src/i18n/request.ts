import { getRequestConfig } from 'next-intl/server';

export const locales = ['fr', 'nl', 'en'] as const;
export const defaultLocale = 'fr' as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  
  // Validate that the incoming locale parameter is valid
  if (!locale || !locales.includes(locale as typeof locales[number])) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});