var names1 = ["Anaconda", "Ancient", "Angry", "Baboon", "Bellowing", "Bird of Paradise", "Black", "Black Elephant", "Black Panther", "Black Rhino", "Blazing", "Bloodthirsty", "Broken", "Brutal", "Burning", "Bustling", "Calm", "Calming", "Cougar", "Crocodile", "Cursed", "Dancing Bird", "Dark", "Dead", "Diamond", "Distant", "Eastern", "Ebon", "Elephant", "Elephant Tusk", "Emerald", "Emperor", "Empty", "Enchanted", "Ever Reaching", "Expanding", "Fabled", "Faraway", "Feared", "Fearsome", "Feral", "Ferocious", "Flower", "Forbidden", "Furious", "Gentle", "Giant", "Gloomy", "Golden", "Greedy", "Grim", "Growing", "Growling", "Guardian", "Haunted", "Hidden", "Hollow", "Hopeless", "Howling", "Hungry", "Infernal", "Ivory", "Laughing", "Lemur", "Lifeless", "Lioness", "Lionroar", "Lonely", "Lunar", "Macaw", "Mighty", "Mirrored", "Misty", "Moaning", "Moonlit", "Moving", "Mumbling", "Mysterious", "Narrow", "Neverending", "Northern", "Ocelot", "Orangutan", "Peaceful", "Plain", "Playful", "Predator", "Preying", "Primate", "Primeval", "Pristine", "Pygmy", "Quiet", "Raging", "Rainy", "Red", "Restless", "Rising", "Roaring", "Royal Lion", "Rugged", "Sacred", "Sad", "Sanguine", "Savage", "Scarlet", "Scented", "Scrambling", "Screaming", "Serpent", "Severed", "Shadowed", "Shimmering", "Sighing", "Silent", "Silver", "Silverback", "Sleeping", "Slumbering", "Snaketail", "Soft", "Solar", "Southern", "Spider", "Spider Monkey", "Sterile", "Storm", "Stormy", "Tempest", "Thirsty", "Thornbush", "Thunder", "Thundering", "Thunderstorm", "Tigerpaw", "Tigress", "Timeless", "Titan", "Toucan", "Towering", "Treachorous", "Turbulent", "Venomous", "Vicious", "Violent", "Voiceless", "Volcanic", "Wailing", "Waking", "Watching", "Western", "Wet", "Whimpering", "Whining", "Whispering", "White", "White Elephant", "White Lion", "White Parrot", "White Tiger", "Wild", "Windless", "Windy"];
var names2 = ["Jungle", "Rain Forest", "Bush", "Tropics", "Gardens", "Wilds", "Wilderness", "Wild", "Jungles", "Garden", "Paradise"];
var names3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var names4 = ["a", "e", "i", "o", "u", "y"];
var names5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var names6 = ["a", "e", "i", "o", "u", "y"];
var names7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

function generator$places$jungles() {

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