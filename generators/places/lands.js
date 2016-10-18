var nm1 = ["Haunted", "Naked", "Angry", "Arctic", "Arid", "Bare", "Barren", "Black", "Bleak", "Boiling", "Bone-Dry", "Burned", "Burning", "Calm", "Calmest", "Charmed", "Cunning", "Cursed", "Dangerous", "Dark", "Darkest", "Dead", "Decayed", "Decaying", "Dehydrated", "Depraved", "Deserted", "Desolate", "Desolated", "Distant", "Dread", "Dreaded", "Dreadful", "Dreary", "Dry", "Eastern", "Empty", "Enchanted", "Ethereal", "Ever Reaching", "Everlasting", "Feared", "Fearsome", "Fiery", "Flat", "Forbidden", "Forbidding", "Frightening", "Frozen", "Grave", "Grim", "Hellish", "Homeless", "Hopeless", "Hot", "Hungry", "Infernal", "Infinite", "Isolated", "Killing", "Laughing", "Lifeless", "Light", "Lightest", "Lonely", "Malevolent", "Malicious", "Mighty", "Mirrored", "Misty", "Moaning", "Monotonous", "Motionless", "Mysterious", "Narrow", "Neverending", "Northern", "Open", "Painful", "Parched", "Perfumed", "Quiet", "Raging", "Red", "Restless", "Rocky", "Sad", "Sandy", "Sanguine", "Savage", "Scorching", "Scorched", "Shadowed", "Silent", "Sly", "Soundless", "Southern", "Sterile", "Thundering", "Treacherous", "Twisting", "Uncanny", "Uninteresting", "Uninviting", "Unknown", "Unresting", "Unwelcoming", "Vast", "Violent", "Voiceless", "Waterless", "Western", "Whispering", "White", "Windy", "Withered", "Yelling", "Yellow"];
var nm2 = ["Badlands", "Barrens", "Borderlands", "Desert", "Expanse", "Fields", "Grasslands", "Hinterland", "Prairie", "Savanna", "Steppes", "Tundra", "Wasteland", "Wastes", "Wilderness", "Wilds", "Emptyness", "Frontier", "Flatlands"];

function generator$places$lands() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 5) {
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
		} else {
			names = nm1[rnd] + " " + nm2[rnd2];
		}
		return names;
	}

}