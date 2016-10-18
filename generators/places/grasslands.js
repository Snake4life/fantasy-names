var names1 = ["White", "Black", "Brown", "Gray", "Majestic", "Pygmy", "Little", "Giant", "Northern", "Southern", "Eastern", "Western", "Greater", "Lesser", "Masked", "Grass", "Water", "Common", "Mountain", "Prairie", "Grassland", "Taiga", "Tundra", "Savanna", "Alpine", "Collared", "Grand", "Pacific", "Oriental", "Spotted", "Speckled", "Striped", "Dotted", "Rusty", "Maned", "Cloud", "Long-tailed", "Short-tailed", "Crowned", "Golden", "Imperial", "Royal", "Noble", "Laughing", "Lined", "Banded", "Snow", "Ivory", "Ebony", "Wild", "Reagal"]
var names2 = ["Aardvark", "Alpaca", "Anaconda", "Ant", "Anteater", "Antelope", "Armadillo", "Baboon", "Badger", "Bandicoot", "Bat", "Bear", "Bee", "Beetle", "Bird", "Bison", "Boa", "Buffalo", "Butterfly", "Buzzard", "Caterpillar", "Chipmunk", "Cobra", "Cougar", "Coyote", "Crane", "Cricket", "Crow", "Deer", "Dingo", "Dove", "Duck", "Eagle", "Elephant", "Elk", "Fox", "Frog", "Gazelle", "Grasshopper", "Groundhog", "Hawk", "Hedgehog", "Hyena", "Jackal", "Kangaroo", "Ladybug", "Lion", "Meerkat", "Mouse", "Rabbit", "Rat", "Raven", "Rhino", "Snake", "Toad", "Tortoise", "Warthog", "Wasp", "Weasel", "Wild Dog"]

var names3 = ["Grasslands", "Grassland", "Savanna", "Pastures", "Plains", "Prairie", "Steppe", "Range", "Fields", "Meadow", "Gardens", "Terrain", "Territory", "Expanse", "Plateau", "Valley"];
var names4 = ["Abandoned", "Awesome", "Beautiful", "Big", "Blooming", "Blossoming", "Broken", "Calm", "Colossal", "Creepy", "Curious", "Deep", "Deserted", "Detailed", "Dramatic", "Dry", "Earthy", "Elegent", "Enchanted", "Exclusive", "Faint", "Fancy", "Free", "Gentle", "Giant", "Gigantic", "Glistening", "Glorious", "Gorgeous", "Green", "Groovy", "Healthy", "Heavenly", "High", "Hissing", "Hollow", "Huge", "Incredible", "Jaded", "Jagged", "Light", "Little", "Lively", "Lonely", "Luscious", "Lush", "Magical", "Magnificent", "Majestic", "Mammoth", "Marvelous", "Massive", "Mellow", "Mighty", "Misty", "Moldy", "Mysterious", "Narrow", "Old", "Panoramic", "Parallel", "Peaceful", "Plain", "Pleasant", "Precious", "Private", "Quiet", "Rainy", "Reflecting", "Romantic", "Rotten", "Round", "Royal", "Sacred", "Scattered", "Secret", "Shimmering", "Sickly", "Simple", "Special", "Spectacular", "Spiritual", "Stormy", "Teeny", "Terrible", "Terrific", "Thick", "Thin", "Thundering", "Tiny", "Unknown", "Violent", "Violet", "Wandering", "Whimsical", "Whispering", "Wicked", "Wild", "Windy", "Young"]

var names5 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var names6 = ["a", "e", "i", "o", "u", "y"];
var names7 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var names8 = ["a", "e", "i", "o", "u", "y"];
var names9 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

function generator$places$grasslands() {

	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd0 = Math.floor(Math.random() * names1.length);
			rnd1 = Math.floor(Math.random() * names2.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			names = names1[rnd0] + " " + names2[rnd1] + " " + names3[rnd2];
		} else if (i < 7) {
			rnd0 = Math.floor(Math.random() * names3.length);
			rnd1 = Math.floor(Math.random() * names4.length);
			names = names4[rnd1] + " " + names3[rnd0];
		} else {
			rnd0 = Math.floor(Math.random() * names5.length);
			rnd1 = Math.floor(Math.random() * names6.length);
			rnd2 = Math.floor(Math.random() * names7.length);
			rnd3 = Math.floor(Math.random() * names8.length);
			rnd4 = Math.floor(Math.random() * names9.length);
			rnd5 = Math.floor(Math.random() * names3.length);
			names = names5[rnd0] + names6[rnd1] + names7[rnd2] + names8[rnd3] + names9[rnd4] + " " + names3[rnd5];
		}
		return names;
	}

}