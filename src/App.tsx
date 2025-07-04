import { Suspense, lazy, useEffect } from 'react'; // Ajout de useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './components/theme-provider'; // Import ThemeProvider
import { StatusBar, Style } from '@capacitor/status-bar'; // Réimport de Style
import { Capacitor } from '@capacitor/core'; // Import Capacitor
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

// Composants chargés de manière paresseuse
const HomePage = lazy(() => import('./pages/HomePage'));
const PreachingPage = lazy(() => import('./pages/PreachingPage'));
const GrammarDictionaryPage = lazy(() => import('./pages/GrammarDictionaryPage'));
const BibleStudiesPage = lazy(() => import('./pages/BibleStudiesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
// const AdminStudyRequestsPage = lazy(() => import('./pages/AdminStudyRequestsPage')); // Supprimé
const NotesPage = lazy(() => import('./pages/NotesPage')); // Nouvelle page Notes
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  useEffect(() => {
    // Configuration de la barre d'état pour Android et iOS
    const configureStatusBar = async () => {
      try {
        if (Capacitor.isPluginAvailable('StatusBar')) {
          await StatusBar.setOverlaysWebView({ overlay: false });
          await StatusBar.setStyle({ style: Style.Dark }); // Icônes claires
          await StatusBar.setBackgroundColor({ color: '#333333' }); // Fond gris foncé
          console.log('StatusBar configured: overlay=false, style=Dark, background=#333333');
        }
      } catch (e) {
        console.error('Failed to configure StatusBar', e);
      }
    };

    if (Capacitor.isNativePlatform()) {
      configureStatusBar();
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system" attribute="class"> {/* Wrap with ThemeProvider */}
      <LanguageProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="preaching" element={<PreachingPage />} />
                <Route path="grammar-dictionary" element={<GrammarDictionaryPage />} />
                <Route path="bible-studies" element={<BibleStudiesPage />} />
                <Route path="a-propos" element={<AboutPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="terms-of-service" element={<TermsOfServicePage />} />
                <Route path="cookie-policy" element={<CookiePolicyPage />} />
                <Route path="notes" element={<NotesPage />} /> {/* Nouvelle route Notes */}
                {/* <Route path="admin/study-requests" element={<AdminStudyRequestsPage />} /> {/* Supprimé */}
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
