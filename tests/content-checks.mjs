Warning: truncated output (original token count: 6302)
Total output lines: 314

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const appRoot = path.join(root, 'full');
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};
const pngSize = file => {
  const bytes = fs.readFileSync(file);
  return bytes.subarray(1, 4).toString() === 'PNG' ? [bytes.readUInt32BE(16), bytes.readUInt32BE(20)] : [0, 0];
};

function loadData(file, globalName) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(appRoot, file), 'utf8'), context, { filename: file });
  check(context.window[globalName], `${file} must define window.${globalName}`);
  return context.window[globalName];
}

const manual = loadData('data.js', 'APP_DATA');
const learn = loadData('learn_data.js', 'LEARN_DATA');
const fights = loadData('fights_data.js', 'FIGHT_DATA');
const guided = loadData('guided_data.js', 'GUIDED_DATA');
const sideline = loadData('sideline_data.js', 'SIDELINE_DATA');
const armory = loadData('armory_data.js', 'ARMORY_DATA');
const learnSource = fs.readFileSync(path.join(appRoot, 'learn_data.js'), 'utf8');
const app = fs.readFileSync(path.join(appRoot, 'app.js'), 'utf8');
const companionSource = fs.readFileSync(path.join(appRoot, 'companion.js'), 'utf8');
const index = fs.readFileSync(path.join(appRoot, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(appRoot, 'sw.js'), 'utf8');
const polish = fs.readFileSync(path.join(appRoot, 'polish.js'), 'utf8');
const versionText = fs.readFileSync(path.join(appRoot, 'VERSION.txt'), 'utf8');
const readme = fs.readFileSync(path.join(appRoot, 'README.txt'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(appRoot, 'manifest.webmanifest'), 'utf8'));
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
check(!fs.existsSync(path.join(appRoot, 'RESEARCH_NOTES.txt')), 'Rejected map-era research notes must not remain publicly deployable');

// The current product is one visible Companion, not a presentation built around
// the two retired helper identities. The only permitted matching word is the
// exact CODM attachment name, which must remain accurate in the Armory.
const retiredHelperLabels = [['NE','RV'], ['RE','CON']].map(parts => parts.join(''));
const officialAttachmentName = ['RTC', ['Re','con'].join(''), 'Tac', 'Long'].join(' ');
const deployableTextFiles = fs.readdirSync(appRoot, { withFileTypes: true })
  .filter(entry => entry.isFile() && /\.(?:html|css|js|txt|json|webmanifest)$/i.test(entry.name))
  .map(entry => [entry.name, fs.readFileSync(path.join(appRoot, entry.name), 'utf8')]);
for (const [name, rawText] of deployableTextFiles) {
  const text = name === 'armory_data.js' ? rawText.replaceAll(officialAttachmentName, '') : rawText;
  for (const label of retiredHelperLabels) check(!new RegExp(`\\b${label}\\b`, 'i').test(text), `${name} contains a retired helper label`);
}

const required = (item, fields, label) => {
  for (const field of fields) check(item?.[field] !== undefined && item?.[field] !== '', `${label} is missing ${field}`);
};
const unique = (items, key, label) => {
  const seen = new Set();
  for (const item of items) {
    const value = item[key];
    check(!seen.has(value), `${label} has duplicate ${key}: ${value}`);
    seen.add(value);
  }
};

const questions = guided.questions || {};
const results = guided.results || {};
const missions = guided.missions || [];
const lessons = learn.lessons || [];
const quick = learn.quick || [];
const terms = [...(learn.terms || [])];
const operations = manual.operations || [];
const dictionary = manual.dictionary || [];
const sidelineRules = sideline.rules || [];
const weapons = armory.weapons || [];

check(questions.start, 'Guided questions must include start');
for (const [id, question] of Object.entries(questions)) {
  required(question, ['prompt', 'options'], `Question ${id}`);
  check(Array.isArray(question.options) && question.options.length > 0, `Question ${id} must have options`);
  for (const [index, option] of question.options.entries()) {
    required(option, ['label'], `Question ${id} option ${index + 1}`);
    check(Boolean(option.next) !== Boolean(option.result), `Question ${id} option "${option.label}" must have exactly one of next or result`);
    if (option.next) check(questions[option.next], `Question ${id} points to missing question ${option.next}`);
    if (option.result) check(results[option.result], `Question ${id} points to missing result ${option.result}`);
  }
  if (question.back) check(questions[question.back], `Question ${id} has missing back target ${question.back}`);
}

const reachableQuestions = new Set();
const reachableResults = new Set();
function walkQuestion(id) {
  if (reachableQuestions.has(id) || !questions[id]) return;
  reachableQuestions.add(id);
  for (const option of questions[id].options || []) {
    if (option.next) walkQuestion(option.next);
    if (option.result) reachableResults.add(option.result);
  }
}
walkQuestion('start');
for (const id of Object.keys(questions)) check(reachableQuestions.has(id), `Guided question is unreachable: ${id}`);
for (const id of Object.keys(results)) check(reachableResults.has(id), `Guided result is unreachable: ${id}`);

unique(missions, 'id', 'Missions');
unique(lessons, 'id', 'Lessons');
unique(fights, 'id', 'Fights');
unique(quick, 'id', 'Quick help');
unique(operations, 'id', 'Operations');

const missionIds = new Set(missions.map(x => x.id));
const lessonIds = new Set(lessons.map(x => x.id));
const fightIds = new Set(fights.map(x => x.id));
const operationIds = new Set(operations.map(x => Number(x.id)));
const quickIds = new Set(quick.map(x => x.id));
const termIds = new Set();
const slug = value => String(value).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
for (const term of terms) termIds.add(term.id || slug(term.term));
for (const entry of dictionary) termIds.add(slug(entry.term));
for (const term of ['ADS', '1-Tap ADS Fire', 'Hip Fire', 'Tap to ADS', 'Tap and Hold ADS']) check(termIds.has(slug(term)), `Full dictionary is missing ${term}`);

for (const [id, result] of Object.entries(results)) {
  required(result, ['title', 'action', 'likely', 'why', 'mission'], `Result ${id}`);
  check(missionIds.has(result.mission), `Result ${id} points to missing mission ${result.mission}`);
  if (result.lesson) check(lessonIds.has(result.lesson), `Result ${id} points to missing lesson ${result.lesson}`);
  if (result.fight) check(fightIds.has(result.fight), `Result ${id} points to missing fight ${result.fight}`);
  if (result.operation) check(operationIds.has(Number(result.operation)), `Result ${id} points to missing operation ${result.operation}`);
  for (const term of result.terms || []) check(termIds.has(term), `Result ${id} points to missing term ${term}`);
}

for (const mission of missions) {
  required(mission, ['id', 'title', 'instruction'], `Mission ${mission.id}`);
  if (mission.route) {
    const [rootName, target] = mission.route.split('/');
    const valid =
      (rootName === 'lesson' && lessonIds.has(target)) ||
      (rootName === 'fight' && fightIds.has(target)) ||
      (rootName === 'operation' && operationIds.has(Number(target))) ||
      (rootName === 'quick' && quickIds.has(target));
    check(valid, `Mission ${mission.id} has invalid route ${mission.route}`);
  }
}

for (const lesson of lessons) {
  required(lesson, ['id', 'title', 'subtitle', 'takeaway', 'sections', 'mistakes'], `Lesson ${lesson.id}`);
  check(Array.isArray(lesson.sections) && lesson.sections.length > 0, `Lesson ${lesson.id} needs sections`);
  for (const term of lesson.terms || []) check(termIds.has(term), `Lesson ${lesson.id} points to missing term ${term}`);
}
for (const item of quick) {
  require…2302 tokens truncated…nt stat/build-page records');
check(weapons.filter(weapon=>weapon.statDeltas.length===6).length>=35,'Armory needs at least 35 exact six-rating build comparisons');
for(const name of ['M4','RPD']){const weapon=weapons.find(item=>item.name===name);check(weapon?.sourceKind==='Stat-informed S&D adaptation'&&!weapon.statDeltas.length,`${name} manual adaptation must not inherit another attachment set's built ratings`)}
for (const name of ['M4', 'AK117', 'Locus', 'Cronen Squall', 'FSS Hurricane', 'SO-14', 'Machine Pistol', 'Nail Gun']) check(weapons.some(x => x.name === name), `Armory is missing ${name}`);
check(armory.meta?.build === 'MB-SNDC-2026-1029-048', 'Armory build number is not synchronized');
check(armory.meta?.scope?.includes('current page exposes them')&&armory.meta?.scope?.includes('live Global Multiplayer Gunsmith'), 'Armory must state its current-page and live-game verification boundary');
check(armory.meta?.ratingBoundary?.includes('not physical damage'), 'Armory must distinguish displayed ratings from physical stats');
check(Object.keys(armory.meta?.roles||{}).length===7,'Armory must define the complete role system');

const declaredRoutes = new Set(['home', 'companion', 'round-read', 'sources', 'records', 'memory', 'provider', 'guided', 'quick', 'learn', 'path', 'lesson', 'armory', 'weapon', 'fights', 'fight', 'manual', 'operation', 'practice', 'terms', 'term', 'notes', 'library', 'about']);
for (const match of app.matchAll(/data-go="([^"]+)"/g)) {
  if (match[1].includes('${')) continue;
  const route = match[1];
  check(declaredRoutes.has(route.split('/')[0]), `app.js contains unsupported route root: ${match[1]}`);
}
for (const rootName of declaredRoutes) check(app.includes(`root==='${rootName}'`) || ['companion','round-read','sources','records','memory','provider'].includes(rootName) || rootName === 'notes' || rootName === 'about', `Router does not visibly handle ${rootName}`);
for (const match of companionSource.matchAll(/data-companion-go="([^"]+)"/g)) {
  if (match[1].includes('${')) continue;
  check(declaredRoutes.has(match[1].split('/')[0]), `companion.js contains unsupported route root: ${match[1]}`);
}

