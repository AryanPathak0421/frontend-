const CACHE_NAME = "my-site-cache-v2";

// Install event — preload some essential files (like homepage & CSS framework)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "./",             // Root
        "./index.html",   // Main page
        "./manifest.json",
        "./offline.html",
        "./styles.css", // Manifest
        "./predictor.js" // Manifest
        // You can add a main CSS or JS if you want guaranteed first-load availability
      ]);
    })
  );
});

// Fetch event — cache any new requests dynamically
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      // Fetch from network and add to cache
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Skip caching non-HTTP or browser extension requests
          if (event.request.url.startsWith("http")) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      }).catch(() => {
        // Optional: return offline fallback page
        return caches.match("./offline.html");
      });
    })
  );
});

// Activate event — clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
