import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

// Traductions pour la page À propos
const translations = {
  pt: {
    title: 'Sobre Nós',
    welcome: 'Bem-vindo ao nosso aplicativo de aprendizagem de idiomas e estudos bíblicos.',
    mission: 'Nossa Missão',
    missionText: 'Nosso objetivo é fornecer ferramentas de aprendizado de qualidade para facilitar o estudo de idiomas e o aprofundamento do conhecimento bíblico.',
    features: 'Funcionalidades',
    feature1: 'Dicionário interativo com tradução',
    feature2: 'Aulas de gramática detalhadas',
    feature3: 'Recursos para pregação',
    feature4: 'Estudos bíblicos completos',
    contact: 'Contato',
    contactText: 'Para quaisquer dúvidas ou sugestões, não hesite em nos contatar no seguinte endereço:',
    email: 'contato@exemplo.com'
  },
  cv: {
    title: 'Sobre Nós',
    welcome: 'Bem-vindo na nos aplikativu di apréndizajen di línguas i studu bíbliku.',
    mission: 'Nha Misãu',
    missionText: 'Nos obijetivu é fornesi ferramentas di aprendizajen di kualidadi pa fasilitá studu di línguas i aprofundamentu di konximentu bíbliku.',
    features: 'Funksionalidadis',
    feature1: 'Disionáriu interativu ku traduson',
    feature2: 'Lison di gramátika detalhadu',
    feature3: 'Resursa pa pregaçon',
    feature4: 'Studu bíbliku kompletu',
    contact: 'Kontatu',
    contactText: 'Pa kualker pregunta ka sujeston, ka ten vergonha di kontata-nos na direkson siguinti:',
    email: 'kontatu@ezemplu.cv'
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  
  // Sélectionner les traductions en fonction de la langue actuelle
  const content = translations[language as keyof typeof translations] || translations.pt;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
        
        <div className="prose dark:prose-invert">
          <p className="text-lg mb-4">
            {content.welcome}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.mission}</h2>
          <p className="mb-4">
            {content.missionText}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.features}</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>{content.feature1}</li>
            <li>{content.feature2}</li>
            <li>{content.feature3}</li>
            <li>{content.feature4}</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{content.contact}</h2>
          <p>
            {content.contactText}
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
