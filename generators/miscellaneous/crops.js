var names1 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var names2 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z", "br", "cr", "dr", "fr", "gr", "kr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "ch", "ph", "sh"];
var names3 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ea", "ao", "ee", "oo", "io", "eo", "ou"];
var names4 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z", "br", "cr", "dr", "fr", "gr", "kr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "ch", "ph", "sh", "bb", "cc", "dd", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt"];
var names5 = [" Berry", " Root", " Fruit", " Grass", " Wheat", " Seed", " Pea", " Nut", " Pepper", " Flower", " Bean", "bage", "bber", "ber", "ble", "ca", "can", "cane", "cao", "ce", "ch", "chin", "chio", "cra", "der", "dis", "drin", "ds", "flower", "gar", "ger", "go", "gus", "kin", "la", "lar", "le", "ley", "lic", "lion", "live", "lla", "llar", "llion", "lon", "lone", "mat", "mber", "me", "meg", "mel", "melo", "men", "min", "mon", "mond", "mp", "na", "nach", "nder", "ne", "nel", "nell", "nelo", "nger", "ngin", "ngo", "ni", "nip", "nna", "nnel", "nola", "nt", "ntin", "nto", "nut", "pe", "per", "phe", "pper", "ra", "rab", "rey", "rgus", "riak", "rin", "rine", "rli", "rlin", "rn", "rom", "rot", "rry", "ry", "sam", "same", "save", "seed", "sh", "sil", "sley", "ss", "star", "ster", "tarin", "te", "terd", "tine", "to", "tro", "ts", "tus", "va", "ve", "ver", "x", "ya", "yoca", "yot", "ze"];

var names6 = ["Abyss", "Angel", "Arctic", "Arrow", "Ash", "Autumn", "Bitter", "Black", "Blister", "Blood", "Blue", "Broad", "Brown", "Bruise", "Candy", "Cave", "Cavern", "Cinder", "Cliff", "Demon", "Devil", "Dragon", "Drake", "Dream", "Earth", "Ember", "Emerald", "Fade", "Fire", "Flux", "Forest", "Golden", "Ground", "Guinea", "Hate", "Hazel", "Heart", "Hybernation", "Hybrid", "Ice", "Ivory", "Jade", "King's", "Knot", "Lake", "Love", "Mage", "Mammoth", "Mellow", "Mercy", "Moon", "Mountain", "Mud", "Ocean", "Peace", "Pygmy", "Rain", "Red", "River", "Ruby", "Sanguine", "Sapphire", "Sea", "Shimmer", "Silk", "Snowy", "Sorrow", "Sour", "Spring", "Star", "Stinky", "Storm", "Summer", "Sun", "Swamp", "Sweet", "Thorn", "Thunder", "Tiger", "Tundra", "Venom", "Viper", "Void", "Water", "White", "Wild", "Winter", "Wolf", "Worm", "Yellow"];
var names7 = ["Almond", "Apple", "Asparagus", "Banana", "Barley", "Basil", "Beans", "Beets", "Broccoli", "Cabbage", "Cacao", "Cane", "Canola", "Cardamom", "Carrot", "Cassava", "Cauliflower", "Celeriac", "Celery", "Chayote", "Cherry", "Chili", "Cilantro", "Clementine", "Clover", "Coconut", "Coffee", "Collard", "Corn", "Cotton", "Cress", "Cucumber", "Date", "Dill", "Fennel", "Fig", "Flax", "Garlic", "Ginger", "Grape", "Grass", "Guava", "Hemp", "Henna", "Hop", "Jasmine", "Jute", "Kale", "Kohlrabi", "Lavender", "Leek", "Lemon", "Lettuce", "Lime", "Mace", "Maize", "Mandarin", "Mango", "Melon", "Mint", "Mushroom", "Mustard", "Nectarine", "Nutmeg", "Nuts", "Oats", "Okra", "Olive", "Onion", "Papaya", "Parsley", "Parsnip", "Pea", "Peach", "Peanut", "Pear", "Pecan", "Pepper", "Pistachio", "Plum", "Pomelo", "Potato", "Prune", "Pumpkin", "Radish", "Rice", "Root", "Rubber", "Rye", "Safflower", "Scallion", "Seeds", "Sesame", "Soy", "Spinach", "Sprouts", "Squash", "Sugar", "Tangerine", "Tapioca", "Tea", "Tomato", "Turnip", "Vanilla", "Wheat", "Yam", "Zucchini"];

function generator$miscellaneous$crops() {

	i = Math.floor(Math.random() * 10); {
		if (i < 2) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names5[rnd4];
		} else if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names3.length);
			if (rnd3 > 9) {
				while (rnd5 > 9) {
					rnd5 = Math.floor(Math.random() * names3.length);
				}
			}
			rnd6 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names3[rnd5] + names5[rnd6];
		} else {
			rnd = Math.floor(Math.random() * names6.length);
			rnd2 = Math.floor(Math.random() * names7.length);
			names = names6[rnd] + " " + names7[rnd2];
		}
		return names;
	}

}