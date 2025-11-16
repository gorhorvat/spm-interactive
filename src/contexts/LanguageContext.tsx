'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/locales/translations';

type Language = 'hr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('hr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'hr' ? 'en' : 'hr'));
  };

  const getTranslation = (key: string): string => {
    return translations[language][key as keyof typeof translations.hr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: getTranslation }}>
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
