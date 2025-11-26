import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle, Play } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getPathById } from '@/data/learningPaths';
import { lessonsEnriched } from '@/data/lessonsEnriched';
import type { LearningPath } from '@/types/learningPath';


export default function LearningPathDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [path, setPath] = useState<LearningPath | null>(null);

  useEffect(() => {
    if (id) {
      const foundPath = getPathById(id);
      if (foundPath) {
        setPath(foundPath);
      } else {
        navigate('/learning-paths');
      }
    }
  }, [id, navigate]);

  if (!path) return null;

  const getLessonDetails = (lessonId: number) => {
    return lessonsEnriched.find(l => l.id === lessonId);
  };

  const getLevelLabel = (level: string) => {
    const labels: Record<string, string> = {
      beginner: language === 'pt' ? 'Iniciante' : 'Inisianti',
      intermediate: language === 'pt' ? 'Intermediário' : 'Intermediáriu',
      advanced: language === 'pt' ? 'Avançado' : 'Avansadu',
      expert: language === 'pt' ? 'Especialista' : 'Spesialista'
    };
    return labels[level] || level;
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      basic: language === 'pt' ? 'Básico' : 'Báziku',
      conversation: language === 'pt' ? 'Conversação' : 'Konversason',
      grammar: language === 'pt' ? 'Gramática' : 'Gramátika',
      ministry: language === 'pt' ? 'Ministério' : 'Ministériu',
      culture: language === 'pt' ? 'Cultura' : 'Kultura'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div 
        className="bg-muted py-12 px-4 border-b border-border"
        style={{ '--path-color': path.color } as React.CSSProperties}
      >
        <div className="container mx-auto max-w-4xl">
          <button 
            onClick={() => navigate('/learning-paths')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'pt' ? 'Voltar aos Percursos' : 'Volta pa Perkursus'}
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="text-6xl bg-background p-6 rounded-2xl shadow-sm border-2 border-[var(--path-color)]">
              {path.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--path-color)] text-white">
                  {path.level.toUpperCase()}
                </span>
                {path.forMinistry && (
                  <span className="flex items-center gap-1 text-xs font-medium text-primary">
                    <CheckCircle className="w-3 h-3" />
                    {language === 'pt' ? 'Ministério' : 'Ministériu'}
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === 'pt' ? path.title.pt : path.title.kea}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'pt' ? path.description.pt : path.description.kea}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{path.duration} {language === 'pt' ? 'semanas' : 'simanas'}</p>
                    <p className="text-xs text-muted-foreground">{path.estimatedHours}h {language === 'pt' ? 'total' : 'total'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{path.lessons.length} {language === 'pt' ? 'lições' : 'lisons'}</p>
                    <p className="text-xs text-muted-foreground">{path.quizzes.length} quizzes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{path.milestones.length} {language === 'pt' ? 'marcos' : 'markus'}</p>
                    <p className="text-xs text-muted-foreground">Total points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-8">
          {/* Milestones & Lessons */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">
              {language === 'pt' ? 'Seu Caminho' : 'Bu Kaminhu'}
            </h2>

            <div className="relative border-l-2 border-muted ml-4 space-y-12 pb-4">
              {path.milestones.map((milestone) => (
                <div key={milestone.id} className="relative pl-8">
                  {/* Milestone Marker */}
                  <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-background border-4 border-[var(--path-color)] flex items-center justify-center text-lg shadow-sm z-10">
                    {milestone.badge}
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {language === 'pt' ? milestone.title.pt : milestone.title.kea}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {language === 'pt' ? milestone.description.pt : milestone.description.kea}
                    </p>

                    {/* Lessons in this milestone */}
                    <div className="space-y-3">
                      {milestone.requiredLessons.map((lessonId) => {
                        const lesson = getLessonDetails(lessonId);
                        if (!lesson) return null;
                        
                        return (
                          <div 
                            key={lessonId}
                            onClick={() => navigate(`/lessons?lessonId=${lessonId}`)}
                            className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                          >
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                              {lessonId}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {language === 'pt' ? lesson.title.pt : lesson.title.cv}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {getCategoryLabel(lesson.category)} • {getLevelLabel(lesson.level)}
                              </p>
                            </div>
                            <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
