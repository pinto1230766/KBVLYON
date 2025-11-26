import { useState, useEffect } from 'react';
import { Trophy, Target, Flame, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ProgressStats {
  totalLessons: number;
  completedLessons: number;
  totalQuizzes: number;
  completedQuizzes: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
  totalStudyTime: number; // en minutes
  badges: string[];
  level: string;
  points: number;
}

export function ProgressDashboard() {
  const { t, language } = useLanguage();
  const [stats, setStats] = useState<ProgressStats>({
    totalLessons: 18,
    completedLessons: 7,
    totalQuizzes: 10,
    completedQuizzes: 4,
    averageScore: 82,
    currentStreak: 5,
    longestStreak: 12,
    totalStudyTime: 340,
    badges: ['🔤', '👋', '💬', '📖'],
    level: 'Intermediate',
    points: 850
  });

  const progressPercentage = Math.round((stats.completedLessons / stats.totalLessons) * 100);
  const quizProgressPercentage = Math.round((stats.completedQuizzes / stats.totalQuizzes) * 100);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {language === 'pt' ? 'Seu Progresso' : 'Bu Progresu'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'pt' ? 'Continue assim! Você está indo muito bem.' : 'Kontinua asim! Bu sta bai muitu bon.'}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Leçons */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-foreground">{stats.completedLessons}/{stats.totalLessons}</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              {language === 'pt' ? 'Lições Completas' : 'Lisons Kompletu'}
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">{progressPercentage}%</p>
          </div>

          {/* Quiz */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <Target className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-foreground">{stats.averageScore}%</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              {language === 'pt' ? 'Média de Acertos' : 'Média di Asertu'}
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${stats.averageScore}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">{stats.completedQuizzes} {language === 'pt' ? 'quiz completos' : 'quiz kompletu'}</p>
          </div>

          {/* Streak */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-foreground">{stats.currentStreak}</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              {language === 'pt' ? 'Dias Seguidos' : 'Dia Seguidu'}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'pt' ? 'Recorde' : 'Rekordi'}: {stats.longestStreak} {language === 'pt' ? 'dias' : 'dia'}
            </p>
          </div>

          {/* Points */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-2">
            <div className="flex items-center justify-between">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-foreground">{stats.points}</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              {language === 'pt' ? 'Pontos Totais' : 'Pontu Total'}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'pt' ? 'Nível' : 'Nível'}: {stats.level}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">
              {language === 'pt' ? 'Conquistas' : 'Konkista'}
            </h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {stats.badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <span className="text-4xl">{badge}</span>
              </div>
            ))}
            {/* Badges bloqueados */}
            {[...Array(4)].map((_, index) => (
              <div
                key={`locked-${index}`}
                className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg opacity-50"
              >
                <span className="text-4xl">🔒</span>
              </div>
            ))}
          </div>
        </div>

        {/* Graphique de progression */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">
              {language === 'pt' ? 'Progresso Semanal' : 'Progresu Semanal'}
            </h2>
          </div>
          
          {/* Simple bar chart */}
          <div className="space-y-3">
            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, index) => {
              const minutes = [45, 60, 30, 50, 40, 0, 35][index];
              const percentage = (minutes / 60) * 100;
              
              return (
                <div key={day} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="text-foreground font-medium">{minutes} min</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {language === 'pt' ? 'Total esta semana' : 'Total kes simana'}: <span className="font-semibold text-foreground">{stats.totalStudyTime} {language === 'pt' ? 'minutos' : 'minutu'}</span>
            </p>
          </div>
        </div>

        {/* Próximos Objetivos */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-foreground">
            {language === 'pt' ? 'Próximos Objetivos' : 'Próximu Objetivu'}
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {language === 'pt' ? 'Complete 10 lições' : 'Konpleta 10 lison'}
                </p>
                <div className="mt-2 w-full bg-background rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">7/10</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {language === 'pt' ? 'Mantenha 7 dias seguidos' : 'Mantén 7 dia seguidu'}
                </p>
                <div className="mt-2 w-full bg-background rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '71%' }} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">5/7</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {language === 'pt' ? 'Alcance 1000 pontos' : 'Alkansa 1000 pontu'}
                </p>
                <div className="mt-2 w-full bg-background rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">850/1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
