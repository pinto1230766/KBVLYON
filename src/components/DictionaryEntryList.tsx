import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DictionaryEntry as DictionaryEntryType } from '../types/dictionary';
import DictionaryEntry from './DictionaryEntry';
import { useLanguage } from '../hooks/useLanguage';

interface DictionaryEntryListProps {
  entries: DictionaryEntryType[];
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
}

const ITEMS_PER_PAGE = 20;

const DictionaryEntryList: React.FC<DictionaryEntryListProps> = React.memo(({ 
  entries, 
  favorites, 
  onToggleFavorite 
}) => {
  const { t } = useLanguage();
  const [visibleEntries, setVisibleEntries] = useState(ITEMS_PER_PAGE);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMoreEntries = useCallback(() => {
    if (visibleEntries < entries.length) {
      setVisibleEntries(prev => Math.min(prev + ITEMS_PER_PAGE, entries.length));
    }
  }, [visibleEntries, entries.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMoreEntries();
        }
      },
      { threshold: 0.1 }
    );

    const target = observerTarget.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [loadMoreEntries]);

  // Réinitialiser le nombre d'entrées visibles quand les entrées changent
  useEffect(() => {
    setVisibleEntries(ITEMS_PER_PAGE);
  }, [entries]);

  const displayedEntries = entries.slice(0, visibleEntries);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {displayedEntries.map((entry) => (
          <DictionaryEntry
            key={entry.id}
            entry={entry}
            isFavorite={favorites.has(entry.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
      
      {visibleEntries < entries.length && (
        <div 
          ref={observerTarget} 
          className="flex justify-center mt-4 py-4"
        >
          <button
            onClick={loadMoreEntries}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            {t('comum.carregarMais')}
          </button>
        </div>
      )}
    </>
  );
});

export default DictionaryEntryList;