import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

function loadData(file, globalName) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  check(context.window[globalName], `${file} must define window.${globalName}`);
  return context.window[globalName];
}

const manual = loadData('data.js', 'APP_DATA');
const learn = loadData('learn_data.js', 'LEARN_DATA');
const fights = loadData('fights_data.js', 'FIGHT_DATA');
const guided = loadData('guided_data.js', 'GUIDED_DATA');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const versionText = fs.readFileSync(path.join(root, 'VERSION.txt'), 'utf8');
const readme = fs.readFileSync(path.join(root, 'README.txt'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

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

const declaredRoutes = new Set(['home', 'guided', 'quick', 'learn', 'lesson', 'fights', 'fight', 'manual', 'operation', 'practice', 'terms', 'term', 'notes', 'library', 'about']);
for (const match of app.matchAll(/data-go="([^"]+)"/g)) {
  if (match[1].includes('${')) continue;
  const route = match[1];
  check(declaredRoutes.has(route.split('/')[0]), `app.js contains unsupported route root: ${match[1]}`);
}
for (const rootName of declaredRoutes) check(app.includes(`root==='${rootName}'`) || rootName === 'notes' || rootName === 'about', `Router does not visibly handle ${rootName}`);

const versionMatch = versionText.match(/Version\s+([0-9.]+)/);
const buildMatch = versionText.match(/Build\s+([A-Z0-9-]+)/);
check(versionMatch, 'VERSION.txt must contain Version');
check(buildMatch, 'VERSION.txt must contain Build');
const version = versionMatch?.[1];
const build = buildMatch?.[1];
for (const [name, text] of [['README.txt', readme], ['index.html', index], ['app.js', app], ['guided_data.js', fs.readFileSync(path.join(root, 'guided_data.js'), 'utf8')]]) {
  check(text.includes(build), `${name} does not contain build ${build}`);
}
check(readme.includes(`Version ${version}`), `README.txt does not contain version ${version}`);
check(app.includes(`Version ${version}`), `app.js does not contain version ${version}`);
check(packageJson.version === version, `package.json version ${packageJson.version} does not match ${version}`);
check(manifest.description?.length > 20, 'Manifest needs a meaningful description');

const cacheMatch = sw.match(/const CACHE='([^']+)'/);
check(cacheMatch, 'sw.js must declare a cache name');
check(cacheMatch?.[1].includes(version), `Service-worker cache must include version ${version}`);
const assetMatch = sw.match(/const ASSETS=\[(.*?)\];/s);
check(assetMatch, 'sw.js must declare ASSETS');
const assets = assetMatch ? [...assetMatch[1].matchAll(/'([^']+)'/g)].map(x => x[1]) : [];
const referencedAssets = [
  ...[...index.matchAll(/(?:src|href)="([^"#]+)"/g)].map(x => `./${x[1].replace(/^\.\//, '')}`),
  './index.html', './VERSION.txt'
];
for (const asset of new Set(referencedAssets)) check(assets.includes(asset), `Service worker does not cover ${asset}`);
for (const asset of assets.filter(x => x.startsWith('./') && x !== './')) {
  check(fs.existsSync(path.join(root, asset.slice(2))), `Service worker references missing file ${asset}`);
}

if (failures.length) {
  console.error(`FAILED: ${failures.length} content check(s)`);
  failures.forEach((failure, index) => console.error(`${index + 1}. ${failure}`));
  process.exit(1);
}

console.log(`PASS: ${Object.keys(questions).length} Guided questions and ${Object.keys(results).length} results are reachable.`);
console.log(`PASS: ${missions.length} missions, ${lessons.length} lessons, ${fights.length} fights, ${quick.length} quick-help cards, and ${operations.length} operations are internally valid.`);
console.log(`PASS: dictionary links, route targets, required fields, version/build/cache synchronization, and ${assets.length} offline assets are valid.`);
