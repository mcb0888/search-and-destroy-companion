/* Search & Destroy Companion — Better Judgment round review
   Version 4.0.0 · Build MB-SNDC-2026-0831-047
   AI is off by default. No key is accepted or stored in browser code. */
(function(){
  'use strict';

  const DATA=window.SIDELINE_DATA;
  const SESSION_KEY='snd-match-session-v1';
  const CHAT_KEY='snd-match-chat-v1';
  const MEMORY_KEY='snd-active-memory-v1';
  const SOURCES_KEY='snd-selected-sources-v1';
  const RECORDS_KEY='snd-match-records-v1';
  const SETTINGS_KEY='snd-companion-settings-v1';
  const LEGACY_PATTERN_KEY='snd-sideline-patterns-v1';
  const MIGRATION_KEY='snd-companion-migration-v1';
  const DB_NAME='snd-companion-evidence-v1';
  const DB_STORE='images';
  const MAX_CHAT=40;
  const MAX_SOURCE_TEXT=30000;
  const MAX_IMAGE_BYTES=4*1024*1024;
  const DEFAULT_SESSION={map:'',side:'',ruleContext:'',round:'',scoreUs:'',scoreThem:'',role:'',objective:'',plan:'',evidence:'',uncertainty:'',parkedQuestion:'',updatedAt:''};
  const DEFAULT_SETTINGS={providerMode:'off',provider:'openai',endpoint:'',model:'',speakReplies:false,reentry:false};
  let pendingFile=null;
  let recognition=null;
  let lastAssistant=null;

  const esc=(value='')=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const readJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
  const saveJSON=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
  const now=()=>new Date().toISOString();
  const id=prefix=>`${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
  const go=path=>{location.hash=`#/${path}`};
  const notify=message=>{const node=document.getElementById('toast');if(!node)return;node.textContent=message;node.style.display='block';clearTimeout(node._matchTimer);node._matchTimer=setTimeout(()=>node.style.display='none',2200)};
  const session=()=>({...DEFAULT_SESSION,...readJSON(SESSION_KEY,{})});
  const settings=()=>({...DEFAULT_SETTINGS,...readJSON(SETTINGS_KEY,{})});
  const chat=()=>readJSON(CHAT_KEY,[]).filter(item=>item&&item.role&&item.createdAt).slice(-MAX_CHAT);
  const memories=()=>readJSON(MEMORY_KEY,[]).filter(item=>item&&item.id&&item.value).slice(0,30);
  const sources=()=>readJSON(SOURCES_KEY,[]).filter(item=>item&&item.id&&item.name).slice(0,20);
  const records=()=>readJSON(RECORDS_KEY,[]).filter(item=>item&&item.id).slice(0,50);
  const normalize=value=>String(value||'').toLowerCase().replace(/[’]/g,"'").replace(/[^a-z0-9'\s-]/g,' ').replace(/\s+/g,' ').trim();
  const compact=value=>String(value||'').replace(/\s+/g,' ').trim();
  const contextItems=value=>[
    value.map&&`Map/landmark: ${value.map}`,
    value.side&&`Side: ${value.side}`,
    value.round&&`Round: ${value.round}`,
    (value.scoreUs||value.scoreThem)&&`Score: ${value.scoreThem?`${value.scoreUs||'?'}–${value.scoreThem}`:value.scoreUs}`,
    value.role&&`Your job: ${value.role}`,
    value.plan&&`Trying to: ${value.plan}`,
    value.evidence&&`Saw or heard: ${value.evidence}`
  ].filter(Boolean);

  function migrateLegacy(){
    if(localStorage.getItem(MIGRATION_KEY))return;
    const legacy=readJSON(LEGACY_PATTERN_KEY,[]);
    if(legacy.length){
      const existing=memories();
      const migrated=legacy.slice(0,8).map(item=>({id:id('memory'),kind:'Recurring pattern',label:item.decision||'Saved round pattern',value:item.check||item.decision,createdAt:item.savedAt||now(),updatedAt:now()}));
      saveJSON(MEMORY_KEY,[...migrated,...existing].slice(0,30));
      localStorage.removeItem(LEGACY_PATTERN_KEY);
    }
    localStorage.setItem(MIGRATION_KEY,'done');
  }

  function saveSession(next){saveJSON(SESSION_KEY,{...DEFAULT_SESSION,...next,updatedAt:now()})}
  function saveChat(items){saveJSON(CHAT_KEY,items.slice(-MAX_CHAT))}
  function addMessage(item){const next=[...chat(),{id:id('message'),createdAt:now(),...item}];saveChat(next);return next[next.length-1]}
  function ruleFor(text){const value=normalize(text);return DATA.rules.find(rule=>(rule.keywords||[]).some(keyword=>value.includes(normalize(keyword))))||DATA.fallback}

  function matchingRecords(query){
    const value=normalize(query),all=records();
    if(!all.length)return [];
    let found=[...all];
    const namedMap=all.map(item=>item.map).filter(Boolean).find(map=>value.includes(normalize(map)));
    if(namedMap)found=found.filter(item=>normalize(item.map)===normalize(namedMap));
    if(/defen|defend/.test(value))found=found.filter(item=>normalize(item.side).includes('def'));
    if(/attack|offense|offence/.test(value))found=found.filter(item=>/attack|offen/.test(normalize(item.side)));
    const count=/last (three|3)/.test(value)?3:/last (five|5)/.test(value)?5:found.length;
    return found.slice(0,count);
  }

  function recordAnswer(text){
    const value=normalize(text);
    if(!/(match note|match record|last three|last 3|keep doing wrong|recurring issue|practice from|before i queue|before queue)/.test(value))return null;
    const found=matchingRecords(text);
    if(!found.length)return {reported:text,known:[],observation:'No matching local match records are saved.',inference:'There is not enough recorded evidence to call one mistake recurring.',missing:'One completed match record with a map, side, recurring issue, and next drill.',decision:'Create one comparable record before looking for a pattern.',next:'After the next match, save one recurring issue and one action you can test in the following match.',route:'records',routeLabel:'Open match records',terms:[],basis:'Local records'};
    const counts={};
    found.forEach(item=>{const key=compact(item.issue||item.lesson||'Unspecified issue');counts[key]=(counts[key]||0)+1});
    const [topIssue,topCount]=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
    const drill=found.map(item=>compact(item.nextDrill)).find(Boolean);
    return {reported:text,known:[`${found.length} matching local match record${found.length===1?'':'s'}`,...[...new Set(found.map(item=>item.map).filter(Boolean))].slice(0,3).map(map=>`Recorded map: ${map}`)],observation:`“${topIssue}” appears in ${topCount} of the ${found.length} matching records.`,inference:topCount>1?'That issue is the strongest recorded repeat in this small sample.':'The records do not yet show a repeated issue; this is only the most recent recorded candidate.',missing:'Video, full round state, and unrecorded matches are outside this comparison.',decision:`Test whether “${topIssue}” is the next useful focus.`,next:drill||`In the next match, track only whether “${topIssue}” happens again and record the round where it occurred.`,route:'records',routeLabel:'Review matching records',terms:[],basis:'Local records'};
  }

  function sourceBriefing(query){
    const active=sources().filter(source=>source.active&&source.text);
    if(!active.length)return null;
    const tokens=normalize(query).split(' ').filter(token=>token.length>3);
    const excerpts=[];
    for(const source of active){
      const lines=source.text.split(/\r?\n/).map(compact).filter(Boolean);
      const ranked=lines.map(line=>({line,score:tokens.reduce((score,token)=>score+(normalize(line).includes(token)?1:0),0)})).sort((a,b)=>b.score-a.score);
      const selected=(ranked.some(item=>item.score)?ranked.filter(item=>item.score>0):ranked).slice(0,3).map(item=>item.line);
      if(selected.length)excerpts.push({name:source.name,text:selected.join(' ').slice(0,900)});
    }
    return excerpts.length?excerpts:null;
  }

  function localAnswer(text,includeSources=false){
    const recordsResult=recordAnswer(text);if(recordsResult)return recordsResult;
    const rule=ruleFor(text),current=session(),briefing=includeSources?sourceBriefing(text):null;
    const known=contextItems(current);
    const observation=briefing?briefing.map(item=>`${item.name}: ${item.text}`).join(' | '):'';
    return {reported:text,known,observation,inference:rule.inference,missing:rule.missing,assumption:`The built-in rule matched “${rule.label||rule.id}”; that match is a working possibility, not proof of what happened.`,decision:rule.decision,next:rule.check,commonTrap:rule.commonTrap||'',route:rule.route,routeLabel:rule.routeLabel,terms:rule.terms||[],basis:briefing?'Built-in guidance + deliberately included source excerpts':'Built-in guidance'};
  }

  function helpAnswer(command){
    if(normalize(command)==='/tools')return {reported:command,known:['Tools are opened only when you choose them.'],observation:'Available: match details, selected sources, match records, saved tips, voice-once, provider settings, original Guided review, lessons, drills, and the Armory.',inference:'No tool has been opened or run by this command alone.',missing:'Nothing.',decision:'Choose only the tool that fits the current question.',next:'Open More tools and select one item; no source or device input is accessed automatically.',route:'companion',routeLabel:'Return to Better Judgment',terms:[],basis:'Built-in help'};
    return {reported:command,known:['A fragment is enough.'],observation:'Examples: “I keep dying early on offense,” “help me review this loss,” “what do I practice next?” or “I have no clue what I need to work on.”',inference:'Commands are optional shortcuts, not the main interface.',missing:'Better Judgment only knows what you enter, select, or explicitly save.',decision:'Start with the smallest observable part of the round.',next:'Enter what happened immediately before the round changed, even if it is only one sound, marker, movement, or unknown shot.',route:'companion',routeLabel:'Return to Better Judgment',terms:[],basis:'Built-in help'};
  }

  function validateEndpoint(value){
    try{const url=new URL(value);return url.protocol==='https:'||((url.hostname==='127.0.0.1'||url.hostname==='localhost')&&url.protocol==='http:')}catch{return false}
  }

  function boundedSourcePayload(){return sources().filter(source=>source.active&&source.text).map(source=>({name:source.name,kind:source.kind,text:source.text.slice(0,6000)})).slice(0,3)}

  async function bridgeRequest(task,payload){
    const config=settings();
    if(config.providerMode!=='bridge'||!validateEndpoint(config.endpoint))throw new Error('A valid secure or local bridge is not configured.');
    const response=await fetch(config.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({schema:'snd-companion-bridge-v1',provider:config.provider,model:config.model||undefined,task,boundary:'Use only supplied context. Separate direct evidence from inference. Return exactly one next adjustment. Do not claim live game access.',...payload})});
    if(!response.ok)throw new Error(`Bridge returned ${response.status}.`);
    return response.json();
  }

  function normalizeBridgeAnswer(data,text){
    const next=Array.isArray(data.next)?data.next[0]:data.next||data.recommendation||data.answer||data.text||'No next adjustment was returned.';
    return {reported:text,known:Array.isArray(data.known)?data.known.slice(0,6):[],observation:data.visible||data.observation||'',inference:data.inference||'The bridge did not provide a likely cause.',missing:data.uncertainty||data.missing||'The bridge did not state what remains unknown.',assumption:data.assumption||'Provider output has not been independently verified.',decision:data.decision||'Review the provider response against the supplied evidence.',next,route:data.route||'',routeLabel:data.routeLabel||'Open related guide',terms:Array.isArray(data.terms)?data.terms.slice(0,6):[],basis:'Explicit secure-bridge request'};
  }

  function termLinks(ids=[]){return ids.length?`<div class="companion-terms"><strong>Game terms</strong>${ids.map(term=>`<a href="#/term/${encodeURIComponent(term)}">${esc(term)}</a>`).join('')}</div>`:''}
  function messageMarkup(message){
    if(message.role==='user')return `<article class="chat-message player-message"><span class="message-label">You</span><p>${esc(message.text)}</p><time>${new Date(message.createdAt).toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}</time></article>`;
    const answer=message.answer||{};
    return `<article class="chat-message companion-message"><span class="message-label">Better Judgment</span>${answer.observation?`<div class="evidence-line observation"><strong>What your saved info says</strong><p>${esc(answer.observation)}</p></div>`:''}<div class="evidence-line inference"><strong>What probably got you</strong><p>${esc(answer.inference||'There is not enough here to call one cause yet.')}</p></div>${answer.commonTrap?`<div class="common-trap"><strong>Common trap</strong><p>${esc(answer.commonTrap)}</p></div>`:''}<div class="next-adjustment"><strong>Try this next</strong><p>${esc(answer.next||'No adjustment available.')}</p></div>${answer.route?`<button class="secondary" data-companion-go="${esc(answer.route)}">${esc(answer.routeLabel||'Open related guide')}</button>`:''}${termLinks(answer.terms||[])}<div class="message-actions"><button class="ghost" data-remember-answer="${esc(message.id)}">Save this tip</button></div><time>${new Date(message.createdAt).toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}</time></article>`;
  }

  function conversationMarkup(){
    const items=chat();
    if(!items.length)return '';
    return items.map(messageMarkup).join('');
  }

  function contextSummaryMarkup(current=session()){
    const items=contextItems(current);
    if(!items.length)return `<div class="match-details-prompt"><div><strong>Add match details if they matter</strong><small>Map, side, score, or your job can change the answer. Skip this if the short version is enough.</small></div><button class="secondary" id="editContextBtn">Add details <span aria-hidden="true">+</span></button></div>`;
    return `<div class="session-strip"><div><span class="section-kicker">Match details you added</span><small>${esc(items.slice(0,5).join(' · '))}</small></div><button class="secondary" id="editContextBtn">Edit details</button></div>`;
  }

  function contextFormMarkup(current=session()){
    return `<dialog id="contextDialog" class="companion-dialog"><form method="dialog" id="contextForm"><div class="dialog-head"><div><span class="section-kicker">Optional match details</span><h2>Add only what changes the answer.</h2></div><button class="iconbtn" value="cancel" aria-label="Close match details">×</button></div><p>Leave anything blank if you do not know it or do not need it.</p><div class="context-grid expanded"><label>Map or visible landmark<input name="map" maxlength="60" value="${esc(current.map)}" placeholder="Raid, near pool"></label><label>Side<select name="side"><option value="">Not given</option>${['Attacking','Defending','Between matches'].map(value=>`<option ${current.side===value?'selected':''}>${value}</option>`).join('')}</select></label><label>Round<input name="round" maxlength="20" value="${esc(current.round)}" placeholder="5"></label><label>Score<input name="scoreUs" maxlength="12" value="${esc(current.scoreUs)}" placeholder="4–3"></label><label>Your job that round<input name="role" maxlength="60" value="${esc(current.role)}" placeholder="First in, support, bomb carrier..."></label><label class="wide">What were you trying to do?<input name="plan" maxlength="180" value="${esc(current.plan)}" placeholder="Cross to site with my teammate"></label><label class="wide">Anything you directly saw or heard<textarea name="evidence" maxlength="500">${esc(current.evidence)}</textarea></label></div><div class="quick-actions"><button class="primary" value="default">Save match details</button><button class="ghost danger" type="button" id="clearSessionBtn">Clear match details</button></div></form></dialog>`;
  }

  function toolsMarkup(){return `<details class="companion-tools"><summary>More tools</summary><div class="tool-grid"><button data-companion-go="sources"><strong>Sources & screenshots</strong><small>Choose a file yourself. Nothing is scanned.</small></button><button data-companion-go="records"><strong>Match records</strong><small>Save rounds you want to compare later.</small></button><button data-companion-go="memory"><strong>Saved tips</strong><small>Inspect, edit, or delete what you chose to keep.</small></button><button data-companion-go="provider"><strong>AI, voice & re-entry</strong><small>Optional controls live here, away from the main screen.</small></button><button data-companion-go="guided"><strong>Fixed-choice review</strong><small>Use the original question path instead.</small></button><button data-companion-go="learn"><strong>Field guide</strong><small>Open lessons, drills, terms, and the Armory.</small></button></div><p class="privacy-line">Shortcuts: <code>/help</code> explains the conversation. <code>/tools</code> summarizes these controls.</p></details>`}

  function renderCompanion(main){
    const current=session(),config=settings(),hasActiveSources=sources().some(source=>source.active);
    main.innerHTML=`<section class="hero companion-hero"><span class="badge">BETTER JUDGMENT</span><h1>What happened—or what do you need next?</h1><p>Tell me what happened in your own words. Keep it short and sweet, and I’ll give you my best shot at what to try next.</p></section><section class="conversation" id="conversation" aria-label="Round review">${conversationMarkup()}</section><form id="chatForm" class="chat-composer"><label for="chatInput"><strong>What happened?</strong><small>Short and sweet is enough.</small></label><textarea id="chatInput" maxlength="1200" autocomplete="off" placeholder="Example: I keep dying early on offense"></textarea><button class="primary" type="submit">Send</button><p id="chatStatus" class="form-hint" role="status" aria-live="polite"></p><div class="composer-options"><button type="button" class="secondary" id="listenOnceBtn">Listen once</button>${config.providerMode==='bridge'?`<label class="check-option"><input type="checkbox" id="useBridge"> Use configured ${esc(config.provider)} bridge for this message</label>`:''}${hasActiveSources?`<label class="check-option"><input type="checkbox" id="includeSources"> Include excerpts from selected sources</label>`:''}</div></form><div class="example-prompt"><strong>Not sure how to start?</strong><small>Tap the closest example, then change any words you need.</small></div><div class="example-fragments" aria-label="Example messages">${DATA.examples.map(example=>`<button type="button" class="fragment" data-chat-example="${esc(example)}">${esc(example)}</button>`).join('')}<button type="button" class="fragment" data-chat-example="I have no clue what I need to work on">I have no clue what I need to work on</button></div>${contextSummaryMarkup(current)}${contextFormMarkup(current)}${toolsMarkup()}<div class="conversation-controls"><button class="ghost danger" id="clearChatBtn">Clear conversation</button></div>`;
    bindCommon(main);bindCompanion(main);window.scrollTo(0,0);
  }

  function bindCommon(root=document){
    root.querySelectorAll('[data-companion-go]').forEach(button=>button.onclick=()=>go(button.dataset.companionGo));
    root.querySelectorAll('[data-remember-answer]').forEach(button=>button.onclick=()=>rememberAnswer(button.dataset.rememberAnswer));
  }

  function refreshConversation(){const node=document.getElementById('conversation');if(!node)return;node.innerHTML=conversationMarkup();bindCommon(node);node.lastElementChild?.scrollIntoView({block:'nearest'})}

  async function submitMessage(text,useBridge=false,includeSources=false){
    const clean=compact(text);if(clean.length<2)return;
    addMessage({role:'user',text:clean});refreshConversation();
    let answer;
    try{
      if(clean==='/help'||clean==='/tools')answer=helpAnswer(clean);
      else if(useBridge){
        const result=await bridgeRequest('match-coaching',{message:clean,session:session(),activeMemory:memories().map(({kind,label,value})=>({kind,label,value})),sources:includeSources?boundedSourcePayload():[]});
        answer=normalizeBridgeAnswer(result,clean);
      }else answer=localAnswer(clean,includeSources);
    }catch(error){answer={reported:clean,known:[],observation:'No outside response was accepted.',inference:'The configured bridge could not complete this explicit request.',missing:error.message,decision:'Keep the local coaching path available.',next:'Send the same message locally, or inspect the bridge address in AI settings.',route:'provider',routeLabel:'Open AI settings',terms:[],basis:'Bridge error'};}
    const message=addMessage({role:'assistant',answer});lastAssistant=message;refreshConversation();
    if(settings().speakReplies&&window.speechSynthesis){window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(answer.next);window.speechSynthesis.speak(utterance)}
  }

  function bindCompanion(main){
    const form=document.getElementById('chatForm'),input=document.getElementById('chatInput'),status=document.getElementById('chatStatus'),dialog=document.getElementById('contextDialog');
    document.querySelectorAll('[data-chat-example]').forEach(button=>button.onclick=()=>{input.value=button.dataset.chatExample;input.focus()});
    document.getElementById('editContextBtn').onclick=()=>dialog.showModal();
    document.getElementById('contextForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));saveSession(data);dialog.close();renderCompanion(main);notify('Match details saved')};
    document.getElementById('clearSessionBtn').onclick=()=>{localStorage.removeItem(SESSION_KEY);dialog.close();renderCompanion(main);notify('Match details cleared')};
    document.getElementById('clearChatBtn').onclick=()=>{if(confirm('Clear this conversation? Saved tips and match records will remain.')){localStorage.removeItem(CHAT_KEY);renderCompanion(main);notify('Conversation cleared')}};
    form.onsubmit=async event=>{event.preventDefault();const text=input.value.trim();if(text.length<2){status.textContent='Use one outside cue: what changed immediately before the problem?';input.focus();return}status.textContent='';input.value='';await submitMessage(text,document.getElementById('useBridge')?.checked||false,document.getElementById('includeSources')?.checked||false)};
    document.getElementById('listenOnceBtn').onclick=()=>listenOnce(input,status,form);
  }

  function listenOnce(input,status,form){
    const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!Recognition){status.textContent='Listen-once is not available in this browser. The text box remains available.';return}
    if(recognition){recognition.stop();recognition=null;return}
    recognition=new Recognition();recognition.continuous=false;recognition.interimResults=false;recognition.maxAlternatives=1;recognition.lang='en-US';
    status.textContent='Listening once. It stops after one result or when the browser ends the request.';
    recognition.onresult=event=>{input.value=event.results[0][0].transcript;recognition=null;form.requestSubmit()};
    recognition.onerror=event=>{status.textContent=`Listen-once ended: ${event.error}.`;recognition=null};
    recognition.onend=()=>{recognition=null;if(status.textContent.startsWith('Listening once'))status.textContent='Listen-once ended without a transcript.'};
    recognition.start();
  }

  function rememberAnswer(messageId){
    const message=chat().find(item=>item.id===messageId),answer=message?.answer;if(!answer)return;
    const next=[{id:id('memory'),kind:'Training focus',label:answer.decision||'Saved adjustment',value:answer.next,createdAt:now(),updatedAt:now()},...memories()].slice(0,30);saveJSON(MEMORY_KEY,next);notify('Tip saved')
  }

  function memoryRows(){const items=memories();if(!items.length)return `<div class="empty-state">No saved tips yet.</div>`;return items.map(item=>`<article class="memory-row" data-memory-id="${esc(item.id)}"><label>Kind<select data-memory-field="kind">${['Coaching preference','Recurring pattern','Map study goal','Role tendency','Training focus'].map(value=>`<option ${item.kind===value?'selected':''}>${value}</option>`).join('')}</select></label><label>Label<input data-memory-field="label" maxlength="100" value="${esc(item.label)}"></label><label>What to retain<textarea data-memory-field="value" maxlength="500">${esc(item.value)}</textarea></label><div class="quick-actions"><button class="secondary" data-save-memory="${esc(item.id)}">Save edits</button><button class="ghost danger" data-delete-memory="${esc(item.id)}">Delete</button></div></article>`).join('')}

  function renderMemory(main){
    main.innerHTML=`<button class="ghost" data-companion-go="companion">← Better Judgment</button><section class="hero"><span class="badge">SAVED TIPS</span><h1>Only what you chose to keep.</h1><p>Your conversation and saved tips are separate. Inspect, edit, or delete anything here.</p></section><form id="addMemoryForm" class="card memory-form"><h2>Add one saved tip</h2><label>Kind<select name="kind">${['Coaching preference','Recurring pattern','Map study goal','Role tendency','Training focus'].map(value=>`<option>${value}</option>`).join('')}</select></label><label>Short label<input name="label" maxlength="100" required></label><label>What should remain available?<textarea name="value" maxlength="500" required></textarea></label><button class="primary">Save this tip</button></form><div class="section-label">Stored on this device</div><div id="memoryRows">${memoryRows()}</div><div class="quick-actions"><button class="ghost danger" id="clearMemoryBtn">Delete all saved tips</button></div>`;
    bindCommon(main);document.getElementById('addMemoryForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));saveJSON(MEMORY_KEY,[{id:id('memory'),...data,createdAt:now(),updatedAt:now()},...memories()].slice(0,30));renderMemory(main);notify('Tip saved')};bindMemoryActions(main);document.getElementById('clearMemoryBtn').onclick=()=>{if(confirm('Delete all saved tips? Conversation history and match records will remain.')){localStorage.removeItem(MEMORY_KEY);renderMemory(main);notify('Saved tips deleted')}};window.scrollTo(0,0)
  }
  function bindMemoryActions(main){
    main.querySelectorAll('[data-save-memory]').forEach(button=>button.onclick=()=>{const row=button.closest('[data-memory-id]'),item=memories().find(entry=>entry.id===button.dataset.saveMemory);if(!item)return;row.querySelectorAll('[data-memory-field]').forEach(field=>item[field.dataset.memoryField]=field.value.trim());item.updatedAt=now();saveJSON(MEMORY_KEY,memories().map(entry=>entry.id===item.id?item:entry));notify('Memory edits saved')});
    main.querySelectorAll('[data-delete-memory]').forEach(button=>button.onclick=()=>{saveJSON(MEMORY_KEY,memories().filter(item=>item.id!==button.dataset.deleteMemory));renderMemory(main);notify('Memory deleted')})
  }

  function sourceRows(){const items=sources();if(!items.length)return `<div class="empty-state">No source is stored or active.</div>`;return items.map(source=>`<article class="source-row"><div><strong>${esc(source.name)}</strong><small>${esc(source.kind)} · ${Math.round((source.size||0)/1024)} KB · ${source.active?'Active for optional briefing':'Not active'}</small></div><div class="quick-actions"><button class="secondary" data-toggle-source="${esc(source.id)}">${source.active?'Deactivate':'Activate'}</button><button class="ghost" data-inspect-source="${esc(source.id)}">Inspect</button><button class="ghost danger" data-delete-source="${esc(source.id)}">Delete</button></div></article>`).join('')}

  function renderSources(main){
    pendingFile=null;
    main.innerHTML=`<button class="ghost" data-companion-go="companion">← Better Judgment</button><section class="hero"><span class="badge">SELECTED SOURCES</span><h1>Choose a file yourself.</h1><p>Nothing crawls your folders or reads the computer. A file is opened only after you select it here.</p></section><div class="card"><label for="sourceFile"><strong>Select one text file, image, frame, or clip</strong><small>Text/JSON/CSV can be inspected locally. Images stay temporary unless preserved explicitly. Full video analysis is not implemented.</small></label><input id="sourceFile" type="file" accept=".txt,.md,.json,.csv,text/*,image/*,video/*"><div id="sourcePreview" class="source-preview" aria-live="polite"></div></div><div class="section-label">Saved text sources</div><div id="sourceRows">${sourceRows()}</div><div class="section-label">Preserved image evidence</div><div id="imageEvidenceRows" class="source-list"><div class="empty-state">Checking local evidence…</div></div><div class="privacy-card"><strong>AI boundary</strong><p>Active sources are not sent anywhere automatically. A bounded briefing is included only when you select that option for an explicit bridge request. A chosen image is sent only from its own analysis button after confirmation.</p></div>`;
    bindCommon(main);document.getElementById('sourceFile').onchange=event=>inspectFile(event.target.files?.[0]);bindSourceRows(main);refreshImageEvidence();window.scrollTo(0,0)
  }

  async function inspectFile(file){
    const preview=document.getElementById('sourcePreview');if(!file){preview.innerHTML='';return}
    pendingFile={file,name:file.name,size:file.size,type:file.type,kind:file.type.startsWith('image/')?'image':file.type.startsWith('video/')?'video':'text'};
    if(pendingFile.kind==='text'){
      const text=(await file.text()).slice(0,MAX_SOURCE_TEXT);pendingFile.text=text;
      preview.innerHTML=`<span class="section-kicker">Local preview</span><h3>${esc(file.name)}</h3><pre>${esc(text.slice(0,6000))}</pre>${file.size>MAX_SOURCE_TEXT?`<p class="warning-text">Preview and saved briefing are bounded to ${MAX_SOURCE_TEXT.toLocaleString()} characters.</p>`:''}<button class="primary" id="saveSourceBtn">Save this text source locally</button>`;
      document.getElementById('saveSourceBtn').onclick=savePendingTextSource;
    }else if(pendingFile.kind==='image'){
      const url=URL.createObjectURL(file);pendingFile.url=url;
      preview.innerHTML=`<span class="section-kicker">Selected image · not saved</span><h3>${esc(file.name)}</h3><img src="${url}" alt="Selected screenshot preview"><label class="check-option"><input type="checkbox" id="confirmImageSend"> I choose to send only this selected image to my configured bridge.</label><div class="quick-actions"><button class="primary" id="analyzeImageBtn">Analyze selected image</button><button class="secondary" id="preserveImageBtn">Preserve this image locally</button></div><div id="imageAnalysisResult" aria-live="polite"></div>`;
      document.getElementById('analyzeImageBtn').onclick=analyzePendingImage;document.getElementById('preserveImageBtn').onclick=preservePendingImage;
    }else{
      preview.innerHTML=`<span class="section-kicker">Selected clip · metadata only</span><h3>${esc(file.name)}</h3><p>${Math.round(file.size/1024/1024*10)/10} MB · ${esc(file.type||'video')}</p><div class="now"><strong>What works here</strong><span>Full video understanding is not implemented. Extract one frame for visual analysis, or add timestamps and observations to a text source.</span></div>`;
    }
  }

  function savePendingTextSource(){if(!pendingFile?.text)return;const item={id:id('source'),name:pendingFile.name,kind:'Selected text source',size:pendingFile.size,text:pendingFile.text.slice(0,MAX_SOURCE_TEXT),active:false,addedAt:now()};saveJSON(SOURCES_KEY,[item,...sources()].slice(0,20));pendingFile=null;renderSources(document.getElementById('main'));notify('Text source saved locally')}
  function bindSourceRows(main){
    main.querySelectorAll('[data-toggle-source]').forEach(button=>button.onclick=()=>{saveJSON(SOURCES_KEY,sources().map(source=>source.id===button.dataset.toggleSource?{...source,active:!source.active}:source));renderSources(main);notify('Source briefing choice updated')});
    main.querySelectorAll('[data-inspect-source]').forEach(button=>button.onclick=()=>{const source=sources().find(item=>item.id===button.dataset.inspectSource);if(!source)return;document.getElementById('sourcePreview').innerHTML=`<span class="section-kicker">Saved local source</span><h3>${esc(source.name)}</h3><pre>${esc(source.text.slice(0,6000))}</pre>`;document.getElementById('sourcePreview').scrollIntoView({block:'start'})});
    main.querySelectorAll('[data-delete-source]').forEach(button=>button.onclick=()=>{saveJSON(SOURCES_KEY,sources().filter(source=>source.id!==button.dataset.deleteSource));renderSources(main);notify('Source deleted')})
  }

  function fileToDataUrl(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(file)})}
  async function analyzePendingImage(){
    const resultNode=document.getElementById('imageAnalysisResult');
    if(!pendingFile?.file||pendingFile.kind!=='image')return;
    if(!document.getElementById('confirmImageSend')?.checked){resultNode.innerHTML='<p class="warning-text">Confirm that this selected image may be sent for this one request.</p>';return}
    if(settings().providerMode!=='bridge'){resultNode.innerHTML='<p class="warning-text">AI is off. Configure a secure/local bridge first; the image has not been sent or analyzed.</p>';return}
    if(pendingFile.size>MAX_IMAGE_BYTES){resultNode.innerHTML=`<p class="warning-text">This image exceeds the ${MAX_IMAGE_BYTES/1024/1024} MB request limit. It has not been sent.</p>`;return}
    resultNode.innerHTML='<p>Sending this selected image for one explicit analysis…</p>';
    try{
      const dataUrl=await fileToDataUrl(pendingFile.file);const data=await bridgeRequest('image-analysis',{image:{name:pendingFile.name,mimeType:pendingFile.type,dataUrl},session:session(),instruction:'Separate directly visible information, likely inference, uncertainty, and one concrete next review question.'});
      const visible=data.visible||data.observation||'The bridge did not label directly visible information.';const inference=data.inference||'No inference returned.';const uncertainty=data.uncertainty||data.missing||'No uncertainty returned.';const question=Array.isArray(data.nextQuestion)?data.nextQuestion[0]:data.nextQuestion||data.next||'What single visible detail would change the decision?';
      resultNode.innerHTML=`<article class="visual-result"><div class="evidence-line observation"><strong>Directly visible · provider report</strong><p>${esc(visible)}</p></div><div class="evidence-line inference"><strong>Likely inference</strong><p>${esc(inference)}</p></div><div class="evidence-line missing"><strong>Uncertainty</strong><p>${esc(uncertainty)}</p></div><div class="next-adjustment"><strong>One next review question</strong><p>${esc(question)}</p></div><p class="privacy-line">This provider response has not been independently verified.</p></article>`;
    }catch(error){resultNode.innerHTML=`<p class="warning-text">No analysis was accepted: ${esc(error.message)}</p>`}
  }

  function openEvidenceDb(){return new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,1);request.onupgradeneeded=()=>request.result.createObjectStore(DB_STORE,{keyPath:'id'});request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error)})}
  async function preservePendingImage(){
    if(!pendingFile?.file||pendingFile.kind!=='image')return;if(pendingFile.size>MAX_IMAGE_BYTES){notify('Image is too large for local evidence storage');return}
    try{const db=await openEvidenceDb();const tx=db.transaction(DB_STORE,'readwrite');tx.objectStore(DB_STORE).put({id:id('image'),name:pendingFile.name,type:pendingFile.type,size:pendingFile.size,blob:pendingFile.file,addedAt:now()});await new Promise((resolve,reject)=>{tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});db.close();notify('Selected image preserved locally');refreshImageEvidence()}catch(error){notify(`Image was not saved: ${error.message}`)}
  }
  async function imageEvidence(){try{const db=await openEvidenceDb();const tx=db.transaction(DB_STORE,'readonly');const request=tx.objectStore(DB_STORE).getAll();const items=await new Promise((resolve,reject)=>{request.onsuccess=()=>resolve(request.result||[]);request.onerror=()=>reject(request.error)});db.close();return items.sort((a,b)=>b.addedAt.localeCompare(a.addedAt))}catch{return []}}
  async function deleteImageEvidence(itemId){const db=await openEvidenceDb();const tx=db.transaction(DB_STORE,'readwrite');tx.objectStore(DB_STORE).delete(itemId);await new Promise((resolve,reject)=>{tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});db.close();refreshImageEvidence();notify('Preserved image deleted')}
  async function refreshImageEvidence(){const node=document.getElementById('imageEvidenceRows');if(!node)return;const items=await imageEvidence();node.innerHTML=items.length?items.map(item=>`<article class="source-row"><div><strong>${esc(item.name)}</strong><small>${Math.round(item.size/1024)} KB · saved locally ${new Date(item.addedAt).toLocaleDateString()}</small></div><button class="ghost danger" data-delete-image="${esc(item.id)}">Delete</button></article>`).join(''):'<div class="empty-state">No image evidence is preserved.</div>';node.querySelectorAll('[data-delete-image]').forEach(button=>button.onclick=()=>deleteImageEvidence(button.dataset.deleteImage))}

  function recordRows(){const items=records();if(!items.length)return `<div class="empty-state">No match records saved.</div>`;return items.map(item=>`<article class="record-row"><div><span class="section-kicker">${esc(item.date||'Undated')} · ${esc(item.side||'Side not recorded')}</span><strong>${esc(item.map||'Map not recorded')} ${item.score?`· ${esc(item.score)}`:''}</strong><p>${esc(item.issue||item.lesson||'No issue recorded.')}</p><small>Next drill: ${esc(item.nextDrill||'Not recorded')} · confidence ${esc(item.confidence||'not rated')}</small></div><div class="quick-actions"><button class="secondary" data-edit-record="${esc(item.id)}">Edit</button><button class="ghost danger" data-delete-record="${esc(item.id)}">Delete</button></div></article>`).join('')}

  function renderRecords(main,editId=''){
    const editing=records().find(item=>item.id===editId)||{};
    main.innerHTML=`<button class="ghost" data-companion-go="companion">← Better Judgment</button><section class="hero"><span class="badge">MATCH RECORDS</span><h1>Save rounds you want to compare.</h1><p>Records can be inspected, edited, or deleted. They stay on this device.</p></section><form id="recordForm" class="card record-form"><input type="hidden" name="id" value="${esc(editing.id||'')}"><div class="context-grid expanded"><label>Date<input type="date" name="date" value="${esc(editing.date||new Date().toISOString().slice(0,10))}"></label><label>Map or landmark<input name="map" maxlength="60" value="${esc(editing.map||'')}"></label><label>Side<select name="side"><option value="">Not recorded</option>${['Attacking','Defending','Mixed'].map(value=>`<option ${editing.side===value?'selected':''}>${value}</option>`).join('')}</select></label><label>Score<input name="score" maxlength="20" value="${esc(editing.score||'')}" placeholder="6–4"></label><label>Role<input name="role" maxlength="60" value="${esc(editing.role||'')}"></label><label>Confidence<select name="confidence"><option value="">Not rated</option>${['Low','Medium','High'].map(value=>`<option ${editing.confidence===value?'selected':''}>${value}</option>`).join('')}</select></label><label class="wide">Recurring issue<input name="issue" maxlength="180" value="${esc(editing.issue||'')}"></label><label class="wide">Key round or timestamp<textarea name="keyRound" maxlength="500">${esc(editing.keyRound||'')}</textarea></label><label class="wide">Lesson supported by the record<textarea name="lesson" maxlength="500">${esc(editing.lesson||'')}</textarea></label><label class="wide">One next drill<input name="nextDrill" maxlength="180" value="${esc(editing.nextDrill||'')}"></label></div><div class="quick-actions"><button class="primary">${editing.id?'Save record edits':'Save match record'}</button>${editing.id?'<button type="button" class="ghost" id="cancelRecordEdit">Cancel edit</button>':''}</div></form><div class="section-label">Local record history</div><div id="recordRows">${recordRows()}</div>`;
    bindCommon(main);document.getElementById('recordForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));const item={...data,id:data.id||id('record'),updatedAt:now(),createdAt:editing.createdAt||now()};saveJSON(RECORDS_KEY,[item,...records().filter(record=>record.id!==item.id)].slice(0,50));renderRecords(main);notify('Match record saved locally')};document.getElementById('cancelRecordEdit')?.addEventListener('click',()=>renderRecords(main));main.querySelectorAll('[data-edit-record]').forEach(button=>button.onclick=()=>renderRecords(main,button.dataset.editRecord));main.querySelectorAll('[data-delete-record]').forEach(button=>button.onclick=()=>{saveJSON(RECORDS_KEY,records().filter(item=>item.id!==button.dataset.deleteRecord));renderRecords(main);notify('Match record deleted')});window.scrollTo(0,0)
  }

  function renderProvider(main){
    const config=settings();
    main.innerHTML=`<button class="ghost" data-companion-go="companion">← Better Judgment</button><section class="hero"><span class="badge">AI, VOICE & RE-ENTRY</span><h1>Optional controls stay here.</h1><p>The published site cannot safely hold an OpenAI or Gemini key. Optional AI requires a secure server-side or local bridge that you control.</p></section><form id="providerForm" class="card provider-form"><label>AI mode<select name="providerMode"><option value="off" ${config.providerMode==='off'?'selected':''}>Off — built-in tips only</option><option value="bridge" ${config.providerMode==='bridge'?'selected':''}>Configured secure/local bridge</option></select></label><label>Provider handled by the bridge<select name="provider"><option value="openai" ${config.provider==='openai'?'selected':''}>OpenAI</option><option value="gemini" ${config.provider==='gemini'?'selected':''}>Gemini</option></select></label><label>Bridge endpoint<input name="endpoint" type="url" value="${esc(config.endpoint)}" placeholder="https://your-secure-bridge.example/analyze"></label><label>Optional model name<input name="model" value="${esc(config.model)}" maxlength="100" placeholder="Chosen on your bridge if left empty"></label><label class="check-option"><input type="checkbox" name="speakReplies" ${config.speakReplies?'checked':''}> Speak the next tip after a manually started voice request</label><label class="check-option"><input type="checkbox" name="reentry" ${config.reentry?'checked':''}> Show an opt-in re-entry card when opening the Full Guide</label><button class="primary">Save local capability settings</button></form><div class="card"><h3>Bridge contract</h3><p>One explicit request contains the chosen provider name, task, player message, match details, and only the selected source excerpts included for that request. A visual request contains only the chosen image. The bridge keeps provider keys server-side.</p><p>No request runs in the background. No provider key belongs in this browser, repository, ZIP, or service worker.</p></div><div class="card"><h3>Listen once</h3><p>The microphone opens only after the Listen once button is pressed. Recognition stops after one result or browser termination. It does not reopen, run in the background, or create a continuous recording.</p></div><div class="quick-actions"><button class="ghost danger" id="resetProviderBtn">Turn AI off and clear bridge settings</button></div>`;
    bindCommon(main);document.getElementById('providerForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));const next={providerMode:data.providerMode,provider:data.provider,endpoint:data.endpoint.trim(),model:data.model.trim(),speakReplies:event.currentTarget.speakReplies.checked,reentry:event.currentTarget.reentry.checked};if(next.providerMode==='bridge'&&!validateEndpoint(next.endpoint)){notify('Use an HTTPS bridge or a local http://127.0.0.1 / localhost bridge');return}saveJSON(SETTINGS_KEY,next);renderProvider(main);notify('Capability settings saved locally')};document.getElementById('resetProviderBtn').onclick=()=>{saveJSON(SETTINGS_KEY,DEFAULT_SETTINGS);renderProvider(main);notify('AI is off and bridge settings were cleared')};window.scrollTo(0,0)
  }

  function reentryMarkup(){
    const config=settings();if(!config.reentry)return'';
    const current=session(),mission=readJSON('snd-active-mission-v330',null),items=[current.objective&&`Focus: ${current.objective}`,mission?.title&&`Active drill: ${mission.title}`,current.parkedQuestion&&`Parked: ${current.parkedQuestion}`].filter(Boolean);
    if(!items.length)return'';
    return `<section class="reentry-card"><span class="section-kicker">OPTIONAL RE-ENTRY</span><h2>Pick up the useful thread.</h2><ul>${items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul><button class="primary" data-go="companion">Open Better Judgment</button></section>`
  }

  function render(root,main){
    migrateLegacy();
    if(root==='sources')renderSources(main);
    else if(root==='records')renderRecords(main);
    else if(root==='memory')renderMemory(main);
    else if(root==='provider')renderProvider(main);
    else renderCompanion(main);
  }

  window.MATCH_COMPANION={render,reentryMarkup,keys:{SESSION_KEY,CHAT_KEY,MEMORY_KEY,SOURCES_KEY,RECORDS_KEY,SETTINGS_KEY},meta:{version:'1.0.0',build:'MB-SNDC-2026-0831-047',aiDefault:'off',maxChat:MAX_CHAT,maxSourceText:MAX_SOURCE_TEXT,maxImageBytes:MAX_IMAGE_BYTES}};
})();
