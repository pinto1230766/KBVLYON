 import { Link } from 'react-router-dom';
 import { useEffect, useState } from 'react';
 import { useLanguage } from '../hooks/useLanguage';
 import { MessageCircle, Book, BookOpen, StickyNote, Settings, BookMarked } from 'lucide-react';
 import OptimizedImage from '../components/OptimizedImage';

const HomePage = () => {
  const { t } = useLanguage();
  const [dailyText, setDailyText] = useState({ psalm: "Carregando...", verse: "Aguarde..." });

  const currentDate = new Date().toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Function to get daily text from JW.ORG API
  const fetchDailyText = async () => {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      const response = await fetch(`https://www.jw.org/finder?srcid=jwlshare&wtlocale=KBV&prefer=lang&alias=daily-text&date=${today}&return=json`);

      if (!response.ok) {
        throw new Error('Failed to fetch daily text');
      }

      const data = await response.json();

      // Extract the daily text from JW.ORG response
      if (data && data.items && data.items.length > 0) {
        const item = data.items[0];
        setDailyText({
          psalm: item.title || "Texto Diário",
          verse: item.content || "Texto não disponível"
        });
        return;
      }
    } catch (error) {
      console.error('Error fetching daily text:', error);
    }

    // Fallback texts if API fails
    const fallbackTexts = [
      { psalm: "Salmo 83:18", verse: "\"Para que as pessoas saibam que tu, cujo nome é Jeová, só tu és o Altíssimo sobre toda a terra.\"" },
      { psalm: "Salmo 100:3", verse: "\"Sabei que Jeová é Deus; foi ele que nos fez, e somos dele.\"" },
      { psalm: "Salmo 119:105", verse: "\"A tua palavra é lâmpada para os meus pés e luz para o meu caminho.\"" }
    ];

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDailyText(fallbackTexts[dayOfYear % fallbackTexts.length]);
  };

  useEffect(() => {
    fetchDailyText();
  }, []);

  const cards = [
    {
      to: '/preaching',
      icon: MessageCircle,
      title: t('navigation.preaching'),
      description: t('home.features.dictionary')
    },
    {
      to: '/grammar-dictionary',
      icon: Book,
      title: t('navigation.grammar'),
      description: t('home.features.lessons')
    },
    {
      to: '/bible-studies',
      icon: BookOpen,
      title: t('navigation.bibleStudies'),
      description: t('home.features.bibleStudies')
    },
    {
      to: '/notes',
      icon: StickyNote,
      title: t('navigation.notes'),
      description: t('home.features.notes')
    },
    {
      to: '/lessons',
      icon: BookMarked,
      title: t('navigation.lessons'),
      description: t('home.subtitle')
    },
    {
      to: '/settings',
      icon: Settings,
      title: t('navigation.settings'),
      description: 'Configurações da aplicação'
    },
  ];

  const gallery = [
    { src: '/images/lessons/page 1.1.jpg', alt: 'Cabo Verde - Vista 1' },
    { src: '/images/lessons/page 1.2.jpg', alt: 'Cabo Verde - Vista 2' },
    { src: '/images/lessons/page 1.3.jpg', alt: 'Cabo Verde - Vista 3' },
    { src: '/images/lessons/page 1.4.jpg', alt: 'Cabo Verde - Vista 4' }
  ];

  return (
    <div className="bg-background page-container">
      {/* Hero Section */}
      <section className="px-4 py-2 md:px-3 md:py-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto flex flex-col items-center gap-1 md:gap-3 text-center md:max-w-4xl">
          <div className="w-full space-y-3">
            <h1 className="text-xl md:text-3xl font-bold text-foreground">
              {t('home.title') || 'Aprenda Cabo-verdiano para Pregação'}
            </h1>

            <div className="mx-auto w-full max-w-xl rounded-xl border border-border bg-card/90 p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">
                    {t('home.textOfDay') || 'Texto do Dia'}
                  </h2>
                </div>
                <span className="rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
                  {currentDate}
                </span>
              </div>
              <p className="mb-1 text-xs font-semibold text-primary">{dailyText.psalm}</p>
              <p className="text-xs leading-relaxed text-foreground">
                {dailyText.verse}
              </p>
            </div>

            <p className="mx-auto md:mx-0 max-w-3xl text-xs text-muted-foreground">
              {t('home.welcome') || 'Ferramentas, lições e recursos essenciais para servir no ministério em Cabo Verde.'}
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 pb-2 md:px-3 md:pb-4">
        <div className="container mx-auto">
          <h2 className="text-lg font-semibold text-center text-foreground mb-2 md:mb-3">
            {t('home.resources') || 'Recursos Disponíveis'}
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group flex h-full flex-col items-center rounded-lg border border-border bg-card/80 dark:bg-gray-800/90 p-2 md:p-3 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg dark:hover:bg-gray-700/90"
                >
                  <div className="mb-2 flex h-8 md:h-10 w-8 md:w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <Icon className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground dark:text-gray-300">
                    {card.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-4 md:pb-10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-2 md:mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">{t('home.galleryTitle')}</h2>
            <span className="text-xs text-muted-foreground dark:text-gray-300">
              {t('home.galleryCaption')}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2 md:gap-3 sm:grid-cols-2">
            {gallery.map((item, index) => (
              <div key={`${item.src}-${index}`} className="overflow-hidden rounded-lg border border-border">
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  className="h-24 md:h-36 w-full object-cover"
                  width={320}
                  height={180}
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
