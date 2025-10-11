import { useState, useEffect, useCallback } from 'react';
import { favoritesService } from '@/services/favoritesService';

export function useCloudFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les favoris initiaux
    const initialFavorites = favoritesService.getFavorites();
    setFavorites(initialFavorites);
    setLoading(false);

    // Démarrer la synchronisation en temps réel
    favoritesService.startRealtimeSync((updatedFavorites) => {
      setFavorites(updatedFavorites);
    });

    // Nettoyer à la fin
    return () => {
      favoritesService.stopRealtimeSync();
    };
  }, []);

  const addFavorite = useCallback(async (entryId: string) => {
    await favoritesService.addFavorite(entryId);
    // La mise à jour se fera via le callback de synchronisation
  }, []);

  const removeFavorite = useCallback(async (entryId: string) => {
    await favoritesService.removeFavorite(entryId);
    // La mise à jour se fera via le callback de synchronisation
  }, []);

  const toggleFavorite = useCallback(async (entryId: string) => {
    if (favorites.includes(entryId)) {
      await removeFavorite(entryId);
    } else {
      await addFavorite(entryId);
    }
  }, [favorites, addFavorite, removeFavorite]);

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite: (entryId: string) => favorites.includes(entryId)
  };
}