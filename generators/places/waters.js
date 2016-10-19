function generator$places$waters() {
	var nm1 = ["Abysmal", "Arching", "Red", "Black", "White", "Cursed", "Frozen", "Arctic", "Barren", "Billowy", "Bland", "Blue", "Boiling", "Boisterous", "Bottomless", "Boundless", "Brilliant", "Bursting", "Calm", "Calmest", "Charmed", "Cheerless", "Choral", "Circumfluous", "Climbing", "Cobalt", "Cold", "Coral", "Crystal", "Dancing", "Dread", "Dreaded", "Dark", "Darkest", "Dead", "Deep", "Deepest", "Delicious", "Dense", "Depraved", "Distant", "Eastern", "Emerald", "Empty", "Enchanted", "Ethereal", "Ever Reaching", "Fair", "Farthest", "Flat", "Forbidden", "Quiet", "Flowing", "Foaming", "Frothy", "Glassy", "Gleaming", "Glistening", "Grave", "Gray", "Green", "Harmonious", "Heartless", "Heaving", "Homeless", "Hungry", "Infernal", "Infinite", "Invisible", "Isolated", "Jade", "Laughing", "Lifeless", "Living", "Lonely", "Lucent", "Majestic", "Mesmerizing", "Mighty", "Misty", "Moaning", "Molten", "Moon-lit", "Motionless", "Narrow", "Neglected", "Northern", "Orient", "Peaceful", "Perfumed", "Pleasant", "Primeval", "Raging", "Rainy", "Rippling", "Rocking", "Rolling", "Rough", "Rushing", "Sandy", "Sanguine", "Savage", "Serene", "Shimmering", "Shoaling", "Shoreless", "Sleeping", "Slumbrous", "Soundless", "Southern", "Spacious", "Sparkling", "Sterile", "Stern", "Straitened", "Sunny", "Surging", "Teal", "Terrestrial", "Throbbing", "Thundering", "Tideless", "Tinted", "Tossing", "Tranquil", "Treacherous", "Triumphant", "Mirrored", "Restless", "Tropic", "Troubled", "Turbulent", "Turquoise", "Ugly", "Ultramarine", "Uncanny", "Unfathomed", "Unknown", "Unresting", "Unruffled", "Unstable", "Vast", "Violent", "Walled", "Wasted", "Wasteful", "Wasting", "Waveless", "Western", "Whelming", "Whispering", "Wild", "Windy", "Wondering", "Wrinkled", "Yearning"];
	var nm2 = ["Abyss", "Tides", "Waves", "Bay", "Deep", "Depths", "Domain", "Expanse", "Gulf", "Ocean", "Sea", "Waters"];
	var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
	var nm4 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u"];
	var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
	var nm6 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z", "", ""];


	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
		} else if (i < 7) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			names = nm3[rnd3] + nm4[rnd4] + nm6[rnd6] + " " + nm2[rnd2];
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd7 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			names = nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm4[rnd7] + nm6[rnd6] + " " + nm2[rnd2];
		}
		return names;
	}

}