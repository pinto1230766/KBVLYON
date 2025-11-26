import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholderSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Composant d'image avec lazy loading et placeholder
 * Améliore les performances en ne chargeant les images que lorsqu'elles sont visibles
 */
export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  onLoad,
  onError
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Vérifier si IntersectionObserver est supporté
    if (!('IntersectionObserver' in window)) {
      // Fallback: charger l'image immédiatement
      setImageSrc(src);
      return;
    }

    const currentImg = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // L'image est visible, on la charge
            setImageSrc(src);
            if (currentImg) {
              observer.unobserve(currentImg);
            }
          }
        });
      },
      {
        // Commencer à charger l'image 50px avant qu'elle soit visible
        rootMargin: '50px',
        threshold: 0.01
      }
    );

    if (currentImg) {
      observer.observe(currentImg);
    }

    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  const handleError = () => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`${className} ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ${
        hasError ? 'bg-muted' : ''
      }`}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
