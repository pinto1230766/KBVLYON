import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';

interface OfflineIndicatorProps {
  className?: string;
  showText?: boolean;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({
  className,
  showText = true
}) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
        isOnline
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        className
      )}
    >
      <div
        className={cn(
          "w-2 h-2 rounded-full",
          isOnline ? "bg-green-500" : "bg-red-500"
        )}
      />
      {showText && (
        <span>
          {isOnline ? t('ui.online') : t('ui.offline')}
        </span>
      )}
    </div>
  );
};

export default OfflineIndicator;