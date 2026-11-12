const CACHE='fieldcraft-1.2.0';
const FILES=['./','./index.html','./style.css','./data.js','./catalog.js','./app.js','./pwa.js','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  try{for(const file of FILES){const response=await fetch(file,{cache:'reload'});if(!response.ok||response.redirected)throw new Error('Offline asset unavailable: '+file);await cache.put(file,response)}}
  catch(error){await caches.delete(CACHE);throw error}
})()));
self.addEventListener('message',event=>{if(event.data?.type==='APPLY_UPDATE')self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('fieldcraft-')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url),scope=new URL(self.registration.scope);
  if(event.request.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  const isAsset=FILES.some(f=>new URL(f,self.registration.scope).pathname===url.pathname);
  if(!isAsset&&event.request.mode!=='navigate')return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE),saved=await cache.match(event.request,{ignoreSearch:true});
    if(saved)return saved;
    try{return await fetch(event.request)}catch(error){if(event.request.mode==='navigate')return await cache.match('./index.html')||Response.error();throw error}
  })());
});
