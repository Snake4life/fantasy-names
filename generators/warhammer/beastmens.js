function generator$warhammer$beastmens() {
	var nm1 = ["b", "d", "g", "gh", "k", "kn", "kh", "m", "n", "t", "th", "v", "z", "zh"];
	var nm2 = ["a", "o", "u", "a", "o", "u", "a", "o", "u", "a", "o", "u", "a", "o", "u", "e", "i", "e", "i", "au", "ao", "aa", "oo"];
	var nm3 = ["cr", "cn", "cc", "cv", "cth", "g", "gh", "gth", "gd", "gdh", "k", "kh", "kz", "kk", "kr", "kt", "kth", "l", "lg", "lgh", "lgr", "ltr", "lc", "n", "ng", "nk", "nc", "r", "rr", "rz", "rg", "rk", "rkr", "rgh", "rth", "zr", "zg", "zc", "zk", "zz"];
	var nm4 = ["c", "g", "k", "r", "x", "z"];
	var nm5 = ["amber", "ashen", "battle", "bitter", "black", "blazing", "bleeding", "blood", "bright", "bristle", "broad", "brown", "chaos", "cinder", "dark", "dawn", "dead", "death", "ember", "fallen", "fiery", "fire", "flame", "frozen", "giant", "gloom", "gore", "grand", "gray", "great", "grim", "grizzly", "heavy", "hell", "iron", "keen", "lightning", "lone", "metal", "molten", "moon", "morning", "moss", "mountain", "nether", "night", "onyx", "plain", "proud", "pyre", "rage", "rapid", "rough", "rumble", "serpent", "shadow", "sharp", "shatter", "silent", "silver", "slug", "solid", "spring", "star", "steel", "stern", "stone", "storm", "strong", "swift", "thunder", "wild"];
	var nm6 = ["arm", "bane", "belly", "belt", "braid", "breath", "brow", "chest", "chin", "claw", "coat", "crest", "eye", "eyes", "fang", "fangs", "feet", "finger", "fingers", "fist", "foot", "gaze", "grip", "gut", "hair", "hand", "hands", "head", "heart", "hide", "jaw", "mane", "manes", "mantle", "maw", "mouth", "paw", "pelt", "ridge", "scar", "shoulder", "shoulders", "snout", "spine", "tail", "teeth", "toe", "toes", "tongue", "tooth", "wound"];


	i = Math.floor(Math.random() * 10); {
		if (i < 6) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			while (nm5[rnd] === nm6[rnd2]) {
				rnd2 = Math.floor(Math.random() * nm6.length);
			}
			names = nm5[rnd] + nm6[rnd2];
		}
		return names;
	}

}