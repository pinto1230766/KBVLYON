import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('settings.title')}</h1>
      

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('settings.appInfo')}</h2>
        <p>{t('settings.version')}: 1.10.1</p>
        <p>{t('settings.developedBy')}: Pinto Francisco</p>
        <p>© 2024 Pinto Francisco</p>
      </section>
    </div>
  );
};

export default SettingsPage;
