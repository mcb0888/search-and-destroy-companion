import { chromium } from 'playwright';

const origin=process.env.APP_ORIGIN||'http://127.0.0.1:4173';
const browser=await chromium.launch({
  headless:true,
  ...(process.env.PLAYWRIGHT_BROWSER_PATH?{executablePath:process.env.PLAYWRIGHT_BROWSER_PATH}:{})
});
const failures=[];
const check=(condition,message)=>{if(!condition)failures.push(message)};

async function checkStarter(url,label){
  const context=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true});
  const page=await context.newPage();
  await page.goto(`${url}#/learn`,{waitUntil:'networkidle'});
  check(await page.getByRole('heading',{name:'Learn the mode without learning it the hard way.'}).isVisible(),`${label} learning screen did not render`);
  check(await page.locator('.lesson').count()===8,`${label} does not show eight lessons`);
  check(await page.locator('nav button').count()===4,`${label} should expose exactly four main sections`);
  check(await page.getByRole('link',{name:'Open the full companion'}).isVisible(),`${label} is missing the quiet full-companion link`);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
  check(!overflow,`${label} has horizontal overflow at 320px`);
  const smallTargets=await page.locator('button:visible,a:visible').evaluateAll(nodes=>nodes.filter(node=>{
    const box=node.getBoundingClientRect();
    return box.width<44||box.height<44;
  }).map(node=>({text:node.textContent.trim(),width:node.getBoundingClientRect().width,height:node.getBoundingClientRect().height})));
  check(smallTargets.length===0,`${label} has tap targets smaller than 44px: ${JSON.stringify(smallTargets)}`);
  const colors=await page.evaluate(()=>{const style=getComputedStyle(document.documentElement);return {accent:style.getPropertyValue('--green').trim(),background:style.getPropertyValue('--bg').trim()}});
  check(colors.accent==='#94aa9d'&&colors.background==='#0d1113',`${label} is not using the muted charcoal and sage palette`);
  await page.locator('.lesson').first().click();
  check(page.url().includes('#/lesson/'),`${label} lesson navigation failed`);
  await page.goto(`${url}#/lesson/information`,{waitUntil:'domcontentloaded'});
  check(await page.getByRole('heading',{name:'Communicate without taking over'}).isVisible(),`${label} information lesson did not render`);
  check(await page.locator('.callout-formula div').count()===4,`${label} callout builder is incomplete`);
  check(await page.locator('.callout-examples span').count()===3,`${label} callout examples are incomplete`);
  const informationOverflow=await page.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth);
  check(!informationOverflow,`${label} information lesson overflows at 320px`);
  await page.goto(`${url}#/hud`,{waitUntil:'domcontentloaded'});
  check(await page.getByText('Build around jobs, not somebody else’s hands.').isVisible(),`${label} HUD screen did not render`);
  await page.evaluate(()=>navigator.serviceWorker.ready);
  await page.reload({waitUntil:'networkidle'});
  await context.setOffline(true);
  await page.goto(`${url}#/settings`,{waitUntil:'domcontentloaded'}).catch(()=>{});
  check(await page.getByText('Start here. Then leave it alone long enough to learn.').isVisible().catch(()=>false),`${label} did not reopen a cached section while offline`);
  await context.setOffline(false);
  await context.close();
}

await checkStarter(`${origin}/index.html`,'Default Starter');
await checkStarter(`${origin}/starter/index.html`,'Starter alias');

const fullContext=await browser.newContext({viewport:{width:320,height:568},isMobile:true,hasTouch:true});
const fullPage=await fullContext.newPage();
await fullPage.goto(`${origin}/full/index.html#/home`,{waitUntil:'networkidle'});
check(await fullPage.getByText('Learn Search & Destroy without being thrown to the wolves.').isVisible(),'Full companion did not render from /full/');
await fullPage.locator('.starter-link').click();
await fullPage.waitForLoadState('domcontentloaded');
check(new URL(fullPage.url()).pathname.endsWith('/index.html')||new URL(fullPage.url()).pathname.endsWith('/'),'Full companion does not return to the default Starter');
await fullContext.close();

await browser.close();
if(failures.length){
  console.error(`FAILED: ${failures.length} Starter browser check(s)`);
  failures.forEach((failure,index)=>console.error(`${index+1}. ${failure}`));
  process.exit(1);
}
console.log('PASS: default Starter, /starter/ alias, muted mobile layout, lesson and HUD routes, and /full/ companion handoff are valid.');
