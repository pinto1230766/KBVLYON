 import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MessageCircle, Book, BookOpen, StickyNote, Settings, BookMarked } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

type DailyTextEntry = {
  reference: string;
  content: string;
};

const fallbackDailyTexts: Record<'pt' | 'kea', DailyTextEntry[]> = {
  pt: [
    { reference: 'Salmo 83:18', content: 'Para que as pessoas saibam que tu, cujo nome é Jeová, só tu és o Altíssimo sobre toda a terra.' },
    { reference: 'Salmo 100:3', content: 'Sabei que Jeová é Deus; foi ele que nos fez, e somos dele.' },
    { reference: 'Salmo 119:105', content: 'A tua palavra é lâmpada para os meus pés e luz para o meu caminho.' },
    { reference: 'Provérbios 3:5, 6', content: 'Confia em Jeová de todo o teu coração e não te apoies no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.' },
    { reference: 'Isaías 41:10', content: 'Não temas, pois eu estou contigo; não te assustes, pois eu sou o teu Deus. Eu te fortaleço e te ajudo; eu te sustento com a minha mão direita vitoriosa.' },
    { reference: 'Filipenses 4:13', content: 'Tudo posso naquele que me fortalece.' },
    { reference: 'Salmo 46:1', content: 'Deus é o nosso refúgio e a nossa força, auxílio sempre presente nas tribulações.' }
  ],
  kea: [
    { reference: 'Salmu 83:18', content: 'Pa ki tudu povu sabê ki bo, ku nomi Jeová, só bo é Altísimu riba tudu térra.' },
    { reference: 'Salmu 100:3', content: 'Budzê ki Jeová é Deus; foi el ki fize-nu i nu perte-nha.' },
    { reference: 'Salmu 119:105', content: 'Palavra di Jeová é lampa pa nha pé i lus pa nha kaminhu.' },
    { reference: 'Provérbius 3:5, 6', content: 'Konfia na Jeová di tudu korason i ka konta na prôpi entendimento. Rekonoxe-l na tudu bu kaminhu, i el ta dreta bu trilhas.' },
    { reference: 'Isaías 41:10', content: 'Ka ten medo, pamodi N sta ku bu; ka fika aflitu, pamodi N é bu Deus. N ta da-força, N ta djuda-bu, N ta sustenta-bu ku nha mon diritu.' },
    { reference: 'Filipensis 4:13', content: 'N pode fazi tudu ku kel ki ta da-m forsa.' },
    { reference: 'Salmu 46:1', content: 'Deus é nos refújiu i nos fôrti, un ajudu ki simpri sta presinti na trabalisa.' }
  ]
};

const stripHtml = (value: string | undefined | null) => {
  if (!value) {
    return '';
  }
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
};

const getFallbackDailyText = (language: 'pt' | 'kea'): DailyTextEntry => {
  const entries = fallbackDailyTexts[language] ?? fallbackDailyTexts.pt;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return entries[dayOfYear % entries.length];
};

const WOL_SOURCES = {
  kea: '/api/wol/kea/wol/h/r455/lp-kbv?output=html',
  pt: '/api/wol/pt/wol/h/r5/lp-t?output=html'
} as const;

type WolLanguage = keyof typeof WOL_SOURCES;

const normalizeWhitespace = (value: string) => value.replace(/\s+/g, ' ').trim();

const extractDailyTextFromWolHtml = (html: string, wolLanguage: WolLanguage): DailyTextEntry | null => {
  if (typeof DOMParser === 'undefined') {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = Array.from(doc.querySelectorAll('h2'));
  const today = new Date();
  const day = today.getDate();
  const dayPattern = new RegExp(`\\b${day}\\s+(di|de)\\s+`, 'i');

  for (const heading of headings) {
    const headingText = normalizeWhitespace(heading.textContent || '');

    if (!dayPattern.test(headingText)) {
      continue;
    }

    const paragraphs: string[] = [];
    let pointer: Element | null = heading.nextElementSibling;

    while (pointer && pointer.tagName !== 'H2') {
      if (pointer.tagName === 'P') {
        const paragraphText = normalizeWhitespace(pointer.textContent || '');
        if (paragraphText) {
          paragraphs.push(paragraphText);
        }
      }
      pointer = pointer.nextElementSibling;
    }

    if (paragraphs.length === 0) {
      continue;
    }

    const firstParagraph = paragraphs[0];
    let verseLine = firstParagraph;
    let reference = '';

    const dashIndex = firstParagraph.lastIndexOf('—');
    if (dashIndex !== -1) {
      verseLine = normalizeWhitespace(firstParagraph.slice(0, dashIndex));
      reference = normalizeWhitespace(firstParagraph.slice(dashIndex + 1).replace(/\.$/, ''));
    }

    const contentParts = [verseLine, ...paragraphs.slice(1)]
      .map((part) => normalizeWhitespace(part))
      .filter(Boolean);

    const content = normalizeWhitespace(contentParts.join(' '));

    if (reference) {
      return { reference, content };
    }

    return { reference: headingText || wolLanguage.toUpperCase(), content };
  }

  return null;
};

const HomePage = () => {
  const { t, language } = useLanguage();
  const [dailyText, setDailyText] = useState<DailyTextEntry>(() => getFallbackDailyText(language));

  const currentDate = useMemo(
    () => new Date().toLocaleDateString(language === 'kea' ? 'pt-PT' : 'pt-PT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }),
    [language]
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadDailyText = async () => {
      setDailyText(getFallbackDailyText(language));

      const wolCandidates: WolLanguage[] = language === 'kea' ? ['kea', 'pt'] : ['pt', 'kea'];

      for (const wolLang of wolCandidates) {
        if (!isMounted || controller.signal.aborted) {
          return;
        }

        try {
          const response = await fetch(WOL_SOURCES[wolLang], {
            headers: { Accept: 'text/html,application/xhtml+xml' },
            signal: controller.signal
          });

          if (!response.ok) {
            throw new Error(`WOL responded with status ${response.status}`);
          }

          const html = await response.text();
          const parsed = extractDailyTextFromWolHtml(html, wolLang);

          if (!parsed) {
            continue;
          }

          const reference = stripHtml(parsed.reference);
          const content = stripHtml(parsed.content);

          if (reference && content && isMounted) {
            setDailyText({ reference, content });
            return;
          }
        } catch (error) {
          if ((error as DOMException)?.name === 'AbortError') {
            return;
          }

          if (wolLang === wolCandidates[wolCandidates.length - 1]) {
            console.warn('Daily text fetch failed for all WOL language candidates, using fallback.', error);
          }
        }
      }

      if (isMounted) {
        setDailyText(getFallbackDailyText(language));
      }
    };

    loadDailyText();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [language]);

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
              <p className="mb-1 text-xs font-semibold text-primary">{dailyText.reference}</p>
              <p className="text-xs leading-relaxed text-foreground">
                {dailyText.content}
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

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:gap-3 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
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
