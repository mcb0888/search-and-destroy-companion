SEARCH & DESTROY COMPANION — FULL GUIDE 4.0.0

PURPOSE
A beginner-first CODM Search & Destroy field guide for players who want to learn the mode without relying on trial, error, and abuse from random teammates.

PRIMARY EXPERIENCE
- Better Judgment accepts a rough fragment or direct question
- One likely cause and exactly one concrete thing to try next
- Optional common-trap notes when a mistake is frequent and recognizable
- Optional match details that can be added, edited, or cleared
- Separate inspectable saved tips, selected sources, and structured match records
- Optional secure/local AI bridge with AI off by default and no browser-held provider key
- Foreground-only listen-once voice input and optional spoken next adjustment
- Explicit image selection and one-request analysis; no hidden screen or folder access
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
- Searchable Full Armory with 125 current firearm dossiers and one five-part S&D build for every firearm that supports a normal Gunsmith
- Global search across lessons, quick help, fight corrections, Guided results, Field Manual operations, game terms, and firearms
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

BETTER JUDGMENT
The Judgment tab accepts a rough player-written account, a direct question,
or an optional explicitly selected source. Built-in guidance remains the default.
The main answer shows what probably caused the problem, an optional common trap,
and one thing to try next. It does not expose the internal evidence labels as
homework for the player.

Conversation history stays local and is capped. Saved tips are separate and
change only when the player saves, edits, or deletes an entry. Match records
are structured local evidence, not claims about matches that were not recorded.
Text sources are inspected only after selection. Images remain temporary unless
preserved locally or explicitly sent to a configured bridge. Full video
understanding is not claimed.

AI is off by default. The static browser app contains and accepts no provider
key. Optional OpenAI or Gemini support requires a secure server-side or local
bridge and runs only after an explicit request. The bridge architecture is a
capability foundation; no hosted bridge is included in this static release.

FULL ARMORY
The Armory is generated from current firearm build/stat pages, then checked as
structured data before release. Normal Gunsmith weapons receive five attachment
slots; special weapons without a normal Gunsmith are identified instead of
being given invented parts. Displayed ratings are comparative menu-style values,
not physical damage, fire rate, ADS time, or time-to-kill measurements. A
before/after rating comparison appears only when the source page's exact
attachment list matches the build shown here. Manual S&D adaptations may retain
linked base information, but they do not inherit build deltas from a different
attachment set. Every exact attachment remains subject to confirmation in the
live Global Multiplayer Gunsmith because the game can change independently of
this static guide.

PROGRESS AND PRACTICE
Lesson completion, the most recently opened lesson, active practice missions, five-round results, practice history, and notes are stored locally on the device. Nothing is submitted automatically.

LANGUAGE RULE
Use ordinary language first. Preserve established game terminology because players will hear it in matches, videos, and competitive discussion. Define those terms in the dictionary and point readers toward the definition when they appear. Avoid disposable social-media slang and unexplained jargon.

MOBILE DESIGN
- Five primary tabs: Start, Judgment, Learn, Practice, Terms
- Large question and answer controls
- Immediate correction shown before detailed explanation
- One active mission with five visible round markers
- Short summaries on selection screens
- Durable hash routes that can be bookmarked or shared

CURRENT ROUTES
#/home
#/companion
#/round-read
#/sources
#/records
#/memory
#/provider
#/guided
#/guided/q/<question>
#/guided/result/<result>
#/quick
#/quick/<situation>
#/learn
#/lesson/<lesson>
#/armory
#/weapon/<firearm>
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
The app uses a versioned network-first service worker. Version 4.0 keeps Better Judgment, built-in guidance, complete Armory dossiers, search, saved pages, recent pages, and the field guide available in the offline app shell. Optional AI requests require a reachable configured bridge and are not faked while offline. A waiting service worker produces an Update button and takes control only after the user chooses to update.

BUILD
Version 4.0.0
MB-SNDC-2026-0831-047

SIMPLIFIED STARTER EDITION

The normal site address contains a separate learning-first edition. It removes
Guided Help, Practice Missions, and Notes while preserving this complete
companion under /full/. Starter Edition sections:

- Eight short S&D lessons with game-term definitions
- Common beginner settings with confidence labels
- Five approachable early-account loadouts plus three downloadable archived Season 6 Gunsmith references
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
- All firearm records, five-part builds, source fields, category counts, Armory routes, filtering, and offline asset coverage

Created by Michael Barnes.
Copyright © 2026 Michael Barnes. All Rights Reserved.
Unofficial fan-made reference. Not affiliated with or endorsed by Activision.
