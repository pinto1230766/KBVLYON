import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/hooks/useLanguage';


const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Dictionnaire', href: '/grammar-dictionary' },
  { name: 'Prédication', href: '/preaching' },
  { name: 'Études Bibliques', href: '/bible-studies' },
  { name: 'À propos', href: '/a-propos' },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'cv' : 'pt');
  };
  
  const getLanguageLabel = () => {
    return language === 'pt' ? 'PT' : 'CV';
  };
  
  const getLanguageTitle = () => {
    return language === 'pt' 
      ? t('nav.changeToCrioulo.pt') 
      : t('nav.changeToPortuguese.pt');
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-12 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block h-6 w-6 rounded-full bg-primary"></span>
            <span className="text-lg font-bold">KBVLYON</span>
          </Link>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="rounded-md px-2 py-1 text-xs font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={toggleLanguage}
              title={getLanguageTitle()}
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">
                {getLanguageTitle()}
              </span>
              <span className="ml-1 text-xs">{getLanguageLabel()}</span>
            </Button>
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">
              {isOpen ? t('nav.menu.close.pt') : t('nav.menu.open.pt')}
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
            className="fixed inset-x-0 top-10 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const handleClick = () => {
                  setIsOpen(false);
                  // Délai pour permettre l'animation de fermeture
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                };
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-xs font-medium text-foreground/70 hover:bg-muted/50 hover:text-foreground"
                    onClick={handleClick}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="border-t border-border pt-2 px-3 py-2 space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    {t('ui.theme')}
                  </span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {t('ui.language')}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs"
                    onClick={toggleLanguage}
                    title={getLanguageTitle()}
                  >
                    <Globe className="h-3.5 w-3.5 mr-1" />
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
