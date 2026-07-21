/* Search & Destroy Companion tactical action cards. Copyright © 2026 Michael Barnes. */
window.MAP_ACTION_DATA = {
  "raid": {
    "name": "Raid",
    "plans": {
      "attack-a": {
        "icon": "A➜",
        "title": "Attack A • Water / Pool",
        "focus": "a",
        "subtitle": "Clear the high angle, close the connector, then plant.",
        "goal": "Reach Pool with Bedroom and Kitchen accounted for before the bomb carrier commits.",
        "danger": "Planting while Bedroom, Kitchen, and Laundry are all still live angles.",
        "steps": [
          {
            "icon": "1",
            "title": "CLEAR HIGH",
            "text": "Check Kitchen first.",
            "micro": "Do not stare at the floor while entering Pool."
          },
          {
            "icon": "2",
            "title": "BLOCK KITCHEN",
            "text": "Hold or smoke Kitchen Door.",
            "micro": "One teammate owns this connector."
          },
          {
            "icon": "3",
            "title": "TAKE DEEP POOL",
            "text": "Clear the far edge before planting.",
            "micro": "Do not discover the corner during the plant animation."
          },
          {
            "icon": "4",
            "title": "PLANT + WATCH",
            "text": "Plant while someone watches Laundry.",
            "micro": "After plant, spread the angles instead of stacking."
          }
        ],
        "watch": [
          "Kitchen",
          "Kitchen Door",
          "Water / Pool",
          "Laundry flank"
        ],
        "avoid": "Do not rush the plant marker while every doorway is still a question mark."
      },
      "defend-a": {
        "icon": "A◀",
        "title": "Defend A • Water / Pool",
        "focus": "a",
        "subtitle": "Get information early, then survive long enough for help.",
        "goal": "Slow the Pool hit without giving attackers a free opening pick.",
        "danger": "Both defenders peeking the same entrance while Laundry or Kitchen is open.",
        "steps": [
          {
            "icon": "1",
            "title": "TAKE INFO",
            "text": "Use Bedroom or Kitchen to spot the route.",
            "micro": "See them without donating your life."
          },
          {
            "icon": "2",
            "title": "SHOW TWO ANGLES",
            "text": "Make attackers worry about high and low.",
            "micro": "Do not stand shoulder-to-shoulder."
          },
          {
            "icon": "3",
            "title": "FALL BACK",
            "text": "After contact, move to a second position.",
            "micro": "A new angle is worth more than a heroic re-peek."
          },
          {
            "icon": "4",
            "title": "WATCH LAUNDRY",
            "text": "Track the lower route during the retake.",
            "micro": "The flank arrives when everyone stares at the bomb."
          }
        ],
        "watch": [
          "Pool entry",
          "Kitchen connector",
          "Laundry route",
          "Bomb carrier"
        ],
        "avoid": "Do not chase a weak attacker out of your defensive setup."
      },
      "attack-b": {
        "icon": "B➜",
        "title": "Attack B • Driveway / Ring",
        "focus": "b",
        "subtitle": "Take one side of the site before planting in the open.",
        "goal": "Own Garage or Courtyard so the planter is not exposed from both sides.",
        "danger": "Crossing Circle Drive while Money Window and Garage are unchecked.",
        "steps": [
          {
            "icon": "1",
            "title": "CHECK MONEY",
            "text": "Account for the elevated central angle.",
            "micro": "Use cover to cut the window sightline."
          },
          {
            "icon": "2",
            "title": "CLEAR GARAGE",
            "text": "Treat Van edge and deep Garage separately.",
            "micro": "One quick glance does not clear both."
          },
          {
            "icon": "3",
            "title": "OWN COURTYARD",
            "text": "Hold the center connector during the hit.",
            "micro": "This stops the fast collapse."
          },
          {
            "icon": "4",
            "title": "PLANT BEHIND CONTROL",
            "text": "Plant only after one lane is secure.",
            "micro": "Then watch Basketball for the late route."
          }
        ],
        "watch": [
          "Money Window",
          "Garage / Lambo",
          "Courtyard",
          "Basketball route"
        ],
        "avoid": "Do not sprint into Circle Drive because the bomb marker is glowing invitingly."
      },
      "defend-b": {
        "icon": "B◀",
        "title": "Defend B • Driveway / Ring",
        "focus": "b",
        "subtitle": "Delay the crossing and keep a safe route out.",
        "goal": "Make attackers clear multiple positions before they can plant.",
        "danger": "Holding Garage too long after attackers gain Courtyard control.",
        "steps": [
          {
            "icon": "1",
            "title": "WATCH ENTRY",
            "text": "Use Garage or Van for first contact.",
            "micro": "Take the shot, then decide whether to leave."
          },
          {
            "icon": "2",
            "title": "TRACK COURTYARD",
            "text": "Do not let Mid collapse unnoticed.",
            "micro": "Call the number of players, not merely 'they are here.'"
          },
          {
            "icon": "3",
            "title": "REPOSITION",
            "text": "Move before utility traps you in Garage.",
            "micro": "Circle and Money give second angles."
          },
          {
            "icon": "4",
            "title": "RETAKE TOGETHER",
            "text": "Enter from separated routes on the same timing.",
            "micro": "One at a time is a courtesy service for attackers."
          }
        ],
        "watch": [
          "Lower B approach",
          "Courtyard collapse",
          "Money side",
          "Bomb plant sound"
        ],
        "avoid": "Do not remain in the first hold after the attackers know exactly where you are."
      },
      "mid": {
        "icon": "◇",
        "title": "Control Mid • Money / Zig",
        "focus": "mid",
        "subtitle": "Use Mid for information, not as permanent housing.",
        "goal": "Learn which site is weak, then leave Courtyard before every angle converges.",
        "danger": "Checking Money while Circle Drive or Kitchen has a free side shot.",
        "steps": [
          {
            "icon": "1",
            "title": "CUT MONEY",
            "text": "Use the wall to reduce the upper angle.",
            "micro": "Expose one threat at a time."
          },
          {
            "icon": "2",
            "title": "CHECK SIDE",
            "text": "Clear Circle or Kitchen before widening.",
            "micro": "Do not stand where both can see you."
          },
          {
            "icon": "3",
            "title": "READ THE MAP",
            "text": "Use sound and teammate contact to pick a site.",
            "micro": "Mid control is useful only if it changes a decision."
          },
          {
            "icon": "4",
            "title": "MOVE",
            "text": "Rotate before enemies surround Courtyard.",
            "micro": "Watch Laundry or Basketball for delayed flanks."
          }
        ],
        "watch": [
          "Money Window",
          "Circle Drive",
          "Kitchen",
          "Lower flank routes"
        ],
        "avoid": "Do not win Mid and then remain there until the enemy solves the problem."
      }
    }
  },
  "tunisia": {
    "name": "Tunisia",
    "plans": {
      "attack-a": {
        "icon": "A➜",
        "title": "Attack A • Main Square",
        "focus": "a",
        "subtitle": "Split the clear into high and deep jobs.",
        "goal": "Enter the square without every player looking at the same elevated threat.",
        "danger": "The scaffolding and deep square corner watching the same open movement.",
        "steps": [
          {
            "icon": "1",
            "title": "CLEAR HIGH",
            "text": "Check Scaffolding before crossing.",
            "micro": "One player owns the elevated threat."
          },
          {
            "icon": "2",
            "title": "CLEAR DEEP",
            "text": "A second player checks the far square corner.",
            "micro": "High and low are separate jobs."
          },
          {
            "icon": "3",
            "title": "HOLD CENTER ARCH",
            "text": "Stop the fast rotation from Center Street.",
            "micro": "Do not let the rotator walk into the planter."
          },
          {
            "icon": "4",
            "title": "PLANT + SPREAD",
            "text": "Plant after the open square is controlled.",
            "micro": "Post-plant from different heights and distances."
          }
        ],
        "watch": [
          "Scaffolding",
          "Deep Square",
          "Center Arch",
          "Lower entry"
        ],
        "avoid": "Do not send five sets of eyes toward Scaffolding while the deep corner waits politely."
      },
      "defend-a": {
        "icon": "A◀",
        "title": "Defend A • Main Square",
        "focus": "a",
        "subtitle": "Use elevation for information, not an irreversible life choice.",
        "goal": "Delay the square push and preserve a route back toward cover.",
        "danger": "Staying exposed on Scaffolding after the attackers identify you.",
        "steps": [
          {
            "icon": "1",
            "title": "SPOT THE ROUTE",
            "text": "Use Scaffolding or the square edge for early info.",
            "micro": "Count players before firing when possible."
          },
          {
            "icon": "2",
            "title": "FORCE THE CLEAR",
            "text": "Make them check high and deep.",
            "micro": "A second defender holds the ground angle."
          },
          {
            "icon": "3",
            "title": "LEAVE THE FIRST SPOT",
            "text": "Drop or rotate after contact.",
            "micro": "Do not repeat the same peek."
          },
          {
            "icon": "4",
            "title": "HOLD THE CONNECTOR",
            "text": "Watch Center Arch during the retake.",
            "micro": "Attackers will use it to widen post-plant control."
          }
        ],
        "watch": [
          "South approach",
          "Scaffolding climb",
          "Center Arch",
          "Plant sound"
        ],
        "avoid": "Do not confuse high ground with invulnerability."
      },
      "attack-b": {
        "icon": "B➜",
        "title": "Attack B • West Side",
        "focus": "b",
        "subtitle": "Clear above before entering the narrow lower fight.",
        "goal": "Remove the Platform threat and enter close enough to trade.",
        "danger": "Climbing stairs while a platform player and deep alley player hold the same exit.",
        "steps": [
          {
            "icon": "1",
            "title": "CHECK PLATFORM",
            "text": "Pre-aim the upper edge before climbing.",
            "micro": "Vertical threats come first."
          },
          {
            "icon": "2",
            "title": "SLICE THE ALLEY",
            "text": "Clear each bend instead of chasing.",
            "micro": "Do not sprint after a weak target."
          },
          {
            "icon": "3",
            "title": "HOLD CENTER",
            "text": "Block the rotation connector.",
            "micro": "One teammate watches help arrive."
          },
          {
            "icon": "4",
            "title": "TRADE THE ENTRY",
            "text": "Move through South Stairs together.",
            "micro": "Stay close enough to answer the first kill."
          }
        ],
        "watch": [
          "Platform",
          "Deep Alley",
          "Center Connector",
          "South Stairs"
        ],
        "avoid": "Do not climb the choke one player at a time."
      },
      "defend-b": {
        "icon": "B◀",
        "title": "Defend B • West Side",
        "focus": "b",
        "subtitle": "Use the vertical area to slow, then escape the collapse.",
        "goal": "Force attackers to spend time clearing upper and lower positions.",
        "danger": "Getting trapped between South Stairs and Center Connector.",
        "steps": [
          {
            "icon": "1",
            "title": "TAKE HIGH INFO",
            "text": "Use Platform to spot the approach.",
            "micro": "Do not overstay after being seen."
          },
          {
            "icon": "2",
            "title": "HOLD THE BEND",
            "text": "Deep Alley punishes careless chasing.",
            "micro": "Keep cover between you and the stair exit."
          },
          {
            "icon": "3",
            "title": "CALL THE SPLIT",
            "text": "Report stairs versus center pressure.",
            "micro": "This tells the rotator which route is safe."
          },
          {
            "icon": "4",
            "title": "FALL TO RETAKE",
            "text": "Leave before both entrances close.",
            "micro": "Survival keeps the site contestable."
          }
        ],
        "watch": [
          "South Stairs",
          "Center Connector",
          "Platform climb",
          "Deep alley chase"
        ],
        "avoid": "Do not allow both exits to close while defending one heroic corner."
      },
      "mid": {
        "icon": "◇",
        "title": "Control Mid • Center Street / Window",
        "focus": "mid",
        "subtitle": "Handle the long angle before treating Center as a route.",
        "goal": "Cross or hold Center Street without feeding the South Window.",
        "danger": "Moving through the open street while checking only the ground level.",
        "steps": [
          {
            "icon": "1",
            "title": "FIND THE WINDOW",
            "text": "Account for the South Window first.",
            "micro": "Smoke, force it off, or use side cover."
          },
          {
            "icon": "2",
            "title": "CLEAR THE CROSS",
            "text": "Check Square Crossing before widening.",
            "micro": "Open space is not neutral space."
          },
          {
            "icon": "3",
            "title": "TRACK WEST STAIRS",
            "text": "Expect a close flank from the vertical lane.",
            "micro": "Long and close threats can arrive together."
          },
          {
            "icon": "4",
            "title": "ROTATE WITH PURPOSE",
            "text": "Use the information to choose A or B.",
            "micro": "Do not linger in the street after the read."
          }
        ],
        "watch": [
          "South Window",
          "North Arch",
          "Square Crossing",
          "West stairs"
        ],
        "avoid": "Do not call Center Street clear merely because the first sniper shot missed."
      }
    }
  },
  "coastal": {
    "name": "Coastal",
    "plans": {
      "attack-a": {
        "icon": "A➜",
        "title": "Attack A • Courtyard",
        "focus": "a",
        "subtitle": "Clear elevation and deep site as separate jobs.",
        "goal": "Enter the courtyard while one player handles Top Ladder and another clears Deep A.",
        "danger": "Everyone staring upward while a defender waits in the deep corner.",
        "steps": [
          {
            "icon": "1",
            "title": "CLEAR UPPER",
            "text": "Force Top Ladder off the angle.",
            "micro": "Do not cross open ground under a free elevated hold."
          },
          {
            "icon": "2",
            "title": "CLEAR DEEP SITE",
            "text": "Check Deep A before planting.",
            "micro": "Treat it as a separate room clear."
          },
          {
            "icon": "3",
            "title": "HOLD MID ARCH",
            "text": "Stop the quick connector rotation.",
            "micro": "The planter needs one protected side."
          },
          {
            "icon": "4",
            "title": "PLANT + SPLIT",
            "text": "Use separate post-plant angles.",
            "micro": "One high, one deep, one connector watch."
          }
        ],
        "watch": [
          "Top Ladder",
          "Deep A",
          "Mid Arch",
          "Lower entry"
        ],
        "avoid": "Do not stack the entire team in the lower doorway."
      },
      "defend-a": {
        "icon": "A◀",
        "title": "Defend A • Courtyard",
        "focus": "a",
        "subtitle": "Show pressure from two heights, then reposition.",
        "goal": "Slow the open-site push without becoming trapped on Top Ladder.",
        "danger": "A defender on high ground being isolated while Mid Arch opens behind them.",
        "steps": [
          {
            "icon": "1",
            "title": "TAKE EARLY INFO",
            "text": "Use Top Ladder to identify the push.",
            "micro": "Fire only when the information is worth revealing."
          },
          {
            "icon": "2",
            "title": "HOLD DEEP",
            "text": "A second angle protects the plant zone.",
            "micro": "Do not duplicate the upper defender's view."
          },
          {
            "icon": "3",
            "title": "TRACK MID",
            "text": "Watch the connector once contact starts.",
            "micro": "Rotators arrive while eyes are on the courtyard."
          },
          {
            "icon": "4",
            "title": "REPOSITION",
            "text": "Leave the first angle before utility lands.",
            "micro": "Retake from cover with teammates."
          }
        ],
        "watch": [
          "Lower A entry",
          "Upper climb",
          "Mid Arch",
          "Deep plant"
        ],
        "avoid": "Do not stay visible on Top Ladder simply because it felt powerful ten seconds ago."
      },
      "attack-b": {
        "icon": "B➜",
        "title": "Attack B • Interiors",
        "focus": "b",
        "subtitle": "Utility first, then enter close enough to trade.",
        "goal": "Clear Upper B and the deep interior without feeding separate doorway fights.",
        "danger": "A defender surviving behind the first cleared corner while the team floods past.",
        "steps": [
          {
            "icon": "1",
            "title": "CHECK UPPER ROOM",
            "text": "Account for the elevated interior opening.",
            "micro": "Do not commit below while it is live."
          },
          {
            "icon": "2",
            "title": "USE UTILITY",
            "text": "Force movement from the first doorway.",
            "micro": "The grenade goes before the body."
          },
          {
            "icon": "3",
            "title": "TRADE THROUGH",
            "text": "Enter close enough to answer contact.",
            "micro": "Clear one doorway and one corner at a time."
          },
          {
            "icon": "4",
            "title": "BLOCK MID DOOR",
            "text": "Stop the rotation during plant.",
            "micro": "Keep one gun facing the connector."
          }
        ],
        "watch": [
          "B Rooms",
          "B Back",
          "B Door",
          "Lower lane"
        ],
        "avoid": "Do not turn a narrow interior into five separate one-versus-one fights."
      },
      "defend-b": {
        "icon": "B◀",
        "title": "Defend B • Interiors",
        "focus": "b",
        "subtitle": "Layer the rooms so the first clear does not solve the site.",
        "goal": "Make attackers spend utility and time before reaching the plant.",
        "danger": "Both defenders hiding in the same room and losing to one piece of utility.",
        "steps": [
          {
            "icon": "1",
            "title": "SHOW UPPER INFO",
            "text": "Watch the approach from Upper B.",
            "micro": "Leave after the first clear attempt."
          },
          {
            "icon": "2",
            "title": "LAYER DEEP",
            "text": "Use a second interior position.",
            "micro": "Do not overlap the first defender."
          },
          {
            "icon": "3",
            "title": "WATCH MID DOOR",
            "text": "Track the split or rotation.",
            "micro": "Call it before the site player is surrounded."
          },
          {
            "icon": "4",
            "title": "RETAKE IN PAIRS",
            "text": "Enter together after the plant.",
            "micro": "Trade the close corners rather than guessing them."
          }
        ],
        "watch": [
          "Lower B Lane",
          "Upper opening",
          "B Door",
          "Plant sound"
        ],
        "avoid": "Do not build the entire defense inside one throwable-sized room."
      },
      "mid": {
        "icon": "◇",
        "title": "Control Mid • Connectors",
        "focus": "mid",
        "subtitle": "Own Mid briefly, use the information, then move.",
        "goal": "Control the connector long enough to read the site pressure and speed the rotation.",
        "danger": "Using Mid as a highway while Balcony is still active.",
        "steps": [
          {
            "icon": "1",
            "title": "CLEAR UPPER CROSS",
            "text": "Handle the information angle first.",
            "micro": "Do not rotate under an unchecked elevated view."
          },
          {
            "icon": "2",
            "title": "CHECK B DOOR",
            "text": "Pre-aim after B-side contact.",
            "micro": "A defender can swing straight into Mid."
          },
          {
            "icon": "3",
            "title": "TRACK A CONNECTOR",
            "text": "Know whether the A player can collapse.",
            "micro": "Mid is only safe when both doors are understood."
          },
          {
            "icon": "4",
            "title": "MAKE THE ROTATION",
            "text": "Move once the information is useful.",
            "micro": "Reposition before the enemy surrounds the connector."
          }
        ],
        "watch": [
          "Balcony",
          "B Doorway",
          "A Connector",
          "Lower Cross"
        ],
        "avoid": "Do not win Mid and then wait there for both sites to rotate onto you."
      }
    }
  }
};
