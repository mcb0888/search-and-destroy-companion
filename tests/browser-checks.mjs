import { chromium } from 'playwright';

const base = process.env.APP_URL || 'http://127.0.0.1:4173/full/index.html';
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_BROWSER_PATH ? { executablePath: process.env.PLAYWRIGHT_BROWSER_PATH } : {})
});
// A narrow touch viewport exercises the mobile layout without Chromium's desktop/mobile
// coordinate emulation mismatch, which can misreport fixed-nav hit targets in headless mode.
const context = await browser.newContext({ viewport: { width: 320, height: 568 }, hasTouch: true });
const page = await context.newPage();
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
page.on('pageerror', error => failures.push(`Full Companion page error: ${error.message}`));
page.on('console', message => { if (message.type() === 'error') failures.push(`Full Companion console error: ${message.text()}`); });

await page.goto(`${base}#/companion`, { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });
check(await page.getByRole('heading', { name: 'What happened—or what do you need next?' }).isVisible(), 'Better Judgment did not render');
check(await page.getByLabel('What happened?').isVisible(), 'Better Judgment message field is missing');
check((await page.locator('[data-chat-example]').count()) === 5, 'Companion low-demand examples are missing');
check((await page.getByText('Local by default', { exact: true }).count()) === 0, 'Main screen still exposes the old local-default disclaimer pill');
check((await page.getByText('AI off', { exact: true }).count()) === 0, 'Main screen still exposes the old AI-off disclaimer pill');
check(await page.getByRole('button', { name: /Add details/ }).isVisible(), 'Optional match details are not explained on the main screen');
const retiredHelperLabels = [['NE','RV'], ['RE','CON']].map(parts => parts.join(''));
check(await page.locator('body').evaluate((body, labels) => labels.every(label => !body.innerText.includes(label)), retiredHelperLabels), 'Companion still exposes a retired helper label');

const cases = [
  ['I died first pushing in', /release sprint and aim/i],
  ['I aced once going mid, then kept dying there', /change exactly one part/i],
  ['I lost track of which bomb site was which', /read the A and B markers/i],
  ['I got shot from somewhere and did not know where', /clear the nearest opening/i],
  ['I rushed because I thought my teammate had that angle', /visibly aimed at that opening/i]
];
for (const [account, expectedCheck] of cases) {
  await page.goto(`${base}#/companion`);
  await page.evaluate(() => localStorage.removeItem('snd-match-chat-v1'));
  await page.reload();
  await page.getByLabel('What happened?').fill(account);
  await page.getByRole('button', { name: 'Send', exact: true }).click();
  check(await page.getByText('Better Judgment', { exact: true }).last().isVisible(), `Better Judgment label missing for: ${account}`);
  check(await page.getByText('What probably got you', { exact: true }).last().isVisible(), `Likely-cause label missing for: ${account}`);
  check(await page.getByText('Try this next', { exact: true }).last().isVisible(), `Next-action label missing for: ${account}`);
  check(await page.locator('.companion-message').last().evaluate((node, retired) => retired.every(label => !node.innerText.includes(label)), ['Player report','Possible explanation · inference','Still unknown','One next adjustment']), `Technical evidence labels remain visible for: ${account}`);
  check(await page.getByText(expectedCheck).isVisible(), `Expected next-round check missing for: ${account}`);
  check((await page.locator('.companion-message').last().locator('.next-adjustment p').count()) === 1, `Companion returned more than one next adjustment for: ${account}`);
}

await page.goto(`${base}#/companion`);
await page.getByLabel('What happened?').fill('');
await page.getByRole('button', { name: 'Send', exact: true }).click();
check(await page.getByText(/Use one outside cue/).isVisible(), 'Blank Companion message did not return one low-demand outside cue');
await page.getByRole('button', { name: /Add details/ }).click();
await page.getByLabel('Map or visible landmark').fill('Raid, near pool');
await page.getByLabel('Side').selectOption({ label: 'Attacking' });
await page.getByRole('button', { name: 'Save match details' }).click();
await page.getByLabel('What happened?').fill('I lost track of which bomb site was which');
await page.getByRole('button', { name: 'Send', exact: true }).click();
check(await page.getByText(/Map\/landmark: Raid, near pool · Side: Attacking/).isVisible(), 'Deliberately supplied match details were not preserved');
await page.getByRole('button', { name: 'Save this tip' }).last().click();
await page.getByText('More tools').click();
await page.getByRole('button', { name: /Saved tips/ }).click();
await page.waitForURL(/#\/memory$/);
await page.reload();
const activeMemoryRows = await page.locator('.memory-row').count();
check(activeMemoryRows === 1, 'Explicitly saved tip is missing');
await page.reload();
check((await page.locator('.memory-row').count()) === 1, 'Saved tip did not persist after reload');
await page.goto(`${base}#/companion`);
check((await page.locator('.chat-message').count()) > 2, 'Local conversation did not persist after reload');
check(!(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)), 'Companion overflows at 320px');
const companionSmallTargets = await page.locator('button:visible,summary:visible').evaluateAll(nodes => nodes.filter(node => {
  const box = node.getBoundingClientRect();
  return box.width < 44 || box.height < 44;
}).map(node => ({ text: node.textContent.trim(), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height })));
check(companionSmallTargets.length === 0, `Companion tap targets smaller than 44px: ${JSON.stringify(companionSmallTargets)}`);

