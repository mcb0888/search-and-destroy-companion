const CACHE="snd-starter-1.1.0-r1";
const ASSETS=["./index.html","./starter.css","./starter.js","./starter_data.js","./manifest.webmanifest","../icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(Promise.all([
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("snd-starter-")&&k!==CACHE).map(k=>caches.delete(k)))),
  self.clients.claim()
])));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(fetch(e.request).then(r=>{
    if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
    return r;
  }).catch(async()=>await caches.match(e.request)||(e.request.mode==="navigate"?caches.match("./index.html"):Response.error())));
});
