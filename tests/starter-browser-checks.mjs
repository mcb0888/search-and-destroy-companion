import { chromium } from 'playwright';

const origin=process.env.APP_ORIGIN||'http://127.0.0.1:4173';
const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_BROWSER_PATH?{executablePath:process.env.PLAYWRIGHT_BROWSER_PATH}:{})});
const failures=[];
const check=(condition,message)=>{if(!condition)failures.push(message)};

const context=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true});
const page=await context.newPage();
const base=`${origin}/index.html`;

await page.goto(`${base}#/learn`,{waitUntil:'networkidle'});
check(await page.getByRole('heading',{name:'Learn the mode without learning it the hard way.'}).isVisible(),'Starter learning screen did not render');
check(await page.locator('.lesson').count()===8,'Starter does not show eight lessons');
check(await page.locator('nav button').count()===4,'Starter should expose exactly four main sections');
check(await page.getByRole('link',{name:/Open the Full Companion/i}).isVisible(),'Starter is missing the quiet Full Companion link');
check(await page.locator('[aria-current="page"]').count()===1,'Starter must expose one active navigation item');
check(!(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth)),'Starter has horizontal overflow at 320px');
const smallTargets=await page.locator('button:visible,a:visible').evaluateAll(nodes=>nodes.filter(node=>{const box=node.getBoundingClientRect();return box.width<44||box.height<44}).map(node=>({text:node.textContent.trim(),width:node.getBoundingClientRect().width,height:node.getBoundingClientRect().height})));
check(smallTargets.length===0,`Starter has tap targets smaller than 44px: ${JSON.stringify(smallTargets)}`);
const colors=await page.evaluate(()=>{const style=getComputedStyle(document.documentElement);return {accent:style.getPropertyValue('--accent').trim(),background:style.getPropertyValue('--bg').trim()}});
check(colors.accent==='#8db1a4'&&colors.background==='#090d0f','Starter is not using the polished gunmetal and sage palette');

await page.goto(`${base}#/lesson/information`,{waitUntil:'domcontentloaded'});
check(await page.getByRole('heading',{level:1,name:'Communicate without taking over'}).isVisible(),'Information lesson does not have a page-level heading');
check(await page.getByRole('heading',{name:'Terms on this page'}).isVisible(),'Lesson terms are not visible by default');
check(await page.locator('.callout-formula div').count()===4,'Callout builder is incomplete');
check(!(await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth)),'Information lesson overflows at 320px');

await page.goto(`${base}#/lesson/defense`,{waitUntil:'domcontentloaded'});
check(await page.getByText(/When players complain about “camping,”/).isVisible(),'Defense lesson does not explain camping complaints');

await page.goto(`${base}#/settings`,{waitUntil:'domcontentloaded'});
check(await page.getByRole('heading',{name:'Start stable. Adjust with a reason.'}).isVisible(),'Settings did not render');
check(await page.getByRole('heading',{name:'Terms on this page'}).isVisible(),'Settings terminology is not explained');
check(await page.getByText(/Finger count alone does not decide/).isVisible(),'ADS advice still overstates finger count');

await page.goto(`${base}#/guides`,{waitUntil:'domcontentloaded'});
check(await page.getByRole('heading',{name:'Pick the shortest guide that answers your question.'}).isVisible(),'Guide library did not render');
check(await page.locator('.guide-card').count()===3,'Starter does not show exactly three PDF guides');
check(await page.getByText(/Archived: Global Multiplayer Season 6/).isVisible(),'Guide library is missing its archived-season warning');
check(await page.getByText('ARCHIVED · SEASON 6').count()===3,'Every guide needs an archived-season badge');
check(await page.getByRole('link',{name:/^Open .* PDF$/}).count()===3,'Guide PDF links need unique accessible names');
const guideHrefs=await page.getByRole('link',{name:/^Open .* PDF$/}).evaluateAll(nodes=>nodes.map(node=>node.getAttribute('href')));
check(guideHrefs.every(href=>href?.endsWith('.pdf')),`A guide link is not a PDF: ${JSON.stringify(guideHrefs)}`);
for(const href of guideHrefs){const guideUrl=new URL(href,page.url()).href;const response=await page.request.get(guideUrl);const body=await response.body();check(response.ok(),`PDF did not load: ${guideUrl}`);check(response.headers()['content-type']?.includes('application/pdf'),`PDF has wrong content type: ${guideUrl}`);check(body.subarray(0,4).toString()==='%PDF',`Guide is not a valid PDF: ${guideUrl}`)}
check(await page.getByRole('heading',{name:'Terms on this page'}).isVisible(),'Guide terminology is not explained');

await page.goto(`${base}#/hud/three`,{waitUntil:'domcontentloaded'});
check(await page.getByText('Build around jobs, not somebody else’s hands.').isVisible(),'HUD screen did not render');
check(await page.locator('.phone[role="img"]').count()===1,'HUD diagram lacks image semantics');
check(await page.getByRole('heading',{name:'Terms on this page'}).isVisible(),'HUD terminology is not explained');
for(const layout of ['Two thumbs','Three fingers']){await page.getByRole('button',{name:layout,exact:true}).click();const overlaps=await page.locator('.phone .control').evaluateAll(nodes=>{const boxes=nodes.map(node=>({name:node.textContent.trim(),box:node.getBoundingClientRect()})),collisions=[];for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++){const a=boxes[i],b=boxes[j];if(a.box.left<b.box.right&&a.box.right>b.box.left&&a.box.top<b.box.bottom&&a.box.bottom>b.box.top)collisions.push(`${a.name}/${b.name}`)}return collisions});check(overlaps.length===0,`${layout} HUD has overlapping controls: ${overlaps.join(', ')}`)}

await page.goto(`${origin}/starter/index.html#/settings`,{waitUntil:'domcontentloaded'});
await page.waitForURL(`${origin}/#/settings`);
check((await page.url()).endsWith('/#/settings'),'Compatibility alias did not preserve the requested Starter route');

await context.close();
const fullContext=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true});
const fullPage=await fullContext.newPage();
await fullPage.goto(`${origin}/full/index.html#/home`,{waitUntil:'networkidle'});
check(await fullPage.getByText('Understand the round. Change one action. Try again.').isVisible(),'Full Companion polished home did not render');
check(!(await fullPage.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth)),'Full Companion has horizontal overflow at 320px');
await fullPage.locator('.starter-link').click();await fullPage.waitForLoadState('domcontentloaded');
check(new URL(fullPage.url()).pathname.endsWith('/index.html')||new URL(fullPage.url()).pathname.endsWith('/'),'Full Companion does not return to the default Starter');
await fullContext.close();

await browser.close();
if(failures.length){console.error(`FAILED: ${failures.length} Starter browser check(s)`);failures.forEach((failure,index)=>console.error(`${index+1}. ${failure}`));process.exit(1)}
console.log('PASS: canonical Starter, compatibility redirect, polished mobile layout, terminology, archived guides, HUD geometry, and Full Companion handoff are valid.');
