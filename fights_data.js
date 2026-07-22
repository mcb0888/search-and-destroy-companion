/*
Search & Destroy Companion — Winning Fights module
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0721-021
*/
window.FIGHT_DATA = [
  {
    id:'ready-late',
    trigger:'I never got my gun up',
    title:'Ready Before Contact',
    tag:'PRE-AIM',
    summary:'You entered a likely fight while sprinting, looking away, or raising the weapon after the enemy was already prepared.',
    correction:'Slow before the threat line. Put the crosshair where a chest or head can appear, then enter with the weapon ready.',
    cue:'Danger ahead: stop sprinting, aim first, then move.',
    mission:'For five rounds, identify one threat line before crossing it and arrive with your weapon ready.',
    steps:['Name the likely angle','Stop sprinting before exposure','Place the crosshair at enemy height','Move through while ready to fire'],
    relatedOps:[2,10,11],
    visual:'preaim'
  },
  {
    id:'saw-first-missed',
    trigger:'I saw them first and still missed',
    title:'Make the First Shots Easy',
    tag:'ACCURACY',
    summary:'Seeing first created an advantage, but your crosshair started too far away or the spray continued after control was lost.',
    correction:'Begin close to the expected target. Fire a controlled opening burst, then reset instead of dragging a broken spray across the screen.',
    cue:'Crosshair close. First burst calm. Reset if control breaks.',
    mission:'Track whether the first three bullets began on target or required a large correction.',
    steps:['Hold expected head or chest height','Center on the edge they will cross','Fire the opening burst','Reset or disengage if the spray escapes'],
    relatedOps:[4,11],
    visual:'accuracy'
  },
  {
    id:'frozen-feet',
    trigger:'They moved and I froze',
    title:'Fight With Your Feet',
    tag:'MOVEMENT',
    summary:'You became stationary while the opponent kept forcing aim corrections.',
    correction:'Use a short controlled strafe while firing. Move toward nearby cover instead of dancing randomly in open space.',
    cue:'Shoot and slide your body toward safety.',
    mission:'After every gunfight, ask whether your movement improved your angle or merely stopped.',
    steps:['Know which side has cover','Begin the fight with a short strafe','Keep the crosshair steady while moving','Finish behind cover or disengage'],
    relatedOps:[4,14],
    visual:'strafe'
  },
  {
    id:'repeek',
    trigger:'I re-peeked and died',
    title:'Do Not Feed the Held Angle',
    tag:'RE-PEEK',
    summary:'The first peek told the enemy exactly where your head would return. The second peek gave them a prepared shot.',
    correction:'After contact, change timing, position, height, or route. Reappear only after changing the problem the enemy prepared for.',
    cue:'Seen once means the angle is loaded.',
    mission:'Refuse one immediate re-peek per round. Reposition, delay, or use utility instead.',
    steps:['Take the first information peek','Break line of sight','Change timing, height, or location','Re-engage only with a new advantage'],
    relatedOps:[15,14],
    visual:'repeek'
  },
  {
    id:'open-fight',
    trigger:'I fought away from cover',
    title:'Make One Angle Fight You',
    tag:'COVER',
    summary:'You exposed yourself to the target and several supporting angles at the same time.',
    correction:'Use cover to hide most of your body and remove every angle except the one you are actively fighting.',
    cue:'One enemy, one angle, one exit.',
    mission:'Before each challenge, identify the cover you will return to if the fight turns bad.',
    steps:['Choose the threat you are clearing','Place cover between you and other threats','Expose only enough to shoot','Return to cover before checking another angle'],
    relatedOps:[5,14,17],
    visual:'cover'
  },
  {
    id:'traded',
    trigger:'I got traded immediately',
    title:'Survive the Second Gun',
    tag:'TRADE CONTROL',
    summary:'You won the first fight but stayed visible, reloaded, or walked into the teammate already aiming to trade.',
    correction:'After a kill, assume a second player is close. Break sight, check the next lane, then reload or re-challenge.',
    cue:'Kill confirmed. Move before celebrating.',
    mission:'After every kill, perform one survival action before reloading: cover, reposition, or second-player check.',
    steps:['Finish the first player','Break the original sightline','Check the likely trade path','Reload only after safety is earned'],
    relatedOps:[12,16],
    visual:'trade'
  },
  {
    id:'chase',
    trigger:'I chased a weak player and died',
    title:'Damage Is Pressure, Not Permission',
    tag:'CHASE DISCIPLINE',
    summary:'A damaged enemy pulled you away from cover and into prepared support or unknown space.',
    correction:'Hold the escape route, communicate the damage, or reposition to cut them off. Chase only when the path is controlled.',
    cue:'Weak does not mean alone.',
    mission:'Let one weak enemy escape when finishing the kill would require entering uncleared space.',
    steps:['Call the damage and direction','Pause at the edge of known space','Hold or cut the escape route','Advance only with information or support'],
    relatedOps:[13,14],
    visual:'chase'
  },
  {
    id:'panic-close',
    trigger:'I panicked at close range',
    title:'Use One Pre-Decided Response',
    tag:'CLOSE RANGE',
    summary:'The enemy appeared and your brain tried to aim, move, crouch, swap, reload, and escape at the same time.',
    correction:'Before entering close space, choose one response: commit to the fight, back out, or gather information and reset.',
    cue:'Choose before the doorway: fight, back, or info.',
    mission:'Before five close-range entries, say your response in one word.',
    steps:['Recognize the close-range doorway','Choose fight, back, or info','Execute only that first response','Add the next action after control returns'],
    relatedOps:[3,14],
    visual:'panic'
  },
  {
    id:'reload',
    trigger:'I reloaded after the kill and died',
    title:'Reload Only After Safety',
    tag:'RELOAD',
    summary:'The reload reflex removed your ability to fight while the area was still dangerous.',
    correction:'Check ammunition, cover, the kill feed, and the likely second player before starting the animation.',
    cue:'Bullets left? Threats left? Cover first.',
    mission:'Delay every automatic reload long enough to answer whether one more fight is possible.',
    steps:['Check remaining ammunition','Break line of sight','Check the trade route and kill feed','Reload only when the full animation is safe'],
    relatedOps:[12,16],
    visual:'reload'
  },
  {
    id:'two-enemies',
    trigger:'Two enemies shot me together',
    title:'Turn Two Enemies Into Two Fights',
    tag:'ISOLATION',
    summary:'You challenged multiple visible opponents and gave both of them a clean shot.',
    correction:'Use cover, distance, or a doorway to hide one opponent while fighting the other. If you cannot isolate them, disengage.',
    cue:'If two can see you, leave or narrow the angle.',
    mission:'When multiple enemies appear, prioritize breaking one line of sight before firing again.',
    steps:['Identify the nearest cover edge','Move until one enemy disappears','Fight the remaining visible player','Reset before exposing the second player'],
    relatedOps:[17,21],
    visual:'isolate'
  }
];
