import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const TermsOfServicePage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        {language === 'pt' ? 'Termos de Serviço' : 'Termus di Servisu'}
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          {language === 'pt' 
            ? 'O conteúdo desta página está em elaboração. Volte em breve!' 
            : 'Kontéudu dés pájina sta na elaboreson. Volta un dia dés!'}
        </p>
        {/* Vous pouvez ajouter plus de contenu ici ultérieurement */}
      </div>
    </div>
  );
};

export default TermsOfServicePage;
