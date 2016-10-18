var nm1 = ["Agni", "Ash", "Ashen", "Barrage", "Berserk", "Blazing", "Blister", "Blistering", "Blustering", "Boiling", "Branded", "Brimstone", "Broiling", "Burning", "Caustic", "Charcoal", "Charred", "Charring", "Cherufe", "Combustion", "Conflagration", "Crimson", "Dragon", "Dragonfire", "Ebon", "Efreet", "Ember", "Fiery", "Firewhirl", "Flaming", "Flaring", "Frenzied", "Frenzy", "Fume", "Fuming", "Furious", "Furnace", "Glowing", "Grime", "Hell", "Inferno", "Kindle", "Lampad", "Lava", "Mad", "Magma", "Nether", "Nightmare", "Obsidian", "Onyx", "Parching", "Phoenix", "Pitch", "Pyre", "Pyro", "Rabid", "Raging", "Raving", "Roasting", "Ruined", "Sanguine", "Scalding", "Scaled", "Scarlet", "Scorching", "Searing", "Singed", "Sizzling", "Smoking", "Smouldering", "Smudge", "Solar", "Soot", "Spark", "Steaming", "Sultry", "Tempest", "Thermo", "Torch", "Torment", "Torrid", "Turbulent", "Violent", "Volcanic", "Volcano", "Wicked", "Wild"];
var nm2 = ["Badlands", "Barrens", "Desert", "Domain", "Dominion", "Expanse", "Field", "Fields", "Land", "Lands", "Plains", "Range", "Terrain", "Territory", "Wastes", "Wilderness", "Wilds"];
var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "y"];
var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var nm6 = ["a", "e", "i", "o", "u", "y"];
var nm7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];
var nm8 = ["Badlands", "Barrens", "Desert", "Domain", "Dominion", "Expanse", "Field", "Fields", "Land", "Lands", "Plains", "Range", "Terrain", "Territory", "Wastes", "Wilderness", "Wilds", "Fireland", "Firelands", "Fire Fields", "Flamelands", "Flame Fields", "Ashlands", "Ash Fields", "Emberlands", "Ember Lands"];

function generator$places$fire_lands() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm7.length);
			rnd6 = Math.floor(Math.random() * nm8.length);
			names = "The " + nm3[rnd] + nm4[rnd2] + nm5[rnd3] + nm6[rnd4] + nm7[rnd5] + " " + nm8[rnd6];
		}
		return names;
	}

}