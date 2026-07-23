/*
Search & Destroy Companion — Winning Fights module
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0723-034
*/
window.FIGHT_DATA = [
  {
    id:'ready-late',
    trigger:'I was still raising my weapon when they fired',
    title:'Be Ready Before Contact',
    term:'pre-aim',
    summary:'You entered a likely fight while sprinting, looking away, or preparing the weapon only after the enemy was already ready.',
    correction:'Slow down before the dangerous line. Aim where a chest or head is likely to appear, then move into view with the weapon ready.',
    cue:'Danger ahead: stop sprinting, aim first, then move.',
    mission:'For five rounds, identify one likely enemy position before crossing into it and arrive ready to fire.',
    steps:['Name the likely enemy position','Stop sprinting before exposure','Place the crosshair at enemy height','Move through while ready to fire'],
    relatedOps:[2,10,11],
    visual:'preaim'
  },
  {
    id:'saw-first-missed',
    trigger:'I saw them first and still missed',
    title:'Make the First Shots Easier',
    term:'crosshair placement',
    summary:'Seeing first created an advantage, but your crosshair began too far away or you kept firing after control was lost.',
    correction:'Begin close to the expected target. Fire a controlled opening burst, then stop and correct instead of dragging an uncontrolled spray across the screen.',
    cue:'Crosshair close. First burst calm. Correct if control breaks.',
    mission:'Track whether the first three bullets began on target or required a large correction.',
    steps:['Hold expected head or chest height','Aim at the edge the enemy will cross','Fire the opening burst','Stop, correct, or leave if control is lost'],
    relatedOps:[4,11],
    visual:'accuracy'
  },
  {
    id:'frozen-feet',
    trigger:'I stopped moving during the fight',
    title:'Move Toward Safety While Fighting',
    term:'strafe',
    summary:'You became stationary while the opponent kept moving and forcing aim corrections.',
    correction:'Use a short sideways movement while firing. Move toward nearby cover instead of moving randomly in open space.',
    cue:'Shoot while moving toward safety.',
    mission:'After every gunfight, ask whether your movement improved your position or simply stopped.',
    steps:['Know which side has cover','Begin the fight with a short sideways move','Keep the crosshair steady while moving','Finish behind cover or leave the fight'],
    relatedOps:[4,14],
    visual:'strafe'
  },
  {
    id:'repeek',
    trigger:'I looked from the same place again and died',
    title:'Do Not Repeat the Same Exposed Position',
    term:'re-peek',
    summary:'The first appearance told the enemy exactly where to aim. Returning from the same place and timing gave them a prepared shot.',
    correction:'After contact, change timing, position, height, or route. Appear again only after changing the problem the enemy prepared for.',
    cue:'Seen once means that position is being watched.',
    mission:'Refuse one immediate return to the same position per round. Move, wait, or use equipment instead.',
    steps:['Gather information from the first look','Break the line of sight','Change timing, height, or location','Return only with a new advantage'],
    relatedOps:[15,14],
    visual:'repeek'
  },
  {
    id:'open-fight',
    trigger:'I fought where several enemies could see me',
    title:'Fight One Direction at a Time',
    term:'angle',
    summary:'You exposed yourself to the target and several supporting positions at the same time.',
    correction:'Use cover to hide most of your body and remove every direction except the one you are actively checking.',
    cue:'One enemy direction. One piece of cover. One escape.',
    mission:'Before each fight, identify the cover you will return to if the first shots go badly.',
    steps:['Choose the direction you are checking','Place cover between you and other threats','Expose only enough to shoot','Return to cover before checking another direction'],
    relatedOps:[5,14,17],
    visual:'cover'
  },
  {
    id:'traded',
    trigger:'I won one fight and the next enemy immediately eliminated me',
    title:'Survive the Second Enemy',
    term:'trade',
    summary:'You won the first fight but remained visible, reloaded, or moved into the teammate already prepared to respond.',
    correction:'After an elimination, assume another enemy may be close. Break the line of sight, check the likely approach, then reload or fight again.',
    cue:'Elimination confirmed. Move before reloading.',
    mission:'After every elimination, take one survival action before reloading: cover, movement, or checking for the next enemy.',
    steps:['Finish the first enemy','Leave the original line of sight','Check the likely supporting route','Reload only after safety is earned'],
    relatedOps:[12,16],
    visual:'trade'
  },
  {
    id:'chase',
    trigger:'I chased an injured enemy and died',
    title:'Do Not Let Damage Pull You Into a Trap',
    term:'disengage',
    summary:'An injured enemy pulled you away from cover and into prepared support or unknown space.',
    correction:'Watch the escape route, report the damage, or move to block them. Follow only when the path is controlled and support is available.',
    cue:'Injured does not mean alone.',
    mission:'Let one injured enemy escape when finishing the elimination would require entering an uncleared area.',
    steps:['Report the damage and direction','Pause at the edge of known space','Watch or block the escape route','Advance only with information or support'],
    relatedOps:[13,14],
    visual:'chase'
  },
  {
    id:'panic-close',
    trigger:'I panicked when an enemy appeared nearby',
    title:'Choose the First Response Before Entering',
    term:'disengage',
    summary:'The enemy appeared and your brain tried to aim, move, crouch, switch weapons, reload, and escape at the same time.',
    correction:'Before entering a close area, choose one first response: fight, back away, or gather information and reset.',
    cue:'Choose before the doorway: fight, back away, or gather information.',
    mission:'Before five close-range entries, say your first response in one word.',
    steps:['Recognize the close-range entrance','Choose fight, back away, or information','Perform only that first response','Add the next action after control returns'],
    relatedOps:[3,14],
    visual:'panic'
  },
  {
    id:'reload',
    trigger:'I reloaded after an elimination and died',
    title:'Reload Only After Safety',
    term:'trade',
    summary:'The automatic reload removed your ability to fight while the area was still dangerous.',
    correction:'Check ammunition, cover, the elimination feed, and the likely second enemy before beginning the reload.',
    cue:'Ammunition left? Enemies left? Cover first.',
    mission:'Delay every automatic reload long enough to decide whether one more fight is possible.',
    steps:['Check remaining ammunition','Break the line of sight','Check the likely supporting route and elimination feed','Reload only when the full action is safe'],
    relatedOps:[12,16],
    visual:'reload'
  },
  {
    id:'two-enemies',
    trigger:'Two enemies fought me at the same time',
    title:'Turn Two Enemies Into Separate Fights',
    term:'isolate',
    summary:'You remained where several opponents had a clear shot at the same time.',
    correction:'Use cover, distance, or a doorway to hide one opponent while fighting the other. Leave if you cannot separate them.',
    cue:'If two can see you, move until only one can.',
    mission:'When several enemies appear, break one line of sight before firing again.',
    steps:['Identify the nearest cover edge','Move until one enemy disappears','Fight the remaining visible player','Reset before exposing the next player'],
    relatedOps:[17,21],
    visual:'isolate'
  }
];
