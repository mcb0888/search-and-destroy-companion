(()=>{'use strict';
const install=document.querySelector('#install-app'),update=document.querySelector('#update-app'),status=document.querySelector('#cache-state');
const CACHE='fieldcraft-1.2.0';let promptEvent=null,registration=null,reloading=false;
const installed=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
function setStatus(text){status.textContent=text;const source=document.querySelector('#source-cache');if(source)source.textContent=text}
function installState(){install.hidden=installed();install.textContent=promptEvent?'Install app':'Add to phone'}
function showHelp(){const dialog=document.querySelector('#modal');document.querySelector('#modal-content').innerHTML='<p class="eyebrow">YOUR PHONE / YOUR FIELD NOTEBOOK</p><h2>Add Fieldcraft to your home screen</h2><p style="margin-top:16px"><b>Android Chrome:</b> open this page in Chrome, tap the three-dot menu, then <b>Add to Home screen</b> and <b>Install</b>. Your browser may show Install app directly.</p><p><b>iPhone Safari:</b> tap Share, then <b>Add to Home Screen</b>.</p><p>Open the app online once and wait for <b>Offline pack ready on this device</b>. Map-source links need internet.</p><p class="fineprint">Notes and progress stay on this device. Export a backup in Field notes before clearing site data. Installing does not add missing map layouts.</p>';dialog.showModal()}
install.addEventListener('click',async()=>{if(!promptEvent){showHelp();return}const event=promptEvent;promptEvent=null;await event.prompt();await event.userChoice;installState()});
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();promptEvent=event;installState()});
window.addEventListener('appinstalled',()=>{promptEvent=null;install.hidden=true});installState();
if(location.protocol==='file:'){setStatus('Standalone copy available offline');return}
if(!('serviceWorker'in navigator)){setStatus('Offline storage unsupported');return}
function pendingUpdate(){if(registration?.waiting){update.hidden=false;update.disabled=false;update.textContent='Update ready'}}
update.addEventListener('click',()=>{
  if(!registration?.waiting)return;
  const dirty=[...document.querySelectorAll('textarea,input[type="text"]')].some(el=>el.value.trim());
  if(dirty){const dialog=document.querySelector('#modal');document.querySelector('#modal-content').innerHTML='<h2>Save your draft before updating</h2><p style="margin-top:16px">The update reloads this screen. Close this message and save your current note or practice result first.</p>';dialog.showModal();return}
  reloading=true;update.disabled=true;registration.waiting.postMessage({type:'APPLY_UPDATE'});
});
navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloading)location.reload()});
navigator.serviceWorker.register('sw.js',{scope:'./'}).then(reg=>{
  registration=reg;pendingUpdate();
  let timeout=setTimeout(()=>setStatus('Offline pack pending - reopen while online'),20000);
  async function ready(){if(reg.active){clearTimeout(timeout);const cache=await caches.open(CACHE);const keys=await cache.keys();setStatus(keys.length>=12?'Offline pack ready on this device':'Offline pack preparing');pendingUpdate()}}
  ready().catch(()=>setStatus('Offline storage unavailable'));
  function observe(worker){if(!worker)return;worker.addEventListener('statechange',()=>{if(worker.state==='activated')ready().catch(()=>setStatus('Offline storage unavailable'));if(worker.state==='installed')pendingUpdate();if(worker.state==='redundant'&&!reg.active){clearTimeout(timeout);setStatus('Offline pack unavailable - retry online')}})}
  observe(reg.installing);reg.addEventListener('updatefound',()=>observe(reg.installing));
}).catch(()=>setStatus('Offline pack unavailable in this browser'));
})();
