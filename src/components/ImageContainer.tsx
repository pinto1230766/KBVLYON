import React, { ReactNode } from 'react';
import clsx from 'clsx';
import './ImageContainer.css';

interface ImageContainerProps {
  width?: number;
  height?: number;
  className?: string;
  children: ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  width,
  height,
  className,
  children
}) => {
  const containerClasses = clsx(
    'image-container',
    className,
    {
      'image-container-full': !width,
      'image-container-auto': !!width,
      'image-container-height-auto': !height,
      'image-container-height-fixed': !!height,
      'image-fixed-width': !!width,
      'image-fixed-height': !!height
    }
  );

  // Déterminer les classes de dimension les plus proches
  const getClosestSizeClass = (size: number | undefined, type: 'width' | 'height') => {
    if (!size) return '';
    
    if (type === 'width') {
      if (size <= 100) return 'image-w-25';
      if (size <= 200) return 'image-w-33';
      if (size <= 400) return 'image-w-50';
      if (size <= 600) return 'image-w-75';
      return 'image-w-100';
    } else {
      if (size <= 125) return 'image-h-100';
      if (size <= 175) return 'image-h-150';
      if (size <= 225) return 'image-h-200';
      if (size <= 275) return 'image-h-250';
      return 'image-h-300';
    }
  };

  const dimensionClasses = [
    width ? getClosestSizeClass(width, 'width') : 'image-w-100',
    height ? getClosestSizeClass(height, 'height') : 'image-h-auto'
  ].filter(Boolean).join(' ');

  return (
    <div className={`${containerClasses} ${dimensionClasses}`}>
      {children}
    </div>
  );
};

export default ImageContainer;
