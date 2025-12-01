"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Dictionary } from '@/lib/dictionary';

type Language = 'en' | 'vi';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'vi')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'vi' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const value = {
    lang,
    toggleLanguage,
    dict: dictionary[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
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
