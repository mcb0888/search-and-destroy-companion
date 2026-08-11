import { chromium } from 'playwright';

const base = process.env.APP_URL || 'http://127.0.0.1:4173/full/index.html';
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_BROWSER_PATH ? { executablePath: process.env.PLAYWRIGHT_BROWSER_PATH } : {})
});
const context = await browser.newContext({ viewport: { width: 320, height: 568 }, isMobile: true, hasTouch: true });
const page = await context.newPage();
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
page.on('pageerror', error => failures.push(`Full Companion page error: ${error.message}`));
page.on('console', message => { if (message.type() === 'error') failures.push(`Full Companion console error: ${message.text()}`); });

await page.goto(`${base}#/guided`, { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });
check(await page.getByText('What happened that round?').isVisible(), 'Guided start did not render');
check((await page.locator('.choice').count()) >= 5, 'Guided start choices are missing');
check(await page.evaluate(()=>['H1','H2'].includes(document.activeElement?.tagName)), 'Guided route did not move focus to its heading');

await page.goto(`${base}#/guided/q/died-when`);
check(await page.getByText('When were you eliminated?').isVisible(), 'Guided question route did not render');
await page.goto(`${base}#/guided/result/early-sprint`);
check(await page.getByText('Try this next round').isVisible(), 'Guided result did not put the immediate correction first');

await page.getByRole('button', { name: /Start this mission/i }).click();
check(page.url().includes('#/practice'), 'Starting a mission did not route to Practice');
for (let i = 0; i < 3; i++) await page.getByRole('button', { name: 'Remembered it' }).click();
for (let i = 0; i < 2; i++) await page.getByRole('button', { name: 'Missed it' }).click();
check(await page.getByRole('heading', { name: 'Five rounds complete', exact: true }).isVisible(), 'Practice mission did not complete after five rounds');
await page.locator('#missionNote').fill('Persistence test');
await page.getByRole('button', { name: 'Save and finish' }).click();
await page.reload();
check(await page.getByText(/Persistence test/).isVisible(), 'Practice history did not persist after reload');

await page.goto(`${base}#/lesson/mode-basics`);
const completeButton = page.locator('#lessonComplete');
check(await completeButton.isVisible(), 'Lesson completion control is missing');
check(await page.evaluate(()=>document.activeElement?.tagName)==='H1', 'Lesson route did not move focus to its heading');
if ((await completeButton.textContent()).includes('Mark lesson complete')) await completeButton.click();
await page.reload();
check((await page.locator('#lessonComplete').textContent()).includes('Mark incomplete'), 'Lesson completion did not persist after reload');

await page.goto(`${base}#/library`);
check(await page.getByText('Search the whole guide.').isVisible(), 'Global search did not render');
await page.locator('#globalSearch').fill('re-peek');
check((await page.locator('#globalResults .bigrow').count()) > 0, 'Global search returned no results for re-peek');
await page.goto(`${base}#/lesson/mode-basics`);
await page.getByRole('button', { name: /Save page/i }).click();
await page.goto(`${base}#/library`);
check((await page.getByText('How Search & Destroy works').count()) >= 2, 'Saved page did not persist in the library');
await page.reload();
check((await page.getByText('How Search & Destroy works').count()) >= 2, 'Saved page did not persist after reload');

const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
check(!overflow, 'Narrow mobile viewport has horizontal overflow');
const smallTargets = await page.locator('button:visible').evaluateAll(nodes => nodes.filter(node => {
  const box = node.getBoundingClientRect();
  return box.width < 44 || box.height < 44;
}).map(node => ({ text: node.textContent.trim(), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height })));
check(smallTargets.length === 0, `Tap targets smaller than 44px: ${JSON.stringify(smallTargets)}`);
await page.goto(`${base}#/home`);
const progress=page.locator('[role="progressbar"]');
check(await progress.count()===1,'Lesson progress is missing progressbar semantics');
check(await progress.getAttribute('aria-valuenow')!==null,'Lesson progress is missing its current value');
const navFontSize=await page.locator('.nav').first().evaluate(node=>parseFloat(getComputedStyle(node).fontSize));
check(navFontSize>=12,`Bottom navigation text is too small: ${navFontSize}px`);

await page.evaluate(()=>navigator.serviceWorker.ready);
const fullCaches=await page.evaluate(()=>caches.keys());
check(fullCaches.includes('snd-full-guide-3.6.1-r1'),`Full Companion cache did not install: ${JSON.stringify(fullCaches)}`);

await context.setOffline(true);
await page.goto(`${base}#/guided`, { waitUntil: 'domcontentloaded' }).catch(() => {});
check(await page.getByText('What happened that round?').isVisible().catch(() => false), 'Installed app shell did not open Guided while offline');
await context.setOffline(false);

await browser.close();
if (failures.length) {
  console.error(`FAILED: ${failures.length} browser check(s)`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}
console.log('PASS: Guided routes, immediate result hierarchy, lesson persistence, five-round mission persistence/completion, 320px layout, 44px tap targets, and offline navigation.');
