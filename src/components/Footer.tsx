import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const navigation = [
    { name: t('nav.home'), href: '/', current: true },
    { name: t('nav.preaching'), href: '/preaching', current: false },
    { name: t('nav.bibleStudies'), href: '/bible-studies', current: false },
  ];

  const resources = [
    { name: 'jw.org/kea', href: 'https://www.jw.org/kea/', icon: ExternalLink },
    { name: 'JW Library', href: 'https://www.jw.org/en/online-help/jwl/', icon: ExternalLink },
    { name: 'JW Broadcasting', href: 'https://tv.jw.org/', icon: ExternalLink },
  ];


  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-[11px]">
      <div className="container py-2">
        {/* Première ligne : Logo et navigation principale */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-2">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary flex-shrink-0"></div>
            <span className="font-bold">KBVLYON</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Deuxième ligne : Ressources */}
        <div className="border-t border-border pt-2 mb-2">
          <h3 className="font-medium text-[11px] mb-1">{t('nav.resources')}</h3>
          <div className="flex flex-wrap gap-2">
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.name}
                <item.icon className="ml-1 h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Troisième ligne : Newsletter */}
        <div className="border-t border-border pt-2 mb-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-[11px]">Newsletter</h3>
              <p className="text-muted-foreground text-[10px] line-clamp-1">
                {t('footer.newsletter')}
              </p>
            </div>
            <div className="w-full sm:w-auto flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 min-w-0 rounded-l-sm border border-r-0 border-input bg-background px-1.5 py-0.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary h-6"
                aria-label="Email"
              />
              <Button type="submit" className="rounded-l-none h-6 px-2 text-[10px]">
                {t('footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Dernière ligne : Copyright et mentions légales */}
        <div className="border-t border-border pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1">
            <p className="text-muted-foreground text-[10px] text-nowrap">
              &copy; {currentYear} DicoCrioulo. {t('footer.rights')}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="#" className="text-muted-foreground hover:text-foreground text-[10px]">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-[10px]">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-[10px]">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
