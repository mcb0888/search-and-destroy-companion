/* Search & Destroy Companion common callout atlas. Copyright © 2026 Michael Barnes. */
window.MAP_ATLAS_DATA = {
  "raid": {
    "map": "Raid",
    "status": "Common callout set",
    "note": "Uses legacy competitive Raid names plus obvious CODM landmarks. Squads may shorten or swap a few names; common aliases are shown so the first label learned is useful rather than invented.",
    "basis": "Activision landmark names + long-running competitive Call of Duty callouts + CODM community usage.",
    "groups": {
      "a": {
        "tab": "A / Water",
        "title": "A Side • Water / Pool",
        "subtitle": "Water-side language used around Pool, Kitchen, Tiki, and Laundry.",
        "checkOrder": [
          "Kitchen",
          "Water Steps",
          "Tiki",
          "Water / Pool",
          "Laundry"
        ],
        "spots": [
          {
            "id": "kitchen",
            "name": "Kitchen",
            "aliases": [
              "Kitchen Door",
              "Kitchen Window"
            ],
            "icon": "▤",
            "kind": "Connector hold",
            "risk": "HIGH",
            "position": "Mansion room connecting Mid/Courtyard to the Water side.",
            "watches": [
              "Water entry",
              "A plant movement",
              "Courtyard-to-Pool rotation"
            ],
            "blind": [
              "Close pressure inside Kitchen",
              "A split from Laundry",
              "Wide Water pressure"
            ],
            "escape": [
              "Back through Money/Courtyard",
              "Deeper mansion rooms"
            ],
            "clear": [
              "Pre-aim Kitchen before entering Water",
              "Give one teammate ownership of the connector",
              "Keep it blocked while the bomb goes down"
            ],
            "mistake": "Everyone looks toward the open site and leaves Kitchen free to shoot the planter sideways.",
            "line": "KITCHEN → WATER / A SITE",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "water-steps",
            "name": "Water Steps",
            "aliases": [
              "Pool Steps"
            ],
            "icon": "▥",
            "kind": "Elevation change",
            "risk": "HIGH",
            "position": "Steps on the Water/Pool side connecting the lower lane and site level.",
            "watches": [
              "Water crossing",
              "Players moving off site",
              "Lower-lane pressure"
            ],
            "blind": [
              "A close player tucked below the step line",
              "Kitchen-side pressure",
              "Utility landing behind the steps"
            ],
            "escape": [
              "Back toward Water",
              "Toward Laundry"
            ],
            "clear": [
              "Clear the top edge before climbing",
              "Keep crosshair at head height on the step line",
              "Do not sprint up after hearing one gunfight"
            ],
            "mistake": "Treating the stairs as empty because the visible Pool area looked clear.",
            "line": "WATER STEPS → WATER / LOWER LANE",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "tiki",
            "name": "Tiki",
            "aliases": [
              "Pool Bar",
              "Bar"
            ],
            "icon": "▰",
            "kind": "Partial-cover hold",
            "risk": "MED",
            "position": "Small bar/cover structure beside the Water lane.",
            "watches": [
              "Open Water movement",
              "A-site approach",
              "Players crossing after checking only windows"
            ],
            "blind": [
              "Elevated Kitchen pressure",
              "A careful close clear",
              "Utility landing behind the cover"
            ],
            "escape": [
              "Around the bar",
              "Toward Water edge"
            ],
            "clear": [
              "Clear nearby cover before looking deep",
              "Shoulder the edge instead of sprinting past",
              "Expect a crouched player behind the low cover"
            ],
            "mistake": "Aiming only at doors while a defender is tucked behind the closest piece of cover.",
            "line": "TIKI → WATER CROSS / A SITE",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "water",
            "name": "Water / Pool",
            "aliases": [
              "Pool",
              "A Water"
            ],
            "icon": "●",
            "kind": "Site lane",
            "risk": "HIGH",
            "position": "The open Pool lane and A-side site space.",
            "watches": [
              "A plant",
              "Water crossing",
              "Tiki and Kitchen approaches"
            ],
            "blind": [
              "Players tight to walls",
              "A split from Laundry",
              "Pressure from more than one elevation"
            ],
            "escape": [
              "Water Steps",
              "Tiki",
              "Rear Water route"
            ],
            "clear": [
              "Enter with Kitchen already accounted for",
              "Use cover rather than the middle of the lane",
              "Clear deep Water before planting"
            ],
            "mistake": "Using 'Pool is clear' to mean only the center of Pool is clear.",
            "line": "WATER / POOL → A PLANT",
            "basis": "Official landmark + common shorthand"
          },
          {
            "id": "laundry",
            "name": "Laundry",
            "aliases": [
              "Laundry Door",
              "Laundry Steps"
            ],
            "icon": "▥",
            "kind": "Flank route",
            "risk": "MED",
            "position": "Lower route beside Water leading toward Basketball and the back lane.",
            "watches": [
              "Lower Water exit",
              "Post-plant players focused on site",
              "Late flank movement"
            ],
            "blind": [
              "A player holding the lower route early",
              "Sound-aware post-plant setup",
              "Crossfire from Kitchen and Water"
            ],
            "escape": [
              "Back through Laundry",
              "Toward Basketball"
            ],
            "clear": [
              "Assign one player or one set of ears to Laundry",
              "Re-check it after first contact",
              "Do not assume a cleared route stays clear"
            ],
            "mistake": "All players watch the bomb while the Laundry flank walks in for free.",
            "line": "LAUNDRY → WATER / BASKETBALL",
            "basis": "Widely used legacy callout"
          }
        ]
      },
      "b": {
        "tab": "B / Driveway",
        "title": "B Side • Driveway / Ring",
        "subtitle": "Vehicle and sculpture callouts around the B-side open lane.",
        "checkOrder": [
          "Garage",
          "Lambo",
          "White Truck",
          "Art",
          "Driveway"
        ],
        "spots": [
          {
            "id": "garage",
            "name": "Garage",
            "aliases": [
              "Deep Garage"
            ],
            "icon": "▤",
            "kind": "Deep lane hold",
            "risk": "HIGH",
            "position": "Large east-side garage controlling the Driveway approach.",
            "watches": [
              "Driveway crossing",
              "B-side plant movement",
              "Players leaving Zig"
            ],
            "blind": [
              "Close pressure at the door",
              "A Courtyard/Money split",
              "Utility forcing the holder deeper"
            ],
            "escape": [
              "Deep Garage",
              "Behind vehicles"
            ],
            "clear": [
              "Treat Garage door and deep Garage as separate angles",
              "Use cover before entering Driveway",
              "Do not fight Garage while exposed to Art"
            ],
            "mistake": "One quick glance at the doorway followed by a full sprint into the lane.",
            "line": "GARAGE → DRIVEWAY / B",
            "basis": "Official landmark + common callout"
          },
          {
            "id": "lambo",
            "name": "Lambo",
            "aliases": [
              "Car",
              "Sports Car"
            ],
            "icon": "◆",
            "kind": "Vehicle cover",
            "risk": "HIGH",
            "position": "Sports car in/near the garage-side Driveway lane.",
            "watches": [
              "Driveway push",
              "B plant lane",
              "Players clearing only deep Garage"
            ],
            "blind": [
              "A close wrap around the car",
              "Utility behind the vehicle",
              "Pressure from Art or Money"
            ],
            "escape": [
              "Garage",
              "Driveway edge"
            ],
            "clear": [
              "Clear both sides of the car",
              "Do not use one camera flick for the whole vehicle",
              "Trade the close corner with a teammate"
            ],
            "mistake": "Calling Garage clear while a player is still tucked at the car.",
            "line": "LAMBO → DRIVEWAY / B",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "white-truck",
            "name": "White Truck",
            "aliases": [
              "Truck"
            ],
            "icon": "▰",
            "kind": "Long-lane cover",
            "risk": "HIGH",
            "position": "White truck on the Driveway side used to hold or cross the open route.",
            "watches": [
              "Driveway",
              "Rotation toward B",
              "Players leaving spawn-side cover"
            ],
            "blind": [
              "A close wrap",
              "Art-side angle",
              "Utility behind the truck"
            ],
            "escape": [
              "Back toward spawn",
              "Toward Garage"
            ],
            "clear": [
              "Pre-aim the truck edge before crossing",
              "Clear the near side before the far side",
              "Use smoke or timing if the lane is hard-held"
            ],
            "mistake": "Crossing Driveway while staring only at Garage.",
            "line": "WHITE TRUCK → DRIVEWAY",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "art",
            "name": "Art",
            "aliases": [
              "Art Sculpture",
              "Sculpture"
            ],
            "icon": "◇",
            "kind": "Central cover",
            "risk": "HIGH",
            "position": "Large sculpture/cover in the Circle Drive area.",
            "watches": [
              "Driveway crossing",
              "B site",
              "Ring-side movement"
            ],
            "blind": [
              "A wrap tight to the sculpture",
              "Money elevation",
              "Garage-side crossfire"
            ],
            "escape": [
              "Around Art",
              "Toward Ring or Driveway"
            ],
            "clear": [
              "Clear each side separately",
              "Do not expose to Garage and Art together",
              "Expect the player to swap sides after contact"
            ],
            "mistake": "Treating the whole sculpture as one angle.",
            "line": "ART → DRIVEWAY / B",
            "basis": "Official landmark + common callout"
          },
          {
            "id": "driveway",
            "name": "Driveway",
            "aliases": [
              "Circle Drive",
              "B Lane"
            ],
            "icon": "◎",
            "kind": "Open lane",
            "risk": "HIGH",
            "position": "Open circular vehicle lane around Art and B-side approaches.",
            "watches": [
              "B plant",
              "Garage route",
              "Art and Truck positions"
            ],
            "blind": [
              "Players hugging outer cover",
              "A delayed Zig flank",
              "Money support"
            ],
            "escape": [
              "Garage",
              "Ring",
              "Outer wall"
            ],
            "clear": [
              "Cross only after shrinking the visible angles",
              "Hold one side while clearing the other",
              "Do not stop in the center"
            ],
            "mistake": "Standing in the open to decide which threat to check first.",
            "line": "DRIVEWAY → B SITE",
            "basis": "Official landmark + common shorthand"
          }
        ]
      },
      "mid": {
        "tab": "Mid / Money",
        "title": "Mid • Money / Zig",
        "subtitle": "Common central callouts used to connect Water and Driveway.",
        "checkOrder": [
          "Money",
          "Pillars",
          "Ring",
          "Zig",
          "Basketball"
        ],
        "spots": [
          {
            "id": "money",
            "name": "Money",
            "aliases": [
              "Money Room",
              "Money Window"
            ],
            "icon": "▣",
            "kind": "Upper information",
            "risk": "HIGH",
            "position": "Upper central room/window overlooking Mid and rotations.",
            "watches": [
              "Mid crossing",
              "B rotations",
              "Courtyard movement"
            ],
            "blind": [
              "Players tight to walls",
              "Pressure from inside the room",
              "A fast angle change after the first shot"
            ],
            "escape": [
              "Back into Money",
              "Toward Kitchen"
            ],
            "clear": [
              "Cut the window with the wall",
              "Pre-aim before widening",
              "Do not fight Money while exposed to Ring"
            ],
            "mistake": "Crossing open Mid while checking only ground-level threats.",
            "line": "MONEY → MID / B ROTATION",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "pillars",
            "name": "Pillars",
            "aliases": [
              "Mid Pillars"
            ],
            "icon": "▰",
            "kind": "Mid cover",
            "risk": "MED",
            "position": "Pillar cover in the central mansion/Courtyard route.",
            "watches": [
              "Mid entry",
              "Players rotating between lanes",
              "Close Courtyard pressure"
            ],
            "blind": [
              "Wide pressure from either side",
              "Money elevation",
              "Utility around the cover"
            ],
            "escape": [
              "Back toward Courtyard",
              "Toward Ring"
            ],
            "clear": [
              "Clear the near pillar first",
              "Expect a side swap after contact",
              "Keep Money accounted for while checking ground cover"
            ],
            "mistake": "Looking through Mid while ignoring the closest pillar.",
            "line": "PILLARS → MID CROSS",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "ring",
            "name": "Ring",
            "aliases": [
              "Circle",
              "Courtyard Ring"
            ],
            "icon": "◉",
            "kind": "Central landmark",
            "risk": "HIGH",
            "position": "Circular central feature used as a rotation and gunfight reference.",
            "watches": [
              "Mid rotation",
              "Driveway approach",
              "Water-to-B transition"
            ],
            "blind": [
              "Players tight to outer walls",
              "Money window",
              "Zig pressure"
            ],
            "escape": [
              "Toward Driveway",
              "Toward Water",
              "Back to Mid"
            ],
            "clear": [
              "Use Ring as a callout, not permanent cover",
              "Clear Money before widening",
              "Move after taking information"
            ],
            "mistake": "Winning one Mid fight and remaining at Ring until every enemy knows where you are.",
            "line": "RING → MID / DRIVEWAY",
            "basis": "Widely used legacy callout"
          },
          {
            "id": "zig",
            "name": "Zig",
            "aliases": [
              "Zigzag"
            ],
            "icon": "〽",
            "kind": "Connector route",
            "risk": "MED",
            "position": "Zigzag path between Garage/Driveway and Mid.",
            "watches": [
              "Garage-to-Mid movement",
              "Late B rotation",
              "Players leaving Driveway"
            ],
            "blind": [
              "A player tight to each bend",
              "Money support",
              "Basketball-side flank"
            ],
            "escape": [
              "Garage",
              "Mid",
              "Basketball route"
            ],
            "clear": [
              "Clear one bend at a time",
              "Listen before rounding the second turn",
              "Do not sprint the full connector"
            ],
            "mistake": "Calling Zig clear after seeing only the first bend.",
            "line": "ZIG → GARAGE / MID",
            "basis": "Community-confirmed common callout"
          },
          {
            "id": "basketball",
            "name": "Basketball",
            "aliases": [
              "Court",
              "Basketball Court"
            ],
            "icon": "▦",
            "kind": "Lower route",
            "risk": "MED",
            "position": "Basketball court and lower connector between Laundry and the B side.",
            "watches": [
              "Laundry flank",
              "Lower rotation",
              "Players leaving Water"
            ],
            "blind": [
              "A player behind court cover",
              "Zig-side support",
              "Late Garage pressure"
            ],
            "escape": [
              "Laundry",
              "Zig",
              "Spawn-side route"
            ],
            "clear": [
              "Check court cover before rotating",
              "Use sound to track lower movement",
              "Do not leave it uncalled after contact"
            ],
            "mistake": "Assuming the lower route is irrelevant because the bomb is on the other side.",
            "line": "BASKETBALL → LAUNDRY / ZIG",
            "basis": "Official landmark + common callout"
          }
        ]
      }
    }
  },
  "tunisia": {
    "map": "Tunisia",
    "status": "Common callout set",
    "note": "Uses Activision's official landmark language and short ranked callouts heard in CODM, including Window, Square, Scaffold, Center, Stairs, Ladder, Platform, Alley, and Zig. Squad aliases vary, so aliases are shown.",
    "basis": "Official Tunisia map overview + CODM ranked/community terminology.",
    "groups": {
      "a": {
        "tab": "A / Square",
        "title": "A Side • Main Square",
        "subtitle": "Open A-side space with Scaffold, crates, and several entrances.",
        "checkOrder": [
          "Scaffold",
          "Square Crates",
          "A Back",
          "Square Connector",
          "Main Square"
        ],
        "spots": [
          {
            "id": "scaffold",
            "name": "Scaffold",
            "aliases": [
              "Scaffolding",
              "Top Scaffold"
            ],
            "icon": "▣",
            "kind": "Elevated hold",
            "risk": "HIGH",
            "position": "Raised scaffolding in the upper-right side of Main Square.",
            "watches": [
              "Main Square",
              "A plant",
              "Lower square entrances"
            ],
            "blind": [
              "Pressure from the escape side",
              "Utility on the platform",
              "A close player under the structure"
            ],
            "escape": [
              "Back toward north side",
              "Down into Square"
            ],
            "clear": [
              "Check the platform before entering Square",
              "Force it off with utility or a second angle",
              "Do not stop behind the first crate"
            ],
            "mistake": "Entering the open Square while assuming the crates block the elevated line.",
            "line": "SCAFFOLD → SQUARE / A",
            "basis": "Official landmark + common shorthand"
          },
          {
            "id": "square-crates",
            "name": "Square Crates",
            "aliases": [
              "Crates",
              "Boxes"
            ],
            "icon": "▰",
            "kind": "Partial cover",
            "risk": "HIGH",
            "position": "Scattered crate cover inside Main Square.",
            "watches": [
              "A plant movement",
              "Square crossing",
              "Players focused on Scaffold"
            ],
            "blind": [
              "Utility behind the crates",
              "A wide second angle",
              "Elevation from Scaffold"
            ],
            "escape": [
              "Deeper Square",
              "Toward A Back"
            ],
            "clear": [
              "Clear the near crate before the deep crate",
              "Keep Scaffold on screen",
              "Expect a crouched defender"
            ],
            "mistake": "Treating all crate cover as one cleared position.",
            "line": "SQUARE CRATES → A SITE",
            "basis": "Official physical landmark"
          },
          {
            "id": "a-back",
            "name": "A Back",
            "aliases": [
              "Back Square",
              "North Square"
            ],
            "icon": "●",
            "kind": "Deep-site hold",
            "risk": "HIGH",
            "position": "Deep/north edge of the A-side Square.",
            "watches": [
              "A plant",
              "Late entry into Square",
              "Players clearing only Scaffold"
            ],
            "blind": [
              "A coordinated wide clear",
              "Utility behind the boundary cover",
              "Pressure from Center Connector"
            ],
            "escape": [
              "North route",
              "Deeper Square edge"
            ],
            "clear": [
              "Clear deep site before planting",
              "Use a teammate to hold Scaffold",
              "Do not plant as soon as the first crate is clear"
            ],
            "mistake": "Discovering the deep defender during the plant animation.",
            "line": "A BACK → A PLANT",
            "basis": "Common descriptive callout"
          },
          {
            "id": "square-connector",
            "name": "Square Connector",
            "aliases": [
              "A Connector",
              "Center-to-Square"
            ],
            "icon": "▤",
            "kind": "Rotation doorway",
            "risk": "HIGH",
            "position": "Connector between Center Street and Main Square.",
            "watches": [
              "A hit from Mid",
              "Rotations into Square",
              "Planter's side angle"
            ],
            "blind": [
              "A player tight to the doorway",
              "Pressure from Square",
              "A delayed Mid flank"
            ],
            "escape": [
              "Back to Center",
              "Into Square"
            ],
            "clear": [
              "Assign one gun to the connector",
              "Re-check after first contact",
              "Do not let the planter face it alone"
            ],
            "mistake": "Every attacker watches Scaffold while the connector swings free.",
            "line": "SQUARE CONNECTOR → A / CENTER",
            "basis": "Common descriptive callout"
          },
          {
            "id": "main-square",
            "name": "Main Square",
            "aliases": [
              "Square",
              "A Square"
            ],
            "icon": "◎",
            "kind": "Open site zone",
            "risk": "HIGH",
            "position": "Large open plaza on the east side of Tunisia.",
            "watches": [
              "A objective",
              "Scaffold",
              "Multiple ground-level entries"
            ],
            "blind": [
              "Players using crate cover",
              "Smoke breaking one sightline",
              "A split from Center"
            ],
            "escape": [
              "North route",
              "Center connector",
              "South approach"
            ],
            "clear": [
              "Break the Square into separate clears",
              "Use smoke to remove one long angle",
              "Plant only after elevation and deep site are handled"
            ],
            "mistake": "Calling 'Square clear' when only the middle of the plaza is empty.",
            "line": "MAIN SQUARE → A SITE",
            "basis": "Official landmark + common callout"
          },
          {
            "id": "south-square-entry",
            "name": "South Square Entry",
            "aliases": [
              "A Entry",
              "Lower Square"
            ],
            "icon": "▥",
            "kind": "Attack entrance",
            "risk": "MED",
            "position": "South-side route into Main Square.",
            "watches": [
              "Attackers entering A",
              "Defenders crossing between crates",
              "Scaffold line"
            ],
            "blind": [
              "A defender tight to entry cover",
              "Smoke in the lane",
              "Pressure from Center"
            ],
            "escape": [
              "Back toward south spawn",
              "Into Square"
            ],
            "clear": [
              "Clear the immediate corner before looking deep",
              "Account for Scaffold before crossing",
              "Do not bunch in the doorway"
            ],
            "mistake": "Five players stacking the same entrance and creating one easy grenade target.",
            "line": "SOUTH SQUARE ENTRY → A",
            "basis": "Common descriptive callout"
          }
        ]
      },
      "b": {
        "tab": "B / West",
        "title": "B Side • West / Zig",
        "subtitle": "Tighter west-side lanes with vertical stairs, ladder access, and close corners.",
        "checkOrder": [
          "Zig",
          "West Stairs",
          "Ladder",
          "Platform",
          "B Alley"
        ],
        "spots": [
          {
            "id": "zig",
            "name": "Zig",
            "aliases": [
              "Zigzag"
            ],
            "icon": "〽",
            "kind": "Defender-side connector",
            "risk": "HIGH",
            "position": "Zigzag route near the defender side that branches toward A or back toward Mid.",
            "watches": [
              "Late rotation",
              "West-side pressure",
              "Players moving from defender spawn"
            ],
            "blind": [
              "A player tucked at each bend",
              "Utility into the narrow route",
              "Pressure from both exits"
            ],
            "escape": [
              "Toward A",
              "Toward Mid",
              "Back to defender spawn"
            ],
            "clear": [
              "Clear one bend at a time",
              "Use sound before the second corner",
              "Call the direction the player leaves"
            ],
            "mistake": "Calling Zig clear after seeing the first turn only.",
            "line": "ZIG → A / MID / DEFENDER SPAWN",
            "basis": "Community-confirmed common callout"
          },
          {
            "id": "west-stairs",
            "name": "West Stairs",
            "aliases": [
              "Stairs",
              "B Stairs"
            ],
            "icon": "▥",
            "kind": "Vertical choke",
            "risk": "HIGH",
            "position": "Main stair set in the tight west-side lane.",
            "watches": [
              "B approach",
              "Players leaving lower west",
              "Platform movement"
            ],
            "blind": [
              "A player above the top step",
              "A close player below",
              "Ladder-side pressure"
            ],
            "escape": [
              "Up to Platform",
              "Down to lower west"
            ],
            "clear": [
              "Pre-aim the top edge",
              "Clear high and low separately",
              "Do not sprint into the landing"
            ],
            "mistake": "Looking forward while the threat is above the crosshair.",
            "line": "WEST STAIRS → B / PLATFORM",
            "basis": "Official landmark + common shorthand"
          },
          {
            "id": "ladder",
            "name": "Ladder",
            "aliases": [
              "West Ladder"
            ],
            "icon": "⇧",
            "kind": "Vertical access",
            "risk": "MED",
            "position": "Ladder granting access to the west platform/elevated view.",
            "watches": [
              "Players climbing into high ground",
              "B-side rotation",
              "Lower lane"
            ],
            "blind": [
              "A defender watching the climb",
              "Utility at the top",
              "A second player covering from Platform"
            ],
            "escape": [
              "Back down ladder",
              "Across Platform"
            ],
            "clear": [
              "Listen before committing to the climb",
              "Have a teammate hold the top edge",
              "Do not climb after revealing yourself below"
            ],
            "mistake": "Using the ladder as if the player at the top cannot hear it.",
            "line": "LADDER → PLATFORM / B",
            "basis": "Official landmark"
          },
          {
            "id": "platform",
            "name": "Platform",
            "aliases": [
              "West Platform",
              "Top West"
            ],
            "icon": "▣",
            "kind": "Elevated hold",
            "risk": "HIGH",
            "position": "Raised west-side platform reached by stairs or ladder.",
            "watches": [
              "B lanes",
              "Stair exits",
              "Lower west movement"
            ],
            "blind": [
              "Utility on the platform",
              "Pressure from two access routes",
              "A close push after the first shot"
            ],
            "escape": [
              "Stairs",
              "Ladder",
              "Deeper west route"
            ],
            "clear": [
              "Force it to watch two entries",
              "Do not climb both routes one at a time",
              "Move immediately after taking the position"
            ],
            "mistake": "Challenging the same elevated angle repeatedly from the same staircase.",
            "line": "PLATFORM → WEST / B",
            "basis": "Official landmark + common shorthand"
          },
          {
            "id": "b-alley",
            "name": "B Alley",
            "aliases": [
              "West Alley",
              "Lower Alley"
            ],
            "icon": "▤",
            "kind": "Close lane",
            "risk": "MED",
            "position": "Narrow west-side alley leading into the B fight.",
            "watches": [
              "B approach",
              "Stair exit",
              "Late flank"
            ],
            "blind": [
              "Close corners",
              "Platform elevation",
              "Utility around cover"
            ],
            "escape": [
              "Back toward spawn",
              "Toward Stairs"
            ],
            "clear": [
              "Clear the near corner first",
              "Keep the Platform accounted for",
              "Trade through the narrow lane"
            ],
            "mistake": "Looking deep while a defender is tucked in the closest corner.",
            "line": "B ALLEY → B / WEST STAIRS",
            "basis": "Official map description + common shorthand"
          },
          {
            "id": "b-back",
            "name": "B Back",
            "aliases": [
              "Deep B",
              "Back West"
            ],
            "icon": "●",
            "kind": "Deep-site hold",
            "risk": "HIGH",
            "position": "Deep edge of the west-side B objective area.",
            "watches": [
              "B plant",
              "Players leaving Stairs",
              "Late rotation"
            ],
            "blind": [
              "A coordinated split",
              "Utility behind cover",
              "Pressure from Platform and Alley together"
            ],
            "escape": [
              "Deeper west route",
              "Toward Zig"
            ],
            "clear": [
              "Clear deep B before planting",
              "Keep Stairs blocked",
              "Do not assume the site is empty because Alley was clear"
            ],
            "mistake": "Planting before checking the deepest position.",
            "line": "B BACK → B PLANT",
            "basis": "Common descriptive callout"
          }
        ]
      },
      "mid": {
        "tab": "Mid / Street",
        "title": "Mid • Center Street",
        "subtitle": "Long center lane defined by Window, Arch, stairs, and connectors.",
        "checkOrder": [
          "Window",
          "North Arch",
          "Right Stairs",
          "Center Connector",
          "Center Street"
        ],
        "spots": [
          {
            "id": "window",
            "name": "Window",
            "aliases": [
              "South Window",
              "Center Window"
            ],
            "icon": "▣",
            "kind": "Long-range hold",
            "risk": "HIGH",
            "position": "Second-story south-side window overlooking Center Street.",
            "watches": [
              "Center Street",
              "Mid crossing",
              "Players rotating toward Square"
            ],
            "blind": [
              "Right-stair cover",
              "Smoke in Center",
              "Close pressure into the building"
            ],
            "escape": [
              "Back into south building",
              "Deeper south route"
            ],
            "clear": [
              "Find Window before entering Center",
              "Smoke or force it off the angle",
              "Use right-side stair cover to close distance"
            ],
            "mistake": "Calling Mid clear because the first sniper shot missed.",
            "line": "WINDOW → CENTER STREET",
            "basis": "Official landmark + common shorthand"
          },
          {
            "id": "north-arch",
            "name": "North Arch",
            "aliases": [
              "Arch",
              "Top Mid"
            ],
            "icon": "⌂",
            "kind": "Long-lane hold",
            "risk": "HIGH",
            "position": "North-side arch/entry at the far end of Center Street.",
            "watches": [
              "Center pressure",
              "Late rotation",
              "Square-to-Mid movement"
            ],
            "blind": [
              "Side connectors",
              "Smoke in Street",
              "Close pressure after the first shot"
            ],
            "escape": [
              "Back toward north spawn",
              "Toward Square"
            ],
            "clear": [
              "Do not expose to Window and Arch together",
              "Clear the side connector before widening",
              "Move after contact"
            ],
            "mistake": "Standing in Center while deciding which end of the lane to fight.",
            "line": "NORTH ARCH → CENTER STREET",
            "basis": "Common descriptive callout"
          },
          {
            "id": "right-stairs",
            "name": "Right Stairs",
            "aliases": [
              "Center Stairs",
              "Window Stairs"
            ],
            "icon": "▥",
            "kind": "Cover route",
            "risk": "MED",
            "position": "Stairwell on the right side of Center used to close distance on Window.",
            "watches": [
              "Center crossing",
              "Window building approach",
              "Square connector"
            ],
            "blind": [
              "A player at the landing",
              "A swing from Center",
              "Utility in the stairwell"
            ],
            "escape": [
              "Up toward Window",
              "Back to Center"
            ],
            "clear": [
              "Use the stairs as cover, not a blind sprint route",
              "Pre-aim the landing",
              "Listen before climbing"
            ],
            "mistake": "Thinking cover from Window means safety from the stair landing.",
            "line": "RIGHT STAIRS → WINDOW / CENTER",
            "basis": "Official tactical landmark"
          },
          {
            "id": "center-connector",
            "name": "Center Connector",
            "aliases": [
              "Mid Connector",
              "Square Cut"
            ],
            "icon": "▤",
            "kind": "Cross-lane link",
            "risk": "HIGH",
            "position": "Side route connecting Center Street with Square or west lanes.",
            "watches": [
              "Rotations between sites",
              "Players avoiding the long lane",
              "Mid splits"
            ],
            "blind": [
              "A close player in the connector",
              "Pressure from either lane",
              "Utility through the doorway"
            ],
            "escape": [
              "Toward Square",
              "Toward West",
              "Back into Center"
            ],
            "clear": [
              "Call which direction the player exits",
              "Do not chase through without support",
              "Re-check after first contact"
            ],
            "mistake": "Losing a player in the connector and reporting only 'Mid.'",
            "line": "CENTER CONNECTOR → SQUARE / WEST",
            "basis": "Common descriptive callout"
          },
          {
            "id": "center-street",
            "name": "Center Street",
            "aliases": [
              "Center",
              "Mid Street",
              "Mid"
            ],
            "icon": "◎",
            "kind": "Long lane",
            "risk": "HIGH",
            "position": "Direct north-south street through the middle of Tunisia.",
            "watches": [
              "Window and Arch sightlines",
              "Crossings into both sites",
              "Fast rotations"
            ],
            "blind": [
              "Smoke breaking vision",
              "Side connectors",
              "Players tight to stair cover"
            ],
            "escape": [
              "North Arch",
              "South Window",
              "Side connectors"
            ],
            "clear": [
              "Treat Center as a firing lane first and a route second",
              "Account for both ends before crossing",
              "Use information to leave quickly"
            ],
            "mistake": "Using the shortest route simply because it is shortest.",
            "line": "CENTER STREET → NORTH / SOUTH",
            "basis": "Official landmark + common callout"
          }
        ]
      }
    }
  },
  "coastal": {
    "map": "Coastal",
    "status": "Common callout set",
    "note": "Coastal has less universal naming than legacy maps, so this set uses the ranked terms that recur most often—Winery, Ladder, Courtyard, Mid, Arch, Rooms, Alley, Back—plus aliases tied to obvious landmarks.",
    "basis": "CODM ranked/community usage + Coastal S&D strategy sources + visible map landmarks.",
    "groups": {
      "a": {
        "tab": "A / Courtyard",
        "title": "A Side • Courtyard / Winery",
        "subtitle": "Open A-side courtyard with Winery, Ladder height, deep site, and Mid connection.",
        "checkOrder": [
          "Winery",
          "Top Ladder",
          "Deep A",
          "A Connector",
          "A Courtyard"
        ],
        "spots": [
          {
            "id": "winery",
            "name": "Winery",
            "aliases": [
              "Wine",
              "Wine Room"
            ],
            "icon": "▤",
            "kind": "Interior power position",
            "risk": "HIGH",
            "position": "Wine-themed interior/building used to hold the A-side approach and nearby lanes.",
            "watches": [
              "A approach",
              "Courtyard movement",
              "Players rotating through the interior"
            ],
            "blind": [
              "Utility into the room",
              "A split from Courtyard and Mid",
              "Close pressure after the first shot"
            ],
            "escape": [
              "Deeper interior",
              "Toward Courtyard"
            ],
            "clear": [
              "Do not cross A while Winery is unaccounted for",
              "Use utility before entering",
              "Trade the doorway rather than sending solo peeks"
            ],
            "mistake": "Treating Winery as one doorway instead of an interior that can reposition.",
            "line": "WINERY → A COURTYARD / MID",
            "basis": "Community-used Coastal callout"
          },
          {
            "id": "top-ladder",
            "name": "Top Ladder",
            "aliases": [
              "Ladder Top",
              "Upper Ladder"
            ],
            "icon": "⇧",
            "kind": "Elevated hold",
            "risk": "HIGH",
            "position": "Upper position reached by the ladder near the A/B-side route.",
            "watches": [
              "Courtyard crossing",
              "Players climbing",
              "Site rotation"
            ],
            "blind": [
              "Utility at the top",
              "A second angle from Mid",
              "A player directly below"
            ],
            "escape": [
              "Back from the ledge",
              "Down ladder"
            ],
            "clear": [
              "Check the top edge before entering open ground",
              "Do not climb without cover",
              "Force the holder off before crossing"
            ],
            "mistake": "Looking at the site while the elevated player watches the entire entry.",
            "line": "TOP LADDER → COURTYARD / CROSS",
            "basis": "Community-used landmark callout"
          },
          {
            "id": "deep-a",
            "name": "Deep A",
            "aliases": [
              "A Back",
              "Back Courtyard"
            ],
            "icon": "●",
            "kind": "Deep-site hold",
            "risk": "HIGH",
            "position": "Far edge of A Courtyard beyond the first visible cover.",
            "watches": [
              "A plant",
              "Players entering from lower route",
              "Attackers focused on Winery"
            ],
            "blind": [
              "A coordinated wide clear",
              "Utility behind site cover",
              "Pressure from A Connector"
            ],
            "escape": [
              "Back courtyard route",
              "Toward Winery"
            ],
            "clear": [
              "Clear Deep A before planting",
              "Split elevation and ground checks",
              "Do not use one quick scan as proof it is empty"
            ],
            "mistake": "Discovering the deepest defender while planting.",
            "line": "DEEP A → A PLANT",
            "basis": "Common descriptive callout"
          },
          {
            "id": "a-connector",
            "name": "A Connector",
            "aliases": [
              "Mid-to-A",
              "A Door"
            ],
            "icon": "▤",
            "kind": "Rotation doorway",
            "risk": "HIGH",
            "position": "Connector between Mid and A Courtyard.",
            "watches": [
              "Fast rotation into A",
              "Planter side angle",
              "Players leaving Mid"
            ],
            "blind": [
              "A player tight to the doorway",
              "Pressure from Courtyard",
              "A delayed Mid flank"
            ],
            "escape": [
              "Back to Mid",
              "Into Courtyard"
            ],
            "clear": [
              "Assign one gun to the connector",
              "Re-check after contact",
              "Do not let every player face the site"
            ],
            "mistake": "All attackers watch Deep A and leave the connector free.",
            "line": "A CONNECTOR → MID / A",
            "basis": "Common descriptive callout"
          },
          {
            "id": "a-courtyard",
            "name": "A Courtyard",
            "aliases": [
              "Courtyard",
              "A Site"
            ],
            "icon": "◎",
            "kind": "Open site zone",
            "risk": "HIGH",
            "position": "Open courtyard containing the A objective.",
            "watches": [
              "A plant",
              "Winery",
              "Top Ladder and deep site"
            ],
            "blind": [
              "Smoke splitting sightlines",
              "Players tight to cover",
              "A Mid split"
            ],
            "escape": [
              "Winery",
              "Deep A",
              "Connector"
            ],
            "clear": [
              "Break the courtyard into separate threats",
              "Remove one elevated line before crossing",
              "Use separate post-plant angles"
            ],
            "mistake": "Calling the whole courtyard clear because the bomb marker is visible.",
            "line": "A COURTYARD → A SITE",
            "basis": "Community/strategy-source terminology"
          }
        ]
      },
      "b": {
        "tab": "B / Rooms",
        "title": "B Side • Rooms / Ladder",
        "subtitle": "Tighter B-side interiors, doorway fights, ladder height, and deep corners.",
        "checkOrder": [
          "B Ladder",
          "B Rooms",
          "B Back",
          "B Door",
          "B Alley"
        ],
        "spots": [
          {
            "id": "b-ladder",
            "name": "B Ladder",
            "aliases": [
              "Ladder",
              "Top B Ladder"
            ],
            "icon": "⇧",
            "kind": "Vertical threat",
            "risk": "HIGH",
            "position": "Ladder-side position near B that creates an upper/lower split.",
            "watches": [
              "B entry",
              "Players looking only into Rooms",
              "Rotation toward Mid"
            ],
            "blind": [
              "Utility at the top",
              "A second entry angle",
              "Close pressure below"
            ],
            "escape": [
              "Down ladder",
              "Toward upper route"
            ],
            "clear": [
              "Account for the top before entering below",
              "Do not climb after revealing yourself",
              "Use a teammate to hold the upper edge"
            ],
            "mistake": "Entering B underneath an unchecked ladder position.",
            "line": "B LADDER → B ENTRY / MID",
            "basis": "Community-used landmark callout"
          },
          {
            "id": "b-rooms",
            "name": "B Rooms",
            "aliases": [
              "Rooms",
              "B Interior"
            ],
            "icon": "▤",
            "kind": "Close interior",
            "risk": "HIGH",
            "position": "Cluster of indoor rooms forming the main B-side fight.",
            "watches": [
              "B plant route",
              "Doorway entries",
              "Players trading through the interior"
            ],
            "blind": [
              "Utility through the doorway",
              "A split from Mid",
              "A wide second entrance"
            ],
            "escape": [
              "Deeper Rooms",
              "Back toward B"
            ],
            "clear": [
              "Clear one room and one doorway at a time",
              "Enter close enough to trade",
              "Do not flood five separate solo peeks"
            ],
            "mistake": "Calling B clear after winning only the first room.",
            "line": "B ROOMS → B SITE",
            "basis": "Common descriptive callout"
          },
          {
            "id": "b-back",
            "name": "B Back",
            "aliases": [
              "Deep B",
              "Back Rooms"
            ],
            "icon": "●",
            "kind": "Deep-site hold",
            "risk": "HIGH",
            "position": "Deep edge behind the first B-side interior clear.",
            "watches": [
              "B plant",
              "Attackers leaving the first room",
              "Late rotation"
            ],
            "blind": [
              "Utility behind cover",
              "A coordinated split",
              "Pressure from B Door"
            ],
            "escape": [
              "Back route",
              "Toward Ladder"
            ],
            "clear": [
              "Clear the deepest corner before planting",
              "Keep the first doorway blocked",
              "Expect a survivor behind the initial clear"
            ],
            "mistake": "Rushing the plant because the first doorway fight was won.",
            "line": "B BACK → B PLANT",
            "basis": "Common descriptive callout"
          },
          {
            "id": "b-door",
            "name": "B Door",
            "aliases": [
              "Mid Door",
              "B Connector"
            ],
            "icon": "▤",
            "kind": "Connector swing",
            "risk": "HIGH",
            "position": "Doorway connecting B Rooms to Mid/central routes.",
            "watches": [
              "B-site collapse",
              "Mid rotation",
              "Planter side angle"
            ],
            "blind": [
              "A player tight to the doorway",
              "Utility through the connector",
              "Pressure from inside B"
            ],
            "escape": [
              "Back to Mid",
              "Into Rooms"
            ],
            "clear": [
              "Hold the doorway during plant",
              "Call the direction of a retreat",
              "Re-check after the first fight"
            ],
            "mistake": "Everyone enters B and nobody protects the connector.",
            "line": "B DOOR → MID / B",
            "basis": "Common descriptive callout"
          },
          {
            "id": "b-alley",
            "name": "B Alley",
            "aliases": [
              "Lower B",
              "Side Alley"
            ],
            "icon": "▥",
            "kind": "Outside approach",
            "risk": "MED",
            "position": "Narrow outside route feeding the B-side interiors.",
            "watches": [
              "B entry",
              "Late flank",
              "Players escaping Rooms"
            ],
            "blind": [
              "Close corners",
              "Ladder height",
              "Utility around the bend"
            ],
            "escape": [
              "Back toward spawn",
              "Into B Rooms"
            ],
            "clear": [
              "Clear the closest bend first",
              "Keep Ladder accounted for",
              "Do not bunch in the alley"
            ],
            "mistake": "Looking deep while a defender sits in the first close corner.",
            "line": "B ALLEY → B ROOMS",
            "basis": "Common descriptive callout"
          }
        ]
      },
      "mid": {
        "tab": "Mid / Arch",
        "title": "Mid • Arch / Street",
        "subtitle": "Central route linking both sites through Arch, Street, doors, and elevation.",
        "checkOrder": [
          "Mid Arch",
          "Balcony",
          "B Door",
          "A Connector",
          "Mid Street"
        ],
        "spots": [
          {
            "id": "mid-arch",
            "name": "Mid Arch",
            "aliases": [
              "Arch",
              "Center Arch"
            ],
            "icon": "⌂",
            "kind": "Central choke",
            "risk": "HIGH",
            "position": "Archway defining the central connector and rotation lane.",
            "watches": [
              "Mid crossing",
              "Rotations between A and B",
              "Players leaving either site"
            ],
            "blind": [
              "A player tight to the arch",
              "Balcony/elevation",
              "Utility through the choke"
            ],
            "escape": [
              "Toward A",
              "Toward B",
              "Back into Mid"
            ],
            "clear": [
              "Pre-aim the arch before rotating",
              "Do not sprint through after hearing distant contact",
              "Clear the close side first"
            ],
            "mistake": "Using Mid Arch as a safe highway because nobody was visible at first glance.",
            "line": "MID ARCH → A / B ROTATION",
            "basis": "Common descriptive callout"
          },
          {
            "id": "balcony",
            "name": "Balcony",
            "aliases": [
              "Upper",
              "Top Mid"
            ],
            "icon": "▣",
            "kind": "Elevated information",
            "risk": "HIGH",
            "position": "Upper central position overlooking portions of Mid and crossings.",
            "watches": [
              "Mid Street",
              "Site rotations",
              "Players focused on ground doors"
            ],
            "blind": [
              "Pressure from interior stairs",
              "Smoke below",
              "A fast angle change"
            ],
            "escape": [
              "Back into upper room",
              "Toward Ladder route"
            ],
            "clear": [
              "Check elevation before crossing Mid",
              "Use walls to reduce the angle",
              "Do not fight Balcony while exposed to a site door"
            ],
            "mistake": "Crossing Mid while checking only the arch at ground level.",
            "line": "BALCONY → MID STREET",
            "basis": "Common landmark callout"
          },
          {
            "id": "b-door-mid",
            "name": "B Door",
            "aliases": [
              "B Connector",
              "Rooms Door"
            ],
            "icon": "▤",
            "kind": "Site connector",
            "risk": "HIGH",
            "position": "Mid-facing doorway into the B-side Rooms.",
            "watches": [
              "B rotation",
              "Mid push",
              "Players escaping the site"
            ],
            "blind": [
              "A player tight inside the doorway",
              "Pressure from Arch",
              "Utility through the opening"
            ],
            "escape": [
              "Into B Rooms",
              "Back to Mid"
            ],
            "clear": [
              "Pre-aim after B contact",
              "Call whether the player retreats or swings",
              "Do not chase alone into Rooms"
            ],
            "mistake": "Reporting 'Mid' without saying the player entered B Door.",
            "line": "B DOOR → MID / B ROOMS",
            "basis": "Common descriptive callout"
          },
          {
            "id": "a-connector-mid",
            "name": "A Connector",
            "aliases": [
              "A Door",
              "Courtyard Connector"
            ],
            "icon": "▤",
            "kind": "Site connector",
            "risk": "HIGH",
            "position": "Mid-facing route into A Courtyard.",
            "watches": [
              "A rotation",
              "Mid split",
              "Players leaving Courtyard"
            ],
            "blind": [
              "A player tight to the entry",
              "Balcony support",
              "Pressure from Deep A"
            ],
            "escape": [
              "Into Courtyard",
              "Back to Mid"
            ],
            "clear": [
              "Hold the connector after A contact",
              "Do not expose to Balcony and the doorway together",
              "Re-check before rotating"
            ],
            "mistake": "Assuming A Connector stays empty after the initial push.",
            "line": "A CONNECTOR → MID / A",
            "basis": "Common descriptive callout"
          },
          {
            "id": "mid-street",
            "name": "Mid Street",
            "aliases": [
              "Mid",
              "Center"
            ],
            "icon": "◎",
            "kind": "Central lane",
            "risk": "HIGH",
            "position": "Broad central outdoor lane connecting the main routes.",
            "watches": [
              "Arch",
              "Balcony",
              "Both site connectors"
            ],
            "blind": [
              "Smoke cutting vision",
              "Players tight to walls",
              "Interior bypass routes"
            ],
            "escape": [
              "Toward Arch",
              "A Connector",
              "B Door"
            ],
            "clear": [
              "Treat Mid as information space, not permanent housing",
              "Account for elevation before crossing",
              "Leave once the read is useful"
            ],
            "mistake": "Winning one Mid fight and remaining there until both sites collapse.",
            "line": "MID STREET → A / B",
            "basis": "Common community shorthand"
          }
        ]
      }
    }
  }
};
