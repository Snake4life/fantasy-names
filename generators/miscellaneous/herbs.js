function generator$miscellaneous$herbs() {
	var names1 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "ch", "sh", "ph", "br", "cr", "dr", "gr", "kr", "pr", "str", "vr", "wr", "", "bl", "cl", "gl", "fl", "kl", "pl", "sl"];
	var names2 = ["a", "e", "i", "o", "u"];
	var names3 = ["sh", "ch", "ph", "cr", "dr", "gr", "str", "cl", "gl", "kl", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bb", "cc", "dd", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt"];
	var names4 = ["a", "e", "i", "o", "u", "ea", "eo", "ia", "io"];
	var names5 = [" Bud", " Grain", " Grass", " Husk", " Kernel", " Leaf", " Nut", " Petal", " Root", " Shoot", " Spore", " Stalk", "bacca", "bi", "ce", "cely", "cory", "cress", "damom", "damon", "der", "fras", "frass", "fron", "gane", "gano", "ge", "gella", "ger", "gon", "grass", "jora", "joram", "ka", "kam", "kawa", "lantro", "lary", "lery", "ley", "li", "lic", "lica", "lla", "lt", "ltro", "me", "meg", "meric", "min", "mine", "misa", "mom", "mon", "mric", "namon", "nder", "nel", "nip", "nis", "nise", "ntro", "nut", "para", "per", "rage", "ram", "ran", "raway", "rel", "rian", "ric", "rica", "rice", "rika", "rise", "rlic", "ron", "rrel", "rry", "rway", "ry", "sabi", "sbi", "seed", "shell", "shil", "sia", "sil", "sley", "so", "sop", "ssop", "th", "tro", "ve", "ves", "vil", "way", "yenne"];

	var names6 = ["Abyss", "Angel", "Arctic", "Ash", "Assassin", "Autumn", "Bitter", "Black", "Blister", "Blood", "Blue", "Brown", "Bruise", "Candy", "Cave", "Cavern", "Cinder", "Cliff", "Demon", "Devil", "Dragon", "Drake", "Dream", "Earth", "Elephant", "Ember", "Emerald", "Fade", "Fire", "Flux", "Forest", "Golden", "Hate", "Hazel", "Heart", "Hybernation", "Ice", "Ivory", "Jade", "King's", "Knettle", "Knot", "Lake", "Love", "Mage", "Mammoth", "Mellow", "Mercy", "Monk's", "Moon", "Mountain", "Mud", "Ocean", "Orange", "Peace", "Pearl", "Pygmy", "Queen's", "Rain", "Red", "River", "Ruby", "Sanguine", "Sapphire", "Sea", "Shimmer", "Silk", "Snowy", "Sorrow", "Sour", "Spark", "Spring", "Star", "Stinky", "Storm", "Summer", "Sun", "Swamp", "Sweet", "Thorn", "Thunder", "Tiger", "Tundra", "Venom", "Viper", "Void", "Water", "White", "Wild", "Winter", "Witch's", "Wolf", "Worm", "Yellow"];
	var names7 = ["Angelica", "Anise", "Aniseed", "Avens", "Barberry", "Bark", "Basil", "Bay Leaf", "Blossom", "Borage", "Caraway", "Cardamom", "Cassia", "Catnip", "Celery", "Chervil", "Chicory", "Chives", "Cilantro", "Cinnamon", "Clary", "Clove", "Coriander", "Cress", "Cudweed", "Culantro", "Cumin", "Curry Leaf", "Dill", "Dill Seed", "Fennel", "Fenugreek", "Flower", "Galangal", "Galingale", "Garlic", "Ginger", "Grains", "Grass", "Herb", "Hyssop", "Lavender", "Leaf", "Leaves", "Licorice", "Lovage", "Mace", "Mallow", "Marjoram", "Mint", "Moss", "Mustard", "Nigella", "Nutmeg", "Oregano", "Paprika", "Parsley", "Pepper", "Peppermint", "Petal", "Quassia", "Root", "Rosemary", "Rue", "Safflower", "Saffron", "Sage", "Salt", "Sassafras", "Savory", "Seed", "Shiso", "Sorrel", "Spearmint", "Spice", "Sumac", "Tarragon", "Thyme", "Turmeric", "Vanilla", "Bloom", "Tea Leaf", "Ivy", "Weed", "Creeper", "Vine"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			if (rnd > 41) {
				while (rnd3 < 11) {
					rnd3 = Math.floor(Math.random() * names3.length);
				}
			}
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5];
		} else {
			rnd = Math.floor(Math.random() * names6.length);
			rnd2 = Math.floor(Math.random() * names7.length);
			names = names6[rnd] + " " + names7[rnd2];
		}
		return names;
	}

}