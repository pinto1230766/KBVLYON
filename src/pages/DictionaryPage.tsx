import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Fuse from 'fuse.js';
import { Star, Volume2, History, X, Search } from 'lucide-react';
import { dictionaryData } from '../data/dictionaryData';
import { useLanguage } from '../hooks/useLanguage';
import { useOfflineStorage } from '../hooks/useOfflineStorage';

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
  category?: string;
}

const DictionaryPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'dictionary' | 'favorites'>('dictionary');
  const [searchTerm, setSearchTerm] = useState('');
  const [fuse, setFuse] = useState<Fuse<DictionaryEntry> | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'alphabetical' | 'thematic'>('thematic');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { value: favoritesArray, setValue: setFavoritesArray } = useOfflineStorage<string[]>('dictionaryFavorites', []);
  const { value: searchHistory, setValue: setSearchHistory } = useOfflineStorage<string[]>('searchHistory', []);
  const favorites = useMemo(() => new Set(favoritesArray), [favoritesArray]);

  // Initialiser Fuse.js pour la recherche
  useEffect(() => {
    const fuseOptions = {
      keys: [
        { name: 'word', weight: 0.4 },
        { name: 'translation.pt', weight: 0.3 },
        { name: 'translation.cv', weight: 0.3 },
      ],
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 2,
      ignoreLocation: true,
    };
    
    setFuse(new Fuse(dictionaryData, fuseOptions));
  }, []);

  const filteredDictionary = useMemo(() => {
    // Base list optionally filtered by category
    let base = selectedCategory
      ? dictionaryData.filter(e => (e.category || 'Geral') === selectedCategory)
      : dictionaryData;

    // Apply search filter
    if (searchTerm.trim()) {
      if (fuse) {
        // Fuse over full dataset then refilter by category
        const results = fuse.search(searchTerm).map(r => r.item);
        base = selectedCategory
          ? results.filter(e => (e.category || 'Geral') === selectedCategory)
          : results;
      } else {
        base = base.filter(entry =>
          entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.translation.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          entry.translation.cv.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }

    // Apply sorting
    if (sortOrder === 'alphabetical') {
      base = [...base].sort((a, b) => a.word.localeCompare(b.word));
    } else {
      // Thematic sorting (by category priority, then alphabetically within category)
      const preachingCategories = ['Pregação', 'Bíblia', 'Religião', 'Esperança', 'Sofrimento', 'Família', 'Vida', 'Pecado', 'Perdão', 'Oração', 'Reino de Deus'];
      base = [...base].sort((a, b) => {
        const aCat = a.category || 'Geral';
        const bCat = b.category || 'Geral';
        const aIsPreaching = preachingCategories.includes(aCat);
        const bIsPreaching = preachingCategories.includes(bCat);

        if (aIsPreaching && !bIsPreaching) return -1;
        if (!aIsPreaching && bIsPreaching) return 1;
        if (aCat !== bCat) return aCat.localeCompare(bCat);
        return a.word.localeCompare(b.word);
      });
    }

    return base;
  }, [searchTerm, fuse, selectedCategory, sortOrder]);

  // Derive categories from data, prioritizing preaching categories
  const categories = useMemo(() => {
    const preachingCategories = ['Pregação', 'Bíblia', 'Religião', 'Esperança', 'Sofrimento', 'Família', 'Vida', 'Pecado', 'Perdão', 'Oração', 'Reino de Deus'];
    const map = new Map<string, number>();
    for (const e of dictionaryData) {
      const c = e.category || 'Geral';
      map.set(c, (map.get(c) || 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) => {
      const aIsPreaching = preachingCategories.includes(a[0]);
      const bIsPreaching = preachingCategories.includes(b[0]);
      if (aIsPreaching && !bIsPreaching) return -1;
      if (!aIsPreaching && bIsPreaching) return 1;
      return b[1] - a[1]; // Then by count
    });
  }, []);

  const favoriteEntries = useMemo(() => {
    return dictionaryData.filter(entry => favorites.has(entry.id));
  }, [favorites]);

  // AI Suggestions: related words based on search term
  const aiSuggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();
    const relatedCategories = ['Religião', 'Esperança', 'Sofrimento', 'Família', 'Vida', 'Pecado', 'Perdão', 'Oração', 'Reino de Deus'];

    // Find words in related categories that match or are similar
    const suggestions = dictionaryData
      .filter(entry => {
        const entryText = `${entry.word} ${entry.translation.pt} ${entry.translation.cv}`.toLowerCase();
        return relatedCategories.includes(entry.category || 'Geral') &&
               (entryText.includes(term) || term.includes(entry.word.toLowerCase()));
      })
      .slice(0, 10); // Limit to 10 suggestions

    return suggestions;
  }, [searchTerm]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoritesArray(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return Array.from(newFavorites);
    });
  }, [setFavoritesArray]);

  // Add search term to history
  const addToSearchHistory = useCallback((term: string) => {
    if (term.trim()) {
      setSearchHistory(prev => {
        const filtered = prev.filter(item => item !== term);
        return [term, ...filtered].slice(0, 10); // Keep only 10 recent searches
      });
    }
  }, [setSearchHistory]);

  // Remove from search history
  const removeFromSearchHistory = useCallback((term: string) => {
    setSearchHistory(prev => prev.filter(item => item !== term));
  }, [setSearchHistory]);

  // Clear all search history
  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
  }, [setSearchHistory]);

  // Text-to-speech function
  const speakWord = useCallback((text: string, lang: 'pt' | 'cv') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'pt' ? 'pt-PT' : 'pt-CV'; // Use Portuguese voices
      utterance.rate = 0.8;
      utterance.pitch = 1;

      // Try to find a Portuguese voice
      const voices = speechSynthesis.getVoices();
      const portugueseVoice = voices.find(voice =>
        voice.lang.startsWith('pt') || voice.lang.includes('Portuguese')
      );

      if (portugueseVoice) {
        utterance.voice = portugueseVoice;
      }

      speechSynthesis.speak(utterance);
    }
  }, []);

  // Handle search input change with instant results
  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      addToSearchHistory(value);
    }
  }, [addToSearchHistory]);

  // Handle search history selection
  const handleHistorySelect = useCallback((term: string) => {
    setSearchTerm(term);
    searchInputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-background page-container">
      <div className="container mx-auto px-4 py-8">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">{t('dicionario.titulo')}</h1>

        {/* Onglets */}
        <div className="flex gap-8 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`pb-3 px-1 font-medium transition-colors relative ${
              activeTab === 'dictionary'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('dicionario.titulo')}
            {activeTab === 'dictionary' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`pb-3 px-1 font-medium transition-colors relative ${
              activeTab === 'favorites'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('comum.favoritos')}
            {activeTab === 'favorites' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
        </div>

        {/* Contenu */}
        {activeTab === 'dictionary' ? (
          <div>
            {/* Filtres et tri */}
            <div className="mb-4 space-y-3">
              {/* Tri */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSortOrder('thematic')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    sortOrder === 'thematic'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/70'
                  }`}
                >
                  Tri thématique
                </button>
                <button
                  onClick={() => setSortOrder('alphabetical')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    sortOrder === 'alphabetical'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/70'
                  }`}
                >
                  Tri alphabétique
                </button>
              </div>

              {/* Filtres de catégorie */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/70'
                  }`}
                >
                  {t('dicionario.todos')}
                </button>
                {categories.map(([name, count]) => (
                  <button
                    key={name}
                    onClick={() => setSelectedCategory(name)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedCategory === name
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/70'
                    }`}
                  >
                    {name} ({count})
                  </button>
                ))}
              </div>
            </div>

            {/* Barre de recherche améliorée */}
            <div className="mb-6 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t('dicionario.pesquisarPalavras')}
                  className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                )}
              </div>

              {/* Historique de recherche */}
              {isSearchFocused && searchHistory.length > 0 && !searchTerm && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  <div className="flex items-center justify-between p-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <History className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Recherches récentes</span>
                    </div>
                    <button
                      onClick={clearSearchHistory}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      Effacer tout
                    </button>
                  </div>
                  {searchHistory.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => handleHistorySelect(term)}
                      className="w-full text-left px-3 py-2 hover:bg-muted flex items-center justify-between group"
                    >
                      <span className="text-sm">{term}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromSearchHistory(term);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-muted-foreground/20 rounded"
                      >
                        <X className="h-3 w-3 text-muted-foreground" />
                      </button>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Suggestions IA */}
            {aiSuggestions.length > 0 && (
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  {t('dicionario.suggestionsIA')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aiSuggestions.map((entry) => (
                    <button
                      key={entry.id}
                      onClick={() => setSearchTerm(entry.word)}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      {entry.word} ({entry.category})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Compteur */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-lg">
                <span className="text-3xl font-bold text-primary">{filteredDictionary.length}</span>
                <span className="text-muted-foreground ml-2">{t('dicionario.palavrasNoDicionario')}</span>
              </p>
            </div>

            {/* Grille de mots améliorée */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredDictionary.map((entry: DictionaryEntry) => (
                <div key={entry.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-primary">{entry.word}</h3>
                      <button
                        onClick={() => speakWord(entry.word, 'cv')}
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Prononcer ${entry.word} en créole`}
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => toggleFavorite(entry.id)}
                      className={`p-1 ${
                        favorites.has(entry.id) ? 'text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'
                      }`}
                      aria-label={favorites.has(entry.id) ? t('dicionario.removerDosFavoritos') : t('dicionario.adicionarAosFavoritos')}
                    >
                      <Star className="h-5 w-5" fill={favorites.has(entry.id) ? 'currentColor' : 'none'} aria-hidden="true" />
                    </button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <strong className="text-foreground">PT:</strong>
                      <span className="text-muted-foreground flex-1">{entry.translation.pt}</span>
                      <button
                        onClick={() => speakWord(entry.translation.pt, 'pt')}
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Prononcer la traduction portugaise`}
                      >
                        <Volume2 className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <strong className="text-foreground">CV:</strong>
                      <span className="text-muted-foreground flex-1">{entry.translation.cv}</span>
                      <button
                        onClick={() => speakWord(entry.translation.cv, 'cv')}
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Prononcer la traduction créole`}
                      >
                        <Volume2 className="h-3 w-3" />
                      </button>
                    </div>

                    {entry.example && (
                      <div className="pt-2 mt-2 border-t border-border space-y-1">
                        <div className="flex items-start gap-2">
                          <strong className="text-foreground text-xs flex-shrink-0">Exemplo (PT):</strong>
                          <span className="text-muted-foreground italic text-xs flex-1">{entry.example.pt}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <strong className="text-foreground text-xs flex-shrink-0">Exemplo (CV):</strong>
                          <span className="text-muted-foreground italic text-xs flex-1">{entry.example.cv}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredDictionary.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">{t('dicionario.nenhumaPalavraEncontrada')}</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            {favoriteEntries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {favoriteEntries.map((entry: DictionaryEntry) => (
                  <div key={entry.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-primary">{entry.word}</h3>
                        <button
                          onClick={() => speakWord(entry.word, 'cv')}
                          className="p-1 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Prononcer ${entry.word} en créole`}
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => toggleFavorite(entry.id)}
                        className="p-1 text-yellow-400 hover:text-yellow-500"
                        aria-label={t('dicionario.removerDosFavoritos')}
                      >
                        <Star className="h-5 w-5" fill="currentColor" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <strong className="text-foreground">PT:</strong>
                        <span className="text-muted-foreground flex-1">{entry.translation.pt}</span>
                        <button
                          onClick={() => speakWord(entry.translation.pt, 'pt')}
                          className="p-1 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Prononcer la traduction portugaise`}
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <strong className="text-foreground">CV:</strong>
                        <span className="text-muted-foreground flex-1">{entry.translation.cv}</span>
                        <button
                          onClick={() => speakWord(entry.translation.cv, 'cv')}
                          className="p-1 text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Prononcer la traduction créole`}
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>

                      {entry.example && (
                        <div className="pt-2 mt-2 border-t border-border space-y-1">
                          <div className="flex items-start gap-2">
                            <strong className="text-foreground text-xs flex-shrink-0">Exemplo (PT):</strong>
                            <span className="text-muted-foreground italic text-xs flex-1">{entry.example.pt}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <strong className="text-foreground text-xs flex-shrink-0">Exemplo (CV):</strong>
                            <span className="text-muted-foreground italic text-xs flex-1">{entry.example.cv}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Star className="mx-auto h-16 w-16 text-muted-foreground mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{t('favoritos.tituloVazio')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('favoritos.descricaoVazia')}
                </p>
                <button
                  onClick={() => setActiveTab('dictionary')}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t('favoritos.procurarNoDicionario')}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DictionaryPage;
