import { db, auth } from '@/lib/firebase';
import { doc, setDoc, getDoc, onSnapshot, DocumentSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signInAnonymously, User } from 'firebase/auth';

export class FavoritesService {
  private static instance: FavoritesService;
  private userId: string | null = null;
  private unsubscribeAuth: (() => void) | null = null;
  private unsubscribeFavorites: (() => void) | null = null;

  private constructor() {
    this.initializeAuth();
  }

  static getInstance(): FavoritesService {
    if (!FavoritesService.instance) {
      FavoritesService.instance = new FavoritesService();
    }
    return FavoritesService.instance;
  }

  private async initializeAuth() {
    // Écouter les changements d'état d'authentification
    this.unsubscribeAuth = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        this.userId = user.uid;
        console.log('Utilisateur connecté:', this.userId);
        // Synchroniser les favoris locaux avec le cloud
        await this.syncLocalToCloud();
      } else {
        console.log('Aucun utilisateur connecté');
        this.userId = null;
      }
    });

    // Connexion anonyme automatique
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error('Erreur lors de la connexion anonyme:', error);
    }
  }

  private async syncLocalToCloud() {
    if (!this.userId) return;

    try {
      // Récupérer les favoris locaux
      const localFavorites = this.getLocalFavorites();

      // Récupérer les favoris cloud
      const cloudFavorites = await this.getCloudFavorites();

      // Fusionner les favoris (cloud prend la priorité en cas de conflit)
      const mergedFavorites = new Set([...localFavorites, ...cloudFavorites]);

      // Sauvegarder dans le cloud
      await this.saveCloudFavorites(Array.from(mergedFavorites));

      // Mettre à jour local
      this.saveLocalFavorites(Array.from(mergedFavorites));

      console.log('Synchronisation terminée');
    } catch (error) {
      console.error('Erreur lors de la synchronisation:', error);
    }
  }

  private getLocalFavorites(): string[] {
    try {
      const stored = localStorage.getItem('dictionaryFavorites');
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed.data) ? parsed.data : [];
      }
    } catch (error) {
      console.error('Erreur lors de la lecture des favoris locaux:', error);
    }
    return [];
  }

  private saveLocalFavorites(favorites: string[]) {
    try {
      const deviceId = localStorage.getItem('deviceId') || 'unknown';
      const storedData = {
        data: favorites,
        timestamp: Date.now(),
        deviceId,
        version: 1
      };
      localStorage.setItem('dictionaryFavorites', JSON.stringify(storedData));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des favoris locaux:', error);
    }
  }

  private async getCloudFavorites(): Promise<string[]> {
    if (!this.userId) return [];

    try {
      const docRef = doc(db, 'users', this.userId, 'favorites', 'dictionary');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return Array.isArray(data.favorites) ? data.favorites : [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des favoris cloud:', error);
    }
    return [];
  }

  private async saveCloudFavorites(favorites: string[]) {
    if (!this.userId) return;

    try {
      const docRef = doc(db, 'users', this.userId, 'favorites', 'dictionary');
      await setDoc(docRef, {
        favorites,
        lastUpdated: new Date(),
        deviceId: localStorage.getItem('deviceId') || 'unknown'
      });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des favoris cloud:', error);
    }
  }

  async addFavorite(entryId: string) {
    const currentFavorites = this.getLocalFavorites();
    if (!currentFavorites.includes(entryId)) {
      const newFavorites = [...currentFavorites, entryId];
      this.saveLocalFavorites(newFavorites);
      await this.saveCloudFavorites(newFavorites);
    }
  }

  async removeFavorite(entryId: string) {
    const currentFavorites = this.getLocalFavorites();
    const newFavorites = currentFavorites.filter(id => id !== entryId);
    this.saveLocalFavorites(newFavorites);
    await this.saveCloudFavorites(newFavorites);
  }

  getFavorites(): string[] {
    return this.getLocalFavorites();
  }

  // Écouter les changements en temps réel depuis le cloud
  startRealtimeSync(callback: (favorites: string[]) => void) {
    if (!this.userId) return;

    const docRef = doc(db, 'users', this.userId, 'favorites', 'dictionary');

    this.unsubscribeFavorites = onSnapshot(docRef, (doc: DocumentSnapshot) => {
      if (doc.exists()) {
        const data = doc.data();
        const cloudFavorites = Array.isArray(data.favorites) ? data.favorites : [];
        // Mettre à jour local seulement si différent
        const localFavorites = this.getLocalFavorites();
        if (JSON.stringify(cloudFavorites.sort()) !== JSON.stringify(localFavorites.sort())) {
          this.saveLocalFavorites(cloudFavorites);
          callback(cloudFavorites);
        }
      }
    });
  }

  stopRealtimeSync() {
    if (this.unsubscribeFavorites) {
      this.unsubscribeFavorites();
      this.unsubscribeFavorites = null;
    }
  }

  destroy() {
    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }
    this.stopRealtimeSync();
  }
}

export const favoritesService = FavoritesService.getInstance();