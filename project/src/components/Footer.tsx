import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kriolu JW</h3>
            <p className="text-gray-300">
              {t('home.subtitle')}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/preaching" className="hover:text-white transition-colors">
                  {t('nav.preaching')}
                </Link>
              </li>
              <li>
                <Link to="/grammar-dictionary" className="hover:text-white transition-colors">
                  {t('nav.grammarDictionary')}
                </Link>
              </li>
              <li>
                <Link to="/lessons-exercises" className="hover:text-white transition-colors">
                  {t('nav.lessonsExercises')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://www.jw.org/kea/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  jw.org/kea
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Kriolu JW</p>
          <p className="mt-2 flex items-center justify-center">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;