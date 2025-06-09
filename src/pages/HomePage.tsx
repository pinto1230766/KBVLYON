import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MessageCircle, Book, BookOpen } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="h-[100px] bg-blue-100 flex items-center">
        <div className="container mx-auto px-3">
          <div className="max-w-2xl">
            <h1 className="text-lg font-bold mb-0.5 text-gray-800">
              {t('home.title')}
            </h1>
            <p className="text-xs font-semibold mb-0.5 text-gray-700">
              {t('home.subtitle')}
            </p>
            <p className="text-[11px] text-gray-600 leading-tight line-clamp-2">
              {t('home.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-1 bg-white">
        <div className="container mx-auto px-2">
          <h2 className="text-xs font-bold text-center mb-1">
            {t('home.featuresTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Feature 1 - Pregação */}
            <Link 
              to="/preaching" 
              className="card p-1 text-center block hover:shadow-sm transition-shadow rounded-sm"
            >
              <div className="w-5 h-5 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-0.5">
                <MessageCircle size={12} className="text-white" />
              </div>
              <h3 className="text-xs font-bold mb-0.5">
                {t('home.feature1Title')}
              </h3>
              <p className="text-[11px] text-gray-600 mb-0.5 line-clamp-2 leading-tight">
                {t('home.feature1Desc')}
              </p>
            </Link>
            
            {/* Feature 2 - Dicionário */}
            <Link 
              to="/grammar-dictionary" 
              className="card p-1 text-center block hover:shadow-sm transition-shadow rounded-sm"
            >
              <div className="w-5 h-5 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-0.5">
                <Book size={12} className="text-white" />
              </div>
              <h3 className="text-xs font-bold mb-0.5">
                {t('home.feature2Title')}
              </h3>
              <p className="text-[11px] text-gray-600 mb-0.5 line-clamp-2 leading-tight">
                {t('home.feature2Desc')}
              </p>
            </Link>

            {/* Feature 3 - Estudos Bíblicos */}
            <Link 
              to="/bible-studies" 
              className="card p-1 text-center block hover:shadow-sm transition-shadow rounded-sm"
            >
              <div className="w-5 h-5 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-0.5">
                <BookOpen size={12} className="text-white" />
              </div>
              <h3 className="text-xs font-bold mb-0.5">
                {t('home.feature3Title')}
              </h3>
              <p className="text-[11px] text-gray-600 mb-0.5 line-clamp-2 leading-tight">
                {t('home.feature3Desc')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-3 bg-gray-100">
        <div className="container mx-auto px-2">
          <h2 className="text-sm font-bold text-center mb-1">Cabo Verde</h2>
          <div className="grid grid-cols-2 gap-1">
            <div className="h-14 overflow-hidden rounded">
              <OptimizedImage 
                src="/images/lessons/page 1.1.jpg" 
                alt="Cabo Verde - Vue 1" 
                className="w-full h-full object-cover"
                width={300}
                height={60}
              />
            </div>
            <div className="h-14 overflow-hidden rounded">
              <OptimizedImage 
                src="/images/lessons/page 1.2.jpg" 
                alt="Cabo Verde - Vue 2" 
                className="w-full h-full object-cover"
                width={300}
                height={60}
              />
            </div>
            <div className="h-14 overflow-hidden rounded">
              <OptimizedImage 
                src="/images/lessons/page 1.3.jpg" 
                alt="Cabo Verde - Vue 3" 
                className="w-full h-full object-cover"
                width={300}
                height={60}
              />
            </div>
            <div className="h-14 overflow-hidden rounded">
              <OptimizedImage 
                src="/images/lessons/page 1.4.jpg" 
                alt="Cabo Verde - Vue 4" 
                className="w-full h-full object-cover"
                width={300}
                height={60}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
