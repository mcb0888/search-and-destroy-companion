/*
Search & Destroy Companion — Squad Playbook module
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0723-031
*/
window.TEAMPLAY_DATA = {
  "scenarios": [
    {
      "id": "solo-heroes",
      "icon": "↯",
      "trigger": "Everyone is running off alone",
      "title": "Bring the Team Back Together",
      "tag": "STAY TOGETHER",
      "summary": "Five separate fights give the enemy five easy chances to win. The team needs pairs, sensible spacing, and a clear path for the bomb carrier.",
      "leaderCall": "Pair up. The first player and backup move together. The bomb carrier stays behind them. Nobody takes a fight alone.",
      "rule": "No one enters a dangerous area without a teammate close enough to help immediately.",
      "steps": [
        "Choose who moves first",
        "Choose who follows and helps",
        "Keep the bomb carrier behind the pair",
        "Meet again after the first enemy contact"
      ],
      "avoid": "Do not tell everyone to stay together without assigning who moves with whom.",
      "replace": [
        [
          "Everybody rush in!",
          "Two go first together. The bomb carrier follows."
        ],
        [
          "Stop splitting up!",
          "Two stay together here. Two guard the other route."
        ]
      ],
      "visual": "pair"
    },
    {
      "id": "too-loud",
      "icon": "◖",
      "trigger": "The team is too loud",
      "title": "Give Only Useful Information",
      "tag": "TEAM COMMUNICATION",
      "summary": "Constant talking hides footsteps, repeats information, and prevents the players who are still alive from thinking.",
      "leaderCall": "Use short information only: how many, where, which direction, and how badly injured. Players who are out give one useful fact, then stay quiet.",
      "rule": "Every message must help someone aim, move, wait, or change sites.",
      "steps": [
        "Say how many enemies you saw",
        "Say where they are",
        "Add their direction or health",
        "Stop talking after the useful fact"
      ],
      "avoid": "Do not tell the full story of your death or argue while teammates are still alive.",
      "replace": [
        [
          "He is right there!",
          "One close left, badly injured."
        ],
        [
          "How did that happen?",
          "One above us, watching the stairs."
        ]
      ],
      "visual": "comms"
    },
    {
      "id": "unnecessary-fights",
      "icon": "×",
      "trigger": "Someone keeps taking unnecessary fights alone",
      "title": "Stop Repeating the Same Losing Fight",
      "tag": "TEAM DISCIPLINE",
      "summary": "A player keeps fighting the same enemy or position without support. That gives the enemy predictable eliminations and prevents teammates from helping.",
      "leaderCall": "Do not fight that alone again. Wait for a teammate, change your timing, or use a grenade before trying again.",
      "rule": "After losing the same fight once, the next attempt must change the timing, position, equipment, or number of teammates involved.",
      "steps": [
        "Identify the position the enemy is already watching",
        "Move out of that line of sight",
        "Bring a teammate or use equipment",
        "Return only after changing the situation"
      ],
      "avoid": "Do not insult the player. Give them a safer and more useful job immediately.",
      "replace": [
        [
          "Fight him again!",
          "Wait for me. We will attack together."
        ],
        [
          "Keep going back there!",
          "Do not return to the same position. Guard our rear route instead."
        ]
      ],
      "visual": "ego"
    },
    {
      "id": "player-advantage",
      "icon": "+",
      "trigger": "We have more players alive",
      "title": "Protect the Player Advantage",
      "tag": "PLAYER ADVANTAGE",
      "summary": "A player advantage disappears when teammates search for separate kills and give the enemy several isolated fights.",
      "leaderCall": "We have more players alive. Stay in pairs, guard the exits, and make them come to us. Do not hunt alone.",
      "rule": "When your team has more players alive, protect the objective and stay close enough to help each other before searching for kills.",
      "steps": [
        "Count how many players remain",
        "Move closer to teammates when safe",
        "Create two-player defensive positions",
        "Force the enemy to spend time and expose themselves"
      ],
      "avoid": "Do not turn five players against three into three separate one-on-one fights.",
      "replace": [
        [
          "Go find them!",
          "Guard the exits. Make them come through us."
        ],
        [
          "He is alone, chase him!",
          "Block his route. Stay close enough to help each other."
        ]
      ],
      "visual": "numbers"
    },
    {
      "id": "bomb-planted",
      "icon": "◇",
      "trigger": "We planted the bomb",
      "title": "Defend the Bomb, Not Personal Kills",
      "tag": "BOMB PLANTED",
      "summary": "The planted bomb already forces the defenders to act. Chasing enemies removes that pressure and gives them easier fights.",
      "leaderCall": "The bomb is planted. Two watch it from different directions. One watches the fastest route. One stays close enough to help. Make them approach the bomb.",
      "rule": "After planting, every position must watch the bomb, a teammate, or a route the defenders must use.",
      "steps": [
        "Confirm where the bomb was planted",
        "Move away from the obvious planting position",
        "Watch the bomb from two different directions",
        "Use sound and the timer before searching for kills"
      ],
      "avoid": "Do not leave the bomb area because the last enemy is badly injured.",
      "replace": [
        [
          "Go find them!",
          "Stay near the bomb. Make them come to us."
        ],
        [
          "Chase him!",
          "Guard his route and use the timer."
        ]
      ],
      "visual": "crossfire"
    },
    {
      "id": "recover-site",
      "icon": "↺",
      "trigger": "The enemy planted the bomb",
      "title": "Recover the Site Together",
      "tag": "RECOVER THE SITE",
      "summary": "Entering one player at a time gives the defenders a slow series of easy fights.",
      "leaderCall": "Wait until we are together. Use grenades and tactical equipment first. The first player clears close areas, the backup clears farther areas, then someone starts defusing.",
      "rule": "Entering together slightly later is stronger than entering alone slightly earlier.",
      "steps": [
        "Count how many teammates are alive",
        "Choose one shared entrance or two entrances with the same timing",
        "Use grenades and tactical equipment before entering",
        "Clear visible threats before starting the defuse"
      ],
      "avoid": "Do not start defusing while enemies can still see the bomb.",
      "replace": [
        [
          "Go now!",
          "Wait two seconds. We enter together."
        ],
        [
          "Someone start defusing!",
          "Clear the nearby areas, then cover the person defusing."
        ]
      ],
      "visual": "retake"
    },
    {
      "id": "frustrated",
      "icon": "⟳",
      "trigger": "The team is arguing or frustrated",
      "title": "Focus on the Next Round",
      "tag": "RESET",
      "summary": "Blame keeps the team thinking about the previous round while the next round is already beginning.",
      "leaderCall": "The last round is over. Make one change only: stay in pairs and slow down before the first fight. Everything else can wait.",
      "rule": "Correct the next action instead of attacking the person.",
      "steps": [
        "Stop the argument after the round",
        "Name one useful change",
        "Assign the opening jobs",
        "Judge the new round separately"
      ],
      "avoid": "Do not conduct a performance review during the spawn countdown.",
      "replace": [
        [
          "You always do that!",
          "Next round, stay close enough to help me."
        ],
        [
          "This team is terrible.",
          "Reset. Play one organized round together."
        ]
      ],
      "visual": "reset"
    },
    {
      "id": "last-player",
      "icon": "…",
      "trigger": "Only one teammate is still alive",
      "title": "Let the Last Player Think",
      "tag": "LAST PLAYER ALIVE",
      "summary": "Several eliminated teammates giving directions at once creates conflicting decisions and hides important game sounds.",
      "leaderCall": "Choose one speaker. Give confirmed information once. Then let the last player hear the game and decide.",
      "rule": "Players who are out give facts, not constant instructions.",
      "steps": [
        "Choose one speaker",
        "Give the enemy count, last known position, and bomb status",
        "Do not guess",
        "Stay quiet until new confirmed information appears"
      ],
      "avoid": "Do not shout directions after every camera movement.",
      "replace": [
        [
          "Turn around! No, left!",
          "Last seen on the left side ten seconds ago."
        ],
        [
          "He must be there!",
          "Location unknown. The bomb is on the site."
        ]
      ],
      "visual": "clutch"
    }
  ],
  "plans": [
    {
      "id": "attack-default",
      "side": "Attack",
      "name": "Standard Team Attack",
      "icon": "▶",
      "goal": "Learn where the defenders are without losing the bomb carrier or the first player unnecessarily.",
      "call": "The first player and backup move together. The bomb carrier follows. One watches movement between sites. One watches the rear route. After first enemy contact, say how many you saw, then we decide.",
      "roles": [
        ["First player", "Clear the first dangerous area"],
        ["Backup", "Stay close enough to help immediately"],
        ["Bomb carrier", "Follow behind the pair and protect the objective"],
        ["Movement watcher", "Watch defenders moving between sites"],
        ["Rear guard", "Protect the team from anyone coming from behind"]
      ],
      "rules": [
        "Do not let the bomb carrier go first",
        "Do not chase an injured enemy into unknown space",
        "Meet again before changing sites"
      ]
    },
    {
      "id": "attack-fast",
      "side": "Attack",
      "name": "Quick Site Attack",
      "icon": "»",
      "goal": "Overwhelm one site before the defenders can settle or move help there.",
      "call": "Three enter together. The first player clears the closest area, the backup clears farther areas, and the bomb carrier plants when safe. Two players block defender routes. Nobody stops in the doorway.",
      "roles": [
        ["First player", "Clear the closest defender position"],
        ["Backup", "Clear the next threat and protect the first player"],
        ["Bomb carrier", "Plant only after the nearby area is controlled"],
        ["Route guard 1", "Block the fastest defender route"],
        ["Route guard 2", "Watch the rear route or second defender route"]
      ],
      "rules": [
        "Slow down when the fight begins",
        "Use grenades and tactical equipment before the doorway",
        "Take bomb-defense positions immediately after planting"
      ]
    },
    {
      "id": "attack-slow",
      "side": "Attack",
      "name": "Slow Observation Round",
      "icon": "◷",
      "goal": "Make defenders reveal their habits before moving the bomb toward a site.",
      "call": "Pairs watch both sides. Keep the bomb safe. Nobody enters alone. We choose a site when defenders use equipment, move away, or lose a player.",
      "roles": [
        ["Pair A", "Apply pressure without entering too far"],
        ["Pair B", "Watch the other site and defender movement"],
        ["Bomb carrier", "Stay central and ready to join the stronger side"],
        ["Observer", "Look for information from a safe position"],
        ["Roaming support", "Help the side that gains a confirmed advantage"]
      ],
      "rules": [
        "Pressure does not require dying",
        "Report defender grenades and tactical equipment",
        "Move to the chosen site together"
      ]
    },
    {
      "id": "defense-default",
      "side": "Defense",
      "name": "Hold Both Sites Until There Is Evidence",
      "icon": "▣",
      "goal": "Protect both sites without abandoning one because of unconfirmed noise.",
      "call": "Two protect each site and one teammate moves between them. Report how many attackers you see. The roaming teammate moves first. Site defenders move only after confirmed information.",
      "roles": [
        ["A site defender", "Stay alive and identify the attack"],
        ["A site backup", "Help the defender or watch the second route"],
        ["B site defender", "Stay alive and identify the attack"],
        ["B site backup", "Help the defender or watch the second route"],
        ["Roaming support", "Move first when information is confirmed"]
      ],
      "rules": [
        "Get information before changing sites",
        "A living site defender gives the team time",
        "Do not chase attackers away from the site you protect"
      ]
    },
    {
      "id": "bomb-defense",
      "side": "Objective",
      "name": "Defend the Planted Bomb",
      "icon": "◇",
      "goal": "Force defenders to expose themselves before they can stop the timer.",
      "call": "Two watch the bomb from different directions. One guards the fastest route. One stays near the first defender contact. The last player moves only when confirmed information creates a need.",
      "roles": [
        ["Bomb watcher", "See or hear anyone starting the defuse"],
        ["Second angle", "Attack anyone focused on the bomb watcher"],
        ["Route guard", "Delay the fastest defender route"],
        ["Nearby helper", "Stay close enough to help at first contact"],
        ["Roaming helper", "Move only when confirmed information creates an opening"]
      ],
      "rules": [
        "Use the timer",
        "Keep two teammates close enough to help",
        "Look out when the enemy touches the bomb, not because you are bored"
      ]
    },
    {
      "id": "recover-site-plan",
      "side": "Objective",
      "name": "Recover the Bomb Site Together",
      "icon": "↺",
      "goal": "Enter with enough teammates close together to clear the site and protect the defuse.",
      "call": "Group first. Use grenades and tactical equipment. The first player clears nearby threats, the backup clears farther threats, and a third teammate covers the bomb. The last two guard exits and the rear route.",
      "roles": [
        ["First player", "Clear the closest threat"],
        ["Backup", "Stay beside the first player and clear the next threat"],
        ["Bomb cover", "Control the bomb and defuse area"],
        ["Exit watcher", "Stop defenders from escaping or returning to the same position"],
        ["Rear guard", "Protect the group from anyone arriving from behind"]
      ],
      "rules": [
        "Do not enter one at a time",
        "Clear threats before defusing",
        "Use one shared countdown"
      ]
    }
  ],
  "comms": [
    {"id":"first-contact","title":"First Enemy Contact","formula":"HOW MANY + WHERE + MOVEMENT","bad":"They are all here!","good":"Three at B. Two moving in and one staying back."},
    {"id":"damage","title":"Enemy Health Information","formula":"HOW MANY + WHERE + HEALTH + DIRECTION","bad":"He is almost dead!","good":"One in the upper middle area, badly injured, moving toward B."},
    {"id":"bomb","title":"Bomb Information","formula":"BOMB STATUS + WHERE + WHO CONTROLS IT","bad":"Bomb! Bomb!","good":"The bomb was dropped outside A. We control that area."},
    {"id":"site-move","title":"Moving to the Other Site","formula":"WHO MOVES + WHERE + WHY","bad":"Everybody move now!","good":"Roaming support, move to B. Three enemies are confirmed there."},
    {"id":"death","title":"Information After You Die","formula":"ENEMY LOCATION + MOVEMENT + THEN SILENCE","bad":"How did he eliminate me? He was waiting there!","good":"One close right, moving toward the site."},
    {"id":"last-player","title":"Information for the Last Player Alive","formula":"ONE CONFIRMED FACT","bad":"Turn around! He must be behind you!","good":"Last seen in the middle fifteen seconds ago. The bomb is planted at A."}
  ]
};
