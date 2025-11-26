import { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import type { QuizQuestion } from '@/types/quiz';

interface QuizQuestionComponentProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string | string[]) => void;
  showResult?: boolean;
  userAnswer?: string | string[];
  language: 'pt' | 'kea';
}

export function QuizQuestionComponent({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  showResult = false,
  userAnswer,
  language
}: QuizQuestionComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>(userAnswer || '');

  const handleAnswerChange = (answer: string | string[]) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  const isCorrect = () => {
    if (Array.isArray(question.correctAnswer)) {
      return Array.isArray(selectedAnswer) &&
        question.correctAnswer.every(ans => selectedAnswer.includes(ans));
    }
    return selectedAnswer === question.correctAnswer;
  };

  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
    }
  };

  const getDifficultyLabel = () => {
    switch (question.difficulty) {
      case 'easy': return language === 'pt' ? 'Fácil' : 'Fasil';
      case 'medium': return language === 'pt' ? 'Médio' : 'Médiu';
      case 'hard': return language === 'pt' ? 'Difícil' : 'Difísil';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {language === 'pt' ? 'Questão' : 'Kestão'} {questionNumber}/{totalQuestions}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor()}`}>
            {getDifficultyLabel()}
          </span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <HelpCircle className="w-4 h-4" />
          <span>{question.points} {language === 'pt' ? 'pontos' : 'pontu'}</span>
        </div>
      </div>

      {/* Question */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">
          {language === 'pt' ? question.question.pt : (question.question.kea || question.question.pt)}
        </h3>
      </div>

      {/* Answer Options based on type */}
      {question.type === 'multiple-choice' && (
        <div className="space-y-2">
          {question.options?.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === question.correctAnswer;
            
            return (
              <button
                key={index}
                onClick={() => !showResult && handleAnswerChange(option)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showResult
                    ? isCorrectOption
                      ? 'border-green-500 bg-green-50 dark:bg-green-950'
                      : isSelected
                        ? 'border-red-500 bg-red-50 dark:bg-red-950'
                        : 'border-border bg-background'
                    : isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-muted'
                } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && (
                    <span>
                      {isCorrectOption ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : null}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'fill-in-blank' && (
        <div className="space-y-2">
          <input
            type="text"
            value={selectedAnswer as string}
            onChange={(e) => !showResult && handleAnswerChange(e.target.value)}
            disabled={showResult}
            placeholder={language === 'pt' ? 'Digite sua resposta...' : 'Skrebe bu resposta...'}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              showResult
                ? isCorrect()
                  ? 'border-green-500 bg-green-50 dark:bg-green-950'
                  : 'border-red-500 bg-red-50 dark:bg-red-950'
                : 'border-border bg-background'
            }`}
          />
          {showResult && !isCorrect() && (
            <p className="text-sm text-muted-foreground">
              {language === 'pt' ? 'Resposta correta' : 'Resposta koretu'}: <span className="font-semibold text-green-600">{question.correctAnswer}</span>
            </p>
          )}
        </div>
      )}

      {question.type === 'translation' && (
        <div className="space-y-2">
          <textarea
            value={selectedAnswer as string}
            onChange={(e) => !showResult && handleAnswerChange(e.target.value)}
            disabled={showResult}
            placeholder={language === 'pt' ? 'Digite a tradução...' : 'Skrebe traduson...'}
            rows={3}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              showResult
                ? isCorrect()
                  ? 'border-green-500 bg-green-50 dark:bg-green-950'
                  : 'border-red-500 bg-red-50 dark:bg-red-950'
                : 'border-border bg-background'
            }`}
          />
          {showResult && (
            <p className="text-sm text-muted-foreground">
              {language === 'pt' ? 'Resposta sugerida' : 'Resposta sujeridu'}: <span className="font-semibold text-green-600">{question.correctAnswer}</span>
            </p>
          )}
        </div>
      )}

      {/* Explanation (shown after answer) */}
      {showResult && (
        <div className={`p-4 rounded-lg ${
          isCorrect() ? 'bg-green-50 dark:bg-green-950' : 'bg-yellow-50 dark:bg-yellow-950'
        }`}>
          <div className="flex items-start gap-2">
            <HelpCircle className="w-5 h-5 mt-0.5 text-muted-foreground flex-shrink-0" />
            <div className="space-y-1">
              <p className="font-semibold text-sm">
                {language === 'pt' ? 'Explicação' : 'Splikason'}:
              </p>
              <p className="text-sm text-foreground">
                {language === 'pt' ? question.explanation.pt : (question.explanation.kea || question.explanation.pt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
