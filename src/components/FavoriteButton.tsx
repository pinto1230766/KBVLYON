import React from 'react';
import { useCloudFavorites } from '@/hooks/useCloudFavorites';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  entryId: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  entryId,
  className,
  size = 'sm',
  variant = 'ghost'
}) => {
  const { toggleFavorite, isFavorite, loading } = useCloudFavorites();

  const handleToggle = async () => {
    try {
      await toggleFavorite(entryId);
    } catch (error) {
      console.error('Erreur lors de la gestion des favoris:', error);
    }
  };

  const isFav = isFavorite(entryId);

  return (
    <Button
      onClick={handleToggle}
      variant={variant}
      size={size}
      disabled={loading}
      className={cn(
        "transition-colors",
        isFav && "text-red-500 hover:text-red-600",
        className
      )}
    >
      <Heart
        className={cn(
          "w-4 h-4",
          isFav && "fill-current"
        )}
      />
    </Button>
  );
};

export default FavoriteButton;