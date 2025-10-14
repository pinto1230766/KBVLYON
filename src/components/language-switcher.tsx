import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'kea', label: 'Crioulo' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const cycleLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === language);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];
    setLanguage(nextLanguage.code as 'pt' | 'kea');
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Button
      variant="ghost"
      size="default"
      onClick={cycleLanguage}
      className="flex items-center gap-2 px-3"
    >
      <span className="text-sm font-medium">{currentLanguage?.label}</span>
      <Languages className="h-4 w-4" />
      <span className="sr-only">{t('settings.changeLanguage')}</span>
    </Button>
  );
};

export default LanguageSwitcher;
