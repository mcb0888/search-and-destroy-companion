const CACHE='snd-full-guide-3.6.1-r1';
const ASSETS=['./','./index.html','./app.css?v=3.6.1','./app.js?v=3.6.1','./polish.js?v=3.6.1','./data.js?v=3.6.1','./learn_data.js?v=3.6.1','./fights_data.js?v=3.6.1','./guided_data.js?v=3.6.1','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./README.txt','./VERSION.txt','./COPYRIGHT.txt','./LICENSE.txt'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('snd-full-guide-')&&key!==CACHE).map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request);
      if(response.ok){const cache=await caches.open(CACHE);await cache.put(event.request,response.clone())}
      return response;
    }catch{
      return await caches.match(event.request)||(event.request.mode==='navigate'?await caches.match('./index.html'):Response.error());
    }
  })());
});
