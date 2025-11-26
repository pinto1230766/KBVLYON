import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour précharger des images
 * Utile pour les images critiques qui doivent être chargées immédiatement
 */
export function useImagePreload(imageUrls: string[]) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(url));
      };
    });
  }, [imageUrls]);

  return loadedImages;
}
