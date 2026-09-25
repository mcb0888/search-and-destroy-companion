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
  required(item, ['id', 'title', 'short', 'action', 'why', 'steps'], `Quick help ${item.id}`);
  for (const term of item.terms || []) check(termIds.has(term), `Quick help ${item.id} points to missing term ${term}`);
}
for (const fight of fights) {
  required(fight, ['id', 'trigger', 'title', 'term', 'summary', 'correction', 'cue', 'mission', 'steps'], `Fight ${fight.id}`);
  check(termIds.has(slug(fight.term)), `Fight ${fight.id} uses undefined term ${fight.term}`);
  for (const operation of fight.relatedOps || []) check(operationIds.has(Number(operation)), `Fight ${fight.id} points to missing operation ${operation}`);
}
for (const operation of operations) {
  required(operation, ['id', 'title', 'problem', 'truth', 'try', 'mission', 'success'], `Operation ${operation.id}`);
}

unique(sidelineRules, 'id', 'Sideline rules');
check(sidelineRules.length >= 18, 'Local Companion needs broad first-version coverage');
check(Array.isArray(sideline.examples) && sideline.examples.length === 4, 'Sideline needs the four low-demand example fragments');
required(sideline.fallback, ['id', 'missing', 'inference', 'decision', 'check', 'route', 'routeLabel', 'terms'], 'Sideline fallback');
const validContentRoute = route => {
  const [rootName, target] = String(route).split('/');
  return (
    (rootName === 'lesson' && lessonIds.has(target)) ||
    (rootName === 'fight' && fightIds.has(target)) ||
    (rootName === 'operation' && operationIds.has(Number(target))) ||
    (rootName === 'quick' && quickIds.has(target)) ||
    (rootName === 'term' && termIds.has(target))
  );
};
for (const rule of [...sidelineRules, sideline.fallback]) {
  required(rule, ['id', 'missing', 'inference', 'decision', 'check', 'route', 'routeLabel', 'terms'], `Sideline rule ${rule.id}`);
  if (rule !== sideline.fallback) check(Array.isArray(rule.keywords) && rule.keywords.length > 0, `Sideline rule ${rule.id} needs keywords`);
  check(validContentRoute(rule.route), `Sideline rule ${rule.id} has invalid route ${rule.route}`);
  for (const term of rule.terms || []) check(termIds.has(term), `Sideline rule ${rule.id} points to missing term ${term}`);
}
check(sidelineRules.some(rule => rule.id === 'site-orientation' && rule.route === 'lesson/orientation'), 'Sideline needs an A/B orientation path');
check(lessonIds.has('orientation'), 'Full guide needs the landmark orientation lesson');
check(lessonIds.has('decision-not-result'), 'Full guide needs a result-versus-decision lesson');
check(sidelineRules.some(rule => rule.id === 'repeat-route' && rule.route === 'lesson/decision-not-result' && rule.commonTrap), 'Repeated-route help must separate one good result from a repeatable decision');
const sidelineSource = fs.readFileSync(path.join(appRoot, 'sideline_data.js'), 'utf8');
const bannedInteractionLanguage = ['drink water', 'take a breath', 'stop, breathe', 'visualize', 'picture yourself', 'imagine the scene', 'mentally rehearse', 'future you'];
for (const phrase of bannedInteractionLanguage) check(!`${sidelineSource}\n${learnSource}\n${companionSource}`.toLowerCase().includes(phrase), `Companion or learning content uses banned interaction language: ${phrase}`);
check(!/https?:\/\//.test(sidelineSource) && !/\bfetch\s*\(|WebSocket|EventSource/.test(sidelineSource), 'Sideline data must not contact an outside service');
for (const key of ['snd-match-session-v1','snd-match-chat-v1','snd-active-memory-v1','snd-selected-sources-v1','snd-match-records-v1','snd-companion-settings-v1']) check(companionSource.includes(key), `Companion is missing local store ${key}`);
check(companionSource.includes("providerMode:'off'"), 'Optional AI must be off by default');
check(companionSource.includes("maxChat:MAX_CHAT") && companionSource.includes('slice(-MAX_CHAT)'), 'Local chat history must have a visible bound');
check(companionSource.includes("clean==='/help'||clean==='/tools'"), 'Companion must support /help and /tools');
check(companionSource.includes("full video analysis is not implemented") || companionSource.includes('Full video analysis is not implemented'), 'Companion must state the full-video boundary');
check(companionSource.includes('confirmImageSend') && companionSource.includes("task,'image-analysis'") === false, 'Visual analysis must require explicit image confirmation');
check(companionSource.includes("bridgeRequest('image-analysis'"), 'Explicit visual-analysis bridge path is missing');
check(!/api[_-]?key|OPENAI_API_KEY|GEMINI_API_KEY|sk-[a-z0-9]/i.test(companionSource), 'Browser Companion must not contain or request a provider key');
check(!/setInterval\s*\(|getDisplayMedia|mediaDevices\.getUserMedia/.test(companionSource), 'Companion must not add continuous capture or background polling');
for (const label of ['Better Judgment','What probably got you','Try this next']) check(companionSource.includes(label), `Better Judgment response is missing ${label}`);
for (const retired of ['Player report','Context on record','Possible explanation · inference','Still unknown','One next adjustment','Local by default','No screen access']) check(!companionSource.includes(retired), `Main Better Judgment source still exposes retired copy: ${retired}`);

unique(weapons, 'id', 'Armory firearms');
unique(weapons, 'name', 'Armory firearm names');
check(weapons.length === 125, `Armory must cover 125 firearms; found ${weapons.length}`);
const expectedCategories = new Map([
  ['Assault Rifle', 37], ['Sniper Rifle', 14], ['Light Machine Gun', 14], ['Submachine Gun', 31],
  ['Shotgun', 12], ['Marksman Rifle', 7], ['Sidearm', 10]
]);
const slotOnly = new Set(['Muzzle', 'Barrel', 'Stock', 'Laser', 'Ammunition', 'Rear Grip', 'Perk', 'Optic', 'Underbarrel', 'Trigger Action']);
for (const [category, expected] of expectedCategories) check(weapons.filter(x => x.category === category).length === expected, `Armory ${category} count must be ${expected}`);
for (const weapon of weapons) {
  required(weapon, ['id', 'name', 'category', 'roleId', 'role', 'cue', 'fingerFit', 'attachments', 'attachmentReasons', 'whyBuild', 'tradeoffs', 'loadout', 'displayStats', 'statDeltas', 'source', 'sourceKind', 'checked', 'status'], `Armory firearm ${weapon.name || 'unknown'}`);
  check(expectedCategories.has(weapon.category), `Armory firearm ${weapon.name} has unsupported category ${weapon.category}`);
  check(weapon.status === 'ready', `Armory firearm ${weapon.name} is not ready`);
  check(Array.isArray(weapon.attachments), `Armory firearm ${weapon.name} attachments must be an array`);
  if (weapon.special) check(weapon.name === 'Nail Gun' && weapon.attachments.length === 1, 'Only the Nail Gun may use the one-line stock configuration');
  else check(weapon.attachments.length === 5, `Armory firearm ${weapon.name} must have five attachments`);
  const normalizedAttachments=weapon.attachments.map(value=>String(value).toLowerCase().replace(/[^a-z0-9]+/g,''));
  check(new Set(normalizedAttachments).size===normalizedAttachments.length,`Armory firearm ${weapon.name} repeats an attachment`);
  check(weapon.attachmentReasons.length === weapon.attachments.length, `Armory firearm ${weapon.name} needs one reason per attachment`);
  check(Array.isArray(weapon.tradeoffs) && weapon.tradeoffs.length > 0, `Armory firearm ${weapon.name} needs tradeoffs`);
  check(Array.isArray(weapon.loadout?.perks) && weapon.loadout.perks.length === 3, `Armory firearm ${weapon.name} needs a complete perk set`);
  for(const field of ['secondary','lethal','tactical'])check(Boolean(weapon.loadout?.[field]),`Armory firearm ${weapon.name} loadout is missing ${field}`);
  check(armory.meta?.roles?.[weapon.roleId], `Armory firearm ${weapon.name} points to missing role ${weapon.roleId}`);
  check(Array.isArray(weapon.statDeltas), `Armory firearm ${weapon.name} stat deltas must be an array`);
  for(const stat of weapon.statDeltas){required(stat,['key','label','base','built','delta'],`Armory firearm ${weapon.name} stat row`);check(stat.built-stat.base===stat.delta,`Armory firearm ${weapon.name} has an incorrect ${stat.label} delta`)}
  check(!weapon.attachments.some(x => slotOnly.has(x)), `Armory firearm ${weapon.name} contains a slot label instead of an attachment`);
  const external = /^https:\/\//.test(weapon.source), archived = weapon.source.startsWith('../guides/');
  check(external || archived, `Armory firearm ${weapon.name} has an invalid source ${weapon.source}`);
  if (archived) check(fs.existsSync(path.join(appRoot, weapon.source)), `Armory firearm ${weapon.name} archived source is missing`);
}
const genericReason='Fills a weapon-specific handling or lethality need in the sourced combination; confirm its exact live description before changing the slot.';
const allAttachmentReasons=weapons.flatMap(weapon=>weapon.attachmentReasons||[]);
const genericReasonRate=allAttachmentReasons.filter(reason=>reason===genericReason).length/allAttachmentReasons.length;
check(genericReasonRate<=0.10,`Armory generic attachment reasoning exceeds 10%: ${(genericReasonRate*100).toFixed(1)}%`);
check(weapons.filter(weapon=>weapon.sourceKind==='Current stat/build page').length>=100,'Armory needs at least 100 current stat/build-page records');
check(weapons.filter(weapon=>weapon.statDeltas.length===6).length>=35,'Armory needs at least 35 exact six-rating build comparisons');
for(const name of ['M4','RPD']){const weapon=weapons.find(item=>item.name===name);check(weapon?.sourceKind==='Stat-informed S&D adaptation'&&!weapon.statDeltas.length,`${name} manual adaptation must not inherit another attachment set's built ratings`)}
for (const name of ['M4', 'AK117', 'Locus', 'Cronen Squall', 'FSS Hurricane', 'SO-14', 'Machine Pistol', 'Nail Gun']) check(weapons.some(x => x.name === name), `Armory is missing ${name}`);
check(armory.meta?.build === 'MB-SNDC-2026-0831-047', 'Armory build number is not synchronized');
check(armory.meta?.scope?.includes('current page exposes them')&&armory.meta?.scope?.includes('live Global Multiplayer Gunsmith'), 'Armory must state its current-page and live-game verification boundary');
check(armory.meta?.ratingBoundary?.includes('not physical damage'), 'Armory must distinguish displayed ratings from physical stats');
check(Object.keys(armory.meta?.roles||{}).length===7,'Armory must define the complete role system');

const declaredRoutes = new Set(['home', 'companion', 'round-read', 'sources', 'records', 'memory', 'provider', 'guided', 'quick', 'learn', 'lesson', 'armory', 'weapon', 'fights', 'fight', 'manual', 'operation', 'practice', 'terms', 'term', 'notes', 'library', 'about']);
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
check(index.includes('companion.js?v=4.0.0-r1'), 'Full Guide must load the versioned Companion engine');
check(polish.includes('aria-current'), 'Polish layer must expose active navigation state');
check(polish.includes('document.title'), 'Polish layer must create route-specific document titles');
check(app.includes('function focusView()') && app.includes('focusView()'), 'Full routes must move focus to the new page heading');
check(app.includes('role="progressbar"') && app.includes('aria-valuenow'), 'Lesson progress needs progressbar semantics');
check(app.includes("root==='armory'&&a==='role'")&&app.includes('renderArmoryDeep(b)'), 'Router must support durable Armory role routes');
for(const section of ['Five-part Gunsmith','Complete class around the firearm','How it fits fingers on a phone','Tradeoffs to accept','What “recommended” means here'])check(app.includes(section),`Backroom weapon dossier is missing ${section}`);

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
