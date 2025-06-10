import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { grammarLessons, dictionaryEntries, GrammarLesson, DictionaryEntry } from '../data/grammarData';
import { Search, Book, GraduationCap } from 'lucide-react';

const GrammarDictionaryPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'grammar' | 'dictionary'>('grammar');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLesson, setActiveLesson] = useState<GrammarLesson | null>(null);
  
  // Filter dictionary entries based on search term
  const filteredEntries = dictionaryEntries.filter((entry) => 
    entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.translation.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.translation.cv.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="page-transition py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3">{t('grammar.title')}</h1>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'grammar'
                  ? 'bg-primary-light text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('grammar')}
            >
              <div className="flex items-center space-x-2">
                <GraduationCap size={20} />
                <span>{t('grammar.grammarTitle')}</span>
              </div>
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'dictionary'
                  ? 'bg-primary-light text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('dictionary')}
            >
              <div className="flex items-center space-x-2">
                <Book size={20} />
                <span>{t('grammar.dictionaryTitle')} ({dictionaryEntries.length})</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Grammar Tab Content */}
        {activeTab === 'grammar' && (
          <div className="max-w-4xl mx-auto">
            {!activeLesson ? (
              <>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <p className="text-lg mb-4">
                    {t('grammar.grammarIntro')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {grammarLessons.map((lesson) => (
                    <div 
                      key={lesson.id}
                      className="card cursor-pointer"
                      onClick={() => setActiveLesson(lesson)}
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {t('grammar.lesson')} {lesson.id}: {lesson.title[language]}
                        </h3>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {lesson.content[language]}
                        </p>
                        <button 
                          className="text-primary-dark hover:text-primary font-semibold"
                          onClick={() => setActiveLesson(lesson)}
                        >
                          {t('ui.next')} →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {t('grammar.lesson')} {activeLesson.id}: {activeLesson.title[language]}
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-lg text-gray-700 mb-4">
                      {activeLesson.content[language]}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3 text-primary-dark">
                      {language === 'pt' ? 'Exemplos:' : 'Izemplu:'}
                    </h3>
                    <ul className="space-y-3">
                      {activeLesson.examples.map((example, index) => (
                        <li key={index} className="pb-2 border-b border-gray-200 last:border-0">
                          <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <div className="font-medium text-gray-700">
                              {example[language]}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      className="btn btn-primary"
                      onClick={() => setActiveLesson(null)}
                    >
                      {language === 'pt' ? 'Voltar para lições' : 'Volta pa lisons'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Dictionary Tab Content */}
        {activeTab === 'dictionary' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={t('grammar.searchPlaceholder')}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {filteredEntries.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <ul className="divide-y divide-gray-200">
                    {filteredEntries.map((entry) => (
                      <li key={entry.word} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="md:w-1/4">
                            <h3 className="text-xl font-bold text-primary-dark">{entry.word}</h3>
                            <p className="text-gray-600">{entry.translation[language]}</p>
                          </div>
                          <div className="md:w-3/4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <h4 className="font-medium text-gray-700 mb-1">
                                {language === 'pt' ? 'Exemplo:' : 'Izemplu:'}
                              </h4>
                              <p className="text-gray-600">{entry.example[language]}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">{t('grammar.noResults')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GrammarDictionaryPage;