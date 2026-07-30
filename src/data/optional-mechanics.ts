export interface OptionalMechanic {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  whenToUse: string;
  example: string;
  tags: string[];
}

export const optionalMechanics: OptionalMechanic[] = [
  {
    id: "momentum-bank",
    name: "Momentum Bank",
    tagline: "Build up. Cash in.",
    summary: "A shared group resource that rewards consistent storytelling and creative action.",
    description: "The group maintains a shared Momentum Bank: a pool of tokens or tallies. Whenever a player achieves a Full Success (a 6 on their highest die), they may bank one Momentum instead of spending it immediately. When any player faces a Desperate or Risky position roll, they may withdraw Momentum from the Bank to upgrade their position by one step before rolling. The Bank has a maximum capacity equal to the number of players. Momentum in the Bank resets to zero at the start of each new session.",
    whenToUse: "Add this to any campaign where you want to encourage the players to think as a team rather than individually. Particularly effective in heist, ensemble, and war-band scenarios.",
    example: "Three players are planning a break-in. Over the previous scene, two of them banked Momentum from successful scouting rolls. When the third player attempts the critical safe-cracking roll from a Risky position, they withdraw both Momentum to push it to Controlled.",
    tags: ["Teamwork", "Resource Management", "Any Genre"]
  },
  {
    id: "flashback-frame",
    name: "Flashback Frame",
    tagline: "You prepared for this. Show us when.",
    summary: "Let players retroactively establish that their character prepared for a situation before it began.",
    description: "Once per scene, a player may call a Flashback Frame before making a roll. They describe a brief scene from the past in which their character made a preparation relevant to the current situation. The Storyteller assigns the flashback a difficulty (Simple, Risky, or Desperate). The player rolls for the flashback result immediately, modifying their position in the present scene.",
    whenToUse: "Use this when your players are creative improvisers who feel constrained by 'I should have thought of that earlier.' It rewards players who are paying attention to the fiction.",
    example: "A spy is caught at the border without papers. Before rolling, she calls a Flashback Frame: 'Three weeks ago I bribed a contact here.' She rolls for the bribe: Partial Success.",
    tags: ["Narrative", "Improvisation", "Any Genre"]
  },
  {
    id: "escalating-stakes",
    name: "Escalating Stakes",
    tagline: "Every success raises the cost of the next failure.",
    summary: "A mechanic that builds narrative tension by tracking how high the stakes have climbed in a conflict.",
    description: "At the start of any extended conflict, the Storyteller places a Stakes Track on the table (1 to 5). Every time a character achieves a Full Success or suffers a Failure, the track advances. Characters use the current Stakes number as a modifier to the severity of consequences.",
    whenToUse: "Excellent for political negotiations, heists in progress, and chases where early successes create overconfidence.",
    example: "A smuggler is arguing her case before a tribunal. Early wins push the Stakes Track to 3. When her partner then fails a bluff roll, the consequence is dramatic.",
    tags: ["Tension", "Conflict", "Dramatic Pacing"]
  },
  {
    id: "wound-clock",
    name: "Wound Clock",
    tagline: "Harm compounds. The clock doesn't stop.",
    summary: "Track cumulative physical harm with a four-segment clock that generates escalating narrative consequences.",
    description: "Each character maintains a Wound Clock divided into four segments. Each time a character takes physical harm, advance the clock by one segment. Segment 1 = graze; segment 2 = real wound (-1 die on physical rolls); segment 3 = severe injury (worse position); segment 4 = incapacitated.",
    whenToUse: "Use when you want harm to feel consequential and cumulative without requiring a complex hit point system.",
    example: "A soldier takes two hits in a forest ambush (clock at 2). She tries to treat herself between scenes and rolls a Partial Success.",
    tags: ["Survival", "Combat", "Harm Tracking"]
  },
  {
    id: "reputation-web",
    name: "Reputation Web",
    tagline: "How you're known shapes what you can do.",
    summary: "Track your character's standing with different factions using a simple three-tier web.",
    description: "Each character maintains a Reputation Web of relevant factions rated Trusted (green), Neutral (blank), or Wanted (red). Trusted factions offer help without a roll; Wanted factions escalate position to Desperate.",
    whenToUse: "Add this to any setting with meaningful political or social complexity: spy thrillers, political intrigue, faction wars.",
    example: "A fixer is Trusted by street gangs and Wanted by corporate police. Entering the corporate district worsens her position to Desperate.",
    tags: ["Social", "Political Intrigue", "Factions"]
  },
  {
    id: "ticking-clock",
    name: "Ticking Clock",
    tagline: "Every action burns time. Time runs out.",
    summary: "A structured countdown that drives urgency and shapes decision-making across an entire session.",
    description: "The Storyteller establishes a countdown from 3 to 8. Failed rolls or Desperate partial successes advance the clock. When it reaches zero, the threatened disaster strikes.",
    whenToUse: "Essential for any session with a time-sensitive objective.",
    example: "The ritual clock sits at 5. The players fail a roll deciphering cult notes: clock advances to 4.",
    tags: ["Tension", "Time Pressure", "Any Genre"]
  },
  {
    id: "emotional-burden",
    name: "Emotional Burden",
    tagline: "What you carry shapes how you act.",
    summary: "Track the psychological weight of difficult decisions with a personal Burden track.",
    description: "Witnessing loss or making morally costly choices marks boxes on a 5-box Burden track. High burden narrows approach choices; filling the track triggers a Breaking Point.",
    whenToUse: "Use in campaigns where moral complexity and emotional consequences matter.",
    example: "A soldier has 4 Burden from hard choices. After a quiet moment with a villager she protected, she clears one box.",
    tags: ["Drama", "Character Development", "Psychological"]
  },
  {
    id: "cooperative-roll",
    name: "Cooperative Roll",
    tagline: "Together you roll more. Together you share the risk.",
    summary: "A formalized structure for characters assisting each other with shared risk.",
    description: "An assisting character contributes their approach dice to the lead character's pool, but both characters share the consequence if the roll fails or partially succeeds.",
    whenToUse: "Works in any setting and replaces 'I help' with genuine stakes.",
    example: "A doctor performs emergency surgery in a moving vehicle while a pilot holds it steady. A Partial Success means surgery succeeds but both take a bump.",
    tags: ["Teamwork", "Collaborative", "Any Genre"]
  },
  {
    id: "legacy-move",
    name: "Legacy Move",
    tagline: "One moment that echoes through everything that follows.",
    summary: "Declare a single, permanently story-changing action at full cost to gain a lasting benefit.",
    description: "Once per campaign arc, a character may declare a Legacy Move: an action with permanent consequence rolled with full pool regardless of position.",
    whenToUse: "Use at climactic moments: the end of a story arc or defining confrontation.",
    example: "A revolutionary speaks against a tyrant. Partial Success: inspires the crowd but draws targeted pursuit. Gains Descriptor 'Voice of the Plaza'.",
    tags: ["Character Development", "Dramatic", "Campaign Play"]
  },
  {
    id: "scene-pressure",
    name: "Scene Pressure",
    tagline: "The environment itself has an agenda.",
    summary: "Give every scene an active environmental pressure that degrades independently of player action.",
    description: "An environmental threat advances across three steps (Building → Critical → Erupted) unless players spend actions addressing it directly.",
    whenToUse: "Add to any scene in an active, hostile environment: burning buildings, storm-tossed ships, collapsing mines.",
    example: "Scene Pressure: 'The warehouse fire'. Two beats pass without addressing the flame: roof groans, escalating the danger.",
    tags: ["Environment", "Tension", "Pacing"]
  },
  // --- 40 NEW MECHANICS BELOW ---
  {
    id: "sanity-threshold",
    name: "Sanity Threshold",
    tagline: "Gaze into the abyss; hope it doesn't gaze back.",
    summary: "Track the mental toll of cosmic horror and eldritch truths with a deteriorating Sanity track.",
    description: "Characters maintain a 6-box Sanity track. Encountering eldritch monstrosities, forbidden lore, or unnatural phenomena forces a Sanity check. Failing marks boxes on the track. At 3 boxes marked, characters suffer temporary phobias or hallucinations (-1 die on Mind rolls). At 6 boxes marked, the character suffers a permanent psychological break or falls into eldritch madness.",
    whenToUse: "Essential for Cosmic Horror, Lovecraftian, Gothic, and Eldritch mystery campaigns.",
    example: "An investigator opens a tome bound in human skin. She fails her Mind roll and marks 2 Sanity boxes, causing her hands to tremble uncontrollable.",
    tags: ["Horror", "Psychological", "Sanity", "Cosmic"]
  },
  {
    id: "supply-ammo-die",
    name: "Supply & Ammo Die",
    tagline: "Abundance decays into scarcity.",
    summary: "Abstract resource counting into a single stepping Usage Die (d12 → d10 → d8 → d6 → d4 → Empty).",
    description: "Instead of tracking individual bullets, rations, or medical supplies, assign the pool a Usage Die (starting at d8 or d10). Whenever a player uses supplies or fires automatic weapons, roll the Usage Die alongside the action. On a 1 or 2, the Usage Die steps down to the next lower die size. When a d4 steps down, the supply is completely depleted.",
    whenToUse: "Great for survival horror, post-apocalyptic, wilderness exploration, and military rationing.",
    example: "A scavenger fires a burst at a mutant. Her Supply Die is d8. She rolls a 2 on the d8; her Supply Die steps down to d6 for future encounters.",
    tags: ["Survival", "Resource Management", "Scarcity"]
  },
  {
    id: "drive-passion",
    name: "Drive & Passion",
    tagline: "What fuels your heart overrides your limits.",
    summary: "Burn a personal oath or passion to turn a failure into a critical success once per session.",
    description: "Every character defines a core Drive (e.g., 'Protect my sister', 'Avenge the fallen guild'). Once per session, when a roll fails or results in a dire consequence while acting directly in service of their Drive, the player may invoke their Passion to treat the roll as a Full Success. Doing so causes the character to take 1 Emotional Burden.",
    whenToUse: "Use in heroic, tragic, or high-melodrama campaigns where character motivations drive the plot.",
    example: "A knight's defensive roll fails against a dragon's flame while shielding an orphan. He invokes his Drive ('Protect the innocent'), taking 1 Burden to turn the failure into a Full Success.",
    tags: ["Heroic", "Narrative", "Character Motivation"]
  },
  {
    id: "push-your-luck",
    name: "Push Your Luck",
    tagline: "Double down on victory, or crash twice as hard.",
    summary: "Reroll failed dice on a Partial Success, but risk catastrophic double-consequences.",
    description: "After rolling a Partial Success (where highest die is a 4 or 5), a player may choose to 'Push Their Luck.' They reroll all non-6 dice in their pool. If the new highest die is a 6, they achieve a Full Success. However, if the reroll contains no 5s or 6s, the position drops immediately to Desperate and consequences double.",
    whenToUse: "Ideal for high-stakes gambling, rogue-like crawls, heists, and swashbuckling adventure.",
    example: "A rogue rolls a 4 on a stealth check (Partial Success). She pushes her luck and rerolls the other dice. She gets a 6 and slips through unnoticed, but had she failed, the guards would have sounded the alarm immediately.",
    tags: ["Gambling", "Risk & Reward", "High-Stakes"]
  },
  {
    id: "debt-favor-economy",
    name: "Debt & Favor Economy",
    tagline: "Nothing in this city comes without a price tag.",
    summary: "Track social debts and favors as physical tokens that can be cashed in for immediate assistance.",
    description: "Characters track Favor Tokens earned by helping NPCs or factions, and Debt Tokens incurred when asking for desperate favors. Spending a Favor Token forces an NPC to grant assistance without a roll. Holding Debt Tokens allows the DM to call in a favor at any inconvenient narrative moment.",
    whenToUse: "Perfect for mafia sagas, cyberpunk, urban fantasy, political intrigue, and criminal underworlds.",
    example: "A fixer asks a corrupt mayor for a building permit. The mayor grants it, but the fixer gains 1 Debt Token. Later, the mayor calls in the debt during a murder investigation.",
    tags: ["Social", "Political Intrigue", "Underworld"]
  },
  {
    id: "elemental-resonance",
    name: "Elemental Resonance",
    tagline: "Align with the elements; ride the surging tide.",
    summary: "Build up elemental charges (Fire, Water, Earth, Air) that unleash devastating magical combos.",
    description: "Spellcasters track an Elemental Resonance wheel (Fire, Water, Earth, Air). Successfully casting a spell of a specific element builds 1 Resonance in that element. Spending 3 Resonance allows the player to trigger an Elemental Overdrive, doubling spell area or granting automatic full success.",
    whenToUse: "Designed for high-fantasy, martial arts elementalism, and elemental magic campaigns.",
    example: "A pyromancer casts two fire bolts (2 Fire Resonance). On her third turn, she casts a fireball and spends 3 Fire Resonance to incinerate the enemy shield wall.",
    tags: ["Magic", "Fantasy", "Elemental"]
  },
  {
    id: "cyberware-heat",
    name: "Cyberware Heat",
    tagline: "Chrome wears down the meat.",
    summary: "Track the neural strain and thermal heat of cybernetic implants during high-intensity combat.",
    description: "Every active cybernetic activation adds 1 Heat point to a 6-point Heat Meter. At 4 Heat, the character suffers Glitch glitches (-1 die on precision rolls). At 6 Heat, the implants short-circuit, dealing internal damage and forcing a shutdown until cooled.",
    whenToUse: "Essential for Cyberpunk, Sci-Fi, and Transhumanist settings.",
    example: "A street samurai activates optical camouflage and reflex boosters in the same turn, gaining 2 Heat. The implants hum hot against his skull.",
    tags: ["Cyberpunk", "Sci-Fi", "Tech"]
  },
  {
    id: "squad-morale",
    name: "Squad Morale",
    tagline: "A army marches on its spirit, not just its boots.",
    summary: "Track the collective nerve and discipline of allied troops or mercenary retinues.",
    description: "Military units and retinues share a 5-point Squad Morale track. Casualties, terrifying monsters, or leader failures reduce Morale. At Morale 2, troops suffer hesitation (-1 die on actions). At Morale 0, the unit routs and flees the battlefield.",
    whenToUse: "Great for mass battles, war-band sagas, mercenary campaigns, and naval boarding actions.",
    example: "A dragon roars over a line of pikemen. The squad fails a Morale check and Morale drops from 4 to 2, causing ranks to break.",
    tags: ["Warfare", "Tactical", "Command"]
  },
  {
    id: "bounty-heat-level",
    name: "Bounty & Heat Level",
    tagline: "The longer you stay, the harder the law comes down.",
    summary: "Track law enforcement awareness with an escalating Heat Level (1 to 5) that spawns pursuers.",
    description: "Committing crimes, loud firefights, or public magic increases the local Heat Level from 1 to 5. Each level of Heat increases the frequency of law enforcement patrols, hunter spawns, and worsens stealth position.",
    whenToUse: "Ideal for outlaws, GTA-style criminal sandbox, wild west, and rebel insurgency games.",
    example: "After robbing a bank, the party's Heat rises to 3. Mounted marshals set up roadblocks along every major exit road.",
    tags: ["Crime", "Stealth", "Pursuit"]
  },
  {
    id: "ritual-channeling",
    name: "Ritual Channeling",
    tagline: "Great magic demands time, sacrifice, and focus.",
    summary: "Execute multi-turn ritual spells where team members must protect the caster while maintaining concentration.",
    description: "High-level rituals require filling a 6-segment Ritual Clock. The caster rolls Mind each turn to advance the clock. Interruptions or damage force concentration checks. Allies can contribute by performing supportive rites or defending the circle.",
    whenToUse: "Excellent for occult mysteries, dark fantasy rituals, and summoning sagas.",
    example: "A cultist attempts to open a hell-gate requiring 6 segments. The party has 3 turns to disrupt the ritual before the clock fills.",
    tags: ["Occult", "Magic", "Ritual"]
  },
  {
    id: "shield-cover-degradation",
    name: "Shield & Cover Degradation",
    tagline: "Wood splinters; stone crumbles; barriers fall.",
    summary: "Track physical cover durability (Light, Medium, Heavy) that degrades under heavy fire.",
    description: "Cover has a Durability rating: Light Cover (2 hits), Medium Cover (4 hits), Heavy Cover (6 hits). Every attack absorbed by cover reduces its Durability. Once depleted, the cover collapses, leaving characters exposed.",
    whenToUse: "Tactical firefights, gritty military shooters, and castle sieges.",
    example: "A soldier hides behind a wooden crate (Light Cover, 2 hits). After taking two bursts of rifle fire, the crate shatters.",
    tags: ["Tactical", "Combat", "Cover"]
  },
  {
    id: "nemesis-bond",
    name: "Nemesis Bond",
    tagline: "Your worst enemy is the one who understands you best.",
    summary: "Designate a recurring rival who gains power every time they survive an encounter with the party.",
    description: "Choose a major antagonist as the party's Nemesis. Every time the Nemesis escapes or defeats a party member, they gain a Nemesis Trait (e.g., 'Immune to Fire', 'Knows your tactics'). In return, defeating the Nemesis grants double experience or rare artifacts.",
    whenToUse: "Superhero campaigns, rivalry sagas, comic-book style arcs, and personal vendettas.",
    example: "The villain Shadow-Blade escapes a duel. He gains the Nemesis Trait 'Parry Master', adding +1 die to his defense in the next duel.",
    tags: ["Rivalry", "Antagonist", "Campaign Arc"]
  },
  {
    id: "sanctuary-haven-anchor",
    name: "Sanctuary Haven Anchor",
    tagline: "A safe hearth restores what the wild breaks.",
    summary: "Manage a home base/sanctuary that unlocks downtime upgrades, healing bonuses, and strategic perks.",
    description: "The party shares a base (a stronghold, starship, tavern, or hideout) with a Comfort Level (1 to 5). Resting at a Haven clears Burden and Wound Clocks faster. Investing loot into Haven Upgrades grants bonuses like herbal infirmaries, armories, or magical scrying pools.",
    whenToUse: "Base-building campaigns, West Marches style games, and rebel hideouts.",
    example: "The party spends 500 gold upgrading their tavern base with a Secret Armory, granting +1 bonus die on equipment preparation rolls.",
    tags: ["Base-Building", "Downtime", "Management"]
  },
  {
    id: "poison-toxin-meter",
    name: "Poison & Toxin Meter",
    tagline: "Venom works slowly, until it works all at once.",
    summary: "Track environmental toxins, venom, or radiation with a 5-stage progression track.",
    description: "Exposure to venom or radiation advances the Toxin Meter (Stage 1: Nausea → Stage 2: Impaired stats → Stage 3: Paralysis → Stage 4: Coma → Stage 5: Death). Characters must find specific antidotes or perform medical rolls to reduce stages.",
    whenToUse: "Wilderness survival, dungeon delving, bio-hazard sci-fi, and assassin plots.",
    example: "A ranger is bitten by a wyvern. Her Toxin Meter reaches Stage 2, giving her -1 die on physical rolls until treated.",
    tags: ["Survival", "Hazard", "Poison"]
  },
  {
    id: "fame-notoriety-gauge",
    name: "Fame & Notoriety Gauge",
    tagline: "The world knows your face - for better or worse.",
    summary: "Track public reputation along a spectrum from Beloved Hero to Feared Villain.",
    description: "The party tracks a Fame Meter (-5 Notorious to +5 Celebrated). High Fame grants discounts, royal invites, and fanatical followers, but makes stealth impossible. High Notoriety inspires fear in enemies, but draws bounty hunters and paladins.",
    whenToUse: "Gladiatorial campaigns, superhero games, celebrity intrigue, and pirate sagas.",
    example: "A gladiator reaches +4 Fame. Crowds cheer when he enters the arena, granting him +1 Presence die during battle.",
    tags: ["Reputation", "Social", "Fame"]
  },
  {
    id: "corruption-dark-temptation",
    name: "Corruption & Dark Temptation",
    tagline: "Power has a taste; darkness has a price.",
    summary: "Trade humanity for immense dark power using a 6-point Corruption Track.",
    description: "When facing defeat, a player may accept Dark Temptation to automatically succeed at a roll, but marks 1 Corruption. Each Corruption point grants a dark mutation or power, but at 6 Corruption, the character becomes an NPC villain under DM control.",
    whenToUse: "Dark fantasy, demonolgy, eldritch horror, and tragic downfall campaigns.",
    example: "A sorcerer facing death accepts the Fiend's Bargain, marking 1 Corruption to obliterate the foe. Black scales grow on his neck.",
    tags: ["Dark Fantasy", "Corruption", "Temptation"]
  },
  {
    id: "synergy-attacks",
    name: "Synergy Attacks",
    tagline: "Two strikes, one devastating rhythm.",
    summary: "Combine two complementary character actions into a unified team combo maneuver.",
    description: "When two players act consecutively in initiative, they may declare a Synergy Attack. Both players roll their respective pools. If both achieve a Partial or Full Success, they trigger a cinematic Synergy Combo effect (e.g., throwing a foe into a spell explosion).",
    whenToUse: "Martial arts campaigns, superhero teams, anime-inspired games, and cooperative combat.",
    example: "A barbarian throws the rogue into the air while the rogue readies twin daggers, dealing critical damage to a flying chimera.",
    tags: ["Teamwork", "Combat", "Action"]
  },
  {
    id: "infiltration-stepping",
    name: "Infiltration Stepping",
    tagline: "In and out like a shadow in the night.",
    summary: "Track covert ops with a 4-phase Infiltration Track (Approach → Entry → Objective → Exfiltration).",
    description: "Heists and stealth missions are broken into four distinct phases. The group must complete progress clocks in each phase. Generating noise or failing rolls adds Alarm Tokens. At 3 Alarm Tokens, the compound goes on full lockdown.",
    whenToUse: "Heists, spy thrillers, cyberpunk ops, and stealth infiltrations.",
    example: "The party picks the lock to the vault (Entry Phase complete). A failed stealth roll adds 1 Alarm Token.",
    tags: ["Stealth", "Heist", "Operations"]
  },
  {
    id: "chrono-distortion",
    name: "Chrono-Distortion",
    tagline: "Time is a tapestry; snip a thread at your own peril.",
    summary: "Manipulate time loops and temporal rewinds at the cost of Paradox Anomalies.",
    description: "Characters equipped with temporal tech or time magic carry a Paradox Counter. They can rewind a single round or freeze an enemy, but add 1 Paradox. At 5 Paradox, a Temporal Anomaly erupts (spawning time-ghosts or aging characters).",
    whenToUse: "Time travel, sci-fi anomaly, doctor-who style adventures, and temporal magic.",
    example: "A time-mage rewinds a fatal gunshot. She saves her ally but gains 1 Paradox; reality flickers around her.",
    tags: ["Time Travel", "Sci-Fi", "Paradox"]
  },
  {
    id: "bond-relational-ties",
    name: "Bond & Relational Ties",
    tagline: "We fight hardest for those we cherish.",
    summary: "Establish deep personal Bonds between party members that grant aid when protecting one another.",
    description: "Each player defines a Bond with another PC (e.g., 'Sworn Brother', 'Rival Lover', 'Protector'). When rolling to directly protect or aid a bonded character, add +1 bonus die. If a bonded character is harmed, gain +1 Momentum.",
    whenToUse: "Character-driven dramas, romance RPGs, anime adventuring, and emotional campaigns.",
    example: "A warrior sees her bonded partner struck down by a giant. Her Bond triggers, granting her a bonus die on her counter-attack.",
    tags: ["Romance", "Character Development", "Emotional"]
  },
  {
    id: "ancestral-favor",
    name: "Ancestral Favor",
    tagline: "The spirits of your lineage stand behind your shoulder.",
    summary: "Commune with ancient ancestors to gain ancient skill proficiencies and spiritual protection.",
    description: "Characters track an Ancestral Favor meter (1 to 5). Praying at ancestral shrines or honoring family traditions increases Favor. Spending Favor allows a character to temporarily gain a skill descriptor or summon a phantom ancestor to absorb a blow.",
    whenToUse: "Tribal fantasy, oriental mythology, shamanic settings, and noble house campaigns.",
    example: "A samurai prays to his grandfather's spirit, spending 1 Ancestral Favor to gain the 'Master of Archery' descriptor for one scene.",
    tags: ["Divine", "Ancestors", "Mythology"]
  },
  {
    id: "adrenaline-rush",
    name: "Adrenaline Rush",
    tagline: "At the brink of death, the body unleashes fire.",
    summary: "Gain a explosive surge of power when your Wound Clock reaches critical condition.",
    description: "When a character's Wound Clock reaches segment 3 (Severe Injury), they immediately enter Adrenaline Rush. For the remainder of the encounter, all physical rolls gain +1 bonus die, but all damage taken afterward is doubled.",
    whenToUse: "Gritty action, survival horror, martial arts, and high-stakes combat.",
    example: "A wounded gladiator bleeds from three severe slashes. Adrenaline Rush kicks in, giving him extra strength for a final decisive blow.",
    tags: ["Combat", "Desperation", "Survival"]
  },
  {
    id: "mass-siege-clock",
    name: "Mass Siege Clock",
    tagline: "Walls crack under the relentless barrage.",
    summary: "Manage long-term fortress sieges using a dual Siege Clock (Defenders vs. Assault).",
    description: "The Storyteller sets two opposing 8-segment clocks: Fortress Integrity and Siege Supplies. Players undertake specific sorties (destroying catapults, smuggling grain) to advance the Siege Supplies clock or repair Integrity before the enemy breaches.",
    whenToUse: "Medieval siege warfare, castle defense, and sci-fi station defense.",
    example: "Players sally out at midnight to burn the enemy battering ram, preventing 2 segments of damage to Fortress Integrity.",
    tags: ["Warfare", "Siege", "Tactical"]
  },
  {
    id: "bargain-faustian-pact",
    name: "Bargain & Faustian Pact",
    tagline: "The devil is in the fine print.",
    summary: "Negotiate binding magical contracts with powerful entities in exchange for immediate supernatural miracles.",
    description: "A player may strike a Pact with an otherworldly entity (Demon, Fey, Archangel, AI). The entity grants an immediate impossible success or power, but writes a binding Clause (e.g., 'You cannot touch iron', 'Your firstborn belongs to the court'). Breaking the Clause forfeits the character's soul or life.",
    whenToUse: "Fey wild, demonic pacts, cosmic horror, and dark fantasy.",
    example: "A dying wizard makes a pact with a Fey Lord to survive. He lives, but his shadow now belongs to the Fey Court.",
    tags: ["Pact", "Occult", "Fey"]
  },
  {
    id: "weather-environmental-fury",
    name: "Weather & Environmental Fury",
    tagline: "Nature is a beast that cannot be tamed.",
    summary: "Track escalating weather hazards (Blizzards, Sandstorms, Hurricanes) that alter movement and vision.",
    description: "Environmental hazard levels scale from 1 (Mild Rain) to 5 (Catastrophic Hurricane). Higher levels inflict visibility penalties, force balance rolls, and deal recurring cold/heat damage to un sheltered characters.",
    whenToUse: "Wilderness survival, nautical voyages, polar expeditions, and desert survival.",
    example: "A blizzard reaches Level 4. Characters must make thermal endurance rolls every hour or suffer hypothermia.",
    tags: ["Environment", "Survival", "Weather"]
  },
  {
    id: "contagion-infection-track",
    name: "Contagion & Infection Track",
    tagline: "The bite is just the beginning.",
    summary: "Track zombie or bio-weapon viral infection with a 4-stage mutation track.",
    description: "When bitten or exposed, characters gain an Infection Track (Stage 1: Fever → Stage 2: Mutations → Stage 3: Craving → Stage 4: Full Transformation). Inoculations or rare serums delay the progression.",
    whenToUse: "Zombie apocalypse, bio-punk, alien parasite, and plague thrillers.",
    example: "A survivor is nipped by a walker. She suppresses Stage 1 with antibiotics, but knows she needs a real cure before nightfall.",
    tags: ["Zombie", "Infection", "Apocalypse"]
  },
  {
    id: "investigation-clue-web",
    name: "Investigation Clue Web",
    tagline: "Connect the threads; uncover the truth.",
    summary: "Gather Clue Tokens during investigations to unlock breakthroughs in mystery cases.",
    description: "During detective work, successful rolls grant Clue Tokens. Players spend 3 Clue Tokens to deduce a key suspect's motive, location, or secret weakness without needing a risky roll.",
    whenToUse: "Noir detective, murder mysteries, police procedurals, and conspiracy thrillers.",
    example: "The detective collects 3 Clues from blood splatters and financial records, spending them to pinpoint the killer's hideout.",
    tags: ["Mystery", "Investigation", "Detective"]
  },
  {
    id: "bounty-of-the-sea",
    name: "Bounty of the Sea",
    tagline: "Trust the wind; master the waves.",
    summary: "Manage ship integrity, crew discipline, and wind conditions during naval voyages.",
    description: "Ships maintain a Hull Rating, Rigging Rating, and Crew Morale. Captains assign crew to tasks during sea battles or storms. Failing naval rolls damages Rigging or Hull, threatening to sink the vessel.",
    whenToUse: "Pirate games, naval warfare, age of sail, and archipelago exploration.",
    example: "A pirate captain steers through a reef during a storm. A partial success keeps the ship afloat but damages the Main Mast.",
    tags: ["Nautical", "Pirates", "Ship"]
  },
  {
    id: "divine-blessing-favor",
    name: "Divine Blessing & Favor",
    tagline: "The gods reward the faithful.",
    summary: "Earn Piety points through sacred devotions that can be spent on holy miracles.",
    description: "Paladins and clerics earn Piety by upholding religious tenets. Piety points can be spent to cast sacred smites, cleanse poisons, or create sanctuaries of holy light.",
    whenToUse: "High fantasy, holy crusades, pantheon mythologies, and divine sagas.",
    example: "A paladin spends 2 Piety points to smite an undead captain with radiant fire, turning a miss into a critical hit.",
    tags: ["Divine", "Religion", "Paladin"]
  },
  {
    id: "dreamscape-nightmare-realm",
    name: "Dreamscape & Nightmare Realm",
    tagline: "In the realm of sleep, thought becomes physical.",
    summary: "Conduct adventures inside the dream realm where imagination reshapes terrain and reality.",
    description: "While exploring dreams, characters use Mind instead of Force for physical combat. Players can spend Lucid Tokens to reshape the dream landscape (e.g., spawning doors, changing gravity).",
    whenToUse: "Surrealist fantasy, Nightmare on Elm Street style games, psychic incursions, and dreamwalking.",
    example: "A dreamwalker spends 1 Lucid Token to turn a nightmare's wall into a flight of stairs, allowing the party to escape.",
    tags: ["Dream", "Surreal", "Mind"]
  },
  {
    id: "blood-magic-sacrifice",
    name: "Blood Magic Sacrifice",
    tagline: "Life is the ultimate currency of power.",
    summary: "Suffer self-inflicted physical harm to empower spells and dark rituals.",
    description: "A blood sorcerer can sacrifice 1 segment on their Wound Clock to add +2 bonus dice to any spell roll or double the spell's damage output.",
    whenToUse: "Dark fantasy, blood magic, necromancy, and grimdark settings.",
    example: "A blood mage slices her palm, taking 1 Wound segment to boost her firestorm spell to obliterate an incoming horde.",
    tags: ["Dark Fantasy", "Blood Magic", "Sacrifice"]
  },
  {
    id: "vehicle-rig-damage-grid",
    name: "Vehicle & Rig Damage Grid",
    tagline: "Keep the engine roaring, no matter what.",
    summary: "Track targeted vehicular damage (Engine, Tires, Weapons, Hull) during high-speed chases.",
    description: "Vehicles have four component zones: Tires/Tracks, Engine, Weapons, and Driver Cabin. Attackers can target specific components. Destroying the Engine stops the vehicle; blowing tires forces crash rolls.",
    whenToUse: "Mad Max wasteland chases, sci-fi starfighter dogfights, and car chase thrillers.",
    example: "A war-rig driver targets a pursuer's front tires. A hit causes the pursuer's buggy to flip dramatically.",
    tags: ["Vehicles", "Chase", "Sci-Fi"]
  },
  {
    id: "psychic-overload-feedback",
    name: "Psychic Overload & Feedback",
    tagline: "The mind is a door; open it too wide and it shatters.",
    summary: "Track psychic strain when using telepathy or telekinesis, risking mental feedback.",
    description: "Psionic abilities generate Strain (1 to 6). High Strain causes nosebleeds and headaches. At 6 Strain, the psionic suffers Psychic Overload, dealing damage to all nearby minds including allies.",
    whenToUse: "Psionics, Stranger Things style campaigns, sci-fi mind powers, and cyberpunk.",
    example: "A telekinetic holds back a collapsing blast door, gaining 3 Strain. Her nose bleeds as the mental pressure mounts.",
    tags: ["Psionics", "Sci-Fi", "Mind"]
  },
  {
    id: "curse-of-the-eclipse",
    name: "Curse of the Eclipse",
    tagline: "When the moon blocks the sun, the cursed awaken.",
    summary: "Track celestial cycles that empower lycanthropes and dark monsters during eclipse events.",
    description: "During lunar or solar eclipses, all cursed beings (Werewolves, Vampires, Demonspawn) gain double dice pools and health regeneration, while holy magic suffers a -1 die penalty.",
    whenToUse: "Gothic horror, werewolf sagas, dark fantasy, and astronomical events.",
    example: "The solar eclipse begins. The werewolf alpha roars as his wounds heal instantly under the darkened sky.",
    tags: ["Gothic", "Werewolf", "Astronomy"]
  },
  {
    id: "courtly-etiquette-faux-pas",
    name: "Courtly Etiquette & Faux Pas",
    tagline: "A misplaced word cuts deeper than a rapier.",
    summary: "Navigate royal balls and high-society intrigue using an Etiquette & Faux Pas track.",
    description: "Characters track Favor Points with royal courts. Making social blunders or breaking etiquette adds Faux Pas tokens. At 3 Faux Pas tokens, the character is publicly humiliated and banished from court.",
    whenToUse: "High society intrigue, Victorian drama, regency romance, and royal politics.",
    example: "A barbarian uses the wrong fork at a royal banquet. The duchess frowns, adding 1 Faux Pas token to the party.",
    tags: ["Social", "Courtly", "Intrigue"]
  },
  {
    id: "heroic-sacrifice-blaze-of-glory",
    name: "Heroic Sacrifice / Blaze of Glory",
    tagline: "Die on your feet, so others may live.",
    summary: "Allow a dying character to take one final, legendary action before passing away.",
    description: "When a character suffers fatal harm, the player may trigger a Blaze of Glory instead of dying instantly. The character stays conscious for one final round, gains infinite dice on their final action, and automatically succeeds with legendary impact before passing peacefully.",
    whenToUse: "Climactic campaign finales, heroic sacrifices, epic fantasy, and war games.",
    example: "A veteran warrior holds the bridge against an army, spending his Blaze of Glory to collapse the arch and save his party as he falls.",
    tags: ["Heroic", "Sacrifice", "Climax"]
  },
  {
    id: "artifact-resonance-attunement",
    name: "Artifact Resonance & Attunement",
    tagline: "Magic items have personalities; earn their respect.",
    summary: "Track attunement levels with sentient magic artifacts to unlock hidden powers.",
    description: "Magical artifacts have Attunement levels (1 to 3). Performing tasks aligned with the artifact's goal increases Attunement, unlocking dormant powers. Disobeying the artifact causes it to lock its powers.",
    whenToUse: "High fantasy, relic hunting, D&D style artifact quests, and sentient gear.",
    example: "A paladin uses a sentient sun-sword to protect an orphan. The sword's Attunement reaches Level 3, unlocking its sunburst ability.",
    tags: ["Artifact", "Magic Item", "Fantasy"]
  },
  {
    id: "guild-merchant-ledger",
    name: "Guild & Merchant Ledger",
    tagline: "Buy low, sell high, rule the trade routes.",
    summary: "Manage merchant caravans, trade goods, and economic investments across cities.",
    description: "Players manage trade cargo (Spice, Silk, Ore) with fluctuating market values across different ports. Successful trade rolls increase Guild Wealth, funding mercenaries and trade fleets.",
    whenToUse: "Merchant campaigns, Spice Road exploration, trading sims, and economic intrigue.",
    example: "The party buys silk in a desert port and sells it in a mountain city for triple profit, earning 2,000 gold for their merchant ledger.",
    tags: ["Trade", "Economics", "Management"]
  },
  {
    id: "wild-magic-surge-table",
    name: "Wild Magic Surge Table",
    tagline: "Uncontrolled magic is a firework in a powder keg.",
    summary: "Unleash random unpredictable spell effects whenever a spellcaster rolls a double 1.",
    description: "Whenever a spellcaster rolls a double 1 on any spellcasting check, roll on the Wild Magic Surge table (1-20). Effects range from turning green, levitating furniture, spawning butterfies, to accidentally fireballing the room.",
    whenToUse: "Wild magic sorcery, chaotic campaigns, comical fantasy, and unpredictable magic.",
    example: "A wild sorcerer rolls double 1s while casting levitate. The Wild Surge table results in all hair in a 30-foot radius turning bright pink.",
    tags: ["Chaos", "Magic", "Wild Magic"]
  },
  {
    id: "doomsday-horizon-countdown",
    name: "Doomsday Horizon Countdown",
    tagline: "The world is ending; how will you spend your final days?",
    summary: "Track the global collapse of the world with an overarching 10-step Doomsday Clock.",
    description: "An overarching campaign clock tracks global destruction (e.g., Meteor impact, Demon lord awakening). Every failed major mission advances the Doomsday Clock. At Step 10, the apocalypse occurs.",
    whenToUse: "End-of-the-world sagas, apocalyptic campaigns, and global threat arcs.",
    example: "The cult succeeds in sacrificing the High Priest. The Doomsday Clock advances to Step 7; sky turns red across the continent.",
    tags: ["Apocalypse", "Global", "Endgame"]
  }
];
