import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      <span className="ml-4 text-lg font-medium text-gray-700">Chargement...</span>
    </div>
  );
};

export default LoadingSpinner;
