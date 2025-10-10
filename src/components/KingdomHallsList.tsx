import React from 'react';
import { useTranslation } from 'react-i18next';

const KingdomHallsList = () => {
  const { t } = useTranslation();
  const kingdomHalls = [
    { name: 'Praia', distance: '2.5 km' },
    { name: 'Mindelo', distance: '15 km' },
    { name: 'Espargos', distance: '8 km' },
    { name: 'Assomada', distance: '12 km' },
  ];

  return (
    <div>
      <ul className="space-y-2">
        {kingdomHalls.map((hall, index) => (
          <li key={index} className="flex justify-between items-center p-2 border rounded">
            <span>{hall.name}</span>
            <span>{hall.distance}</span>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        {t('settings.kingdomHalls.findNearby')}
      </button>
    </div>
  );
};

export default KingdomHallsList;
