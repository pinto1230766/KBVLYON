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
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-xs"> {/* text-[11px] à text-xs */}
      <div className="container py-4"> {/* py-2 à py-4 */}
        {/* La première ligne (Logo et navigation principale) a été supprimée comme demandé */}
        
        {/* Deuxième ligne : Ressources */}
        <div className="border-t border-border pt-3 mb-3"> {/* pt-2 à pt-3, mb-2 à mb-3 */}
          <h3 className="font-medium text-sm mb-1.5">{t('paginaInicial.tituloRecursos')}</h3> {/* Changé de nav.resources */}
          <div className="flex flex-wrap gap-x-3 gap-y-1"> {/* gap-2 à gap-x-3 gap-y-1 */}
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap text-xs" // Ajout de text-xs
              >
                {item.name}
                <item.icon className="ml-1 h-3.5 w-3.5" /> {/* h-3 w-3 à h-3.5 w-3.5 */}
              </a>
            ))}
          </div>
        </div>
        
        {/* La section Newsletter a été supprimée */}
        
        {/* Dernière ligne : Copyright et mentions légales */}
        {/* Ajustement de la marge supérieure si la section newsletter était la seule avant */}
        <div className="border-t border-border pt-3"> 
          <div className="flex flex-col md:flex-row justify-between items-center gap-1">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              &copy; {currentYear} KBVLYON. {t('rodape.direitos')}
            </p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-xs">
                {t('rodape.privacidade')}
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-xs">
                {t('rodape.termos')}
              </Link>
              <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground text-xs">
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
