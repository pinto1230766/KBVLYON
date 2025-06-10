import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Home, MessageCircle, Book, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { to: '/', label: t('nav.home'), icon: <Home size={20} /> },
    { to: '/preaching', label: t('nav.preaching'), icon: <MessageCircle size={20} /> },
    { to: '/grammar-dictionary', label: t('nav.grammarDictionary'), icon: <Book size={20} /> },
    { to: '/lessons-exercises', label: t('nav.lessonsExercises'), icon: <BookOpen size={20} /> },
    { to: '/bible-studies', label: t('nav.bibleStudies'), icon: <Heart size={20} /> }
  ];
  
  return (
    <header className="bg-primary-dark text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <BookOpen size={24} />
            <span className="font-bold text-lg">Kriolu JW</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover:bg-primary-light ${
                  location.pathname === link.to ? 'bg-primary-light' : ''
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark fixed inset-0 z-50 pt-16 px-4">
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors hover:bg-primary-light ${
                  location.pathname === link.to ? 'bg-primary-light' : ''
                }`}
                onClick={closeMenu}
              >
                {link.icon}
                <span className="text-lg">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;