var cacheName='cache-v1';
var resources=[
    '.',
    'index.html',
    'style.css',
    'Profile.png',
    'Ambulance-res.png',
    'manifest.json',
    'icon.png'
];
self.addEventListener('install',event=>{
    self.skipWaiting();
    console.log('Installed new');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache=> {
            return cache.addAll(resources);})
    )
});
self.addEventListener('activate',event=>{console.log('Activated')});
self.addEventListener('fetch',(event)=>{
    event.respondWith(caches.match(event.request)
    .then(cachedResponse=>{return cachedResponse ||fetch(event.request);}))
})
