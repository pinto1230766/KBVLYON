import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  className?: string;
  icon?: React.ReactNode;
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  className = '',
  icon,
  color = 'bg-blue-100 text-blue-800',
}) => (
  <div className={`flex flex-col items-center p-4 bg-white rounded-lg shadow dark:bg-gray-800 ${className}`}>
    {icon && (
      <div className={`p-3 rounded-full ${color} mb-2`}>
        {icon}
      </div>
    )}
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{value}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
  </div>
);

export default StatCard;
