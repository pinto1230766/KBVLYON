// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with sw.js');

        // Enregistrer la synchronisation en arrière-plan si supportée
        if ('sync' in registration) {
          registration.sync.register('background-sync')
            .then(() => console.log('Background sync registered'))
            .catch(err => console.log('Background sync registration failed:', err));
        }
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
