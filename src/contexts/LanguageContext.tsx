import React, { useState, ReactNode } from 'react';
import { LanguageContext } from './LanguageContextDefinition';
import { translations } from '../data/translations';
import { Language } from '../types/language.d';
import { NestedTranslation, TranslationText, Translations } from '../types/translations.d';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const keys = key.split('.');
    let currentTranslation: Translations | NestedTranslation | TranslationText = translations;

    for (const k of keys) {
      if (typeof currentTranslation === 'object' && currentTranslation !== null && k in currentTranslation) {
        currentTranslation = (currentTranslation as NestedTranslation)[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }
    
    if (typeof currentTranslation === 'object' && currentTranslation !== null && 'pt' in currentTranslation && 'cv' in currentTranslation) {
      return (currentTranslation as TranslationText)[language] || key;
    }
    
    return key; // Fallback if the final result is not a TranslationText
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
