function generator$places$parks() {
	var names1 = ["Almond", "Angel", "Angel Island", "Angelwing", "Antelope", "Bamboo", "Bayview", "Bearhug", "Big Pond", "Birch", "Birdsong", "Blossom", "Blue Laguna", "Boulderfield", "Briarwood", "Broadview", "Bronze Arch", "Cascade", "Castle", "Cherry Blossom", "Chestnut", "City Hall", "City Square", "Clear Lake", "Clearview", "Coldwater", "Community", "Cottonfield", "Creekside", "Crescent", "Crossroad", "Crow Feather", "Crown", "Crystal Cove", "Crystal Lake", "Cypress", "Diamond", "Discovery", "Dogwood", "Eagle Eye", "East River", "Echo", "Elm", "Emerald", "Emerald Moss", "Exploration", "Fairview", "Fletcher", "Flower", "Flowerscent", "Foxtail", "Gardenland", "Glacier Bay", "Gladstone", "Golden", "Golden Gate", "Grand Avenue", "Grand Lake", "Grandview", "Great Valley", "Green Marine", "Greenbelt", "Greenfair", "Greenwood", "Grizzle Forest", "Habitat", "Harborview", "Harmony", "Hazelnut", "Heavenly", "High Valley", "Highland", "Hope", "Hot Spring", "Hummingbird", "Ironbark", "Jade", "Junction", "Juniper", "Keystone", "King's", "Ladybug", "Lakeview", "Lakewood", "Liberty", "Lighthouse", "Little Brook", "Little River", "Long Lake", "Mahogany", "Majestic", "Maple", "Maple Grove", "Maple Leaf", "Maple Wood", "Marine", "Meadows", "Memorial", "Mercy", "Midland", "Mirror Lake", "Moonlight", "Morning Dew", "Mountain Spring", "Mushroom", "Natural Bridge", "New Creek", "New Forest", "Nightingale", "Northlake", "Oakland", "Observatory", "Ocean Breeze", "Oceanside", "Old Forest", "Open Water", "Oracle", "Orchard", "Owlfeather", "Owlwing", "Pandora", "Peace", "Petal", "Phoenix", "Pigeon Point", "Pineneedle", "Pioneer", "Pleasant View", "Portal", "Prospect", "Pygmy", "Raccoon", "Rainbow", "Ravine", "Red Fern", "Red Squirrel", "Red Tail", "Redwood", "River View", "Riverbank", "Riverfront", "Riverside", "Riverview", "Rosemary", "Rosewood", "Royal Isle", "Ruby", "Runestone", "Salt Point", "Sand Cove", "Sapphire", "Sapphire Creek", "Sea Breeze", "Seacrest", "Seashore", "Seaside", "Serenity", "Shadow", "Shore", "Sierra", "Silver", "Silver Lake", "Silver Oak", "Silver Rock", "Silverwood", "Small Pond", "Snowflake", "Solstice", "Songbird", "Soundscape", "South Point", "Southside", "Spring", "Spring Creek", "Stone Lake", "Strawberry", "Summit", "Sun Valley", "Sunnyside", "Sunrise", "Sunset", "Temple", "Thornbush", "Thyme Point", "Tranquil", "Triangle", "Trillium", "Twilight", "Twin Lake", "Twin River", "Two River", "University", "Virgin", "Waterfront", "West Beach", "White Stag", "Wild Rose", "Wildlife", "Wildwood", "Willow", "Windy", "Wolf Point"];
	var names2 = ["Park", "Gardens", "Meadows", "Garden", "Plaza", "Grounds"];

	var names3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
	var names4 = ["a", "e", "i", "o", "u", "y"];
	var names5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
	var names6 = ["a", "e", "i", "o", "u"];
	var names7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];


	i = Math.floor(Math.random() * 10); {
		if (i < 6) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			name = names1[rnd] + " " + names2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			rnd5 = Math.floor(Math.random() * names7.length);
			rnd6 = Math.floor(Math.random() * names2.length);
			name = names3[rnd] + names4[rnd2] + names5[rnd3] + names6[rnd4] + names7[rnd5] + " " + names2[rnd6];
		}
		return name;
	}

}