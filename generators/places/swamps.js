function generator$places$swamps() {
	var nm1 = ["Abysmal", "Alligator", "Amazon", "Ancient", "Arching", "Arrowhead", "Bamboo", "Barren", "Billowy", "Black", "Bland", "Blue", "Bogbeast", "Boiling", "Boundless", "Brown", "Bursting", "Calm", "Calmest", "Charmed", "Cheerless", "Clouded", "Cobalt", "Cold", "Coral", "Crocodile", "Crystal", "Cursed", "Dancing", "Dark", "Darkest", "Dead", "Deep", "Deepest", "Dense", "Depraved", "Distant", "Dragonfly", "Dread", "Dreaded", "Drowning", "Dying", "Eastern", "Emerald", "Empty", "Enchanted", "Ethereal", "Ever Reaching", "Flat", "Flowing", "Foaming", "Foggy", "Forbidden", "Frog", "Frozen", "Furthest", "Gleaming", "Glistening", "Grave", "Gray", "Green", "Harmonious", "Harmony", "Heartless", "Heaving", "Hidden", "Homeless", "Hungry", "Infernal", "Infested", "Infinite", "Invisible", "Isolated", "Jade", "Laughing", "Lifeless", "Lilypad", "Living", "Lonely", "Lotus", "Lucent", "Majestic", "Mesmerizing", "Mighty", "Mirrored", "Misty", "Moaning", "Molten", "Moon-lit", "Mosquito", "Motionless", "Moving", "Mushy", "Narrow", "Neglected", "New", "Northern", "Peaceful", "Perfumed", "Piranha", "Pleasant", "Primeval", "Quiet", "Raging", "Rainy", "Red", "Restless", "Rippling", "Rocking", "Rolling", "Rough", "Rushing", "Sandy", "Sanguine", "Savage", "Serene", "Serpent", "Shimmering", "Silent", "Sleeping", "Slumbrous", "Soundless", "Southern", "Spacious", "Sparkling", "Sterile", "Sunny", "Surging", "Thundering", "Tinted", "Toad", "Tortoise", "Tossing", "Toxic", "Tranquil", "Treacherous", "Tropic", "Troubled", "Turbulent", "Turquoise", "Turtle", "Uncanny", "Unfathomed", "Unknown", "Unstable", "Vast", "Venom", "Violent", "Walled", "Wasted", "Wasteful", "Western", "Whispering", "White", "Wild", "Willow", "Windy", "Wondering", "Wrinkled", "Yearning"];
	var nm2 = ["Abyss", "Basin", "Bog", "Bowels", "Cove", "Glades", "Labyrinth", "Mangrove", "Marsh", "Mire", "Morass", "Polder", "Quag", "Quagmire", "Slough", "Swamp", "Waters", "Wetlands"];
	var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
	var nm4 = ["a", "e", "i", "o", "u", "y"];
	var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
	var nm6 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];


	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 2) {
			rnd1 = Math.floor(Math.random() * nm1.length);
			names = "The " + nm1[rnd1] + " " + nm2[rnd2];
		} else if (i < 4) {
			rnd1 = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd1] + " " + nm2[rnd2];
		} else if (i < 7) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm6.length);
			names = nm3[rnd3] + nm4[rnd4] + nm6[rnd7] + " " + nm2[rnd2];
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm6.length);
			names = nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm4[rnd6] + nm6[rnd7] + " " + nm2[rnd2];
		}
		return names;
	}

}