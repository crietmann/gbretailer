const CACHE_NAME = 'gb-terminal-v1';

// Install the service worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// A simple pass-through fetch so the app passes the PWA requirement
// without aggressively caching your API calls
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
