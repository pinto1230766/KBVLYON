import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'cv', name: 'Kriolu', flag: '🇨🇻' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const changeLanguage = (lng: string) => {
    setLanguage(lng as 'pt' | 'cv');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">{t('iu.mudarIdioma')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
