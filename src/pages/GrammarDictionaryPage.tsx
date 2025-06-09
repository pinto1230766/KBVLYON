import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronUp, ChevronDown, Star } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContextDefinition';

// Types
type Language = 'pt' | 'cv';
type TabType = 'dictionary' | 'grammar' | 'favorites';

interface DictionaryEntry {
  id: string;
  word: string;
  translation: Record<Language, string>;
  example?: Record<Language, string>;
  note?: string;
}

interface GrammarLesson {
  id: string;
  title: string;
  description: string;
  level: string;
  content: Record<Language, string>;
}

import { fetchDictionaryEntries } from '../data/dictionary';

const grammarLessons: GrammarLesson[] = [
  {
    id: '1',
    title: 'Introduction à la grammaire',
    description: 'Les bases de la grammaire',
    level: 'Débutant',
    content: {
      pt: 'Conteúdo em português',
      cv: 'Konteudu na língua cabo-verdiana'
    }
  }
];

// Hook useLanguage personnalisé qui utilise le contexte de langue
const useLanguage = (): { t: (key: string) => string; language: Language } => {
  // Utilisation du contexto de langue
  const context = useContext(LanguageContext);
  
  if (!context) {
    // Fallback si le contexto n'est pas disponible
    return {
      t: (key: string) => key,
      language: 'pt' as const
    };
  }
  
  return context;
};

