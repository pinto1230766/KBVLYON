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
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    const handleLoad = () => {
      setIsLoading(false);
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
  }, [src]);

  // Générer les chemins WebP avec optimisation mobile
  const generateWebPSrcSet = (originalSrc: string) => {
    const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    // Tailles optimisées pour mobile Samsung
    const sizes = [320, 480, 640, 768, 1024, 1280];
    return sizes.map(size => `${encodeURI(`${basePath}-${size}.webp`)} ${size}w`).join(', ');
  };


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

  // Déterminer les classes
  const imageClasses = clsx(
    'optimized-image',
    className,
    {
      'optimized-image-loaded': !isLoading
    }
  );

  return (
    <picture className="optimized-image-container">
      {/* WebP sources pour différents écrans */}
      <source
        media="(max-width: 480px)"
        srcSet={generateWebPSrcSet(src).split(', ').filter(s => s.includes('320w') || s.includes('480w')).join(', ')}
        type="image/webp"
      />
      <source
        media="(max-width: 768px)"
        srcSet={generateWebPSrcSet(src).split(', ').filter(s => s.includes('640w') || s.includes('768w')).join(', ')}
        type="image/webp"
      />
      <source
        media="(min-width: 769px)"
        srcSet={generateWebPSrcSet(src).split(', ').filter(s => s.includes('1024w') || s.includes('1280w')).join(', ')}
        type="image/webp"
      />
      {/* Fallback pour navigateurs sans WebP */}
      <img
        src={src}
        alt={alt}
        className={imageClasses}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        // @ts-expect-error fetchpriority is a valid HTML attribute but not in React types yet
        fetchpriority={loading === 'eager' ? 'high' : 'auto'}
        onError={(e) => {
          // En cas d'erreur de chargement, afficher une image de remplacement
          e.currentTarget.onerror = null;
          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OSI+SW1hZ2VtIG7Dum4gZGlzcG9uw612ZWw8L3RleHQ+PC9zdmc+';
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
