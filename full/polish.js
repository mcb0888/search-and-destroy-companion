/* Presentation and accessibility layer — Version 3.9.0 */
const POLISH_BUILD="MB-SNDC-2026-0823-046";

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
  }

  if(current==="about"){
    const badge=hero?.querySelector(".badge");if(badge)badge.textContent="VERSION 3.9.0";
    const cards=[...document.querySelectorAll("main .card")];
    const changed=cards.find(card=>card.querySelector("h3")?.textContent.startsWith("What changed"));
    if(changed)changed.innerHTML=`<h3>What changed in 3.9.0</h3><p>Locked the Starter to five complete new-account classes and expanded every Backroom firearm into a role-based S&amp;D dossier with attachment purpose, tradeoffs, finger-layout fit, and honest displayed-rating boundaries.</p>`;
    const build=cards.find(card=>card.querySelector("h3")?.textContent==="Build");
    if(build)build.innerHTML=`<h3>Build</h3><p>Version 3.9.0 · ${POLISH_BUILD}</p><p>Copyright © 2026 Michael Barnes. All Rights Reserved.</p>`;
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
