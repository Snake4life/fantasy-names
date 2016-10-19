function generator$places$temples() {
	var names1 = ["br", "cr", "dr", "fr", "gr", "kr", "pr", "tr", "str", "vr", "bl", "cl", "gl", "kl", "pl", "sl", "ch", "sh", "th", "ph", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names2 = ["a", "e", "i", "o", "u", "ae", "ea", "eo", "ai"];
	var names3 = ["b", "c", "d", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "br", "cr", "dr", "fr", "gr", "kr", "pr", "tr", "str", "vr", "bl", "cl", "gl", "kl", "pl", "sl", "ch", "sh", "th", "ph"];
	var names4 = ["bania", "bara", "ceris", "cise", "cys", "dahre", "dana", "daris", "deia", "dhari", "dhuru", "firi", "fys", "geris", "gura", "hagar", "haja", "hara", "hari", "hati", "hava", "haya", "jia", "kami", "kata", "kaya", "keria", "laris", "leia", "leian", "leion", "lerion", "levia", "loka", "luna", "mana", "mano", "mao", "mena", "mina", "nero", "neron", "nesh", "neya", "nira", "nis", "nora", "nova", "nuga", "peron", "phenia", "polis", "porith", "ppeion", "qira", "rana", "reon", "ris", "shara", "szara", "talis", "taris", "tera", "theion", "thenon", "theoa", "theon", "vana", "veras", "vira", "wani", "weia", "za", "zaki", "zale"];

	var names5 = ["Altar", "Chapel", "Church", "House", "Mosque", "Pagoda", "Pantheon", "Pantheon", "Sanctuary", "Sanctuary", "Sanctum", "Shrine", "Shrine", "Sanctum", "Synagogue", "Temple", "Temple"];
	var names6 = ["Agony", "Air", "Allegiance", "Ambition", "Amnesia", "Ancestors", "Anguish", "Answers", "Aspiration", "Ataraxia", "Blight", "Bliss", "Bonds", "Braveness", "Chance", "Clairvoyance", "Coincidences", "Chaos", "Collapse", "Comfort", "Confessions", "Confidence", "Connections", "Consequences", "Contemplation", "Conviction", "Corruption", "Courage", "Creed", "Darkness", "Death", "Decay", "Dedication", "Defeat", "Delight", "Demise", "Desire", "Despair", "Destinations", "Destinies", "Determination", "Devotion", "Disaster", "Discipline", "Divine Will", "Divinity", "Doom", "Dreams", "Earth", "Emergencies", "Emotions", "Endurance", "Enlightenment", "Equality", "Equanimity", "Eternity", "Exile", "Exiles", "Exodus", "Exploration", "Extinction", "Faith", "Fate", "Fealty", "Felicity", "Fire", "Foresight", "Forgiveness", "Fortune", "Frenzy", "Friendship", "Grace", "Grief", "Harm", "Healing", "Honor", "Hope", "Humility", "Hunger", "Ice", "Infinity", "Insight", "Integrity", "Introspection", "Isolation", "Judgement", "Karma", "Kinship", "Knowledge", "Lament", "Legends", "Life", "Light", "Lore", "Loss", "Love", "Luck", "Meditation", "Mending", "Mercy", "Mourning", "Myths", "Nature", "Necrosis", "Oblivion", "Opportunities", "Paradise", "Passion", "Patience", "Peace", "Perception", "Perfection", "Perpetuity", "Placidity", "Pledges", "Plight", "Possibilities", "Order", "Premonitions", "Probabilities", "Promise", "Prospects", "Purgatory", "Purpose", "Pursuance", "Pursuit", "Quests", "Quietude", "Reflection", "Refugees", "Regrets", "Rejuvenation", "Reliance", "Remorse", "Repose", "Resolutions", "Resolve", "Restoration", "Revelations", "Reverence", "Reverie", "Revival", "Sagas", "Sanctity", "Seclusion", "Secrets", "Sentiment", "Serenity", "Silence", "Snow", "Solitude", "Souls", "Spirits", "Tenacity", "Termination", "Thirst", "Time", "Tolerance", "Tragedy", "Tranquility", "Triumph", "Truth", "Twilight", "Utopia", "Verdicts", "Vigor", "Visions", "Vitality", "Vows", "Water", "Willpower", "Wisdom", "Withdrawal", "Zeal", "the Afterlife", "the Blessed", "the Brave", "the Eclipse", "the Forest", "the Forsaken", "the Future", "the Lake", "the Light", "the Mountain", "the Night", "the Ocean", "the Oracle", "the Outcasts", "the Past", "the Present", "the Prophet", "the River", "the Sea", "the Senses", "the Shadows", "the Solstice", "the Universe", "the Void", "the Volcano", "the World", "the Ancients"];
	var names7 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names8 = ["a", "e", "u", "i", "o", "y"];
	var names9 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names10 = ["agi", "aldir", "aos", "arus", "borh", "bris", "bum", "bus", "dall", "dar", "darr", "des", "dis", "dite", "dohr", "don", "dos", "dros", "dum", "dur", "emis", "enar", "esis", "eus", "eyar", "eyr", "her", "ion", "ione", "ius", "jun", "ldir", "lios", "lo", "lous", "mes", "mir", "mjir", "mos", "mus", "nia", "nir", "nos", "nus", "ohr", "orr", "rasil", "reus", "ros", "ruer", "rus", "ses", "stus", "tar", "tarr", "teus", "thar", "ther", "tia", "ton", "tos", "tyx", "ysus"];

	var names11 = ["Amaranthine", "Ancestral", "Ancient", "Angel", "Angelic", "Animus", "Argent", "Astral", "August", "Azure", "Blessed", "Blue", "Bright", "Cardinal", "Celestial", "Ceremonial", "Ceremony", "Cerulean", "Clairvoyance", "Corrupted", "Crying", "Dark", "Death", "Devout", "Divine", "Elder", "Eternal", "Ethereal", "Exalted", "Fading", "Father", "Foul", "Ghost", "Glowing", "Golden", "Guilty", "Hallowed", "Harbinger", "Heavenly", "Herald", "Holy", "Honor", "Immortal", "Impious", "Impure", "Ivory", "Legendary", "Light", "Lucent", "Luminescent", "Matriarch", "Mirror", "Mother", "Mythic", "Noble", "Omen", "Oracle", "Origin", "Pale", "Parent", "Patriarch", "Pearl", "Perpetual", "Phantom", "Phoenix", "Pious", "Premonition", "Primal", "Prophecy", "Prophet", "Pure", "Putrid", "Radiant", "Red", "Revelation", "Revered", "Righteous", "Sacred", "Sanctified", "Sanguine", "Shadow", "Silver", "Solemn", "Soul", "Source", "Spirit", "Tainted", "Timeless", "Tribal", "True", "Twin", "Unholy", "Venerable", "Vile", "Virtuous", "Vitality", "Weeping", "White", "Wicked", "Wisdom"];
	var names12 = ["Altar", "Basin", "Beach", "Boulder", "Brook", "Burials", "Catacombs", "Cave", "Cavern", "Chamber", "Chapel", "Church", "Cliff", "Coast", "Column", "Crag", "Creek", "Crypts", "Crystal", "Den", "Enclave", "Estuary", "Field", "Fjord", "Flowers", "Forest", "Fountain", "Garden", "Gazebo", "Geyser", "Grave", "Graves", "Grotto", "Grove", "Hill", "Hot Spring", "Island", "Isle", "Jungle", "Lagoon", "Lake", "Maple", "Marsh", "Meadow", "Menhir", "Monolith", "Monument", "Mosque", "Mountain", "Oak", "Oasis", "Obelisk", "Orchard", "Pagoda", "Pantheon", "Pasture", "Peak", "Pillar", "Pillars", "Pinnacle", "Pond", "Pool", "Pyramid", "Realm", "Reef", "Reliquary", "Ridge", "River", "Rock", "Rocks", "Sanctuary", "Sanctum", "Shore", "Shrine", "Slab", "Statue", "Stone", "Summit", "Synagogue", "Temple", "Terrace", "Thicket", "Tomb", "Topiary", "Totem", "Tower", "Tree", "Trees", "Vertex", "Willow", "Woods", "Yew"];


	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * names5.length);
			rnd2 = Math.floor(Math.random() * names6.length);
			names = names5[rnd] + " of " + names6[rnd2];
		} else if (i < 5) {
			rnd = Math.floor(Math.random() * names5.length);
			rnd2 = Math.floor(Math.random() * names7.length);
			rnd3 = Math.floor(Math.random() * names8.length);
			rnd4 = Math.floor(Math.random() * names9.length);
			rnd5 = Math.floor(Math.random() * names10.length);
			names = names5[rnd] + " of " + names7[rnd2] + names8[rnd3] + names9[rnd4] + names10[rnd5];
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * names11.length);
			rnd2 = Math.floor(Math.random() * names12.length);
			names = "The " + names11[rnd] + " " + names12[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			if (rnd < 20) {
				while (rnd3 > 14) {
					rnd3 = Math.floor(Math.random() * names3.length);
				}
			}
			rnd4 = Math.floor(Math.random() * names2.length);
			if (rnd2 > 4) {
				while (rnd4 > 4) {
					rnd4 = Math.floor(Math.random() * names2.length);
				}
			}
			rnd5 = Math.floor(Math.random() * names4.length);
			names = "The " + names1[rnd] + names2[rnd2] + names3[rnd3] + names2[rnd4] + names4[rnd5];
		}
		return names;
	}

}