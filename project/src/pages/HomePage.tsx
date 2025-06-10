import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, Book, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary-dark to-secondary-dark text-white flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/19547617/pexels-photo-19547617/free-photo-of-aerial-view-of-santa-maria-beach-on-sal-island-cape-verde.jpeg" 
            alt="Cape Verde Aerial View" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.title')}
            </h1>
            <p className="text-xl mb-8">
              {t('home.subtitle')}
            </p>
            <p className="text-lg mb-8">
              {t('home.intro')}
            </p>
            <Link
              to="/preaching"
              className="btn btn-accent text-lg px-6 py-3"
            >
              {t('home.startButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('home.featuresTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t('home.feature1Title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('home.feature1Desc')}
              </p>
              <Link 
                to="/preaching" 
                className="text-primary-dark hover:text-primary font-semibold inline-flex items-center"
              >
                {t('nav.preaching')} <span className="ml-1">→</span>
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Book size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t('home.feature2Title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('home.feature2Desc')}
              </p>
              <Link 
                to="/grammar-dictionary" 
                className="text-secondary-dark hover:text-secondary font-semibold inline-flex items-center"
              >
                {t('nav.grammarDictionary')} <span className="ml-1">→</span>
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t('home.feature3Title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('home.feature3Desc')}
              </p>
              <Link 
                to="/lessons-exercises" 
                className="text-accent-dark hover:text-accent font-semibold inline-flex items-center"
              >
                {t('nav.lessonsExercises')} <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cabo Verde</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.pexels.com/photos/19547617/pexels-photo-19547617/free-photo-of-aerial-view-of-santa-maria-beach-on-sal-island-cape-verde.jpeg" 
              alt="Santa Maria Beach, Sal Island" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/19547622/pexels-photo-19547622/free-photo-of-people-walking-on-santa-maria-pier-in-sal-cape-verde.jpeg" 
              alt="Santa Maria Pier, Sal" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/19547619/pexels-photo-19547619/free-photo-of-salt-evaporation-ponds-in-pedra-de-lume-sal-island-cape-verde.jpeg" 
              alt="Salt Ponds, Pedra de Lume" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.pexels.com/photos/19547626/pexels-photo-19547626/free-photo-of-traditional-houses-in-santa-maria-sal-island-cape-verde.jpeg" 
              alt="Traditional Houses, Santa Maria" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;