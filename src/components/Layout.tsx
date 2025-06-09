import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from './MainNav';
import Footer from './Footer';
import { useLanguage } from '../hooks/useLanguage';

// On n'importe plus StagewiseToolbar car il est maintenant géré par le fichier stagewise.ts

const Layout: React.FC = () => {
  useLanguage();
  
  // Initialisation de Stagewise en développement
  useEffect(() => {
    if (import.meta.env.DEV) {
      import('../utils/stagewise').then(({ setupStagewise }) => {
        setupStagewise();
      });
    }
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MainNav />
      <main className="flex-1">
        <div className="container py-6 md:py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
