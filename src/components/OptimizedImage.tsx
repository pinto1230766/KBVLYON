import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ImageContainer from './ImageContainer';
import clsx from 'clsx';
import './ImageContainer.css'; // Import des styles partagés

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48L3N2Zz4=',
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Si l'image est déjà chargée, ne rien faire
    if (!src || imageSrc === src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setIsLoading(false);
      setImageSrc(src);
    };

    const handleError = () => {
      console.error(`Erreur de chargement de l'image: ${src}`);
      setIsLoading(false);
    };

    img.src = src;
    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, imageSrc]);

  // Si l'image est en cours de chargement, afficher un placeholder
  if (isLoading) {
    return (
      <ImageContainer width={width} height={height} className={className}>
        <div className="image-placeholder">
          <div className="image-loading"></div>
          <span className="image-loading-text">{t('loading')}</span>
        </div>
      </ImageContainer>
    );
  }

  // Déterminer les classes en fonction de l'état de chargement
  const imageClasses = clsx(
    'optimized-image',
    className,
    {
      'optimized-image-loading': isLoading,
      'optimized-image-loaded': !isLoading
    }
  );

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={imageClasses}
      width={width}
      height={height}
      loading={loading}
      onError={(e) => {
        // En cas d'erreur de chargement, afficher une image de remplacement
        e.currentTarget.onerror = null;
        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OSI+SW1hZ2Ugbm90IGZvdW5kPC90ZXh0Pjwvc3ZnPg=';
      }}
    />
  );
};

export default OptimizedImage;
