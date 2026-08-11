/* Presentation and accessibility layer — Version 3.6.1 */
const POLISH_BUILD="MB-SNDC-2026-0810-043";

function upgradeHeading(section){
  const old=section?.querySelector(":scope > h2");
  if(!old)return;
  const h1=document.createElement("h1");
  h1.innerHTML=old.innerHTML;
  old.replaceWith(h1);
}

function polishCurrentView(){
  const current=(location.hash.replace(/^#\/?/,"")||"home").split("/")[0];
  const hero=document.querySelector("main .hero");
  upgradeHeading(hero);
  if(hero?.querySelector("h1")){
    const duplicate=document.querySelector("main .question-card h1");
    if(duplicate){const h2=document.createElement("h2");h2.innerHTML=duplicate.innerHTML;duplicate.replaceWith(h2)}
  }

  document.querySelectorAll(".nav").forEach(button=>{
    if(button.classList.contains("active"))button.setAttribute("aria-current","page");
    else button.removeAttribute("aria-current");
  });

  if(current==="home"&&hero){
    hero.classList.add("hero-home");
    const badge=hero.querySelector(".badge");
    if(badge)badge.textContent="FULL COMPANION 3.6";
    const heading=hero.querySelector("h1");
    if(heading)heading.textContent="Understand the round. Change one action. Try again.";
    const paragraph=hero.querySelector("p");
    if(paragraph)paragraph.textContent="Use Guided Help to untangle what happened, learn the mode without the abuse, and practice one replacement action at a time.";
    if(!hero.querySelector(".hero-proof"))hero.insertAdjacentHTML("beforeend",`<div class="hero-proof"><span>25 guided results</span><span>12 beginner lessons</span><span>Works offline</span></div>`);
    const starter=document.querySelector(".starter-link strong");
    if(starter)starter.textContent="Prefer the simplified Starter Edition?";
    const labels=["I need help with a round","I want to learn the mode","I want to practice a correction"];
    document.querySelectorAll(".path-step strong").forEach((el,index)=>{if(labels[index])el.textContent=labels[index]});
  }

  if(current==="about"){
    const badge=hero?.querySelector(".badge");if(badge)badge.textContent="VERSION 3.6.1";
    const cards=[...document.querySelectorAll("main .card")];
    const changed=cards.find(card=>card.querySelector("h3")?.textContent.startsWith("What changed"));
    if(changed)changed.innerHTML=`<h3>What changed in 3.6.1</h3><p>Added dictionary support for manual ADS, 1-tap ADS fire, hip fire, and both ADS-button behaviors. The Starter Edition now offers manual and 1-tap firing workflows for each two-, three-, and four-finger HUD, with a short playstyle explanation for all six combinations.</p>`;
    const build=cards.find(card=>card.querySelector("h3")?.textContent==="Build");
    if(build)build.innerHTML=`<h3>Build</h3><p>Version 3.6.1 · ${POLISH_BUILD}</p><p>Copyright © 2026 Michael Barnes. All Rights Reserved.</p>`;
    if(!cards.some(card=>card.querySelector("h3")?.textContent==="Unofficial project")){
      build?.insertAdjacentHTML("beforebegin",`<div class="card"><h3>Unofficial project</h3><p>This is a fan-made learning guide. It is not affiliated with or endorsed by Activision. Call of Duty and related names belong to their respective owners.</p></div>`);
    }
  }

  document.querySelectorAll("input.search").forEach(input=>{if(!input.getAttribute("aria-label"))input.setAttribute("aria-label",input.placeholder||"Search")});
  const notes=document.getElementById("notes");if(notes&&!notes.getAttribute("aria-label"))notes.setAttribute("aria-label","Field notes");
  const heading=document.querySelector("main h1,main h2")?.textContent.trim();
  document.title=heading?`${heading} — S&D Companion`:"Search & Destroy Companion";
}

const polishObserver=new MutationObserver(()=>queueMicrotask(polishCurrentView));
const polishMain=document.getElementById("main");
if(polishMain)polishObserver.observe(polishMain,{childList:true});
addEventListener("hashchange",()=>setTimeout(polishCurrentView,0));
setTimeout(polishCurrentView,0);
