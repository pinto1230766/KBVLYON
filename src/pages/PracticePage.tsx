import { useState } from 'react';
import { Target, CreditCard, TrendingUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import ScenariosPage from './ScenariosPage';
import FlashcardsPage from './FlashcardsPage';
import ProgressDashboard from '../components/progress/ProgressDashboard';

/**
 * Page fusionnée : Pratique
 * Combine Scénarios, Flashcards et Progression avec un système d'onglets
 */
const PracticePage = () => {
  const { language } = useLanguage();
  
  // Gérer l'onglet actif via URL params
  const searchParams = new URLSearchParams(window.location.search);
  const initialTab = searchParams.get('tab') === 'flashcards' 
    ? 'flashcards' 
    : searchParams.get('tab') === 'progress'
    ? 'progress'
    : 'scenarios';
  const [activeTab, setActiveTab] = useState<'scenarios' | 'flashcards' | 'progress'>(initialTab);

  return (
    <div className="min-h-screen bg-background">
      {/* En-tête avec onglets */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 justify-center py-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('scenarios')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'scenarios'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Target className="w-5 h-5" />
              {language === 'pt' ? 'Cenários' : 'Senáriu'}
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'flashcards'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              {language === 'pt' ? 'Flashcards' : 'Flashcards'}
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeTab === 'progress'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              {language === 'pt' ? 'Progresso' : 'Progresu'}
            </button>
          </div>
        </div>
      </div>

      {/* Contenu conditionnel */}
      <div className={activeTab === 'scenarios' ? 'block' : 'hidden'}>
        <ScenariosPage />
      </div>
      <div className={activeTab === 'flashcards' ? 'block' : 'hidden'}>
        <FlashcardsPage />
      </div>
      <div className={activeTab === 'progress' ? 'block' : 'hidden'}>
        <ProgressDashboard />
      </div>
    </div>
  );
};

export default PracticePage;
