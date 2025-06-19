import React, { useState, useMemo } from 'react';
import { DictionaryEntry } from '../types/dictionary';
import DictionaryEntryList from './DictionaryEntryList';
import { useLanguage } from '../hooks/useLanguage';

interface DictionaryByCategoryProps {
  entries: DictionaryEntry[];
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
}

const DictionaryByCategory: React.FC<DictionaryByCategoryProps> = ({
  entries,
  favorites,
  onToggleFavorite
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Grouper les entrées par catégorie
  const categorizedEntries = useMemo(() => {
    const grouped: Record<string, DictionaryEntry[]> = {};
    
    entries.forEach(entry => {
      const category = entry.category || 'divers';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(entry);
    });
    
    return grouped;
  }, [entries]);

  // Obtenir la liste des catégories triées par nombre d'entrées
  const categories = useMemo(() => {
    return Object.entries(categorizedEntries)
      .map(([category, entries]) => ({
        name: category,
        count: entries.length
      }))
      .sort((a, b) => b.count - a.count);
  }, [categorizedEntries]);

  // Traduire le nom de la catégorie
  const translateCategory = (category: string): string => {
    const categoryTranslations: Record<string, Record<string, string>> = {
      'família': { pt: 'Família', cv: 'Família' },
      'alimentos': { pt: 'Alimentos', cv: 'Kumida' },
      'corpo': { pt: 'Corpo', cv: 'Korpu' },
      'cores': { pt: 'Cores', cv: 'Kor' },
      'tempo': { pt: 'Tempo', cv: 'Tempu' },
      'números': { pt: 'Números', cv: 'Númeru' },
      'pronomes': { pt: 'Pronomes', cv: 'Pronomi' },
      'religião': { pt: 'Religião', cv: 'Relijion' },
      'saudações': { pt: 'Saudações', cv: 'Kumprimentu' },
      'perguntas': { pt: 'Perguntas', cv: 'Purgunta' },
      'lugares': { pt: 'Lugares', cv: 'Lugar' },
      'objetos': { pt: 'Objetos', cv: 'Objetu' },
      'clima': { pt: 'Clima', cv: 'Klima' },
      'qualidades': { pt: 'Qualidades', cv: 'Kualidadi' },
      'verbos': { pt: 'Verbos', cv: 'Verbu' },
      'divers': { pt: 'Diversos', cv: 'Diversu' }
    };
    
    return categoryTranslations[category]?.[language] || category;
  };

  // Filtrer les entrées par catégorie sélectionnée
  const filteredEntries = useMemo(() => {
    if (!selectedCategory) return entries;
    return categorizedEntries[selectedCategory] || [];
  }, [selectedCategory, entries, categorizedEntries]);

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">{t('comum.categoria')}</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            {t('iu.tudu')}
          </button>
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category.name
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
              }`}
            >
              {translateCategory(category.name)} ({category.count})
            </button>
          ))}
        </div>
      </div>

      <DictionaryEntryList
        entries={filteredEntries}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
};

export default DictionaryByCategory;