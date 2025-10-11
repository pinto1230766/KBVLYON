 import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MessageCircle, Book, BookOpen, StickyNote, Settings, BookMarked } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const HomePage = () => {
  const { t } = useLanguage();

  const currentDate = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const cards = [
    {
      to: '/preaching',
      icon: MessageCircle,
      title: t('paginaInicial.recurso1Titulo') || 'Apresentações para Pregação',
      description: t('paginaInicial.recurso1Desc') || '10 apresentações baseadas em publicações da JW.org...'
    },
    {
      to: '/grammar-dictionary',
      icon: Book,
      title: t('paginaInicial.recurso2Titulo') || 'Gramática & Dicionário',
      description: t('paginaInicial.recurso2Desc') || 'Aprenda a estrutura básica da língua e amplie seu...'
    },
    {
      to: '/bible-studies',
      icon: BookOpen,
      title: t('navegacao.estudosBiblicos') || 'Estudos Bíblicos',
      description: t('paginaInicial.recurso3Desc') || 'Recursos e guias para seus estudos bíblicos pessoais.'
    },
    {
      to: '/notes',
      icon: StickyNote,
      title: t('navegacao.notas') || 'Notas',
      description: t('paginaInicial.recurso4Desc') || 'Acompanhe suas notas e atividades de pregação'
    },
    {
      to: '/lessons',
      icon: BookMarked,
      title: t('navegacao.licoes') || 'Lições de Crioulo',
      description: t('paginaInicial.recurso5Desc') || 'Aprenda crioulo para pregar de porta em porta'
    },
    {
      to: '/settings',
      icon: Settings,
      title: t('navegacao.configuracoes') || 'Configurações',
      description: t('paginaInicial.recurso6Desc') || 'Configure notificações e preferências'
    }
  ];

  const gallery = [
    { src: '/images/lessons/page 1.1.jpg', alt: 'Cabo Verde - Vista 1' },
    { src: '/images/lessons/page 1.2.jpg', alt: 'Cabo Verde - Vista 2' },
    { src: '/images/lessons/page 1.3.jpg', alt: 'Cabo Verde - Vista 3' },
    { src: '/images/lessons/page 1.4.jpg', alt: 'Cabo Verde - Vista 4' }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="px-4 py-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('paginaInicial.titulo') || 'Aprenda Cabo-verdiano para Pregação'}
          </h1>

          <div className="mx-auto mb-6 w-full max-w-xl rounded-2xl border border-border bg-card/90 p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookMarked className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground">
                  {t('paginaInicial.textoDia') || 'Texto do Dia'}
                </h2>
              </div>
              <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                {currentDate}
              </span>
            </div>
            <p className="mb-2 text-xs font-semibold text-primary">Salmo 83:18</p>
            <p className="text-sm leading-relaxed text-foreground">
              "Para que as pessoas saibam que tu, cujo nome é Jeová, só tu és o Altíssimo sobre toda a terra."
            </p>
          </div>

          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            {t('paginaInicial.descricao') || 'Ferramentas, lições e recursos essenciais para servir no ministério em Cabo Verde.'}
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 pb-6">
        <div className="container mx-auto">
          <h2 className="text-xl font-semibold text-center text-foreground mb-5">
            {t('paginaInicial.tituloRecursos') || 'Recursos Disponíveis'}
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group flex h-full flex-col items-center rounded-xl border border-border bg-card/80 p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {card.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Cabo Verde</h2>
            <span className="text-xs text-muted-foreground">
              {t('paginaInicial.galeriaLegenda') || 'Momentos do ministério'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.src} className="overflow-hidden rounded-lg border border-border">
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  className="h-24 w-full object-cover transition-transform duration-300 hover:scale-110"
                  width={240}
                  height={135}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