await page.goto(`${base}#/round-read`);
check(await page.getByRole('heading', { name: 'What happened—or what do you need next?' }).isVisible(), 'Legacy round-read route does not resolve to the Companion');

// Deliberately selected sources: no folder crawling, no automatic provider request.
await page.goto(`${base}#/sources`);
await page.locator('#sourceFile').setInputFiles({ name: 'round-notes.txt', mimeType: 'text/plain', buffer: Buffer.from('Raid attack: I crossed open ground while sprinting. Next check: stop at cover before the crossing.') });
check(await page.getByText('Local preview', { exact: true }).isVisible(), 'Selected text source did not preview locally');
await page.getByRole('button', { name: 'Save this text source locally' }).click();
check((await page.locator('.source-row').count()) === 1, 'Selected text source was not saved locally');
await page.getByRole('button', { name: 'Activate', exact: true }).click();
await page.reload();
check(await page.getByText(/Active for optional briefing/).isVisible(), 'Selected source activation did not persist');
await page.goto(`${base}#/companion`);
await page.getByLabel(/Include excerpts from selected sources/).check();
await page.getByLabel('What happened?').fill('What does my source say about the crossing?');
await page.getByRole('button', { name: 'Send', exact: true }).click();
check(await page.getByText('What your saved info says', { exact: true }).last().isVisible(), 'Active local source was not labeled in the answer');
check(await page.getByText(/stop at cover before the crossing/i).last().isVisible(), 'Bounded local source excerpt was not used');
await page.goto(`${base}#/sources`);

const onePixelPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64');
await page.locator('#sourceFile').setInputFiles({ name: 'selected-frame.png', mimeType: 'image/png', buffer: onePixelPng });
await page.getByRole('button', { name: 'Analyze selected image' }).click();
check(await page.getByText(/Confirm that this selected image/).isVisible(), 'Image analysis ran without explicit selection confirmation');
await page.getByLabel(/I choose to send only this selected image/).check();
await page.getByRole('button', { name: 'Analyze selected image' }).click();
check(await page.getByText(/AI is off/).last().isVisible(), 'Image analysis did not respect the default AI-off boundary');
await page.locator('#sourceFile').setInputFiles({ name: 'match-clip.mp4', mimeType: 'video/mp4', buffer: Buffer.from('not-a-real-video') });
check(await page.getByText(/Full video understanding is not implemented/i).isVisible(), 'Clip selection does not state the implemented analysis boundary');

// Structured local match records and bounded record questions.
await page.goto(`${base}#/records`);
await page.getByLabel('Map or landmark').fill('Raid');
await page.getByLabel('Side').selectOption({ label: 'Attacking' });
await page.getByLabel('Score').fill('4–6');
await page.getByLabel('Recurring issue').fill('Crossed while sprinting');
await page.getByLabel('One next drill').fill('Stop at cover before the first crossing');
await page.getByRole('button', { name: 'Save match record' }).click();
check((await page.locator('.record-row').count()) === 1, 'Match record was not saved locally');
await page.reload();
check((await page.locator('.record-row').count()) === 1, 'Match record did not persist after reload');
await page.goto(`${base}#/companion`);
await page.getByLabel('What happened?').fill('What do my match records say I keep doing wrong?');
await page.getByRole('button', { name: 'Send', exact: true }).click();
check(await page.getByText(/appears in 1 of the 1 matching records/).last().isVisible(), 'Better Judgment did not answer from the explicitly saved match record');
check(await page.getByText(/Crossed while sprinting/).last().isVisible(), 'Companion record answer did not preserve the recorded issue');

