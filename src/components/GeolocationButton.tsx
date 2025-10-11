import React, { useState } from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface GeolocationButtonProps {
  onLocationUpdate?: (position: CustomGeolocationPosition) => void;
  className?: string;
  showDetails?: boolean;
}

export const GeolocationButton: React.FC<GeolocationButtonProps> = ({
  onLocationUpdate,
  className,
  showDetails = false
}) => {
  const {
    position,
    loading,
    error,
    isSupported,
    isWatching,
    getCurrentPosition,
    watchPosition,
    clearWatch,
    formatCoordinates
  } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 300000 // 5 minutes
  });

  const [showDetailsCard, setShowDetailsCard] = useState(false);

  const handleGetLocation = async () => {
    try {
      const pos = await getCurrentPosition();
      onLocationUpdate?.(pos);
    } catch (err) {
      console.error('Erreur de géolocalisation:', err);
    }
  };

  const handleToggleWatch = () => {
    if (isWatching) {
      clearWatch();
    } else {
      watchPosition();
    }
  };

  const handleToggleDetails = () => {
    setShowDetailsCard(!showDetailsCard);
  };

  if (!isSupported) {
    return (
      <Button variant="outline" size="sm" disabled className={className}>
        <MapPin className="w-4 h-4 mr-2" />
        Géolocalisation non supportée
      </Button>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-2">
        <Button
          onClick={handleGetLocation}
          variant="outline"
          size="sm"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <MapPin className="w-4 h-4 mr-2" />
          )}
          {loading ? 'Localisation...' : 'Ma position'}
        </Button>

        <Button
          onClick={handleToggleWatch}
          variant={isWatching ? "default" : "outline"}
          size="sm"
        >
          <Navigation className={cn("w-4 h-4", isWatching && "animate-pulse")} />
        </Button>

        {position && showDetails && (
          <Button
            onClick={handleToggleDetails}
            variant="ghost"
            size="sm"
          >
            Détails
          </Button>
        )}
      </div>

      {showDetailsCard && position && (
        <Card className="absolute top-full mt-2 left-0 z-50 w-64">
          <CardContent className="p-4">
            <div className="space-y-2 text-sm">
              <div>
                <strong>Coordonnées:</strong>
                <br />
                {formatCoordinates(position)}
              </div>
              <div>
                <strong>Précision:</strong> {position.accuracy.toFixed(0)}m
              </div>
              {position.altitude && (
                <div>
                  <strong>Altitude:</strong> {position.altitude.toFixed(0)}m
                </div>
              )}
              {position.speed && (
                <div>
                  <strong>Vitesse:</strong> {(position.speed * 3.6).toFixed(1)} km/h
                </div>
              )}
              <div>
                <strong>Dernière mise à jour:</strong>
                <br />
                {new Date(position.timestamp).toLocaleString('pt-PT')}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {error && (
        <div className="text-sm text-red-600 mt-2">
          Erreur: {error.message}
        </div>
      )}
    </div>
  );
};

export default GeolocationButton;