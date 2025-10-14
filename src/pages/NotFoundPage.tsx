import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-dark">404</h1>
        <h2 className="text-3xl font-bold mb-6">
          {t('paginaNaoEncontrada')}
        </h2>
        <p className="text-gray-600 mb-8">
          {language === 'pt' 
            ? 'A página que você está procurando não existe ou foi movida.' 
            : 'Pájina ki bu sta buska ka izisti ou foi movidu.'}
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home size={18} className="mr-2" />
          {language === 'pt' ? 'Voltar para página inicial' : 'Volta pa pájina inisial'}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
