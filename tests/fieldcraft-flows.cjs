// Scripted DOM smoke checks. These do not replace rendered browser testing.
const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const data=fs.readFileSync('fieldcraft/data.js','utf8'),app=fs.readFileSync('fieldcraft/app.js','utf8'),html=fs.readFileSync('fieldcraft/index.html','utf8');
let records={};
function boot(){
let nodes=[];
class El{constructor(tag,attrs,scope){this.tag=tag;this.attrs=attrs;this.scope=scope;this.dataset={};for(const[k,v]of Object.entries(attrs))if(k.startsWith('data-'))this.dataset[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase())]=v;this.value=attrs.value||'';this.checked='checked'in attrs;this.style={};this.textContent='';this.classList={toggle:()=>{}}}
set innerHTML(s){this.html=s;nodes=nodes.filter(n=>n.scope!==this);parse(s,this)}get innerHTML(){return this.html||''}setAttribute(k,v){this.attrs[k]=String(v)}removeAttribute(k){delete this.attrs[k]}focus(){}showModal(){this.open=true}close(){this.open=false}click(){this.onclick?.({preventDefault(){}})}}
function parse(s,scope){for(const m of s.matchAll(/<([a-zA-Z][\w-]*)([^<>]*?)>/g)){const attrs={};for(const a of m[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g))attrs[a[1]]=a[2]??'';nodes.push(new El(m[1],attrs,scope))}}
parse(html,null);
function all(sel){if(sel[0]==='#')return nodes.filter(n=>n.attrs.id===sel.slice(1));if(sel[0]==='.')return nodes.filter(n=>(n.attrs.class||'').split(' ').includes(sel.slice(1)));const a=sel.match(/^\[([^=\]]+)(?:="([^"]*)")?\]$/);return a?nodes.filter(n=>a[1]in n.attrs&&(a[2]===undefined||n.attrs[a[1]]===a[2])):[]}
const listeners={},document={querySelector:s=>all(s)[0]||null,querySelectorAll:all,body:{classList:{toggle(){}}},createElement:()=>new El('a',{},null)};
const context={document,console,crypto,location:{hash:''},navigator:{onLine:true},localStorage:{getItem:k=>records[k]||null,setItem:(k,v)=>records[k]=v},setTimeout:()=>0,clearTimeout(){},Date,Blob,URL};context.window=context;context.addEventListener=(k,f)=>listeners[k]=f;vm.createContext(context);vm.runInContext(data,context);vm.runInContext(fs.readFileSync('fieldcraft/catalog.js','utf8'),context);vm.runInContext(app,context);
return {context,find:s=>document.querySelector(s),all,click:s=>{const b=document.querySelector(s);assert(b,`Missing ${s}`);assert.equal(typeof b.onclick,'function',`No handler ${s}`);b.click()},route:p=>{context.location.hash='#'+p;listeners.hashchange()},text:()=>document.querySelector('#main').innerHTML,stored:()=>JSON.parse(records['fieldcraft-v1'])};
}
const ui=boot();assert.match(ui.text(),/Know the ground/);assert.equal(ui.all('[data-map]').length,30);
for(const m of ui.context.FIELD_DATA.maps){ui.click(`[data-map="${m.id}"]`);assert.match(ui.text(),new RegExp(m.name));assert(!ui.text().includes('NaN'));ui.click('[data-tab="areas"]');if(m.boundary)assert(ui.all('[data-area]').length>=3);else assert.match(ui.text(),/AWAITING EVIDENCE/);ui.click('[data-tab="routes"]');ui.click('[data-route="perimeter"]');ui.click('[data-action="compare"]');assert.match(ui.find('#modal-content').innerHTML,/Compare connections/);ui.find('#close-modal').click();}
ui.click('[data-map="raid"]');ui.click('[data-action="quick-note"]');ui.find('#note-map').value='raid';ui.find('#note-type').value='hypothesis';ui.find('#note-text').value='<img src=x onerror=alert(1)> test';ui.find('#note-source').value='VOD 02:14–02:22';ui.find('#note-form').onsubmit({preventDefault(){}});assert.equal(ui.stored().notes.length,1);ui.route('notes');assert.match(ui.text(),/&lt;img/);assert(!ui.text().includes('<img src=x'));
const id=ui.stored().notes[0].id;ui.click(`[data-pin="${id}"]`);ui.click('#match-toggle');assert.match(ui.find('.side-panel').innerHTML,/&lt;img/);ui.click('[data-zoom="in"]');assert.match(ui.find('.side-panel').innerHTML,/&lt;img/);ui.click('#match-toggle');
ui.route('drills');for(const d of ui.context.FIELD_DATA.drills){ui.click(`[data-drill="${d.id}"]`);for(let i=0;i<3;i++)ui.click('#next-step');ui.click('#next-step');assert.match(ui.find('#toast').textContent,/Add one observation/);ui.find('#result-text').value='Observed an exposed crossing; next time check the window.';ui.click('#next-step');ui.route('drills')}
assert.equal(ui.stored().sessions.length,3);assert.equal(ui.stored().notes.length,4);ui.route('progress');assert.match(ui.text(),/Drills completed/);
const restored=boot();restored.route('notes');assert.match(restored.text(),/exposed crossing/);restored.route('sources');assert.match(restored.text(),/No third-party map artwork/);
for(const m of ui.context.FIELD_DATA.maps){assert.equal(m.routes.length,2);assert(m.source.startsWith('https://'));assert(m.supportSource.url.startsWith('https://'));assert(m.eligibility);assert(m.accuracy);for(const r of m.routes)if(m.boundary)assert(r.path.startsWith('M'));else assert.equal(r.path,null)}
for(const d of ui.context.FIELD_DATA.drills)assert.equal(d.steps.length,4);
const sw=fs.readFileSync('fieldcraft/sw.js','utf8');for(const f of ['index.html','style.css','data.js','catalog.js','app.js','icon.svg','manifest.webmanifest']){assert(fs.existsSync('fieldcraft/'+f));assert(sw.includes(f))}assert(sw.includes(ui.context.FIELD_DATA.version));
console.log('PASS: all 5 routes; 30 map workspaces; area, route and zoom handlers; comparison; note escaping/save/pin; match pin persistence after zoom; 3 drill flows; required observations; saved progress reload; source labels; offline asset/version coverage. Browser rendering and actual offline networking remain unverified.');

for(const m of ui.context.FIELD_DATA.maps){ui.route('maps');ui.click(`[data-map="${m.id}"]`);ui.click('[data-action="start"]');for(let i=0;i<3;i++)ui.click('#next-step');ui.find('#result-text').value='Test result for '+m.name;ui.click('#next-step');assert.equal(ui.stored().sessions[0].map,m.id)}
assert.equal(ui.stored().sessions.length,33);
assert.equal(new Set(ui.context.FIELD_DATA.maps.map(m=>m.id)).size,30);
assert.equal(ui.context.FIELD_DATA.maps.filter(m=>m.boundary).length,3);
ui.route('maps');ui.find('#map-search').value='coastal';ui.find('#map-status').value='all';ui.find('#map-search').oninput();assert.equal(ui.find('#map-results').textContent,'Showing 1 maps');
ui.find('#map-search').value='no-such-map';ui.find('#map-search').oninput();assert.match(ui.find('#map-results').textContent,/No maps match/);
console.log('PASS: completed and persisted a practice result on every one of 30 maps; unique map IDs; no invented geometry for reference entries; library search and no-results state.');
