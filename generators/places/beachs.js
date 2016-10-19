function generator$places$beachs() {
	var nm1 = ["Abysmal", "Albatross", "Alligator", "Almond", "Amazon", "Apple Blossom", "Arctic", "Bamboo", "Barracuda", "Barren", "Birds of Paradise", "Black", "Black Boulder", "Black Coral", "Black Rock", "Blackrock", "Blindman's", "Blue", "Boulder", "Breakwater", "Brilliant", "Bronze", "Buccaneer", "Calm", "Calmest", "Cannon", "Cannonball", "Capricorn", "Champion", "Charmed", "Cheerless", "Cherry", "Cherry Blossom", "Cobalt", "Cocoa", "Coconut", "Cold", "Cold Water", "Coral", "Crescent", "Crescent Moon", "Crocodile", "Crystal", "Cursed", "Dancing", "Dark", "Darkest", "Dead", "Depraved", "Desert", "Deserted", "Diamond", "Distant", "Dolphin", "Dragon", "Dragonfly", "Dragontooth", "Dread", "Dreaded", "Driftwood", "Eagle", "Eastern", "Emerald", "Empty", "Enchanted", "Equator", "Ethereal", "Fire", "Fisherman's", "Flamingo", "Flat", "Floral", "Flowing", "Fluorescent", "Foaming", "Forbidden", "Frothy", "Frozen", "Giant", "Gleaming", "Glistening", "Gold", "Golden", "Golden Sands", "Grave", "Gray", "Green", "Harmonious", "Harmony", "Hermite Crab", "Honey Comb", "Hope", "Hot Water", "Hummingbird", "Hungry", "Hurricane", "Infernal", "Infinite", "Invisible", "Isolated", "Jade", "Jericho", "Jeronimo", "Laughing", "Lifeless", "Lighthouse", "Lime", "Living", "Lobster", "Lonely", "Long", "Lotus", "Lucent", "Majestic", "Manatee", "Manta", "Manta Ray", "Mermaid", "Mesmerizing", "Midnight", "Mighty", "Mirror", "Mirrored", "Misty", "Moaning", "Monkey", "Moving", "Mudcrab", "Mystery", "Mystique", "Neptune", "New", "New Hope", "New Spring", "Northern", "Oak", "Ocean City", "Oceanview", "Orange", "Orchid", "Oyster", "Oyster Pearl", "Palm", "Palm Tree", "Paradise", "Peaceful", "Pearl", "Pebble", "Pelican", "Perfumed", "Pirate", "Pirate Grove", "Pirate Ship", "Pirate's", "Pleasant", "Poseidon", "Pristine", "Quiet", "Raging", "Rainbow", "Raincloud", "Rainy", "Red", "Reflecting", "Relaxing", "Restless", "Rocky", "Rolling", "Rough", "Rushing", "Salty", "Sandbar", "Sandcrab", "Sandfoot", "Sandollar", "Sandy", "Sandy Cliffs", "Sanguine", "Sapphire", "Savage", "Seacliffs", "Seagull", "Seashell", "Serene", "Shaded", "Shadow", "Shady", "Shark", "Sharktooth", "Shimmering", "Shipwreck", "Shrimp", "Silent", "Silver", "Sleeping", "Soundless", "Southern", "Sparkling", "Starfish", "Sterile", "Stingray", "Stormy", "Sundown", "Sunken", "Sunken Ship", "Sunken Wreck", "Sunny", "Sunrise", "Sunset", "Sunshine", "Surf City", "Surfer", "Teal", "Tinted", "Tortoise", "Tortuga", "Tranquil", "Treasure", "Trinity", "Tropic", "Troubled", "Turbulent", "Turquoise", "Turtle", "Unknown", "Unstable", "Vast", "Victoria", "Violent", "Western", "Whale", "Whispering", "White", "White Boulder", "White Coral", "White Rock", "Wild", "Willow", "Windy", "Wondering", "Wrinkled", "Yearning"];
	var nm2 = ["Bank", "Beach", "Coast", "Coastline", "Edge", "Margin", "Beach", "Coast", "Sands", "Strand", "Shore", "Point", "Oceanfront", "Sands", "Cove", "Bay", "Paradise", "Seafront", "Shore", "Strand"];
	var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
	var nm4 = ["a", "e", "i", "o", "u", "y"];
	var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
	var nm6 = ["a", "e", "i", "o", "u", "y"];
	var nm7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];


	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		} else if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd1 = Math.floor(Math.random() * nm4.length);
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			names = nm3[rnd] + nm4[rnd1] + nm5[rnd2] + nm6[rnd3] + nm7[rnd4] + " " + nm2[rnd5]
		}
		return names;
	}

}