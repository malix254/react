self.addEventListener('install', event => {
    console.log('Service worker installing...');
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
});
