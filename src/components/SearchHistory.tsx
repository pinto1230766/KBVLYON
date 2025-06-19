import React from 'react';
import { Clock, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SearchHistoryProps {
  history: string[];
  onSelectTerm: (term: string) => void;
  onClearHistory: () => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ 
  history, 
  onSelectTerm, 
  onClearHistory 
}) => {
  const { t } = useLanguage();
  
  if (history.length === 0) return null;

  return (
    <div className="mt-2 mb-4">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {t('comum.pesquisasRecentes')}
        </h3>
        <button
          onClick={onClearHistory}
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {t('comum.limpar')}
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((term) => (
          <button
            key={term}
            onClick={() => onSelectTerm(term)}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;