// Optional provider bridge: one request only after configuration and per-message choice.
let bridgeRequests = 0;
await page.route('**/test-companion-bridge', async route => {
  bridgeRequests += 1;
  const body = route.request().postDataJSON();
  await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({
    known: [`Task: ${body.task}`], inference: 'The supplied report may show a timing mistake.',
    missing: 'No clip was supplied.', decision: 'Check the timing.', next: 'Stop at the last cover and confirm the route before crossing.'
  }) });
});
await page.goto(`${base}#/provider`);
await page.getByLabel('AI mode').selectOption({ label: 'Configured secure/local bridge' });
await page.getByLabel('Bridge endpoint').fill(`${new URL(base).origin}/test-companion-bridge`);
await page.getByLabel(/Show an opt-in re-entry card/).check();
await page.getByRole('button', { name: 'Save local capability settings' }).click();
check(bridgeRequests === 0, 'Saving provider settings triggered a provider request');
await page.goto(`${base}#/companion`);
await page.getByLabel('What happened?').fill('I crossed before checking the route');
await page.getByRole('button', { name: 'Send', exact: true }).click();
check(bridgeRequests === 0, 'Configured bridge ran without the per-message choice');
await page.getByLabel(/Use configured openai bridge/).check();
await page.getByLabel('What happened?').fill('Check this one report with the bridge');
await page.getByRole('button', { name: 'Send', exact: true }).click();
check(bridgeRequests === 1, `Explicit bridge request count must be one; found ${bridgeRequests}`);
const bridgeLabel = page.getByText('Stop at the last cover and confirm the route before crossing.', { exact: true }).last();
await bridgeLabel.waitFor();
check(await bridgeLabel.isVisible(), 'Explicit bridge response was not shown');

await page.goto(`${base}#/sources`);
await page.locator('#sourceFile').setInputFiles({ name: 'explicit-frame.png', mimeType: 'image/png', buffer: onePixelPng });
await page.getByLabel(/I choose to send only this selected image/).check();
await page.getByRole('button', { name: 'Analyze selected image' }).click();
await page.getByText('Directly visible · provider report', { exact: true }).waitFor();
check(bridgeRequests === 2, `Explicit image analysis must add exactly one bridge request; found ${bridgeRequests}`);
check(await page.getByText('Directly visible · provider report', { exact: true }).isVisible(), 'Explicit image response did not separate provider-reported visibility');

// Listen once uses only a foreground, manually started recognition object.
await page.goto(`${base}#/companion`);
await page.evaluate(() => {
  window.SpeechRecognition = class {
    start(){ setTimeout(() => this.onresult?.({ results: [[{ transcript: 'I reloaded in the open' }]] }), 0); }
    stop(){ this.onend?.(); }
  };
});
await page.getByRole('button', { name: 'Listen once' }).click();
await page.getByText('I reloaded in the open', { exact: true }).last().waitFor();
check(await page.getByText('I reloaded in the open', { exact: true }).last().isVisible(), 'Listen-once transcript did not enter the local conversation');
await page.goto(`${base}#/home`);
check((await page.getByRole('heading', { name: 'Pick up the useful thread.' }).count()) === 0, 'Re-entry appeared without an active drill or explicitly saved focus');

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

