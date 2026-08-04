window.STARTER_DATA={
  meta:{version:"1.0.0",reviewed:"July 2026"},
  lessons:[
    {id:"round",title:"How a round is won",summary:"One life. One bomb. No respawn until the round ends.",points:[
      "Attackers win by eliminating the defenders or planting the bomb and preventing the defuse.",
      "Defenders win by eliminating the attackers before a plant, letting time expire, or defusing a planted bomb.",
      "If the bomb is planted, eliminating the attackers is not enough. The defenders still have to defuse it."
    ],terms:["plant","defuse","attacker","defender"]},
    {id:"life",title:"Your one life changes everything",summary:"A useful life is worth more than a careless early kill.",points:[
      "Do not sprint blindly into the first likely fight.",
      "Move from cover to cover and keep the next dangerous direction in mind.",
      "If a fight is poor, leaving it is a decision—not cowardice."
    ],terms:["cover","sightline","disengage"]},
    {id:"attack",title:"Attacking without wandering",summary:"Move with a purpose: take space, protect the bomb, and help the first teammate.",points:[
      "Stay close enough to help a teammate quickly, but not so close that one attack defeats both of you.",
      "The first player checks the immediate danger. The next player is ready to respond.",
      "After planting, stop hunting. Use positions that can see or hear the bomb and support each other."
    ],terms:["entry player","trade","post-plant"]},
    {id:"defense",title:"Defending without giving the site away",summary:"Make the attackers spend time and take risks.",points:[
      "You do not need to push simply because the round has started.",
      "Hold useful ground, collect information, and avoid showing the same position every round.",
      "Rotate only when the information supports it. A noise is a clue, not always the entire attack."
    ],terms:["hold","rotate","anchor"]},
    {id:"information",title:"Sound and information",summary:"Every sound, elimination, and bomb update changes the round.",points:[
      "Pause your own movement when you need to hear clearly.",
      "Give short calls: number, place, movement, and damage if known.",
      "When the last teammate is alive, give confirmed information once—then let them hear the game."
    ],terms:["callout","kill feed","clutch"]},
    {id:"fights",title:"Take cleaner fights",summary:"Prepare before contact instead of trying to rescue every fight with aim.",points:[
      "Keep your crosshair near the height and direction an enemy is likely to appear.",
      "Expose one dangerous direction at a time whenever possible.",
      "Do not immediately look from the same place again after the enemy learns your position."
    ],terms:["pre-aim","crosshair placement","re-peek"]},
    {id:"bomb",title:"Let the bomb and timer decide",summary:"The objective changes what the correct fight looks like.",points:[
      "Before planting or defusing, check the timer, living players, and dangerous directions.",
      "After your team plants, the defenders must act. Make them spend time finding you.",
      "During a recovery attempt, enter with teammates when possible instead of arriving one at a time."
    ],terms:["retake","post-plant","tap the bomb"]},
    {id:"mindset",title:"Learn without accepting abuse",summary:"A mistake is information. Insults are not instruction.",points:[
      "After a death, name the decision you can change—not a personality flaw.",
      "Change one behavior at a time and leave your controls alone long enough to build familiarity.",
      "Mute people who prevent you from hearing or learning. Their volume does not make them correct."
    ],terms:["tilt","muscle memory"]}
  ],
  terms:{
    "plant":"Start the bomb at a target site.",
    "defuse":"Stop a planted bomb before it explodes.",
    "attacker":"A player on the side carrying and planting the bomb.",
    "defender":"A player protecting the sites and defusing if needed.",
    "cover":"A solid object that blocks enemy fire.",
    "sightline":"A path along which one player can see another.",
    "disengage":"Leave a fight and move to a safer or more useful position.",
    "entry player":"The first teammate entering a dangerous area.",
    "trade":"Quickly eliminate the opponent who just eliminated your teammate.",
    "post-plant":"The part of the round after the attackers plant the bomb.",
    "hold":"Watch a useful area instead of advancing.",
    "rotate":"Move from one area or bomb site to another.",
    "anchor":"A defender who holds important ground and delays the attack.",
    "callout":"A short, agreed name for a place on the map.",
    "kill feed":"The on-screen list showing recent eliminations.",
    "clutch":"Win a difficult round as the last player or against greater numbers.",
    "pre-aim":"Aim toward a likely enemy position before the enemy appears.",
    "crosshair placement":"Keeping the center of the screen where an enemy is likely to appear.",
    "re-peek":"Show yourself again from a position the enemy already saw.",
    "retake":"Regain a planted site and defuse the bomb.",
    "tap the bomb":"Briefly begin a defuse to force a hidden attacker to react.",
    "tilt":"Frustration that starts affecting decisions.",
    "muscle memory":"Movement that becomes familiar through consistent repetition."
  },
  settings:[
    {group:"Controls",name:"Control mode",start:"Advanced Mode",confidence:"Common starting point",why:"Lets you choose how each weapon aims and fires instead of forcing one automatic behavior."},
    {group:"Controls",name:"Aim Assist",start:"On",confidence:"Strong beginner consensus",why:"Helps steady small corrections. Learn with it before experimenting without it."},
    {group:"Controls",name:"Fixed R-Fire Button",start:"On",confidence:"Common starting point",why:"Keeps the fire button in a predictable location."},
    {group:"Controls",name:"R-Fire Button for Rotation",start:"On",confidence:"Common starting point",why:"Allows aiming while pressing and dragging the right fire button."},
    {group:"Controls",name:"ADS Button for Rotation",start:"On",confidence:"Common starting point",why:"Allows aiming while holding and dragging the aim-down-sights button."},
    {group:"Controls",name:"Fixed Virtual Joystick Position",start:"On",confidence:"Common starting point",why:"Builds a repeatable movement start point."},
    {group:"Controls",name:"Always Sprint / Joystick Auto-Sprint",start:"Off",confidence:"Strong S&D starting point",why:"Reduces accidental noisy sprints into prepared enemies. Sprint deliberately instead."},
    {group:"Controls",name:"Quick Weapon Switch",start:"On",confidence:"Common preference",why:"Makes the swap control easier to reach. It does not secretly shorten the weapon's built-in animation."},
    {group:"Aiming",name:"Tap to ADS vs Tap and Hold",start:"Thumbs: Tap to ADS · 3-finger: try Tap and Hold",confidence:"Personal preference",why:"Tap frees the thumb after aiming. Hold gives direct control over exactly when the scope closes. Test both for several matches before deciding."},
    {group:"View",name:"Field of View (FOV)",start:"75",confidence:"Common phone baseline",why:"A practical middle point: wider awareness without making distant opponents too small."},
    {group:"View",name:"Useful phone FOV range",start:"70–80",confidence:"Common range, not a rule",why:"Lower makes targets look larger; higher shows more around you. Change in steps of 2 and stop when enemies become hard to identify."},
    {group:"View",name:"Sync ADS FOV to Scope Zoom",start:"Off for a new phone player",confidence:"Situational",why:"Off keeps distant targets visually larger. On gives a wider, smoother view with less apparent recoil but smaller targets."},
    {group:"Sensitivity",name:"Rotation Mode",start:"Fixed Speed",confidence:"Strong learning baseline",why:"The same finger movement produces a repeatable turn, which is easier for building consistency."},
    {group:"Performance",name:"Frame Rate",start:"Highest stable option",confidence:"Strong consensus",why:"Smooth, stable frames matter more to gunfights than decorative graphics."},
    {group:"Performance",name:"Graphics Quality",start:"Low or Medium",confidence:"Device-dependent",why:"Use the best-looking level that never causes heat, stutter, or frame drops."},
    {group:"Audio",name:"Music Volume",start:"0–10",confidence:"Strong S&D preference",why:"Footsteps, reloads, equipment, and bomb sounds carry useful information."}
  ],
  perkSets:[
    {title:"Quiet learner",items:["Skulker","Ghost","Dead Silence"],why:"Move carefully, reduce common tracking threats, and keep walking or crouched movement quiet."},
    {title:"Objective survivor",items:["Flak Jacket","Hard Wired","Dead Silence"],why:"Better protection from explosives and enemy traps while moving around the objective."},
    {title:"Aggressive support",items:["Lightweight","Quick Fix","Dead Silence"],why:"Move quickly, recover after winning a fight, and avoid broadcasting every careful step."}
  ],
  equipment:[
    {name:"Frag Grenade",use:"A flexible first lethal. Learn to time it and send it toward cover before entering."},
    {name:"Trip Mine",use:"Guards a flank or warns that someone entered. Move it between rounds so it is not predictable."},
    {name:"Smoke Grenade",use:"Blocks a dangerous sightline for a crossing, plant, or defuse. Place smoke between the enemy and the objective—not blindly on your own team."},
    {name:"Trophy System",use:"Protects a plant, defuse, or held position from incoming throwable equipment."},
    {name:"Concussion Grenade",use:"Disrupts a close position before entering. Move while the effect is useful."}
  ],
  guns:[
    {rank:1,name:"PP19 Bizon",role:"Forgiving close-to-mid-range SMG",why:"Large magazine, manageable recoil, and enough forgiveness to focus on decisions."},
    {rank:2,name:"LK24",role:"Accurate mid-range assault rifle",why:"Stable feel for learning cover, pre-aiming, and controlled bursts."},
    {rank:3,name:"AK117",role:"Flexible faster-firing assault rifle",why:"Useful across many ordinary fights without demanding perfect recoil control."},
    {rank:4,name:"QQ9",role:"Aggressive close-range SMG",why:"Introduces faster entry play and movement once the Bizon feels comfortable."},
    {rank:5,name:"DL Q33",role:"Beginner sniper trial",why:"A dependable way to learn centering and one-shot timing before choosing a faster, less forgiving sniper."}
  ]
};
