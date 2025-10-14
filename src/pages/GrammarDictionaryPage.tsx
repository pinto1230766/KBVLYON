import { useEffect, useMemo, useState } from 'react';
import { Star } from 'lucide-react';
import Fuse from 'fuse.js';

import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { dictionaryData } from '@/data/dictionaryData';
import { grammarLessons, type GrammarLesson } from '@/data/grammarLessons';
import { useCloudFavorites } from '@/hooks/useCloudFavorites';

interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    kea: string;
  };
  example: {
    pt: string;
    kea: string;
  };
  note?: string;
}

const GrammarDictionaryPage: React.FC = () => {
  const { language, t } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const secaoGramaticaTrad = translations.gramaticaSecao as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dicionarioTrad = translations.dicionario as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const comumTrad = translations.comum as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iuTrad = translations.iu as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const favoritosTrad = translations.favoritos as any;

  const [activeTab, setActiveTab] = useState<'grammar' | 'dictionary' | 'favorites'>('grammar');
  const [dictionaryDataState, setDictionaryData] = useState<DictionaryEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingDictionary, setLoadingDictionary] = useState(true);
  const [errorDictionary, setErrorDictionary] = useState<string | null>(null);
  const [fuse, setFuse] = useState<Fuse<DictionaryEntry> | null>(null);
  const { favorites: favoritesArray, toggleFavorite, isFavorite } = useCloudFavorites();
  const favorites = useMemo(() => new Set(favoritesArray), [favoritesArray]);

  // Charger les données du dictionnaire
  useEffect(() => {
    if ((activeTab === 'dictionary' || activeTab === 'favorites') && dictionaryDataState.length === 0) {
      try {
        console.log('Chargement du dictionnaire...');
        
        // Utiliser les données intégrées depuis dictionaryData.ts
        console.log('Données du dictionnaire chargées :', dictionaryData.length, 'entrées');
        
        setDictionaryData(dictionaryData);
        
        const fuseOptions = {
          keys: [
            { name: 'word', weight: 0.4 },
            { name: 'translation.pt', weight: 0.3 },
            { name: 'translation.kea', weight: 0.3 },
          ],
          includeScore: true,
          threshold: 0.6,
          minMatchCharLength: 1,
          ignoreLocation: true,
        };
        
        setFuse(new Fuse(dictionaryData, fuseOptions));
        setLoadingDictionary(false);
        console.log('Dictionnaire chargé avec succès');
      } catch (error) {
        console.error("ERREUR DICTIONNAIRE:", error);
        setErrorDictionary('Erreur technique. Veuillez réessayer.');
        setLoadingDictionary(false);
      }
    }
  }, [activeTab, language, dictionaryDataState.length, loadingDictionary]);

  const filteredDictionary = useMemo(() => {
    try {
      if (!searchTerm.trim()) {
        return dictionaryDataState;
      }
      
      if (fuse) {
        return fuse.search(searchTerm).map((result) => result.item);
      }
      
      // Fallback si Fuse n'est pas disponible
      return dictionaryDataState.filter(entry =>
        entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (entry.translation.pt && entry.translation.pt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (entry.translation.kea && entry.translation.kea.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      return [];
    }
  }, [searchTerm, dictionaryDataState, fuse]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-foreground">{secaoGramaticaTrad.titulo[language]}</h1>

      <div className="mb-4 border-b border-border">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('grammar')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'grammar'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            {secaoGramaticaTrad.tituloGramatica[language]}
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ml-2 ${
              activeTab === 'dictionary'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            {dicionarioTrad.titulo[language]}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ml-2 ${
              activeTab === 'favorites'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
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
                    <h3 className="text-lg font-semibold mb-1 text-primary">{`${secaoGramaticaTrad.licao[language] || secaoGramaticaTrad.licao.pt} ${lesson.id}: ${lesson.title[language] || lesson.title.pt}`}</h3>
                    <p className="mb-2 text-xs text-muted-foreground">{lesson.content[language] || lesson.content.pt}</p>
                    <h4 className="text-sm font-semibold mb-1">{secaoGramaticaTrad.exemplo[language]}s:</h4>
                    <ul className="list-disc list-inside space-y-0.5 text-xs">
                      {lesson.examples.map((example, index) => (
                        <li key={index}>
                          <span className="font-medium">{language === 'pt' ? t('grammar.etiquetaPT') : t('grammar.etiquetaKEA')}</span> {example[language] || example.pt}
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
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                    aria-label={comumTrad.limparPesquisa[language]}
                  >
                    {'\u2715'}
                  </button>
                )}
              </div>
              {loadingDictionary && dictionaryDataState.length === 0 && (
                <p className="text-muted-foreground">{iuTrad.carregando[language]}</p>
              )}
              {errorDictionary && <p className="text-destructive">{errorDictionary}</p>}
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
                                  isFavorite(entry.id) ? 'text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'
                                }`}
                                aria-label={isFavorite(entry.id) ? comumTrad.removerDosFavoritos[language] : comumTrad.adicionarAosFavoritos[language]}
                              >
                                <Star className="h-4 w-4" fill={isFavorite(entry.id) ? 'currentColor' : 'none'} />
                              </button>
                            </div>
                            <p className="text-xs">
                              <strong>PT:</strong> {entry.translation.pt}
                            </p>
                            <p className="text-xs mb-1">
                              <strong>KEA:</strong> {entry.translation.kea}
                            </p>
                          </div>
                          {entry.example && (
                          <div className="mt-1 text-xs text-muted-foreground pt-1 border-t border-dashed">
                            <p><strong>{comumTrad.exemplo[language]} (PT):</strong> {entry.example.pt}</p>
                            <p><strong>{comumTrad.exemplo[language]} (KEA):</strong> {entry.example.kea}</p>
                          </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">{secaoGramaticaTrad.semResultados[language]}</p>
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
              {loadingDictionary && dictionaryDataState.length === 0 && (
                <p className="text-muted-foreground">{iuTrad.carregando[language]}</p>
              )}
              {errorDictionary && <p className="text-destructive">{errorDictionary}</p>}
              {!loadingDictionary && !errorDictionary && (
                (() => {
                  const favoriteEntries = dictionaryDataState.filter(entry => isFavorite(entry.id));
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
                                <strong>KEA:</strong> {entry.translation.kea}
                              </p>
                            </div>
                            {entry.example && (
                            <div className="mt-1 text-xs text-muted-foreground pt-1 border-t border-dashed">
                              <p><strong>{comumTrad.exemplo[language]} (PT):</strong> {entry.example.pt}</p>
                              <p><strong>{comumTrad.exemplo[language]} (KEA):</strong> {entry.example.kea}</p>
                            </div>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <div className="text-center py-8">
                        <Star className="mx-auto h-12 w-12 text-muted-foreground" fill="currentColor" />
                        <h3 className="mt-2 text-lg font-medium text-foreground">{favoritosTrad.tituloVazio[language]}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{favoritosTrad.descricaoVazia[language]}</p>
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
