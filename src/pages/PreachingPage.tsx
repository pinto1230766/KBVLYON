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
      <div className="container mx-auto px-2">
        <div className="text-center mb-2">
          <h1 className="text-xl font-bold mb-1">{t('preaching.title')}</h1>
          <p className="text-xs text-gray-600 max-w-3xl mx-auto">
            {t('preaching.subtitle')}
          </p>
        </div>
        
        {!activePresentation ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {preachingPresentations.map((presentation) => (
              <div 
                key={presentation.id}
                className="card cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActivePresentation(presentation)}
              >
                <div className="h-32 overflow-hidden">
                  <OptimizedImage 
                    src={presentation.image} 
                    alt={presentation.title[language]} 
                    className="w-full h-full object-cover"
                    width={400}
                    height={160}
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-bold mb-1 text-sm">
                    {presentation.title[language]}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                    {presentation.introduction[language]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {presentation.scripture.reference}
                    </span>
                    <button 
                      className="text-primary-dark hover:text-primary font-medium text-[10px] inline-flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePresentation(presentation);
                      }}
                    >
                      {t('ui.next')} <ChevronRight size={12} className="ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="relative h-32 overflow-hidden">
              <OptimizedImage 
                src={activePresentation.image} 
                alt={activePresentation.title[language]} 
                className="w-full h-full object-cover"
                width={800}
                height={192}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-2 text-white">
                  <h2 className="text-base font-bold mb-0.5">
                    {activePresentation.title[language]}
                  </h2>
                  <p className="text-white/80 text-xs">
                    {activePresentation.scripture.reference}
                  </p>
                </div>
              </div>
            </div>
                        <div className="p-4">
              <div className="mb-3">
                <h3 className="font-bold mb-1 text-primary-dark text-base">
                  {t('preaching.introduction')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {activePresentation.introduction[language]}
                </p>
              </div>
              
              <div className="mb-3 bg-gray-50 p-3 rounded border-l-2 border-primary text-sm">
                <h3 className="font-bold mb-1 text-primary-dark">
                  {t('preaching.scripture')}
                </h3>
                <p className="text-gray-700 italic">
                  <span className="font-semibold">{activePresentation.scripture.reference}:</span> {activePresentation.scripture.text[language]}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  {t('preaching.question')}
                </h3>
                <p className="text-gray-700 text-base">
                  {activePresentation.question[language]}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  {t('preaching.explanation')}
                </h3>
                <p className="text-gray-700 text-base">
                  {activePresentation.explanation[language]}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-primary-dark">
                  {t('preaching.conclusion')}
                </h3>
                <p className="text-gray-700 text-base">
                  {activePresentation.conclusion[language]}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <button
                  className="btn btn-outline flex items-center text-xs py-1 px-2"
                  onClick={() => setActivePresentation(null)}
                >
                  <ChevronLeft size={12} className="mr-0.5" /> {t('ui.previous')}
                </button>
                
                <button
                  className="btn btn-primary flex items-center text-xs py-1 px-2"
                  onClick={() => setShowPracticeModal(true)}
                >
                  <BookOpen size={12} className="mr-0.5" /> {language === 'pt' ? 'Praticar' : 'Pratika'}
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
                  {t('preaching.practiceButton')}: {activePresentation.title[language]}
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
                    {t('ui.close')}
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
