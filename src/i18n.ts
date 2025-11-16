import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { translations } from './locales/translations';

export const locales = ['hr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'hr';

export default getRequestConfig(async ({ locale }) => {
  // Get locale from header set by middleware or use the provided locale
  const headersList = await headers();
  const localeFromHeader = headersList.get('x-locale');
  const actualLocale = (localeFromHeader || locale || 'hr') as Locale;
  
  return {
    locale: actualLocale,
    messages: translations[actualLocale] || translations.hr,
  };
});
