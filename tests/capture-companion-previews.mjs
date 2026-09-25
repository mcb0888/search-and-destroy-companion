import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { chromium } from 'playwright';

const base = process.env.APP_URL || 'http://127.0.0.1:4173/full/index.html';
const output = resolve(process.env.PREVIEW_DIR || '../handoff/previews');
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_BROWSER_PATH ? { executablePath: process.env.PLAYWRIGHT_BROWSER_PATH } : {})
});
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
const page = await context.newPage();

await mkdir(output, { recursive: true });
await page.goto(`${base}#/companion`, { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });
await page.evaluate(() => document.activeElement?.blur());
await page.screenshot({ path: resolve(output, 'Full_4.0_Better_Judgment_Start_Mobile.png') });

await page.getByLabel('What happened?').fill('I aced once going mid, then kept going mid every round and dying there');
await page.getByRole('button', { name: 'Send', exact: true }).click();
await page.getByText('Try this next', { exact: true }).last().waitFor();
await page.locator('.companion-message').last().scrollIntoViewIfNeeded();
await page.evaluate(() => document.activeElement?.blur());
await page.waitForTimeout(2600);
await page.screenshot({ path: resolve(output, 'Full_4.0_Better_Judgment_Result_Mobile.png') });

await page.goto(`${base}#/lesson/decision-not-result`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.activeElement?.blur());
await page.screenshot({ path: resolve(output, 'Full_4.0_Result_Versus_Decision_Lesson_Mobile.png'), fullPage: true });

await browser.close();
console.log(`PASS: wrote mobile Better Judgment previews to ${dirname(resolve(output, 'preview.png'))}`);
