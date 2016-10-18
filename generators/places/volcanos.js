var names1 = ["Acrimony", "Agony", "Anguish", "Animus", "Apathy", "Ashcloud", "Ashenfield", "Ashstorm", "Bane", "Barrage", "Bedrock", "Blackcloud", "Blackfuse", "Blackout", "Blackpeak", "Blackrock", "Blastfury", "Boulderblast", "Boulderclash", "Boulderpeak", "Boulderrain", "Boulderscream", "Bouldersmash", "Bravery", "Calamity", "Cataclysm", "Charcoal", "Death", "Deluge", "Destiny", "Destruction", "Diablo", "Doom", "Downfall", "Ebon", "Ebony", "Eclipse", "Empathy", "Envy", "Equilibrium", "Equity", "Ferocity", "Fireburst", "Flux", "Fortune", "Frenzy", "Furor", "Fury", "Harmony", "Hate", "Hatred", "Heinous", "Hellion", "Horror", "Immolate", "Infamy", "Injury", "Ire", "Judgment", "Karma", "Limbo", "Maleficent", "Malice", "Malicious", "Mercy", "Misery", "Moltencore", "Moltenfury", "Moltenrock", "Mystery", "Necrosis", "Nefarious", "Nightfall", "Obidian", "Oblivion", "Obscurity", "Odium", "Onyx", "Paradise", "Parity", "Passion", "Penance", "Rage", "Rampage", "Rancor", "Rapture", "Repose", "Rockfury", "Rubblefield", "Ruin", "Sacrifice", "Savagery", "Serenity", "Severity", "Sin", "Sorrow", "Spite", "Stasis", "Storm", "Stormpeak", "Temper", "Terminator", "Terror", "Thunder", "Thundercloud", "Thunderhowl", "Thunderrage", "Thunderrock", "Thunderscream", "Torment", "Tragedy", "Tranquility", "Twilight", "Umbrage", "Unity", "Vengeance", "Vicious", "Violence", "Void", "Woe", "Wrath", "Wrath of God"];
var names2 = ["Aching", "Angry", "Ashen", "Barrage", "Bellowing", "Blazing", "Blistering", "Boiling", "Bombarding", "Booming", "Burning", "Bursting", "Carbon", "Charcoal", "Charring", "Cinder", "Clouded", "Collapsing", "Combusting", "Consuming", "Crashing", "Crimson", "Crumbling", "Crying", "Deafening", "Demon", "Devil", "Devouring", "Diablo", "Dormant", "Dozing", "Dreaming", "Drowsy", "Drumming", "Dynamic", "Ebon", "Ember", "Eruptive", "Exhausted", "Exploding", "Explosive", "Fading", "Fever", "Fiery", "Flaming", "Flowing", "Forsaken", "Fuming", "Furious", "Gleaming", "Glowing", "God", "Growing", "Hellfire", "Hellgate", "Hellish", "Hibernating", "Howling", "Inert", "Inferno", "Kindling", "Latent", "Liquid", "Living", "Maroon", "Mellow", "Mighty", "Moaning", "Molten", "Monster", "Mourning", "Moving", "Nefarious", "Nether", "Obscured", "Obsidian", "Onyx", "Parching", "Rabid", "Raging", "Rampant", "Resting", "Roaring", "Roasting", "Running", "Sanguine", "Scalding", "Scarlet", "Scorching", "Screaming", "Searing", "Shadow", "Shattered", "Sizzling", "Slag", "Sleeping", "Sluggish", "Slumbering", "Smoking", "Smoldering", "Snoring", "Sobbing", "Somber", "Steaming", "Storm", "Thunder", "Thundering", "Titan", "Turbulent", "Vanishing", "Vermilion", "Vibrant", "Vicious", "Violent", "Wasted", "Wasteland", "Weeping"];

var names3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var names4 = ["a", "e", "i", "o", "u", "y"];
var names5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var names6 = ["a", "e", "i", "o", "u"];
var names7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

var names8 = ["Mountain", "Mountains", "Summit", "Peaks", "Precipice", "Heights", "Apex", "Vertex", "Pinnacle"];

function generator$places$volcanos() {

	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * names1.length);
			name = "Mount " + names1[rnd];
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * names2.length);
			rnd2 = Math.floor(Math.random() * names8.length);
			name = "The " + names2[rnd] + " " + names8[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			rnd5 = Math.floor(Math.random() * names7.length);
			name = "Mount " + names3[rnd] + names4[rnd2] + names5[rnd3] + names6[rnd4] + names7[rnd5];
		}
		return name;
	}

}