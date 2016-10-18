var nm1 = ["Alligator", "Amazon", "Arching", "Arctic", "Arrowhead", "Bamboo", "Black", "Bland", "Blue", "Bogbeast", "Boundless", "Brilliant", "Bursting", "Calm", "Charmed", "Choral", "Climbing", "Cobalt", "Cold", "Coral", "Crocodile", "Crystal", "Cursed", "Dancing", "Dark", "Darkest", "Dead", "Deep", "Distant", "Dragonfly", "Dread", "Dreaded", "Eastern", "Emerald", "Empty", "Enchanted", "Ethereal", "Ever Reaching", "Fair", "Flowing", "Foaming", "Forbidden", "Frothy", "Frozen", "Glassy", "Gleaming", "Glistening", "Gray", "Green", "Harmony", "Heaving", "Homeless", "Hungry", "Infernal", "Infinite", "Invisible", "Iris", "Isolated", "Jade", "Laughing", "Lifeless", "Lilypad", "Lion's Tail", "Living", "Lonely", "Lotus", "Lucent", "Majestic", "Mesmerizing", "Mighty", "Mirrored", "Misty", "Moaning", "Molten", "Moon-lit", "Motionless", "Moving", "Narrow", "New", "Northern", "Peaceful", "Perfumed", "Pleasant", "Quiet", "Raging", "Rainy", "Red", "Restless", "Rippling", "Rocking", "Rolling", "Rough", "Rushing", "Sandy", "Sanguine", "Savage", "Serene", "Serpent", "Shimmering", "Silent", "Sleeping", "Slumbrous", "Soundless", "Southern", "Sparkling", "Sterile", "Stern", "Straitened", "Sunny", "Surging", "Tadpole", "Teal", "Throbbing", "Thundering", "Tinted", "Tortoise", "Tossing", "Tranquil", "Treacherous", "Troubled", "Turbulent", "Turquoise", "Turtle", "Uncanny", "Unknown", "Violent", "Waveless", "Western", "Whispering", "White", "Wild", "Windy", "Wondering", "Wrinkled"];
var nm2 = ["Creek", "River", "Stream", "Brook", "Run", "Tributary", "Canal", "Channel", "Beck", "Rill"];
var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y"];
var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var nm7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

function generator$places$rivers() {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		} else if (i < 7) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			names = nm3[rnd3] + nm4[rnd4] + nm7[rnd7] + " " + nm2[rnd2];
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			names = nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm4[rnd6] + nm7[rnd7] + " " + nm2[rnd2];
		}
		return names;
	}

}