import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { grammarLessons, GrammarLesson } from '../data/grammarData';
import { translations } from '../data/translations';

interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example: {
    pt: string;
    cv: string;
  };
  note?: string;
}

const GrammarDictionaryPage: React.FC = () => {
  const { language } = useLanguage();
  const secaoGramaticaTrad = translations.gramaticaSecao;
  const dicionarioTrad = translations.dicionario;
  const comumTrad = translations.comum;
  const iuTrad = translations.iu;
  const favoritosTrad = translations.favoritos;

  const [activeTab, setActiveTab] = useState<'grammar' | 'dictionary' | 'favorites'>('grammar');
  const [dictionaryData, setDictionaryData] = useState<DictionaryEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingDictionary, setLoadingDictionary] = useState(true);
  const [errorDictionary, setErrorDictionary] = useState<string | null>(null);
  const [fuse, setFuse] = useState<Fuse<DictionaryEntry> | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set()); // Système de favoris simple

  // Charger les favoris depuis localStorage
  useEffect(() => {
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
  }, []);

  // Sauvegarder les favoris dans localStorage
  useEffect(() => {
    localStorage.setItem('dictionaryFavorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  // Charger les données du dictionnaire
  useEffect(() => {
    if ((activeTab === 'dictionary' || activeTab === 'favorites') && dictionaryData.length === 0 && loadingDictionary) {
      const fetchDictionaryData = async () => {
        try {
          const response = await fetch('/dictionary.json');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setDictionaryData(data);
          const fuseOptions = {
            keys: [
              { name: 'word', weight: 0.4 },
              { name: 'translation.pt', weight: 0.3 },
              { name: 'translation.cv', weight: 0.3 },
            ],
            includeScore: true,
            threshold: 0.6,
            minMatchCharLength: 1,
            ignoreLocation: true,
          };
          setFuse(new Fuse(data, fuseOptions));
        } catch (error) {
          console.error("Failed to load dictionary data:", error);
          setErrorDictionary(language === 'pt' ? 'Falha ao carregar dados do dicionário.' : 'Falha na karga dadus di disionáriu.');
        } finally {
          setLoadingDictionary(false);
        }
      };
      fetchDictionaryData();
    } else if (activeTab !== 'dictionary' && activeTab !== 'favorites' && dictionaryData.length > 0 && !loadingDictionary) {
      // Optionnel: décharger les données du dictionnaire si on n'est plus sur les onglets concernés pour économiser la mémoire
      // setDictionaryData([]);
      // setLoadingDictionary(true); // Pour recharger si on revient
      // setFuse(null);
    }
  }, [activeTab, language, dictionaryData.length, loadingDictionary]);

  const filteredDictionary = useMemo(() => {
    if (!searchTerm.trim()) {
      return dictionaryData;
    }
    if (fuse) {
      return fuse.search(searchTerm).map(result => result.item);
    }
    return dictionaryData.filter(entry =>
      entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translation.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translation.cv.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, dictionaryData, fuse]);

  const toggleFavorite = useCallback((id: string) => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{secaoGramaticaTrad.titulo[language]}</h1>

      <div className="mb-4 border-b border-gray-200 dark:border-zinc-700">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('grammar')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'grammar'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            {secaoGramaticaTrad.tituloGramatica[language]}
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ml-2 ${
              activeTab === 'dictionary'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            {dicionarioTrad.titulo[language]}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ml-2 ${
              activeTab === 'favorites'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
            }`}
          >
            {comumTrad.favoritos[language]}
            {favorites.size > 0 && (
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary">
                {favorites.size}
              </span>
            )}
          </button>
        </nav>
      </div>

      <div>
        {activeTab === 'grammar' && (
          <div id="grammar-content" role="tabpanel" aria-labelledby="grammar-tab">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 sr-only">{secaoGramaticaTrad.tituloGramatica[language]}</h2>
              <p className="mb-4 text-muted-foreground">{secaoGramaticaTrad.introducaoGramatica[language]}</p>
              <div className="space-y-4">
                {grammarLessons.map((lesson: GrammarLesson) => (
                  <div key={lesson.id} className="p-3 border rounded-lg shadow-sm bg-card">
                    <h3 className="text-lg font-semibold mb-1 text-primary">{`${secaoGramaticaTrad.licao[language]} ${lesson.id}: ${lesson.title[language]}`}</h3>
                    <p className="mb-2 text-xs text-muted-foreground">{lesson.content[language]}</p>
                    <h4 className="text-sm font-semibold mb-1">{secaoGramaticaTrad.exemplo[language]}s:</h4>
                    <ul className="list-disc list-inside space-y-0.5 text-xs">
                      {lesson.examples.map((example, index) => (
                        <li key={index}>
                          <span className="font-medium">{language === 'pt' ? 'PT:' : 'CV:'}</span> {example[language]}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'dictionary' && (
          <div id="dictionary-content" role="tabpanel" aria-labelledby="dictionary-tab">
            <section>
              <h2 className="text-2xl font-semibold mb-4 sr-only">{dicionarioTrad.titulo[language]}</h2>
              <div className="relative w-full mb-6">
                <input
                  type="text"
                  placeholder={dicionarioTrad.pesquisarPalavras[language]}
                  className="w-full p-2 pr-10 border rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label={comumTrad.limparPesquisa[language]}
                  >
                    {'\u2715'}
                  </button>
                )}
              </div>
              {loadingDictionary && dictionaryData.length === 0 && <p>{iuTrad.carregando[language]}</p>}
              {errorDictionary && <p className="text-red-500">{errorDictionary}</p>}
              {!loadingDictionary && !errorDictionary && (
                <div className="space-y-3">
                  {filteredDictionary.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {filteredDictionary.map((entry: DictionaryEntry) => (
                        <div key={entry.id} className="p-3 border rounded-lg shadow-sm bg-card flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="text-md font-semibold text-primary mb-1">{entry.word}</h3>
                              <button
                                onClick={() => toggleFavorite(entry.id)}
                                className={`p-1 -mt-1 -mr-1 ${
                                  favorites.has(entry.id) ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400 dark:text-gray-600 dark:hover:text-yellow-400'
                                }`}
                                aria-label={favorites.has(entry.id) ? comumTrad.removerDosFavoritos[language] : comumTrad.adicionarAosFavoritos[language]}
                              >
                                <Star className="h-4 w-4" fill={favorites.has(entry.id) ? 'currentColor' : 'none'} />
                              </button>
                            </div>
                            <p className="text-xs">
                              <strong>PT:</strong> {entry.translation.pt}
                            </p>
                            <p className="text-xs mb-1">
                              <strong>CV:</strong> {entry.translation.cv}
                            </p>
                          </div>
                          {entry.example && (
                            <div className="mt-1 text-xs text-muted-foreground pt-1 border-t border-dashed">
                              <p><strong>{comumTrad.exemplo[language]} (PT):</strong> {entry.example.pt}</p>
                              <p><strong>{comumTrad.exemplo[language]} (CV):</strong> {entry.example.cv}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>{secaoGramaticaTrad.semResultados[language]}</p>
                  )}
                </div>
              )}
            </section>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div id="favorites-content" role="tabpanel" aria-labelledby="favorites-tab">
            <section>
              <h2 className="text-2xl font-semibold mb-4 sr-only">{comumTrad.favoritos[language]}</h2>
              {loadingDictionary && dictionaryData.length === 0 && <p>{iuTrad.carregando[language]}</p>}
              {errorDictionary && <p className="text-red-500">{errorDictionary}</p>}
              {!loadingDictionary && !errorDictionary && (
                (() => {
                  const favoriteEntries = dictionaryData.filter(entry => favorites.has(entry.id));
                  if (favoriteEntries.length > 0) {
                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {favoriteEntries.map((entry: DictionaryEntry) => (
                          <div key={entry.id} className="p-3 border rounded-lg shadow-sm bg-card flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <h3 className="text-md font-semibold text-primary mb-1">{entry.word}</h3>
                                <button
                                  onClick={() => toggleFavorite(entry.id)}
                                  className="p-1 -mt-1 -mr-1 text-yellow-400 hover:text-yellow-500"
                                  aria-label={comumTrad.removerDosFavoritos[language]}
                                >
                                  <Star className="h-4 w-4" fill="currentColor" />
                                </button>
                              </div>
                              <p className="text-xs">
                                <strong>PT:</strong> {entry.translation.pt}
                              </p>
                              <p className="text-xs mb-1">
                                <strong>CV:</strong> {entry.translation.cv}
                              </p>
                            </div>
                            {entry.example && (
                              <div className="mt-1 text-xs text-muted-foreground pt-1 border-t border-dashed">
                                <p><strong>{comumTrad.exemplo[language]} (PT):</strong> {entry.example.pt}</p>
                                <p><strong>{comumTrad.exemplo[language]} (CV):</strong> {entry.example.cv}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <div className="text-center py-8">
                        <Star className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600" fill="currentColor" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{favoritosTrad.tituloVazio[language]}</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{favoritosTrad.descricaoVazia[language]}</p>
                        <div className="mt-6">
                          <button
                            type="button"
                            onClick={() => setActiveTab('dictionary')}
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            {favoritosTrad.procurarNoDicionario[language]}
                          </button>
                        </div>
                      </div>
                    );
                  }
                })()
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default GrammarDictionaryPage;
