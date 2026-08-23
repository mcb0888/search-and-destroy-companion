/*
Search & Destroy Companion — Backroom round-read rules
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0823-046

This file contains local, deterministic coaching rules. It does not call an AI
service, inspect the game, or send the player's account anywhere.
*/
window.SIDELINE_DATA = {
  meta: {
    version: '1.0.0',
    build: 'MB-SNDC-2026-0823-046',
    privacy: 'Typed round accounts stay in this browser. Nothing is sent or saved automatically.'
  },
  examples: [
    'I died first pushing in',
    'I lost track of which bomb site was which',
    'I got shot from somewhere and did not know where',
    'I rushed because I thought my teammate had that angle'
  ],
  rules: [
    {
      id: 'site-orientation',
      keywords: ['which bomb site', 'which site', 'site was which', 'site is which', 'lost track of a', 'lost track of b', 'mixed up a', 'mixed up b', 'forgot a', 'forgot b'],
      missing: 'The map, spawn side, and landmark nearest the site are not confirmed yet.',
      inference: 'The problem may be site orientation rather than aim or movement.',
      decision: 'Identify the objective before choosing the route.',
      check: 'At spawn, read the A and B markers, then attach your chosen site to one visible landmark before moving.',
      route: 'lesson/orientation',
      routeLabel: 'Open landmark orientation',
      terms: ['callout', 'sightline']
    },
    {
      id: 'unknown-shot',
      keywords: ['shot from somewhere', 'did not know where', "didn't know where", 'no idea where', 'where i got shot', 'could not find them', "couldn't find them"],
      missing: 'The attacker’s exact position, the direction of the damage indicator, and the last unchecked opening are unknown.',
      inference: 'An unchecked sightline may have stayed open while attention moved elsewhere.',
      decision: 'Reduce uncertainty before crossing farther into the area.',
      check: 'Before the next exposed crossing, stop behind cover and clear the nearest opening that can see the crossing.',
      route: 'lesson/orientation',
      routeLabel: 'Open the first-threat routine',
      terms: ['sightline', 'angle', 'cover']
    },
    {
      id: 'assumed-support',
      keywords: ['thought my teammate', 'teammate had that angle', 'thought they had', 'assumed my teammate', 'thought he had', 'thought she had'],
      missing: 'The teammate’s actual view, distance, weapon readiness, and whether they agreed to watch that direction are unknown.',
      inference: 'Support may have been assumed instead of confirmed.',
      decision: 'Confirm coverage before treating an angle as safe.',
      check: 'Before crossing, check whether the teammate is visibly aimed at that opening; if not, treat it as unchecked.',
      route: 'lesson/support-and-trades',
      routeLabel: 'Open teammate support',
      terms: ['angle', 'trade', 'spacing']
    },
    {
      id: 'early-push',
      keywords: ['died first', 'first death', 'first one dead', 'pushing in', 'pushed in', 'rushed in', 'rushed because', 'sprinted in', 'ran in'],
      missing: 'The first enemy position, whether the weapon was ready, and whether teammate support was close enough are not confirmed.',
      inference: 'Movement may have continued into possible contact before enough information was available.',
      decision: 'Choose the first point where speed stops helping.',
      check: 'Before the first place an enemy can see you, release sprint and aim at the nearest likely opening.',
      route: 'quick/dying-early',
      routeLabel: 'Open early-round help',
      terms: ['pre-aim', 'sightline', 'entry']
    },
    {
      id: 'repeat-peek',
      keywords: ['peeked again', 'peek again', 're-peek', 'repeek', 'same angle again', 'looked again from'],
      missing: 'It is not confirmed whether the enemy stayed aimed at the position or whether another exit was available.',
      inference: 'The second appearance may have been predictable after the first contact.',
      decision: 'Change the second exposure after your position is known.',
      check: 'After first contact, use a different position, height, or delay before showing yourself again.',
      route: 'fight/repeek',
      routeLabel: 'Open the re-peek correction',
      terms: ['re-peek', 'reposition']
    },
    {
      id: 'unsafe-reload',
      keywords: ['reloaded', 'reloading', 'reload after', 'caught reload'],
      missing: 'The remaining ammunition, nearby cover, and location of the next enemy are not confirmed.',
      inference: 'The reload may have started from habit instead of necessity.',
      decision: 'Make the area safe before giving up the ability to fire.',
      check: 'After the next elimination, move behind cover and check the ammunition count before reloading.',
      route: 'fight/reload',
      routeLabel: 'Open the reload correction',
      terms: ['cover', 'information']
    },
    {
      id: 'chased-damage',
      keywords: ['chased', 'followed the weak', 'went after the weak', 'ran after them', 'pushed the injured'],
      missing: 'The enemy’s teammates, escape route, and final position are not confirmed.',
      inference: 'Damage dealt may have been treated as permission to enter an unverified area.',
      decision: 'Keep the advantage without following the enemy into their choice of position.',
      check: 'When an injured enemy leaves view, hold the route they must cross or return to cover instead of following immediately.',
      route: 'fight/chase',
      routeLabel: 'Open the chase correction',
      terms: ['disengage', 'cover', 'information']
    },
    {
      id: 'post-plant',
      keywords: ['after we planted', 'we planted', 'post-plant', 'post plant', 'left the bomb', 'bomb was planted'],
      missing: 'The bomb timer, player count, and which positions could monitor the bomb are not confirmed.',
      inference: 'The team may have stopped using the planted bomb as the main source of pressure.',
      decision: 'Let the planted bomb determine the next position.',
      check: 'After the next plant, take one position that can see or hear the bomb and still connect with a teammate.',
      route: 'lesson/post-plant',
      routeLabel: 'Open post-plant play',
      terms: ['post-plant', 'crossfire', 'audio cue']
    },
    {
      id: 'retake',
      keywords: ['they planted', 'enemy planted', 'need to defuse', 'tried to defuse', 'retake', 'recover the site'],
      missing: 'The bomb timer, player count, entry choices, and first blocking position are not confirmed.',
      inference: 'The recovery attempt may have begun before the remaining players shared a timing or first target.',
      decision: 'Solve the first threat before committing to the defuse.',
      check: 'On the next recovery attempt, check the timer and name the first position that must be cleared before anyone touches the bomb.',
      route: 'lesson/retake',
      routeLabel: 'Open planted-site recovery',
      terms: ['retake', 'defuse', 'utility']
    },
    {
      id: 'last-alive',
      keywords: ['last alive', 'only one left', 'only player left', '1v', 'clutch'],
      missing: 'The timer, bomb state, player count, and last confirmed enemy positions are not all known from this account.',
      inference: 'Pressure may have pulled attention away from the next objective requirement.',
      decision: 'Use the round state to choose only the next required action.',
      check: 'When last alive, read the timer, bomb state, and player count before moving again.',
      route: 'lesson/last-alive',
      routeLabel: 'Open last-player decisions',
      terms: ['last alive', 'clutch', 'xvx']
    },
    {
      id: 'timer',
      keywords: ['ran out of time', 'no time', 'forgot the timer', 'did not check time', "didn't check time", 'time expired'],
      missing: 'The remaining time and the exact moment the objective became urgent are not confirmed.',
      inference: 'The clock may have been checked after it had already removed safer options.',
      decision: 'Use the timer before it becomes an emergency.',
      check: 'At the next major pause in contact, read the timer before choosing the next route or fight.',
      route: 'lesson/bomb-and-time',
      routeLabel: 'Open bomb and timer decisions',
      terms: ['timing', 'plant', 'defuse']
    }
  ],
  fallback: {
    id: 'one-uncertainty',
    missing: 'The decisive position, timing, and information available at the choice are not clear from this fragment.',
    inference: 'One uncertain detail may be carrying more weight than the account can support.',
    decision: 'Turn one uncertain part of the round into something observable.',
    check: 'Next round, name one thing you can directly confirm before acting: a visible player, a sound, the timer, the bomb, or a teammate’s position.',
    route: 'lesson/information',
    routeLabel: 'Open facts and assumptions',
    terms: ['information', 'audio cue']
  }
};
