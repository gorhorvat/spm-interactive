/**
 * Server-side translation helper for use in Server Components
 * This is a simplified version that directly accesses translations
 * without using React hooks (which are not available in Server Components)
 */
export function getTranslation(key: string, locale: string): string {
  try {
    const translationsModule = require('@/locales/translations');
    const translations = translationsModule.translations || translationsModule.default;
    const normalizedLocale = locale === 'en' ? 'en' : 'hr';
    return translations?.[normalizedLocale]?.[key] || key;
  } catch (error) {
    console.error('Translation error:', error);
    return key;
  }
}

