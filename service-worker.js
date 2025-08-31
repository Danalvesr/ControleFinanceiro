self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('index-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
                'https://esm.sh/@supabase/supabase-js@2'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