const versionMatch = versionText.match(/Version\s+([0-9.]+)/);
const buildMatch = versionText.match(/Build\s+([A-Z0-9-]+)/);
check(versionMatch, 'VERSION.txt must contain Version');
check(buildMatch, 'VERSION.txt must contain Build');
const version = versionMatch?.[1];
const build = buildMatch?.[1];
for (const [name, text] of [['README.txt', readme], ['index.html', index], ['app.js', app], ['companion.js', companionSource], ['data.js', fs.readFileSync(path.join(appRoot, 'data.js'), 'utf8')], ['learn_data.js', learnSource], ['fights_data.js', fs.readFileSync(path.join(appRoot, 'fights_data.js'), 'utf8')], ['guided_data.js', fs.readFileSync(path.join(appRoot, 'guided_data.js'), 'utf8')], ['sideline_data.js', sidelineSource], ['armory_data.js', fs.readFileSync(path.join(appRoot, 'armory_data.js'), 'utf8')], ['polish.js', polish]]) {
  check(text.includes(build), `${name} does not contain build ${build}`);
}
check(readme.includes(`Version ${version}`), `README.txt does not contain version ${version}`);
check(app.includes(`Version ${version}`), `app.js does not contain version ${version}`);
check(packageJson.version === version, `package.json version ${packageJson.version} does not match ${version}`);
check(manifest.description?.length > 20, 'Manifest needs a meaningful description');
check(manifest.id === './' && manifest.scope === './', 'Full manifest needs a stable id and explicit scope');
for (const size of ['192x192', '512x512']) check(manifest.icons?.some(icon => icon.sizes === size && icon.type === 'image/png'), `Full manifest is missing ${size} PNG icon`);
for (const [name, width, height] of [['icon-192.png', 192, 192], ['icon-512.png', 512, 512]]) check(pngSize(path.join(appRoot, name)).join('x') === `${width}x${height}`, `${name} must be a ${width}x${height} PNG`);
check(index.includes('property="og:title"') && index.includes('rel="canonical"'), 'Full Companion needs social and canonical metadata');
check(index.includes('property="og:image"') && index.includes('summary_large_image'), 'Full Companion needs a large social-sharing preview');
check(index.includes('Content-Security-Policy') && index.includes('strict-origin-when-cross-origin'), 'Full Companion needs static-site security and referrer policies');
check(index.includes('class="skip-link"') && index.includes('id="main" tabindex="-1"'), 'Full Companion needs a skip link and focusable main region');
check(index.includes('role="status"') && index.includes('aria-live="polite"'), 'Toast feedback must be announced');
check(index.includes('S&amp;D Field Guide') && index.includes('>Judgment</button>') && !index.includes('S&amp;D Backroom'), 'Full Guide must use its field-guide identity and Better Judgment navigation');
check(index.includes('companion.js?v=4.1.0-r1'), 'Full Guide must load the versioned Companion engine');
check(polish.includes('aria-current'), 'Polish layer must expose active navigation state');
check(polish.includes('document.title'), 'Polish layer must create route-specific document titles');
check(app.includes('function focusView()') && app.includes('focusView()'), 'Full routes must move focus to the new page heading');
check(app.includes('role="progressbar"') && app.includes('aria-valuenow'), 'Lesson progress needs progressbar semantics');
check(app.includes("root==='armory'&&a==='role'")&&app.includes('renderArmoryDeep(b)'), 'Router must support durable Armory role routes');
for(const section of ['Five-part Gunsmith','Complete class around the firearm','How it fits fingers on a phone','Tradeoffs to accept','What "recommended" means here'])check(app.includes(section),`Backroom weapon dossier is missing ${section}`);

