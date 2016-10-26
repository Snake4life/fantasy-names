function generator$dungeon_and_dragons$shifters(type) {
	var names1 = ["Acor", "Almond", "Ash", "Astro", "Badger", "Barb", "Basalt", "Basil", "Beast", "Birch", "Blast", "Blaze", "Bluff", "Bog", "Boulder", "Bramble", "Breach", "Briar", "Brock", "Brook", "Burst", "Canyon", "Char", "Chasm", "Cinder", "Claw", "Cliff", "Cloud", "Coal", "Cobalt", "Cobble", "Comet", "Cosmo", "Crag", "Crater", "Dash", "Drake", "Drift", "Dune", "Dusk", "Dust", "Echo", "Fang", "Flame", "Flare", "Flax", "Flint", "Flood", "Foam", "Fog", "Forest", "Fox", "Frost", "Frostbite", "Fume", "Fury", "Gale", "Glare", "Gorge", "Grime", "Grit", "Grove", "Gulch", "Gust", "Kindle", "Light", "Lumber", "Magma", "Mahogany", "Marsh", "Mercury", "Midnight", "Mire", "Moss", "Mountain", "Nebula", "Newt", "Nightfall", "Nightshade", "Nimbus", "North", "Nova", "Nyx", "Oak", "Ocean", "Onyx", "Pitch", "Pyre", "Pyro", "Quicksilver", "Ravine", "Ridge", "Rift", "River", "Rock", "Rubble", "Scar", "Shrub", "Silver", "Smoke", "Soot", "Spark", "Spike", "Spine", "Steam", "Steel", "Stone", "Storm", "Surge", "Talon", "Thicket", "Thistle", "Thorn", "Thunder", "Tide", "Tiger", "Timber", "Tinder", "Tor", "Torrent", "Vapor", "Vermin", "Vine", "Void", "Wave", "Willow", "Wolf", "Woods"];
	var names2 = ["Abyss", "Almond", "Amber", "Amethyst", "Anemone", "Aqua", "Aurora", "Autumn", "Birch", "Bloom", "Blossom", "Breeze", "Briar", "Brook", "Canyon", "Chestnut", "Cloud", "Coral", "Coyote", "Crest", "Cricket", "Crystal", "Dawn", "Dew", "Dewdrop", "Diamond", "Elm", "Ember", "Emerald", "Evening", "Feather", "Fern", "Flare", "Floe", "Flora", "Floret", "Flow", "Fluff", "Galaxy", "Gem", "Hail", "Harley", "Haze", "Hazel", "Horizon", "Ice", "Indigo", "Iris", "Isle", "Ivy", "Jade", "Jasmine", "Juniper", "Karma", "Lake", "Lavender", "Leaf", "Lily", "Luna", "Magenta", "Maple", "Marigold", "Meadow", "Midnight", "Mist", "Moon", "Moss", "Nebula", "Nutmeg", "Ocean", "Olive", "Opal", "Orchid", "Pearl", "Petal", "Pine", "Pinecone", "Plume", "Poison", "Pyro", "Quill", "Rain", "Raven", "Rill", "River", "Robin", "Rose", "Rosemary", "Ruby", "Saffron", "Sage", "Sapphire", "Scarlet", "Shade", "Silver", "Sky", "Snow", "Snowflake", "Spring", "Star", "Stardust", "Sugar", "Summer", "Sun", "Sunrise", "Sunset", "Sunshine", "Swill", "Thistle", "Tidal", "Tiger", "Tinder", "Topaz", "Twig", "Twilight", "Urchin", "Vapor", "Violet", "Whirl", "Willow", "Wind", "Wing", "Winter"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd2 = Math.floor(Math.random() * names2.length);
			names = names2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			names = names1[rnd];
		}
		return names;
	}

}