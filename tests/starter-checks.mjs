import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root=path.resolve(import.meta.dirname,"..");
const dir=path.join(root,"starter");
const failures=[];
const check=(ok,msg)=>{if(!ok)failures.push(msg)};

for(const name of ["index.html","starter.css","starter.js","starter_data.js","manifest.webmanifest","sw.js"]){
  check(fs.existsSync(path.join(dir,name)),`Missing starter/${name}`);
}

for(const name of ["index.html","app.css","app.js","starter_data.js","manifest.webmanifest","sw.js","icon.svg"]){
  check(fs.existsSync(path.join(root,name)),`Missing default Starter file ${name}`);
}

const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(dir,"starter_data.js"),"utf8"),ctx);
const d=ctx.window.STARTER_DATA;
check(d,"starter_data.js must define window.STARTER_DATA");
check(d?.lessons?.length===8,"Starter should contain exactly eight lessons");
check(d?.settings?.length>=12,"Starter needs a useful settings baseline");
check(d?.guides?.length===3,"Starter needs exactly three loadout and Gunsmith guides");
check(!("guns" in d),"Starter should leave weapon choice to the player instead of ranking guns");
check(!("perkSets" in d),"Starter should replace the old perk recommendations with the PDF guide library");
check(!("equipment" in d),"Starter should replace the old equipment recommendations with the PDF guide library");
check(d?.meta?.version==="1.3.0","Starter content version is not synchronized");

for(const lesson of d?.lessons||[]){
  for(const field of ["id","title","summary","points","terms"])check(lesson[field]?.length,`Lesson ${lesson.id||"unknown"} missing ${field}`);
  for(const term of lesson.terms||[])check(d.terms[term],`Lesson ${lesson.id} has undefined term: ${term}`);
}
const information=d?.lessons?.find(x=>x.id==="information");
check(information?.calloutGuide?.formula?.length===4,"Information lesson needs the four-part callout builder");
check(information?.calloutGuide?.examples?.length>=3,"Information lesson needs plain-landmark callout examples");
const defense=d?.lessons?.find(x=>x.id==="defense");
check(defense?.points?.some(x=>x.includes("camping")&&x.includes("normal Search & Destroy defense")),"Defense lesson must explain useful holding versus camping complaints");
for(const guide of d?.guides||[]){
  for(const field of ["id","title","file","pages","badge","summary"])check(guide[field],`Guide ${guide.id||"unknown"} missing ${field}`);
  check(fs.existsSync(path.join(root,"guides",guide.file)),`Guide file does not exist: ${guide.file}`);
}
check(new Set((d?.guides||[]).map(x=>x.file)).size===3,"Starter guide filenames must be unique");
for(const term of ["ego challenge","spectate","player advantage","weak"])check(d?.terms?.[term],`Starter needs the ${term} definition`);
check(d?.terms?.camping,"Starter needs the camping definition");
for(const setting of d?.settings||[]){
  for(const field of ["group","name","start","confidence","why"])check(setting[field],`Setting ${setting.name||"unknown"} missing ${field}`);
}

const js=fs.readFileSync(path.join(dir,"starter.js"),"utf8");
for(const route of ["learn","settings","gear","hud"])check(js.includes(`"${route}"`),`Starter app does not handle ${route}`);
for(const removedRoute of ["guided","practice","notes"])check(!js.includes(`go("${removedRoute}`),`Starter app contains removed feature route: ${removedRoute}`);

const sw=fs.readFileSync(path.join(dir,"sw.js"),"utf8");
for(const asset of ["index.html","starter.css","starter.js","starter_data.js","manifest.webmanifest",...(d?.guides||[]).map(x=>x.file)])check(sw.includes(asset),`Starter service worker misses ${asset}`);

const rootIndex=fs.readFileSync(path.join(root,"index.html"),"utf8");
const rootJs=fs.readFileSync(path.join(root,"app.js"),"utf8");
const rootSw=fs.readFileSync(path.join(root,"sw.js"),"utf8");
for(const asset of ["app.css","app.js","starter_data.js"])check(rootIndex.includes(asset),`Default Starter index misses ${asset}`);
for(const removedRoute of ["Guided","Practice","Notes"])check(!rootIndex.includes(removedRoute),`Default Starter exposes removed feature: ${removedRoute}`);
check(rootJs.includes('./full/'),"Default Starter must link quietly to the full companion");
const fullJs=fs.readFileSync(path.join(root,"full","app.js"),"utf8");
check(fullJs.includes('class="bigrow starter-link" href="../"'),"Full Companion must link back to the root Starter Edition");
for(const asset of ["index.html","app.css","app.js","starter_data.js","manifest.webmanifest","icon.svg",...(d?.guides||[]).map(x=>x.file)])check(rootSw.includes(asset),`Default Starter service worker misses ${asset}`);
check(rootSw.includes('snd-starter-home-1.3.0-r1'),"Default Starter cache version is not synchronized");
check(rootSw.includes('/full/')&&rootSw.includes('/starter/'),"Default Starter service worker must leave nested app scopes alone");
check(sw.includes('snd-starter-1.3.0-r1'),"Starter alias cache version is not synchronized");
check(fs.readFileSync(path.join(root,"starter_data.js"),"utf8")===fs.readFileSync(path.join(dir,"starter_data.js"),"utf8"),"Default and alias Starter content must stay identical");

if(failures.length){
  console.error(`FAILED: ${failures.length} starter check(s)`);
  failures.forEach((x,i)=>console.error(`${i+1}. ${x}`));
  process.exit(1);
}
console.log(`PASS: ${d.lessons.length} lessons, ${d.settings.length} settings, and ${d.guides.length} loadout/Gunsmith PDFs are valid.`);
console.log("PASS: removed features have no Starter routes; terms, files, navigation, and offline assets are valid.");
