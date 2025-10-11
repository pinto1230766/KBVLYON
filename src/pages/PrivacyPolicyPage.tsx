import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: 'Política de Privacidade',
      intro: 'A KBVLYON respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política explica como recolhemos, utilizamos e protegemos as suas informações.',
      dataCollection: 'Recolha de Dados',
      dataCollectionText: 'A KBVLYON recolhe apenas dados necessários para o funcionamento da aplicação. Todos os dados são armazenados localmente no seu dispositivo e nunca são transmitidos para os nossos servidores.',
      dataUsage: 'Utilização dos Dados',
      dataUsageText: 'Os dados recolhidos são utilizados exclusivamente para melhorar a sua experiência na aplicação, como guardar as suas preferências, progresso de aprendizagem e favoritos.',
      dataRights: 'Seus Direitos',
      dataRightsText: 'Você tem o direito de aceder, corrigir ou eliminar os seus dados pessoais a qualquer momento através das configurações da aplicação.',
      contact: 'Contacto',
      contactText: 'Para questões sobre privacidade, contacte-nos através do email:',
      lastUpdated: 'Última atualização: Outubro 2024'
    },
    cv: {
      title: 'Polítika di Privasidadi',
      intro: 'KBVLYON respeita bu privasidadi i ta komprometidu ku proteje bus dadus pesoal. Es politíka splika modi ki nu koleta, uza i proteje bus informasons.',
      dataCollection: 'Koleta di Dadus',
      dataCollectionText: 'KBVLYON koleta só dadus nesesáriu pa funsionamentu di aplikason. Tudu dadus ta fika armazenadu lokal na bu dispozitivu i nunka ta ser mandadu pa nos servidor.',
      dataUsage: 'Uza di Dadus',
      dataUsageText: 'Dadus kletadu ta ser uzadu só pa midjora bu esperiénsia na aplikason, komu salva bus preferénsia, progresu di aprendizagem i favoritus.',
      dataRights: 'Bus Dretus',
      dataRightsText: 'Bu ten dretu di asesu, korrigi o apaga bus dadus pesoal kantu bu kri atrabes di konfigurasons di aplikason.',
      contact: 'Kontaktu',
      contactText: 'Pa kuestons sobri privasidadi, kontaktu-nos atrabes di email:',
      lastUpdated: 'Últimu atualizason: Otubru 2024'
    }
  };

  const currentContent = content[language as keyof typeof content] || content.pt;

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        {currentContent.title}
      </h1>

      <div className="prose dark:prose-invert max-w-4xl mx-auto">
        <div className="bg-primary/5 p-6 rounded-xl mb-8">
          <p className="text-lg leading-relaxed">
            {currentContent.intro}
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-primary">{currentContent.dataCollection}</h2>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="leading-relaxed">
                {currentContent.dataCollectionText}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-primary">{currentContent.dataUsage}</h2>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="leading-relaxed">
                {currentContent.dataUsageText}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-primary">{currentContent.dataRights}</h2>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="leading-relaxed">
                {currentContent.dataRightsText}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-primary">{currentContent.contact}</h2>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="leading-relaxed mb-3">
                {currentContent.contactText}
              </p>
              <a href="mailto:pinto12397@gmail.com" className="text-primary hover:underline font-medium">
                pinto12397@gmail.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 p-4 bg-muted/30 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            {currentContent.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
