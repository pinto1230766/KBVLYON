import { useLanguage } from '../hooks/useLanguage';
import { NotificationSettings } from '../components/NotificationSettings';
import { LanguageSwitcher } from '../components/language-switcher';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Globe, Bell, Shield, Database, Palette, Smartphone } from 'lucide-react';

const SettingsPage = () => {
  const { t, language } = useLanguage();

  const settingsSections = [
    {
      icon: Globe,
      title: t('settings.changeLanguage'),
      description: t('settings.languageDescription'),
      component: <LanguageSwitcher />
    },
    {
      icon: Bell,
      title: t('settings.notifications'),
      description: t('settings.notificationsDescription'),
      component: <NotificationSettings />
    },
    {
      icon: Palette,
      title: t('settings.theme'),
      description: t('settings.themeDescription'),
      component: (
        <div className="flex gap-2">
          <Badge variant="outline">{t('settings.light')}</Badge>
          <Badge variant="outline">{t('settings.dark')}</Badge>
          <Badge variant="outline">{t('settings.system')}</Badge>
        </div>
      )
    },
    {
      icon: Shield,
      title: t('settings.permissions'),
      description: t('settings.permissionsDescription'),
      component: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('settings.camera')}</span>
            <Badge variant="secondary">{t('settings.allowed')}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('settings.microphone')}</span>
            <Badge variant="secondary">{t('settings.allowed')}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('settings.location')}</span>
            <Badge variant="secondary">{t('settings.denied')}</Badge>
          </div>
        </div>
      )
    },
    {
      icon: Database,
      title: t('settings.data'),
      description: t('settings.dataDescription'),
      component: (
        <div className="flex gap-2">
          <Button variant="outline" size="sm">{t('settings.export')}</Button>
          <Button variant="outline" size="sm">{t('settings.import')}</Button>
          <Button variant="destructive" size="sm">{t('settings.reset')}</Button>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: t('settings.appInfo'),
      description: t('settings.appInfoDescription'),
      component: (
        <div className="space-y-1 text-sm">
          <p><strong>{t('settings.version')}:</strong> 1.10.1</p>
          <p><strong>{t('settings.developedBy')}:</strong> Pinto Francisco</p>
          <p><strong>{t('settings.currentLanguage')}:</strong> {language === 'pt' ? '🇵🇹 Português' : '🇨🇻 Crioulo'}</p>
          <p className="text-xs text-muted-foreground">© 2024 Pinto Francisco</p>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{t('settings.title')}</h1>
        <p className="text-muted-foreground mt-2">
          {t('settings.subtitle')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {section.title}
                </CardTitle>
                <CardDescription>
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {section.component}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPage;
