self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('financeiro-cache').then((cache) => {
            return cache.addAll([
                '/',
                '../index.html',
                '/manifest.json',
                'https://cdn.tailwindcss.com',
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
