// Service Worker pour KBVLYON - Cache hors-ligne amélioré
const CACHE_NAME_STATIC = 'kbvlyon-static-v2';
const CACHE_NAME_DYNAMIC = 'kbvlyon-dynamic-v2';
const CACHE_NAME_API = 'kbvlyon-api-v1';

// Assets essentiels à mettre en cache
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/dictionary.json',
  '/grammar_lessons_extracted.json',
  // Icônes
  '/icons/icon-48.webp',
  '/icons/icon-72.webp',
  '/icons/icon-96.webp',
  '/icons/icon-128.webp',
  '/icons/icon-192.webp',
  '/icons/icon-256.webp',
  '/icons/icon-512.webp',
  // Routes principales
  '/lessons',
  '/dictionary',
  '/preaching',
  '/grammar-dictionary',
  '/bible-studies',
  '/about',
  '/cookie-policy',
  '/privacy-policy',
  '/terms-of-service',
  '/settings',
  '/notes'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation');
  event.waitUntil(
    caches.open(CACHE_NAME_STATIC)
      .then((cache) => {
        console.log('[SW] Mise en cache des assets statiques');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('[SW] Erreur lors du cache des assets statiques:', error);
      })
  );
  // Forcer l'activation immédiate
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName.startsWith('kbvlyon-') &&
                   ![CACHE_NAME_STATIC, CACHE_NAME_DYNAMIC, CACHE_NAME_API].includes(cacheName);
          })
          .map((cacheName) => {
            console.log('[SW] Suppression du cache obsolète:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      // Prendre le contrôle de tous les clients
      return self.clients.claim();
    })
  );
});

// Gestionnaire de messages pour l'intégration avec le système de stockage hors-ligne
self.addEventListener('message', (event) => {
  const { type, data } = event.data;

  switch (type) {
    case 'CACHE_USER_DATA':
      // Mettre en cache les données utilisateur pour la persistance
      event.waitUntil(
        caches.open(CACHE_NAME_API)
          .then((cache) => {
            const userDataUrl = `/user-data/${data.key}`;
            const response = new Response(JSON.stringify(data.value), {
              headers: { 'Content-Type': 'application/json' }
            });
            return cache.put(userDataUrl, response);
          })
          .then(() => {
            console.log('[SW] Données utilisateur mises en cache:', data.key);
          })
      );
      break;

    case 'SYNC_OFFLINE_DATA':
      // Synchroniser les données hors-ligne quand la connexion revient
      event.waitUntil(syncOfflineData());
      break;

    case 'CLEAR_CACHE':
      // Vider un cache spécifique
      event.waitUntil(
        caches.delete(data.cacheName || CACHE_NAME_DYNAMIC)
          .then(() => {
            console.log('[SW] Cache vidé:', data.cacheName || CACHE_NAME_DYNAMIC);
          })
      );
      break;

    default:
      console.log('[SW] Message non reconnu:', type);
  }
});

// Fonction de synchronisation des données hors-ligne
async function syncOfflineData() {
  try {
    const cache = await caches.open(CACHE_NAME_API);
    const keys = await cache.keys();

    for (const request of keys) {
      if (request.url.includes('/user-data/')) {
        // Tenter de synchroniser avec le serveur (si applicable)
        console.log('[SW] Synchronisation des données:', request.url);
        // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
      }
    }
  } catch (error) {
    console.error('[SW] Erreur lors de la synchronisation:', error);
  }
}

// Gestionnaire de récupération (fetch)
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET
  if (request.method !== 'GET') return;

  // Stratégie Cache-First pour les assets statiques
  if (STATIC_ASSETS.some(asset => url.pathname === asset) ||
      url.pathname.match(/\.(js|css|png|jpg|jpeg|webp|svg|woff|woff2)$/)) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(CACHE_NAME_STATIC).then((cache) => {
                  cache.put(request, responseClone);
                });
              }
              return networkResponse;
            });
        })
    );
    return;
  }

  // Stratégie Network-First pour les données JSON/API
  if (url.pathname.match(/\.json$/) || url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME_API).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Stratégie Cache-First avec fallback pour la navigation
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((networkResponse) => {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME_DYNAMIC).then((cache) => {
                cache.put(request, responseClone);
              });
              return networkResponse;
            })
            .catch(() => {
              // Fallback vers la page hors-ligne
              return caches.match('/offline.html');
            });
        })
    );
    return;
  }

  // Stratégie Network-First avec cache pour les autres ressources
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME_DYNAMIC).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Gestionnaire de synchronisation en arrière-plan
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(syncOfflineData());
  }
});

// Gestionnaire de notifications push (si nécessaire)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192.webp',
      badge: '/icons/icon-48.webp',
      vibrate: [100, 50, 100],
      data: data.data
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Gestionnaire de clic sur notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  );
});