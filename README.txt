SEARCH & DESTROY COMPANION — BEGINNER GUIDE 3.3.1

PURPOSE
A beginner-first CODM Search & Destroy companion for players who want to learn the mode without relying on trial, error, and abuse from random teammates.

PRIMARY EXPERIENCE
- Guided round review that turns two or three answers into one likely explanation
- Immediate next-round correction before longer teaching
- Beginner lesson progress and continue-learning support
- Five-round practice missions with remembered/missed tracking
- Recent practice history and local notes
- Twelve short lessons covering the main ins and outs of Search & Destroy
- Ten fight corrections with established game terms explained
- Searchable game-term dictionary
- Thirty-operation Field Manual for deeper practice

GUIDED REVIEW
The Guided tab begins with what the player noticed: elimination timing, direct gunfight, post-plant problem, recovery attempt, player advantage, timer mistake, or last-player situation. Results contain:
- What likely happened
- One action for the next round
- Why the correction helps
- Relevant dictionary terms
- Related lesson, fight correction, or Field Manual operation
- A matching five-round practice mission

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
#/terms
#/term/<term>
#/notes
#/about

OFFLINE UPDATES
The app uses a versioned network-first service worker. Version 3.3 adds app.css, app.js, and guided_data.js to the offline asset set. A waiting service worker produces an Update button and reloads after taking control.

BUILD
Version 3.3.1
MB-SNDC-2026-0723-034

QUALITY CHECKS
Every push to main and every pull request runs automated checks for:
- Guided branch and result reachability
- Lesson, fight, mission, quick-help, operation, and dictionary references
- Required content fields
- Route targets
- Version, build, cache, and offline-asset synchronization
- Guided navigation and result hierarchy
- Lesson and practice persistence
- Five-round mission completion
- 320-pixel mobile layout and minimum 44-pixel tap targets
- Offline route reload

Created by Michael Barnes.
Copyright © 2026 Michael Barnes. All Rights Reserved.
Unofficial fan-made reference. Not affiliated with or endorsed by Activision.
