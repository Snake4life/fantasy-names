function generator$places$snowlands() {
	var names1 = ["Aquamarine", "Arctic", "Avalanche", "Azure", "Blasting", "Bleak", "Blizzard", "Bone-Chilling", "Boreal", "Brilliant", "Chillbreath", "Chillwind", "Coldwind", "Cracking", "Crisp", "Crystal", "Crystalline", "Diamond", "Flurry", "Freezing", "Frigid", "Frost", "Frostbite", "Frostbreath", "Frosted", "Frostfever", "Frostfinger", "Frostfire", "Frozen", "Ghostly", "Glacial", "Glacier", "Glazed", "Glimmering", "Ice Crystal", "Ice Floe", "Ice Needle", "Iceberg", "Icebound", "Icecap", "Iced", "Iceshelf", "Icicle", "Icy", "Igloo", "Ivory", "Meltwater", "Milky", "Mirror", "Mute", "Muted", "Nevermelting", "Northbound", "Northern", "Numb", "Pale", "Pearly", "Penguin", "Permafrost", "Petrified", "Polar", "Powder", "Quiet", "Quivering", "Raw", "Reflecting", "Shattering", "Shimmering", "Shivering", "Shuddering", "Silent", "Silver", "Silvery", "Sleeted", "Sliding", "Slippery", "Snow Angel", "Snow Crystal", "Snow Owl", "Snow Pack", "Snow Storm", "Snowbank", "Snowcap", "Snowdrift", "Snowfall", "Snowflake", "Snowman", "Snowslide", "Snowy", "Solid", "Soundless", "Sparkling", "Thundersnow", "Twinkling", "Wailing", "Weeping", "Whimpering", "Whispering", "White", "Winter", "Yowling"];
	var names2 = ["Desert", "Tundra", "Taiga", "Forests", "Expanse", "Fields", "Flatlands", "Plains"];

	var names3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names4 = ["a", "e", "i", "o", "u", "y"];
	var names5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
	var names6 = ["a", "e", "i", "o", "u", "y"];
	var names7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];
	var names8 = ["Tundra", "Taiga", "Expanse", "Snow Fields", "Snowlands", "Snow Plains", "Ice Fields", "Icelands", "Ice Plains"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			names = "The " + names1[rnd] + " " + names2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			rnd5 = Math.floor(Math.random() * names7.length);
			rnd6 = Math.floor(Math.random() * names8.length);
			names = "The " + names3[rnd] + names4[rnd2] + names5[rnd3] + names6[rnd4] + names7[rnd5] + " " + names8[rnd6];
		}
		return names;
	}

}