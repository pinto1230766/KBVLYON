import React from 'react'; // useState et Button supprimés des imports
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
// import { Button } from './ui/button'; // Supprimé car non utilisé
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage(); // language et états/fonction pour newsletter supprimés
  const currentYear = new Date().getFullYear();
  
  // La constante 'navigation' a été supprimée car elle n'est plus utilisée.

  const resources = [
    { name: 'jw.org/kea', href: 'https://www.jw.org/kea/', icon: ExternalLink },
    { name: 'JW Library', href: 'https://www.jw.org/kea/ajuda/jw-library/', icon: ExternalLink },
    { name: 'JW Broadcasting', href: 'https://www.jw.org/kea/biblioteka-online/tv-jw-org/', icon: ExternalLink },
  ];


  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-[11px]">
      <div className="container py-2">
        {/* Section Ressources */}
        <div className="border-t border-border pt-2 mb-2">
          <h3 className="font-medium text-xs mb-1">{t('paginaInicial.tituloRecursos')}</h3>
          <div className="flex flex-wrap gap-x-2 gap-y-0.5">
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.name}
                <item.icon className="ml-0.5 h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright et mentions légales */}
        <div className="border-t border-border pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-0.5">
            <p className="text-muted-foreground text-[10px] text-center md:text-left">
              &copy; {currentYear} KBVLYON. {t('rodape.direitos')}
            </p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-[10px]">
                {t('rodape.privacidade')}
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-[10px]">
                {t('rodape.termos')}
              </Link>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground text-[10px]">
                {t('rodape.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
