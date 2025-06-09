import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'cv' : 'pt');
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-white text-primary-dark px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      aria-label={t('ui.changeLanguage')}
    >
      <Globe size={20} />
      <span className="font-semibold">
        {language === 'pt' ? 'PT → CV' : 'CV → PT'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
