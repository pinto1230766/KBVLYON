import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PreachingPage from './pages/PreachingPage';
import GrammarDictionaryPage from './pages/GrammarDictionaryPage';
import LessonsExercisesPage from './pages/LessonsExercisesPage';
import BibleStudiesPage from './pages/BibleStudiesPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="preaching" element={<PreachingPage />} />
            <Route path="grammar-dictionary" element={<GrammarDictionaryPage />} />
            <Route path="lessons-exercises" element={<LessonsExercisesPage />} />
            <Route path="bible-studies" element={<BibleStudiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;