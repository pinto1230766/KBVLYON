import { useLanguage } from '../hooks/useLanguage';

const SettingsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('navegacao.configuracoes')}</h1>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('configuracoes.infoApp')}</h2>
        <p>{t('configuracoes.versao')}: 1.10.1</p>
        <p>{t('configuracoes.desenvolvidoPor')}: Pinto Francisco</p>
        <p>© 2024 Pinto Francisco</p>
      </section>
    </div>
  );
};

export default SettingsPage;
