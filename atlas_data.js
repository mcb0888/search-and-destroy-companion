window.ATLAS_MAPS = {
  "raid": {
    "id": "raid",
    "name": "Raid",
    "status": "REQUESTED RANKED REFERENCE",
    "description": "Open estate with two strong side lanes and a dangerous central courtyard.",
    "image": {
      "local": "maps/raid.png",
      "remote": "",
      "aspect": "400/420",
      "source": "Original tactical visual created for Search & Destroy Companion; based on map research and gameplay landmarks, not official map artwork."
    },
    "callouts": [
      {
        "name": "Bedroom",
        "x": 25,
        "y": 14,
        "side": "A",
        "kind": "elevated hold",
        "summary": "Upper mansion angle over Water.",
        "watch": "A cross, Pool entry",
        "counter": "Smoke it or clear from Kitchen."
      },
      {
        "name": "Kitchen",
        "x": 76,
        "y": 14,
        "side": "A",
        "kind": "connector",
        "summary": "Main mansion connector to Water.",
        "watch": "A plant, Water cross",
        "counter": "Block it before planting."
      },
      {
        "name": "Water",
        "x": 84,
        "y": 38,
        "side": "A",
        "kind": "site lane",
        "summary": "Open Pool-side lane.",
        "watch": "A site and Tiki",
        "counter": "Use cover and split Laundry."
      },
      {
        "name": "Tiki",
        "x": 80,
        "y": 52,
        "side": "A",
        "kind": "partial cover",
        "summary": "Low cover beside Water.",
        "watch": "Pool cross",
        "counter": "Clear close cover first."
      },
      {
        "name": "Laundry",
        "x": 66,
        "y": 78,
        "side": "A",
        "kind": "flank route",
        "summary": "Lower route into Water.",
        "watch": "Late flank",
        "counter": "Assign one flank watcher."
      },
      {
        "name": "Money",
        "x": 50,
        "y": 28,
        "side": "MID",
        "kind": "window/room",
        "summary": "Mansion room above Courtyard.",
        "watch": "Mid and Ring",
        "counter": "Pressure from Art or Kitchen."
      },
      {
        "name": "Courtyard",
        "x": 50,
        "y": 45,
        "side": "MID",
        "kind": "open control",
        "summary": "Central open area.",
        "watch": "Rotations everywhere",
        "counter": "Cross only with two angles cleared."
      },
      {
        "name": "Pillars",
        "x": 35,
        "y": 38,
        "side": "MID",
        "kind": "cover",
        "summary": "Central pillar cover.",
        "watch": "Courtyard cross",
        "counter": "Utility or double peek."
      },
      {
        "name": "Ring",
        "x": 50,
        "y": 73,
        "side": "B",
        "kind": "site lane",
        "summary": "Circular drive around B.",
        "watch": "B plant and Driveway",
        "counter": "Clear Garage and Art first."
      },
      {
        "name": "Art",
        "x": 17,
        "y": 48,
        "side": "B",
        "kind": "connector",
        "summary": "West room toward B.",
        "watch": "Ring and Courtyard",
        "counter": "Pin from Courtyard while pushing Driveway."
      },
      {
        "name": "Garage",
        "x": 15,
        "y": 31,
        "side": "B",
        "kind": "deep hold",
        "summary": "Deep vehicle-side room.",
        "watch": "Driveway and B",
        "counter": "Separate door and deep angle."
      },
      {
        "name": "Lambo",
        "x": 18,
        "y": 58,
        "side": "B",
        "kind": "vehicle cover",
        "summary": "Car cover near Garage.",
        "watch": "Driveway cross",
        "counter": "Nade behind it or wrap close."
      },
      {
        "name": "Basketball",
        "x": 43,
        "y": 84,
        "side": "B",
        "kind": "back route",
        "summary": "Rear lane behind Ring.",
        "watch": "Late rotation",
        "counter": "Keep one ear on it."
      }
    ],
    "sites": {
      "A": [
        82,
        50
      ],
      "B": [
        18,
        53
      ]
    },
    "spawns": {
      "attack": [
        50,
        93
      ],
      "defense": [
        50,
        2
      ]
    },
    "routes": {
      "attackA": [
        {
          "label": "Laundry split",
          "points": [
            [
              50.0,
              91.41
            ],
            [
              67.78,
              81.25
            ],
            [
              76.67,
              65.62
            ],
            [
              81.67,
              49.22
            ]
          ]
        },
        {
          "label": "Kitchen split",
          "points": [
            [
              50.0,
              91.41
            ],
            [
              53.33,
              60.94
            ],
            [
              62.22,
              40.62
            ],
            [
              81.67,
              49.22
            ]
          ]
        }
      ],
      "attackB": [
        {
          "label": "Ring hit",
          "points": [
            [
              50.0,
              91.41
            ],
            [
              36.67,
              81.25
            ],
            [
              30.56,
              74.22
            ]
          ]
        },
        {
          "label": "Driveway split",
          "points": [
            [
              50.0,
              91.41
            ],
            [
              20.0,
              76.56
            ],
            [
              13.89,
              54.69
            ],
            [
              30.56,
              74.22
            ]
          ]
        }
      ],
      "defense": [
        {
          "label": "A anchor",
          "points": [
            [
              50.0,
              7.03
            ],
            [
              67.78,
              34.38
            ],
            [
              81.67,
              49.22
            ]
          ]
        },
        {
          "label": "B anchor",
          "points": [
            [
              50.0,
              7.03
            ],
            [
              21.11,
              34.38
            ],
            [
              30.56,
              74.22
            ]
          ]
        },
        {
          "label": "Mid info",
          "points": [
            [
              50.0,
              7.03
            ],
            [
              45.56,
              28.91
            ],
            [
              46.67,
              54.69
            ]
          ]
        }
      ]
    },
    "retake": [
      {
        "label": "Retake A",
        "points": [
          [
            50,
            2
          ],
          [
            50,
            35
          ],
          [
            82,
            50
          ]
        ]
      },
      {
        "label": "Retake B",
        "points": [
          [
            50,
            2
          ],
          [
            50,
            35
          ],
          [
            18,
            53
          ]
        ]
      }
    ],
    "sightlines": [
      {
        "label": "Bedroom → Water",
        "a": [
          49.44,
          16.41
        ],
        "b": [
          81.67,
          49.22
        ]
      },
      {
        "label": "Kitchen → Courtyard",
        "a": [
          67.78,
          34.38
        ],
        "b": [
          46.67,
          54.69
        ]
      },
      {
        "label": "Garage → Ring",
        "a": [
          13.33,
          54.69
        ],
        "b": [
          30.56,
          74.22
        ]
      },
      {
        "label": "Money → Ring",
        "a": [
          45.56,
          28.91
        ],
        "b": [
          32.78,
          79.69
        ]
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
      },
      "overview": {
        "title": "Raid command brief",
        "call": "Mansion controls A, Garage controls B, and Courtyard connects every rotation. Do not cross the middle without accounting for Money and Pillars.",
        "roles": [
          [
            "A Pair",
            "Bedroom / Kitchen"
          ],
          [
            "B Pair",
            "Garage / Ring"
          ],
          [
            "Mid",
            "Money / Pillars"
          ],
          [
            "Flex",
            "Courtyard"
          ],
          [
            "Flank",
            "Laundry / Basketball"
          ]
        ]
      },
      "retake": {
        "title": "Retake discipline",
        "call": "Regroup through Courtyard. Clear the elevated angle first, pinch the site from two doors, and keep one player on the bomb instead of all five chasing kills.",
        "roles": [
          [
            "First Clear",
            "Bedroom or Garage"
          ],
          [
            "Trade",
            "Site entrance"
          ],
          [
            "Defuse",
            "Bomb"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank Watch",
            "Laundry / Basketball"
          ]
        ]
      },
      "sightlines": {
        "title": "Sightline brief",
        "call": "Respect Bedroom to Water, Money to Ring, and Garage to Driveway. Smoke one lane and move through the other instead of challenging every angle at once.",
        "roles": [
          [
            "Smoke",
            "Primary long lane"
          ],
          [
            "Entry",
            "Close cover"
          ],
          [
            "Trade",
            "Two steps behind"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank",
            "Back route"
          ]
        ]
      }
    },
    "aliases": []
  },
  "tunisia": {
    "id": "tunisia",
    "name": "Tunisia",
    "status": "OFFICIAL 2026 COMPETITIVE S&D",
    "description": "Long center street, open square, and layered western vertical routes.",
    "image": {
      "local": "maps/tunisia.png",
      "remote": "",
      "aspect": "387/420",
      "source": "Original tactical visual created for Search & Destroy Companion; based on map research and gameplay landmarks, not official map artwork."
    },
    "callouts": [
      {
        "name": "Window",
        "x": 48,
        "y": 11,
        "side": "MID",
        "kind": "elevated hold",
        "summary": "Second-story center window.",
        "watch": "Center Street and Square",
        "counter": "Smoke center or challenge from cover."
      },
      {
        "name": "Center Street",
        "x": 48,
        "y": 45,
        "side": "MID",
        "kind": "long lane",
        "summary": "Main north-south lane.",
        "watch": "Rotations and crossings",
        "counter": "Cross with smoke or hard timing."
      },
      {
        "name": "Main Square",
        "x": 77,
        "y": 42,
        "side": "A",
        "kind": "open site",
        "summary": "Open eastern square.",
        "watch": "A plant and connectors",
        "counter": "Clear Scaffold and Window first."
      },
      {
        "name": "Scaffold",
        "x": 79,
        "y": 17,
        "side": "A",
        "kind": "elevated hold",
        "summary": "Raised structure over Square.",
        "watch": "Square entry",
        "counter": "Utility or double angle."
      },
      {
        "name": "A Back",
        "x": 88,
        "y": 58,
        "side": "A",
        "kind": "deep hold",
        "summary": "Deep eastern site edge.",
        "watch": "Plant and retake",
        "counter": "Plant for Square or force it out."
      },
      {
        "name": "Market",
        "x": 65,
        "y": 32,
        "side": "A",
        "kind": "connector",
        "summary": "Interior route into Square.",
        "watch": "A entry",
        "counter": "Clear close corners before Square."
      },
      {
        "name": "Zig",
        "x": 28,
        "y": 50,
        "side": "B",
        "kind": "connector",
        "summary": "Bent western connector.",
        "watch": "B approach",
        "counter": "Pre-aim each bend."
      },
      {
        "name": "West Stairs",
        "x": 12,
        "y": 41,
        "side": "B",
        "kind": "vertical route",
        "summary": "Western stair route.",
        "watch": "B push and upper platform",
        "counter": "Clear top before climbing."
      },
      {
        "name": "Platform",
        "x": 9,
        "y": 75,
        "side": "B",
        "kind": "elevated hold",
        "summary": "Western upper position.",
        "watch": "West lane",
        "counter": "Smoke or pressure from two levels."
      },
      {
        "name": "B Alley",
        "x": 18,
        "y": 63,
        "side": "B",
        "kind": "site lane",
        "summary": "Western lower alley.",
        "watch": "B site and flank",
        "counter": "Trade through it, do not solo sprint."
      },
      {
        "name": "North Arch",
        "x": 60,
        "y": 28,
        "side": "MID",
        "kind": "crossing",
        "summary": "Arch between center and east.",
        "watch": "Square rotation",
        "counter": "Hold from cover, not open street."
      },
      {
        "name": "South Stairs",
        "x": 78,
        "y": 76,
        "side": "MID",
        "kind": "rotation",
        "summary": "South-east stairs into Square.",
        "watch": "Late retake",
        "counter": "Watch after plant."
      }
    ],
    "sites": {
      "A": [
        87,
        60
      ],
      "B": [
        8,
        60
      ]
    },
    "spawns": {
      "attack": [
        50,
        93
      ],
      "defense": [
        50,
        2
      ]
    },
    "routes": {
      "attackA": [
        {
          "label": "Square hit",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              60.0,
              73.44
            ],
            [
              67.78,
              57.03
            ],
            [
              77.78,
              60.94
            ]
          ]
        },
        {
          "label": "Market split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              46.67,
              54.69
            ],
            [
              67.78,
              29.69
            ],
            [
              77.78,
              60.94
            ]
          ]
        }
      ],
      "attackB": [
        {
          "label": "B Alley hit",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              31.11,
              78.12
            ],
            [
              17.22,
              65.62
            ]
          ]
        },
        {
          "label": "West stairs split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              27.78,
              60.94
            ],
            [
              16.67,
              48.44
            ],
            [
              17.22,
              65.62
            ]
          ]
        }
      ],
      "defense": [
        {
          "label": "Center window",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              46.67,
              23.44
            ],
            [
              46.67,
              48.44
            ]
          ]
        },
        {
          "label": "A scaffold",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              82.22,
              35.16
            ],
            [
              77.78,
              60.94
            ]
          ]
        },
        {
          "label": "B platform",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              18.33,
              28.91
            ],
            [
              17.22,
              65.62
            ]
          ]
        }
      ]
    },
    "retake": [
      {
        "label": "Retake A",
        "points": [
          [
            50,
            2
          ],
          [
            50,
            35
          ],
          [
            87,
            60
          ]
        ]
      },
      {
        "label": "Retake B",
        "points": [
          [
            50,
            2
          ],
          [
            50,
            35
          ],
          [
            8,
            60
          ]
        ]
      }
    ],
    "sightlines": [
      {
        "label": "Window → Center Street",
        "a": [
          46.67,
          23.44
        ],
        "b": [
          46.67,
          73.44
        ]
      },
      {
        "label": "Scaffold → Square",
        "a": [
          82.22,
          35.16
        ],
        "b": [
          72.78,
          57.03
        ]
      },
      {
        "label": "Platform → B Alley",
        "a": [
          18.33,
          28.91
        ],
        "b": [
          12.22,
          68.75
        ]
      },
      {
        "label": "Arch → Square",
        "a": [
          57.78,
          36.72
        ],
        "b": [
          72.78,
          57.03
        ]
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
      },
      "overview": {
        "title": "Tunisia command brief",
        "call": "Center Street is the information spine. Window, Main Square, Scaffold, and the western vertical routes decide how safely either site can be reached.",
        "roles": [
          [
            "A Pair",
            "Square / Scaffold"
          ],
          [
            "B Pair",
            "Zig / B Alley"
          ],
          [
            "Mid",
            "Window / Center"
          ],
          [
            "Flex",
            "North Arch"
          ],
          [
            "Flank",
            "West Stairs"
          ]
        ]
      },
      "retake": {
        "title": "Retake discipline",
        "call": "Take Center Street back before touching the bomb. Clear Window and the site elevation, then pinch from the connector and the nearest alley.",
        "roles": [
          [
            "First Clear",
            "Window"
          ],
          [
            "Trade",
            "Site elevation"
          ],
          [
            "Defuse",
            "Bomb"
          ],
          [
            "Cut",
            "Center Street"
          ],
          [
            "Flank Watch",
            "West / South Stairs"
          ]
        ]
      },
      "sightlines": {
        "title": "Sightline brief",
        "call": "Window controls Center Street, Scaffold controls Square, and Platform watches the western approach. Cross open ground only after one of those angles is blocked.",
        "roles": [
          [
            "Smoke",
            "Center Street"
          ],
          [
            "Entry",
            "Nearest cover"
          ],
          [
            "Trade",
            "Connector"
          ],
          [
            "Cut",
            "Window"
          ],
          [
            "Flank",
            "Western route"
          ]
        ]
      }
    },
    "aliases": []
  },
  "coastal": {
    "id": "coastal",
    "name": "Coastal",
    "status": "OFFICIAL 2026 COMPETITIVE S&D",
    "description": "Tight town lanes, indoor connectors, balconies, and waterfront rotations.",
    "image": {
      "local": "maps/coastal.png",
      "remote": "",
      "aspect": "395/420",
      "source": "Original tactical visual created for Search & Destroy Companion; based on map research and gameplay landmarks, not official map artwork."
    },
    "callouts": [
      {
        "name": "Shop",
        "x": 22,
        "y": 11,
        "side": "B",
        "kind": "room hold",
        "summary": "West-side storefront.",
        "watch": "B lane and Mid",
        "counter": "Flash or wallbang common cover."
      },
      {
        "name": "Cafe",
        "x": 10,
        "y": 65,
        "side": "B",
        "kind": "connector",
        "summary": "Lower west room near B.",
        "watch": "B plant and Waterfront",
        "counter": "Clear close before site."
      },
      {
        "name": "B Rooms",
        "x": 28,
        "y": 55,
        "side": "B",
        "kind": "interior chain",
        "summary": "Connected rooms toward B.",
        "watch": "B approach",
        "counter": "Trade room by room."
      },
      {
        "name": "B Door",
        "x": 36,
        "y": 44,
        "side": "B",
        "kind": "choke",
        "summary": "Doorway into B-side lane.",
        "watch": "B plant",
        "counter": "Utility the doorway."
      },
      {
        "name": "Hotel",
        "x": 91,
        "y": 33,
        "side": "A",
        "kind": "deep hold",
        "summary": "East-side building overlooking A routes.",
        "watch": "A entry and Mid",
        "counter": "Pressure from Alley and Balcony."
      },
      {
        "name": "Balcony",
        "x": 80,
        "y": 10,
        "side": "A",
        "kind": "elevated hold",
        "summary": "Upper east-side balcony.",
        "watch": "Mid and A lane",
        "counter": "Smoke or avoid long exposure."
      },
      {
        "name": "A Courtyard",
        "x": 72,
        "y": 54,
        "side": "A",
        "kind": "site space",
        "summary": "Open eastern site courtyard.",
        "watch": "A plant",
        "counter": "Clear Hotel and Alley."
      },
      {
        "name": "A Connector",
        "x": 63,
        "y": 42,
        "side": "A",
        "kind": "connector",
        "summary": "Indoor route from Mid to A.",
        "watch": "A split",
        "counter": "Hold it after plant."
      },
      {
        "name": "Mid Arch",
        "x": 50,
        "y": 38,
        "side": "MID",
        "kind": "crossing",
        "summary": "Main center arch.",
        "watch": "Mid street",
        "counter": "Pre-aim before crossing."
      },
      {
        "name": "Mid Street",
        "x": 50,
        "y": 52,
        "side": "MID",
        "kind": "long lane",
        "summary": "Central street.",
        "watch": "Both rotations",
        "counter": "Use cover and shoulder info."
      },
      {
        "name": "Alley",
        "x": 91,
        "y": 58,
        "side": "A",
        "kind": "flank route",
        "summary": "Far eastern alley.",
        "watch": "A back and retake",
        "counter": "Keep a late watcher."
      },
      {
        "name": "Dock",
        "x": 80,
        "y": 82,
        "side": "MID",
        "kind": "waterfront route",
        "summary": "Lower waterfront rotation.",
        "watch": "Late flanks",
        "counter": "Listen and re-check."
      },
      {
        "name": "Boat",
        "x": 50,
        "y": 83,
        "side": "B",
        "kind": "cover route",
        "summary": "Waterfront cover near B side.",
        "watch": "B flank",
        "counter": "Do not ignore after plant."
      }
    ],
    "sites": {
      "A": [
        77,
        55
      ],
      "B": [
        18,
        55
      ]
    },
    "spawns": {
      "attack": [
        50,
        93
      ],
      "defense": [
        50,
        2
      ]
    },
    "routes": {
      "attackA": [
        {
          "label": "Connector hit",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              61.67,
              81.25
            ],
            [
              65.56,
              51.56
            ],
            [
              80.0,
              60.16
            ]
          ]
        },
        {
          "label": "Mid to Balcony pressure",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              49.44,
              53.12
            ],
            [
              76.67,
              25.78
            ],
            [
              80.0,
              60.16
            ]
          ]
        }
      ],
      "attackB": [
        {
          "label": "Waterfront hit",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              40.56,
              82.03
            ],
            [
              30.56,
              64.06
            ],
            [
              21.11,
              60.94
            ]
          ]
        },
        {
          "label": "Rooms split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              49.44,
              53.12
            ],
            [
              25.0,
              49.22
            ],
            [
              21.11,
              60.94
            ]
          ]
        }
      ],
      "defense": [
        {
          "label": "A balcony",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              76.67,
              25.78
            ],
            [
              80.0,
              60.16
            ]
          ]
        },
        {
          "label": "B shop",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              16.67,
              28.12
            ],
            [
              21.11,
              60.94
            ]
          ]
        },
        {
          "label": "Mid arch",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              48.89,
              34.38
            ],
            [
              49.44,
              53.12
            ]
          ]
        }
      ]
    },
    "retake": [
      {
        "label": "Retake A",
        "points": [
          [
            50,
            2
          ],
          [
            50,
            35
          ],
          [
            77,
            55
          ]
        ]
      },
      {
        "label": "Retake B",
        "points": [
          [
            50,
            2
          ],
          [
            50,
            35
          ],
          [
            18,
            55
          ]
        ]
      }
    ],
    "sightlines": [
      {
        "label": "Balcony → Mid",
        "a": [
          76.67,
          25.78
        ],
        "b": [
          49.44,
          53.12
        ]
      },
      {
        "label": "Hotel → A",
        "a": [
          81.11,
          40.62
        ],
        "b": [
          77.78,
          60.94
        ]
      },
      {
        "label": "Shop → B",
        "a": [
          16.67,
          28.12
        ],
        "b": [
          21.11,
          60.94
        ]
      },
      {
        "label": "Arch → Waterfront",
        "a": [
          48.89,
          34.38
        ],
        "b": [
          61.67,
          81.25
        ]
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
      },
      "overview": {
        "title": "Coastal command brief",
        "call": "Mid Arch and Mid Street connect both sites. Balcony and Hotel pressure A; Shop, Café, and B Rooms pressure B. The waterfront is a late flank, not a free highway.",
        "roles": [
          [
            "A Pair",
            "Balcony / Courtyard"
          ],
          [
            "B Pair",
            "Shop / B Rooms"
          ],
          [
            "Mid",
            "Arch / Street"
          ],
          [
            "Flex",
            "Connector"
          ],
          [
            "Flank",
            "Dock / Boat"
          ]
        ]
      },
      "retake": {
        "title": "Retake discipline",
        "call": "Retake through Mid Arch with a second player wrapping the nearest connector. Clear the site room, then the deep hold, and leave one player watching the waterfront flank.",
        "roles": [
          [
            "First Clear",
            "Mid Arch"
          ],
          [
            "Trade",
            "Site entrance"
          ],
          [
            "Defuse",
            "Bomb"
          ],
          [
            "Cut",
            "Connector"
          ],
          [
            "Flank Watch",
            "Dock / Boat"
          ]
        ]
      },
      "sightlines": {
        "title": "Sightline brief",
        "call": "Balcony and Hotel watch A-side crossings; Shop and Café watch B-side movement; Mid Arch controls the center. Use buildings to break the long lanes before moving.",
        "roles": [
          [
            "Smoke",
            "Open street"
          ],
          [
            "Entry",
            "Indoor route"
          ],
          [
            "Trade",
            "Doorway"
          ],
          [
            "Cut",
            "Mid Arch"
          ],
          [
            "Flank",
            "Waterfront"
          ]
        ]
      }
    },
    "aliases": []
  },
  "firing-range": {
    "id": "firing-range",
    "name": "Firing Range",
    "status": "OFFICIAL 2026 COMPETITIVE S&D",
    "description": "Classic training yard with wooden structures, trailer lane, and powerful central tower sightlines.",
    "image": {
      "local": "maps/firing-range.png",
      "remote": "",
      "aspect": "1/1",
      "source": "Original tactical visual created for Search & Destroy Companion; based on map research and gameplay landmarks, not official map artwork."
    },
    "callouts": [
      {
        "name": "Trailer",
        "x": 15.0,
        "y": 38.28,
        "side": "A",
        "kind": "deep hold",
        "summary": "Large trailer-side structure.",
        "watch": "A lane and Mid",
        "counter": "Clear trailer and outside separately."
      },
      {
        "name": "Tin",
        "x": 25.0,
        "y": 56.25,
        "side": "A",
        "kind": "cover",
        "summary": "Metal cover near Trailer.",
        "watch": "A crossing",
        "counter": "Nade or wide trade."
      },
      {
        "name": "Back Rock",
        "x": 10.0,
        "y": 67.19,
        "side": "A",
        "kind": "deep cover",
        "summary": "Back rock on Trailer side.",
        "watch": "A plant",
        "counter": "Force it out with utility."
      },
      {
        "name": "Tower",
        "x": 48.33,
        "y": 28.12,
        "side": "MID",
        "kind": "elevated hold",
        "summary": "Central tower.",
        "watch": "Mid and both lanes",
        "counter": "Smoke base or avoid exposure."
      },
      {
        "name": "Sandbags",
        "x": 45.56,
        "y": 53.12,
        "side": "MID",
        "kind": "headglitch",
        "summary": "Central sandbag cover.",
        "watch": "Mid cross",
        "counter": "Shoulder and utility."
      },
      {
        "name": "Jungle",
        "x": 36.67,
        "y": 67.19,
        "side": "MID",
        "kind": "flank lane",
        "summary": "Vegetated lower mid route.",
        "watch": "Rotations",
        "counter": "Watch late flank."
      },
      {
        "name": "Top Wood",
        "x": 76.67,
        "y": 28.12,
        "side": "B",
        "kind": "elevated hold",
        "summary": "Upper wooden structure.",
        "watch": "B lane and Mid",
        "counter": "Clear upper before entering."
      },
      {
        "name": "Bottom Wood",
        "x": 75.56,
        "y": 49.22,
        "side": "B",
        "kind": "interior",
        "summary": "Lower wooden room.",
        "watch": "B plant",
        "counter": "Trade doorway."
      },
      {
        "name": "Showers",
        "x": 84.44,
        "y": 61.72,
        "side": "B",
        "kind": "connector",
        "summary": "Rear room on Wood side.",
        "watch": "B flank",
        "counter": "Keep it blocked after plant."
      },
      {
        "name": "Hut",
        "x": 63.89,
        "y": 64.06,
        "side": "B",
        "kind": "close cover",
        "summary": "Small structure near B.",
        "watch": "B crossing",
        "counter": "Clear close first."
      },
      {
        "name": "Mid",
        "x": 48.89,
        "y": 46.88,
        "side": "MID",
        "kind": "open control",
        "summary": "Main center yard.",
        "watch": "All rotations",
        "counter": "Do not stand still under Tower."
      }
    ],
    "sites": {
      "A": [
        20.0,
        64.84
      ],
      "B": [
        80.0,
        60.16
      ]
    },
    "spawns": {
      "attack": [
        50.0,
        89.06
      ],
      "defense": [
        50.0,
        10.16
      ]
    },
    "routes": {
      "attackA": [
        {
          "label": "Jungle to A",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              36.67,
              67.19
            ],
            [
              25.0,
              56.25
            ],
            [
              20.0,
              64.84
            ]
          ]
        },
        {
          "label": "Mid Trailer split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              45.56,
              53.12
            ],
            [
              15.0,
              38.28
            ],
            [
              20.0,
              64.84
            ]
          ]
        }
      ],
      "attackB": [
        {
          "label": "Hut hit",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              63.89,
              64.06
            ],
            [
              75.56,
              49.22
            ],
            [
              80.0,
              60.16
            ]
          ]
        },
        {
          "label": "Top Wood pressure",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              45.56,
              53.12
            ],
            [
              76.67,
              28.12
            ],
            [
              80.0,
              60.16
            ]
          ]
        }
      ],
      "defense": [
        {
          "label": "Trailer anchor",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              15.0,
              38.28
            ],
            [
              20.0,
              64.84
            ]
          ]
        },
        {
          "label": "Top Wood anchor",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              76.67,
              28.12
            ],
            [
              80.0,
              60.16
            ]
          ]
        },
        {
          "label": "Tower info",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              48.33,
              28.12
            ],
            [
              48.89,
              46.88
            ]
          ]
        }
      ]
    },
    "retake": [
      {
        "label": "Retake A",
        "points": [
          [
            50.0,
            10.16
          ],
          [
            50,
            35
          ],
          [
            20.0,
            64.84
          ]
        ]
      },
      {
        "label": "Retake B",
        "points": [
          [
            50.0,
            10.16
          ],
          [
            50,
            35
          ],
          [
            80.0,
            60.16
          ]
        ]
      }
    ],
    "sightlines": [
      {
        "label": "Tower → Mid",
        "a": [
          48.33,
          28.12
        ],
        "b": [
          48.89,
          75.0
        ]
      },
      {
        "label": "Top Wood → B",
        "a": [
          76.67,
          28.12
        ],
        "b": [
          80.0,
          60.16
        ]
      },
      {
        "label": "Trailer → A",
        "a": [
          15.0,
          38.28
        ],
        "b": [
          20.0,
          64.84
        ]
      },
      {
        "label": "Sandbags → Tin",
        "a": [
          45.56,
          53.12
        ],
        "b": [
          25.0,
          56.25
        ]
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
      },
      "overview": {
        "title": "Firing Range command brief",
        "call": "Tower and Mid provide early information. Trailer and Tin control A; Top Wood, Bottom Wood, Hut, and Showers form the B-side fight.",
        "roles": [
          [
            "A Pair",
            "Trailer / Tin"
          ],
          [
            "B Pair",
            "Top Wood / Hut"
          ],
          [
            "Mid",
            "Tower / Sandbags"
          ],
          [
            "Flex",
            "Mid"
          ],
          [
            "Flank",
            "Jungle / Showers"
          ]
        ]
      },
      "retake": {
        "title": "Retake discipline",
        "call": "Clear Tower information first, then pinch the site through two different structures. Avoid feeding through the same doorway into a prepared head-level angle.",
        "roles": [
          [
            "First Clear",
            "Tower / Mid"
          ],
          [
            "Trade",
            "Site doorway"
          ],
          [
            "Defuse",
            "Bomb"
          ],
          [
            "Cut",
            "Opposite lane"
          ],
          [
            "Flank Watch",
            "Jungle / Showers"
          ]
        ]
      },
      "sightlines": {
        "title": "Sightline brief",
        "call": "Tower sees the center, Trailer pressures A lanes, and Top Wood dominates B approaches. Cross the middle behind utility or hard cover.",
        "roles": [
          [
            "Smoke",
            "Tower lane"
          ],
          [
            "Entry",
            "Low route"
          ],
          [
            "Trade",
            "Structure door"
          ],
          [
            "Cut",
            "Mid"
          ],
          [
            "Flank",
            "Outer lane"
          ]
        ]
      }
    },
    "aliases": []
  },
  "slums": {
    "id": "slums",
    "name": "Slums",
    "status": "OFFICIAL 2026 COMPETITIVE S&D",
    "description": "Dense urban lanes centered on Statue with short connectors and dangerous street crossings.",
    "image": {
      "local": "maps/slums.png",
      "remote": "",
      "aspect": "1/1",
      "source": "Original tactical visual created for Search & Destroy Companion; based on map research and gameplay landmarks, not official map artwork."
    },
    "callouts": [
      {
        "name": "Statue",
        "x": 49.44,
        "y": 45.31,
        "side": "MID",
        "kind": "central cover",
        "summary": "Main mid landmark.",
        "watch": "Both lanes",
        "counter": "Utility before crossing."
      },
      {
        "name": "Fountain",
        "x": 48.33,
        "y": 60.94,
        "side": "MID",
        "kind": "open control",
        "summary": "Lower mid landmark.",
        "watch": "Rotations",
        "counter": "Hold from edge cover."
      },
      {
        "name": "Blue",
        "x": 18.33,
        "y": 31.25,
        "side": "A",
        "kind": "building",
        "summary": "West blue building.",
        "watch": "A lane and Mid",
        "counter": "Clear top and bottom."
      },
      {
        "name": "Garage",
        "x": 12.22,
        "y": 55.47,
        "side": "A",
        "kind": "deep hold",
        "summary": "West-side garage.",
        "watch": "A plant",
        "counter": "Nade deep corner."
      },
      {
        "name": "Laundry",
        "x": 26.67,
        "y": 64.84,
        "side": "A",
        "kind": "connector",
        "summary": "West lower connector.",
        "watch": "A flank",
        "counter": "Keep post-plant watch."
      },
      {
        "name": "Red",
        "x": 80.0,
        "y": 32.03,
        "side": "B",
        "kind": "building",
        "summary": "East red building.",
        "watch": "B lane and Mid",
        "counter": "Clear upper window."
      },
      {
        "name": "Park",
        "x": 84.44,
        "y": 57.81,
        "side": "B",
        "kind": "open lane",
        "summary": "East open area.",
        "watch": "B plant",
        "counter": "Cross with smoke."
      },
      {
        "name": "Graveyard",
        "x": 72.22,
        "y": 66.41,
        "side": "B",
        "kind": "back route",
        "summary": "Rear east route.",
        "watch": "Late retake",
        "counter": "Watch after plant."
      },
      {
        "name": "Mid Street",
        "x": 49.44,
        "y": 33.59,
        "side": "MID",
        "kind": "long lane",
        "summary": "Upper central street.",
        "watch": "Early cross",
        "counter": "Shoulder info, do not overexpose."
      },
      {
        "name": "A Alley",
        "x": 27.22,
        "y": 46.88,
        "side": "A",
        "kind": "choke",
        "summary": "Connector from Mid to A.",
        "watch": "A entry",
        "counter": "Trade through."
      },
      {
        "name": "B Alley",
        "x": 69.44,
        "y": 46.88,
        "side": "B",
        "kind": "choke",
        "summary": "Connector from Mid to B.",
        "watch": "B entry",
        "counter": "Utility doorway."
      }
    ],
    "sites": {
      "A": [
        16.67,
        63.28
      ],
      "B": [
        83.33,
        63.28
      ]
    },
    "spawns": {
      "attack": [
        50.0,
        89.06
      ],
      "defense": [
        50.0,
        10.16
      ]
    },
    "routes": {
      "attackA": [
        {
          "label": "Statue to A",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              48.33,
              60.94
            ],
            [
              27.22,
              46.88
            ],
            [
              16.67,
              63.28
            ]
          ]
        },
        {
          "label": "Laundry split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              26.67,
              64.84
            ],
            [
              12.22,
              55.47
            ],
            [
              16.67,
              63.28
            ]
          ]
        }
      ],
      "attackB": [
        {
          "label": "Statue to B",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              48.33,
              60.94
            ],
            [
              69.44,
              46.88
            ],
            [
              83.33,
              63.28
            ]
          ]
        },
        {
          "label": "Graveyard split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              72.22,
              66.41
            ],
            [
              84.44,
              57.81
            ],
            [
              83.33,
              63.28
            ]
          ]
        }
      ],
      "defense": [
        {
          "label": "Blue anchor",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              18.33,
              31.25
            ],
            [
              16.67,
              63.28
            ]
          ]
        },
        {
          "label": "Red anchor",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              80.0,
              32.03
            ],
            [
              83.33,
              63.28
            ]
          ]
        },
        {
          "label": "Mid street info",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              49.44,
              33.59
            ],
            [
              49.44,
              45.31
            ]
          ]
        }
      ]
    },
    "retake": [
      {
        "label": "Retake A",
        "points": [
          [
            50.0,
            10.16
          ],
          [
            50,
            35
          ],
          [
            16.67,
            63.28
          ]
        ]
      },
      {
        "label": "Retake B",
        "points": [
          [
            50.0,
            10.16
          ],
          [
            50,
            35
          ],
          [
            83.33,
            63.28
          ]
        ]
      }
    ],
    "sightlines": [
      {
        "label": "Blue → Statue",
        "a": [
          18.33,
          31.25
        ],
        "b": [
          49.44,
          45.31
        ]
      },
      {
        "label": "Red → Statue",
        "a": [
          80.0,
          32.03
        ],
        "b": [
          49.44,
          45.31
        ]
      },
      {
        "label": "Mid Street → Fountain",
        "a": [
          49.44,
          33.59
        ],
        "b": [
          48.33,
          60.94
        ]
      },
      {
        "label": "Park → B",
        "a": [
          84.44,
          57.81
        ],
        "b": [
          83.33,
          63.28
        ]
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
      },
      "overview": {
        "title": "Slums command brief",
        "call": "Statue and Fountain are the rotation hub. Blue and Garage anchor A; Red, Park, and Graveyard anchor B. Mid control decides which site can be reinforced first.",
        "roles": [
          [
            "A Pair",
            "Blue / Garage"
          ],
          [
            "B Pair",
            "Red / Park"
          ],
          [
            "Mid",
            "Statue / Fountain"
          ],
          [
            "Flex",
            "Mid Street"
          ],
          [
            "Flank",
            "Laundry / Graveyard"
          ]
        ]
      },
      "retake": {
        "title": "Retake discipline",
        "call": "Reclaim Statue before collapsing on either site. Use one player to cut the opposite alley while two clear the site and one protects the defuse.",
        "roles": [
          [
            "First Clear",
            "Statue"
          ],
          [
            "Trade",
            "Site entrance"
          ],
          [
            "Defuse",
            "Bomb"
          ],
          [
            "Cut",
            "Opposite alley"
          ],
          [
            "Flank Watch",
            "Laundry / Graveyard"
          ]
        ]
      },
      "sightlines": {
        "title": "Sightline brief",
        "call": "Mid Street, Statue, and the long alleys create the dangerous lanes. Break the angle with cover before entering the site-side buildings.",
        "roles": [
          [
            "Smoke",
            "Mid Street"
          ],
          [
            "Entry",
            "Close wall"
          ],
          [
            "Trade",
            "Second corner"
          ],
          [
            "Cut",
            "Statue"
          ],
          [
            "Flank",
            "Outer alley"
          ]
        ]
      }
    },
    "aliases": []
  },
  "meltdown": {
    "id": "meltdown",
    "name": "Meltdown",
    "status": "OFFICIAL 2026 COMPETITIVE S&D",
    "description": "Industrial power plant with long outdoor lanes and fast interior rotations.",
    "image": {
      "local": "maps/meltdown.png",
      "remote": "",
      "aspect": "1/1",
      "source": "Original tactical visual created for Search & Destroy Companion; based on map research and gameplay landmarks, not official map artwork."
    },
    "callouts": [
      {
        "name": "Reactor",
        "x": 16.11,
        "y": 39.06,
        "side": "A",
        "kind": "site building",
        "summary": "Large reactor-side interior.",
        "watch": "A site and Mid",
        "counter": "Clear door and upper angle."
      },
      {
        "name": "Cooling",
        "x": 10.0,
        "y": 64.06,
        "side": "A",
        "kind": "open cover",
        "summary": "Cooling structures outside A.",
        "watch": "A cross",
        "counter": "Use hard cover."
      },
      {
        "name": "Ramp",
        "x": 26.67,
        "y": 61.72,
        "side": "A",
        "kind": "connector",
        "summary": "Ramp into A side.",
        "watch": "A plant",
        "counter": "Pre-aim top edge."
      },
      {
        "name": "Control",
        "x": 48.89,
        "y": 28.91,
        "side": "MID",
        "kind": "interior control",
        "summary": "Central control room.",
        "watch": "Both rotations",
        "counter": "Take it with a trade."
      },
      {
        "name": "Courtyard",
        "x": 49.44,
        "y": 52.34,
        "side": "MID",
        "kind": "open control",
        "summary": "Central outdoor yard.",
        "watch": "Both sites",
        "counter": "Cross only after Control checked."
      },
      {
        "name": "Catwalk",
        "x": 55.56,
        "y": 39.06,
        "side": "MID",
        "kind": "elevated hold",
        "summary": "Raised central walkway.",
        "watch": "Courtyard",
        "counter": "Smoke or force down."
      },
      {
        "name": "Warehouse",
        "x": 81.67,
        "y": 38.28,
        "side": "B",
        "kind": "site building",
        "summary": "Large B-side structure.",
        "watch": "B plant",
        "counter": "Clear deep and doorway separately."
      },
      {
        "name": "Generator",
        "x": 72.22,
        "y": 60.16,
        "side": "B",
        "kind": "cover",
        "summary": "Generator cover near B.",
        "watch": "B cross",
        "counter": "Nade behind cover."
      },
      {
        "name": "Lab",
        "x": 87.78,
        "y": 64.06,
        "side": "B",
        "kind": "back route",
        "summary": "Rear B-side room.",
        "watch": "Retake",
        "counter": "Watch after plant."
      },
      {
        "name": "Turbine",
        "x": 62.22,
        "y": 67.19,
        "side": "B",
        "kind": "connector",
        "summary": "Industrial connector into B.",
        "watch": "B entry",
        "counter": "Trade through narrow door."
      },
      {
        "name": "Back A",
        "x": 10.56,
        "y": 28.12,
        "side": "A",
        "kind": "deep hold",
        "summary": "Deep reactor-side spawn angle.",
        "watch": "A approach",
        "counter": "Smoke long angle."
      }
    ],
    "sites": {
      "A": [
        17.22,
        62.5
      ],
      "B": [
        81.67,
        63.28
      ]
    },
    "spawns": {
      "attack": [
        50.0,
        89.06
      ],
      "defense": [
        50.0,
        10.16
      ]
    },
    "routes": {
      "attackA": [
        {
          "label": "Courtyard ramp",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              49.44,
              52.34
            ],
            [
              26.67,
              61.72
            ],
            [
              17.22,
              62.5
            ]
          ]
        },
        {
          "label": "Cooling split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              10.56,
              73.44
            ],
            [
              10.0,
              64.06
            ],
            [
              17.22,
              62.5
            ]
          ]
        }
      ],
      "attackB": [
        {
          "label": "Turbine hit",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              62.22,
              67.19
            ],
            [
              72.22,
              60.16
            ],
            [
              81.67,
              63.28
            ]
          ]
        },
        {
          "label": "Control split",
          "points": [
            [
              50.0,
              89.06
            ],
            [
              49.44,
              52.34
            ],
            [
              48.89,
              28.91
            ],
            [
              81.67,
              63.28
            ]
          ]
        }
      ],
      "defense": [
        {
          "label": "Reactor anchor",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              16.11,
              39.06
            ],
            [
              17.22,
              62.5
            ]
          ]
        },
        {
          "label": "Warehouse anchor",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              81.67,
              38.28
            ],
            [
              81.67,
              63.28
            ]
          ]
        },
        {
          "label": "Control info",
          "points": [
            [
              50.0,
              10.16
            ],
            [
              48.89,
              28.91
            ],
            [
              49.44,
              52.34
            ]
          ]
        }
      ]
    },
    "retake": [
      {
        "label": "Retake A",
        "points": [
          [
            50.0,
            10.16
          ],
          [
            50,
            35
          ],
          [
            17.22,
            62.5
          ]
        ]
      },
      {
        "label": "Retake B",
        "points": [
          [
            50.0,
            10.16
          ],
          [
            50,
            35
          ],
          [
            81.67,
            63.28
          ]
        ]
      }
    ],
    "sightlines": [
      {
        "label": "Back A → Site",
        "a": [
          10.56,
          28.12
        ],
        "b": [
          17.22,
          62.5
        ]
      },
      {
        "label": "Catwalk → Courtyard",
        "a": [
          55.56,
          39.06
        ],
        "b": [
          49.44,
          52.34
        ]
      },
      {
        "label": "Warehouse → B",
        "a": [
          81.67,
          38.28
        ],
        "b": [
          81.67,
          63.28
        ]
      },
      {
        "label": "Control → Turbine",
        "a": [
          48.89,
          28.91
        ],
        "b": [
          62.22,
          67.19
        ]
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
      },
      "overview": {
        "title": "Meltdown command brief",
        "call": "The map is a symmetrical three-lane power plant. Control and the middle ramps connect Reactor on A with Warehouse and Generator on B.",
        "roles": [
          [
            "A Pair",
            "Ramp / Reactor"
          ],
          [
            "B Pair",
            "Turbine / Generator"
          ],
          [
            "Mid",
            "Control / Courtyard"
          ],
          [
            "Flex",
            "Catwalk"
          ],
          [
            "Flank",
            "Cooling / Lab"
          ]
        ]
      },
      "retake": {
        "title": "Retake discipline",
        "call": "Take Control or the middle underpass before entering the site. Clear the second-story angle, pinch through two lanes, and keep one player on the outside cutoff.",
        "roles": [
          [
            "First Clear",
            "Control"
          ],
          [
            "Trade",
            "Site entrance"
          ],
          [
            "Defuse",
            "Bomb"
          ],
          [
            "Cut",
            "Middle lane"
          ],
          [
            "Flank Watch",
            "Cooling / Lab"
          ]
        ]
      },
      "sightlines": {
        "title": "Sightline brief",
        "call": "Control windows watch the middle hill; Reactor and Warehouse own the side lanes. Use the underpass and interior rooms to break exposed crossings.",
        "roles": [
          [
            "Smoke",
            "Control window"
          ],
          [
            "Entry",
            "Underpass"
          ],
          [
            "Trade",
            "Ramp"
          ],
          [
            "Cut",
            "Courtyard"
          ],
          [
            "Flank",
            "Outer lane"
          ]
        ]
      }
    },
    "aliases": []
  }
};