await page.goto(`${base}#/armory`, { waitUntil: 'domcontentloaded' });
check(await page.getByRole('heading', { name: 'A full S&D dossier for every firearm.' }).isVisible(), 'Full Armory did not render');
check(await page.locator('.armory-row').count() === 125, 'Full Armory does not render all 125 firearms');
const armoryCoverage = await page.locator('.armory-count').innerText();
check(armoryCoverage.includes('125') && armoryCoverage.includes('firearms covered'), 'Full Armory coverage count is missing');
await page.locator('#armorySearch').fill('Locus');
check(await page.locator('.armory-row').count() === 1, 'Armory search did not narrow to Locus');
await page.locator('.armory-row').click();
await page.waitForURL(/#\/weapon\/locus$/);
await page.getByRole('heading', { name: 'Locus', exact: true }).waitFor();
check(await page.getByRole('heading', { name: 'Locus', exact: true }).isVisible(), 'Locus detail route did not render');
check(await page.locator('.armory-attachments li').count() === 5, 'Locus detail does not contain five attachments');
check(await page.locator('.reasoned-attachments li span').count() === 5, 'Locus detail does not explain every attachment');
check(await page.getByRole('heading', { name: 'Complete class around the firearm' }).isVisible(), 'Locus detail is missing its complete class');
check(await page.getByRole('heading', { name: 'How it fits fingers on a phone' }).isVisible(), 'Locus detail is missing finger-layout guidance');
check(await page.getByRole('heading', { name: 'Tradeoffs to accept' }).isVisible(), 'Locus detail is missing tradeoffs');
check(await page.getByRole('heading', { name: 'What “recommended” means here' }).isVisible(), 'Locus detail is missing its recommendation boundary');
check(await page.getByRole('heading', { name: 'Visible laser check' }).isVisible(), 'Laser-bearing build is missing the visible-laser warning');
check(await page.getByRole('link', { name: /Open .*build source/i }).isVisible(), 'Weapon detail is missing its evidence source');
await page.reload();
check(await page.getByRole('heading', { name: 'Locus', exact: true }).isVisible(), 'Direct weapon route did not survive refresh');
await page.goto(`${base}#/armory`);
await page.getByRole('button', { name: 'Shotgun', exact: true }).click();
check(await page.locator('.armory-row').count() === 12, 'Shotgun filter does not show the expected 12 firearms');
await page.goto(`${base}#/armory/role/precision-pick`);
check(await page.getByRole('heading', { name: 'Precision pick weapons' }).isVisible(), 'Armory role route did not render');
check(await page.locator('.armory-row').count() > 10, 'Precision role group did not include the expected weapon family');
await page.reload();
check(await page.getByRole('heading', { name: 'Precision pick weapons' }).isVisible(), 'Armory role route did not survive refresh');
check(!(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)), 'Armory overflows at 320px');
const armorySmallTargets = await page.locator('button:visible,a:visible').evaluateAll(nodes => nodes.filter(node => {
  const box = node.getBoundingClientRect();
  return box.width < 44 || box.height < 44;
}).map(node => ({ text: node.textContent.trim(), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height })));
check(armorySmallTargets.length === 0, `Armory tap targets smaller than 44px: ${JSON.stringify(armorySmallTargets)}`);
await page.goto(`${base}#/library`);
await page.locator('#globalSearch').fill('AK117');
check(await page.getByText('AK117', { exact: true }).isVisible(), 'Global search does not include Armory firearms');

// Audit the complete visible product surface, including the QQ9 dossier. Its
// official CODM attachment name is allowed; retired helper identities are not.
const productAuditRoutes = ['home','companion','sources','records','memory','provider','guided','quick','learn','armory','weapon/qq9','fights','manual','practice','terms','notes','library','about'];
const officialAttachmentName = ['RTC', ['Re','con'].join(''), 'Tac', 'Long'].join(' ');
for (const route of productAuditRoutes) {
  await page.goto(`${base}#/${route}`, { waitUntil: 'domcontentloaded' });
  const visibleText = (await page.locator('body').innerText()).replaceAll(officialAttachmentName, '');
  for (const label of retiredHelperLabels) check(!new RegExp(`\\b${label}\\b`, 'i').test(visibleText), `Route #/${route} exposes a retired helper label`);
}

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
check(fullCaches.includes('snd-full-guide-4.0.0-r1'),`Full Companion cache did not install: ${JSON.stringify(fullCaches)}`);

await context.setOffline(true);
await page.goto(`${base}#/companion`, { waitUntil: 'domcontentloaded' }).catch(() => {});
check(await page.getByRole('heading', { name: 'What happened—or what do you need next?' }).isVisible().catch(() => false), 'Installed app shell did not open Better Judgment while offline');
await context.setOffline(false);

const desktopContext = await browser.newContext({ viewport: { width: 1024, height: 768 } });
const desktopPage = await desktopContext.newPage();
desktopPage.on('pageerror', error => failures.push(`Full Companion desktop page error: ${error.message}`));
await desktopPage.goto(`${base}#/companion`, { waitUntil: 'networkidle' });
await desktopPage.getByLabel('What happened?').fill('I got shot from somewhere and did not know where');
await desktopPage.getByRole('button', { name: 'Send', exact: true }).click();
check((await desktopPage.locator('.conversation').count()) === 1, 'Desktop Companion does not use one coherent conversation');
check((await desktopPage.locator('.duo-grid:visible').count()) === 0, 'Desktop Companion still exposes the old split-panel presentation');
check(!(await desktopPage.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)), 'Desktop Companion has horizontal overflow');
await desktopContext.close();

await browser.close();
if (failures.length) {
  console.error(`FAILED: ${failures.length} browser check(s)`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}
console.log('PASS: Better Judgment examples, concise likely-cause/next-action output, optional match details, explicit saved-tip persistence, landmark orientation, Guided routes, lesson persistence, five-round mission persistence/completion, 320px layout, 44px tap targets, and offline navigation.');
