var nm1 = ["Ambersky", "Arctic", "Ash", "Bane", "Barbaric", "Black", "Bloodlust", "Bloodrose", "Bloodvenom", "Blue", "Broken", "Brown", "Brutal", "Calm", "Crescent", "Crimson", "Cruel", "Dark", "Dawn", "Dawnfall", "Dawnguard", "Dessert", "Dusk", "Duskfall", "Evening", "Feral", "Ferocious", "Fierce", "Golden", "Grey", "Hollow", "Imperial", "Kind", "Lichen", "Lightning", "Lost", "Lunar", "Lupine", "Lycan", "Midnight", "Morning", "Mountain", "Mystic", "Native", "Night", "Nightfall", "Nightshade", "Nightstar", "Primal", "Prime", "Raging", "Red", "Sanguis", "Savage", "Scarlet", "Scarred", "Sentinel", "Shadowed", "Silent", "Silver", "Silverback", "Solar", "Spirit", "Starry", "Sundown", "Sunset", "Thunder", "Tranquil", "Vanished", "Vengeful", "Vicious", "Whisper", "White", "Wild", "Moonlit", "Darkmoon", "Blue Moon", "Moonstone", "Bloodmoon", "Crescent Moon", "Moonvalley", "Full Moon", "Moon"];
var nm2 = ["Ambersky", "Arctic", "Ash", "Bane", "Barbaric", "Black", "Bloodlust", "Bloodrose", "Bloodvenom", "Blue", "Broken", "Brown", "Brutal", "Calm", "Crescent", "Crimson", "Cruel", "Dark", "Dawn", "Dawnfall", "Dawnguard", "Dessert", "Dusk", "Duskfall", "Evening", "Feral", "Ferocious", "Fierce", "Golden", "Grey", "Hollow", "Imperial", "Kind", "Lichen", "Lightning", "Lost", "Lunar", "Lupine", "Lycan", "Midnight", "Morning", "Mountain", "Mystic", "Native", "Night", "Nightfall", "Nightshade", "Nightstar", "Primal", "Prime", "Raging", "Red", "Sanguis", "Savage", "Scarlet", "Scarred", "Sentinel", "Shadowed", "Silent", "Silver", "Silverback", "Solar", "Spirit", "Starry", "Sundown", "Sunset", "Thunder", "Tranquil", "Vanished", "Vengeful", "Vicious", "Whisper", "White", "Wild"];
var nm3 = ["Alpha", "Angel", "Ash", "Beta", "Blood", "Burst", "Canine", "Canis", "Cave", "Creek", "Crows", "Darkness", "Delta", "Depths", "Dream", "Eclipse", "Edge", "Eye", "Eyed", "Eyes", "Feather", "Fire", "Forest", "Gloom", "Grin", "Heart", "Hill", "Ice", "Lake", "Light", "Lupis", "Oak", "Oasis", "Omega", "Peak", "Pride", "Raven", "River", "Rock", "Rufus", "Shadow", "Silence", "Sky", "Snow", "Star", "Stars", "Stealth", "Summit", "Tail", "Thunder", "Timber", "Tooth", "Valley", "Venture", "Water", "Woodland"];
var nm4 = ["Alpha", "Angel", "Ash", "Beta", "Blood", "Burst", "Canine", "Canis", "Cave", "Creek", "Crows", "Darkness", "Delta", "Depths", "Dream", "Eclipse", "Edge", "Eye", "Eyed", "Eyes", "Feather", "Fire", "Forest", "Gloom", "Grin", "Heart", "Hill", "Ice", "Lake", "Light", "Lupis", "Moon", "Oak", "Oasis", "Omega", "Peak", "Pride", "Raven", "River", "Rock", "Rufus", "Shadow", "Silence", "Sky", "Snow", "Star", "Stars", "Stealth", "Summit", "Tail", "Thunder", "Timber", "Tooth", "Valley", "Venture", "Water", "Woodland"];
var nm5 = ["Banes", "Canines", "Claws", "Furs", "Growlers", "Guardians", "Hounds", "Howlers", "Hunters", "Keepers", "Manes", "Nightstalkers", "Nightwalkers", "Prowlers", "Shadows", "Stalkers", "Walkers", "Warriors"];

function generator$fantasy$werewolf_packs() {

	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + " " + nm4[rnd3] + " Pack";
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			names = nm2[rnd] + " " + nm3[rnd3] + " Pack";
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			names = "The " + nm1[rnd] + " " + nm5[rnd3];
		}
		return names;
	}

}