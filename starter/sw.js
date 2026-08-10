const LEGACY_PREFIX="snd-starter-";
self.addEventListener("install",event=>event.waitUntil(self.skipWaiting()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith(LEGACY_PREFIX)&&!key.startsWith("snd-starter-home-")).map(key=>caches.delete(key)));
  await self.registration.unregister();
  const clients=await self.clients.matchAll({type:"window"});
  clients.forEach(client=>{const source=new URL(client.url),target=new URL("../",self.registration.scope);target.hash=source.hash;client.navigate(target.href)});
})()));
