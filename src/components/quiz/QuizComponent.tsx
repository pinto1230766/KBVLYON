import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Clock, Trophy, RotateCcw, ArrowRight } from 'lucide-react';
import { QuizQuestionComponent } from './QuizQuestion';
import type { Quiz, QuizAttempt } from '@/types/quiz';
import { useLanguage } from '@/hooks/useLanguage';

interface QuizComponentProps {
  quiz: Quiz;
  onComplete: (attempt: QuizAttempt) => void;
  onClose: () => void;
}

export function QuizComponent({ quiz, onComplete, onClose }: QuizComponentProps) {
  const { language } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit || 0);

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      
      if (quiz.timeLimit) {
        const remaining = quiz.timeLimit - Math.floor((Date.now() - startTime) / 1000);
        setTimeLeft(remaining);
        
        if (remaining <= 0) {
          handleFinishQuiz();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, quiz.timeLimit]);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let totalPoints = 0;
    let earnedPoints = 0;

    quiz.questions.forEach(question => {
      totalPoints += question.points;
      const userAnswer = answers[question.id];
      
      if (Array.isArray(question.correctAnswer)) {
        if (Array.isArray(userAnswer) &&
            question.correctAnswer.every(ans => userAnswer.includes(ans))) {
          earnedPoints += question.points;
        }
      } else {
        // Pour les questions de traduction, on accepte des variations
        if (question.type === 'translation') {
          const correct = question.correctAnswer.toString().toLowerCase().trim();
          const user = userAnswer?.toString().toLowerCase().trim() || '';
          // Accepter si 80% de similarité
          if (user === correct || user.includes(correct) || correct.includes(user)) {
            earnedPoints += question.points;
          }
        } else {
          if (userAnswer === question.correctAnswer) {
            earnedPoints += question.points;
          }
        }
      }
    });

    return Math.round((earnedPoints / totalPoints) * 100);
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleSubmitResults = () => {
    const score = calculateScore();
    const attempt: QuizAttempt = {
      quizId: quiz.id,
      userId: 'current-user', // À remplacer par l'ID utilisateur réel
      startedAt: new Date(startTime),
      completedAt: new Date(),
      answers,
      score,
      passed: score >= quiz.passingScore,
      timeSpent
    };
    
    onComplete(attempt);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const score = calculateScore();
  const passed = score >= quiz.passingScore;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Results Header */}
          <div className="bg-card rounded-lg border border-border p-8 text-center space-y-4">
            <div className="flex justify-center">
              {passed ? (
                <Trophy className="w-20 h-20 text-yellow-500" />
              ) : (
                <RotateCcw className="w-20 h-20 text-blue-500" />
              )}
            </div>
            
            <h2 className="text-3xl font-bold text-foreground">
              {passed
                ? (language === 'pt' ? 'Parabéns!' : 'Parabéns!')
                : (language === 'pt' ? 'Quase lá!' : 'Kuazi li!')}
            </h2>
            
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {language === 'pt' ? 'Pontuação' : 'Pontuason'}
                </p>
                <p className={`text-4xl font-bold ${
                  passed ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {score}%
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {language === 'pt' ? 'Tempo' : 'Tenpu'}
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  {formatTime(timeSpent)}
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {language === 'pt' ? 'Mínimo' : 'Mínimu'}
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  {quiz.passingScore}%
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">
              {passed
                ? (language === 'pt'
                    ? 'Você passou no quiz! Continue assim!'
                    : 'Bu pasa na quiz! Kontinua asim!')
                : (language === 'pt'
                    ? 'Você precisa de pelo menos ' + quiz.passingScore + '% para passar. Tente novamente!'
                    : 'Bu ta prizisa di pelu menu ' + quiz.passingScore + '% pa pasa. Tenta mas un bez!')}
            </p>
          </div>

          {/* Review Questions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {language === 'pt' ? 'Revisão das Respostas' : 'Revizão di Resposta'}
            </h3>
            
            {quiz.questions.map((question, index) => (
              <QuizQuestionComponent
                key={question.id}
                question={question}
                questionNumber={index + 1}
                totalQuestions={quiz.questions.length}
                onAnswer={() => {}}
                showResult={true}
                userAnswer={answers[question.id]}
                language={language as 'pt' | 'kea'}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={handleRetry}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              {language === 'pt' ? 'Tentar Novamente' : 'Tenta Mas Un Bez'}
            </button>
            
            <button
              onClick={handleSubmitResults}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              {language === 'pt' ? 'Concluir' : 'Konklui'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Quiz Header */}
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {language === 'pt' ? quiz.title.pt : quiz.title.kea}
              </h1>
              <p className="text-muted-foreground">
                {language === 'pt' ? quiz.description.pt : quiz.description.kea}
              </p>
            </div>
            
            {quiz.timeLimit && (
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Clock className={`w-5 h-5 ${timeLeft < 60 ? 'text-red-500' : 'text-muted-foreground'}`} />
                <span className={timeLeft < 60 ? 'text-red-500' : 'text-foreground'}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{language === 'pt' ? 'Progresso' : 'Progresu'}</span>
              <span>{currentQuestionIndex + 1} / {quiz.questions.length}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Current Question */}
        <QuizQuestionComponent
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quiz.questions.length}
          onAnswer={handleAnswer}
          userAnswer={answers[currentQuestion.id]}
          language={language as 'pt' | 'kea'}
        />

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {language === 'pt' ? 'Anterior' : 'Anterior'}
          </button>
          
          <button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {currentQuestionIndex === quiz.questions.length - 1
              ? (language === 'pt' ? 'Finalizar' : 'Finaliza')
              : (language === 'pt' ? 'Próxima' : 'Próximu')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
