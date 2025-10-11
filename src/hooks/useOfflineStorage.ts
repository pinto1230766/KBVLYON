import { useState, useEffect, useCallback } from 'react';

// Interface pour les données stockées
interface StoredData<T> {
  data: T;
  timestamp: number;
  deviceId: string;
  version: number;
}

// Interface pour les options du hook
interface UseOfflineStorageOptions {
  backupBeforeClean?: boolean;
  syncAcrossDevices?: boolean;
  maxBackupVersions?: number;
}

// Hook personnalisé pour la gestion du stockage hors-ligne avec cohérence
export function useOfflineStorage<T>(
  key: string,
  initialValue: T,
  options: UseOfflineStorageOptions = {}
) {
  const {
    backupBeforeClean = true,
    syncAcrossDevices = true,
    maxBackupVersions = 5
  } = options;

  // Générer un ID unique pour l'appareil
  const getDeviceId = useCallback(() => {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
      deviceId = `device_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
  }, []);

  // État local
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        const parsed: StoredData<T> = JSON.parse(item);
        return parsed.data;
      }
      return initialValue;
    } catch (error) {
      console.error(`Erreur lors de la lecture de ${key}:`, error);
      return initialValue;
    }
  });

  // Fonction pour sauvegarder une copie de sauvegarde
  const backupData = useCallback((storageKey: string, data: StoredData<T>, maxVersions: number) => {
    try {
      const backupKey = `${storageKey}_backup`;
      const existingBackups = localStorage.getItem(backupKey);

      let backups: StoredData<T>[] = [];
      if (existingBackups) {
        backups = JSON.parse(existingBackups);
      }

      // Ajouter la nouvelle sauvegarde
      backups.unshift(data);

      // Garder seulement les N dernières versions
      if (backups.length > maxVersions) {
        backups = backups.slice(0, maxVersions);
      }

      localStorage.setItem(backupKey, JSON.stringify(backups));
    } catch (error) {
      console.error(`Erreur lors de la sauvegarde de ${storageKey}:`, error);
    }
  }, []);

  // Fonction pour synchroniser avec d'autres appareils
  const syncWithOtherDevices = useCallback((storageKey: string, data: StoredData<T>) => {
    try {
      // Utiliser BroadcastChannel pour la communication entre onglets/appareils
      if ('BroadcastChannel' in window) {
        const channel = new BroadcastChannel(`offline_sync_${storageKey}`);

        channel.postMessage({
          type: 'DATA_UPDATE',
          key: storageKey,
          data: data,
          sourceDeviceId: data.deviceId
        });

        // Fermer le canal après envoi
        setTimeout(() => channel.close(), 1000);
      }
    } catch (error) {
      console.error(`Erreur lors de la synchronisation de ${storageKey}:`, error);
    }
  }, []);

  // Fonction pour sauvegarder les données
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const deviceId = getDeviceId();
      const currentTimestamp = Date.now();

      // Obtenir la valeur actuelle
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Obtenir la version actuelle
      let currentVersion = 0;
      try {
        const item = localStorage.getItem(key);
        if (item) {
          const parsed: StoredData<T> = JSON.parse(item);
          currentVersion = parsed.version;
        }
      } catch (error) {
        // Ignore error, use 0
      }

      // Créer l'objet de données stockées
      const storedData: StoredData<T> = {
        data: valueToStore,
        timestamp: currentTimestamp,
        deviceId,
        version: currentVersion + 1
      };

      // Sauvegarder dans localStorage
      localStorage.setItem(key, JSON.stringify(storedData));

      // Sauvegarder une sauvegarde si activé
      if (backupBeforeClean) {
        backupData(key, storedData, maxBackupVersions);
      }

      // Synchroniser avec d'autres appareils si activé
      if (syncAcrossDevices) {
        syncWithOtherDevices(key, storedData);
      }

      setStoredValue(valueToStore);
    } catch (error) {
      console.error(`Erreur lors de la sauvegarde de ${key}:`, error);
    }
  }, [key, storedValue, backupBeforeClean, syncAcrossDevices, maxBackupVersions, getDeviceId, backupData, syncWithOtherDevices]);

  // Écouter les mises à jour depuis d'autres appareils
  useEffect(() => {
    if (!syncAcrossDevices || !('BroadcastChannel' in window)) return;

    const channel = new BroadcastChannel(`offline_sync_${key}`);
    const handleMessage = (event: MessageEvent) => {
      const { type, key: msgKey, data: receivedData, sourceDeviceId } = event.data;
      if (type === 'DATA_UPDATE' && msgKey === key) {
        const currentDeviceId = getDeviceId();
        if (sourceDeviceId !== currentDeviceId) {
          try {
            const currentData = localStorage.getItem(key);
            let shouldUpdate = false;
            if (currentData) {
              const parsed = JSON.parse(currentData);
              if (receivedData.timestamp > parsed.timestamp) {
                shouldUpdate = true;
              }
            } else {
              shouldUpdate = true;
            }
            if (shouldUpdate) {
              localStorage.setItem(key, JSON.stringify(receivedData));
              setStoredValue(receivedData.data);
            }
          } catch (error) {
            console.error(`Erreur lors de la synchronisation:`, error);
          }
        }
      }
    };
    channel.onmessage = handleMessage;
    return () => channel.close();
  }, [key, syncAcrossDevices, getDeviceId]);

  // Restaurer depuis la sauvegarde
  const restoreFromBackup = useCallback(() => {
    try {
      const backupKey = `${key}_backup`;
      const backups = localStorage.getItem(backupKey);

      if (backups) {
        const backupArray: StoredData<T>[] = JSON.parse(backups);
        if (backupArray.length > 0) {
          const latestBackup = backupArray[0];
          localStorage.setItem(key, JSON.stringify(latestBackup));
          setStoredValue(latestBackup.data);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error(`Erreur lors de la restauration de ${key}:`, error);
      return false;
    }
  }, [key]);

  // Nettoyer les données (avec sauvegarde automatique)
  const clearData = useCallback(() => {
    try {
      if (backupBeforeClean) {
        const currentData = localStorage.getItem(key);
        if (currentData) {
          backupData(key, JSON.parse(currentData), maxBackupVersions);
        }
      }

      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Erreur lors du nettoyage de ${key}:`, error);
    }
  }, [key, initialValue, backupBeforeClean, maxBackupVersions, backupData]);

  // Écouter les changements de stockage depuis d'autres onglets
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          const parsed: StoredData<T> = JSON.parse(e.newValue);
          setStoredValue(parsed.data);
        } catch (error) {
          console.error(`Erreur lors de la lecture du stockage pour ${key}:`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  // Sauvegarde automatique avant déchargement de la page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (backupBeforeClean) {
        try {
          const currentData = localStorage.getItem(key);
          if (currentData) {
            backupData(key, JSON.parse(currentData), maxBackupVersions);
          }
        } catch (error) {
          console.error(`Erreur lors de la sauvegarde automatique de ${key}:`, error);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [key, backupBeforeClean, maxBackupVersions, backupData]);

  return {
    value: storedValue,
    setValue,
    clearData,
    restoreFromBackup
  };
}