/*
Search & Destroy Companion Map Guide | Copyright © 2026 Michael Barnes. All Rights Reserved.
Original schematic diagrams. No official map artwork is included.
*/
window.MAP_GUIDE_DATA = {
  "raid": {
    "name": "Raid",
    "status": "General tactical reference",
    "subtitle": "Balanced lanes, strong windows, and two very different bomb-site fights.",
    "orientation": "Schematic only. Pool side is shown on the right; Circle Drive is on the left.",
    "zones": [
      {
        "x": 50,
        "y": 215,
        "w": 185,
        "h": 155,
        "label": "CIRCLE DRIVE"
      },
      {
        "x": 70,
        "y": 395,
        "w": 190,
        "h": 135,
        "label": "GARAGE"
      },
      {
        "x": 270,
        "y": 250,
        "w": 230,
        "h": 155,
        "label": "COURTYARD"
      },
      {
        "x": 275,
        "y": 75,
        "w": 185,
        "h": 120,
        "label": "MONEY / OFFICE"
      },
      {
        "x": 505,
        "y": 90,
        "w": 185,
        "h": 120,
        "label": "KITCHEN"
      },
      {
        "x": 690,
        "y": 65,
        "w": 150,
        "h": 135,
        "label": "BEDROOM"
      },
      {
        "x": 615,
        "y": 285,
        "w": 225,
        "h": 200,
        "label": "POOL"
      },
      {
        "x": 485,
        "y": 440,
        "w": 175,
        "h": 105,
        "label": "LAUNDRY"
      },
      {
        "x": 210,
        "y": 45,
        "w": 155,
        "h": 105,
        "label": "BASKETBALL"
      }
    ],
    "sites": [
      {
        "id": "raid-a",
        "x": 730,
        "y": 385,
        "label": "A",
        "title": "A Site: Pool Bar",
        "detail": "The plant zone sits by the circular bar in Pool. Expect Bedroom and Kitchen pressure, plus late Laundry flanks.",
        "watch": "Bedroom, Kitchen, Laundry entrance",
        "counter": "Smoke the direct view, clear Bedroom first, and do not plant while three doors remain unchecked."
      },
      {
        "id": "raid-b",
        "x": 220,
        "y": 285,
        "label": "B",
        "title": "B Site: Circle Drive",
        "detail": "The plant zone is west of Circle Drive near the Courtyard passage. Garage and Courtyard control decide whether the plant is safe.",
        "watch": "Garage, Courtyard, Money side",
        "counter": "Take one lane of control before planting. A naked sprint into the circle is merely a donation."
      }
    ],
    "holds": [
      {
        "id": "raid-bedroom",
        "x": 755,
        "y": 125,
        "n": 1,
        "title": "Kitchen",
        "detail": "Elevated hold over Pool. Strong for protecting A and punishing players crossing open water-side space.",
        "watch": "Pool and the A plant area",
        "counter": "Check the back stairs, use cover below the window, or force the player off with utility."
      },
      {
        "id": "raid-money",
        "x": 365,
        "y": 132,
        "n": 2,
        "title": "Money Window",
        "detail": "A central information position with a view toward Courtyard. It can catch rotations and early mid pressure.",
        "watch": "Courtyard and central movement",
        "counter": "Do not cross Courtyard without checking the window or using the side wall to cut the angle."
      },
      {
        "id": "raid-garage",
        "x": 155,
        "y": 445,
        "n": 3,
        "title": "Garage / Lambo Hold",
        "detail": "A patient defender can watch Circle Drive approaches and delay a B hit without exposing much of the body.",
        "watch": "Circle Drive and lower approach",
        "counter": "Clear the van edge and deep garage separately. One glance does not clear both."
      },
      {
        "id": "raid-kitchen",
        "x": 590,
        "y": 150,
        "n": 4,
        "title": "Kitchen Door",
        "detail": "A short-to-mid range hold that connects Pool and Courtyard. It becomes dangerous after the attackers focus only on Bedroom.",
        "watch": "Pool entrance and central connector",
        "counter": "Trade the doorway together or block it before committing to the A plant."
      },
      {
        "id": "raid-laundry",
        "x": 565,
        "y": 495,
        "n": 5,
        "title": "Laundry Door",
        "detail": "A close-range hold that can stop a Pool push or produce a late flank after the bomb goes down.",
        "watch": "Pool edge and lower route",
        "counter": "Use sound, pre-aim the door, and leave one teammate watching the flank after planting."
      }
    ],
    "sightlines": [
      {
        "x1": 755,
        "y1": 125,
        "x2": 730,
        "y2": 385,
        "label": "Bedroom → A"
      },
      {
        "x1": 365,
        "y1": 132,
        "x2": 395,
        "y2": 320,
        "label": "Money → Courtyard"
      },
      {
        "x1": 155,
        "y1": 445,
        "x2": 220,
        "y2": 285,
        "label": "Garage → B"
      },
      {
        "x1": 590,
        "y1": 150,
        "x2": 700,
        "y2": 350,
        "label": "Kitchen → Pool"
      }
    ],
    "routes": [
      {
        "points": [
          [
            95,
            500
          ],
          [
            170,
            445
          ],
          [
            220,
            285
          ]
        ],
        "label": "B pressure"
      },
      {
        "points": [
          [
            105,
            500
          ],
          [
            350,
            355
          ],
          [
            590,
            330
          ],
          [
            730,
            385
          ]
        ],
        "label": "Mid to A"
      },
      {
        "points": [
          [
            100,
            520
          ],
          [
            520,
            500
          ],
          [
            730,
            385
          ]
        ],
        "label": "Laundry to A"
      }
    ],
    "danger": [
      {
        "x": 395,
        "y": 325,
        "r": 62,
        "label": "Courtyard cross"
      },
      {
        "x": 700,
        "y": 360,
        "r": 58,
        "label": "Pool open space"
      },
      {
        "x": 210,
        "y": 290,
        "r": 50,
        "label": "Circle plant"
      }
    ],
    "warnings": [
      "Bedroom and Kitchen can watch the same A-side movement from different heights.",
      "Courtyard feels central and safe until Money, Kitchen, and Circle Drive all see it at once.",
      "After an A plant, keep one person aware of Laundry. Humans do enjoy flanking the moment everyone stares at the bomb."
    ]
  },
  "tunisia": {
    "name": "Tunisia",
    "status": "General tactical reference",
    "subtitle": "Three loose lanes with long center vision, an open square, and ugly vertical surprises.",
    "orientation": "Schematic only. South spawn is shown at the bottom and north spawn at the top.",
    "zones": [
      {
        "x": 55,
        "y": 75,
        "w": 245,
        "h": 455,
        "label": "WEST ALLEYS / STAIRS"
      },
      {
        "x": 325,
        "y": 60,
        "w": 210,
        "h": 485,
        "label": "CENTER STREET"
      },
      {
        "x": 565,
        "y": 70,
        "w": 280,
        "h": 455,
        "label": "MAIN SQUARE"
      },
      {
        "x": 345,
        "y": 455,
        "w": 170,
        "h": 95,
        "label": "SOUTH WINDOW"
      },
      {
        "x": 620,
        "y": 85,
        "w": 180,
        "h": 95,
        "label": "SCAFFOLDING"
      },
      {
        "x": 85,
        "y": 235,
        "w": 160,
        "h": 110,
        "label": "WEST PLATFORM"
      }
    ],
    "sites": [
      {
        "id": "tunisia-a",
        "x": 700,
        "y": 335,
        "label": "A",
        "title": "A Site: Main Square",
        "detail": "The A-side fight is exposed and often visible from elevation. Crates help, but they do not erase the window, scaffolding, or street approaches.",
        "watch": "Scaffolding, square entrances, center connector",
        "counter": "Use smoke or utility to break one sightline, then clear the remaining angles in order."
      },
      {
        "id": "tunisia-b",
        "x": 190,
        "y": 300,
        "label": "B",
        "title": "B Site: West Side",
        "detail": "The B-side route is tighter and more vertical. Stairs, ladders, and close corners make it better for short-range ambushes.",
        "watch": "Upper platform, stair exits, alley connectors",
        "counter": "Clear high and low separately. Looking forward does not count as checking above you."
      }
    ],
    "holds": [
      {
        "id": "tunisia-window",
        "x": 430,
        "y": 495,
        "n": 1,
        "title": "Window",
        "detail": "The signature long-range position over Center Street. It punishes anyone who treats the center lane like a hallway instead of a firing lane.",
        "watch": "Center Street and crossings",
        "counter": "Use the right stair cover, smoke the lane, or force the sniper to move before crossing."
      },
      {
        "id": "tunisia-scaffold",
        "x": 710,
        "y": 130,
        "n": 2,
        "title": "Scaffold",
        "detail": "Elevated control over the Main Square with a quick escape toward the north side.",
        "watch": "A-side square and lower approaches",
        "counter": "Check the platform before entering the open square and avoid standing still behind the first crate you find."
      },
      {
        "id": "tunisia-west-platform",
        "x": 170,
        "y": 270,
        "n": 3,
        "title": "Platform",
        "detail": "A vertical ambush spot covering the compact west lanes and stair movement.",
        "watch": "B-side approaches and stair exits",
        "counter": "Pre-aim the top edge and listen for movement before climbing."
      },
      {
        "id": "tunisia-north-arch",
        "x": 445,
        "y": 105,
        "n": 4,
        "title": "North Arch",
        "detail": "A patient hold that catches center pressure and late rotations between the square and west lanes.",
        "watch": "Center Street and connector traffic",
        "counter": "Do not rotate through center at full sprint after revealing your position elsewhere."
      },
      {
        "id": "tunisia-square-corner",
        "x": 780,
        "y": 390,
        "n": 5,
        "title": "A Back",
        "detail": "A low-profile hold using the square boundary to watch plant traffic and punish tunnel vision.",
        "watch": "A plant and lower square entry",
        "counter": "Clear the deep corner before planting, not while the planting animation has removed your dignity."
      }
    ],
    "sightlines": [
      {
        "x1": 430,
        "y1": 495,
        "x2": 445,
        "y2": 105,
        "label": "Center Window lane"
      },
      {
        "x1": 710,
        "y1": 130,
        "x2": 700,
        "y2": 335,
        "label": "Scaffold → A"
      },
      {
        "x1": 170,
        "y1": 270,
        "x2": 190,
        "y2": 300,
        "label": "Platform → B"
      },
      {
        "x1": 780,
        "y1": 390,
        "x2": 650,
        "y2": 250,
        "label": "Square diagonal"
      }
    ],
    "routes": [
      {
        "points": [
          [
            430,
            555
          ],
          [
            430,
            360
          ],
          [
            445,
            105
          ]
        ],
        "label": "Center pressure"
      },
      {
        "points": [
          [
            410,
            555
          ],
          [
            650,
            470
          ],
          [
            700,
            335
          ]
        ],
        "label": "A square hit"
      },
      {
        "points": [
          [
            390,
            555
          ],
          [
            230,
            450
          ],
          [
            190,
            300
          ]
        ],
        "label": "B west hit"
      }
    ],
    "danger": [
      {
        "x": 445,
        "y": 330,
        "r": 58,
        "label": "Center crossing"
      },
      {
        "x": 700,
        "y": 335,
        "r": 72,
        "label": "Open A site"
      },
      {
        "x": 190,
        "y": 300,
        "r": 55,
        "label": "Vertical B entry"
      }
    ],
    "warnings": [
      "Center Street is fast only when nobody is watching it. Somebody is usually watching it.",
      "The square can expose you to ground-level and elevated fire at the same time.",
      "West-side stair exits must be cleared slowly because the threat can be above, below, or around the next corner. Delightful architecture."
    ]
  },
  "coastal": {
    "name": "Coastal",
    "status": "General tactical reference",
    "subtitle": "Built for S&D: broad outdoor lanes, interior connectors, and sites that punish lazy clearing.",
    "orientation": "Schematic only. A side is shown to the right; B side is shown to the left.",
    "zones": [
      {
        "x": 55,
        "y": 90,
        "w": 260,
        "h": 430,
        "label": "B-SIDE INTERIORS"
      },
      {
        "x": 335,
        "y": 70,
        "w": 210,
        "h": 470,
        "label": "MID / CONNECTORS"
      },
      {
        "x": 565,
        "y": 90,
        "w": 280,
        "h": 430,
        "label": "A-SIDE COURTYARD"
      },
      {
        "x": 90,
        "y": 125,
        "w": 165,
        "h": 120,
        "label": "UPPER B ROOM"
      },
      {
        "x": 95,
        "y": 360,
        "w": 180,
        "h": 115,
        "label": "LOWER B LANE"
      },
      {
        "x": 380,
        "y": 240,
        "w": 125,
        "h": 120,
        "label": "MID ARCH"
      },
      {
        "x": 620,
        "y": 125,
        "w": 170,
        "h": 110,
        "label": "UPPER WALK"
      },
      {
        "x": 625,
        "y": 365,
        "w": 175,
        "h": 110,
        "label": "LOWER A ENTRY"
      }
    ],
    "sites": [
      {
        "id": "coastal-a",
        "x": 705,
        "y": 310,
        "label": "A",
        "title": "A Site: Courtyard Side",
        "detail": "A is approached through broad lanes and multiple courtyard entries. The plant becomes dangerous when upper walk and deep corner remain unchecked.",
        "watch": "Upper walk, deep courtyard, mid connector",
        "counter": "Split the clear: one player checks elevation while another checks the deep site corner."
      },
      {
        "id": "coastal-b",
        "x": 185,
        "y": 305,
        "label": "B",
        "title": "B Site: Interior Side",
        "detail": "B favors close control of doors, corners, and short connectors. It is less open than A but easier to stack with hidden defenders.",
        "watch": "Upper room, lower lane, mid doorway",
        "counter": "Use utility before entering and trade through the first doorway instead of filing in one victim at a time."
      }
    ],
    "holds": [
      {
        "id": "coastal-upper-b",
        "x": 175,
        "y": 175,
        "n": 1,
        "title": "B Rooms",
        "detail": "An elevated interior hold covering a B approach and part of the connector network.",
        "watch": "B entrance and mid-side rotation",
        "counter": "Check the upper window/door before committing to the lower site."
      },
      {
        "id": "coastal-lower-b",
        "x": 170,
        "y": 415,
        "n": 2,
        "title": "Lower B Lane",
        "detail": "A patient close-range hold that catches players who rush past the first piece of cover.",
        "watch": "Lower B approach",
        "counter": "Slice the lane in small pieces and avoid chasing a weak defender into the next corner."
      },
      {
        "id": "coastal-mid-arch",
        "x": 445,
        "y": 300,
        "n": 3,
        "title": "Mid Arch / Connector",
        "detail": "Information-heavy position linking both sites. Owning this point makes rotations faster and more predictable.",
        "watch": "Cross-map rotations and site splits",
        "counter": "Do not give Mid away for free, but do not stand in the arch after the enemy already knows you are there."
      },
      {
        "id": "coastal-upper-a",
        "x": 700,
        "y": 170,
        "n": 4,
        "title": "Upper A Walk",
        "detail": "Elevated pressure over the A-side courtyard and plant approach.",
        "watch": "A entry and open courtyard",
        "counter": "Force the angle off with utility or approach from a route that cuts the upper view."
      },
      {
        "id": "coastal-deep-a",
        "x": 785,
        "y": 365,
        "n": 5,
        "title": "Deep A",
        "detail": "A deep defensive hold that waits for attackers to look toward Mid or the upper walk.",
        "watch": "A plant and lower entry",
        "counter": "Clear deep site before touching the plant button. The bomb carrier is not a volunteer decoy."
      }
    ],
    "sightlines": [
      {
        "x1": 175,
        "y1": 175,
        "x2": 185,
        "y2": 305,
        "label": "Upper B → site"
      },
      {
        "x1": 445,
        "y1": 300,
        "x2": 705,
        "y2": 310,
        "label": "Mid → A"
      },
      {
        "x1": 445,
        "y1": 300,
        "x2": 185,
        "y2": 305,
        "label": "Mid → B"
      },
      {
        "x1": 700,
        "y1": 170,
        "x2": 705,
        "y2": 310,
        "label": "Upper walk → A"
      }
    ],
    "routes": [
      {
        "points": [
          [
            450,
            560
          ],
          [
            445,
            300
          ],
          [
            185,
            305
          ]
        ],
        "label": "Mid to B"
      },
      {
        "points": [
          [
            450,
            560
          ],
          [
            445,
            300
          ],
          [
            705,
            310
          ]
        ],
        "label": "Mid to A"
      },
      {
        "points": [
          [
            430,
            560
          ],
          [
            690,
            470
          ],
          [
            705,
            310
          ]
        ],
        "label": "Lower A hit"
      },
      {
        "points": [
          [
            430,
            560
          ],
          [
            190,
            470
          ],
          [
            185,
            305
          ]
        ],
        "label": "Lower B hit"
      }
    ],
    "danger": [
      {
        "x": 445,
        "y": 300,
        "r": 58,
        "label": "Mid cross"
      },
      {
        "x": 705,
        "y": 310,
        "r": 67,
        "label": "A courtyard"
      },
      {
        "x": 185,
        "y": 305,
        "r": 58,
        "label": "B doorway stack"
      }
    ],
    "warnings": [
      "Mid control shortens every rotation and lets the enemy threaten both sites without announcing which one.",
      "A-side elevation and deep corners create a two-level clear. Looking left and right is not enough.",
      "B-side interiors reward trading and utility. Solo doorway heroics mostly reward the defender."
    ]
  }
};
