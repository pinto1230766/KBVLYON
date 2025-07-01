// Version: 2024-06-25
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MessageCircle, Book, BookOpen, Notebook } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex-1 overflow-auto min-h-0">
        {/* Features Section */}
        <section className="py-0 bg-white"> 
          <div className="container mx-auto px-0 overflow-hidden">
            <h2 className="font-bold text-center mb-0.5"> 
              {t('paginaInicial.tituloRecursos')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 sm:gap-0.5"> 
              {/* Feature 1 - Pregação */}
              <Link 
                to="/preaching" 
                className="card p-4 sm:p-8 text-center block rounded-xl bg-jw-gray text-jw-dark w-full text-[15px] sm:text-lg min-h-0 h-[160px] sm:h-[200px] flex flex-col justify-center border border-black transition-transform transition-shadow duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{ willChange: 'transform' }}
              >
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-1"> 
                  <MessageCircle size={28} className="text-white" />
                </div>
                <h3 className="font-bold mb-1"> 
                  {t('paginaInicial.recurso1Titulo')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1 line-clamp-2 leading-snug"> 
                  {t('paginaInicial.recurso1Desc')}
                </p>
              </Link>
              
              {/* Feature 2 - Dicionário */}
              <Link 
                to="/grammar-dictionary" 
                className="card p-4 sm:p-8 text-center block rounded-xl bg-jw-gray text-jw-dark w-full text-[15px] sm:text-lg min-h-0 h-[160px] sm:h-[200px] flex flex-col justify-center border border-black transition-transform transition-shadow duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{ willChange: 'transform' }}
              >
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-1"> 
                  <Book size={28} className="text-white" />
                </div>
                <h3 className="font-bold mb-1"> 
                  {t('paginaInicial.recurso2Titulo')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1 line-clamp-2 leading-snug"> 
                  {t('paginaInicial.recurso2Desc')}
                </p>
              </Link>

              {/* Feature 3 - Estudos Bíblicos */}
              <Link 
                to="/bible-studies" 
                className="card p-4 sm:p-8 text-center block rounded-xl bg-jw-gray text-jw-dark w-full text-[15px] sm:text-lg min-h-0 h-[160px] sm:h-[200px] flex flex-col justify-center border border-black transition-transform transition-shadow duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{ willChange: 'transform' }}
              >
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-1"> 
                  <BookOpen size={28} className="text-white" />
                </div>
                <h3 className="font-bold mb-1"> 
                  {t('navegacao.estudosBiblicos')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1 line-clamp-2 leading-snug"> 
                  {t('paginaInicial.recurso3Desc')}
                </p>
              </Link>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 sm:gap-0.5 mt-0.5">
          {/* Carte Notes */}
          <Link 
            to="/notes" 
            className="card p-4 sm:p-8 text-center block rounded-xl bg-jw-gray text-jw-dark w-full text-[15px] sm:text-lg min-h-0 h-[160px] sm:h-[200px] flex flex-col justify-center border border-black transition-transform transition-shadow duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
            style={{ willChange: 'transform' }}
          >
            <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-1">
              <Notebook size={28} className="text-white" />
            </div>
            <h3 className="font-bold mb-1">
              {t('paginaInicial.minhasNotas')}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 line-clamp-2 leading-snug">
              {t('paginaInicial.acessarNotas')}
            </p>
          </Link>
        </div>

        {/* Image Gallery */}
        <section className="py-0 bg-gray-100"> 
          <div className="container mx-auto px-0">
            <h2 className="font-bold text-center mb-0.5">Cabo Verde</h2> 
            <div className="grid grid-cols-2 gap-1">
              <div className="h-16 overflow-hidden rounded-xl">
                <OptimizedImage 
                  src="/images/lessons/page 1.1.jpg" 
                  alt="Cabo Verde - Vue 1" 
                  className="w-full h-full object-cover"
                  width={300}
                  height={60}
                />
              </div>
              <div className="h-16 overflow-hidden rounded-xl">
                <OptimizedImage 
                  src="/images/lessons/page 1.2.jpg" 
                  alt="Cabo Verde - Vue 2" 
                  className="w-full h-full object-cover"
                  width={300}
                  height={60}
                />
              </div>
              <div className="h-16 overflow-hidden rounded-xl">
                <OptimizedImage 
                  src="/images/lessons/page 1.3.jpg" 
                  alt="Cabo Verde - Vue 3" 
                  className="w-full h-full object-cover"
                  width={300}
                  height={60}
                />
              </div>
              <div className="h-16 overflow-hidden rounded-xl">
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
    </div>
  );
};

export default HomePage;
