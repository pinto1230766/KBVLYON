import { useState } from 'react';
import { BookOpen, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import LessonsPage from './LessonsPage';
import LearningPathsPage from './LearningPathsPage';

/**
 * Page fusionnée : Apprentissage
 * Combine Leçons et Parcours d'Apprentissage avec un système d'onglets
 */
const LearningPage = () => {
  const { language } = useLanguage();
  
  // Gérer l'onglet actif via URL params
  const searchParams = new URLSearchParams(window.location.search);
  const initialTab = searchParams.get('tab') === 'paths' ? 'paths' : 'lessons';
  const [activeTab, setActiveTab] = useState<'lessons' | 'paths'>(initialTab);

  return (
    <div className="min-h-screen bg-background">
      {/* En-tête avec onglets */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 justify-center py-4">
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'lessons'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              {language === 'pt' ? 'Lições' : 'Lisons'}
            </button>
            <button
              onClick={() => setActiveTab('paths')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'paths'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Award className="w-5 h-5" />
              {language === 'pt' ? 'Percursos' : 'Perkursu'}
            </button>
          </div>
        </div>
      </div>

      {/* Contenu conditionnel */}
      <div className={activeTab === 'lessons' ? 'block' : 'hidden'}>
        <LessonsPage />
      </div>
      <div className={activeTab === 'paths' ? 'block' : 'hidden'}>
        <LearningPathsPage />
      </div>
    </div>
  );
};

export default LearningPage;
