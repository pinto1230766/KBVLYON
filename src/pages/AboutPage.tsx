import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

// Traduções para a página Sobre
const translations = {
  pt: {
    titulo: 'Sobre Nós',
    versao: 'Versão 1.10',
    boasVindas: 'Bem-vindo ao KBVLYON, seu companheiro para aprender crioulo cabo-verdiano e apoiar o ministério.',
    missao: 'Nossa Missão',
    textoMissao: 'Oferecemos recursos acessíveis, confiáveis e culturalmente adaptados para fortalecer o aprendizado linguístico e o serviço cristão.',
    funcionalidades: 'Funcionalidades principais',
    funcionalidade1: 'Dicionário bilíngue com pesquisa inteligente',
    funcionalidade2: '18 lições práticas de crioulo focadas em pregação',
    funcionalidade3: 'Notas pessoais, cronômetro ministerial e calendário integrado',
    funcionalidade4: 'Estudos bíblicos, apresentações e partilha rápida',
    compromisso: 'Compromisso com a privacidade',
    textoCompromisso: 'O KBVLYON respeita o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia, incluindo as especificidades aplicáveis na França. Todos os dados armazenados localmente permanecem apenas no seu dispositivo. Nenhuma informação pessoal é transmitida a nossos servidores. Você pode excluir os dados a qualquer momento nas configurações.',
    suporte: 'Suporte e contacto',
    textoSuporte: 'Precisa de ajuda ou quer sugerir uma melhoria? Escreva para nós:',
    email: 'pinto12397@gmail.com',
    agradecimento: 'Obrigado por utilizar o KBVLYON. Estamos constantemente a melhorar o aplicativo para o apoiar no ministério.'
  },
  cv: {
    titulo: 'Konsernu Nos',
    versao: 'Verson 1.10',
    boasVindas: 'Bem-bindu na KBVLYON, bu kumpanhé pa aprende kriolu kabuverdianu i apoiu na ministériu.',
    missao: 'Nha Misãu',
    textoMissao: 'Nu ta ofresi resursas asesivel, fidjivel i kultura-menti adaptadu pa reforsa aprendizajen di lingua i sirvisu na pregason.',
    funcionalidades: 'Prinsipal funsionalidadi',
    funcionalidade1: 'Disionáriu bilíngu ku buska intelijenti',
    funcionalidade2: '18 lison prátiku di kriolu fokadu na pregason',
    funcionalidade3: 'Notas pessoal, kronómetru ministerial i kalendáriu integradu',
    funcionalidade4: 'Studus bíbliku, apresentason i partilha rapidu',
    compromisso: 'Kumpromisu ku privasidadi',
    textoCompromisso: 'KBVLYON ta respeita Regulamentu Jeral di Proteçon di Dados (RGPD) di Unión Européu, inkluindu regras spesífik pa França. Tudu dados ta fika lokal na bu dispozitivu. Nu ka ta manda informason pessoal pa servidor. Bu pode apaga tudu dados na konfigurasons kantu bu kri.',
    suporte: 'Apoiu i kontaktu',
    textoSuporte: 'Si bu presiza ajuda o kre manda sugéson, skrebi pa nos:',
    email: 'pinto12397@gmail.com',
    agradecimento: 'Obigadu pa uza KBVLYON. Nu sta kontinyamenti midjora aplikason pa apoiu na bu ministériu.'
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  
  // Selecionar as traduções com base no idioma atual
  const content = translations[language as keyof typeof translations] || translations.pt;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl font-bold">{content.titulo}</h1>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {content.versao}
          </span>
        </div>
        
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-4">
            {content.boasVindas}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.missao}</h2>
          <p className="mb-4">
            {content.textoMissao}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.funcionalidades}</h2>
          <div className="rounded-xl border border-border bg-card/50 p-5">
            <ul className="grid gap-3 text-sm md:grid-cols-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                <span>{content.funcionalidade1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                <span>{content.funcionalidade2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                <span>{content.funcionalidade3}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary"></span>
                <span>{content.funcionalidade4}</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="text-2xl font-semibold mb-3 text-primary">{content.compromisso}</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              {content.textoCompromisso}
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">{content.suporte}</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            {content.textoSuporte}
            <br />
            <a href={`mailto:${content.email}`} className="text-primary hover:underline">
              {content.email}
            </a>
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            {content.agradecimento}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
