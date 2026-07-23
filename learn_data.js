/*
Search & Destroy Companion — Beginner learning data
Copyright © 2026 Michael Barnes. All Rights Reserved.
Build MB-SNDC-2026-0723-034
*/
window.LEARN_DATA = {
  quick: [
    {
      id: 'round-start',
      title: 'The round just started',
      short: 'Slow down before the first dangerous area.',
      action: 'Check your side, the bomb carrier, the player count, the timer, and the first place an enemy could appear. Do not sprint blindly into contact.',
      why: 'Search & Destroy gives you one life per round. The opening is about arriving ready, not merely arriving first.',
      steps: ['Know whether you are attacking or defending', 'Locate the bomb carrier', 'Choose nearby cover and an escape route', 'Aim where an enemy is likely to appear before moving out'],
      terms: ['attacker', 'defender', 'pre-aim', 'angle']
    },
    {
      id: 'attacking',
      title: 'I am attacking',
      short: 'Protect the bomb and create a safe path to a site.',
      action: 'Let one player clear the first danger, keep a second player close enough to help, and keep the bomb carrier out of the first unnecessary fight.',
      why: 'Attackers can win by eliminating the defenders or by planting and defending the bomb. Losing the bomb in open space makes both jobs harder.',
      steps: ['Choose a site or gather information before committing', 'Move through dangerous areas with support', 'Plant only when nearby threats are controlled', 'After planting, defend the bomb and the timer instead of chasing'],
      terms: ['attacker', 'entry', 'trade', 'plant', 'post-plant']
    },
    {
      id: 'defending',
      title: 'I am defending',
      short: 'Protect both sites and make attackers prove where they are going.',
      action: 'Stay alive, watch your assigned area, and report how many enemies you actually see. Do not abandon a site because of one sound or one teammate guessing.',
      why: 'The attackers must plant before time expires. A living defender who delays and gives information is often more useful than a defender who chases one kill.',
      steps: ['Start with responsibility for a site or route', 'Use cover and avoid giving away an easy first death', 'Report confirmed enemy count and movement', 'Move to the other site only when the evidence is strong enough'],
      terms: ['defender', 'anchor', 'rotation', 'information']
    },
    {
      id: 'our-bomb-planted',
      title: 'We planted the bomb',
      short: 'Check the timer first. Defend the bomb from connected positions.',
      action: 'Take positions that can see or hear the bomb, support a teammate, or delay a required defender route. Do not leave the objective to hunt personal kills.',
      why: 'The defenders are now forced to enter, clear positions, reach the bomb, and complete a defuse before time expires. Make every one of those tasks slower.',
      steps: ['Check the bomb timer and player count', 'Confirm where the bomb can be watched or heard', 'Use two connected positions instead of standing together', 'Reveal yourself when it delays the defuse or protects a teammate'],
      terms: ['post-plant', 'crossfire', 'trade', 'defuse']
    },
    {
      id: 'enemy-bomb-planted',
      title: 'The enemy planted the bomb',
      short: 'Check time, group up, and clear the site in an order.',
      action: 'Decide whether there is enough time to group, clear threats, and complete the defuse. Use equipment to remove the first problem, enter together, and protect the player who defuses.',
      why: 'A recovery attempt fails when defenders enter one at a time or begin defusing while enemies still have a clear shot.',
      steps: ['Check timer, player count, and bomb location', 'Choose one shared entrance or two entrances with matching timing', 'Use equipment on the position blocking the entry', 'Clear immediate threats, then defuse while a teammate covers'],
      terms: ['retake', 'defuse', 'utility', 'trade']
    },
    {
      id: 'last-alive',
      title: 'I am the last teammate alive',
      short: 'Stop, breathe, and solve only the next problem.',
      action: 'Check the timer, bomb status, player count, and last confirmed enemy positions. Choose one useful action: reach cover, recover the bomb, isolate one enemy, plant, defuse, or listen.',
      why: 'Trying to solve the entire round at once creates panic. A difficult round is still a sequence of small decisions.',
      steps: ['Ignore guesses from eliminated teammates', 'Use confirmed information only', 'Avoid fighting several enemies at once', 'Let the objective and timer force enemies into predictable actions'],
      terms: ['last alive', 'clutch', 'isolate', 'xvx']
    },
    {
      id: 'player-advantage',
      title: 'We have more players alive',
      short: 'Stay connected and make the enemy take the risk.',
      action: 'Move close enough to help one another, protect the objective, and guard likely exits. Do not donate separate one-on-one fights.',
      why: 'A player advantage matters only while teammates can respond to the same fight.',
      steps: ['Count both teams', 'Close unnecessary distance between teammates', 'Hold connected areas', 'Use time and the objective instead of chasing'],
      terms: ['numbers advantage', 'trade', 'xvx']
    },
    {
      id: 'player-disadvantage',
      title: 'We have fewer players alive',
      short: 'Do not fight the whole team at once.',
      action: 'Change position, use cover, and try to make one enemy fight before the others can help. Use the bomb and timer to make opponents move.',
      why: 'Outnumbered rounds are won by creating separate decisions, not by accepting several guns at once.',
      steps: ['Disappear from your last known position', 'Use cover to remove extra sightlines', 'Take the safest isolated fight available', 'Reposition again before the remaining enemies arrive'],
      terms: ['isolate', 'reposition', 'xvx']
    },
    {
      id: 'team-noise',
      title: 'The team is talking too much',
      short: 'One useful fact, then silence.',
      action: 'Say how many enemies, where they are, which direction they are moving, and whether they are injured. Stop after the useful information.',
      why: 'Constant talking hides footsteps and gives living teammates more decisions instead of better information.',
      steps: ['Use confirmed information', 'Keep the message short', 'Do not replay your death', 'Let the living player hear the game'],
      terms: ['callout', 'information', 'last alive']
    },
    {
      id: 'dying-early',
      title: 'I keep dying near the start',
      short: 'Reach the first fight with your weapon ready and an escape route.',
      action: 'For the first twenty seconds, sprint only through space you have reason to believe is safe. Slow before danger, aim first, and expose one direction at a time.',
      why: 'Many early deaths happen before aim becomes the main problem. Speed, exposure, and lack of information create the easy shot.',
      steps: ['Identify the first dangerous crossing', 'Stop sprinting before exposure', 'Pre-aim the likely enemy position', 'Use cover so only one direction can see you'],
      terms: ['pre-aim', 'angle', 'cover', 'sightline']
    }
  ],
  lessons: [
    {
      id: 'mode-basics',
      title: 'How Search & Destroy works',
      subtitle: 'One life, two bomb sites, and several ways to win.',
      takeaway: 'Every round is an objective problem first and a gunfight problem second.',
      sections: [
        ['The basic loop', 'One team attacks and one team defends. Players do not respawn during the round. Teams switch sides during the match.'],
        ['How attackers win', 'Eliminate all defenders before the bomb is planted, or plant the bomb and prevent a successful defuse.'],
        ['How defenders win', 'Eliminate all attackers before a plant, prevent the plant until the round timer expires, or defuse the bomb after it is planted.'],
        ['The important exception', 'If attackers are eliminated after the bomb is planted, defenders still have to defuse it. The objective remains alive even when the attacking team does not.']
      ],
      mistakes: ['Playing as if another life is coming immediately', 'Forgetting which team benefits from the timer', 'Chasing kills after the objective already creates pressure'],
      terms: ['attacker', 'defender', 'plant', 'defuse', 'round']
    },
    {
      id: 'one-life',
      title: 'Why one life changes every decision',
      subtitle: 'Survival preserves information, pressure, and teammate options.',
      takeaway: 'Do not confuse being active with being useful.',
      sections: [
        ['A death changes the whole round', 'Losing one player removes a weapon, a set of equipment, a source of information, and the ability to help a teammate.'],
        ['Use the available time', 'You usually have more time than panic suggests. Move quickly through known safety and carefully near possible contact.'],
        ['Plan an exit', 'Before exposing yourself, know what cover or route lets you leave if the first shots go badly.'],
        ['Survival is not hiding', 'Staying alive is useful only when you still protect the objective, gather information, support teammates, or threaten a route.']
      ],
      mistakes: ['Sprinting because the round feels quiet', 'Forcing every contact until someone dies', 'Hiding so far away that teammates cannot be helped'],
      terms: ['play your life', 'disengage', 'cover', 'reposition']
    },
    {
      id: 'attacker-job',
      title: 'The attacker’s real job',
      subtitle: 'Create a safe plant without throwing away the bomb.',
      takeaway: 'The bomb carrier is part of the plan, not a delivery service expected to survive nonsense.',
      sections: [
        ['Choose with information', 'A team can attack quickly or gather information first, but the bomb should move with a reason.'],
        ['Open dangerous space', 'The first player checks the nearest threats. A second player follows close enough to help, but not so close that one burst or grenade defeats both.'],
        ['Protect the bomb', 'The carrier should avoid unnecessary opening fights and plant only after enough nearby danger has been controlled.'],
        ['Change after contact', 'If defenders reveal several players or heavy equipment at one site, pause and decide whether to continue, wait, or move elsewhere.']
      ],
      mistakes: ['Letting the bomb carrier lead into unknown space', 'Standing on top of the first player instead of supporting with spacing', 'Continuing a failed attack because the team already started it'],
      terms: ['entry', 'trade', 'spacing', 'rotation', 'bomb carrier']
    },
    {
      id: 'defender-job',
      title: 'The defender’s real job',
      subtitle: 'Delay, survive, and make attackers reveal the plan.',
      takeaway: 'A defender who stays alive and reports the attack can save a site without winning the first gunfight.',
      sections: [
        ['Protect responsibilities', 'Start with a site, route, or supporting position that the team expects you to cover.'],
        ['Do not rotate on fear', 'One footstep, grenade, or teammate guess does not always prove the entire attack is there.'],
        ['Give useful information', 'Report enemy count, direction, bomb sighting, and equipment. This lets support arrive for the right reason.'],
        ['Delay when outnumbered', 'Use cover and equipment to slow the attackers. Staying alive for several more seconds may matter more than forcing a low-percentage fight.']
      ],
      mistakes: ['Abandoning a site too early', 'Chasing attackers away from the area you were assigned to protect', 'Dying without saying how many enemies were present'],
      terms: ['anchor', 'rotation', 'information', 'utility']
    },
    {
      id: 'information',
      title: 'Information is a weapon',
      subtitle: 'Sound, the minimap, the timer, and teammate deaths all change the plan.',
      takeaway: 'The better decision usually belongs to the player who has reduced uncertainty first.',
      sections: [
        ['Listen for a question', 'Do not merely hear noise. Listen for direction, distance, number of players, equipment, planting, or defusing.'],
        ['Use the minimap and feed', 'A teammate death, bomb icon, or missing route may tell you more than the doorway on your screen.'],
        ['Separate facts from guesses', '“Three at B” is information. “They must all be B” is a prediction and should be treated differently.'],
        ['Reset after important events', 'After a kill, death, plant, explosion, or long silence, ask what changed and whether the old plan still fits.']
      ],
      mistakes: ['Talking over footsteps', 'Repeating guesses until they sound confirmed', 'Holding one angle so long that the entire round changes unnoticed'],
      terms: ['information', 'callout', 'audio cue', 'rotation']
    },
    {
      id: 'support-and-trades',
      title: 'How teammates support one another',
      subtitle: 'Close enough to help, far enough apart to avoid one shared death.',
      takeaway: 'Good teamwork is connected spacing, not five players occupying the same doorway.',
      sections: [
        ['The first player', 'The first player exposes the nearest danger and creates information.'],
        ['The supporting player', 'The second player watches a different part of the same problem and can immediately respond if the first player is eliminated.'],
        ['Correct spacing', 'Stay close enough to see or reach the fight quickly, but far enough apart that one enemy, grenade, or line of fire cannot defeat both at once.'],
        ['After the first fight', 'Do not stop in the same exposed place. Clear the next threat, protect the bomb, or move to cover before reloading.']
      ],
      mistakes: ['Following too far behind to help', 'Standing directly behind a teammate and blocking movement', 'Both players watching the exact same angle'],
      terms: ['entry', 'trade', 'spacing', 'crossfire']
    },
    {
      id: 'bomb-and-time',
      title: 'The bomb and timer decide the round',
      subtitle: 'Time helps one side and pressures the other.',
      takeaway: 'Check who benefits from waiting before deciding to move.',
      sections: [
        ['Before the plant', 'Attackers need enough time to reach a site and complete the plant. Defenders benefit when the clock runs down without a plant.'],
        ['During the plant', 'The bomb carrier cannot defend normally while planting. Nearby teammates must control the immediate threats.'],
        ['After the plant', 'Attackers benefit from the bomb timer. Defenders must clear positions, reach the bomb, and finish the defuse before it expires.'],
        ['Timer decisions', 'Before chasing, rotating, planting, or defusing, check whether the action can actually finish in the time remaining.']
      ],
      mistakes: ['Checking the timer only when it becomes desperate', 'Taking a long route too late', 'Leaving the planted bomb to hunt a player who must eventually return'],
      terms: ['plant', 'defuse', 'post-plant', 'retake']
    },
    {
      id: 'post-plant',
      title: 'What to do after planting',
      subtitle: 'Defend the bomb from connected positions and use the timer.',
      takeaway: 'The goal is not to stand near the bomb. The goal is to make the defuse impossible or too slow.',
      sections: [
        ['Choose useful positions', 'A position should see or hear the bomb, protect a teammate, or control a route defenders must use.'],
        ['Create connected angles', 'Two players in different positions should be able to attack the same defender without standing together.'],
        ['Do not reveal yourself early', 'Make the defender clear space, approach the bomb, or begin the defuse before giving away an easy fight.'],
        ['Use sound and timer', 'Planting and defusing create information. A defender touching the bomb may be the moment to attack or force them away.']
      ],
      mistakes: ['Standing directly on the bomb after planting', 'Both teammates watching the same direction', 'Chasing the final defender away from the objective'],
      terms: ['post-plant', 'crossfire', 'audio cue', 'defuse']
    },
    {
      id: 'retake',
      title: 'How to recover a planted site',
      subtitle: 'Check time, group, solve the first obstacle, then defuse.',
      takeaway: 'A coordinated late entry is usually stronger than several early solo entries.',
      sections: [
        ['Start with the timer', 'Count the time required to reach the site, clear danger, and complete the defuse. The remaining time decides how patient the team can be.'],
        ['Group without stacking', 'Enter close enough to help each other, but use separate cover and angles.'],
        ['Use equipment for a purpose', 'Choose the grenade or tactical item that removes the first defender position, then move while it has an effect.'],
        ['Protect the defuse', 'One player may begin defusing while a teammate watches the likely attacker position, but only when the risk and timer make that decision sensible.']
      ],
      mistakes: ['Entering one player at a time', 'Using every piece of equipment before identifying a problem', 'Starting the defuse while obvious threats still have a clear shot'],
      terms: ['retake', 'defuse', 'utility', 'trade']
    },
    {
      id: 'last-alive',
      title: 'Playing while last alive',
      subtitle: 'Use the objective to simplify an unfair situation.',
      takeaway: 'You do not need a perfect plan. You need the next useful action.',
      sections: [
        ['Collect the round state', 'Check timer, bomb, player count, health, equipment, and last confirmed enemy positions.'],
        ['Avoid several enemies at once', 'Use cover, doors, and movement to make one opponent appear before the others can help.'],
        ['Change your known position', 'After firing or being seen, assume the enemy will aim at that place. Move before the next fight when possible.'],
        ['Let the objective create movement', 'Planting, defending the bomb, or threatening a defuse can force enemies to reveal themselves.']
      ],
      mistakes: ['Listening to several eliminated teammates at once', 'Rushing because the situation feels uncomfortable', 'Staying in the last place the enemy saw you'],
      terms: ['last alive', 'clutch', 'isolate', 'reposition']
    },
    {
      id: 'adapt-between-rounds',
      title: 'Learn the enemy between rounds',
      subtitle: 'Every successful play teaches the other team something.',
      takeaway: 'A route that worked once is evidence, not a permanent rule.',
      sections: [
        ['Remember repeated behavior', 'Notice where defenders hold, when attackers rush, who carries the bomb, and which equipment appears early.'],
        ['Change one variable', 'Adjust timing, position, equipment, or teammate support instead of inventing an entirely new plan every round.'],
        ['Use expectations', 'Sometimes repeating a successful play is useful because the enemy expects you to change. The point is to choose, not to repeat automatically.'],
        ['Share neutral observations', '“They used two grenades at B early” helps. “They are annoying campers” does not produce a decision.']
      ],
      mistakes: ['Repeating the same opening because it worked once', 'Changing everything after one failure', 'Turning an observation into an insult instead of a counter-plan'],
      terms: ['timing', 'adaptation', 'utility', 'information']
    },
    {
      id: 'learning-without-abuse',
      title: 'How to improve without learning through abuse',
      subtitle: 'Random criticism is not a training system.',
      takeaway: 'A mistake becomes useful when it turns into one specific replacement action.',
      sections: [
        ['Separate information from insults', 'A teammate may notice a real problem and still communicate it badly. Keep the useful fact and discard the attack.'],
        ['Choose one skill at a time', 'Work on surviving the opening, checking the timer, supporting a teammate, or using cover. Trying to repair everything at once creates noise.'],
        ['Use a short review', 'After a round, ask what you knew, what could see you, what the objective required, and what one action would improve the next attempt.'],
        ['Measure decisions, not only kills', 'A round can include a good decision and a lost fight. Improvement appears first in repeatable choices, then in results.']
      ],
      mistakes: ['Treating every insult as expert advice', 'Using rank or kills as the only measure of progress', 'Changing controls, loadout, route, and play style all at once'],
      terms: ['mission', 'field note', 'autopilot', 'adaptation']
    }
  ],
  terms: [
    ['attacker', 'Attacker', 'A player on the team that must plant the bomb or eliminate the defenders.'],
    ['defender', 'Defender', 'A player on the team protecting the bomb sites and preventing or defusing the plant.'],
    ['round', 'Round', 'One no-respawn segment of the match. Players return when the next round begins.'],
    ['bomb carrier', 'Bomb carrier', 'The attacker currently holding the bomb. The bomb drops if that player is eliminated before planting.'],
    ['plant', 'Plant', 'Placing the bomb at site A or B. The player planting cannot fight normally during the action.'],
    ['defuse', 'Defuse', 'The defending action that stops the planted bomb. The player defusing cannot fight normally during the action.'],
    ['post-plant', 'Post-plant', 'The part of the round after attackers have planted the bomb.'],
    ['retake', 'Retake', 'A defending attempt to regain a planted bomb site and complete the defuse.'],
    ['last alive', 'Last alive', 'The final living player on a team.'],
    ['clutch', 'Clutch', 'Winning a round from a disadvantage, often while outnumbered or last alive.'],
    ['xvx', 'XvX', 'A quick player-count description such as 2v3: two players alive against three.'],
    ['numbers advantage', 'Numbers advantage', 'Having more living players than the opposing team.'],
    ['entry', 'Entry player', 'The first player who moves into contested space and checks the nearest threats.'],
    ['trade', 'Trade', 'Eliminating the enemy who just eliminated a teammate, or staying close enough to make that response possible.'],
    ['spacing', 'Spacing', 'The distance between teammates. Good spacing allows support without letting one attack defeat both players.'],
    ['crossfire', 'Crossfire', 'Two connected positions that can attack the same enemy from different directions.'],
    ['anchor', 'Anchor', 'A defender who remains responsible for a site or area and delays or reports enemy movement.'],
    ['rotation', 'Rotation', 'Moving from one site or responsibility to another because the round state changed.'],
    ['pre-aim', 'Pre-aim', 'Aiming at a likely enemy position before exposing yourself.'],
    ['angle', 'Angle', 'A direction or position from which a player can see and shoot another area.'],
    ['sightline', 'Sightline', 'The visible path connecting a player to another area.'],
    ['cover', 'Cover', 'An object or structure that blocks bullets and reduces how much of you is visible.'],
    ['re-peek', 'Re-peek', 'Showing yourself again after an enemy already knows where you appeared.'],
    ['strafe', 'Strafe', 'Moving sideways while keeping attention or aim on a threat.'],
    ['disengage', 'Disengage', 'Breaking contact and leaving a fight instead of forcing it to continue.'],
    ['reposition', 'Reposition', 'Moving to a different place after being seen, firing, taking damage, or gaining information.'],
    ['isolate', 'Isolate a fight', 'Using cover, distance, or timing so only one enemy can fight you at a time.'],
    ['utility', 'Utility', 'Grenades, tactical equipment, and other tools used to damage, reveal, block, delay, or force movement.'],
    ['information', 'Information', 'Any confirmed clue that reduces uncertainty about players, routes, timing, equipment, or the objective.'],
    ['callout', 'Callout', 'A short spoken message that gives useful information such as enemy count, location, direction, health, or bomb status.'],
    ['audio cue', 'Audio cue', 'A useful game sound, such as footsteps, equipment, planting, or defusing.'],
    ['timing', 'Timing', 'The relationship between when players move, arrive, look away, reload, plant, defuse, or attack.'],
    ['adaptation', 'Adaptation', 'Changing a decision because the enemy, teammates, time, or objective state changed.'],
    ['play your life', 'Play your life', 'Preserve your life when survival keeps pressure, information, objective control, or teammate support. It does not mean hiding without purpose.'],
    ['autopilot', 'Autopilot', 'Playing from habit without checking whether the current round still supports the same action.'],
    ['mission', 'Mission', 'One small skill or behavior chosen for deliberate practice during several rounds.'],
    ['field note', 'Field note', 'A short observation recorded after a round or match so a mistake can become a specific adjustment.']
  ].map(([id, term, definition]) => ({id, term, definition}))
};
