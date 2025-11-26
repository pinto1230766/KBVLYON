import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { learningPaths } from '@/data/learningPaths';
import type { LearningPath } from '@/types/learningPath';

export default function LearningPathsPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);

  const getLevelLabel = (level: string) => {
    const labels = {
      beginner: language === 'pt' ? 'Iniciante' : 'Inisianti',
      intermediate: language === 'pt' ? 'Intermediário' : 'Intermédiáriu',
      advanced: language === 'pt' ? 'Avançado' : 'Avansadu',
      expert: language === 'pt' ? 'Expert' : 'Expert'
    };
    return labels[level as keyof typeof labels] || level;
  };

  const getLevelColor = (level: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      advanced: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      expert: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return colors[level as keyof typeof colors] || '';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === 'pt' ? 'Percursos de Aprendizagem' : 'Perkursu di Aprendizaji'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'pt' 
              ? 'Escolha um percurso estruturado para aprender cabo-verdiano de forma progressiva'
              : 'Skolhe un perkursu strukturadu pa prende kriolu di forma progresiva'}
          </p>
        </div>

        {/* Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              onClick={() => setSelectedPath(path)}
              className={`bg-card border-2 border-border rounded-lg p-6 hover:border-primary transition-all cursor-pointer group ${selectedPath?.id === path.id ? 'border-[var(--path-color)]' : ''}`}
              // eslint-disable-next-line
              style={{ '--path-color': path.color } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{path.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {language === 'pt' ? path.title.pt : path.title.kea}
                    </h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getLevelColor(path.level)}`}>
                      {getLevelLabel(path.level)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">
                {language === 'pt' ? path.description.pt : path.description.kea}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">{path.duration}</p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'pt' ? 'semanas' : 'simana'}
                  </p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">{path.lessons.length}</p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'pt' ? 'lições' : 'lison'}
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">{path.milestones.length}</p>
                  <p className="text-xs text-muted-foreground">
                    {language === 'pt' ? 'marcos' : 'marku'}
                  </p>
                </div>
              </div>

              {/* Ministry Badge */}
              {path.forMinistry && (
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {language === 'pt' ? 'Focado em Pregação' : 'Fokadu na Pregason'}
                </div>
              )}

              {/* Action */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/learning-paths/${path.id}`);
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                {language === 'pt' ? 'Começar Percurso' : 'Kumesa Perkursu'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Selected Path Details */}
        {selectedPath && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'pt' ? 'Marcos do Percurso' : 'Marku di Perkursu'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedPath.milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{milestone.badge}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {language === 'pt' ? milestone.title.pt : milestone.title.kea}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {language === 'pt' ? milestone.description.pt : milestone.description.kea}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Award className="w-3 h-3" />
                        <span>{milestone.points} {language === 'pt' ? 'pontos' : 'pontu'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
