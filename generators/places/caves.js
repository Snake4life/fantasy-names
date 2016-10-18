var nm1 = ["Abysmal", "Adamantine", "Ancient", "Angry", "Arching", "Arctic", "Arid", "Bare", "Beholding", "Bellowing", "Black", "Bleak", "Blue", "Boiling", "Bottomless", "Boundless", "Brilliant", "Bronze", "Burned", "Burning", "Calm", "Calmest", "Charmed", "Cheerless", "Climbing", "Cobalt", "Cold", "Collapsing", "Colorless", "Colossal", "Coral", "Crystal", "Cunning", "Cursed", "Dancing", "Dangerous", "Dark", "Darkest", "Dead", "Decayed", "Decaying", "Deep", "Deepest", "Dense", "Depraved", "Deserted", "Desolate", "Desolated", "Diamond", "Distant", "Dread", "Dreaded", "Dreadful", "Dreary", "Dry", "Eastern", "Emerald", "Empty", "Enchanted", "Enormous", "Eroded", "Ethereal", "Ever Reaching", "Everlasting", "Fabled", "Faraway", "Farthest", "Feared", "Fearsome", "Fiery", "Flaring", "Flat", "Flowing", "Foaming", "Forbidden", "Forbidding", "Fractured", "Frightening", "Frozen", "Gargantuan", "Giant", "Gigantic", "Glassy", "Gleaming", "Glistening", "Gloomy", "Glowing", "Gold", "Golden", "Grave", "Gray", "Green", "Grim", "Harmonious", "Haunted", "Heaving", "Hellish", "Hollow", "Homeless", "Hopeless", "Hot", "Huge", "Humongous", "Hungry", "Immense", "Infernal", "Infinite", "Invisible", "Iron", "Isolated", "Jade", "Jagged", "Killing", "Laughing", "Lifeless", "Light", "Lightest", "Living", "Lonely", "Lucent", "Majestic", "Malevolent", "Malicious", "Mammoth", "Mesmerizing", "Mighty", "Mirrored", "Misty", "Moaning", "Molten", "Monotonous", "Monstrous", "Motionless", "Mysterious", "Narrow", "Neverending", "New", "Northern", "Open", "Orient", "Overhanging", "Parched", "Peaceful", "Perfumed", "Plain", "Pleasant", "Prickly", "Primeval", "Quiet", "Raging", "Red", "Relentless", "Remote", "Restless", "Rocking", "Rocky", "Rough", "Rugged", "Sad", "Sandy", "Sanguine", "Savage", "Scarlet", "Scorching", "Serene", "Severed", "Shadow", "Shadowed", "Shadowy", "Shimmering", "Silent", "Silver", "Sleeping", "Slumbering", "Slumbrous", "Sly", "Soundless", "Southern", "Spacious", "Sparkling", "Sterile", "Stern", "Straitened", "Sunny", "Symmetrical", "Teal", "Terraced", "Terrestrial", "Throbbing", "Thundering", "Tinted", "Titanic", "Tranquil", "Treacherous", "Troubled", "Turbulent", "Turquoise", "Twisting", "Ugly", "Uncanny", "Unfathomed", "Uninviting", "Unknown", "Unresting", "Unruffled", "Unscaled", "Unstable", "Unwelcoming", "Vast", "Violent", "Voiceless", "Volcanic", "Walled", "Wasted", "Wasteful", "Wasting", "Welcoming", "Western", "Whelming", "Whispering", "White", "Wild", "Windless", "Windy", "Withered", "Wondering", "Wrinkled", "Yearning", "Yelling", "Yellow"];
var nm2 = ["Cave", "Cavern", "Grotto", "Den", "Cavity", "Hollow", "Hollows", "Caves", "Caverns", "Hole", "Hideout", "Shelter", "Overhang", "Sanctuary", "Subterrane"];
var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "y"];
var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var nm6 = ["a", "e", "i", "o", "u", "y"];
var nm7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

function generator$places$caves() {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			names = nm3[rnd] + nm4[rnd3] + nm7[rnd4] + " " + nm2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm3[rnd] + nm4[rnd3] + nm5[rnd4] + nm6[rnd5] + nm7[rnd6] + " " + nm2[rnd2];
		}
		return names;
	}

}