const D=window.STARTER_DATA,app=document.getElementById("app");
const esc=(s="")=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const route=()=>location.hash.replace(/^#\/?/,"")||"learn";
const go=x=>location.hash="#/"+x;
function nav(root){document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.route===root))}
function terms(ids=[]){return `<section class="term-box" aria-labelledby="page-terms"><h3 id="page-terms">Terms on this page</h3>${ids.map(id=>`<div class="term"><b>${esc(id)}</b><span>${esc(D.terms[id]||"Definition coming soon.")}</span></div>`).join("")}</section>`}
function calloutGuide(g){if(!g)return "";return `<section class="callout-guide"><span class="eyebrow">USE WHAT YOU CAN SEE</span><h3>${esc(g.title)}</h3><div class="callout-formula">${g.formula.map(x=>`<div><small>${esc(x.label)}</small><strong>${esc(x.value)}</strong></div>`).join("")}</div><div class="callout-examples">${g.examples.map(x=>`<span>${esc(x)}</span>`).join("")}</div><p>${esc(g.note)}</p></section>`}
function learn(){
  nav("learn");
  app.innerHTML=`<section class="hero"><span class="eyebrow">START HERE</span><h1>Learn the mode without learning it the hard way.</h1><p>Eight short lessons. No tracking, homework, diagnosis tree, or notes to manage.</p></section><div class="cards">${D.lessons.map((x,i)=>`<button class="lesson" data-go="lesson/${x.id}"><strong>${i+1}. ${esc(x.title)}</strong><small>${esc(x.summary)}</small></button>`).join("")}</div><section class="deeper"><span class="eyebrow">WHEN YOU WANT MORE</span><h2>Need deeper troubleshooting?</h2><p>The complete companion keeps Guided Help, practice tracking, detailed fight corrections, saved pages, and the full Field Manual.</p><a href="../full/">Open the full companion</a></section>`;
  bind();
}
function lesson(id){
  const x=D.lessons.find(l=>l.id===id);if(!x)return go("learn");nav("learn");
  app.innerHTML=`<button class="back" data-go="learn">← All lessons</button><article class="lesson-detail"><span class="eyebrow">BEGINNER LESSON</span><h2>${esc(x.title)}</h2><div class="takeaway">${esc(x.summary)}</div><ul class="points">${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>${calloutGuide(x.calloutGuide)}${terms(x.terms)}</article>`;
  bind();scrollTo(0,0);
}
function settings(){
  nav("settings");const groups=[...new Set(D.settings.map(x=>x.group))];
  app.innerHTML=`<section class="hero"><span class="eyebrow">SENSIBLE BASELINE</span><h1>Start here. Then leave it alone long enough to learn.</h1><p>These are common phone starting points, not commandments. Preference-based choices are labeled honestly.</p></section><div class="notice"><b>Do not change everything after one bad match.</b> Change one setting, use it for several matches, and keep it only if it solves a repeatable problem.</div><p class="reviewed">Reviewed ${esc(D.meta.reviewed)} · Recheck after major settings or balance updates.</p>${groups.map(g=>`<div class="section-title">${esc(g)}</div>${D.settings.filter(x=>x.group===g).map(x=>`<article class="setting"><div class="setting-head"><strong>${esc(x.name)}</strong><span class="start">${esc(x.start)}</span></div><span class="confidence">${esc(x.confidence)}</span><p>${esc(x.why)}</p></article>`).join("")}`).join("")}`;
}
function gear(){
  nav("gear");
  app.innerHTML=`<section class="hero"><span class="eyebrow">PERKS AND EQUIPMENT</span><h1>Choose gear that helps you learn the round.</h1><p>These are useful starting choices, not a promise that one loadout wins every situation.</p></section><div class="notice"><b>No perk here is sniper-only.</b> A sniper note appears only where a perk has an especially useful sniper application.</div><div class="section-title">Perk combinations</div><div class="gear-list">${D.perkSets.map(x=>`<article class="gear-card"><strong>${esc(x.title)}</strong><div class="chips">${x.items.map(i=>`<span class="chip">${esc(i)}</span>`).join("")}</div><p>${esc(x.why)}</p>${x.sniperNote?`<p class="sniper-note"><b>Sniper note:</b> ${esc(x.sniperNote)}</p>`:""}</article>`).join("")}</div><div class="section-title">Equipment worth learning</div><div class="gear-list two">${D.equipment.map(x=>`<article class="gear-card"><strong>${esc(x.name)}</strong><p>${esc(x.use)}</p></article>`).join("")}</div><div class="section-title">Choose your own weapon</div><div class="notice"><b>Your gun choice is yours.</b> Use a weapon you can control consistently and that fits the fights you plan to take. No single weapon is required to learn Search &amp; Destroy.</div>`;
}
const controls={
  thumbs:[
    ["MOVE",18,73,"left",14],["ADS",68,49,"right",12],["FIRE",86,56,"right",13],["JUMP",86,23,"right",10],["SLIDE",72,82,"right",10],["RELOAD",91,82,"right",9],["SWAP",57,82,"right",9]
  ],
  three:[
    ["MOVE",18,73,"left",14],["FIRE",16,22,"index",14],["ADS",72,49,"right",12],["JUMP",87,23,"right",10],["SLIDE",77,82,"right",10],["RELOAD",92,82,"right",9],["SWAP",61,84,"right",9]
  ]
};
function hud(which="thumbs"){
  nav("hud");const c=controls[which];
  app.innerHTML=`<section class="hero"><span class="eyebrow">GENERIC STARTING LAYOUTS</span><h1>Build around jobs, not somebody else’s hands.</h1><p>Copy the overall zones first. Fine placement comes after several matches with your own grip.</p></section><div class="hud-switch"><button data-hud="thumbs" class="${which==="thumbs"?"active":""}">Two thumbs</button><button data-hud="three" class="${which==="three"?"active":""}">Three fingers</button></div><div class="phone" aria-label="${which==="thumbs"?"Two-thumb":"Three-finger"} HUD diagram">${c.map(x=>`<div class="control ${x[3]} ${x[4]<11?"small":""}" style="left:${x[1]}%;top:${x[2]}%;width:${x[4]}%">${x[0]}</div>`).join("")}</div><div class="hud-key"><div><span class="dot"></span><span><b>Left thumb:</b> movement. Keep the joystick clear of other important controls.</span></div><div><span class="dot right"></span><span><b>Right thumb:</b> camera, aiming, firing or movement actions.</span></div>${which==="three"?`<div><span class="dot index"></span><span><b>Left index:</b> fire. This frees the right thumb to keep aiming.</span></div>`:""}</div><div class="section-title">Placement rules</div><div class="principle"><b>Choose your ADS behavior first.</b> Tap-to-ADS needs an easy press; tap-and-hold needs enough empty drag space to keep aiming while the button is held.</div><div class="principle"><b>Protect the camera area.</b> Leave open screen space where the right thumb naturally looks around. Do not place a button directly under its resting point.</div><div class="principle"><b>Separate reload from movement.</b> Keep reload close enough to reach but far enough from slide and jump to prevent panic reloads.</div><div class="principle"><b>Keep movement actions close, not overlapping.</b> Jump, slide, and weapon swap should be reachable without covering the aim area.</div><div class="principle"><b>Use comfortable button sizes.</b> Important buttons should survive a rushed tap. Shrink them only after they stop being missed.</div><div class="principle"><b>Freeze the layout for one week.</b> Move a button only when the same reach or accidental-press problem repeats.</div>`;
  document.querySelectorAll("[data-hud]").forEach(b=>b.onclick=()=>hud(b.dataset.hud));scrollTo(0,0);
}
function bind(){document.querySelectorAll("[data-go]").forEach(x=>x.onclick=()=>go(x.dataset.go))}
function render(){const [root,id]=route().split("/");if(root==="learn")learn();else if(root==="lesson")lesson(id);else if(root==="settings")settings();else if(root==="gear")gear();else if(root==="hud")hud(id||"thumbs");else go("learn")}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>go(b.dataset.route));
addEventListener("hashchange",render);
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
if(!location.hash)location.hash="#/learn";else render();
