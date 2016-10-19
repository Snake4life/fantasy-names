function generator$places$cliffs() {
	var names1 = ["Adamantine", "Albatross", "Ancient", "Angry", "Arctic", "Arid", "Bare", "Basalt", "Basanite", "Bellowing", "Black", "Black Cavern", "Blackrock", "Blazing", "Broken", "Broken Ship", "Bronze", "Burning", "Calm", "Clay", "Claystone", "Clouded", "Collapsing", "Colossal", "Cracking", "Crumbling", "Crushing", "Cursed", "Cyclone", "Dark", "Dead", "Desolate", "Diamond", "Distant", "Eagle", "Eastern", "Ebon", "Empty", "Enchanted", "Eroded", "Ever Reaching", "Fabled", "Faraway", "Feared", "Fearsome", "Fishermen", "Flower", "Forbidden", "Foxtail", "Fractured", "Frightening", "Frozen", "Giant", "Gloomy", "Golden", "Granite", "Gray", "Grim", "Growling", "Guardian", "Haunted", "Hidden", "Hidden Gold", "Hollow", "Hooded", "Hopeless", "Howling", "Hungry", "Hurricane", "Ice-Crowned", "Iced", "Icy", "Infernal", "Iron", "Ironbeak", "Ivory", "Jagged", "Killer Whale", "Laughing", "Lifeless", "Limestone", "Lobster", "Lonely", "Mammoth", "Marble", "Mermaid", "Mighty", "Mirrored", "Misty", "Moaning", "Moonlit", "Mountain Goat", "Mumbling", "Murky", "Musselbay", "Mysterious", "Narrow", "Neverending", "Northern", "Obsidian", "Oyster", "Peaceful", "Penguin", "Petal", "Pinetree", "Plain", "Pristine", "Quiet", "Rabbit Ear", "Raging", "Ravenclaw", "Red", "Restless", "Roaring", "Rock Lobster", "Rocky", "Rugged", "Sacred", "Sad", "Salmon", "Sandstone", "Sandy", "Savage", "Scarlet", "Scented", "Screaming", "Screeching", "Sea Gull", "Seal", "Serpent", "Severed", "Shadowed", "Shattered", "Shattering", "Shimmering", "Sighing", "Silent", "Silver", "Silver Cavern", "Silverrock", "Slippery", "Slumbering", "Snaketail", "Snowy", "Soft", "Southern", "Sterile", "Stonetalon", "Storm", "Stormy", "Sunken Ship", "Tempest", "Thunder", "Thundering", "Thunderrock", "Thunderstorm", "Titan", "Tradepost", "Treachorous", "Violent", "Voiceless", "Volcanic", "Wailing", "Warthog", "Western", "Whimpering", "Whining", "Whirlwind", "Whispering", "Whisperwind", "White", "White Feather", "Wild", "Windless", "Windy"];
	var names2 = ["Cliff", "Cliffs", "Fjord", "Fjords", "Wall", "Crag", "Bluff", "Bluffs", "Ravine", "Crevice", "Gorge", "Chasm", "Canyon", "Abyss", "Gulch"];

	var names3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
	var names4 = ["a", "e", "i", "o", "u", "y"];
	var names5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
	var names6 = ["a", "e", "i", "o", "u", "y"];
	var names7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];


	i = Math.floor(Math.random() * 10); {
		if (i < 6) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			names = "The " + names1[rnd] + " " + names2[rnd2];
			return names;
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names7.length);
			rnd4 = Math.floor(Math.random() * names2.length);
			names = names3[rnd] + names4[rnd2] + names7[rnd3] + " " + names2[rnd4];
			return names;
		} else {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			rnd5 = Math.floor(Math.random() * names7.length);
			rnd6 = Math.floor(Math.random() * names2.length);
			names = names3[rnd] + names4[rnd2] + names5[rnd3] + names6[rnd4] + names7[rnd5] + " " + names2[rnd6];
			return names;
		}
	}

}