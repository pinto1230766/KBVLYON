import React, { useState } from 'react';
import { Brain, Sparkles, Check, X, RefreshCw, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { GeminiService } from '../../services/ai/gemini';
import { GeneratedQuiz } from '../../services/ai/types';

const TOPICS = [
  { id: 'greetings', label: 'Cumprimentos (Salutations)' },
  { id: 'family', label: 'Família (Famille)' },
  { id: 'food', label: 'Comida (Nourriture)' },
  { id: 'grammar_basics', label: 'Gramática Básica' },
  { id: 'verbs', label: 'Verbos Comuns' },
  { id: 'culture', label: 'Cultura de Cabo Verde' }
];

const LEVELS = [
  { id: 'beginner', label: 'Iniciante (A1-A2)' },
  { id: 'intermediate', label: 'Intermédio (B1-B2)' },
  { id: 'advanced', label: 'Avançado (C1+)' }
];

const AIQuizGenerator: React.FC = () => {
  const [step, setStep] = useState<'config' | 'loading' | 'quiz' | 'result'>('config');
  const [topic, setTopic] = useState<string>('greetings');
  const [level, setLevel] = useState<string>('beginner');
  const [quiz, setQuiz] = useState<GeneratedQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuiz = async () => {
    setStep('loading');
    setError(null);
    try {
      const selectedTopicLabel = TOPICS.find(t => t.id === topic)?.label || topic;
      const selectedLevelLabel = LEVELS.find(l => l.id === level)?.label || level;
      
      const generatedQuiz = await GeminiService.generateQuiz(selectedTopicLabel, selectedLevelLabel);
      
      if (generatedQuiz && generatedQuiz.questions && generatedQuiz.questions.length > 0) {
        setQuiz(generatedQuiz);
        setCurrentQuestionIndex(0);
        setScore(0);
        setStep('quiz');
      } else {
        throw new Error("Format de quiz invalide reçu de l'IA");
      }
    } catch (err) {
      console.error(err);
      setError("Désolé, l'IA n'a pas pu générer le quiz. Veuillez réessayer.");
      setStep('config');
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null || !quiz) return;
    
    setIsAnswerChecked(true);
    if (selectedAnswer === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!quiz) return;
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setStep('result');
    }
  };

  const resetQuiz = () => {
    setStep('config');
    setQuiz(null);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setScore(0);
  };

  if (step === 'config') {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            Gerador de Quiz IA
          </CardTitle>
          <CardDescription>
            Escolha um tópico e um nível para gerar um exercício personalizado com Inteligência Artificial.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="topic-select" className="text-sm font-medium">Tópico</label>
            <select
              id="topic-select"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {TOPICS.map(t => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="level-select" className="text-sm font-medium">Nível</label>
            <select
              id="level-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {LEVELS.map(l => (
                <option key={l.id} value={l.id}>{l.label}</option>
              ))}
            </select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerateQuiz} className="w-full" size="lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Gerar Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (step === 'loading') {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8 text-center py-12">
        <CardContent className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">A criar o teu quiz...</h3>
            <p className="text-muted-foreground">O KrioluGPT está a preparar perguntas sobre {TOPICS.find(t => t.id === topic)?.label}.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (step === 'quiz' && quiz) {
    const question = quiz.questions[currentQuestionIndex];
    
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <Badge variant="outline">Questão {currentQuestionIndex + 1}/{quiz.questions.length}</Badge>
            <span className="text-sm text-muted-foreground">Score: {score}</span>
          </div>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {question.options.map((option, index) => {
              let buttonStyle = "justify-start text-left h-auto py-3 px-4";
              
              if (isAnswerChecked) {
                if (index === question.correctAnswer) {
                  buttonStyle += " bg-green-100 border-green-500 text-green-900 hover:bg-green-100 hover:text-green-900";
                } else if (index === selectedAnswer) {
                  buttonStyle += " bg-red-100 border-red-500 text-red-900 hover:bg-red-100 hover:text-red-900";
                } else {
                  buttonStyle += " opacity-50";
                }
              } else if (selectedAnswer === index) {
                buttonStyle += " border-primary bg-primary/5";
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonStyle}
                  onClick={() => !isAnswerChecked && setSelectedAnswer(index)}
                  disabled={isAnswerChecked}
                >
                  <div className="flex items-center w-full">
                    <span className="mr-3 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {isAnswerChecked && index === question.correctAnswer && (
                      <Check className="w-4 h-4 text-green-600 ml-2" />
                    )}
                    {isAnswerChecked && index === selectedAnswer && index !== question.correctAnswer && (
                      <X className="w-4 h-4 text-red-600 ml-2" />
                    )}
                  </div>
                </Button>
              );
            })}
          </div>

          {isAnswerChecked && (
            <div className="mt-4 p-4 bg-muted rounded-lg animate-in fade-in slide-in-from-top-2">
              <p className="font-medium mb-1">Explicação:</p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-end">
          {!isAnswerChecked ? (
            <Button onClick={handleCheckAnswer} disabled={selectedAnswer === null}>
              Verificar
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex < quiz.questions.length - 1 ? 'Próxima' : 'Ver Resultados'}
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }

  if (step === 'result') {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8 text-center">
        <CardHeader>
          <CardTitle>Quiz Completado!</CardTitle>
          <CardDescription>Aqui está o teu resultado</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-5xl font-bold text-primary mb-2">
            {score} / {quiz?.questions.length}
          </div>
          <p className="text-muted-foreground">
            {score === quiz?.questions.length ? 'Perfeito! Parabéns!' : 
             score >= (quiz?.questions.length || 0) / 2 ? 'Bom trabalho! Continua a praticar.' : 
             'Continua a tentar, a prática leva à perfeição.'}
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={resetQuiz} size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Novo Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return null;
};

export default AIQuizGenerator;
