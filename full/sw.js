const CACHE='snd-full-guide-3.4.1-r1';
const ASSETS=['./','./index.html','./app.css','./app.js','./data.js','./learn_data.js','./fights_data.js','./guided_data.js','./manifest.webmanifest','./icon.svg','./README.txt','./VERSION.txt','./COPYRIGHT.txt','./LICENSE.txt'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('snd-full-guide-')&&key!==CACHE).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}
    return response;
  }).catch(async()=>await caches.match(event.request)||(event.request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
