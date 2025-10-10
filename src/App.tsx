import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './components/theme-provider';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';
import './App.css';

// Composants chargés de manière paresseuse
const HomePage = lazy(() => import('./pages/HomePage'));
const PreachingPage = lazy(() => import('./pages/PreachingPage'));
const GrammarPage = lazy(() => import('./pages/GrammarPage'));
const DictionaryPage = lazy(() => import('./pages/DictionaryPage'));
const LessonsPage = lazy(() => import('./pages/LessonsPage'));
const BibleStudiesPage = lazy(() => import('./pages/BibleStudiesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const NotesPage = lazy(() => import('./pages/NotesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Padding pour la barre de navigation système */}
      <div className="h-[env(safe-area-inset-bottom,20px)] bg-background" />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Configuration de la barre d'état pour Android et iOS
    const configureStatusBar = async () => {
      try {
        if (Capacitor.isPluginAvailable('StatusBar')) {
          await StatusBar.setOverlaysWebView({ overlay: false });
          await StatusBar.setStyle({ style: Style.Dark });
          await StatusBar.setBackgroundColor({ color: '#333333' });
          console.log('StatusBar configured');
        }
      } catch (e) {
        console.error('Failed to configure StatusBar', e);
      }
    };

    configureStatusBar();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <Router>
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="preaching" element={<PreachingPage />} />
                <Route path="grammar-dictionary" element={<GrammarPage />} />
                <Route path="dictionary" element={<DictionaryPage />} />
                <Route path="lessons" element={<LessonsPage />} />
                <Route path="bible-studies" element={<BibleStudiesPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="terms-of-service" element={<TermsOfServicePage />} />
                <Route path="cookie-policy" element={<CookiePolicyPage />} />
                <Route path="notes" element={<NotesPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
