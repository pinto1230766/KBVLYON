import React, { useState, ReactNode, useEffect } from 'react';
import { LanguageContext } from './LanguageContextDefinition';
import { Language } from '../types/language.d';
import i18n from 'i18next';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Mettre à jour i18n lorsque la langue change
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // Utiliser directement i18n pour les traductions
  const t = (key: string): string => {
    return i18n.t(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
