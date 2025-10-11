import { useState, useEffect, useCallback, useRef } from 'react';

// Interface pour la position géographique
interface CustomGeolocationPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  speed?: number;
  timestamp: number;
}

// Interface pour les options de géolocalisation
interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

// Interface pour l'état de la géolocalisation
interface GeolocationState {
  position: CustomGeolocationPosition | null;
  loading: boolean;
  error: GeolocationPositionError | null;
  isSupported: boolean;
  isWatching: boolean;
}

// Hook personnalisé pour la gestion de la géolocalisation
export function useGeolocation(options: GeolocationOptions = {}) {
  const [state, setState] = useState<GeolocationState>({
    position: null,
    loading: false,
    error: null,
    isSupported: false,
    isWatching: false,
  });

  const watchIdRef = useRef<number | null>(null);
  const optionsRef = useRef<GeolocationOptions>(options);

  // Mettre à jour les options
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  // Vérifier le support de la géolocalisation
  useEffect(() => {
    const isSupported = 'geolocation' in navigator;
    setState(prev => ({ ...prev, isSupported }));
  }, []);

  // Gestionnaire de succès
  const handleSuccess = useCallback((position: GeolocationPosition) => {
    const positionData: CustomGeolocationPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy,
      altitude: position.coords.altitude || undefined,
      altitudeAccuracy: position.coords.altitudeAccuracy || undefined,
      heading: position.coords.heading || undefined,
      speed: position.coords.speed || undefined,
      timestamp: position.timestamp,
    };

    setState(prev => ({
      ...prev,
      position: positionData,
      loading: false,
      error: null,
    }));
  }, []);

  // Gestionnaire d'erreur
  const handleError = useCallback((error: GeolocationPositionError) => {
    setState(prev => ({
      ...prev,
      loading: false,
      error,
    }));
  }, []);

  // Obtenir la position actuelle
  const getCurrentPosition = useCallback(async (): Promise<CustomGeolocationPosition> => {
    if (!state.isSupported) {
      throw new Error('La géolocalisation n\'est pas supportée sur ce navigateur');
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          handleSuccess(position);
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude || undefined,
            altitudeAccuracy: position.coords.altitudeAccuracy || undefined,
            heading: position.coords.heading || undefined,
            speed: position.coords.speed || undefined,
            timestamp: position.timestamp,
          });
        },
        (error) => {
          handleError(error);
          reject(error);
        },
        optionsRef.current
      );
    });
  }, [state.isSupported, handleSuccess, handleError]);

  // Commencer à surveiller la position
  const watchPosition = useCallback(() => {
    if (!state.isSupported) {
      throw new Error('La géolocalisation n\'est pas supportée sur ce navigateur');
    }

    if (state.isWatching) {
      console.warn('La surveillance de la position est déjà active');
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null, isWatching: true }));

    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      optionsRef.current
    );

    watchIdRef.current = watchId;
  }, [state.isSupported, state.isWatching, handleSuccess, handleError]);

  // Arrêter la surveillance de la position
  const clearWatch = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
      setState(prev => ({ ...prev, isWatching: false, loading: false }));
    }
  }, []);

  // Nettoyer au démontage du composant
  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  // Fonction utilitaire pour calculer la distance entre deux points
  const calculateDistance = useCallback((
    pos1: CustomGeolocationPosition,
    pos2: CustomGeolocationPosition
  ): number => {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (pos2.latitude - pos1.latitude) * Math.PI / 180;
    const dLon = (pos2.longitude - pos1.longitude) * Math.PI / 180;
    const a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(pos1.latitude * Math.PI / 180) * Math.cos(pos2.latitude * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance en km
  }, []);

  // Fonction utilitaire pour formater les coordonnées
  const formatCoordinates = useCallback((position: CustomGeolocationPosition): string => {
    return `${position.latitude.toFixed(6)}, ${position.longitude.toFixed(6)}`;
  }, []);

  return {
    // État
    ...state,

    // Actions
    getCurrentPosition,
    watchPosition,
    clearWatch,

    // Utilitaires
    calculateDistance,
    formatCoordinates,
  };
}