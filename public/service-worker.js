// Service Worker
const CACHE_NAME = 'kriolu-jw-v2'; // Mise à jour de la version du cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
  // Les assets générés par Vite (JS, CSS) ont des noms hachés et ne peuvent pas être listés statiquement ici.
  // Ils seront gérés par la stratégie de cache dans l'événement 'fetch'.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching essential app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache essential app shell', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Stratégie Cache-First, puis Network
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si la ressource est dans le cache, la retourner
        if (response) {
          return response;
        }
        // Sinon, aller chercher la ressource sur le réseau
        return fetch(event.request)
          .then((networkResponse) => {
            // Vérifier si la réponse est valide avant de la mettre en cache
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            // Cloner la réponse car elle est un flux et ne peut être lue qu'une seule fois
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          })
          .catch(() => {
            // Gérer les erreurs de réseau (ex: utilisateur hors ligne)
            // Vous pouvez retourner une page hors ligne personnalisée ici
            console.log('Service Worker: Fetch failed for', event.request.url);
            // Exemple: retourner une page hors ligne si la requête est pour une page HTML
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html'); // Ou une page offline spécifique
            }
            return new Response(null, { status: 503, statusText: 'Service Unavailable' });
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('kriolu-jw-') && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
