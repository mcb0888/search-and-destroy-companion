import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root=path.resolve(import.meta.dirname,"..");
const alias=path.join(root,"starter");
const failures=[];
const check=(ok,msg)=>{if(!ok)failures.push(msg)};
const pngSize=file=>{const bytes=fs.readFileSync(file);return bytes.subarray(1,4).toString()==="PNG"?[bytes.readUInt32BE(16),bytes.readUInt32BE(20)]:[0,0]};

for(const name of ["index.html","app.css","app.js","starter_data.js","manifest.webmanifest","sw.js","icon.svg","icon-192.png","icon-512.png","social-card.png"])check(fs.existsSync(path.join(root,name)),`Missing default Starter file ${name}`);
check(fs.readFileSync(path.join(root,"HUD_RESEARCH.txt"),"utf8").includes("Reviewed August 10, 2026"),"HUD research record is missing or stale");
for(const [name,width,height] of [["icon-192.png",192,192],["icon-512.png",512,512],["social-card.png",1200,630]])check(pngSize(path.join(root,name)).join("x")===`${width}x${height}`,`${name} must be a ${width}x${height} PNG`);
for(const name of ["index.html","sw.js"])check(fs.existsSync(path.join(alias,name)),`Missing compatibility alias file starter/${name}`);
for(const inactive of ["starter.css","starter.js","starter_data.js","manifest.webmanifest"])check(!fs.readFileSync(path.join(alias,"index.html"),"utf8").includes(inactive),`Compatibility redirect still loads legacy alias asset ${inactive}`);

const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,"starter_data.js"),"utf8"),ctx);
const d=ctx.window.STARTER_DATA;
check(d,"starter_data.js must define window.STARTER_DATA");
check(d?.lessons?.length===8,"Starter should contain exactly eight lessons");
check(d?.settings?.length>=12,"Starter needs a useful settings baseline");
check(d?.guides?.length===3,"Starter needs exactly three loadout and Gunsmith guides");
check(d?.meta?.version==="1.5.1","Starter content version is not synchronized");
check(d?.meta?.reviewed==="August 10, 2026"&&d?.meta?.evidence?.includes("Official behavior"),"Starter needs a current evidence-label explanation");
check(!("guns" in d),"Starter should leave weapon choice to the player instead of ranking guns");

for(const lesson of d?.lessons||[]){
  for(const field of ["id","title","summary","points","terms"])check(lesson[field]?.length,`Lesson ${lesson.id||"unknown"} missing ${field}`);
  for(const term of lesson.terms||[])check(d.terms[term],`Lesson ${lesson.id} has undefined term: ${term}`);
}
for(const term of ["ADS","1-tap ADS fire","hip fire","FOV","aim assist","fixed speed","frame rate","sprint","Gunsmith","attachment","recoil","sight picture","laser visibility","tap to ADS","tap and hold ADS"])check(d?.terms?.[term],`Starter needs the ${term} definition`);
const information=d?.lessons?.find(x=>x.id==="information");
check(information?.calloutGuide?.formula?.length===4,"Information lesson needs the four-part callout builder");
const defense=d?.lessons?.find(x=>x.id==="defense");
check(defense?.points?.some(x=>x.includes("camping")&&x.includes("normal Search & Destroy defense")),"Defense lesson must explain useful holding versus camping complaints");

for(const guide of d?.guides||[]){
  for(const field of ["id","title","file","pages","badge","summary"])check(guide[field],`Guide ${guide.id||"unknown"} missing ${field}`);
  check(guide.badge.includes("ARCHIVED"),`Guide ${guide.id} must visibly identify its archived season`);
  check(fs.existsSync(path.join(root,"guides",guide.file)),`Guide file does not exist: ${guide.file}`);
}
for(const setting of d?.settings||[])for(const field of ["group","name","start","confidence","why"])check(setting[field],`Setting ${setting.name||"unknown"} missing ${field}`);
check(d?.settings?.some(x=>x.name==="Gyroscope"&&x.confidence.includes("Device-dependent")),"Starter needs neutral, device-dependent gyroscope guidance");
check(d?.settings?.some(x=>x.name==="Per-weapon fire mode"&&x.start.includes("1-tap ADS fire")&&x.start.includes("Hip Fire")),"Starter needs explicit per-weapon 1-tap ADS-fire and hip-fire guidance");

const index=fs.readFileSync(path.join(root,"index.html"),"utf8");
const app=fs.readFileSync(path.join(root,"app.js"),"utf8");
const sw=fs.readFileSync(path.join(root,"sw.js"),"utf8");
const aliasIndex=fs.readFileSync(path.join(alias,"index.html"),"utf8");
const aliasSw=fs.readFileSync(path.join(alias,"sw.js"),"utf8");

