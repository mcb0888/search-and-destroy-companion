import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const origin=process.env.APP_ORIGIN||'http://127.0.0.1:4173',base=origin+'/fieldcraft/index.html';
const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_BROWSER_PATH?{executablePath:process.env.PLAYWRIGHT_BROWSER_PATH}:{})});
try{
for(const width of [320,390,1280]){
 const ctx=await browser.newContext({viewport:{width,height:850},isMobile:width<700,hasTouch:width<700});const page=await ctx.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base,{waitUntil:'networkidle'});
 await page.getByRole('heading',{level:1,name:'Know the ground. Choose your move.'}).waitFor();
 assert.equal(await page.locator('#map-select option').count(),30);
 assert(await page.locator('#install-app').isVisible());
 for(const route of ['maps','drills','notes','progress','sources']){await page.goto(base+'#'+route);await page.locator('h1').waitFor();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth),false,`${route} overflows at ${width}px`)}
 await page.goto(base+'#maps');await page.locator('#map-select').selectOption('raid');await page.getByRole('button',{name:'Add a map note'}).click();await page.locator('#note-text').fill('Check the pool-side exposure.');await page.getByRole('button',{name:'Save field note'}).click();
 await page.goto(base+'#notes');await page.getByRole('button',{name:'Pin for match',exact:true}).click();await page.locator('#match-toggle').click();assert(await page.getByText('Check the pool-side exposure.',{exact:true}).isVisible());await page.getByRole('button',{name:'Zoom in',exact:true}).click();assert(await page.getByText('Check the pool-side exposure.',{exact:true}).isVisible());await page.locator('#match-toggle').click();
 await page.goto(base+'#drills');await page.locator('[data-drill="route-check"]').click();for(let i=0;i<3;i++)await page.locator('#next-step').click();await page.locator('#result-text').fill('Observed a crossing. Next rep: prepare the window angle.');await page.locator('#next-step').click();await page.getByRole('heading',{level:1,name:'Track the work. Keep the signal.'}).waitFor();assert(await page.getByText('Observed a crossing. Next rep: prepare the window angle.',{exact:true}).isVisible());
 await page.goto(base+'#maps');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await page.waitForFunction(()=>document.querySelector('#cache-state').textContent==='Offline pack ready on this device');
 const scope=await page.evaluate(async()=>{const r=await navigator.serviceWorker.getRegistration('./');return r.scope});assert(scope.endsWith('/fieldcraft/'));
 await page.evaluate(async()=>{const cache=await caches.open('snd-starter-home-test-preserve');await cache.put('/test-preserve',new Response('keep'))});
 await ctx.setOffline(true);await page.reload({waitUntil:'domcontentloaded'});await page.getByRole('heading',{level:1,name:'Know the ground. Choose your move.'}).waitFor();await page.getByRole('link',{name:/Field notes/}).first().click();assert(await page.getByText('Check the pool-side exposure.',{exact:true}).isVisible());assert((await page.evaluate(()=>caches.keys())).includes('snd-starter-home-test-preserve'));
 assert.deepEqual(errors,[],`Runtime errors at ${width}px`);await ctx.close();
}
console.log('PASS: Fieldcraft rendered at 320/390/1280px; routes fit; notes, pins, drills and history work; dedicated service worker and offline reopening preserve data and sibling caches.');
}finally{await browser.close()}
