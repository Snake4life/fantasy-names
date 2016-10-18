var nm1 = ["Agile", "Ancient", "Angry", "Arid", "Able", "Bad", "Big", "Bitter", "Black", "Blaring", "Blind", "Blue", "Bold", "Bronze", "Brown", "Buzzing", "Calm", "Classic", "Cold", "Cool", "Crazy", "Cruel", "Dapper", "Dark", "Defiant", "Diligent", "Double", "Eager", "Evil", "False", "Fast", "Fatal", "Feline", "Forsaken", "Free", "Frozen", "Gentle", "Gold", "Golden", "Grand", "Grave", "Gray", "Greedy", "Grim", "Happy", "Harsh", "High", "Hollow", "Hot", "Huge", "Humming", "Hungry", "Idle", "Infamous", "Infinite", "Ironclad", "Jagged", "Keen", "Last", "Lazy", "Light", "Little", "Livid", "Lone", "Long", "Loud", "Low", "Loyal", "Mad", "Major", "Mellow", "Nervous", "Numb", "Old", "Pale", "Parallel", "Prime", "Proud", "Quick", "Quiet", "Ragged", "Rapid", "Rare", "Reckless", "Red", "Regal", "Rough", "Round", "Royal", "Rude", "Sharp", "Shy", "Silent", "Silver", "Slim", "Small", "Smooth", "Subtle", "Sweet", "Swift", "Tiny", "Tough", "Vain", "Vengeful", "Vicious", "Vivid", "Warped", "White", "Wicked", "Wild", "Wise"];
var nm2 = ["Albatross", "Freak", "Banshee", "Voodoo", "Arrow", "Beast", "Bee", "Beetle", "Bird", "Blimp", "Bolt", "Bomb", "Bomber", "Boomerang", "Boy", "Bullet", "Buzzard", "Centurion", "Chick", "Cobra", "Condor", "Crane", "Crow", "Daddy", "Dart", "Darter", "Diver", "Dragon", "Dragonfly", "Ducchess", "Duck", "Duke", "Eagle", "Falcon", "Fly", "Ghost", "Goose", "Gryphon", "Gull", "Harrier", "Hawk", "Hornet", "Ibis", "Jet", "King", "Legionnaire", "Lightning", "Mamba", "Mommy", "Mosquito", "Moth", "Overcast", "Owl", "Pelican", "Phantom", "Queen", "Raven", "Robin", "Rocket", "Serpent", "Shooter", "Sparrow", "Spirit", "Stork", "Thunder", "Torpedo", "Viper", "Vulture", "Widow", "Woodpecker"];
var nm3 = ["Aerial", "Agile", "Air", "Avian", "Azure", "Banshee", "Brass", "Bright", "Chaos", "Cloud", "Dark", "Demon", "Devil", "Dragon", "Dream", "Drift", "Ebon", "Feral", "Flight", "Flying", "Free", "Frost", "Ghost", "Grey", "Heaven", "Hell", "Iron", "Little", "Mad", "Monster", "Night", "Nimble", "Phantom", "Prime", "Quick", "Rapid", "Rogue", "Shadow", "Sky", "Star", "Swift", "Thunder", "Twin", "Wild", "Wrath"];
var nm4 = ["beast", "blast", "blaze", "blitz", "bolt", "bomb", "brute", "bullet", "burst", "charge", "charm", "comet", "core", "cry", "eater", "edge", "fire", "flare", "flight", "flow", "flux", "force", "freak", "fury", "glider", "hail", "heat", "lance", "light", "master", "nova", "pulse", "punch", "pyre", "rage", "raid", "rise", "roar", "rush", "scream", "shade", "spark", "storm", "strike", "thunder", "tooth", "urge", "ward", "wing", "wrath"];

function generator$miscellaneous$airplanes() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		}
		return names;
	}

}