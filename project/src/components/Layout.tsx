import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Layout: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow page-transition">
        <Outlet />
      </main>
      <div className="fixed bottom-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;