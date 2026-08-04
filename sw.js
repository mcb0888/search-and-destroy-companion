const CACHE="snd-starter-home-1.2.0-r1";
const ASSETS=["./","./index.html","./app.css?v=1.2.0","./app.js?v=1.2.0","./starter_data.js?v=1.2.0","./manifest.webmanifest","./icon.svg"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
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
  event.respondWith(
    fetch(event.request).then(response=>{
      if(response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
      }
      return response;
    }).catch(async()=>await caches.match(event.request)||(event.request.mode==="navigate"?caches.match("./index.html"):Response.error()))
  );
});
