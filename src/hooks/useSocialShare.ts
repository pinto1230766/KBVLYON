import { useState, useCallback } from 'react';

// Interface pour les données de partage
interface ShareData {
  title?: string;
  text?: string;
  url?: string;
  files?: File[];
}

// Interface pour les options de partage
interface ShareOptions {
  fallbackToClipboard?: boolean;
  fallbackMessage?: string;
}

// Interface pour l'état du partage social
interface SocialShareState {
  isSupported: boolean;
  isSharing: boolean;
  lastSharedData: ShareData | null;
  error: string | null;
}

// Interface pour les méthodes de partage de secours
interface FallbackShareMethods {
  copyToClipboard: (text: string) => Promise<void>;
  shareViaEmail: (data: ShareData) => void;
  shareViaWhatsApp: (data: ShareData) => void;
  shareViaTwitter: (data: ShareData) => void;
  shareViaFacebook: (data: ShareData) => void;
}

// Hook personnalisé pour le partage social
export function useSocialShare(options: ShareOptions = {}) {
  const {
    fallbackToClipboard = true,
    fallbackMessage = 'Lien copié dans le presse-papiers'
  } = options;

  const [state, setState] = useState<SocialShareState>({
    isSupported: false,
    isSharing: false,
    lastSharedData: null,
    error: null,
  });

  // Vérifier le support du partage natif
  useState(() => {
    const isSupported = 'share' in navigator;
    setState(prev => ({ ...prev, isSupported }));
  });

  // Partager en utilisant l'API Web Share
  const share = useCallback(async (data: ShareData): Promise<boolean> => {
    setState(prev => ({ ...prev, isSharing: true, error: null }));

    try {
      if (state.isSupported) {
        await navigator.share(data);
        setState(prev => ({
          ...prev,
          isSharing: false,
          lastSharedData: data
        }));
        return true;
      } else {
        // Utiliser les méthodes de secours
        const shareText = [data.title, data.text, data.url].filter(Boolean).join(' - ');

        if (fallbackToClipboard && shareText) {
          try {
            await navigator.clipboard.writeText(shareText);
            console.log(fallbackMessage);
            setState(prev => ({
              ...prev,
              isSharing: false,
              lastSharedData: data
            }));
            return true;
          } catch (clipboardError) {
            console.warn('Impossible de copier dans le presse-papiers:', clipboardError);
            throw new Error('Partage non supporté et copie dans le presse-papiers échouée');
          }
        } else {
          throw new Error('Partage natif non supporté et aucune méthode de secours disponible');
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors du partage';
      setState(prev => ({
        ...prev,
        isSharing: false,
        error: errorMessage
      }));
      throw error;
    }
  }, [state.isSupported, fallbackToClipboard, fallbackMessage]);


  // Partager via email
  const shareViaEmail = useCallback((data: ShareData) => {
    const subject = encodeURIComponent(data.title || 'Partage');
    const body = encodeURIComponent([data.text, data.url].filter(Boolean).join('\n\n'));
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  }, []);

  // Partager via WhatsApp
  const shareViaWhatsApp = useCallback((data: ShareData) => {
    const text = encodeURIComponent([data.title, data.text, data.url].filter(Boolean).join(' - '));
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  // Partager via Twitter
  const shareViaTwitter = useCallback((data: ShareData) => {
    const text = encodeURIComponent([data.title, data.text].filter(Boolean).join(' - '));
    const url = encodeURIComponent(data.url || window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, '_blank');
  }, []);

  // Partager via Facebook
  const shareViaFacebook = useCallback((data: ShareData) => {
    const url = encodeURIComponent(data.url || window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank');
  }, []);

  // Copier dans le presse-papiers
  const copyToClipboard = useCallback(async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setState(prev => ({
        ...prev,
        lastSharedData: { text }
      }));
    } catch (error) {
      throw new Error('Impossible de copier dans le presse-papiers');
    }
  }, []);

  // Vérifier si une plateforme spécifique est disponible
  const isPlatformAvailable = useCallback((platform: string): boolean => {
    switch (platform.toLowerCase()) {
      case 'email':
        return true; // Toujours disponible
      case 'whatsapp':
        return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      case 'twitter':
      case 'facebook':
        return true; // Web disponible
      case 'clipboard':
        return 'clipboard' in navigator;
      default:
        return false;
    }
  }, []);

  // Obtenir les méthodes de secours disponibles
  const getAvailableFallbacks = useCallback((): string[] => {
    const platforms = ['email', 'whatsapp', 'twitter', 'facebook'];
    return platforms.filter(platform => isPlatformAvailable(platform));
  }, [isPlatformAvailable]);

  const fallbackMethods: FallbackShareMethods = {
    copyToClipboard,
    shareViaEmail,
    shareViaWhatsApp,
    shareViaTwitter,
    shareViaFacebook,
  };

  return {
    // État
    ...state,

    // Actions principales
    share,

    // Méthodes de secours
    ...fallbackMethods,

    // Utilitaires
    isPlatformAvailable,
    getAvailableFallbacks,
  };
}