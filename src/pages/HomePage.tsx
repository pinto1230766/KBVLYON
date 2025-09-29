import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MessageCircle, Book, BookOpen } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const HomePage: React.FC = () => {
  const { t } = useLanguage(); // language supprimé car non utilisé directement ici
  
  return (
    <div className="page-transition">

      {/* Features Section */}
      <section className="py-2 sm:py-3 bg-background"> {/* py-4 sm:py-6 à py-2 sm:py-3 */}
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3"> {/* mb-3 sm:mb-4 à mb-2 sm:mb-3 */}
            {t('paginaInicial.tituloRecursos')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3"> {/* gap-3 sm:gap-4 à gap-2 sm:gap-3 */}
            {/* Feature 1 - Pregação */}
            <Link 
              to="/preaching" 
              className="card p-2 text-center block hover:shadow-md transition-shadow rounded-md" // p-3 à p-2
            >
              <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-0.5"> {/* mb-1 à mb-0.5 */}
                <MessageCircle size={16} className="text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-0.5"> {/* mb-1 à mb-0.5 */}
                {t('paginaInicial.recurso1Titulo')}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 line-clamp-2 leading-snug"> {/* mb-1 à mb-0.5, line-clamp-3 à line-clamp-2 */}
                {t('paginaInicial.recurso1Desc')}
              </p>
            </Link>
            
            {/* Feature 2 - Dicionário */}
            <Link 
              to="/grammar-dictionary" 
              className="card p-2 text-center block hover:shadow-md transition-shadow rounded-md" // p-3 à p-2
            >
              <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-0.5"> {/* mb-1 à mb-0.5 */}
                <Book size={16} className="text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-0.5"> {/* mb-1 à mb-0.5 */}
                {t('paginaInicial.recurso2Titulo')}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 line-clamp-2 leading-snug"> {/* mb-1 à mb-0.5, line-clamp-3 à line-clamp-2 */}
                {t('paginaInicial.recurso2Desc')}
              </p>
            </Link>

            {/* Feature 3 - Estudos Bíblicos */}
            <Link 
              to="/bible-studies" 
              className="card p-2 text-center block hover:shadow-md transition-shadow rounded-md" // p-3 à p-2
            >
              <div className="w-8 h-8 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-0.5"> {/* mb-1 à mb-0.5 */}
                <BookOpen size={16} className="text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-0.5"> {/* mb-1 à mb-0.5 */}
                {t('navegacao.estudosBiblicos')}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 line-clamp-2 leading-snug">
                {t('paginaInicial.recurso3Desc')}
              </p>
            </Link>

            {/* Feature 4 - Notes */}
            <Link 
              to="/notes" 
              className="card p-2 text-center block hover:shadow-md transition-shadow rounded-md"
            >
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mx-auto mb-0.5">
                <BookOpen size={16} className="text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-0.5">
                {t('navegacao.notas')}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 line-clamp-2 leading-snug">
                {t('paginaInicial.recurso4Desc')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-2 bg-muted"> {/* py-3 à py-2 */}
        <div className="container mx-auto px-2">
          <h2 className="text-sm font-bold text-center mb-0.5">Cabo Verde</h2> {/* mb-1 à mb-0.5 */}
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
