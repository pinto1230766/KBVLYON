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
    <div className="page-transition py-2 bg-muted min-h-screen">
      <div className="container mx-auto px-3 sm:px-3"> 
        <div className="text-center mb-3 sm:mb-2"> 
          <h1 className="text-xl sm:text-2xl font-bold mb-1">{t('preaching.title')}</h1>
          <p className="text-sm text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto"> 
            {t('preaching.subtitle')}
          </p>
        </div>
        
        {!activePresentation ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2"> 
            {preachingPresentations.map((presentation) => (
              <div 
                key={presentation.id}
                className="card cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-card dark:bg-gray-800 border border-border dark:border-gray-600" 
                onClick={() => setActivePresentation(presentation)}
              >
                <div className="aspect-video overflow-hidden"> 
                  <OptimizedImage 
                    src={presentation.image} 
                    alt={presentation.title[language]} 
                    className="w-full h-full object-cover"
                    width={400} 
                    height={225} 
                  />
                </div>
                <div className="p-3 bg-white dark:bg-gray-800"> 
                  <h3 className="font-bold mb-1 text-base text-gray-900 dark:text-gray-100"> 
                    {presentation.title[language]}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 line-clamp-3 leading-snug"> 
                    {presentation.introduction[language]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400"> 
                      {presentation.scripture.reference}
                    </span>
                    <button 
                      className="text-primary-dark hover:text-primary font-medium text-xs inline-flex items-center" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePresentation(presentation);
                      }}
                    >
                      {t('common.next')} <ChevronRight size={14} className="ml-0.5" /> 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"> 
            <div className="relative aspect-video sm:aspect-[2/1] overflow-hidden"> 
              <OptimizedImage 
                src={activePresentation.image} 
                alt={activePresentation.title[language]} 
                className="w-full h-full object-cover"
                width={800} 
                height={450} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-3 sm:p-4 text-white"> 
                  <h2 className="text-lg sm:text-xl font-bold mb-1"> 
                    {activePresentation.title[language]}
                  </h2>
                  <p className="text-white/80 text-sm"> 
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
                <p className="text-card-foreground text-sm">
                  {activePresentation.introduction[language]}
                </p>
              </div>
              
              <div className="mb-3 bg-muted p-3 rounded border-l-4 border-primary text-sm"> 
                <h3 className="font-bold mb-1 text-primary-dark text-base"> 
                  {t('preaching.scripture')}
                </h3>
                <p className="text-card-foreground italic">
                  <span className="font-semibold">{activePresentation.scripture.reference}:</span> {activePresentation.scripture.text[language]}
                </p>
              </div>
              
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary-dark"> 
                  {t('preaching.question')}
                </h3>
                <p className="text-card-foreground text-sm sm:text-base"> 
                  {activePresentation.question[language]}
                </p>
              </div>
              
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary-dark"> 
                  {t('preaching.explanation')}
                </h3>
                <p className="text-card-foreground text-sm sm:text-base"> 
                  {activePresentation.explanation[language]}
                </p>
              </div>
              
              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-bold mb-1.5 text-primary-dark"> 
                  {t('preaching.conclusion')}
                </h3>
                <p className="text-card-foreground text-sm sm:text-base"> 
                  {activePresentation.conclusion[language]}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-2"> 
                <button
                  className="btn btn-outline flex items-center text-sm py-2 px-3 w-full sm:w-auto justify-center" 
                  onClick={() => setActivePresentation(null)}
                >
                  <ChevronLeft size={16} className="mr-1" /> {t('common.back')} 
                </button>
                
                <button
                  className="btn btn-primary flex items-center text-sm py-2 px-3 w-full sm:w-auto justify-center" 
                  onClick={() => setShowPracticeModal(true)}
                >
                  <BookOpen size={16} className="mr-1" /> {t('preaching.practice')} 
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Practice Modal */}
        {showPracticeModal && activePresentation && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2">
            <div className="bg-card rounded w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-3">
                <h2 className="text-lg font-bold mb-2">
                  {t('preaching.practice')}: {activePresentation.title[language]}
                </h2>
                
                <div className="mb-2">
                  <h3 className="text-base font-bold mb-1 text-card-foreground">
                    {t('preaching.practiceTips')}
                  </h3>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground dark:text-gray-300">
                    <li>
                      Pratique a introdução com naturalidade
                    </li>
                    <li>
                      Memorize o texto bíblico e sua referência
                    </li>
                    <li>
                      Faça a pergunta de forma envolvente
                    </li>
                    <li>
                      Explique com clareza e simplicidade
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted p-2 rounded mb-2 text-sm">
                  <h3 className="text-base font-bold mb-1 text-card-foreground">
                    {t('preaching.dialogue')}
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-bold text-primary-dark">
                        {t('preaching.you')}
                      </span> {activePresentation.introduction[language]}
                    </p>
                    <p>
                      <span className="font-bold text-secondary-dark">
                        {t('preaching.resident')}
                      </span> {t('preaching.hello')}
                    </p>
                    <p>
                      <span className="font-bold text-primary-dark">
                        {t('preaching.you')}
                      </span> {activePresentation.question[language]}
                    </p>
                    <p>
                      <span className="font-bold text-secondary-dark">
                        {t('preaching.resident')}
                      </span> {t('preaching.bibleAnswer')}
                    </p>
                    <p>
                      <span className="font-bold text-primary-dark">
                        {t('preaching.you')}
                      </span> {activePresentation.explanation[language]}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button
                    className="btn btn-outline text-xs py-1 px-2"
                    onClick={() => setShowPracticeModal(false)}
                  >
                    {t('common.close')}
                  </button>
                  <button
                    className="btn btn-primary text-xs py-1 px-2"
                    onClick={() => {
                      setShowPracticeModal(false);
                      // Ici, vous pourriez ajouter une logique pour démarrer un enregistrement ou un minuteur
                    }}
                  >
                    {t('preaching.startPractice')}
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
