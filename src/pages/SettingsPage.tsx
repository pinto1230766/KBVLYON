import { useLanguage } from '../hooks/useLanguage';
import { NotificationSettings } from '../components/NotificationSettings';
import { LanguageSwitcher } from '../components/language-switcher';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Bell, Shield, Database, Palette, Smartphone } from 'lucide-react';

const SettingsPage = () => {
  const { t, language } = useLanguage();

  const settingsSections = [
    {
      icon: Globe,
      title: t('settings.changeLanguage'),
      description: 'Alterne entre português e crioulo capverdiano',
      component: <LanguageSwitcher />
    },
    {
      icon: Bell,
      title: t('settings.notifications'),
      description: 'Gerencie notificações da aplicação',
      component: <NotificationSettings />
    },
    {
      icon: Palette,
      title: t('settings.theme'),
      description: 'Escolha entre tema claro, escuro ou automático',
      component: (
        <div className="flex gap-2">
          <Badge variant="outline">Claro</Badge>
          <Badge variant="outline">Escuro</Badge>
          <Badge variant="outline">Sistema</Badge>
        </div>
      )
    },
    {
      icon: Shield,
      title: 'Permissões',
      description: 'Controle de acesso à câmera, microfone e localização',
      component: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Câmera</span>
            <Badge variant="secondary">Permitido</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Microfone</span>
            <Badge variant="secondary">Permitido</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Localização</span>
            <Badge variant="secondary">Negado</Badge>
          </div>
        </div>
      )
    },
    {
      icon: Database,
      title: 'Dados',
      description: 'Gerencie seus dados pessoais e backups',
      component: (
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Exportar</Button>
          <Button variant="outline" size="sm">Importar</Button>
          <Button variant="destructive" size="sm">Limpar Tudo</Button>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: 'Aplicação',
      description: 'Informações sobre a versão e desenvolvedor',
      component: (
        <div className="space-y-1 text-sm">
          <p><strong>{t('settings.version')}:</strong> 1.10.1</p>
          <p><strong>{t('settings.developedBy')}:</strong> Pinto Francisco</p>
          <p><strong>Idioma atual:</strong> {language === 'pt' ? '🇵🇹 Português' : '🇨🇻 Crioulo'}</p>
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
          Configure sua experiência no KBVLYON
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
