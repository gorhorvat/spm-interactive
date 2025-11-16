'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

type Language = 'hr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Route path mappings between Croatian and English
const routeMappings: Record<string, Record<Language, string>> = {
  '/': { hr: '/', en: '/en' },
  '/en': { hr: '/', en: '/en' },
  '/o-nama': { hr: '/o-nama', en: '/en/about-us' },
  '/en/about-us': { hr: '/o-nama', en: '/en/about-us' },
  '/usluge': { hr: '/usluge', en: '/en/services' },
  '/en/services': { hr: '/usluge', en: '/en/services' },
  '/cesta-pitanja': { hr: '/cesta-pitanja', en: '/en/faq' },
  '/en/faq': { hr: '/cesta-pitanja', en: '/en/faq' },
  '/kontakt': { hr: '/kontakt', en: '/en/contact' },
  '/en/contact': { hr: '/kontakt', en: '/en/contact' },
};

// Get the equivalent path in the new locale
function getLocalizedPath(currentPath: string, newLocale: Language): string {
  // Find matching route mapping
  for (const [key, mapping] of Object.entries(routeMappings)) {
    if (mapping.hr === currentPath || mapping.en === currentPath) {
      return mapping[newLocale];
    }
  }
  
  // Default fallback
  return newLocale === 'hr' ? '/' : '/en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Language;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const toggleLanguage = () => {
    const newLocale: Language = locale === 'hr' ? 'en' : 'hr';
    const newPath = getLocalizedPath(pathname, newLocale);
    router.push(newPath);
  };

  const getTranslation = (key: string): string => {
    try {
      return t(key);
    } catch {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language: locale, toggleLanguage, translations: getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
