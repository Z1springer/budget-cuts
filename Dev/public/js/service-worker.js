const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/js/db.js",
  "/js/index.js",
  "/js/service-worker.js",
  "/css/style.css",
  "/icons/exampleicon-192x192.png",
  "/icons/exampleicon-512x512.png",
];

self.addEventListener("install", function (stuff) {
  stuff.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/"))
  );
});
