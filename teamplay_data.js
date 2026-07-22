/*
Search & Destroy Companion — Squad Playbook module
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0722-030
*/
window.TEAMPLAY_DATA = {
  "scenarios": [
    {
      "id": "solo-heroes",
      "icon": "\u21af",
      "trigger": "Everyone is running off alone",
      "title": "Reconnect the Team",
      "tag": "TEAM SHAPE",
      "summary": "Five separate fights create five chances to lose. The team needs pairs, spacing, and a clear bomb path.",
      "leaderCall": "Pair up. Entry and trade together. Bomb stays third. Nobody takes a solo fight unless it protects the team.",
      "rule": "No one enters dangerous space without a trade close enough to answer.",
      "steps": [
        "Name the entry pair",
        "Put the bomb behind them",
        "Assign one cut or flank watch",
        "Regroup after first contact"
      ],
      "avoid": "Do not yell \u2018group up\u2019 without assigning who goes with whom.",
      "replace": [
        [
          "Everybody push!",
          "Entry and trade go first. Bomb follows."
        ],
        [
          "Stop splitting!",
          "Two together here. Two hold the other lane."
        ]
      ],
      "visual": "pair"
    },
    {
      "id": "too-loud",
      "icon": "\u25d6",
      "trigger": "The team is too loud",
      "title": "Use Comms That Create Decisions",
      "tag": "COMMS",
      "summary": "Constant talking hides footsteps, duplicates information, and prevents the living players from thinking.",
      "leaderCall": "Short calls only: count, place, direction, damage. Dead players give one useful fact, then silence.",
      "rule": "Every call must help someone aim, move, wait, or rotate.",
      "steps": [
        "Say the enemy count",
        "Say the location",
        "Add movement or damage",
        "Stop talking after the useful fact"
      ],
      "avoid": "Do not narrate the entire death or argue while teammates are still alive.",
      "replace": [
        [
          "He\u2019s right there!",
          "One close left, weak."
        ],
        [
          "Bro, how did he\u2026",
          "One top, watching stairs."
        ]
      ],
      "visual": "comms"
    },
    {
      "id": "ego-chow",
      "icon": "\u00d7",
      "trigger": "Someone keeps ego-challing",
      "title": "Turn Pride Into Pressure",
      "tag": "DISCIPLINE",
      "summary": "Repeated solo challenges give the enemy predictable kills and remove the team\u2019s ability to trade.",
      "leaderCall": "Do not feed that angle. Hold pressure, change timing, and make them fight two guns next time.",
      "rule": "After losing the same challenge once, the next attempt must change timing, position, utility, or support.",
      "steps": [
        "Name the loaded angle",
        "Break line of sight",
        "Bring a teammate or utility",
        "Re-engage from a changed problem"
      ],
      "avoid": "Do not insult the player. Give them a better job immediately.",
      "replace": [
        [
          "Quit ego-challing!",
          "Hold that player. I\u2019ll swing with you."
        ],
        [
          "You keep selling!",
          "Stop re-peeking. Watch our flank instead."
        ]
      ],
      "visual": "ego"
    },
    {
      "id": "numbers-up",
      "icon": "+",
      "trigger": "We have the numbers advantage",
      "title": "Make Them Take the Risk",
      "tag": "NUMBERS UP",
      "summary": "A player advantage disappears when teammates hunt separate kills and offer isolated fights.",
      "leaderCall": "We are up. Pair off, hold exits, and make them enter us. No solo hunt.",
      "rule": "When up players, protect trades and the objective before searching for kills.",
      "steps": [
        "Count the advantage",
        "Close unnecessary gaps",
        "Create two-player holds",
        "Force the enemy to spend time and expose themselves"
      ],
      "avoid": "Do not turn a 5v3 into three unrelated 1v1s.",
      "replace": [
        [
          "Go find them!",
          "Hold exits. Make them come through us."
        ],
        [
          "He\u2019s alone, chase!",
          "Cut his route. Keep the trade."
        ]
      ],
      "visual": "numbers"
    },
    {
      "id": "post-plant",
      "icon": "\u25c7",
      "trigger": "We planted the bomb",
      "title": "Stop Hunting After the Plant",
      "tag": "POST-PLANT",
      "summary": "The planted bomb already pressures the defenders. Chasing removes that pressure and gives them free fights.",
      "leaderCall": "Bomb is down. Two hold the site crossfire, one watches the route, one plays the trade. Make them touch the bomb.",
      "rule": "After planting, every position must watch the bomb, a teammate, or an unavoidable route.",
      "steps": [
        "Confirm the plant location",
        "Move off the obvious plant spot",
        "Build a crossfire",
        "Play sound and time before kills"
      ],
      "avoid": "Do not leave the bomb area because the last enemy looked weak.",
      "replace": [
        [
          "Push their spawn!",
          "Set crossfire. Force the defuse."
        ],
        [
          "Chase him!",
          "Hold his route and play time."
        ]
      ],
      "visual": "crossfire"
    },
    {
      "id": "retake",
      "icon": "\u21ba",
      "trigger": "We need to retake",
      "title": "Retake as One Wave",
      "tag": "RETAKE",
      "summary": "Five-second solo entries become a slow sequence of free defender kills.",
      "leaderCall": "Wait for the group. Utility first. Entry and trade together. Clear near, clear site, then touch bomb.",
      "rule": "A late coordinated retake is stronger than an early isolated one.",
      "steps": [
        "Count who is alive",
        "Choose one entry point or two timed entries",
        "Use utility before bodies",
        "Trade through the site before defusing"
      ],
      "avoid": "Do not start defusing while uncleared guns can still see the bomb.",
      "replace": [
        [
          "Go, go, go!",
          "Wait two seconds. Hit together."
        ],
        [
          "Someone hop bomb!",
          "Clear near, then cover the defuse."
        ]
      ],
      "visual": "retake"
    },
    {
      "id": "tilt",
      "icon": "\u27f2",
      "trigger": "The team is arguing or tilted",
      "title": "Reset the Next Round",
      "tag": "MENTAL RESET",
      "summary": "Blame keeps the team mentally inside the previous round while the next round is already starting.",
      "leaderCall": "Last round is done. One adjustment only: play pairs and slow first contact. Everything else can wait.",
      "rule": "Correct the next action, not the person\u2019s entire ability.",
      "steps": [
        "Stop the post-death argument",
        "Name one fix",
        "Assign the opening roles",
        "Judge the new round separately"
      ],
      "avoid": "Do not conduct a performance review during the buy or spawn countdown.",
      "replace": [
        [
          "You always do that!",
          "Next round, wait for my trade."
        ],
        [
          "This team is trash.",
          "Reset. One clean round together."
        ]
      ],
      "visual": "reset"
    },
    {
      "id": "clutch-noise",
      "icon": "\u2026",
      "trigger": "Our last player is trying to clutch",
      "title": "Protect the Clutch Player\u2019s Attention",
      "tag": "CLUTCH COMMS",
      "summary": "Multiple dead teammates giving directions create conflicting decisions and mask audio.",
      "leaderCall": "One caller only. Give confirmed information once. Then let the player hear and decide.",
      "rule": "Dead comms are facts, not remote-control instructions.",
      "steps": [
        "Choose one caller",
        "Give count, last known position, and bomb status",
        "Do not guess",
        "Go silent until new confirmed information appears"
      ],
      "avoid": "Do not shout directions after every camera movement.",
      "replace": [
        [
          "Turn around! No, left!",
          "Last seen left side, ten seconds ago."
        ],
        [
          "He has to be there!",
          "Unknown. Bomb is down on site."
        ]
      ],
      "visual": "clutch"
    }
  ],
  "plans": [
    {
      "id": "attack-default",
      "side": "Attack",
      "name": "Default Team Attack",
      "icon": "\u25b6",
      "goal": "Take information without donating the bomb or first death.",
      "call": "Entry and trade together. Bomb third. One holds the rotate, one watches flank. First contact calls numbers, then we decide.",
      "roles": [
        [
          "Entry",
          "Clear the first dangerous space"
        ],
        [
          "Trade",
          "Stay close enough to answer the entry fight"
        ],
        [
          "Bomb",
          "Follow behind the pair and protect the objective"
        ],
        [
          "Cut",
          "Hold the defender rotation"
        ],
        [
          "Flank",
          "Protect the team from the late route"
        ]
      ],
      "rules": [
        "Do not let bomb lead",
        "Do not chase first damage",
        "Regroup before changing sites"
      ]
    },
    {
      "id": "attack-fast",
      "side": "Attack",
      "name": "Fast Site Hit",
      "icon": "\u00bb",
      "goal": "Overload one site before defenders can settle or rotate.",
      "call": "Three hit together. Entry clears near, trade clears deep, bomb plants safe. Two players cut rotation. No one stops in the doorway.",
      "roles": [
        [
          "Entry",
          "Break the first hold"
        ],
        [
          "Trade",
          "Clear the second gun and protect entry"
        ],
        [
          "Bomb",
          "Plant only after near space is controlled"
        ],
        [
          "Cut 1",
          "Stop the fastest rotate"
        ],
        [
          "Cut 2",
          "Watch flank or second rotate"
        ]
      ],
      "rules": [
        "Speed ends at contact",
        "Utility before the doorway",
        "Post-plant positions immediately"
      ]
    },
    {
      "id": "attack-slow",
      "side": "Attack",
      "name": "Slow Information Round",
      "icon": "\u25f7",
      "goal": "Make defenders reveal habits before committing the bomb.",
      "call": "Pairs hold both sides. Bomb stays safe. No solo push. We commit when we hear utility, see a rotation, or earn a pick.",
      "roles": [
        [
          "Pair A",
          "Pressure without overcommitting"
        ],
        [
          "Pair B",
          "Watch the opposite site and rotation"
        ],
        [
          "Bomb",
          "Stay central and ready to join the stronger side"
        ],
        [
          "Info",
          "Take one safe information peek"
        ],
        [
          "Flex",
          "Support the first confirmed advantage"
        ]
      ],
      "rules": [
        "Pressure is not permission to die",
        "Call defender utility",
        "Commit together"
      ]
    },
    {
      "id": "defense-default",
      "side": "Defense",
      "name": "Hold and Rotate on Proof",
      "icon": "\u25a3",
      "goal": "Keep both sites protected without panic-rotating on noise.",
      "call": "Two each site, one flex. Hold first contact and call numbers. Flex moves first. Site players rotate only on proof.",
      "roles": [
        [
          "A Anchor",
          "Stay alive and identify the hit"
        ],
        [
          "A Support",
          "Hold the trade or secondary route"
        ],
        [
          "B Anchor",
          "Stay alive and identify the hit"
        ],
        [
          "B Support",
          "Hold the trade or secondary route"
        ],
        [
          "Flex",
          "Move first on confirmed information"
        ]
      ],
      "rules": [
        "Information before rotation",
        "Anchor survival matters",
        "Do not chase attackers away from your site"
      ]
    },
    {
      "id": "post-plant-plan",
      "side": "Objective",
      "name": "Post-Plant Crossfire",
      "icon": "\u25c7",
      "goal": "Force defenders to expose themselves to stop the timer.",
      "call": "Two crossfire the bomb. One holds the fastest route. One protects the trade. Last player floats between sound cues. Nobody hunts.",
      "roles": [
        [
          "Bomb Watch",
          "See or hear the defuse"
        ],
        [
          "Crossfire",
          "Punish the player fighting Bomb Watch"
        ],
        [
          "Route Hold",
          "Delay the fastest retake lane"
        ],
        [
          "Trade",
          "Stay near the first contact"
        ],
        [
          "Flex",
          "Move only when information creates a gap"
        ]
      ],
      "rules": [
        "Play time",
        "Keep two guns connected",
        "Peek on bomb contact, not boredom"
      ]
    },
    {
      "id": "retake-plan",
      "side": "Objective",
      "name": "Coordinated Retake",
      "icon": "\u21ba",
      "goal": "Enter with enough connected guns to trade through the site.",
      "call": "Group first. Utility opens. Entry clears near, trade clears deep, third covers bomb. Last two cut exits and flank.",
      "roles": [
        [
          "Entry",
          "Clear the closest threat"
        ],
        [
          "Trade",
          "Stay attached to entry"
        ],
        [
          "Bomb Cover",
          "Control the plant and defuse lane"
        ],
        [
          "Exit Cut",
          "Stop defenders escaping or re-peeking"
        ],
        [
          "Flank Watch",
          "Protect the retake from the late route"
        ]
      ],
      "rules": [
        "Do not trickle",
        "Clear before defuse",
        "Use the same countdown"
      ]
    }
  ],
  "comms": [
    {
      "id": "first-contact",
      "title": "First Contact",
      "formula": "COUNT + PLACE + MOVEMENT",
      "bad": "They\u2019re all here!",
      "good": "Three B, two pushing in, one holding back."
    },
    {
      "id": "damage",
      "title": "Damage Call",
      "formula": "COUNT + PLACE + DAMAGE + DIRECTION",
      "bad": "He\u2019s one shot!",
      "good": "One top mid, weak, backing toward B."
    },
    {
      "id": "bomb",
      "title": "Bomb Information",
      "formula": "BOMB STATUS + PLACE + CONTROL",
      "bad": "Bomb! Bomb!",
      "good": "Bomb down outside A. We control it."
    },
    {
      "id": "rotation",
      "title": "Rotation Call",
      "formula": "WHO + ACTION + REASON",
      "bad": "Rotate now!",
      "good": "Flex rotate B. Three confirmed there."
    },
    {
      "id": "death",
      "title": "Death Call",
      "formula": "KILLER PLACE + MOVEMENT + THEN SILENCE",
      "bad": "How did he kill me? He\u2019s camping!",
      "good": "One close right, moving toward site."
    },
    {
      "id": "clutch",
      "title": "Clutch Call",
      "formula": "CONFIRMED FACT ONCE",
      "bad": "Turn around! He has to be behind you!",
      "good": "Last seen mid fifteen seconds ago. Bomb is planted A."
    }
  ]
};
