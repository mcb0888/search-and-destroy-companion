const CACHE="snd-starter-home-1.5.1-r2";
const ASSETS=["./","./index.html","./app.css?v=1.5.1","./app.js?v=1.5.1-r2","./starter_data.js?v=1.5.1","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png","./social-card.png","./guides/best-overall-snd-loadouts-season-6.pdf","./guides/snd-gunsmith-guide-season-6.pdf","./guides/sniper-marksman-gunsmith-guide-season-6.pdf"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener("message",event=>{
  if(event.data?.type==="SKIP_WAITING")self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(Promise.all([
    caches.keys().then(keys=>Promise.all(keys
      .filter(key=>(key.startsWith("snd-starter-home-")||key.startsWith("snd-beginner-guide-"))&&key!==CACHE)
      .map(key=>caches.delete(key)))),
    self.clients.claim()
  ]));
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);
  if(url.pathname.includes("/full/")||url.pathname.includes("/starter/"))return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request);
      if(response.ok){const cache=await caches.open(CACHE);await cache.put(event.request,response.clone())}
      return response;
    }catch{
      return await caches.match(event.request)||(event.request.mode==="navigate"?await caches.match("./index.html"):Response.error());
    }
  })());
});
