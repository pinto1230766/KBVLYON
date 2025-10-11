import { useState } from 'react';
import { X, Star, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface LessonPage {
  title: string;
  content: string;
}

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonNumber: number;
  totalLessons: number;
  category: string;
  categoryIcon?: string;
  pages: LessonPage[];
}

const LessonModal = ({
  isOpen,
  onClose,
  lessonNumber,
  totalLessons,
  category,
  pages,
}: LessonModalProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen) return null;

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden" role="dialog" aria-labelledby="lesson-modal-title" aria-modal="true">
        {/* En-tête bleu */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6" aria-hidden="true" />
            <div>
              <h2 id="lesson-modal-title" className="text-xl font-bold">
                Lição {lessonNumber} / {totalLessons}
              </h2>
              <p className="text-sm text-blue-100">{category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Star
                className={`w-5 h-5 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-white'}`}
                aria-hidden="true"
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-8 bg-white dark:bg-gray-900">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {pages[currentPage].title}
          </h3>
          <div
            className="prose prose-lg max-w-none text-foreground dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: pages[currentPage].content }}
          />
        </div>

        {/* Navigation */}
        <div className="border-t border-border bg-muted/30 px-6 py-4 flex items-center justify-between">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === 0
                ? 'text-muted-foreground cursor-not-allowed'
                : 'text-primary hover:bg-primary/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            Anterior
          </button>

          <span className="text-sm font-medium text-muted-foreground">
            {currentPage + 1} / {pages.length}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === pages.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === pages.length - 1
                ? 'text-muted-foreground cursor-not-allowed'
                : 'text-primary hover:bg-primary/10'
            }`}
          >
            Próxima
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
