import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

// Traduções para a página Sobre
const translations = {
  pt: {
    titulo: 'Sobre Nós',
    boasVindas: 'Bem-vindo ao nosso aplicativo de aprendizagem de idiomas e estudos bíblicos.',
    missao: 'Nossa Missão',
    textoMissao: 'Nosso objetivo é fornecer ferramentas de aprendizado de qualidade para facilitar o estudo de idiomas e o aprofundamento do conhecimento bíblico.',
    funcionalidades: 'Funcionalidades',
    funcionalidade1: 'Dicionário interativo com tradução',
    funcionalidade2: 'Aulas de gramática detalhadas',
    funcionalidade3: 'Recursos para pregação',
    funcionalidade4: 'Estudos bíblicos completos',
    contato: 'Contato',
    textoContato: 'Para quaisquer dúvidas ou sugestões, não hesite em nos contatar no seguinte endereço:',
    email: 'pinto12397@gmail.com'
  },
  cv: {
    titulo: 'Sobre Nós', // Mantido "Sobre Nós" para CV, pode ser ajustado se necessário para algo como "Konsernu Nos"
    boasVindas: 'Bem-vindo na nos aplikativu di apréndizajen di línguas i studu bíbliku.',
    missao: 'Nha Misãu',
    textoMissao: 'Nos obijetivu é fornesi ferramentas di aprendizajen di kualidadi pa fasilitá studu di línguas i aprofundamentu di konximentu bíbliku.',
    funcionalidades: 'Funksionalidadis',
    funcionalidade1: 'Disionáriu interativu ku traduson',
    funcionalidade2: 'Lison di gramátika detalhadu',
    funcionalidade3: 'Resursa pa pregaçon',
    funcionalidade4: 'Studu bíbliku kompletu',
    contato: 'Kontatu',
    textoContato: 'Pa kualker pregunta ka sujeston, ka ten vergonha di kontata-nos na direkson siguinti:',
    email: 'pinto12397@gmail.com'
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
        <h1 className="text-3xl font-bold mb-6">{content.titulo}</h1>
        
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-4">
            {content.boasVindas}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.missao}</h2>
          <p className="mb-4">
            {content.textoMissao}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.funcionalidades}</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{content.funcionalidade1}</li>
            <li>{content.funcionalidade2}</li>
            <li>{content.funcionalidade3}</li>
            <li>{content.funcionalidade4}</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.contato}</h2>
          <p>
            {content.textoContato}
            <br />
            <a href={`mailto:${content.email}`} className="text-primary hover:underline">
              {content.email}
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
