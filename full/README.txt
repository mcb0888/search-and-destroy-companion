SEARCH & DESTROY COMPANION — BEGINNER GUIDE 3.7.0

PURPOSE
A beginner-first CODM Search & Destroy companion for players who want to learn the mode without relying on trial, error, and abuse from random teammates.

PRIMARY EXPERIENCE
- Local NERV + RECON post-round coaching from a rough typed fragment
- NERV separation of the reported account, missing context, and possible inference
- RECON identification of one decision point and exactly one next-round check
- Optional links into the evidence-backed lessons, fight corrections, dictionary, and Field Manual
- Optional local pattern saving that excludes the original typed round account
- Guided round review that turns two or three answers into one likely explanation
- Immediate next-round correction before longer teaching
- Beginner lesson progress and continue-learning support
- Five-round practice missions with remembered/missed tracking
- Recent practice history and local notes
- Thirteen short lessons covering the main ins and outs of Search & Destroy, including landmark-based A/B orientation
- Ten fight corrections with established game terms explained
- Searchable game-term dictionary
- Global search across lessons, quick help, fight corrections, Guided results, Field Manual operations, and game terms
- Saved pages and a short recently opened list stored locally
- Thirty-operation Field Manual for deeper practice

GUIDED REVIEW
The Guided tab begins with what the player noticed: elimination timing, direct gunfight, post-plant problem, recovery attempt, player advantage, timer mistake, or last-player situation. Results contain:
- What likely happened
- One action for the next round
- Why the correction helps
- Relevant dictionary terms
- Related lesson, fight correction, or Field Manual operation
- A matching five-round practice mission

BACKROOM ROUND READ
The Guided tab accepts a rough player-written account and optional map, side,
or objective context. It uses transparent local rules, not an outside AI
service. NERV states what was reported, what remains missing, and what is only a
possible inference. RECON identifies one decision point and gives exactly one
observable next-round check. The typed account is not saved automatically.
When the player chooses Save, only the generalized pattern, decision, check,
guide route, and timestamp are stored locally.

PROGRESS AND PRACTICE
Lesson completion, the most recently opened lesson, active practice missions, five-round results, practice history, and notes are stored locally on the device. Nothing is submitted automatically.

LANGUAGE RULE
Use ordinary language first. Preserve established game terminology because players will hear it in matches, videos, and competitive discussion. Define those terms in the dictionary and point readers toward the definition when they appear. Avoid disposable social-media slang and unexplained jargon.

MOBILE DESIGN
- Five primary tabs: Start, Guided, Learn, Practice, Terms
- Large question and answer controls
- Immediate correction shown before detailed explanation
- One active mission with five visible round markers
- Short summaries on selection screens
- Durable hash routes that can be bookmarked or shared

CURRENT ROUTES
#/home
#/round-read
#/guided
#/guided/q/<question>
#/guided/result/<result>
#/quick
#/quick/<situation>
#/learn
#/lesson/<lesson>
#/fights
#/fight/<problem>
#/manual
#/operation/<number>
#/practice
#/library
#/terms
#/term/<term>
#/notes
#/about

OFFLINE UPDATES
The app uses a versioned network-first service worker. Version 3.7 keeps the Backroom round-read rules, search, saved pages, recent pages, and guide available in the offline app shell. A waiting service worker produces an Update button and takes control only after the user chooses to update.

BUILD
Version 3.7.0
MB-SNDC-2026-0822-044

SIMPLIFIED STARTER EDITION

The normal site address contains a separate learning-first edition. It removes
Guided Help, Practice Missions, and Notes while preserving this complete
companion under /full/. Starter Edition sections:

- Eight short S&D lessons with game-term definitions
- Common beginner settings with confidence labels
- Three downloadable Season 6 loadout and Gunsmith field guides
- Six visual HUD starting combinations: two, three, or four fingers using manual ADS + hip fire, with an alternate 1-tap ADS-fire workflow and a short playstyle explanation for each

QUALITY CHECKS
Every push to main and every pull request runs automated checks for:
- Guided branch and result reachability
- Lesson, fight, mission, quick-help, operation, and dictionary references
- Required content fields
- Route targets
- Version, build, cache, and offline-asset synchronization
- Guided navigation and result hierarchy
- Lesson and practice persistence
- Global search, saved-page persistence, and recent-page history
- Five-round mission completion
- 320-pixel mobile layout and minimum 44-pixel tap targets
- Offline route reload

Created by Michael Barnes.
Copyright © 2026 Michael Barnes. All Rights Reserved.
Unofficial fan-made reference. Not affiliated with or endorsed by Activision.
