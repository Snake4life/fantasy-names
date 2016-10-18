var nm1 = ["Acorn", "Adamantine", "Ambush", "Ancestor's", "Ancient", "Angry", "Angry Giant", "Apple Blossom", "Appletree", "Arching", "Arid", "Baker", "Basilisk", "Black", "Black Brick", "Black Castle", "Black Forest", "Black Palace", "Black Sea", "Blacksmith", "Bleak", "Blue", "Blue Comet", "Blueberry", "Broken", "Broken Altar", "Broken Carriage", "Broken Castle", "Broken Ruins", "Broken Tower", "Bronze", "Brown Bear", "Burned", "Burning", "Burning Fire", "Butcher", "Butterfly", "Calming", "Caterpillar", "Champion's", "Charmed", "Charming", "Cherry Blossom", "Chestnut", "Cloud", "Cloudfield", "Coalmine", "Cobalt", "Cobweb", "Conqueror's", "Constellation", "Coral", "Crow's Nest", "Crystal", "Cursed", "Dancing", "Dark", "Dead", "Decaying", "Deserted", "Desolation", "Diamond", "Dragon's", "Dragonfire", "Dragontail", "Dragontooth", "Dreary", "Eagle's Nest", "Eastern", "Elephant", "Emerald", "Enchanted", "Ethereal", "Ever Reaching", "Everlasting", "Fabled", "Falcon", "Falcon Claw", "Fallen Champion", "Fallen Giant", "Fallen Knight", "Fallen Oak", "Fallen Phoenix", "Fallen Soldier", "Fallen Star", "Faraway", "Farmer's", "Feared", "Fiery", "Filthy Pig", "Firemaker", "Five Mile", "Fletcher", "Flowing", "Foaming", "Forbidden", "Frightening", "Frozen", "Frozen Lake", "Frozen Mountain", "Giant Leap", "Glassy", "Gleaming", "Glistening", "Golden", "Gray", "Grazing Cow", "Green", "Herbalist", "Hidden", "Hollow", "Honeybee", "Hungry", "Hunter's", "Hurricane", "Infernal", "Infinite", "Invisible", "Iron", "Ironmine", "Isolated", "Isolation", "Jade", "Jagged", "Killing", "King's", "Last Hope", "Laughing", "Lava Flow", "Lifeless", "Light", "Lightning", "Lion Roar", "Living", "Living Dead", "Lonely", "Lost Dragon", "Lost Soul", "Lurking Crows", "Majestic", "Maple Tree", "Mapleleaf", "Merchant", "Miller", "Mirrored", "Misty", "Moon", "Moonlight", "Moonrise", "Moonset", "Moonshine", "Mountain", "Mountain view", "Murky Swamp", "Mysterious", "Mystery", "Narrow", "Northern", "Oak Tree", "Ocean view", "Oceanside", "Orchard", "Overhanging", "Owl", "Pack Mule", "Peach Blossom", "Perfumed", "Phoenix", "Pickpocket", "Pigmy", "Queen's", "Quiet", "Rabbithole", "Raging", "Red", "Red Brick", "Red Comet", "Restless", "Riverside", "Roaming Giant", "Rosebush", "Rugged", "Salvation", "Sanguine", "Savage", "Scarlet", "Scorpion", "Seashore", "Seaside", "Serene", "Serpent", "Shadow", "Shadowed", "Shadowy", "Sharktooth", "Sheep Herd", "Shepherd", "Shimmering", "Shooting Star", "Silent", "Silent Hill", "Silent Lake", "Silent Mountain", "Silver", "Sleeping", "Southern", "Spidersilk", "Starlight", "Stepping Stone", "Stingray", "Strawberry", "Sun", "Sunlight", "Sunray", "Sunrise", "Sunset", "Sunshine", "Tavern", "Teal", "Terraced", "Thornbush", "Thunder", "Thundercloud", "Thunderstorm", "Tower", "Trader's", "Tranquil", "Trepidation", "Unknown", "Violent", "Volcano", "Vulture", "Walnut", "Wandering Soul", "Wandering Troll", "Western", "Whisper", "Whisper Mountain", "Whispering", "White", "White Castle", "White Forest", "White Palace", "Wild", "Willow Tree", "Windy", "Wolf Howl", "Woodland", "Yellow", "Yellow Brick"];
var nm2 = ["Avenue", "Highway", "Lane", "Pass", "Passage", "Path", "Pathway", "Road", "Route", "Street", "Track", "Trail", "Way", "Alley", "Walk"];
var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y"];
var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var nm7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

function generator$places$roads() {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 6) {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		} else if (i < 8) {
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