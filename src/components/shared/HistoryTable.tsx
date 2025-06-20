import React from 'react';

export interface HistoryEntry {
  id: string;
  date: string;
  duration: number;
  notes?: string;
}

interface HistoryTableProps {
  history: HistoryEntry[];
  formatTime: (ms: number) => string;
}

export const HistoryTable: React.FC<HistoryTableProps> = ({ history, formatTime }) => {
  if (history.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">Nenhum registro encontrado</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Duração
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Notas
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {history.map((entry) => (
            <tr key={entry.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {new Date(entry.date).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {formatTime(entry.duration)}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {entry.notes || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
