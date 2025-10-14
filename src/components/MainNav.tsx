import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { useLanguage } from '@/hooks/useLanguage';

// Les clés correspondent aux sous-clés de translations.navigation
const navigationItems = [
  { key: 'home', href: '/' },
  { key: 'grammar', href: '/grammar-dictionary' },
  { key: 'preaching', href: '/preaching' },
  { key: 'bibleStudies', href: '/bible-studies' },
  { key: 'notes', href: '/notes' },
  { key: 'about', href: '/about' },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'kea' : 'pt');
  };
  
  const getLanguageLabel = () => {
    return language === 'pt' ? 'PT' : 'CV';
  };
  
  const getLanguageTitle = () => {
    return language === 'pt' 
      ? 'Mudar para Crioulo' 
      : 'Mudar para Português';
  };

  // Éviter l'hydratation côté serveur
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-area-padding-top">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-2 touch-manipulation">
            <span className="inline-block h-7 w-7 rounded-full bg-primary"></span>
            <span className="text-lg font-bold">KBVLYON</span>
          </Link>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden items-center space-x-2 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground hover:bg-muted/50 touch-manipulation"
            >
              {t(`navigation.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          {/* Bouton de langue visible sur tous les écrans */}
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0 touch-manipulation" // Augmenté pour mobile
            onClick={toggleLanguage}
            title={getLanguageTitle()}
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">
              {getLanguageTitle()}
            </span>
            <span className="ml-1 text-xs font-medium">{getLanguageLabel()}</span>
          </Button>

          {/* Bouton de thème visible uniquement sur md et plus, et dans le menu mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <OfflineIndicator showText={false} />
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0 md:hidden touch-manipulation"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">
              {isOpen ? t('common.close') : t('common.menu')}
            </span>
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden safe-area-padding-bottom"
          >
            <div className="space-y-2 px-4 pb-4 pt-3 max-h-[calc(100dvh-4rem)] overflow-y-auto">
              {navigationItems.map((item) => {
                const handleClick = () => {
                  setIsOpen(false);
                  // Délai pour permettre l'animation de fermeture
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                };

                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="block px-4 py-4 text-base font-medium text-foreground hover:bg-muted/50 hover:text-foreground rounded-lg touch-manipulation active:scale-95 transition-transform"
                    onClick={handleClick}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                );
              })}
              <div className="border-t border-border pt-4 px-4 pb-3 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">
                    {t('settings.theme')}
                  </span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">
                    {t('settings.changeLanguage')}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-12 px-4 text-base touch-manipulation"
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    title={getLanguageTitle()}
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    {getLanguageLabel()}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
