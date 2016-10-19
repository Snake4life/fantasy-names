function generator$places$plantations(type) {
	var nm1 = ["Allen", "Alt", "Ash", "Asp", "Aspen", "Autumn", "Banner", "Barley", "Beaver", "Bee", "Beech", "Belle", "Bird", "Birds", "Black", "Bleak", "Bog", "Boulder", "Brier", "Broad", "Brown", "Buck", "Castle", "Cedar", "Cherry", "Cinnamon", "Clare", "Clay", "Clear", "Clover", "Cold", "Cole", "Cool", "Craw", "Creek", "Crescent", "Crimson", "Crow", "Dawn", "Dusk", "East", "Edge", "Elk", "Elm", "Ever", "Fair", "Far", "Farm", "Forest", "Fox", "Free", "Frog", "Frost", "Glen", "Good", "Grace", "Grass", "Gray", "Green", "Grime", "Hare", "Haw", "Hazel", "High", "Hill", "Holly", "Home", "Honey", "Hope", "Humble", "Idle", "Ivy", "Jade", "King", "Kings", "Lake", "Lang", "Lily", "Locust", "Log", "Long", "Low", "Marsh", "Mel", "Mid", "Middle", "Mill", "Moon", "Moss", "Mud", "Myrtle", "Narrow", "Nettle", "New", "Noble", "North", "Oak", "Oat", "Peace", "Pine", "Pleasant", "Raven", "Red", "Rich", "Ridge", "Rivers", "Rock", "Rose", "Rosen", "Rust", "Salt", "Sand", "Sea", "Shade", "Shadow", "Short", "Snow", "South", "Spring", "Stag", "Star", "Stone", "Summer", "Swan", "Tangle", "Thorn", "Under", "West", "Wheat", "Whit", "White", "Wild", "Willow", "Wind", "Winter", "Wood", "Worm"];
	var nm2 = ["bald", "bay", "bend", "berry", "bloom", "blossom", "bluff", "borough", "bourne", "branch", "bridge", "brook", "burg", "burgh", "burn", "bury", "cairn", "cove", "creek", "dale", "dam", "dew", "down", "field", "fields", "font", "ford", "green", "ground", "grove", "hall", "haven", "hill", "hope", "isle", "land", "lands", "lane", "lawn", "meadow", "mond", "mont", "more", "moss", "mount", "mountain", "mourne", "mouth", "pebble", "plains", "point", "pond", "pool", "port", "rest", "ridge", "river", "rock", "side", "song", "sor", "spring", "springs", "stead", "stone", "stones", "thorne", "ton", "town", "vale", "valley", "view", "ville", "wall", "way", "well", "wild", "will", "wood", "woods", "worth", "worthy"];
	var nm3 = ["Plantation", "Plantation House", "Manor", "Home", "Mansion", "Hall", "Plantation"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		names = nm1[rnd] + nm2[rnd2] + " " + nm3[rnd3];
		return names;
	}

}