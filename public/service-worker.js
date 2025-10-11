// Service Worker
const CACHE_NAME = 'kriolu-jw-static-v3';
const DYNAMIC_CACHE = 'kriolu-jw-dynamic-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/lessons',
  '/dictionary',
  '/preaching',
  '/grammar-dictionary',
  '/dictionary.json',
  '/images/lessons/page 1.1.webp',
  '/images/lessons/page 1.1.jpg',
  '/images/lessons/page 1.1-480.webp',
  '/images/lessons/page 1.1-768.webp',
  '/images/lessons/page 1.1-1024.webp',
  '/images/lessons/page 1.1-1280.webp',
  '/images/lessons/page 1.2.webp',
  '/images/lessons/page 1.2.jpg',
  '/images/lessons/page 1.2-480.webp',
  '/images/lessons/page 1.2-768.webp',
  '/images/lessons/page 1.2-1024.webp',
  '/images/lessons/page 1.2-1280.webp',
  '/images/lessons/page 1.3.webp',
  '/images/lessons/page 1.3.jpg',
  '/images/lessons/page 1.3-480.webp',
  '/images/lessons/page 1.3-768.webp',
  '/images/lessons/page 1.3-1024.webp',
  '/images/lessons/page 1.3-1280.webp',
  '/images/lessons/page 1.4.webp',
  '/images/lessons/page 1.4.jpg',
  '/images/lessons/page 1.4-480.webp',
  '/images/lessons/page 1.4-768.webp',
  '/images/lessons/page 1.4-1024.webp',
  '/images/lessons/page 1.4-1280.webp'
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
  if (event.request.method !== 'GET') {
    return;
  }

  const { request } = event;
  const requestUrl = new URL(request.url);

  // Stratégie cache-first pour l'app shell et navigation
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        return (
          cachedResponse ||
          fetch(request)
            .then((networkResponse) => {
              return caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(request, networkResponse.clone());
                return networkResponse;
              });
            })
            .catch(() => caches.match('/index.html'))
        );
      })
    );
    return;
  }

  // Runtime caching pour assets JSON/images depuis la même origine
  if (requestUrl.origin === self.location.origin && (/\.json$/.test(requestUrl.pathname) || request.destination === 'image')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const networkFetch = fetch(request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, responseClone));
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || networkFetch;
      })
    );
    return;
  }

  // Fallback: network-first avec mise en cache pour les autres requêtes GET
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => caches.match(request))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName.startsWith('kriolu-jw-') && ![CACHE_NAME, DYNAMIC_CACHE].includes(cacheName);
          })
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
