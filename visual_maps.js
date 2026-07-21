/* Original tactical schematics. Copyright © 2026 Michael Barnes. */
window.VISUAL_MAPS = {
  "raid": {
    "id": "raid",
    "name": "Raid",
    "tier": "Ranked staple / requested",
    "description": "Open estate with two strong side lanes and a dangerous central courtyard.",
    "zones": [
      {
        "label": "MANSION",
        "x": 310,
        "y": 80,
        "w": 290,
        "h": 150,
        "kind": "building",
        "r": 16
      },
      {
        "label": "KITCHEN",
        "x": 560,
        "y": 165,
        "w": 120,
        "h": 125,
        "kind": "building",
        "r": 16
      },
      {
        "label": "WATER",
        "x": 650,
        "y": 250,
        "w": 160,
        "h": 210,
        "kind": "open",
        "r": 16
      },
      {
        "label": "LAUNDRY",
        "x": 570,
        "y": 470,
        "w": 150,
        "h": 100,
        "kind": "building",
        "r": 16
      },
      {
        "label": "BASKETBALL",
        "x": 390,
        "y": 500,
        "w": 165,
        "h": 85,
        "kind": "open",
        "r": 16
      },
      {
        "label": "COURTYARD",
        "x": 300,
        "y": 260,
        "w": 250,
        "h": 210,
        "kind": "open",
        "r": 16
      },
      {
        "label": "ART",
        "x": 120,
        "y": 150,
        "w": 150,
        "h": 150,
        "kind": "building",
        "r": 16
      },
      {
        "label": "GARAGE",
        "x": 45,
        "y": 290,
        "w": 170,
        "h": 150,
        "kind": "building",
        "r": 16
      },
      {
        "label": "DRIVEWAY",
        "x": 55,
        "y": 455,
        "w": 250,
        "h": 90,
        "kind": "open",
        "r": 16
      },
      {
        "label": "RING",
        "x": 230,
        "y": 455,
        "w": 145,
        "h": 110,
        "kind": "open",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Bedroom",
        "x": 445,
        "y": 105,
        "side": "A",
        "kind": "elevated hold",
        "summary": "Upper mansion angle over Water.",
        "watch": "A cross, Pool entry",
        "counter": "Smoke it or clear from Kitchen.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Kitchen",
        "x": 610,
        "y": 220,
        "side": "A",
        "kind": "connector",
        "summary": "Main mansion connector to Water.",
        "watch": "A plant, Water cross",
        "counter": "Block it before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Water",
        "x": 730,
        "y": 335,
        "side": "A",
        "kind": "site lane",
        "summary": "Open Pool-side lane.",
        "watch": "A site and Tiki",
        "counter": "Use cover and split Laundry.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tiki",
        "x": 670,
        "y": 410,
        "side": "A",
        "kind": "partial cover",
        "summary": "Low cover beside Water.",
        "watch": "Pool cross",
        "counter": "Clear close cover first.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Laundry",
        "x": 635,
        "y": 520,
        "side": "A",
        "kind": "flank route",
        "summary": "Lower route into Water.",
        "watch": "Late flank",
        "counter": "Assign one flank watcher.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Money",
        "x": 410,
        "y": 185,
        "side": "MID",
        "kind": "window/room",
        "summary": "Mansion room above Courtyard.",
        "watch": "Mid and Ring",
        "counter": "Pressure from Art or Kitchen.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Courtyard",
        "x": 420,
        "y": 350,
        "side": "MID",
        "kind": "open control",
        "summary": "Central open area.",
        "watch": "Rotations everywhere",
        "counter": "Cross only with two angles cleared.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Pillars",
        "x": 330,
        "y": 330,
        "side": "MID",
        "kind": "cover",
        "summary": "Central pillar cover.",
        "watch": "Courtyard cross",
        "counter": "Utility or double peek.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Ring",
        "x": 295,
        "y": 510,
        "side": "B",
        "kind": "site lane",
        "summary": "Circular drive around B.",
        "watch": "B plant and Driveway",
        "counter": "Clear Garage and Art first.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Art",
        "x": 190,
        "y": 220,
        "side": "B",
        "kind": "connector",
        "summary": "West room toward B.",
        "watch": "Ring and Courtyard",
        "counter": "Pin from Courtyard while pushing Driveway.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Garage",
        "x": 120,
        "y": 350,
        "side": "B",
        "kind": "deep hold",
        "summary": "Deep vehicle-side room.",
        "watch": "Driveway and B",
        "counter": "Separate door and deep angle.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Lambo",
        "x": 145,
        "y": 465,
        "side": "B",
        "kind": "vehicle cover",
        "summary": "Car cover near Garage.",
        "watch": "Driveway cross",
        "counter": "Nade behind it or wrap close.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Basketball",
        "x": 465,
        "y": 535,
        "side": "B",
        "kind": "back route",
        "summary": "Rear lane behind Ring.",
        "watch": "Late rotation",
        "counter": "Keep one ear on it.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        735,
        315
      ],
      "B": [
        275,
        475
      ]
    },
    "spawns": {
      "attack": [
        450,
        585
      ],
      "defense": [
        450,
        45
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              585
            ],
            [
              610,
              520
            ],
            [
              690,
              420
            ],
            [
              735,
              315
            ]
          ],
          "label": "Laundry split"
        },
        {
          "points": [
            [
              450,
              585
            ],
            [
              480,
              390
            ],
            [
              560,
              260
            ],
            [
              735,
              315
            ]
          ],
          "label": "Kitchen split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              585
            ],
            [
              330,
              520
            ],
            [
              275,
              475
            ]
          ],
          "label": "Ring hit"
        },
        {
          "points": [
            [
              450,
              585
            ],
            [
              180,
              490
            ],
            [
              125,
              350
            ],
            [
              275,
              475
            ]
          ],
          "label": "Driveway split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              45
            ],
            [
              610,
              220
            ],
            [
              735,
              315
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              45
            ],
            [
              190,
              220
            ],
            [
              275,
              475
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              45
            ],
            [
              410,
              185
            ],
            [
              420,
              350
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          445,
          105
        ],
        "b": [
          735,
          315
        ],
        "label": "Bedroom → Water"
      },
      {
        "a": [
          610,
          220
        ],
        "b": [
          420,
          350
        ],
        "label": "Kitchen → Courtyard"
      },
      {
        "a": [
          120,
          350
        ],
        "b": [
          275,
          475
        ],
        "label": "Garage → Ring"
      },
      {
        "a": [
          410,
          185
        ],
        "b": [
          295,
          510
        ],
        "label": "Money → Ring"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Bedroom and Kitchen, then plant with Laundry watched.",
        "roles": [
          [
            "Entry",
            "Kitchen"
          ],
          [
            "Trade",
            "Water"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank",
            "Laundry"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Take Art or Driveway together, then collapse on Ring.",
        "roles": [
          [
            "Entry",
            "Art"
          ],
          [
            "Trade",
            "Ring"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank",
            "Basketball"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "One A, one B, one Mid info, two flexible traders.",
        "roles": [
          [
            "A Anchor",
            "Kitchen"
          ],
          [
            "B Anchor",
            "Garage"
          ],
          [
            "Mid Info",
            "Money"
          ],
          [
            "Flex",
            "Courtyard"
          ],
          [
            "Flank Watch",
            "Laundry"
          ]
        ]
      }
    },
    "aliases": []
  },
  "tunisia": {
    "id": "tunisia",
    "name": "Tunisia",
    "tier": "2026 competitive S&D",
    "description": "Long center street, open square, and layered western vertical routes.",
    "zones": [
      {
        "label": "NORTH SPAWN",
        "x": 320,
        "y": 40,
        "w": 260,
        "h": 65,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "WEST BUILDINGS",
        "x": 45,
        "y": 120,
        "w": 235,
        "h": 350,
        "kind": "building",
        "r": 16
      },
      {
        "label": "CENTER STREET",
        "x": 310,
        "y": 115,
        "w": 210,
        "h": 390,
        "kind": "open",
        "r": 16
      },
      {
        "label": "EAST BUILDINGS",
        "x": 550,
        "y": 120,
        "w": 285,
        "h": 350,
        "kind": "building",
        "r": 16
      },
      {
        "label": "MAIN SQUARE",
        "x": 535,
        "y": 300,
        "w": 250,
        "h": 170,
        "kind": "open",
        "r": 16
      },
      {
        "label": "WEST ALLEY",
        "x": 70,
        "y": 470,
        "w": 250,
        "h": 90,
        "kind": "open",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 320,
        "y": 535,
        "w": 260,
        "h": 55,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Window",
        "x": 420,
        "y": 150,
        "side": "MID",
        "kind": "elevated hold",
        "summary": "Second-story center window.",
        "watch": "Center Street and Square",
        "counter": "Smoke center or challenge from cover.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Center Street",
        "x": 420,
        "y": 310,
        "side": "MID",
        "kind": "long lane",
        "summary": "Main north-south lane.",
        "watch": "Rotations and crossings",
        "counter": "Cross with smoke or hard timing.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Main Square",
        "x": 655,
        "y": 365,
        "side": "A",
        "kind": "open site",
        "summary": "Open eastern square.",
        "watch": "A plant and connectors",
        "counter": "Clear Scaffold and Window first.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Scaffold",
        "x": 740,
        "y": 225,
        "side": "A",
        "kind": "elevated hold",
        "summary": "Raised structure over Square.",
        "watch": "Square entry",
        "counter": "Utility or double angle.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Back",
        "x": 785,
        "y": 390,
        "side": "A",
        "kind": "deep hold",
        "summary": "Deep eastern site edge.",
        "watch": "Plant and retake",
        "counter": "Plant for Square or force it out.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Market",
        "x": 610,
        "y": 190,
        "side": "A",
        "kind": "connector",
        "summary": "Interior route into Square.",
        "watch": "A entry",
        "counter": "Clear close corners before Square.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Zig",
        "x": 235,
        "y": 390,
        "side": "B",
        "kind": "connector",
        "summary": "Bent western connector.",
        "watch": "B approach",
        "counter": "Pre-aim each bend.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "West Stairs",
        "x": 150,
        "y": 310,
        "side": "B",
        "kind": "vertical route",
        "summary": "Western stair route.",
        "watch": "B push and upper platform",
        "counter": "Clear top before climbing.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Platform",
        "x": 165,
        "y": 185,
        "side": "B",
        "kind": "elevated hold",
        "summary": "Western upper position.",
        "watch": "West lane",
        "counter": "Smoke or pressure from two levels.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Alley",
        "x": 110,
        "y": 440,
        "side": "B",
        "kind": "site lane",
        "summary": "Western lower alley.",
        "watch": "B site and flank",
        "counter": "Trade through it, do not solo sprint.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "North Arch",
        "x": 520,
        "y": 235,
        "side": "MID",
        "kind": "crossing",
        "summary": "Arch between center and east.",
        "watch": "Square rotation",
        "counter": "Hold from cover, not open street.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "South Stairs",
        "x": 530,
        "y": 470,
        "side": "MID",
        "kind": "rotation",
        "summary": "South-east stairs into Square.",
        "watch": "Late retake",
        "counter": "Watch after plant.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        700,
        390
      ],
      "B": [
        155,
        420
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              540,
              470
            ],
            [
              610,
              365
            ],
            [
              700,
              390
            ]
          ],
          "label": "Square hit"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              420,
              350
            ],
            [
              610,
              190
            ],
            [
              700,
              390
            ]
          ],
          "label": "Market split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              280,
              500
            ],
            [
              155,
              420
            ]
          ],
          "label": "B Alley hit"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              250,
              390
            ],
            [
              150,
              310
            ],
            [
              155,
              420
            ]
          ],
          "label": "West stairs split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              420,
              150
            ],
            [
              420,
              310
            ]
          ],
          "label": "Center window"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              740,
              225
            ],
            [
              700,
              390
            ]
          ],
          "label": "A scaffold"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              165,
              185
            ],
            [
              155,
              420
            ]
          ],
          "label": "B platform"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          420,
          150
        ],
        "b": [
          420,
          470
        ],
        "label": "Window → Center Street"
      },
      {
        "a": [
          740,
          225
        ],
        "b": [
          655,
          365
        ],
        "label": "Scaffold → Square"
      },
      {
        "a": [
          165,
          185
        ],
        "b": [
          110,
          440
        ],
        "label": "Platform → B Alley"
      },
      {
        "a": [
          520,
          235
        ],
        "b": [
          655,
          365
        ],
        "label": "Arch → Square"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Own Center or Market, clear Scaffold, then plant Square.",
        "roles": [
          [
            "Entry",
            "Market"
          ],
          [
            "Trade",
            "Main Square"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Center Street"
          ],
          [
            "Flank",
            "South Stairs"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Trade through Zig and B Alley while one player controls Center.",
        "roles": [
          [
            "Entry",
            "Zig"
          ],
          [
            "Trade",
            "B Alley"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Center Street"
          ],
          [
            "Flank",
            "West Stairs"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Window gathers info; Scaffold and Platform anchor the sites.",
        "roles": [
          [
            "A Anchor",
            "Scaffold"
          ],
          [
            "B Anchor",
            "Platform"
          ],
          [
            "Mid Info",
            "Window"
          ],
          [
            "Flex",
            "North Arch"
          ],
          [
            "Flank Watch",
            "South Stairs"
          ]
        ]
      }
    },
    "aliases": []
  },
  "coastal": {
    "id": "coastal",
    "name": "Coastal",
    "tier": "2026 competitive S&D",
    "description": "Tight town lanes, indoor connectors, balconies, and waterfront rotations.",
    "zones": [
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 65,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "WEST BLOCK",
        "x": 55,
        "y": 120,
        "w": 245,
        "h": 340,
        "kind": "building",
        "r": 16
      },
      {
        "label": "MID STREET",
        "x": 325,
        "y": 115,
        "w": 230,
        "h": 365,
        "kind": "open",
        "r": 16
      },
      {
        "label": "EAST BLOCK",
        "x": 585,
        "y": 120,
        "w": 250,
        "h": 340,
        "kind": "building",
        "r": 16
      },
      {
        "label": "WATERFRONT",
        "x": 250,
        "y": 480,
        "w": 420,
        "h": 95,
        "kind": "open",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 345,
        "y": 535,
        "w": 210,
        "h": 55,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Shop",
        "x": 150,
        "y": 180,
        "side": "B",
        "kind": "room hold",
        "summary": "West-side storefront.",
        "watch": "B lane and Mid",
        "counter": "Flash or wallbang common cover.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Cafe",
        "x": 125,
        "y": 380,
        "side": "B",
        "kind": "connector",
        "summary": "Lower west room near B.",
        "watch": "B plant and Waterfront",
        "counter": "Clear close before site.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Rooms",
        "x": 225,
        "y": 315,
        "side": "B",
        "kind": "interior chain",
        "summary": "Connected rooms toward B.",
        "watch": "B approach",
        "counter": "Trade room by room.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Door",
        "x": 275,
        "y": 410,
        "side": "B",
        "kind": "choke",
        "summary": "Doorway into B-side lane.",
        "watch": "B plant",
        "counter": "Utility the doorway.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Hotel",
        "x": 730,
        "y": 260,
        "side": "A",
        "kind": "deep hold",
        "summary": "East-side building overlooking A routes.",
        "watch": "A entry and Mid",
        "counter": "Pressure from Alley and Balcony.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Balcony",
        "x": 690,
        "y": 165,
        "side": "A",
        "kind": "elevated hold",
        "summary": "Upper east-side balcony.",
        "watch": "Mid and A lane",
        "counter": "Smoke or avoid long exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Courtyard",
        "x": 700,
        "y": 390,
        "side": "A",
        "kind": "site space",
        "summary": "Open eastern site courtyard.",
        "watch": "A plant",
        "counter": "Clear Hotel and Alley.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Connector",
        "x": 590,
        "y": 330,
        "side": "A",
        "kind": "connector",
        "summary": "Indoor route from Mid to A.",
        "watch": "A split",
        "counter": "Hold it after plant.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Mid Arch",
        "x": 440,
        "y": 220,
        "side": "MID",
        "kind": "crossing",
        "summary": "Main center arch.",
        "watch": "Mid street",
        "counter": "Pre-aim before crossing.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Mid Street",
        "x": 445,
        "y": 340,
        "side": "MID",
        "kind": "long lane",
        "summary": "Central street.",
        "watch": "Both rotations",
        "counter": "Use cover and shoulder info.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Alley",
        "x": 790,
        "y": 420,
        "side": "A",
        "kind": "flank route",
        "summary": "Far eastern alley.",
        "watch": "A back and retake",
        "counter": "Keep a late watcher.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Dock",
        "x": 555,
        "y": 520,
        "side": "MID",
        "kind": "waterfront route",
        "summary": "Lower waterfront rotation.",
        "watch": "Late flanks",
        "counter": "Listen and re-check.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Boat",
        "x": 365,
        "y": 525,
        "side": "B",
        "kind": "cover route",
        "summary": "Waterfront cover near B side.",
        "watch": "B flank",
        "counter": "Do not ignore after plant.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        720,
        385
      ],
      "B": [
        190,
        390
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              555,
              520
            ],
            [
              590,
              330
            ],
            [
              720,
              385
            ]
          ],
          "label": "Connector hit"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              445,
              340
            ],
            [
              690,
              165
            ],
            [
              720,
              385
            ]
          ],
          "label": "Mid to Balcony pressure"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              365,
              525
            ],
            [
              275,
              410
            ],
            [
              190,
              390
            ]
          ],
          "label": "Waterfront hit"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              445,
              340
            ],
            [
              225,
              315
            ],
            [
              190,
              390
            ]
          ],
          "label": "Rooms split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              690,
              165
            ],
            [
              720,
              385
            ]
          ],
          "label": "A balcony"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              150,
              180
            ],
            [
              190,
              390
            ]
          ],
          "label": "B shop"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              220
            ],
            [
              445,
              340
            ]
          ],
          "label": "Mid arch"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          690,
          165
        ],
        "b": [
          445,
          340
        ],
        "label": "Balcony → Mid"
      },
      {
        "a": [
          730,
          260
        ],
        "b": [
          700,
          390
        ],
        "label": "Hotel → A"
      },
      {
        "a": [
          150,
          180
        ],
        "b": [
          190,
          390
        ],
        "label": "Shop → B"
      },
      {
        "a": [
          440,
          220
        ],
        "b": [
          555,
          520
        ],
        "label": "Arch → Waterfront"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Balcony and Hotel, then plant for Connector or Alley.",
        "roles": [
          [
            "Entry",
            "A Connector"
          ],
          [
            "Trade",
            "A Courtyard"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Mid Arch"
          ],
          [
            "Flank",
            "Alley"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Trade through B Rooms and keep Waterfront from wrapping.",
        "roles": [
          [
            "Entry",
            "B Rooms"
          ],
          [
            "Trade",
            "B Door"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Mid Street"
          ],
          [
            "Flank",
            "Boat"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Balcony and Shop anchor; Mid Arch provides early info.",
        "roles": [
          [
            "A Anchor",
            "Balcony"
          ],
          [
            "B Anchor",
            "Shop"
          ],
          [
            "Mid Info",
            "Mid Arch"
          ],
          [
            "Flex",
            "A Connector"
          ],
          [
            "Flank Watch",
            "Dock"
          ]
        ]
      }
    },
    "aliases": []
  },
  "firing-range": {
    "id": "firing-range",
    "name": "Firing Range",
    "tier": "2026 competitive S&D",
    "description": "Classic training yard with wooden structures, trailer lane, and powerful central tower sightlines.",
    "zones": [
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "TRAILER SIDE",
        "x": 40,
        "y": 120,
        "w": 250,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "MID YARD",
        "x": 310,
        "y": 120,
        "w": 250,
        "h": 360,
        "kind": "open",
        "r": 16
      },
      {
        "label": "WOOD SIDE",
        "x": 585,
        "y": 115,
        "w": 260,
        "h": 375,
        "kind": "building",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Trailer",
        "x": 135,
        "y": 245,
        "side": "A",
        "kind": "deep hold",
        "summary": "Large trailer-side structure.",
        "watch": "A lane and Mid",
        "counter": "Clear trailer and outside separately.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tin",
        "x": 225,
        "y": 360,
        "side": "A",
        "kind": "cover",
        "summary": "Metal cover near Trailer.",
        "watch": "A crossing",
        "counter": "Nade or wide trade.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back Rock",
        "x": 90,
        "y": 430,
        "side": "A",
        "kind": "deep cover",
        "summary": "Back rock on Trailer side.",
        "watch": "A plant",
        "counter": "Force it out with utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tower",
        "x": 435,
        "y": 180,
        "side": "MID",
        "kind": "elevated hold",
        "summary": "Central tower.",
        "watch": "Mid and both lanes",
        "counter": "Smoke base or avoid exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Sandbags",
        "x": 410,
        "y": 340,
        "side": "MID",
        "kind": "headglitch",
        "summary": "Central sandbag cover.",
        "watch": "Mid cross",
        "counter": "Shoulder and utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Jungle",
        "x": 330,
        "y": 430,
        "side": "MID",
        "kind": "flank lane",
        "summary": "Vegetated lower mid route.",
        "watch": "Rotations",
        "counter": "Watch late flank.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Top Wood",
        "x": 690,
        "y": 180,
        "side": "B",
        "kind": "elevated hold",
        "summary": "Upper wooden structure.",
        "watch": "B lane and Mid",
        "counter": "Clear upper before entering.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Bottom Wood",
        "x": 680,
        "y": 315,
        "side": "B",
        "kind": "interior",
        "summary": "Lower wooden room.",
        "watch": "B plant",
        "counter": "Trade doorway.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Showers",
        "x": 760,
        "y": 395,
        "side": "B",
        "kind": "connector",
        "summary": "Rear room on Wood side.",
        "watch": "B flank",
        "counter": "Keep it blocked after plant.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Hut",
        "x": 575,
        "y": 410,
        "side": "B",
        "kind": "close cover",
        "summary": "Small structure near B.",
        "watch": "B crossing",
        "counter": "Clear close first.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Mid",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "open control",
        "summary": "Main center yard.",
        "watch": "All rotations",
        "counter": "Do not stand still under Tower.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        180,
        415
      ],
      "B": [
        720,
        385
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              330,
              430
            ],
            [
              225,
              360
            ],
            [
              180,
              415
            ]
          ],
          "label": "Jungle to A"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              410,
              340
            ],
            [
              135,
              245
            ],
            [
              180,
              415
            ]
          ],
          "label": "Mid Trailer split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              575,
              410
            ],
            [
              680,
              315
            ],
            [
              720,
              385
            ]
          ],
          "label": "Hut hit"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              410,
              340
            ],
            [
              690,
              180
            ],
            [
              720,
              385
            ]
          ],
          "label": "Top Wood pressure"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              135,
              245
            ],
            [
              180,
              415
            ]
          ],
          "label": "Trailer anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              690,
              180
            ],
            [
              720,
              385
            ]
          ],
          "label": "Top Wood anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              435,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Tower info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          435,
          180
        ],
        "b": [
          440,
          480
        ],
        "label": "Tower → Mid"
      },
      {
        "a": [
          690,
          180
        ],
        "b": [
          720,
          385
        ],
        "label": "Top Wood → B"
      },
      {
        "a": [
          135,
          245
        ],
        "b": [
          180,
          415
        ],
        "label": "Trailer → A"
      },
      {
        "a": [
          410,
          340
        ],
        "b": [
          225,
          360
        ],
        "label": "Sandbags → Tin"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Trailer and Tin, plant while Back Rock is controlled.",
        "roles": [
          [
            "Entry",
            "Tin"
          ],
          [
            "Trade",
            "Trailer"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Mid"
          ],
          [
            "Flank",
            "Back Rock"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Top Wood before committing through Hut and Bottom Wood.",
        "roles": [
          [
            "Entry",
            "Hut"
          ],
          [
            "Trade",
            "Bottom Wood"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Mid"
          ],
          [
            "Flank",
            "Showers"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Trailer and Top Wood anchor, Tower takes first information.",
        "roles": [
          [
            "A Anchor",
            "Trailer"
          ],
          [
            "B Anchor",
            "Top Wood"
          ],
          [
            "Mid Info",
            "Tower"
          ],
          [
            "Flex",
            "Sandbags"
          ],
          [
            "Flank Watch",
            "Jungle"
          ]
        ]
      }
    },
    "aliases": []
  },
  "slums": {
    "id": "slums",
    "name": "Slums",
    "tier": "2026 competitive S&D",
    "description": "Dense urban lanes centered on Statue with short connectors and dangerous street crossings.",
    "zones": [
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "WEST BLOCK",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "STATUE / MID",
        "x": 325,
        "y": 145,
        "w": 240,
        "h": 315,
        "kind": "open",
        "r": 16
      },
      {
        "label": "EAST BLOCK",
        "x": 590,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Statue",
        "x": 445,
        "y": 290,
        "side": "MID",
        "kind": "central cover",
        "summary": "Main mid landmark.",
        "watch": "Both lanes",
        "counter": "Utility before crossing.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Fountain",
        "x": 435,
        "y": 390,
        "side": "MID",
        "kind": "open control",
        "summary": "Lower mid landmark.",
        "watch": "Rotations",
        "counter": "Hold from edge cover.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Blue",
        "x": 165,
        "y": 200,
        "side": "A",
        "kind": "building",
        "summary": "West blue building.",
        "watch": "A lane and Mid",
        "counter": "Clear top and bottom.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Garage",
        "x": 110,
        "y": 355,
        "side": "A",
        "kind": "deep hold",
        "summary": "West-side garage.",
        "watch": "A plant",
        "counter": "Nade deep corner.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Laundry",
        "x": 240,
        "y": 415,
        "side": "A",
        "kind": "connector",
        "summary": "West lower connector.",
        "watch": "A flank",
        "counter": "Keep post-plant watch.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Red",
        "x": 720,
        "y": 205,
        "side": "B",
        "kind": "building",
        "summary": "East red building.",
        "watch": "B lane and Mid",
        "counter": "Clear upper window.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Park",
        "x": 760,
        "y": 370,
        "side": "B",
        "kind": "open lane",
        "summary": "East open area.",
        "watch": "B plant",
        "counter": "Cross with smoke.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Graveyard",
        "x": 650,
        "y": 425,
        "side": "B",
        "kind": "back route",
        "summary": "Rear east route.",
        "watch": "Late retake",
        "counter": "Watch after plant.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Mid Street",
        "x": 445,
        "y": 215,
        "side": "MID",
        "kind": "long lane",
        "summary": "Upper central street.",
        "watch": "Early cross",
        "counter": "Shoulder info, do not overexpose.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Alley",
        "x": 245,
        "y": 300,
        "side": "A",
        "kind": "choke",
        "summary": "Connector from Mid to A.",
        "watch": "A entry",
        "counter": "Trade through.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Alley",
        "x": 625,
        "y": 300,
        "side": "B",
        "kind": "choke",
        "summary": "Connector from Mid to B.",
        "watch": "B entry",
        "counter": "Utility doorway.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        405
      ],
      "B": [
        750,
        405
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              435,
              390
            ],
            [
              245,
              300
            ],
            [
              150,
              405
            ]
          ],
          "label": "Statue to A"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              240,
              415
            ],
            [
              110,
              355
            ],
            [
              150,
              405
            ]
          ],
          "label": "Laundry split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              435,
              390
            ],
            [
              625,
              300
            ],
            [
              750,
              405
            ]
          ],
          "label": "Statue to B"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              650,
              425
            ],
            [
              760,
              370
            ],
            [
              750,
              405
            ]
          ],
          "label": "Graveyard split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              165,
              200
            ],
            [
              150,
              405
            ]
          ],
          "label": "Blue anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              720,
              205
            ],
            [
              750,
              405
            ]
          ],
          "label": "Red anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              445,
              215
            ],
            [
              445,
              290
            ]
          ],
          "label": "Mid street info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          165,
          200
        ],
        "b": [
          445,
          290
        ],
        "label": "Blue → Statue"
      },
      {
        "a": [
          720,
          205
        ],
        "b": [
          445,
          290
        ],
        "label": "Red → Statue"
      },
      {
        "a": [
          445,
          215
        ],
        "b": [
          435,
          390
        ],
        "label": "Mid Street → Fountain"
      },
      {
        "a": [
          760,
          370
        ],
        "b": [
          750,
          405
        ],
        "label": "Park → B"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Use Statue pressure to clear Blue and Garage, then plant for Laundry.",
        "roles": [
          [
            "Entry",
            "A Alley"
          ],
          [
            "Trade",
            "Garage"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Statue"
          ],
          [
            "Flank",
            "Laundry"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Red and Park while Graveyard watches the wrap.",
        "roles": [
          [
            "Entry",
            "B Alley"
          ],
          [
            "Trade",
            "Park"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Statue"
          ],
          [
            "Flank",
            "Graveyard"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Blue and Red anchor, Mid Street player falls back after info.",
        "roles": [
          [
            "A Anchor",
            "Blue"
          ],
          [
            "B Anchor",
            "Red"
          ],
          [
            "Mid Info",
            "Mid Street"
          ],
          [
            "Flex",
            "Statue"
          ],
          [
            "Flank Watch",
            "Graveyard"
          ]
        ]
      }
    },
    "aliases": []
  },
  "meltdown": {
    "id": "meltdown",
    "name": "Meltdown",
    "tier": "2026 competitive S&D",
    "description": "Industrial power plant with long outdoor lanes and fast interior rotations.",
    "zones": [
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "REACTOR SIDE",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "CONTROL / MID",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "building",
        "r": 16
      },
      {
        "label": "WAREHOUSE SIDE",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Reactor",
        "x": 145,
        "y": 250,
        "side": "A",
        "kind": "site building",
        "summary": "Large reactor-side interior.",
        "watch": "A site and Mid",
        "counter": "Clear door and upper angle.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Cooling",
        "x": 90,
        "y": 410,
        "side": "A",
        "kind": "open cover",
        "summary": "Cooling structures outside A.",
        "watch": "A cross",
        "counter": "Use hard cover.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Ramp",
        "x": 240,
        "y": 395,
        "side": "A",
        "kind": "connector",
        "summary": "Ramp into A side.",
        "watch": "A plant",
        "counter": "Pre-aim top edge.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Control",
        "x": 440,
        "y": 185,
        "side": "MID",
        "kind": "interior control",
        "summary": "Central control room.",
        "watch": "Both rotations",
        "counter": "Take it with a trade.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Courtyard",
        "x": 445,
        "y": 335,
        "side": "MID",
        "kind": "open control",
        "summary": "Central outdoor yard.",
        "watch": "Both sites",
        "counter": "Cross only after Control checked.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Catwalk",
        "x": 500,
        "y": 250,
        "side": "MID",
        "kind": "elevated hold",
        "summary": "Raised central walkway.",
        "watch": "Courtyard",
        "counter": "Smoke or force down.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Warehouse",
        "x": 735,
        "y": 245,
        "side": "B",
        "kind": "site building",
        "summary": "Large B-side structure.",
        "watch": "B plant",
        "counter": "Clear deep and doorway separately.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Generator",
        "x": 650,
        "y": 385,
        "side": "B",
        "kind": "cover",
        "summary": "Generator cover near B.",
        "watch": "B cross",
        "counter": "Nade behind cover.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Lab",
        "x": 790,
        "y": 410,
        "side": "B",
        "kind": "back route",
        "summary": "Rear B-side room.",
        "watch": "Retake",
        "counter": "Watch after plant.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Turbine",
        "x": 560,
        "y": 430,
        "side": "B",
        "kind": "connector",
        "summary": "Industrial connector into B.",
        "watch": "B entry",
        "counter": "Trade through narrow door.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back A",
        "x": 95,
        "y": 180,
        "side": "A",
        "kind": "deep hold",
        "summary": "Deep reactor-side spawn angle.",
        "watch": "A approach",
        "counter": "Smoke long angle.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        155,
        400
      ],
      "B": [
        735,
        405
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              445,
              335
            ],
            [
              240,
              395
            ],
            [
              155,
              400
            ]
          ],
          "label": "Courtyard ramp"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              95,
              470
            ],
            [
              90,
              410
            ],
            [
              155,
              400
            ]
          ],
          "label": "Cooling split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              560,
              430
            ],
            [
              650,
              385
            ],
            [
              735,
              405
            ]
          ],
          "label": "Turbine hit"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              445,
              335
            ],
            [
              440,
              185
            ],
            [
              735,
              405
            ]
          ],
          "label": "Control split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              145,
              250
            ],
            [
              155,
              400
            ]
          ],
          "label": "Reactor anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              245
            ],
            [
              735,
              405
            ]
          ],
          "label": "Warehouse anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              185
            ],
            [
              445,
              335
            ]
          ],
          "label": "Control info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          95,
          180
        ],
        "b": [
          155,
          400
        ],
        "label": "Back A → Site"
      },
      {
        "a": [
          500,
          250
        ],
        "b": [
          445,
          335
        ],
        "label": "Catwalk → Courtyard"
      },
      {
        "a": [
          735,
          245
        ],
        "b": [
          735,
          405
        ],
        "label": "Warehouse → B"
      },
      {
        "a": [
          440,
          185
        ],
        "b": [
          560,
          430
        ],
        "label": "Control → Turbine"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Back A and Reactor, then plant with Ramp controlled.",
        "roles": [
          [
            "Entry",
            "Ramp"
          ],
          [
            "Trade",
            "Reactor"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Control"
          ],
          [
            "Flank",
            "Cooling"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Trade through Turbine and Generator, hold Lab after plant.",
        "roles": [
          [
            "Entry",
            "Turbine"
          ],
          [
            "Trade",
            "Generator"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Control"
          ],
          [
            "Flank",
            "Lab"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Reactor and Warehouse anchor while Control gathers early info.",
        "roles": [
          [
            "A Anchor",
            "Reactor"
          ],
          [
            "B Anchor",
            "Warehouse"
          ],
          [
            "Mid Info",
            "Control"
          ],
          [
            "Flex",
            "Courtyard"
          ],
          [
            "Flank Watch",
            "Lab"
          ]
        ]
      }
    },
    "aliases": []
  },
  "standoff": {
    "id": "standoff",
    "name": "Standoff",
    "tier": "Ranked staple",
    "description": "Village streets with strong two-story windows and a central tank lane.",
    "zones": [
      {
        "label": "GRANNY / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "TANK / MID",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "GAS / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Granny",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Granny on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Granny with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tractor",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Tractor on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Tractor with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Alley",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Alley on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Alley with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back A",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back A on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back A with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Gas",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Gas on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Gas before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Bakery",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Bakery on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Bakery before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Alley",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Alley on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Alley before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back B",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back B on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back B before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Top Blue",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Top Blue in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tank",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Tank in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Statue",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Statue in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Hotel",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Hotel in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Granny → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Gas → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Top Blue → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Granny and Tractor, plant while Back A is watched.",
        "roles": [
          [
            "Entry",
            "Tractor"
          ],
          [
            "Trade",
            "Granny"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Tank"
          ],
          [
            "Flank",
            "Back A"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Gas and Bakery, plant while Back B is watched.",
        "roles": [
          [
            "Entry",
            "Bakery"
          ],
          [
            "Trade",
            "Gas"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Tank"
          ],
          [
            "Flank",
            "Back B"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Granny and Gas anchor while Top Blue gathers info.",
        "roles": [
          [
            "A Anchor",
            "Granny"
          ],
          [
            "B Anchor",
            "Gas"
          ],
          [
            "Mid Info",
            "Top Blue"
          ],
          [
            "Flex",
            "Tank"
          ],
          [
            "Flank Watch",
            "Statue"
          ]
        ]
      }
    },
    "aliases": []
  },
  "terminal": {
    "id": "terminal",
    "name": "Terminal",
    "tier": "Ranked staple",
    "description": "Airport interior and tarmac map with long sniper lanes and tight shop connectors.",
    "zones": [
      {
        "label": "PLANE / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "TERMINAL HALL",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "SECURITY / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Plane",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Plane on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Plane with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Cockpit",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Cockpit on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Cockpit with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tarmac",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "Tarmac on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Tarmac with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Plane Wing",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Plane Wing on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Plane Wing with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Security",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Security on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Security before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Burger",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Burger on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Burger before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Baggage",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "Baggage on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Baggage before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back B",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back B on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back B before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Library",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Library in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Escalators",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Escalators in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Hallway",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Hallway in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Bookstore",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Bookstore in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Plane → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Security → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Library → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Plane and Cockpit, plant while Plane Wing is watched.",
        "roles": [
          [
            "Entry",
            "Cockpit"
          ],
          [
            "Trade",
            "Plane"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Escalators"
          ],
          [
            "Flank",
            "Plane Wing"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Security and Burger, plant while Back B is watched.",
        "roles": [
          [
            "Entry",
            "Burger"
          ],
          [
            "Trade",
            "Security"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Escalators"
          ],
          [
            "Flank",
            "Back B"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Plane and Security anchor while Library gathers info.",
        "roles": [
          [
            "A Anchor",
            "Plane"
          ],
          [
            "B Anchor",
            "Security"
          ],
          [
            "Mid Info",
            "Library"
          ],
          [
            "Flex",
            "Escalators"
          ],
          [
            "Flank Watch",
            "Hallway"
          ]
        ]
      }
    },
    "aliases": []
  },
  "crash": {
    "id": "crash",
    "name": "Crash",
    "tier": "Ranked staple",
    "description": "Dense city block with powerful upper buildings and a helicopter-centered mid.",
    "zones": [
      {
        "label": "THREE STORY / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "CRASH SITE",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "BLUE / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Three Story",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Three Story on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Three Story with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Pharmacy",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Pharmacy on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Pharmacy with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Alley",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Alley on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Alley with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back A",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back A on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back A with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Blue",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Blue on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Blue before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Market",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Market on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Market before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Alley",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Alley on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Alley before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back B",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back B on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back B before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Crash Site",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Crash Site in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Courtyard",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Courtyard in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Broken",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Broken in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Top Mid",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Top Mid in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Three Story → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Blue → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Crash Site → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Three Story and Pharmacy, plant while Back A is watched.",
        "roles": [
          [
            "Entry",
            "Pharmacy"
          ],
          [
            "Trade",
            "Three Story"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank",
            "Back A"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Blue and Market, plant while Back B is watched.",
        "roles": [
          [
            "Entry",
            "Market"
          ],
          [
            "Trade",
            "Blue"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank",
            "Back B"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Three Story and Blue anchor while Crash Site gathers info.",
        "roles": [
          [
            "A Anchor",
            "Three Story"
          ],
          [
            "B Anchor",
            "Blue"
          ],
          [
            "Mid Info",
            "Crash Site"
          ],
          [
            "Flex",
            "Courtyard"
          ],
          [
            "Flank Watch",
            "Broken"
          ]
        ]
      }
    },
    "aliases": []
  },
  "takeoff": {
    "id": "takeoff",
    "name": "Takeoff",
    "tier": "Ranked staple",
    "description": "Launch facility with long exterior lanes, hangars, and elevated control routes.",
    "zones": [
      {
        "label": "HANGAR / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "ROCKET / MID",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "CONTROL / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Hangar",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Hangar on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Hangar with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Bunker",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Bunker on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Bunker with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Street",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Street on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Street with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back Pad",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back Pad on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back Pad with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Control",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Control on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Control before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Office",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Office on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Office before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Street",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Street on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Street before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back Control",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back Control on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back Control before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Rocket",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Rocket in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Catwalk",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Catwalk in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Lower Mid",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Lower Mid in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Upper Mid",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Upper Mid in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Hangar → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Control → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Rocket → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Hangar and Bunker, plant while Back Pad is watched.",
        "roles": [
          [
            "Entry",
            "Bunker"
          ],
          [
            "Trade",
            "Hangar"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Catwalk"
          ],
          [
            "Flank",
            "Back Pad"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Control and Office, plant while Back Control is watched.",
        "roles": [
          [
            "Entry",
            "Office"
          ],
          [
            "Trade",
            "Control"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Catwalk"
          ],
          [
            "Flank",
            "Back Control"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Hangar and Control anchor while Rocket gathers info.",
        "roles": [
          [
            "A Anchor",
            "Hangar"
          ],
          [
            "B Anchor",
            "Control"
          ],
          [
            "Mid Info",
            "Rocket"
          ],
          [
            "Flex",
            "Catwalk"
          ],
          [
            "Flank Watch",
            "Lower Mid"
          ]
        ]
      }
    },
    "aliases": []
  },
  "hacienda": {
    "id": "hacienda",
    "name": "Hacienda",
    "tier": "Ranked staple",
    "description": "Large estate with interior connectors around a central courtyard and fountain.",
    "zones": [
      {
        "label": "WINE / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "COURTYARD",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "GARAGE / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Wine",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Wine on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Wine with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Kitchen",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Kitchen on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Kitchen with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Lane",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Lane on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Lane with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back A",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back A on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back A with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Garage",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Garage on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Garage before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Stable",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Stable on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Stable before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Lane",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Lane on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Lane before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back B",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back B on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back B before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Fountain",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Fountain in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Piano",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Piano in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Balcony",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Balcony in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Courtyard",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Courtyard in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Wine → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Garage → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Fountain → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Wine and Kitchen, plant while Back A is watched.",
        "roles": [
          [
            "Entry",
            "Kitchen"
          ],
          [
            "Trade",
            "Wine"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Piano"
          ],
          [
            "Flank",
            "Back A"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Garage and Stable, plant while Back B is watched.",
        "roles": [
          [
            "Entry",
            "Stable"
          ],
          [
            "Trade",
            "Garage"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Piano"
          ],
          [
            "Flank",
            "Back B"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Wine and Garage anchor while Fountain gathers info.",
        "roles": [
          [
            "A Anchor",
            "Wine"
          ],
          [
            "B Anchor",
            "Garage"
          ],
          [
            "Mid Info",
            "Fountain"
          ],
          [
            "Flex",
            "Piano"
          ],
          [
            "Flank Watch",
            "Balcony"
          ]
        ]
      }
    },
    "aliases": []
  },
  "summit": {
    "id": "summit",
    "name": "Summit",
    "tier": "Ranked staple",
    "description": "Snowy research facility with narrow interior lanes and dangerous catwalk elevation.",
    "zones": [
      {
        "label": "SERVER / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "CONTROL / MID",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "GONDOLA / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Server",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Server on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Server with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Vent",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Vent on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Vent with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Lane",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Lane on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Lane with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back A",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back A on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back A with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Gondola",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Gondola on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Gondola before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Bunker",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Bunker on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Bunker before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Lane",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Lane on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Lane before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back B",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back B on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back B before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Control",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Control in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Catwalk",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Catwalk in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tower",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Tower in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Snow",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Snow in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Server → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Gondola → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Control → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Server and Vent, plant while Back A is watched.",
        "roles": [
          [
            "Entry",
            "Vent"
          ],
          [
            "Trade",
            "Server"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Catwalk"
          ],
          [
            "Flank",
            "Back A"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Gondola and Bunker, plant while Back B is watched.",
        "roles": [
          [
            "Entry",
            "Bunker"
          ],
          [
            "Trade",
            "Gondola"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Catwalk"
          ],
          [
            "Flank",
            "Back B"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Server and Gondola anchor while Control gathers info.",
        "roles": [
          [
            "A Anchor",
            "Server"
          ],
          [
            "B Anchor",
            "Gondola"
          ],
          [
            "Mid Info",
            "Control"
          ],
          [
            "Flex",
            "Catwalk"
          ],
          [
            "Flank Watch",
            "Tower"
          ]
        ]
      }
    },
    "aliases": []
  },
  "kurohana": {
    "id": "kurohana",
    "name": "Kurohana Metropolis",
    "tier": "Ranked staple",
    "description": "Modern urban map with rooftop pressure, plaza crossings, and fast interior connectors.",
    "zones": [
      {
        "label": "LAB / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "PLAZA / MID",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "STATION / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Lab",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Lab on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Lab with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Office",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Office on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Office with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Alley",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Alley on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Alley with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back A",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back A on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back A with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Station",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Station on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Station before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Garage",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Garage on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Garage before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Alley",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Alley on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Alley before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back B",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back B on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back B before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Plaza",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Plaza in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Rooftop",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Rooftop in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Market",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Market in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Connector",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Connector in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Lab → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Station → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Plaza → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Lab and Office, plant while Back A is watched.",
        "roles": [
          [
            "Entry",
            "Office"
          ],
          [
            "Trade",
            "Lab"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Rooftop"
          ],
          [
            "Flank",
            "Back A"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Station and Garage, plant while Back B is watched.",
        "roles": [
          [
            "Entry",
            "Garage"
          ],
          [
            "Trade",
            "Station"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Rooftop"
          ],
          [
            "Flank",
            "Back B"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Lab and Station anchor while Plaza gathers info.",
        "roles": [
          [
            "A Anchor",
            "Lab"
          ],
          [
            "B Anchor",
            "Station"
          ],
          [
            "Mid Info",
            "Plaza"
          ],
          [
            "Flex",
            "Rooftop"
          ],
          [
            "Flank Watch",
            "Market"
          ]
        ]
      }
    },
    "aliases": []
  },
  "express": {
    "id": "express",
    "name": "Express",
    "tier": "Ranked staple",
    "description": "Train station with platform sightlines, bridge control, and tunnel rotations.",
    "zones": [
      {
        "label": "TRAIN / A",
        "x": 45,
        "y": 120,
        "w": 260,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "PLATFORM / MID",
        "x": 325,
        "y": 115,
        "w": 245,
        "h": 375,
        "kind": "open",
        "r": 16
      },
      {
        "label": "TICKET / B",
        "x": 595,
        "y": 120,
        "w": 255,
        "h": 370,
        "kind": "building",
        "r": 16
      },
      {
        "label": "NORTH SPAWN",
        "x": 330,
        "y": 35,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      },
      {
        "label": "SOUTH SPAWN",
        "x": 330,
        "y": 525,
        "w": 240,
        "h": 60,
        "kind": "spawn",
        "r": 16
      }
    ],
    "callouts": [
      {
        "name": "Train",
        "x": 140,
        "y": 220,
        "side": "A",
        "kind": "callout",
        "summary": "Train on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Train with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Tunnel",
        "x": 230,
        "y": 330,
        "side": "A",
        "kind": "callout",
        "summary": "Tunnel on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Tunnel with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "A Platform",
        "x": 130,
        "y": 410,
        "side": "A",
        "kind": "callout",
        "summary": "A Platform on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear A Platform with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back Train",
        "x": 265,
        "y": 440,
        "side": "A",
        "kind": "callout",
        "summary": "Back Train on the A side.",
        "watch": "A route and nearby connector",
        "counter": "Clear Back Train with a trade or utility.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Ticket",
        "x": 735,
        "y": 220,
        "side": "B",
        "kind": "callout",
        "summary": "Ticket on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Ticket before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Office",
        "x": 650,
        "y": 330,
        "side": "B",
        "kind": "callout",
        "summary": "Office on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Office before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "B Platform",
        "x": 760,
        "y": 410,
        "side": "B",
        "kind": "callout",
        "summary": "B Platform on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear B Platform before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Back Ticket",
        "x": 620,
        "y": 440,
        "side": "B",
        "kind": "callout",
        "summary": "Back Ticket on the B side.",
        "watch": "B route and nearby connector",
        "counter": "Clear Back Ticket before planting.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Bridge",
        "x": 440,
        "y": 180,
        "side": "MID",
        "kind": "callout",
        "summary": "Bridge in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Control",
        "x": 440,
        "y": 300,
        "side": "MID",
        "kind": "callout",
        "summary": "Control in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Platform",
        "x": 445,
        "y": 410,
        "side": "MID",
        "kind": "callout",
        "summary": "Platform in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      },
      {
        "name": "Baggage",
        "x": 530,
        "y": 270,
        "side": "MID",
        "kind": "callout",
        "summary": "Baggage in central control.",
        "watch": "Mid rotations",
        "counter": "Use cover and avoid solo exposure.",
        "dx": 0,
        "dy": -18
      }
    ],
    "sites": {
      "A": [
        150,
        400
      ],
      "B": [
        750,
        400
      ]
    },
    "spawns": {
      "attack": [
        450,
        570
      ],
      "defense": [
        450,
        65
      ]
    },
    "routes": {
      "attackA": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              230,
              330
            ],
            [
              150,
              400
            ]
          ],
          "label": "A main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              265,
              440
            ],
            [
              130,
              410
            ],
            [
              150,
              400
            ]
          ],
          "label": "A split"
        }
      ],
      "attackB": [
        {
          "points": [
            [
              450,
              570
            ],
            [
              440,
              410
            ],
            [
              650,
              330
            ],
            [
              750,
              400
            ]
          ],
          "label": "B main"
        },
        {
          "points": [
            [
              450,
              570
            ],
            [
              620,
              440
            ],
            [
              760,
              410
            ],
            [
              750,
              400
            ]
          ],
          "label": "B split"
        }
      ],
      "defense": [
        {
          "points": [
            [
              450,
              65
            ],
            [
              140,
              220
            ],
            [
              150,
              400
            ]
          ],
          "label": "A anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              735,
              220
            ],
            [
              750,
              400
            ]
          ],
          "label": "B anchor"
        },
        {
          "points": [
            [
              450,
              65
            ],
            [
              440,
              180
            ],
            [
              440,
              300
            ]
          ],
          "label": "Mid info"
        }
      ]
    },
    "sightlines": [
      {
        "a": [
          140,
          220
        ],
        "b": [
          150,
          400
        ],
        "label": "Train → A"
      },
      {
        "a": [
          735,
          220
        ],
        "b": [
          750,
          400
        ],
        "label": "Ticket → B"
      },
      {
        "a": [
          440,
          180
        ],
        "b": [
          440,
          410
        ],
        "label": "Bridge → Mid"
      }
    ],
    "plans": {
      "attackA": {
        "title": "Attack A",
        "call": "Clear Train and Tunnel, plant while Back Train is watched.",
        "roles": [
          [
            "Entry",
            "Tunnel"
          ],
          [
            "Trade",
            "Train"
          ],
          [
            "Bomb",
            "A Site"
          ],
          [
            "Cut",
            "Control"
          ],
          [
            "Flank",
            "Back Train"
          ]
        ]
      },
      "attackB": {
        "title": "Attack B",
        "call": "Clear Ticket and Office, plant while Back Ticket is watched.",
        "roles": [
          [
            "Entry",
            "Office"
          ],
          [
            "Trade",
            "Ticket"
          ],
          [
            "Bomb",
            "B Site"
          ],
          [
            "Cut",
            "Control"
          ],
          [
            "Flank",
            "Back Ticket"
          ]
        ]
      },
      "defense": {
        "title": "Default Defense",
        "call": "Train and Ticket anchor while Bridge gathers info.",
        "roles": [
          [
            "A Anchor",
            "Train"
          ],
          [
            "B Anchor",
            "Ticket"
          ],
          [
            "Mid Info",
            "Bridge"
          ],
          [
            "Flex",
            "Control"
          ],
          [
            "Flank Watch",
            "Platform"
          ]
        ]
      }
    },
    "aliases": []
  }
};
