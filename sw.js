const CACHE='snd-squad-playbook-3.0.0';
const ASSETS=['./','./index.html','./data.js','./teamplay_data.js','./fights_data.js','./manifest.webmanifest','./icon.svg','./README.txt','./VERSION.txt','./COPYRIGHT.txt','./LICENSE.txt'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request))));
