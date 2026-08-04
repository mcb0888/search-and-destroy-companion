window.STARTER_DATA={
  meta:{version:"1.2.0",reviewed:"August 2026"},
  lessons:[
    {id:"round",title:"How a round is won",summary:"One life. One bomb. No respawn until the round ends.",points:[
      "Attackers win by eliminating the defenders or planting the bomb and preventing the defuse.",
      "Defenders win by eliminating the attackers before a plant, letting time expire, or defusing a planted bomb.",
      "If the bomb is planted, eliminating the attackers is not enough. The defenders still have to defuse it."
    ],terms:["plant","defuse","attacker","defender"]},
    {id:"life",title:"Your one life affects everyone",summary:"Your life provides support, information, and pressure—not just a chance at one kill.",points:[
      "A careless early death does not only remove your gun. It forces teammates to watch more directions and take worse fights.",
      "Do not rush a poor fight because an opponent taunted you, eliminated you last round, or keeps using a position you dislike.",
      "Leaving a poor fight is discipline, not cowardice. Stay useful and make the objective decide where the enemy must go."
    ],terms:["cover","disengage","tilt"]},
    {id:"attack",title:"Help the push instead of wandering",summary:"Choose a useful job and make a teammate's next fight easier.",points:[
      "Stay close enough to help a teammate quickly, but far enough apart that one burst or grenade cannot defeat both of you.",
      "If the first player commits, either support promptly or clearly say you cannot. Half-following usually leaves both players alone.",
      "After planting, stop collecting kills. Watch the bomb, support each other, and force the defenders to spend time."
    ],terms:["entry player","trade","post-plant"]},
    {id:"defense",title:"Patience is part of defending",summary:"Holding useful ground is not a failure to play; giving it away for no reason is.",points:[
      "Defenders do not owe attackers a fair fight. Make them spend time, equipment, and attention to reach a site.",
      "If an enemy keeps holding one position, stop feeding the same fight. Use equipment, another route, teammate support, or the objective to make them move.",
      "Rotate on confirmed information, not panic or the loudest voice. A noise is a clue, not always the entire attack."
    ],terms:["hold","rotate","anchor"]},
    {id:"information",title:"Communicate without taking over",summary:"Useful information is short, confirmed, and then quiet.",points:[
      "Pause your own movement when you need to hear clearly.",
      "Build a call from what you know: enemy count, plain location, movement, and damage if known.",
      "If you do not know the usual place name, use an obvious landmark, level, and direction. Learn names by matching repeated teammate calls to what you see while spectating.",
      "After dying, give one confirmed call and stop. Do not narrate, yell, or play your teammate's controls unless they ask."
    ],calloutGuide:{
      title:"When you do not know the usual map name",
      formula:[
        {label:"COUNT",value:"One"},
        {label:"LANDMARK",value:"top window"},
        {label:"MOVEMENT",value:"moving left"},
        {label:"DAMAGE",value:"weak"}
      ],examples:["One top window, moving left.","Two by red car.","Bomb down at B stairs."],
      note:"Accurate plain language beats confidently using the wrong name. With regular teammates, agree on unclear names after the match—not while someone is trying to survive."
    },terms:["callout","weak","kill feed","spectate","clutch"]},
    {id:"fights",title:"Do not let pride choose your fights",summary:"The enemy's behavior is not an order to challenge them.",points:[
      "A player who taunts, keeps firing at your character after an elimination, or talks trash may want you angry because angry players become predictable.",
      "Do not return to a prepared position simply to prove you can win. Prepare your crosshair, expose one direction at a time, and avoid an immediate re-peek.",
      "Change your height, timing, or route; use equipment or teammate support; or leave that player guarding an area that no longer matters."
    ],terms:["pre-aim","re-peek","ego challenge"]},
    {id:"bomb",title:"Let the objective outrank the argument",summary:"The bomb, timer, and living players matter more than revenge or score.",points:[
      "Before planting or defusing, check the timer, living players, and dangerous directions.",
      "After your team plants, do not hunt the player who annoyed you. The defenders must act, so make them spend time finding you.",
      "When your team has more living players, do not hand the opponent a series of separate fair fights. Stay connected and make every elimination answerable."
    ],terms:["retake","post-plant","tap the bomb","player advantage"]},
    {id:"mindset",title:"Stay useful around bad behavior",summary:"You can learn from mistakes without accepting insults or spreading them.",points:[
      "Some players provoke opponents because anger makes decisions easier to predict. Recognize the bait without answering it.",
      "Correct the next action, not the person. If you are dead, make one useful call and then let living teammates hear and decide.",
      "Mute players whose insults or noise interfere with the round. Do not spend the next round arguing about the last one."
    ],terms:["tilt","callout","muscle memory"]}
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
    "callout":"Short, confirmed information about enemy count, location, movement, damage, or the bomb.",
    "weak":"An enemy who has already taken significant damage.",
    "kill feed":"The on-screen list showing recent eliminations.",
    "spectate":"Watch a living teammate after you have been eliminated.",
    "clutch":"Win a difficult round as the last player or against greater numbers.",
    "pre-aim":"Aim toward a likely enemy position before the enemy appears.",
    "crosshair placement":"Keeping the center of the screen where an enemy is likely to appear.",
    "re-peek":"Show yourself again from a position the enemy already saw.",
    "ego challenge":"Take a poor or unnecessary fight mainly to prove you can win it.",
    "retake":"Regain a planted site and defuse the bomb.",
    "tap the bomb":"Briefly begin a defuse to force a hidden attacker to react.",
    "player advantage":"Having more living teammates than the other team.",
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
