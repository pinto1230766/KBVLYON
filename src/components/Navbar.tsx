import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, MessageCircle, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  
  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'cv' : 'pt');
  };
  
  const navLinks = [
    { to: '/', label: t('nav.home'), icon: <Home size={20} /> },
    { to: '/preaching', label: t('nav.preaching'), icon: <MessageCircle size={20} /> },
    { to: '/bible-studies', label: t('nav.bibleStudies'), icon: <Heart size={20} /> }
  ];
  
  // Référence pour le conteneur de la barre de navigation
  const menuRef = React.useRef<HTMLDivElement>(null);

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-40 shadow-md" ref={menuRef}>
      <div className="container mx-auto px-3">
        <nav className="flex justify-between items-center h-10">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen size={16} className="flex-shrink-0" />
            <span className="font-bold whitespace-nowrap text-sm">KBVLYON</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-1 px-2 py-1 text-sm rounded transition-colors hover:bg-primary-light ${
                  location.pathname === link.to ? 'bg-primary-light' : ''
                }`}
              >
                {React.cloneElement(link.icon, { className: 'flex-shrink-0' })}
                <span className="whitespace-nowrap">{link.label}</span>
              </Link>
            ))}
          </div>
          {/* Sélecteur de langue à droite */}
          <div className="flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors"
              aria-label="Changer de langue"
            >
              <Globe size={16} />
              <span>{language === 'pt' ? 'PT' : 'CV'}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
