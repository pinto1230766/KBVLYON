import React from 'react';
import { Star } from 'lucide-react';
import { DictionaryEntry as DictionaryEntryType } from '../types/dictionary';
import { useLanguage } from '../hooks/useLanguage';

interface DictionaryEntryProps {
  entry: DictionaryEntryType;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const DictionaryEntry: React.FC<DictionaryEntryProps> = React.memo(({
  entry,
  isFavorite,
  onToggleFavorite
}) => {
  const { language, t } = useLanguage();

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

  return (
    <div className="p-3 border rounded-lg shadow-sm bg-card flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-md font-semibold text-primary mb-1">{entry.word}</h3>
          <button
            onClick={() => onToggleFavorite(entry.id)}
            className={`p-1 -mt-1 -mr-1 ${
              isFavorite ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400 dark:text-gray-600 dark:hover:text-yellow-400'
            }`}
            aria-label={isFavorite ? t('comum.removerDosFavoritos') : t('comum.adicionarAosFavoritos')}
          >
            <Star className="h-4 w-4" fill={isFavorite ? 'currentColor' : 'none'} aria-hidden="true" />
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
          <p><strong>{t('comum.exemplo')} (PT):</strong> {entry.example.pt}</p>
          <p><strong>{t('comum.exemplo')} (CV):</strong> {entry.example.cv}</p>
        </div>
      )}
      
      <div className="mt-2 flex flex-wrap gap-1">
        {entry.category && (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
            {translateCategory(entry.category)}
          </span>
        )}
        
        {entry.synonyms && entry.synonyms.length > 0 && (
          <div className="mt-1 w-full">
            <p className="text-xs text-muted-foreground">
              <strong>{t('comum.sinonimos')}:</strong> {entry.synonyms.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export default DictionaryEntry;