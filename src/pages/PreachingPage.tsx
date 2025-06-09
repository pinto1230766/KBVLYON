import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { preachingPresentations, Presentation } from '../data/preachingData';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const PreachingPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activePresentation, setActivePresentation] = useState<Presentation | null>(null);
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  
  return (
    <div className="page-transition py-2 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-3 sm:px-4"> {/* px-2 à px-3 sm:px-4 */}
        <div className="text-center mb-3 sm:mb-4"> {/* mb-2 à mb-3 sm:mb-4 */}
          <h1 className="text-xl sm:text-2xl font-bold mb-1">{t('predicacao.titulo')}</h1>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto"> {/* text-xs à text-sm */}
            {t('predicacao.subtitulo')}
          </p>
        </div>
        
        {!activePresentation ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"> {/* gap-2 à gap-3 sm:gap-4 */}
            {preachingPresentations.map((presentation) => (
              <div 
                key={presentation.id}
                className="card cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden" // Ajout de rounded-lg overflow-hidden, hover:shadow-md à hover:shadow-lg
                onClick={() => setActivePresentation(presentation)}
              >
                <div className="aspect-video overflow-hidden"> {/* h-32 remplacé par aspect-video pour un ratio responsive */}
                  <OptimizedImage 
                    src={presentation.image} 
                    alt={presentation.title[language]} 
                    className="w-full h-full object-cover"
                    width={400} // Ces valeurs sont pour l'optimisation, le CSS gère l'affichage
                    height={225} // (16:9 ratio pour 400px de large)
                  />
                </div>
                <div className="p-3"> {/* p-2 à p-3 */}
                  <h3 className="font-bold mb-1 text-base"> {/* text-sm à text-base */}
                    {presentation.title[language]}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3 leading-snug"> {/* text-xs à text-sm, line-clamp-2 à line-clamp-3, ajout de leading-snug */}
                    {presentation.introduction[language]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500"> {/* text-xs à text-sm */}
                      {presentation.scripture.reference}
                    </span>
                    <button 
                      className="text-primary-dark hover:text-primary font-medium text-xs inline-flex items-center" // text-[10px] à text-xs
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePresentation(presentation);
                      }}
                    >
                      {t('iu.proximo')} <ChevronRight size={14} className="ml-0.5" /> {/* size 12 à 14 */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"> {/* shadow-md à shadow-lg */}
            <div className="relative aspect-video sm:aspect-[2/1] overflow-hidden"> {/* h-32 remplacé par aspect-video sm:aspect-[2/1] */}
              <OptimizedImage 
                src={activePresentation.image} 
                alt={activePresentation.title[language]} 
                className="w-full h-full object-cover"
                width={800} // Pour optimisation
                height={450} // (16:9 ratio pour 800px de large)
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-3 sm:p-4 text-white"> {/* p-2 à p-3 sm:p-4 */}
                  <h2 className="text-lg sm:text-xl font-bold mb-0.5"> {/* text-base à text-lg sm:text-xl */}
                    {activePresentation.title[language]}
                  </h2>
                  <p className="text-white/80 text-sm"> {/* text-xs à text-sm */}
                    {activePresentation.scripture.reference}
                  </p>
                </div>
              </div>
            </div>
                        <div className="p-4">
              <div className="mb-3">
                <h3 className="font-bold mb-1 text-primary-dark text-base">
                  {t('predicacao.introducao')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {activePresentation.introduction[language]}
                </p>
              </div>
              
              <div className="mb-3 bg-gray-50 p-3 rounded border-l-4 border-primary text-sm"> {/* border-l-2 à border-l-4 */}
                <h3 className="font-bold mb-1 text-primary-dark text-base"> {/* Ajout de text-base */}
                  {t('predicacao.textoBiblico')}
                </h3>
                <p className="text-gray-700 italic">
                  <span className="font-semibold">{activePresentation.scripture.reference}:</span> {activePresentation.scripture.text[language]}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary-dark"> {/* text-lg à text-base sm:text-lg, mb-2 à mb-1.5 */}
                  {t('predicacao.pergunta')}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base"> {/* text-base à text-sm sm:text-base */}
                  {activePresentation.question[language]}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary-dark"> {/* text-lg à text-base sm:text-lg, mb-2 à mb-1.5 */}
                  {t('predicacao.explicacao')}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base"> {/* text-base à text-sm sm:text-base */}
                  {activePresentation.explanation[language]}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary-dark"> {/* text-lg à text-base sm:text-lg, mb-2 à mb-1.5 */}
                  {t('predicacao.conclusao')}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base"> {/* text-base à text-sm sm:text-base */}
                  {activePresentation.conclusion[language]}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-2"> {/* mt-4 à mt-6, ajout de flex-col sm:flex-row gap-2 */}
                <button
                  className="btn btn-outline flex items-center text-sm py-1.5 px-3 w-full sm:w-auto justify-center" // text-xs à text-sm, py-1 px-2 à py-1.5 px-3, ajout de w-full sm:w-auto justify-center
                  onClick={() => setActivePresentation(null)}
                >
                  <ChevronLeft size={16} className="mr-1" /> {t('iu.anterior')} {/* size 12 à 16, mr-0.5 à mr-1 */}
                </button>
                
                <button
                  className="btn btn-primary flex items-center text-sm py-1.5 px-3 w-full sm:w-auto justify-center" // text-xs à text-sm, py-1 px-2 à py-1.5 px-3, ajout de w-full sm:w-auto justify-center
                  onClick={() => setShowPracticeModal(true)}
                >
                  <BookOpen size={16} className="mr-1" /> {t('predicacao.botaoPraticar')} {/* Modifié pour utiliser la clé de traduction */}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Practice Modal */}
        {showPracticeModal && activePresentation && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2">
            <div className="bg-white rounded w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-3">
                <h2 className="text-lg font-bold mb-2">
                  {t('predicacao.botaoPraticar')}: {activePresentation.title[language]}
                </h2>
                
                <div className="mb-4">
                  <h3 className="text-base font-bold mb-1 text-gray-700">
                    {language === 'pt' ? 'Dicas para prática:' : 'Dikas pa prátika:'}
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
                    <li>
                      {language === 'pt' 
                        ? 'Pratique a introdução em voz alta várias vezes.' 
                        : 'Pratika introduson en voz alta várias vez.'}
                    </li>
                    <li>
                      {language === 'pt' 
                        ? 'Memorize o texto bíblico chave para citá-lo com confiança.' 
                        : 'Memoriza téstu bíbliku chavi pa sita-l ku konfiansa.'}
                    </li>
                    <li>
                      {language === 'pt' 
                        ? 'Ensaie como fazer a pergunta de forma natural.' 
                        : 'Ensaia modi ki ta faze pergunta di forma natural.'}
                    </li>
                    <li>
                      {language === 'pt' 
                        ? 'Adapte a explicação ao seu próprio estilo, mantendo os pontos principais.' 
                        : 'Adapta splikason pa bu própriu stilu, mantendo pontos prinsipais.'}
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-2 rounded mb-4 text-sm">
                  <h3 className="text-base font-bold mb-1 text-gray-700">
                    {language === 'pt' ? 'Exemplo de diálogo:' : 'Izemplu di diálogu:'}
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-bold text-primary-dark">
                        {language === 'pt' ? 'Você:' : 'Bo:'}
                      </span> {activePresentation.introduction[language]}
                    </p>
                    <p>
                      <span className="font-bold text-secondary-dark">
                        {language === 'pt' ? 'Morador:' : 'Moradu:'}
                      </span> {language === 'pt' 
                        ? 'Olá, posso ajudar?' 
                        : 'Ola, ka mi djuda?'}
                    </p>
                    <p>
                      <span className="font-bold text-primary-dark">
                        {language === 'pt' ? 'Você:' : 'Bo:'}
                      </span> {activePresentation.question[language]}
                    </p>
                    <p>
                      <span className="font-bold text-secondary-dark">
                        {language === 'pt' ? 'Morador:' : 'Moradu:'}
                      </span> {language === 'pt' 
                        ? 'Nunca pensei nisso. O que a Bíblia diz?' 
                        : 'Nunka pensa na kel-li. Kusa ki Bíblia ta fla?'}
                    </p>
                    <p>
                      <span className="font-bold text-primary-dark">
                        {language === 'pt' ? 'Você:' : 'Bo:'}
                      </span> {activePresentation.explanation[language]}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button
                    className="btn btn-outline text-xs py-1 px-2"
                    onClick={() => setShowPracticeModal(false)}
                  >
                    {t('iu.fechar')}
                  </button>
                  <button
                    className="btn btn-primary text-xs py-1 px-2"
                    onClick={() => {
                      setShowPracticeModal(false);
                      // Ici, vous pourriez ajouter une logique pour démarrer un enregistrement ou un minuteur
                    }}
                  >
                    {language === 'pt' ? 'Iniciar Prática' : 'Kumisa Prátika'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreachingPage;
