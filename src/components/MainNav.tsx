import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle';
import { OfflineIndicator } from '@/components/OfflineIndicator';
import { useLanguage } from '@/hooks/useLanguage';

// Les clés correspondent aux sous-clés de translations.navegacao
const navigationItems = [
  { translationKey: 'inicio', href: '/' },
  { translationKey: 'gramaticaDicionario', href: '/grammar-dictionary' },
  { translationKey: 'predicacao', href: '/preaching' },
  { translationKey: 'estudosBiblicos', href: '/bible-studies' },
  { translationKey: 'notas', href: '/notes' }, // Ajout du lien Notes
  { translationKey: 'sobre', href: '/a-propos' },
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
      ? t('navegacao.mudarParaCrioulo.pt') 
      : t('navegacao.mudarParaPortugues.pt');
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
      <div className="container flex h-12 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="inline-block h-6 w-6 rounded-full bg-primary"></span>
            <span className="text-lg font-bold">KBVLYON</span>
          </Link>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.translationKey}
              to={item.href}
              className="rounded-md px-2 py-1 text-xs font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {t(`navegacao.${item.translationKey}`)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-1"> {/* Réduit space-x-2 à space-x-1 pour mobile */}
          {/* Bouton de langue visible sur tous les écrans */}
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0" // Reste visible, ajuster si nécessaire pour l'alignement
            onClick={toggleLanguage}
            title={getLanguageTitle()}
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">
              {getLanguageTitle()}
            </span>
            <span className="ml-1 text-xs">{getLanguageLabel()}</span>
          </Button>
          
          {/* Bouton de thème visible uniquement sur md et plus, et dans le menu mobile */}
          <div className="hidden md:flex items-center space-x-1">
            <OfflineIndicator showText={false} />
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
              {isOpen ? t('navegacao.menu.fechar.pt') : t('navegacao.menu.abrir.pt')}
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
            className="fixed inset-x-0 top-10 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden" // Changé bg-background/95 en bg-background
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
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
                    key={item.translationKey}
                    to={item.href}
                    className="block px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted/50 hover:text-foreground rounded-md" // py-2 à py-3, text-xs à text-sm, text-foreground/70 à text-foreground/80, ajout de rounded-md
                    onClick={handleClick}
                  >
                    {t(`navegacao.${item.translationKey}`)}
                  </Link>
                );
              })}
              <div className="border-t border-border pt-3 px-3 pb-2 space-y-3"> {/* pt-2 à pt-3, py-2 à pb-2, space-y-2 à space-y-3 */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    {t('iu.tema')}
                  </span>
                  <ThemeToggle /> {/* Le bouton Thème reste dans le menu mobile */}
                </div>
                {/* Le bouton de langue a été déplacé hors du menu mobile pour être toujours visible */}
                {/* 
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {t('iu.idioma')}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 px-3 text-sm"
                    onClick={toggleLanguage}
                    title={getLanguageTitle()}
                  >
                    <Globe className="h-4 w-4 mr-1.5" />
                    {getLanguageLabel()}
                  </Button>
                </div>
                */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
