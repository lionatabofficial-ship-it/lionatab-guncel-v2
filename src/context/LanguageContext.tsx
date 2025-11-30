'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { translations, type Language, type TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang = 'tr'
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLang);
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);

    // Extract current path without language prefix
    const segments = pathname.split('/').filter(Boolean);
    const pathWithoutLang = segments.slice(1).join('/');

    // Navigate to new language
    const newPath = `/${lang}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
    router.push(newPath);
  }, [router, pathname]);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || translations.tr[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
