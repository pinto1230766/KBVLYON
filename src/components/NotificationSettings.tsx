import React from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Bell, BellOff, Settings } from 'lucide-react';

interface NotificationSettingsProps {
  className?: string;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  className
}) => {
  const {
    isSupported,
    isGranted,
    isDenied,
    requestPermission,
    showNotification
  } = useNotifications();

  const handleRequestPermission = async () => {
    try {
      await requestPermission();
    } catch (error) {
      console.error('Erreur lors de la demande de permission:', error);
    }
  };

  const handleTestNotification = () => {
    showNotification({
      title: 'Test de notification',
      body: 'Ceci est une notification de test',
      icon: '/icons/icon-192.webp'
    });
  };

  const getStatusBadge = () => {
    if (!isSupported) {
      return <Badge variant="destructive">Non supporté</Badge>;
    }
    if (isGranted) {
      return <Badge variant="default" className="bg-green-500">Activé</Badge>;
    }
    if (isDenied) {
      return <Badge variant="destructive">Refusé</Badge>;
    }
    return <Badge variant="secondary">Non demandé</Badge>;
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Paramètres de notifications
        </CardTitle>
        <CardDescription>
          Gérez les permissions et les paramètres de notifications de l'application.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isGranted ? (
              <Bell className="w-4 h-4 text-green-500" />
            ) : (
              <BellOff className="w-4 h-4 text-gray-500" />
            )}
            <span className="text-sm font-medium">Statut des notifications</span>
          </div>
          {getStatusBadge()}
        </div>

        {!isSupported && (
          <p className="text-sm text-muted-foreground">
            Les notifications ne sont pas supportées sur ce navigateur.
          </p>
        )}

        {isSupported && !isGranted && (
          <Button
            onClick={handleRequestPermission}
            variant="default"
            size="sm"
          >
            Demander la permission
          </Button>
        )}

        {isGranted && (
          <div className="space-y-2">
            <Button
              onClick={handleTestNotification}
              variant="outline"
              size="sm"
            >
              Tester les notifications
            </Button>
            <p className="text-xs text-muted-foreground">
              Cliquez pour recevoir une notification de test.
            </p>
          </div>
        )}

        {isDenied && (
          <p className="text-sm text-muted-foreground">
            Les notifications ont été refusées. Vous pouvez les activer dans les paramètres de votre navigateur.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;