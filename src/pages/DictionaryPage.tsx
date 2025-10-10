import { useState, useEffect, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { Star } from 'lucide-react';
import { dictionaryData } from '../data/dictionaryData';

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
  const [activeTab, setActiveTab] = useState<'dictionary' | 'favorites'>('dictionary');
  const [searchTerm, setSearchTerm] = useState('');
  const [fuse, setFuse] = useState<Fuse<DictionaryEntry> | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

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
    const base = selectedCategory
      ? dictionaryData.filter(e => (e.category || 'divers') === selectedCategory)
      : dictionaryData;

    if (!searchTerm.trim()) {
      return base;
    }

    if (fuse) {
      // Fuse over full dataset then refilter by category
      const results = fuse.search(searchTerm).map(r => r.item);
      return selectedCategory
        ? results.filter(e => (e.category || 'divers') === selectedCategory)
        : results;
    }

    return base.filter(entry =>
      entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translation.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.translation.cv.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, fuse, selectedCategory]);

  // Derive categories from data
  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const e of dictionaryData) {
      const c = e.category || 'divers';
      map.set(c, (map.get(c) || 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const favoriteEntries = useMemo(() => {
    return dictionaryData.filter(entry => favorites.has(entry.id));
  }, [favorites]);

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-center text-foreground mb-8">Dicionário</h1>

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
            Dicionário
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
            Favoritos
            {activeTab === 'favorites' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
        </div>

        {/* Contenu */}
        {activeTab === 'dictionary' ? (
          <div>
            {/* Filtres de catégorie */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/70'
                  }`}
                >
                  Todos
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

            {/* Barre de recherche */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Pesquisar palavras..."
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Compteur */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-lg">
                <span className="text-3xl font-bold text-primary">{filteredDictionary.length}</span>
                <span className="text-muted-foreground ml-2">palavras no dicionário</span>
              </p>
            </div>

            {/* Grille de mots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredDictionary.map((entry: DictionaryEntry) => (
                <div key={entry.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary">{entry.word}</h3>
                    <button
                      onClick={() => toggleFavorite(entry.id)}
                      className={`p-1 ${
                        favorites.has(entry.id) ? 'text-yellow-400' : 'text-muted-foreground hover:text-yellow-400'
                      }`}
                      aria-label={favorites.has(entry.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                    >
                      <Star className="h-5 w-5" fill={favorites.has(entry.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong className="text-foreground">PT:</strong>{' '}
                      <span className="text-muted-foreground">{entry.translation.pt}</span>
                    </p>
                    <p>
                      <strong className="text-foreground">CV:</strong>{' '}
                      <span className="text-muted-foreground">{entry.translation.cv}</span>
                    </p>
                    
                    {entry.example && (
                      <div className="pt-2 mt-2 border-t border-border space-y-1">
                        <p className="text-xs">
                          <strong className="text-foreground">Exemplo (PT):</strong>{' '}
                          <span className="text-muted-foreground italic">{entry.example.pt}</span>
                        </p>
                        <p className="text-xs">
                          <strong className="text-foreground">Exemplo (CV):</strong>{' '}
                          <span className="text-muted-foreground italic">{entry.example.cv}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredDictionary.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Nenhuma palavra encontrada.</p>
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
                      <h3 className="text-xl font-bold text-primary">{entry.word}</h3>
                      <button
                        onClick={() => toggleFavorite(entry.id)}
                        className="p-1 text-yellow-400 hover:text-yellow-500"
                        aria-label="Remover dos favoritos"
                      >
                        <Star className="h-5 w-5" fill="currentColor" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-foreground">PT:</strong>{' '}
                        <span className="text-muted-foreground">{entry.translation.pt}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">CV:</strong>{' '}
                        <span className="text-muted-foreground">{entry.translation.cv}</span>
                      </p>
                      
                      {entry.example && (
                        <div className="pt-2 mt-2 border-t border-border space-y-1">
                          <p className="text-xs">
                            <strong className="text-foreground">Exemplo (PT):</strong>{' '}
                            <span className="text-muted-foreground italic">{entry.example.pt}</span>
                          </p>
                          <p className="text-xs">
                            <strong className="text-foreground">Exemplo (CV):</strong>{' '}
                            <span className="text-muted-foreground italic">{entry.example.cv}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Star className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Nenhum favorito</h3>
                <p className="text-muted-foreground mb-6">
                  Adicione palavras aos seus favoritos clicando na estrela ao lado de cada palavra.
                </p>
                <button
                  onClick={() => setActiveTab('dictionary')}
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Procurar no dicionário
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
