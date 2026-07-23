/*
Search & Destroy Companion — Guided diagnosis and practice data
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0723-033
*/
window.GUIDED_DATA = {
  questions: {
    start: {
      prompt: 'What happened that round?',
      help: 'Choose the closest answer. You only need to know what you noticed, not the hidden tactical meaning behind it.',
      options: [
        {label:'I was eliminated', detail:'Start with when it happened.', next:'died-when'},
        {label:'I stayed alive, but the round went wrong', detail:'The problem may have been time, spacing, or the objective.', next:'round-lost'},
        {label:'Our team planted the bomb', detail:'Review the post-plant decision.', next:'our-plant'},
        {label:'The enemy planted the bomb', detail:'Review the recovery attempt and defuse decision.', next:'enemy-plant'},
        {label:'I was the last teammate alive', detail:'Reduce the round to the next useful action.', result:'last-alive'}
      ]
    },
    'died-when': {
      prompt: 'When were you eliminated?',
      help: 'Timing narrows the likely mistake much faster than staring at the final kill screen and feeling betrayed by existence.',
      back:'start',
      options: [
        {label:'Near the start of the round', detail:'Before the match had much information.', next:'early-cause'},
        {label:'During a direct gunfight', detail:'You saw or fought the enemy.', next:'fight-cause'},
        {label:'Immediately after eliminating someone', detail:'The first fight ended, but danger did not.', next:'after-kill'},
        {label:'While planting, defusing, or moving to the objective', detail:'The objective action may have started before the area was safe.', result:'objective-before-safety'},
        {label:'I am not sure what caused it', detail:'Use a round-state reset instead of guessing.', result:'round-state-check'}
      ]
    },
    'early-cause': {
      prompt: 'What best describes the opening?',
      help: 'Pick what was visible in the recording or what you remember doing.',
      back:'died-when',
      options: [
        {label:'I was sprinting when the enemy appeared', result:'early-sprint'},
        {label:'Several directions could see me', result:'too-many-angles'},
        {label:'I repeated the same opening or route', result:'same-opening'},
        {label:'I had no idea where the first danger was', result:'round-state-check'}
      ]
    },
    'fight-cause': {
      prompt: 'What went wrong during the fight?',
      help: 'Choose the problem closest to the first few seconds of contact.',
      back:'died-when',
      options: [
        {label:'I saw them first but missed', result:'aim-control'},
        {label:'I stopped moving in the open', result:'frozen-feet'},
        {label:'I looked from the same place again', result:'repeek'},
        {label:'Two enemies could fight me at once', result:'two-enemies'},
        {label:'I panicked and pressed too many controls', result:'close-panic'}
      ]
    },
    'after-kill': {
      prompt: 'What did you do after the elimination?',
      help: 'The next enemy often arrives while the first fight is still occupying your attention.',
      back:'died-when',
      options: [
        {label:'I reloaded immediately', result:'reload'},
        {label:'I stayed in the same exposed place', result:'stay-visible'},
        {label:'I chased an injured enemy or the next sound', result:'chase'},
        {label:'I moved into a second enemy without checking', result:'stay-visible'}
      ]
    },
    'round-lost': {
      prompt: 'Which round problem was most obvious?',
      help: 'This section diagnoses decisions, not merely the final gunfight.',
      back:'start',
      options: [
        {label:'We had more players alive and still lost', result:'numbers-advantage'},
        {label:'Teammates were too far apart to help', result:'team-separated'},
        {label:'Talking covered useful game sounds', result:'team-noise'},
        {label:'We noticed the timer too late', result:'timer'},
        {label:'The whole round changed and I did not notice', result:'round-state-check'}
      ]
    },
    'our-plant': {
      prompt: 'What happened after your team planted?',
      help: 'The bomb timer should create pressure for the defenders, not an excuse for the attackers to wander off.',
      back:'start',
      options: [
        {label:'We left the bomb to chase enemies', result:'postplant-chase'},
        {label:'We stood together in the same place', result:'postplant-stacked'},
        {label:'Nobody could see or hear the bomb', result:'postplant-disconnected'},
        {label:'We revealed ourselves before the defuse started', result:'postplant-early-peek'}
      ]
    },
    'enemy-plant': {
      prompt: 'What happened during the recovery attempt?',
      help: 'A recovery attempt is often called a retake. The goal is to regain the site and complete the defuse.',
      back:'start',
      options: [
        {label:'We entered one player at a time', result:'retake-solo'},
        {label:'We used equipment without a clear target', result:'utility-dump'},
        {label:'Someone started defusing while enemies had a clear shot', result:'unsafe-defuse'},
        {label:'We waited so long that the defuse became impossible', result:'timer'}
      ]
    }
  },
  results: {
    'early-sprint': {
      title:'You entered danger before your weapon was ready',
      likely:'Sprinting delayed your ability to aim and fire while the enemy was already prepared for contact.',
      action:'Next round, stop sprinting before the first dangerous crossing, aim at the likely enemy position, then move into view.',
      why:'The enemy only has to fire. You otherwise have to stop, raise the weapon, find the target, and then fire.',
      terms:['pre-aim','sightline'], lesson:'one-life', fight:'ready-late', mission:'ready-before-contact'
    },
    'too-many-angles': {
      title:'Too many directions could see you',
      likely:'You moved into open space where several enemy positions could attack at the same time.',
      action:'Use cover so only one direction can see you. Clear that direction before exposing another.',
      why:'One visible threat is a solvable problem. Several simultaneous threats make even good aim irrelevant.',
      terms:['angle','cover','sightline'], lesson:'information', operation:5, mission:'one-direction'
    },
    'same-opening': {
      title:'The enemy had already learned your opening',
      likely:'Repeating the same route, timing, or position made your first contact predictable.',
      action:'Change one variable next round: timing, position, equipment, or teammate support.',
      why:'A successful route teaches the other team where and when to expect you next.',
      terms:['timing','adaptation'], lesson:'adapt-between-rounds', operation:7, mission:'change-one-variable'
    },
    'round-state-check': {
      title:'The round changed before your plan did',
      likely:'Important information such as a teammate death, bomb movement, enemy count, sound, or timer change was not turned into a new decision.',
      action:'After every elimination, plant, explosion, or long quiet period, pause for one second and ask: what changed?',
      why:'A plan can be correct at the start and wrong five seconds later.',
      terms:['information','rotation','timing'], lesson:'information', operation:18, mission:'round-state-reset'
    },
    'aim-control': {
      title:'The first shots began too far from the target',
      likely:'You saw the enemy first, but the crosshair required a large correction or the spray continued after control was lost.',
      action:'Hold the likely head or chest position before contact. Fire a calm opening burst and correct instead of dragging an uncontrolled spray.',
      why:'Seeing first only matters when the first bullets are easy to place.',
      terms:['crosshair placement','pre-aim'], fight:'saw-first-missed', operation:4, mission:'first-burst-calm'
    },
    'frozen-feet': {
      title:'You became an easy stationary target',
      likely:'Your movement stopped while the enemy kept changing the shot you needed to make.',
      action:'Use a short sideways move toward nearby cover while keeping your aim controlled.',
      why:'Purposeful movement makes the opponent correct while also improving your escape.',
      terms:['strafe','cover'], fight:'frozen-feet', operation:4, mission:'move-toward-cover'
    },
    'repeek': {
      title:'You returned to a position the enemy was already watching',
      likely:'The first appearance told the enemy exactly where your head would return.',
      action:'Break line of sight, then change timing, height, position, or route before appearing again.',
      why:'Changing the problem forces the enemy to search instead of receiving the same prepared shot twice.',
      terms:['re-peek','reposition'], fight:'repeek', operation:15, mission:'no-same-position'
    },
    'two-enemies': {
      title:'Several enemies could fight you at once',
      likely:'Your position allowed more than one opponent to have a clean shot.',
      action:'Move behind cover until one enemy disappears, then fight the remaining visible player.',
      why:'The goal is to turn one impossible fight into separate manageable fights.',
      terms:['isolate','cover','angle'], fight:'two-enemies', operation:17, mission:'isolate-one'
    },
    'close-panic': {
      title:'Too many decisions arrived at once',
      likely:'You tried to aim, move, crouch, switch, reload, and escape after contact had already begun.',
      action:'Before entering close space, choose one first response: fight, back away, or gather information.',
      why:'A pre-decided first action reduces panic without pretending every fight follows a script.',
      terms:['disengage','information'], fight:'panic-close', operation:3, mission:'choose-first-response'
    },
    'reload': {
      title:'The reload removed your ability to fight',
      likely:'The first elimination triggered an automatic reload while the area was still dangerous.',
      action:'Move behind cover, check remaining ammunition, and look for the next enemy before reloading.',
      why:'A partial magazine can still defend you. A reload animation cannot.',
      terms:['trade','cover'], fight:'reload', operation:12, mission:'survive-after-kill'
    },
    'stay-visible': {
      title:'You survived the first fight but stayed available to the second enemy',
      likely:'Your last position was known and the enemy teammate was ready to respond.',
      action:'After an elimination, leave the original line of sight before reloading, celebrating, or searching for another fight.',
      why:'The first place the next enemy checks is where the previous fight ended.',
      terms:['trade','reposition','sightline'], fight:'traded', operation:16, mission:'survive-after-kill'
    },
    'chase': {
      title:'Damage pulled you into unknown space',
      likely:'An injured enemy led you away from cover and toward support you could not see.',
      action:'Report the damage, guard the escape route, or move to block it. Follow only when the path is controlled.',
      why:'An injured enemy is still capable of leading you into a prepared teammate.',
      terms:['disengage','information'], fight:'chase', operation:13, mission:'refuse-the-chase'
    },
    'objective-before-safety': {
      title:'The objective action started before the nearby danger was controlled',
      likely:'Planting and defusing prevent the player from fighting normally. The area or supporting position was not safe enough yet.',
      action:'Before touching the objective, identify the nearest threat and which teammate or piece of cover protects the action.',
      why:'The bomb action is necessary, but beginning it at the wrong moment offers the enemy a stationary target.',
      terms:['plant','defuse','cover'], lesson:'bomb-and-time', mission:'objective-after-safety'
    },
    'numbers-advantage': {
      title:'The team gave away the player advantage',
      likely:'Players separated and offered the enemy isolated one-on-one fights.',
      action:'Stay close enough to help, protect the objective, and make the enemy take the risk.',
      why:'More living players matter only when they can respond to the same fight.',
      terms:['numbers advantage','trade','spacing'], lesson:'support-and-trades', operation:20, mission:'protect-the-advantage'
    },
    'team-separated': {
      title:'Teammates were too far apart to help',
      likely:'Several players entered related fights without support arriving in time.',
      action:'Choose one nearby teammate and stay close enough to respond without standing directly on top of them.',
      why:'Connected spacing preserves support while avoiding one shared death.',
      terms:['spacing','trade','entry'], lesson:'support-and-trades', mission:'connected-spacing'
    },
    'team-noise': {
      title:'Useful game sounds were buried under talking',
      likely:'Repeated stories, guesses, or instructions made footsteps and objective sounds harder to hear.',
      action:'Give one confirmed message: enemy count, location, direction, health, or bomb status. Then stop.',
      why:'Communication helps only when it reduces decisions instead of adding more noise.',
      terms:['callout','audio cue','information'], lesson:'information', mission:'one-useful-call'
    },
    'timer': {
      title:'The timer was checked after the decision had already become impossible',
      likely:'The route, recovery attempt, plant, or defuse required more time than remained.',
      action:'Check the timer whenever a player is eliminated, the bomb moves, the bomb is planted, or the round becomes quiet.',
      why:'The same position can be strong with forty seconds and useless with six.',
      terms:['timing','plant','defuse'], lesson:'bomb-and-time', operation:25, mission:'timer-reset'
    },
    'postplant-chase': {
      title:'The team abandoned the pressure created by the planted bomb',
      likely:'Attackers searched for kills instead of forcing defenders to reach and defuse the bomb.',
      action:'Take positions that can see or hear the bomb, support a teammate, or delay a required defender route.',
      why:'The defenders must return to the objective. Chasing removes that forced movement.',
      terms:['post-plant','crossfire','defuse'], lesson:'post-plant', operation:23, mission:'defend-the-timer'
    },
    'postplant-stacked': {
      title:'The team used one position instead of connected positions',
      likely:'Several players stood close enough for one enemy, grenade, or line of fire to threaten everyone.',
      action:'Use separate positions that can attack the same defender or protect one another.',
      why:'A crossfire creates two problems for the defender without giving them one easy target.',
      terms:['crossfire','spacing','post-plant'], lesson:'post-plant', mission:'two-connected-positions'
    },
    'postplant-disconnected': {
      title:'The bomb could not be monitored or protected',
      likely:'Positions were too far away, watched unrelated areas, or could not help one another.',
      action:'Choose a position that can see or hear the bomb and still connect to a teammate or required defender route.',
      why:'A hidden position is useless if the defuse finishes before it can act.',
      terms:['post-plant','audio cue','crossfire'], lesson:'post-plant', mission:'defend-the-timer'
    },
    'postplant-early-peek': {
      title:'The defense was given a free fight before the bomb forced action',
      likely:'An attacker revealed their position before the defender reached the bomb or began the defuse.',
      action:'Stay hidden until contact protects a teammate, delays the route, or interrupts the defuse.',
      why:'The timer already pressures the defender. Early exposure solves their problem for them.',
      terms:['post-plant','timing','defuse'], lesson:'post-plant', mission:'wait-for-objective-contact'
    },
    'retake-solo': {
      title:'The recovery attempt arrived as separate easy fights',
      likely:'Players entered before teammates were close enough to help.',
      action:'Check the timer, group without standing together, and enter on one shared count.',
      why:'A slightly later connected attempt is usually stronger than several early isolated attempts.',
      terms:['retake','spacing','trade'], lesson:'retake', operation:24, mission:'retake-together'
    },
    'utility-dump': {
      title:'Equipment was used before the first problem was identified',
      likely:'Grenades or tactical items were thrown at noise or habit instead of a position blocking the entry.',
      action:'Name the first defender position, choose equipment that affects it, then move while the effect is active.',
      why:'Equipment creates value only when the team uses the opening it produces.',
      terms:['utility','retake','timing'], lesson:'retake', mission:'utility-with-purpose'
    },
    'unsafe-defuse': {
      title:'The defuse began while the enemy still had an easy shot',
      likely:'The objective action started before immediate threats were cleared or covered.',
      action:'Clear the nearest threat, place one teammate on the likely enemy position, then defuse when the timer and risk justify it.',
      why:'The player defusing cannot fight normally and needs protection or a forced timing decision.',
      terms:['defuse','retake','cover'], lesson:'retake', mission:'protect-the-defuse'
    },
    'last-alive': {
      title:'The whole round felt like one impossible decision',
      likely:'Being last alive created pressure to solve every enemy, route, and objective at once.',
      action:'Check timer, bomb status, player count, and last confirmed positions. Choose only the next useful action.',
      why:'A difficult round is still a sequence of ordinary decisions, merely wearing an unnecessarily dramatic costume.',
      terms:['last alive','clutch','isolate'], lesson:'last-alive', operation:22, mission:'next-useful-action'
    }
  },
  missions: [
    {id:'ready-before-contact', title:'Ready Before Contact', short:'Stop sprinting before the first dangerous crossing.', instruction:'For five rounds, identify the first dangerous crossing, stop sprinting before it, and enter with your weapon aimed at the likely enemy position.', cue:'Danger ahead: aim first, then move.', route:'fight/ready-late'},
    {id:'one-direction', title:'One Direction at a Time', short:'Use cover to remove extra enemy directions.', instruction:'For five rounds, before entering open space, use cover so only one likely enemy direction can see you.', cue:'One direction. One cover. One escape.', route:'operation/5'},
    {id:'change-one-variable', title:'Change One Variable', short:'Adjust timing, position, equipment, or support.', instruction:'For five rounds, notice one repeated enemy behavior and deliberately change one part of your response.', cue:'Evidence, then one adjustment.', route:'lesson/adapt-between-rounds'},
    {id:'round-state-reset', title:'Round-State Reset', short:'Ask what changed after important events.', instruction:'For five rounds, after every elimination, plant, explosion, or long quiet period, pause and identify what changed.', cue:'What changed?', route:'operation/18'},
    {id:'first-burst-calm', title:'Calm First Burst', short:'Begin near the target and correct early.', instruction:'For five rounds, judge only whether your first three bullets began near the target. Stop an uncontrolled spray and correct.', cue:'First burst calm.', route:'fight/saw-first-missed'},
    {id:'move-toward-cover', title:'Move Toward Safety', short:'Use a short move toward cover during fights.', instruction:'For five rounds, choose nearby cover before contact and move toward it during the fight instead of freezing in open space.', cue:'Fight toward cover.', route:'fight/frozen-feet'},
    {id:'no-same-position', title:'Do Not Repeat the Same Position', short:'Change something after being seen.', instruction:'For five rounds, after being seen or damaged, change timing, position, height, or route before appearing again.', cue:'Seen once means watched.', route:'fight/repeek'},
    {id:'isolate-one', title:'Fight One Enemy at a Time', short:'Break one line of sight before fighting.', instruction:'For five rounds, when several enemies appear, move until only one can see you before continuing the fight.', cue:'Hide one. Fight one.', route:'fight/two-enemies'},
    {id:'choose-first-response', title:'Choose the First Response', short:'Decide fight, leave, or gather information.', instruction:'Before five close-range entries, choose your first response before crossing the doorway.', cue:'Fight, leave, or information.', route:'fight/panic-close'},
    {id:'survive-after-kill', title:'Survive After the Elimination', short:'Move or check before reloading.', instruction:'After every elimination for five rounds, take one survival action before reloading: cover, reposition, or check for the next enemy.', cue:'Move before reload.', route:'fight/reload'},
    {id:'refuse-the-chase', title:'Refuse the Bad Chase', short:'Do not enter unknown space for an injured enemy.', instruction:'For five rounds, stop at the edge of unknown space and guard or block the escape route instead of automatically chasing.', cue:'Injured does not mean alone.', route:'fight/chase'},
    {id:'objective-after-safety', title:'Protect the Objective Action', short:'Control the nearest threat before planting or defusing.', instruction:'For five objective attempts, identify the closest threat and the teammate or cover protecting the plant or defuse before starting it.', cue:'Safety, support, then objective.', route:'lesson/bomb-and-time'},
    {id:'protect-the-advantage', title:'Protect the Player Advantage', short:'Stay connected instead of hunting alone.', instruction:'Whenever your team has more players alive, stay close enough to help, protect the objective, and refuse unnecessary one-on-one fights.', cue:'Make them take the risk.', route:'operation/20'},
    {id:'connected-spacing', title:'Connected Spacing', short:'Close enough to help, far enough to survive separately.', instruction:'For five rounds, choose one teammate to support while avoiding standing directly behind or on top of them.', cue:'Connected, not stacked.', route:'lesson/support-and-trades'},
    {id:'one-useful-call', title:'One Useful Call', short:'Give confirmed information, then stop.', instruction:'For five rounds, limit each message to enemy count, location, direction, health, or bomb status.', cue:'One fact, then silence.', route:'lesson/information'},
    {id:'timer-reset', title:'Check the Timer on Change', short:'Use important events as timer reminders.', instruction:'For five rounds, check the timer after every elimination, plant, rotation, or long quiet period.', cue:'Event means timer check.', route:'lesson/bomb-and-time'},
    {id:'defend-the-timer', title:'Defend the Bomb and Timer', short:'Use positions connected to the objective.', instruction:'For five planted rounds, choose a position that can see or hear the bomb, support a teammate, or delay a required route.', cue:'Bomb, teammate, or required route.', route:'lesson/post-plant'},
    {id:'two-connected-positions', title:'Two Connected Positions', short:'Create different positions that support the same fight.', instruction:'For five planted rounds, avoid standing together and choose two positions that can attack the same defender or protect one another.', cue:'Different places, same problem.', route:'lesson/post-plant'},
    {id:'wait-for-objective-contact', title:'Wait for Objective Contact', short:'Do not reveal yourself from boredom.', instruction:'For five planted rounds, stay hidden until acting protects a teammate, delays a required route, or interrupts the defuse.', cue:'The timer is already working.', route:'lesson/post-plant'},
    {id:'retake-together', title:'Enter the Retake Together', short:'Group and use one shared count.', instruction:'For five recovery attempts, check the timer, group without stacking, and enter on one shared count.', cue:'Group, count, enter.', route:'lesson/retake'},
    {id:'utility-with-purpose', title:'Use Equipment for a Purpose', short:'Remove the first position blocking entry.', instruction:'For five rounds, name the position your equipment is meant to affect, then move while the effect is active.', cue:'Name the problem before the throw.', route:'lesson/retake'},
    {id:'protect-the-defuse', title:'Protect the Defuse', short:'Clear or cover the nearest threat first.', instruction:'For five recovery attempts, identify who clears, who covers, and who defuses before touching the bomb.', cue:'Clear, cover, defuse.', route:'lesson/retake'},
    {id:'next-useful-action', title:'Only the Next Useful Action', short:'Reduce last-alive pressure to one decision.', instruction:'For five last-alive moments, check the round state and name only the next useful action.', cue:'Next action, not perfect plan.', route:'lesson/last-alive'}
  ]
};