const cacheMatch = sw.match(/const CACHE='([^']+)'/);
check(cacheMatch, 'sw.js must declare a cache name');
check(cacheMatch?.[1].includes(version), `Service-worker cache must include version ${version}`);
check(sw.includes("event.data?.type==='SKIP_WAITING'"), 'Service worker must handle the visible Update control');
const assetMatch = sw.match(/const ASSETS=\[(.*?)\];/s);
check(assetMatch, 'sw.js must declare ASSETS');
const assets = assetMatch ? [...assetMatch[1].matchAll(/'([^']+)'/g)].map(x => x[1]) : [];
const referencedAssets = [
  ...[...index.matchAll(/(?:src|href)="([^"#]+)"/g)].map(x => x[1]).filter(x => !/^https?:\/\//.test(x)).map(x => `./${x.replace(/^\.\//, '')}`),
  './index.html', './VERSION.txt'
];
for (const asset of new Set(referencedAssets)) check(assets.includes(asset), `Service worker does not cover ${asset}`);
for (const asset of ['./icon-192.png', './icon-512.png']) check(assets.includes(asset), `Service worker does not cover ${asset}`);
for (const asset of assets.filter(x => x.startsWith('./') && x !== './')) {
  const filePath = asset.slice(2).split('?')[0];
  check(fs.existsSync(path.join(appRoot, filePath)), `Service worker references missing file ${asset}`);
}

if (failures.length) {
  console.error(`FAILED: ${failures.length} content check(s)`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}

console.log(`PASS: ${Object.keys(questions).length} Guided questions and ${Object.keys(results).length} results are reachable.`);
console.log(`PASS: ${missions.length} missions, ${lessons.length} lessons, ${fights.length} fights, ${quick.length} quick-help cards, and ${operations.length} operations are internally valid.`);
console.log(`PASS: ${weapons.length} firearm records, category counts, five-part builds, sources, and special configurations are valid.`);
console.log(`PASS: ${sidelineRules.length} local Companion rules, explicit privacy boundaries, dictionary links, route targets, required fields, version/build/cache synchronization, and ${assets.length} offline assets are valid.`);

