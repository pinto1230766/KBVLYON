import { useState, useEffect, useCallback } from 'react';

// Interface pour les options de notification
interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
  requireInteraction?: boolean;
  silent?: boolean;
  data?: unknown;
}

// Interface pour l'état des notifications
interface NotificationState {
  isSupported: boolean;
  permission: NotificationPermission;
  isGranted: boolean;
  isDenied: boolean;
  isDefault: boolean;
}

// Hook personnalisé pour la gestion des notifications
export function useNotifications() {
  const [state, setState] = useState<NotificationState>({
    isSupported: false,
    permission: 'default',
    isGranted: false,
    isDenied: false,
    isDefault: true,
  });

  // Vérifier le support des notifications
  useEffect(() => {
    const isSupported = 'Notification' in window;
    setState(prev => ({
      ...prev,
      isSupported,
      permission: isSupported ? Notification.permission : 'denied',
    }));
  }, []);

  // Mettre à jour l'état en fonction de la permission
  useEffect(() => {
    setState(prev => ({
      ...prev,
      isGranted: prev.permission === 'granted',
      isDenied: prev.permission === 'denied',
      isDefault: prev.permission === 'default',
    }));
  }, [state.permission]);

  // Demander la permission de notification
  const requestPermission = useCallback(async (): Promise<NotificationPermission> => {
    if (!state.isSupported) {
      throw new Error('Les notifications ne sont pas supportées sur ce navigateur');
    }

    try {
      const permission = await Notification.requestPermission();
      setState(prev => ({ ...prev, permission }));
      return permission;
    } catch (error) {
      console.error('Erreur lors de la demande de permission:', error);
      throw error;
    }
  }, [state.isSupported]);

  // Afficher une notification
  const showNotification = useCallback((options: NotificationOptions): Notification | null => {
    if (!state.isSupported || !state.isGranted) {
      console.warn('Les notifications ne sont pas disponibles ou la permission n\'est pas accordée');
      return null;
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon,
        badge: options.badge,
        tag: options.tag,
        requireInteraction: options.requireInteraction,
        silent: options.silent,
        data: options.data,
      });

      // Gestionnaire d'événement pour le clic sur la notification
      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Fermeture automatique après 5 secondes si pas d'interaction requise
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 5000);
      }

      return notification;
    } catch (error) {
      console.error('Erreur lors de l\'affichage de la notification:', error);
      return null;
    }
  }, [state.isSupported, state.isGranted]);

  // Fermer toutes les notifications
  const closeAllNotifications = useCallback(() => {
    if (!state.isSupported) return;

    // Note: Il n'y a pas de méthode native pour fermer toutes les notifications
    // Cette fonction peut être étendue avec une liste des notifications actives
    console.log('Fermeture de toutes les notifications demandée');
  }, [state.isSupported]);

  // Vérifier si les notifications sont activées dans les paramètres système
  const checkSystemSettings = useCallback(async (): Promise<boolean> => {
    if (!state.isSupported) return false;

    // Cette vérification est limitée car les navigateurs ne permettent pas
    // de vérifier directement les paramètres système
    return state.isGranted;
  }, [state.isSupported, state.isGranted]);

  return {
    // État
    ...state,

    // Actions
    requestPermission,
    showNotification,
    closeAllNotifications,
    checkSystemSettings,
  };
}