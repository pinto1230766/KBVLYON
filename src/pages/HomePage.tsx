import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MessageCircle, Book, BookOpen, StickyNote, Settings, BookMarked } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const HomePage = () => {
  const { t } = useLanguage();
  
  // Obtenir la date actuelle
  const currentDate = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  return (
    <div className="bg-background">
      {/* Hero Section avec Titre Principal */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('paginaInicial.titulo') || 'Aprenda Cabo-verdiano para Pregação'}
          </h1>
          
          {/* Texto do Dia Card */}
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {t('paginaInicial.textoDia') || 'Texto do Dia'}
                </h2>
              </div>
              <button className="text-primary hover:text-primary/80">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            
            <p className="text-primary font-medium mb-3">Salmo 83:18</p>
            
            <p className="text-foreground text-lg leading-relaxed mb-4">
              "Para que as pessoas saibam que tu, cujo nome é Jeová, só tu és o Altíssimo sobre toda a terra."
            </p>
            
            <p className="text-muted-foreground text-sm">{currentDate}</p>
          </div>
        </div>
      </section>

      {/* Recursos Disponíveis Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            {t('paginaInicial.tituloRecursos') || 'Recursos Disponíveis'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Apresentações para Pregação */}
            <Link 
              to="/preaching" 
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('paginaInicial.recurso1Titulo') || 'Apresentações para Pregação'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('paginaInicial.recurso1Desc') || '10 apresentações baseadas em publicações da JW.org...'}
                </p>
              </div>
            </Link>

            {/* Gramática & Dicionário */}
            <Link 
              to="/grammar-dictionary" 
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Book className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('paginaInicial.recurso2Titulo') || 'Gramática & Dicionário'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('paginaInicial.recurso2Desc') || 'Aprenda a estrutura básica da língua e amplie seu...'}
                </p>
              </div>
            </Link>

            {/* Estudos Bíblicos */}
            <Link 
              to="/bible-studies" 
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('navegacao.estudosBiblicos') || 'Estudos Bíblicos'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('paginaInicial.recurso3Desc') || 'Recursos e guias para seus estudos bíblicos pessoais.'}
                </p>
              </div>
            </Link>

            {/* Notas */}
            <Link 
              to="/notes" 
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <StickyNote className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('navegacao.notas') || 'Notas'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('paginaInicial.recurso4Desc') || 'Acompanhe suas notas e atividades de pregação'}
                </p>
              </div>
            </Link>

            {/* Lições de Crioulo */}
            <Link 
              to="/lessons" 
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-secondary transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BookMarked className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('navegacao.licoes') || 'Lições de Crioulo'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('paginaInicial.recurso5Desc') || 'Aprenda crioulo para pregar de porta em porta'}
                </p>
              </div>
            </Link>

            {/* Configurações */}
            <Link 
              to="/settings" 
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Settings className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('navegacao.configuracoes') || 'Configurações'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('paginaInicial.recurso6Desc') || 'Configure notificações e preferências'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cabo Verde Image Gallery */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">Cabo Verde</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
              <OptimizedImage 
                src="/images/lessons/page 1.1.jpg" 
                alt="Cabo Verde - Vista 1" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                width={400}
                height={225}
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
              <OptimizedImage 
                src="/images/lessons/page 1.2.jpg" 
                alt="Cabo Verde - Vista 2" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                width={400}
                height={225}
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
              <OptimizedImage 
                src="/images/lessons/page 1.3.jpg" 
                alt="Cabo Verde - Vista 3" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                width={400}
                height={225}
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-lg border border-border shadow-sm">
              <OptimizedImage 
                src="/images/lessons/page 1.4.jpg" 
                alt="Cabo Verde - Vista 4" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                width={400}
                height={225}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