const GrammarDictionaryPage: React.FC = () => {
  // États principaux
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('dictionary');
  const [activeLesson, setActiveLesson] = useState<GrammarLesson | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isSearching, setIsSearching] = useState(false);
  const [allDictionaryEntries, setAllDictionaryEntries] = useState<DictionaryEntry[]>([]);
  
  // Références
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Chargement des favoris depuis le stockage local et initialisation des mots
  useEffect(() => {
    // Récupérer l'onglet actif depuis l'URL si présent
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab') as TabType | null;
    
    if (tabParam && ['dictionary', 'grammar', 'favorites'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
    
    // Charger les favoris
    const savedFavorites = localStorage.getItem('dictionaryFavorites');
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(new Set(parsedFavorites));
        }
      } catch (e) {
        console.error('Erreur lors du chargement des favoris:', e);
      }
    }
    
    // Charger les entrées du dictionnaire depuis l'API
    const loadDictionary = async () => {
      const entries = await fetchDictionaryEntries();
      // Deduplicate entries by id, just in case
      const uniqueEntriesMap = new Map<string, DictionaryEntry>();
      entries.forEach(entry => {
        uniqueEntriesMap.set(entry.id, entry);
      });
      const uniqueEntries = Array.from(uniqueEntriesMap.values());

      // Sort entries alphabetically by the 'word' property
      const sortedEntries = [...uniqueEntries].sort((a, b) => a.word.localeCompare(b.word));
      setAllDictionaryEntries(sortedEntries);
    };

    loadDictionary();
  }, []);

  // Sauvegarder les favoris dans le stockage local
  useEffect(() => {
    localStorage.setItem('dictionaryFavorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  // Gestion des raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Vérifier si on est dans un champ de saisie pour éviter les conflits
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
      
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && !isInput) {
        if (searchTerm) {
          e.preventDefault();
          setSearchTerm('');
        } else if (activeLesson) {
          e.preventDefault();
          setActiveLesson(null);
        }
      }
    };
    
    // Ajouter l'écouteur avec l'option capture pour intercepter l'événement plus tôt
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [searchTerm, activeLesson]);

  // Search logic and loading indicator
  const searchDictionary = useCallback((term: string): DictionaryEntry[] => {
    if (!term.trim()) return [];
    
    const searchTerm = term.toLowerCase();
    return allDictionaryEntries.filter(entry => {
      return (
        entry.word.toLowerCase().includes(searchTerm) ||
        entry.translation.pt.toLowerCase().includes(searchTerm) ||
        entry.translation.cv.toLowerCase().includes(searchTerm) ||
        (entry.example && (
          entry.example.pt.toLowerCase().includes(searchTerm) ||
          entry.example.cv.toLowerCase().includes(searchTerm)
        ))
      );
    });
  }, [allDictionaryEntries]);

  // Effect to manage search results and loading state
  useEffect(() => {
    if (!searchTerm.trim()) {
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 300); // Debounce search
    
    return () => clearTimeout(timer);
  }, [searchTerm]); // Depend on searchTerm to trigger search

  // Gestion du changement d'onglet
  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setSearchTerm('');
    setActiveLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Mettre à jour l'URL pour permettre le rafraîchissement de la page
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    window.history.pushState({}, '', url.toString());
  }, []);

  // Gestion des favoris
  const toggleFavorite = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  }, []);

  // Gestion du défilement
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  // Effacer la recherche
  const clearSearch = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchTerm('');
  }, []);

  // Rendu du contenu en fonction de l'onglet actif
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dictionary': {
        let content;
        const entriesToDisplay = searchTerm ? searchDictionary(searchTerm) : allDictionaryEntries;

        if (isSearching) {
          content = (
            <div key="searching-message" className="col-span-full text-xs text-gray-500 py-1">
              {t('search.searching')}...
            </div>
          );
        } else if (entriesToDisplay.length > 0) {
          content = entriesToDisplay.map((entry, index) => (
            <div 
              key={`${entry.id}-${index}`}
              className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-1.5 hover:shadow transition-all cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-start gap-0.5">
                <div className="font-medium text-xs truncate flex-1">
                  {entry.word}
                </div>
                <button 
                  onClick={(e) => toggleFavorite(entry.id, e)}
                  className={`flex-shrink-0 ${
                    favorites.has(entry.id) 
                      ? 'text-yellow-400' 
                      : 'text-gray-200 dark:text-gray-600 hover:text-yellow-400'
                  }`}
                  aria-label={favorites.has(entry.id) ? t('common.removeFromFavorites') : t('common.addToFavorites')}
                >
                  <Star className="h-3 w-3 fill-current" />
                </button>
              </div>
              <div className="text-[10px] text-gray-600 dark:text-gray-400 line-clamp-1 mt-0.5">
                {entry.translation[language]}
              </div>
            </div>
          ));
        } else if (searchTerm) {
          content = (
            <div key="no-results-message" className="col-span-full text-xs text-gray-500 py-1">
              {t('search.noResults')}
            </div>
          );
        } else {
          content = null;
        }

        return (
          <div className="space-y-2">
            {searchTerm ? (
              <div className="text-sm text-gray-600">
                {`${entriesToDisplay.length} ${t('search.results')} "${searchTerm}"`}
              </div>
            ) : (
              <div className="text-xs text-gray-500">
                {t('search.placeholder')}
              </div>
            )}
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-1.5">
              {content}
            </div>
          </div>
        );
      }

      case 'grammar':
        // Rendu principal
        return (
          <div className="container mx-auto p-4 max-w-6xl">
            <h1 className="text-2xl font-bold mb-6">{t('grammarDictionary.title')}</h1>
            <div className="text-xs text-gray-500 mb-1">
              {t('grammar.selectLesson')}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {grammarLessons.map((lesson) => (
                <div 
                  key={lesson.id} 
                  className="border rounded-md p-2 hover:shadow-sm transition-all cursor-pointer bg-white dark:bg-gray-800 dark:border-gray-700"
                  onClick={() => setActiveLesson(lesson)}
                >
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-1">
                    {lesson.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                    {lesson.description}
                  </p>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200">
                      {lesson.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'favorites': {
        const favoriteEntries = allDictionaryEntries.filter(entry => 
          favorites.has(entry.id)
        );
        
        return (
          <div className="space-y-2">
            {favoriteEntries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {favoriteEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-2 hover:shadow transition-all border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {entry.word}
                        </h3>
                        <button
                          onClick={(e) => toggleFavorite(entry.id, e)}
                          className="text-yellow-400 hover:text-yellow-500 p-0.5 -mt-0.5 -mr-0.5"
                          aria-label={t('common.removeFromFavorites')}
                          title={t('common.removeFromFavorites')}
                        >
                          <Star className="h-3.5 w-3.5 fill-current" />
                        </button>
                      </div>
                      <p className="mt-1 text-[11px] text-gray-600 dark:text-gray-300">
                        <span className="font-medium">
                          {t('common.translation')}:
                        </span>{' '}
                        {entry.translation[language]}
                      </p>
                      {entry.example && (
                        <div className="mt-1 p-1.5 bg-gray-50 dark:bg-gray-700/50 rounded text-xs">
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">
                              {t('common.example')}:
                            </span>{' '}
                            {entry.example[language]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 dark:text-yellow-400 mb-2">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {t('favorites.emptyTitle')}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 max-w-md mx-auto">
                  {t('favorites.emptyDescription')}
                </p>
                <button
                  onClick={() => handleTabChange('dictionary')}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  {t('favorites.browseDictionary')}
                </button>
              </div>
            )}
          </div>
        );
      }

      default:
        return null;
    }
  };

  // Gestionnaire pour fermer la leçon active
  const handleCloseLesson = useCallback(() => {
    setActiveLesson(null);
  }, []);

  // Vérifie si une leçon est active
  const isLessonActive = activeLesson !== null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {activeTab === 'dictionary' 
              ? t('nav.grammarDictionary') 
              : activeTab === 'grammar' 
                ? t('nav.grammar') 
                : t('common.favorites')}
          </h1>
          
          <div className="w-full sm:max-w-xs">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <Search className="h-3.5 w-3.5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder={
                  activeTab === 'grammar' 
                    ? t('common.searchLessons') 
                    : t('dictionary.searchWords')
                }
                className="block w-full pl-7 pr-7 py-1.5 text-sm border border-gray-200 dark:border-gray-600 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-2 flex items-center"
                  aria-label={t('common.clearSearch')}
                >
                  <X className="h-3.5 w-3.5 text-gray-400 hover:text-gray-500" />
                </button>
              )}
            </div>
            {/* Message de raccourci clavier supprimé */}
          </div>
        </div>
        
        {/* Onglets */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-3">
          <nav className="-mb-px flex space-x-4">
            <button
              type="button"
              onClick={() => handleTabChange('dictionary')}
              className={`py-2 px-1 border-b-2 font-medium text-xs ${
                activeTab === 'dictionary'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {t('nav.grammarDictionary')}
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('grammar')}
              className={`py-2 px-1 border-b-2 font-medium text-xs ${
                activeTab === 'grammar'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {t('nav.grammar')}
            </button>
            <button
              type="button"
              onClick={() => handleTabChange('favorites')}
              className={`py-2 px-1 border-b-2 font-medium text-xs ${
                activeTab === 'favorites'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <span className="flex items-center">
                {t('common.favorites')}
                {favorites.size > 0 && (
                  <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                    {favorites.size}
                  </span>
                )}
              </span>
            </button>
          </nav>
        </div>
        
        {/* Contenu principal */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          {renderTabContent()}
        </div>
      </div>
      
      {/* Boutons de défilement */}
      <div className="fixed right-3 bottom-3 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="p-1.5 bg-white/90 dark:bg-gray-700/90 rounded-full shadow-md hover:shadow-lg transition-all"
          aria-label={t('common.scrollToTop')}
        >
          <ChevronUp className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToBottom}
          className="p-1.5 bg-white/90 dark:bg-gray-700/90 rounded-full shadow-md hover:shadow-lg transition-all"
          aria-label={t('common.scrollToBottom')}
        >
          <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        </motion.button>
      </div>
      
      {/* Modal de leçon de grammaire */}
      <AnimatePresence>
        {isLessonActive && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-2 sm:p-3 text-center">
              <div 
                className="fixed inset-0 transition-opacity" 
                aria-hidden="true"
                onClick={() => setActiveLesson(null)}
              >
                <div className="absolute inset-0 bg-gray-500/70 dark:bg-gray-900/80 backdrop-blur-sm"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="inline-block w-full max-w-2xl text-left align-middle bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="px-4 pt-4 pb-2 sm:p-4 sm:pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 
                        className="text-base font-semibold text-gray-900 dark:text-white"
                        id="modal-headline"
                      >
                        {activeLesson?.title || ''}
                      </h3>
                      <div className="mt-0.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200">
                          {activeLesson?.level || ''}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                      onClick={handleCloseLesson}
                      aria-label={t('common.close')}
                      title={t('common.close')}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mt-3 space-y-3">
                    {activeLesson?.description && (
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {activeLesson.description}
                        </p>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                      <div className="prose dark:prose-invert prose-sm max-w-none">
                        <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                          {activeLesson?.content[language] || ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/30 px-4 py-2 sm:px-4 sm:py-3 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-1.5 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onClick={() => setActiveLesson(null)}
                  >
                    {t('common.close')}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GrammarDictionaryPage;
