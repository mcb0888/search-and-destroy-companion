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

await page.goto(`${base}#/round-read`, { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });
check(await page.getByRole('heading', { name: 'What happened?' }).isVisible(), 'Sideline start did not render');
check(await page.getByLabel('Round account').isVisible(), 'Sideline round account field is missing');
check((await page.locator('[data-sideline-example]').count()) === 4, 'Sideline example fragments are missing');
check(await page.getByText('No automatic saving', { exact: true }).isVisible(), 'Sideline does not state the automatic-saving boundary');

const cases = [
  ['I died first pushing in', /release sprint and aim/i],
  ['I lost track of which bomb site was which', /read the A and B markers/i],
  ['I got shot from somewhere and did not know where', /clear the nearest opening/i],
  ['I rushed because I thought my teammate had that angle', /visibly aimed at that opening/i]
];
for (const [account, expectedCheck] of cases) {
  await page.goto(`${base}#/round-read`);
  await page.getByLabel('Round account').fill(account);
  await page.getByRole('button', { name: 'Read this round' }).click();
  check(await page.getByText('Known from your account', { exact: true }).isVisible(), `NERV known section missing for: ${account}`);
  check(await page.getByText('Still missing', { exact: true }).isVisible(), `NERV missing section missing for: ${account}`);
  check(await page.getByText('Possible, not confirmed', { exact: true }).isVisible(), `NERV inference label missing for: ${account}`);
  check(await page.getByText('One decision point', { exact: true }).isVisible(), `RECON decision missing for: ${account}`);
  check(await page.getByText('One next-round check · beginner-safe default', { exact: true }).isVisible(), `RECON check missing for: ${account}`);
  check(await page.getByText(expectedCheck).isVisible(), `Expected next-round check missing for: ${account}`);
  check((await page.locator('.next-check p').count()) === 1, `RECON returned more than one next-round check for: ${account}`);
  const resultTop = await page.locator('#sidelineResultTitle').evaluate(node => node.getBoundingClientRect().top);
  check(resultTop >= 60, `Sideline result heading is hidden under the sticky header for: ${account}`);
}

await page.goto(`${base}#/round-read`);
await page.getByLabel('Round account').fill('');
await page.getByRole('button', { name: 'Read this round' }).click();
check(await page.getByText(/Start with one outside cue/).isVisible(), 'Blank Sideline account did not return one low-demand outside cue');
await page.getByLabel('Round account').fill('I lost track of which bomb site was which');
await page.getByText('Add optional context').click();
await page.getByLabel('Map or landmark').fill('Raid, near pool');
await page.getByLabel('Side').selectOption({ label: 'Attacking' });
await page.getByRole('button', { name: 'Read this round' }).click();
check(await page.getByText('Map: Raid, near pool', { exact: true }).isVisible(), 'Deliberately supplied context was not reflected by NERV');
const rawAccount = 'I lost track of which bomb site was which';
check(!JSON.stringify(await page.evaluate(() => ({ ...localStorage }))).includes(rawAccount), 'Sideline auto-saved the raw round account before consent');
await page.getByRole('button', { name: 'Save this pattern locally' }).click();
const storedPattern = await page.evaluate(() => JSON.parse(localStorage.getItem('snd-sideline-patterns-v1'))?.[0]);
check(Boolean(storedPattern?.decision && storedPattern?.check && storedPattern?.route), 'Explicitly saved Sideline pattern is incomplete');
check(!('account' in (storedPattern || {})) && !('context' in (storedPattern || {})), 'Saved Sideline pattern contains raw account or optional context');
await page.reload();
check(await page.getByText(storedPattern.decision, { exact: true }).isVisible(), 'Saved Sideline pattern did not persist after reload');
check(!(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)), 'Sideline overflows at 320px');
const sidelineSmallTargets = await page.locator('button:visible,summary:visible').evaluateAll(nodes => nodes.filter(node => {
  const box = node.getBoundingClientRect();
  return box.width < 44 || box.height < 44;
}).map(node => ({ text: node.textContent.trim(), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height })));
check(sidelineSmallTargets.length === 0, `Sideline tap targets smaller than 44px: ${JSON.stringify(sidelineSmallTargets)}`);
await page.getByRole('button', { name: 'Remove' }).click();
check(await page.getByText('No patterns saved. The round account above is never saved automatically.', { exact: true }).isVisible(), 'Saved Sideline pattern could not be removed');

await page.goto(`${base}#/lesson/orientation`);
check(await page.getByRole('heading', { name: 'Find A, B, and the first threats' }).isVisible(), 'Landmark orientation lesson route did not render');

await page.goto(`${base}#/guided`, { waitUntil: 'networkidle' });
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
check(fullCaches.includes('snd-full-guide-3.7.0-r1'),`Full Companion cache did not install: ${JSON.stringify(fullCaches)}`);

await context.setOffline(true);
await page.goto(`${base}#/round-read`, { waitUntil: 'domcontentloaded' }).catch(() => {});
check(await page.getByRole('heading', { name: 'What happened?' }).isVisible().catch(() => false), 'Installed app shell did not open the Backroom round read while offline');
await context.setOffline(false);

const desktopContext = await browser.newContext({ viewport: { width: 1024, height: 768 } });
const desktopPage = await desktopContext.newPage();
desktopPage.on('pageerror', error => failures.push(`Full Companion desktop page error: ${error.message}`));
await desktopPage.goto(`${base}#/round-read`, { waitUntil: 'networkidle' });
await desktopPage.getByLabel('Round account').fill('I got shot from somewhere and did not know where');
await desktopPage.getByRole('button', { name: 'Read this round' }).click();
const duoColumns = await desktopPage.locator('.duo-grid').evaluate(node => getComputedStyle(node).gridTemplateColumns.split(' ').length);
check(duoColumns === 2, 'Desktop Sideline does not give NERV and RECON equal-space columns');
check(!(await desktopPage.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)), 'Desktop Sideline has horizontal overflow');
await desktopContext.close();

await browser.close();
if (failures.length) {
  console.error(`FAILED: ${failures.length} browser check(s)`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}
console.log('PASS: Backroom round-read examples, NERV/RECON uncertainty labels, one-check output, opt-in privacy-safe persistence, landmark orientation, Guided routes, lesson persistence, five-round mission persistence/completion, 320px layout, 44px tap targets, and offline navigation.');
