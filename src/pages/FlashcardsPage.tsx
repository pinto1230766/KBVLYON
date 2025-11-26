import { useState } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { flashcardDecks, allFlashcards } from '@/data/flashcards';
import type { FlashcardDeck } from '@/types/flashcard';

export default function FlashcardsPage() {
  const { language } = useLanguage();
  const [selectedDeck, setSelectedDeck] = useState<FlashcardDeck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<string>>(new Set());

  const currentDeckCards = selectedDeck 
    ? allFlashcards.filter(card => selectedDeck.cards.includes(card.id))
    : [];

  const currentCard = currentDeckCards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentCardIndex < currentDeckCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleKnown = () => {
    if (currentCard) {
      setStudiedCards(prev => new Set(prev).add(currentCard.id));
      handleNext();
    }
  };

  const handleUnknown = () => {
    handleNext();
  };

  const handleReset = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const progress = currentDeckCards.length > 0 
    ? Math.round(((currentCardIndex + 1) / currentDeckCards.length) * 100)
    : 0;

  const knownCount = studiedCards.size;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Flashcards' : 'Flashcards'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Aprenda vocabulário com repetição espaçada'
              : 'Prende vokabuláriu ku repetison spasadu'}
          </p>
        </div>

        {!selectedDeck ? (
          /* Deck Selection */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashcardDecks.map((deck) => (
              <div
                key={deck.id}
                onClick={() => {
                  setSelectedDeck(deck);
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                  setStudiedCards(new Set());
                }}
                className={`bg-card border-2 rounded-lg p-6 cursor-pointer hover:border-primary transition-all hover:shadow-lg border-[${deck.color}40]`}
              >
                <div className="text-center mb-4">
                  <span className="text-5xl">{deck.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground text-center mb-2">
                  {language === 'pt' ? deck.title.pt : deck.title.kea}
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {language === 'pt' ? deck.description.pt : deck.description.kea}
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium">
                    {deck.cards.length} {language === 'pt' ? 'cartões' : 'karton'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flashcard Study */
          <div className="max-w-2xl mx-auto">
            {/* Deck Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedDeck(null)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                {language === 'pt' ? 'Voltar' : 'Volta'}
              </button>
              <h2 className="text-2xl font-bold text-foreground">
                {language === 'pt' ? selectedDeck.title.pt : selectedDeck.title.kea}
              </h2>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                {language === 'pt' ? 'Reiniciar' : 'Reinisia'}
              </button>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>{currentCardIndex + 1} / {currentDeckCards.length}</span>
                <span>{knownCount} {language === 'pt' ? 'conhecidos' : 'konhesidu'}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`bg-primary h-2 rounded-full transition-all duration-300 w-[${progress}%]`}
                />
              </div>
            </div>

            {/* Flashcard */}
            {currentCard && (
              <div className="mb-6">
                <div
                  onClick={handleFlip}
                  className="relative h-80 cursor-pointer perspective-1000"
                >
                  <div
                    className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden">
                      <div className="w-full h-full bg-card border-2 border-primary rounded-lg p-8 flex flex-col items-center justify-center shadow-lg">
                        <p className="text-sm text-muted-foreground mb-4">
                          {language === 'pt' ? 'Frente' : 'Frenti'}
                        </p>
                        <p className="text-3xl font-bold text-foreground text-center">
                          {language === 'pt' ? currentCard.front.pt : (currentCard.front.kea || currentCard.front.pt)}
                        </p>
                        <p className="text-sm text-muted-foreground mt-8">
                          {language === 'pt' ? 'Clique para virar' : 'Klika pa vira'}
                        </p>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180">
                      <div className="w-full h-full bg-card border-2 border-green-500 rounded-lg p-8 flex flex-col items-center justify-center shadow-lg">
                        <p className="text-sm text-muted-foreground mb-4">
                          {language === 'pt' ? 'Verso' : 'Versu'}
                        </p>
                        <p className="text-3xl font-bold text-foreground text-center mb-4">
                          {currentCard.back.kea}
                        </p>
                        <p className="text-lg text-muted-foreground text-center mb-4">
                          {currentCard.back.pt}
                        </p>
                        {currentCard.example && (
                          <div className="mt-4 p-4 bg-muted rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">
                              {language === 'pt' ? currentCard.example.pt : currentCard.example.kea}
                            </p>
                            {language === 'pt' && currentCard.example.kea && (
                              <p className="text-xs text-muted-foreground italic">
                                {currentCard.example.kea}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {isFlipped && (
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={handleUnknown}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                      {language === 'pt' ? 'Não Sei' : 'N Ka Sabe'}
                    </button>
                    <button
                      onClick={handleKnown}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Check className="w-5 h-5" />
                      {language === 'pt' ? 'Sei' : 'N Sabe'}
                    </button>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevious}
                    disabled={currentCardIndex === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {language === 'pt' ? 'Anterior' : 'Anterior'}
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentCardIndex === currentDeckCards.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {language === 'pt' ? 'Próximo' : 'Próximu'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Completion */}
            {currentCardIndex === currentDeckCards.length - 1 && isFlipped && (
              <div className="text-center p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  🎉 {language === 'pt' ? 'Parabéns!' : 'Parabéns!'}
                </p>
                <p className="text-muted-foreground mb-4">
                  {language === 'pt' 
                    ? `Você completou ${currentDeckCards.length} cartões!`
                    : `Bu konpleta ${currentDeckCards.length} karton!`}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {language === 'pt' ? 'Estudar Novamente' : 'Studa Mas Un Bez'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
