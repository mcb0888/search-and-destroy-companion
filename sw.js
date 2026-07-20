/*
Search & Destroy Companion | Copyright © 2026 Michael Barnes. All Rights Reserved. | Build MB-SNDC-2026-0720-001
Original software and written content. Unauthorized copying, modification, redistribution, or resale is prohibited except with the copyright holder's written permission.
*/
const CACHE='snd-companion-v0.3-protected';
const ASSETS=['./','./index.html','./data.js','./manifest.webmanifest','./icon.svg','./LICENSE.txt','./COPYRIGHT.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
