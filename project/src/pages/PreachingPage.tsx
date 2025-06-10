import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { preachingPresentations, Presentation } from '../data/preachingData';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const PreachingPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activePresentation, setActivePresentation] = useState<Presentation | null>(null);
  const [showPracticeModal, setShowPracticeModal] = useState(false);
  
  return (
    <div className="page-transition py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">{t('preaching.title')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('preaching.subtitle')}
          </p>
        </div>
        
        {!activePresentation ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preachingPresentations.map((presentation) => (
              <div 
                key={presentation.id}
                className="card cursor-pointer"
                onClick={() => setActivePresentation(presentation)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={presentation.image} 
                    alt={presentation.title[language]} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">
                    {presentation.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {presentation.introduction[language]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {presentation.scripture.reference}
                    </span>
                    <button 
                      className="text-primary-dark hover:text-primary font-semibold inline-flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePresentation(presentation);
                      }}
                    >
                      {t('ui.next')} <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={activePresentation.image} 
                alt={activePresentation.title[language]} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    {activePresentation.title[language]}
                  </h2>
                  <p className="text-white/80">
                    {activePresentation.scripture.reference}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  {t('preaching.introduction')}
                </h3>
                <p className="text-gray-700">
                  {activePresentation.introduction[language]}
                </p>
              </div>
              
              <div className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  {t('preaching.scripture')}
                </h3>
                <p className="text-gray-700 italic">
                  <span className="font-semibold">{activePresentation.scripture.reference}:</span> {activePresentation.scripture.text[language]}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  {t('preaching.question')}
                </h3>
                <p className="text-gray-700">
                  {activePresentation.question[language]}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  {t('preaching.explanation')}
                </h3>
                <p className="text-gray-700">
                  {activePresentation.explanation[language]}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                  {t('preaching.conclusion')}
                </h3>
                <p className="text-gray-700">
                  {activePresentation.conclusion[language]}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <button
                  className="btn btn-outline flex items-center"
                  onClick={() => setActivePresentation(null)}
                >
                  <ChevronLeft size={16} className="mr-1" /> {t('ui.previous')}
                </button>
                
                <button
                  className="btn btn-primary flex items-center"
                  onClick={() => setShowPracticeModal(true)}
                >
                  <BookOpen size={16} className="mr-1" /> {t('preaching.practiceButton')}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Practice Modal */}
        {showPracticeModal && activePresentation && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {t('preaching.practiceButton')}: {activePresentation.title[language]}
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-700">
                    {language === 'pt' ? 'Dicas para prática:' : 'Dikas pa prátika:'}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
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
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-700">
                    {language === 'pt' ? 'Exemplo de diálogo:' : 'Izemplu di diálogu:'}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <span className="font-bold text-primary-dark">
                        {language === 'pt' ? 'Você:' : 'Bo:'}
                      </span> {activePresentation.introduction[language]}
                    </p>
                    <p>
                      <span className="font-bold text-secondary-dark">
                        {language === 'pt' ? 'Morador:' : 'Moradu:'}
                      </span> {language === 'pt' 
                        ? 'Sim, isso é algo que eu já pensei...' 
                        : 'Sin, kel-li é algu ki N dja pensa...'}
                    </p>
                    <p>
                      <span className="font-bold text-primary-dark">
                        {language === 'pt' ? 'Você:' : 'Bo:'}
                      </span> {language === 'pt' 
                        ? `A Bíblia diz em ${activePresentation.scripture.reference}: "${activePresentation.scripture.text.pt}" ${activePresentation.question.pt}` 
                        : `Bíblia ta fla na ${activePresentation.scripture.reference}: "${activePresentation.scripture.text.cv}" ${activePresentation.question.cv}`}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setShowPracticeModal(false)}
                  >
                    {t('ui.close')}
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