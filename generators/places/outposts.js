var names1 = ["Amber", "Anger", "Anvil", "Arrow", "Autumn", "Black", "Blood", "Bone", "Boulder", "Bracken", "Bright", "Broad", "Bronze", "Brown", "Chill", "Cold", "Copper", "Crystal", "Dark", "Dawn", "Dead", "Death", "Dire", "Dream", "Dry", "Dune", "Dusk", "Dust", "East", "Ebon", "Ember", "Ever", "Far", "Feather", "Fel", "Fire", "Flame", "Flint", "Fog", "Forgotten", "Frost", "Fuse", "Ghost", "Gold", "Hammer", "Heart", "High", "Honor", "Iron", "Living", "Lost", "Mad", "Maple", "Marsh", "Moon", "Moss", "Murk", "Musk", "Narrow", "North", "Oak", "Phantom", "Plague", "Pyre", "Raven", "Razor", "River", "Rubble", "Sabre", "Sand", "Shade", "Shadow", "Shale", "Shatter", "Silver", "Snow", "Sorrow", "South", "Splinter", "Spring", "Star", "Still", "Stone", "Summer", "Sun", "Swamp", "Swift", "Thunder", "Timber", "Twilight", "Twin", "Under", "Up", "Valor", "West", "Whisper", "White", "Wild", "Winter", "Wither"];
var names2 = ["band", "barks", "blossom", "branch", "break", "breeze", "bridge", "brook", "claw", "cloud", "clutch", "crest", "cross", "crown", "deep", "dew", "drift", "dust", "fall", "falls", "fang", "fen", "field", "fist", "fold", "foot", "forge", "front", "fury", "garde", "gate", "glen", "grasp", "grip", "grove", "guard", "gulch", "hand", "hill", "hold", "holde", "keep", "lake", "land", "landing", "leaf", "light", "lord", "maw", "mill", "mines", "mist", "more", "mount", "mouth", "pass", "peak", "pine", "plume", "point", "prey", "reach", "ridge", "rock", "rune", "runner", "scream", "sea", "shear", "shield", "shire", "shore", "song", "speaker", "spear", "spine", "spire", "springs", "star", "storm", "stream", "strider", "summit", "sword", "talon", "tomb", "vale", "vault", "vein", "wall", "ward", "watch", "watcher", "water", "web", "well", "wharf", "wind", "wing", "wood"];
var names3 = ["Acropolis", "Barracks", "Barrier", "Base", "Bastille", "Blockade", "Bulwark", "Camp", "Castle", "Citadel", "Command", "Depot", "Encampment", "Enclave", "Fort", "Fortification", "Fortress", "Front", "Frontier", "Garde", "Garrison", "Guard", "Harbor", "Harborage", "Haven", "Headquarters", "Hideout", "Hold", "Outpost", "Point", "Post", "Rampart", "Redoubt", "Refuge", "Retreat", "Sanctuary", "Site", "Stand", "Station", "Stockade", "Stronghold", "Terminal", "Wall", "Watch"];
var names4 = ["Arid", "Autumn's", "Azure", "Barren", "Black Scar", "Blood", "Bone", "Boulder", "Burning", "Canyon", "Cinder", "Crossroad", "Crown", "Crystal", "Dawn", "Dead", "Death", "Desolation", "Dire", "Doom", "Dreamer's", "Dusk", "Dusty", "Ebon", "Echo", "Eclipse", "Eco-Dome", "Ember", "Eternal", "Falcon", "Final", "First", "Fool's Hope", "Forest", "Forsaken", "Forward", "Fury", "Garden", "Gloom", "Hidden", "Honor", "Hunter", "Iron", "Lagoon", "Lake", "Light's", "Marsh", "Marshal", "Mountain", "Mountain-Foot", "Night", "Nightmare", "Oasis", "Obsidian", "Ocean", "Oracle", "Phantom", "Pinnacle", "Raven", "Razor", "River", "Sandy", "Scarlet", "Sea", "Seabreeze", "Second", "Shadow", "Skeleton", "Sleeping", "Solitude", "Sorrow", "Spring's", "Starfall", "Starlight", "Storm", "Summer's", "Summit", "Talon", "Tempest", "Terror", "Third", "Thunder", "Thunderstorm", "Timber", "Triumph", "Twilight", "Twin", "Valley", "Valor", "Vendetta", "Vengeance", "Venom", "Victor", "Vortex", "Warden", "Watcher's", "Wild", "Wildling", "Winter's", "Writhing"];

function generator$places$outposts() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			names = names1[rnd] + names2[rnd2] + " " + names3[rnd3];
		} else {
			rnd = Math.floor(Math.random() * names4.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			names = names4[rnd] + " " + names3[rnd2];
		}
		return names;
	}

}