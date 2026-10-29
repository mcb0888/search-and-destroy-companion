/*
Search & Destroy Companion — Better Judgment built-in rules
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-1029-048

This file contains local, deterministic coaching rules. It does not call an AI
service, inspect the game, or send the player's account anywhere. Optional AI
requests are handled separately by companion.js and require an explicit bridge.
*/
window.SIDELINE_DATA = {
  meta: {
    version: '2.0.0',
    build: 'MB-SNDC-2026-1029-048',
    privacy: 'Conversation and session continuity stay in this browser. Nothing is sent to an AI provider automatically.'
  },
  examples: [
    'I died first pushing in',
    'I aced once going mid, then kept dying there',
    'I lost track of which bomb site was which',
    'I got shot from somewhere and did not know where'
  ],
  rules: [
    {
      id: 'blank-or-tilted',
      label: 'blank, frustrated, or unsure',
      keywords: ['no clue', 'do not know what to work on', "don't know what to work on", 'blank', 'tilted', 'frustrated', 'rage bait', 'angry at'],
      missing: 'The round, repeated behavior, and exact decision that caused the frustration are not identified yet.',
      inference: 'The useful starting point may be one observable event rather than a full explanation.',
      decision: 'Reduce the review to the first outside cue that changed the round.',
      check: 'On the next round, record only the first enemy contact, bomb update, or unexplained damage indicator you notice.',
      route: 'lesson/information',
      routeLabel: 'Open facts and assumptions',
      terms: ['information', 'audio cue']
    },
    {
      id: 'pre-round-plan',
      label: 'pre-round planning',
      keywords: ['what should i watch', 'this round', 'pre round', 'preround', 'before the round', 'round plan', 'what is the plan', 'what should we do'],
      missing: 'The map geometry, enemy setup, teammate positions, and opening route are not confirmed.',
      inference: 'A useful plan can still begin with the first exposure and the responsibility that must not be abandoned.',
      decision: 'Choose one first check and one responsibility before movement begins.',
      check: 'Before leaving spawn, name the first opening that can see your route and the teammate or objective responsibility you will keep connected to.',
      route: 'quick/round-start',
      routeLabel: 'Open the round-start check',
      terms: ['sightline', 'entry', 'information']
    },
    {
      id: 'repeat-route',
      label: 'repeating the same opening route',
      keywords: ['middle every round', 'mid every round', 'same lane every round', 'same route every round', 'keep running middle', 'kept running middle', 'they expect me mid', 'same opening route', 'aced once', 'got an ace', 'worked the first round', 'worked once', 'must be hacking', 'they are hacking', "they're hacking", 'run the ones', 'spawn trapping proves'],
      missing: 'The enemy position and timing are not confirmed, and one successful round does not show whether the route was repeatable.',
      inference: 'The first success may have used surprise. Repeating the same lane and timing can give the other team a prepared first shot without requiring any unusual explanation.',
      decision: 'Separate the good result from the quality of the repeated decision.',
      check: 'Next round, change exactly one part of the first exposure—the lane, timing, height, or stopping point—and notice whether the enemy was waiting for the old version.',
      commonTrap: 'An ace proves you won those fights. It does not prove that charging the same route every round is a strong S&D habit. The enemy gets to learn from the first round too.',
      route: 'lesson/decision-not-result',
      routeLabel: 'Open result versus decision',
      terms: ['adaptation', 'timing', 'pre-aim', 'autopilot']
    },
    {
      id: 'attacker-support',
      label: 'attacker entry and support',
      keywords: ['on offense', 'on offence', 'attacking', 'attack side', 'pushing site', 'entering site', 'bomb carrier'],
      missing: 'The chosen site, first blocking position, bomb carrier, and teammate spacing are not confirmed.',
      inference: 'The attack may be losing connection between the first player, support, and the bomb.',
      decision: 'Connect the first exposure to immediate support.',
      check: 'Before entering the first contested area, confirm one teammate is close enough to respond without standing in the same line of fire.',
      route: 'lesson/support-and-trades',
      routeLabel: 'Open support and trades',
      terms: ['entry', 'trade', 'spacing']
    },
    {
      id: 'defender-patience',
      label: 'defender responsibility',
      keywords: ['on defense', 'on defence', 'defending', 'defend side', 'holding site', 'left my site', 'camping'],
      missing: 'The protected site, teammate coverage, bomb information, and reason to leave are not confirmed.',
      inference: 'Movement may be replacing a useful defensive responsibility before the round provides a reason.',
      decision: 'Keep the site responsibility until evidence changes it.',
      check: 'Before leaving the defended area, confirm one real reason: the bomb, teammate contact, visible enemies, or a called rotation.',
      commonTrap: 'A quiet site can feel like wasted time. Leaving it without new information often opens the exact route the defender was meant to protect.',
      route: 'lesson/defender-job',
      routeLabel: 'Open the defender’s job',
      terms: ['defender', 'anchor', 'rotation', 'information']
    },
    {
      id: 'rotation-decision',
      label: 'rotation timing',
      keywords: ['rotate', 'rotation', 'rotated', 'wrong site', 'went to the other site', 'left too early', 'late rotate'],
      missing: 'The bomb location, teammate contact, remaining players, and timing of the move are not confirmed.',
      inference: 'The rotation may have started from expectation rather than evidence.',
      decision: 'Tie the rotation to a confirmed change in the round.',
      check: 'Before rotating, name the evidence that changed your responsibility; if you cannot name one, keep the current coverage for one more information check.',
      route: 'lesson/information',
      routeLabel: 'Open information decisions',
      terms: ['rotation', 'information', 'timing']
    },
    {
      id: 'trade-spacing',
      label: 'trade distance and spacing',
      keywords: ['could not trade', "couldn't trade", 'too far behind', 'both died', 'same grenade', 'same spray', 'trade my teammate', 'support them'],
      missing: 'The distance, visible route, cover, and whether both players were exposed to one attack are not confirmed.',
      inference: 'The pair may have been too far apart to respond or too close to avoid one attack defeating both.',
      decision: 'Use spacing that supports without stacking the same exposure.',
      check: 'On the next paired route, stay close enough to see the first player’s fight but offset far enough that one burst or grenade cannot hit both of you.',
      route: 'lesson/support-and-trades',
      routeLabel: 'Open support and spacing',
      terms: ['trade', 'spacing', 'cover']
    },
    {
      id: 'role-responsibility',
      label: 'role responsibility',
      keywords: ['what is my role', 'what should my role', 'my role', 'entry player', 'anchor', 'support player', 'carry bomb'],
      missing: 'The team plan, weapon, spawn, and responsibility already covered by teammates are not confirmed.',
      inference: 'A role label is less useful than one responsibility that survives the opening route.',
      decision: 'Define the role by one observable responsibility.',
      check: 'Before the round, finish this sentence with one action: “My job is to ___ until the bomb or confirmed contact changes it.”',
      route: 'lesson/support-and-trades',
      routeLabel: 'Open teammate responsibilities',
      terms: ['entry', 'anchor', 'bomb carrier', 'adaptation']
    },
    {
      id: 'vod-note-review',
      label: 'VOD or clip-note review',
      keywords: ['vod note', 'video note', 'clip note', 'timestamp', 'screenshot', 'frame', 'footage', 'review this clip'],
      missing: 'A note does not automatically prove intent, communication, exact timing, or what was outside the recorded frame.',
      inference: 'The supplied material may support one observable decision point without supporting a complete tactical story.',
      decision: 'Separate what the material directly shows from what it only suggests.',
      check: 'For the next note, record one visible action, one result, and one unanswered question without filling the gap with assumed intent.',
      route: 'lesson/information',
      routeLabel: 'Open the evidence rule',
      terms: ['information', 'timing', 'field note']
    },
    {
      id: 'site-orientation',
      label: 'bomb-site orientation',
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
      label: 'unknown damage direction',
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
      label: 'assumed teammate coverage',
      keywords: ['thought my teammate', 'teammate had that angle', 'thought they had', 'assumed my teammate', 'thought he had', 'thought she had'],
      missing: 'The teammate’s actual view, distance, weapon readiness, and whether they agreed to watch that direction are unknown.',
      inference: 'Support may have been assumed instead of confirmed.',
      decision: 'Confirm coverage before treating an angle as safe.',
      check: 'Before crossing, check whether the teammate is visibly aimed at that opening; if not, treat it as unchecked.',
      commonTrap: 'A nearby teammate is not automatically covering your opening. If their weapon is pointed somewhere else, that route is still yours to check.',
      route: 'lesson/support-and-trades',
      routeLabel: 'Open teammate support',
      terms: ['angle', 'trade', 'spacing']
    },
    {
      id: 'early-push',
      label: 'early unsupported contact',
      keywords: ['died first', 'first death', 'first one dead', 'pushing in', 'pushed in', 'rushed in', 'rushed because', 'sprinted in', 'ran in'],
      missing: 'The first enemy position, whether the weapon was ready, and whether teammate support was close enough are not confirmed.',
      inference: 'Movement may have continued into possible contact before enough information was available.',
      decision: 'Choose the first point where speed stops helping.',
      check: 'Before the first place an enemy can see you, release sprint and aim at the nearest likely opening.',
      commonTrap: 'A surprising number of deaths begin by sprinting from cover into open ground without checking the first lane that can see it.',
      route: 'quick/dying-early',
      routeLabel: 'Open early-round help',
      terms: ['pre-aim', 'sightline', 'entry']
    },
    {
      id: 'repeat-peek',
      label: 'repeat exposure',
      keywords: ['peeked again', 'peek again', 're-peek', 'repeek', 'same angle again', 'looked again from'],
      missing: 'It is not confirmed whether the enemy stayed aimed at the position or whether another exit was available.',
      inference: 'The second appearance may have been predictable after the first contact.',
      decision: 'Change the second exposure after your position is known.',
      check: 'After first contact, use a different position, height, or delay before showing yourself again.',
      commonTrap: 'Looking from the same opening again lets the enemy aim before you appear. The second peek is rarely the same fight as the first.',
      route: 'fight/repeek',
      routeLabel: 'Open the re-peek correction',
      terms: ['re-peek', 'reposition']
    },
    {
      id: 'unsafe-reload',
      label: 'unsafe reload',
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
      label: 'chasing damage',
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
      label: 'post-plant positioning',
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
      label: 'retake sequencing',
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
      label: 'last-alive round state',
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
      label: 'late timer check',
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
    label: 'unclassified uncertainty',
    missing: 'The decisive position, timing, and information available at the choice are not clear from this fragment.',
    inference: 'One uncertain detail may be carrying more weight than the account can support.',
    decision: 'Turn one uncertain part of the round into something observable.',
    check: 'Next round, name one thing you can directly confirm before acting: a visible player, a sound, the timer, the bomb, or a teammate’s position.',
    route: 'lesson/information',
    routeLabel: 'Open facts and assumptions',
    terms: ['information', 'audio cue']
  }
};