for(const route of ["learn","settings","guides","hud"])check(app.includes(`\"${route}\"`),`Starter app does not handle ${route}`);
check(app.includes('root==="gear"')&&app.includes('go("guides")'),"Old #/gear links must redirect to #/guides");
check(app.includes('aria-current'),"Starter navigation must expose its active page");
check(app.includes('role=\"img\"'),"HUD diagram must expose image semantics");
check(app.includes('data-hud=\"four\"')&&app.includes('Four fingers'),"Starter needs a four-finger HUD layout");
check(app.includes('data-fire-mode=\"manual\"')&&app.includes('data-fire-mode=\"onetap\"'),"HUD needs manual and 1-tap firing-workflow switches");
check((app.match(/playstyle:/g)||[]).length===6,"HUD needs a brief playstyle explanation for all six finger/workflow combinations");
check(app.includes('6.7–6.9 inches')&&app.includes('6.1–6.4-inch'),"HUD guidance needs large- and smaller-phone references in inches");
check(!app.includes('320 CSS')&&!app.includes('What 320px means'),"Public HUD guidance should not expose the internal pixel-width test");
check(app.includes('requestAnimationFrame(()=>app.focus'),"Starter routes must move focus to the new main view");
check(app.includes('aria-label=\"Open ${esc(x.title)} PDF\"'),"Guide links need unique accessible names");
check(index.includes('property="og:title"')&&index.includes('rel="canonical"'),"Starter needs social and canonical metadata");
check(index.includes('property="og:image"')&&index.includes('summary_large_image'),"Starter needs a large social-sharing preview");
check(index.includes('Content-Security-Policy')&&index.includes('strict-origin-when-cross-origin'),"Starter needs static-site security and referrer policies");
check(index.includes('class="skip-link"')&&index.includes('id="app" tabindex="-1"'),"Starter needs a skip link and focusable main region");
check(index.includes('role="status"')&&index.includes('aria-live="polite"'),"Starter update feedback must be announced");
check(index.includes('Not affiliated with or endorsed by Activision'),"Starter needs an unofficial-project disclaimer");

for(const asset of ["index.html","app.css?v=1.5.1","app.js?v=1.5.1","starter_data.js?v=1.5.1","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png","social-card.png",...(d?.guides||[]).map(x=>x.file)])check(sw.includes(asset),`Default Starter service worker misses ${asset}`);
check(sw.includes('snd-starter-home-1.5.1-r1'),"Default Starter cache version is not synchronized");
check(sw.includes('SKIP_WAITING'),"Default Starter service worker needs opt-in update activation");
check(!aliasSw.includes('startsWith("snd-starter-")&&'),"Alias cleanup must not delete the root Starter cache");
check(aliasSw.includes('!key.startsWith("snd-starter-home-")'),"Alias cleanup must preserve the root Starter cache");
check(aliasIndex.includes('location.replace(target)'),"Compatibility alias must redirect to the canonical Starter");

const inactiveFiles=["visual_maps.js","map_atlas.js","map_action.js","map_focus.js","maps.js","preview.html","data.js","learn_data.js","guided_data.js","fights_data.js","RESEARCH_NOTES.txt"];
const activeShell=[index,app,sw,aliasIndex,aliasSw].join("\n");
for(const inactive of inactiveFiles){
  check(!fs.existsSync(path.join(root,inactive)),`Rejected legacy file is still publicly deployable: ${inactive}`);
  const references=[`src="${inactive}"`,`href="${inactive}"`,`"./${inactive}"`,`'./${inactive}'`];
  check(!references.some(reference=>activeShell.includes(reference)),`Obsolete or duplicated file is still loaded by the active app: ${inactive}`);
}

const manifest=JSON.parse(fs.readFileSync(path.join(root,"manifest.webmanifest"),"utf8"));
check(manifest.id==="./"&&manifest.scope==="./","Starter manifest needs stable id and scope");
for(const size of ["192x192","512x512"])check(manifest.icons?.some(icon=>icon.sizes===size&&icon.type==="image/png"),`Starter manifest is missing ${size} PNG icon`);

if(failures.length){console.error(`FAILED: ${failures.length} starter check(s)`);failures.forEach((x,i)=>console.error(`${i+1}. ${x}`));process.exit(1)}
console.log(`PASS: ${d.lessons.length} lessons, ${d.settings.length} settings, and ${d.guides.length} archived guide references are valid.`);
console.log("PASS: canonical Starter, three HUD layouts, accessibility/security metadata, install/share assets, update behavior, and legacy-file retirement are valid.");
