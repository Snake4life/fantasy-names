var nm1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nm2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u"];
var nm5 = ["", "", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var nm6 = ["", "a", "e", "i", "o", "u"];
var nm7 = ["", "", "", "", "", "", "b", "cus", "cius", "d", "g", "gh", "h", "hr", "hs", "ht", "hn", "hm", "hl", "k", "kius", "kix", "l", "ll", "lk", "ln", "lm", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rd", "s", "st", "ss", "sis", "sius", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "xis", "xius", "z", "zis"];
var nm8 = ["Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Antelope", "Ape", "Armadillo", "Baboon", "Badger", "Bandicoot", "Barracuda", "Basilisk", "Bat", "Bear", "Beaver", "Beetle", "Bighorn", "Bird", "Bison", "Boa", "Boar", "Bobcat", "Bongo", "Buffalo", "Bull", "Butterfly", "Caiman", "Camel", "Canary", "Cat", "Caterpillar", "Catfish", "Centipede", "Chameleon", "Cheetah", "Chicken", "Chimpanzee", "Cockroach", "Cow", "Coyote", "Crab", "Crane", "Crocodile", "Crow", "Deer", "Dingo", "Dog", "Dolphin", "Donkey", "Dragon", "Dragonfly", "Duck", "Eagle", "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Fish", "Flamingo", "Fly", "Fox", "Frog", "Gazelle", "Gecko", "Goat", "Goose", "Gopher", "Gorilla", "Grasshopper", "Guinea Pig", "Hamster", "Hare", "Hedgehog", "Hippopotamus", "Hog", "Hornet", "Horse", "Hound", "Human", "Hummingbird", "Hyena", "Ibis", "Iguana", "Insect", "Jackal", "Jaguar", "Jellyfish", "Kangaroo", "Kingfisher", "Kiwi", "Koala", "Ladybird", "Lamb", "Lemming", "Lemur", "Leopard", "Lion", "Lizard", "Llama", "Lobster", "Lynx", "Macaw", "Magpie", "Manatee", "Mantis", "Meerkat", "Mole", "Mongoose", "Monkey", "Moose", "Moth", "Mouse", "Mule", "Nightingale", "Ocelot", "Octopus", "Orangutan", "Orca", "Ostrich", "Otter", "Owl", "Ox", "Oyster", "Panda", "Panther", "Parrot", "Peacock", "Pelican", "Penguin", "Pheasant", "Pig", "Piranha", "Platypus", "Porcupine", "Prawn", "Quail", "Rabbit", "Raccoon", "Rat", "Raven", "Rhinoceros", "Salamander", "Scorpion", "Seahorse", "Seal", "Shark", "Sheep", "Shrimp", "Skunk", "Sloth", "Snail", "Snake", "Sparrow", "Spider", "Squid", "Squirrel", "Starfish", "Stork", "Swan", "Termite", "Tiger", "Toad", "Tortoise", "Toucan", "Turkey", "Turtle", "Vulture", "Warthog", "Wasp", "Weasel", "Whale", "Wolf", "Wolverine", "Wombat", "Woodchuck", "Woodpecker", "Yak", "Zebra"];
var nm9 = ["Accomplishments", "Agony", "Amusement", "Ancestors", "Ancients", "Anguish", "Animals", "Anticipation", "Ashes", "Beasts", "Beginnings", "Beliefs", "Birth", "Blessings", "Blight", "Bliss", "Blood", "Bloodlust", "Brotherhood", "Burdens", "Celebration", "Ceremonies", "Champions", "Chaos", "Charm", "Cheers", "Children", "Comfort", "Construction", "Corruption", "Cruelty", "Cunning", "Darkness", "Dawn", "Death", "Decay", "Deception", "Defeat", "Delight", "Delusions", "Desires", "Despair", "Destruction", "Dismay", "Dreams", "Drinking", "Earth", "Echoes", "Ecstasy", "Education", "Elation", "Ends", "Establishing", "Eternity", "Euphoria", "Executions", "Expansion", "Failure", "Families", "Fathers", "Feasts", "Festivals", "Fire", "Fools", "Fortune", "Frost", "Fury", "Giants", "Gifts", "Glee", "Glory", "Grace", "Growth", "Happiness", "Harvest", "Hate", "Hatred", "Heroes", "History", "Honor", "Hope", "Horrors", "Humor", "Illumination", "Immortality", "Insanity", "Joy", "Judgement", "Justice", "Laughter", "Legacies", "Life", "Light", "Loss", "Luxury", "Magic", "Memorials", "Memories", "Mercy", "Misery", "Moonlight", "Mothers", "Mountains", "Mourning", "Mystery", "Nightmares", "Nights", "Oblivion", "Origins", "Pain", "Paradise", "Parents", "Parties", "Peace", "Perdition", "Phantoms", "Plagues", "Pleasure", "Poverty", "Power", "Preparation", "Pride", "Prosperity", "Protection", "Putrefaction", "Rapture", "Reckoning", "Redemption", "Regrets", "Rejoice", "Remembrance", "Rest", "Riches", "Riddles", "Safety", "Sanctuary", "Secrecy", "Secrets", "Shadows", "Silence", "Slaughter", "Snow", "Sorrow", "Souls", "Stars", "Storms", "Struggles", "Suffering", "Summoning", "Sunlight", "Terror", "Thunder", "Titans", "Torment", "Training", "Trials", "Triumphs", "Truth", "Vengeance", "Victory", "Visions", "Voices", "Void", "War", "Water", "Wealth", "Whispers", "Widows", "Wind", "Winds", "Wizardry", "Woe", "Wonder", "Work", "Wraiths"];

function generator$miscellaneous$dates() {

	i = Math.floor(Math.random() * 10); {
		if (i < 2) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			rnd8 = Math.floor(Math.random() * nm3.length);
			rnd9 = Math.floor(Math.random() * nm4.length);
			rnd10 = Math.floor(Math.random() * nm7.length);
			names = "Year: " + nm1[rnd] + nm2[rnd2] + ", Month: " + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm7[rnd7] + ", Day: " + nm3[rnd8] + nm4[rnd9] + nm7[rnd10];
		} else if (i < 5) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			rnd8 = Math.floor(Math.random() * nm8.length);
			names = "Month: " + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm7[rnd7] + ", Year of the " + nm8[rnd8];
		} else if (i < 8) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			rnd3b = Math.floor(Math.random() * nm3.length);
			rnd4b = Math.floor(Math.random() * nm4.length);
			rnd5b = Math.floor(Math.random() * nm5.length);
			rnd6b = Math.floor(Math.random() * nm6.length);
			rnd7b = Math.floor(Math.random() * nm7.length);
			rnd3c = Math.floor(Math.random() * nm3.length);
			rnd4c = Math.floor(Math.random() * nm4.length);
			rnd5c = Math.floor(Math.random() * nm5.length);
			rnd6c = Math.floor(Math.random() * nm6.length);
			rnd7c = Math.floor(Math.random() * nm7.length);
			if (rnd5 > 6) {
				while (rnd6 === 0) {
					rnd6 = Math.floor(Math.random() * nm6.length);
				}
			}
			if (rnd5b > 6) {
				while (rnd6b === 0) {
					rnd6b = Math.floor(Math.random() * nm6.length);
				}
			}
			if (rnd5c > 6) {
				while (rnd6c === 0) {
					rnd6c = Math.floor(Math.random() * nm6.length);
				}
			}
			names = "Year: " + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm7[rnd7] + ", Month: " + nm3[rnd3b] + nm4[rnd4b] + nm5[rnd5b] + nm6[rnd6b] + nm7[rnd7b] + ", Day: " + nm3[rnd3c] + nm4[rnd4c] + nm5[rnd5c] + nm6[rnd6c] + nm7[rnd7c];
		} else {
			rnd9 = Math.floor(Math.random() * nm9.length);
			rnd8 = Math.floor(Math.random() * nm8.length);
			names = "Month of " + nm9[rnd9] + ", Year of the " + nm8[rnd8];
		}
		return names;
	}

}