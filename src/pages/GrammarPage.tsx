import { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import LessonModal from '../components/LessonModal';
import { grammarLessonContent } from '../data/grammarLessonContent';
import { grammarLessonsEnriched, getCategoryCounts, GrammarLesson } from '../data/grammarDataEnriched';
import { useLanguage } from '../hooks/useLanguage';


const GrammarPage = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(t('grammar.todas'));
  const [selectedLesson, setSelectedLesson] = useState<GrammarLesson | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLesson = (lesson: GrammarLesson) => {
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  const categories = [
    { key: 'Todas', label: t('grammar.todas') },
    { key: 'fonologia', label: t('grammar.fonologia') },
    { key: 'morfologia', label: t('grammar.morfologia') },
    { key: 'sintaxi', label: t('grammar.sintaxe') },
    { key: 'verbos', label: t('grammar.verbos') },
    { key: 'pronomes', label: t('grammar.pronomes') },
    { key: 'geral', label: t('grammar.geral') }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fonologia':
        return '🔊';
      case 'morfologia':
        return '📐';
      case 'sintaxi':
        return '🔧';
      case 'verbos':
        return '⚡';
      case 'pronomes':
        return '👤';
      case 'geral':
        return '🎨';
      default:
        return '📚';
    }
  };

  const getCategoryCount = (category: string) => {
    if (category === 'Todas') return grammarLessonsEnriched.length;
    const counts = getCategoryCounts();
    switch (category) {
      case 'fonologia': return counts.fonologia;
      case 'morfologia': return counts.morfologia;
      case 'sintaxi': return counts.sintaxi;
      case 'verbos': return counts.verbos;
      case 'pronomes': return counts.pronomes;
      case 'geral': return counts.geral;
      default: return 0;
    }
  };

  const filteredLessons = grammarLessonsEnriched
    .filter(lesson => {
      const categoryMatch = selectedCategory === 'Todas' ||
        lesson.category === selectedCategory;
      const searchMatch = searchTerm === '' ||
        lesson.title.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.title.cv.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.content.pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.content.cv.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => a.id - b.id); // Tri par ordre chronologique (ID)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-2">
        {/* Titre */}
        <h1 className="text-2xl font-bold text-center text-foreground mb-3">{t('grammar.titulo')}</h1>

        {/* Barre de recherche */}
        <div className="mb-2">
          <input
            type="text"
            placeholder={t('grammar.pesquisarLicoes')}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Onglets avec compteurs */}
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.map((category) => {
            const count = getCategoryCount(category.key);
            const isActive = selectedCategory === category.key;

            return (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <span>{getCategoryIcon(category.key)}</span>
                <span>{category.label}</span>
                <span className={`ml-1 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Liste des leçons */}
        <div className="space-y-3">
          {filteredLessons.map((lesson, index) => (
            <div
              key={`${lesson.id}-${index}`}
              onClick={() => openLesson(lesson)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLesson(lesson);
                }
              }}
              tabIndex={0}
              role="button"
              aria-labelledby={`grammar-lesson-${lesson.id}-title`}
              className="bg-card border border-border rounded-lg p-2 hover:shadow-md transition-shadow cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-primary text-sm font-medium">{t('grammar.licacao')} {lesson.id}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{getCategoryIcon(lesson.category)}</span>
                      <span>{lesson.category}</span>
                    </span>
                  </div>
                  <h3 id={`grammar-lesson-${lesson.id}-title`} className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {language === 'kea' ? lesson.title.cv : lesson.title.pt}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {language === 'kea' ? lesson.content.cv.substring(0, 150) + '...' : lesson.content.pt.substring(0, 150) + '...'}
                  </p>
                </div>
                <div className="flex items-center gap-1 ml-4 flex-shrink-0">
                  <button
                    className="p-1 text-muted-foreground hover:text-yellow-400 transition-colors"
                    aria-label={t('grammar.adicionarAosFavoritos')}
                  >
                    <Star className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">
              {t('grammar.nenhumaLicaoEncontrada')}
            </p>
          </div>
        )}
      </div>

      {/* Modal de leçon */}
      {selectedLesson && (
        <LessonModal
          isOpen={isModalOpen}
          onClose={closeModal}
          lessonNumber={selectedLesson.id}
          totalLessons={grammarLessonsEnriched.length}
          category={selectedLesson.category}
          pages={grammarLessonContent[selectedLesson.id] || []}
        />
      )}
    </div>
  );
};

export default GrammarPage;
