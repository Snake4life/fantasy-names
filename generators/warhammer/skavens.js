function generator$warhammer$skavens() {
	var nm1 = ["", "", "", "", "cr", "chr", "ch", "kr", "khr", "kh", "q", "qh", "qr", "qhr", "sn", "sk", "sr", "str", "st", "skr", "th", "thr", "tr", "t", "v", "x", "z", "zr", "zh", "zn"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ie", "ee", "uo", "ue", "uee", "ia", "ua"];
	var nm3 = ["ch", "cn", "cr", "cq", "cx", "gz", "gr", "gch", "gq", "k", "kh", "kr", "kz", "ktr", "kn", "nq", "nk", "nkr", "nqr", "q", "qr", "qz", "qtr", "sh", "shr", "shq", "sq", "sqh", "sqr", "sk", "skr", "t", "thr", "tr", "tz", "x", "xr", "xk", "xkr", "xq", "zq", "zk", "zkr"];
	var nm4 = ["ch", "k", "kch", "l", "lk", "n", "nq", "t", "tch"];
	var nm5 = ["amber", "ash", "ashen", "barb", "barbed", "bitter", "black", "blazing", "bone", "bristle", "broad", "cask", "cinder", "claw", "coven", "crag", "craven", "crest", "crow", "dark", "dead", "death", "deep", "dusk", "dust", "ember", "farrow", "feather", "fiery", "fire", "flint", "fore", "great", "grim", "head", "heart", "high", "iron", "keen", "krag", "lone", "low", "mourn", "night", "pine", "pride", "rapid", "rough", "shadow", "silent", "silver", "skull", "sky", "slate", "steel", "stern", "stone", "tusk", "vermin", "wild", "wind"];
	var nm6 = ["back", "basher", "bender", "binder", "bleeded", "blight", "blood", "bone", "born", "bough", "breaker", "breath", "brow", "buster", "chaser", "chest", "chewer", "chin", "claw", "cleaver", "crest", "crusher", "cutter", "digger", "fang", "fangs", "finger", "fingers", "fist", "flayer", "fury", "gaze", "gazer", "grip", "hunter", "jaw", "lash", "lasher", "master", "maul", "maw", "reaper", "reaver", "ripper", "runner", "sbark", "scar", "scream", "seeker", "shrieker", "slayer", "snout", "spine", "spire", "splitter", "stalker", "striker", "tail", "taker", "thorn", "walker", "watcher", "weaver"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm5.length);
		rnd2 = Math.floor(Math.random() * nm6.length);
		while (nm5[rnd] === nm6[rnd2]) {
			rnd2 = Math.floor(Math.random() * nm6.length);
		}
		lName = " " + nm5[rnd] + nm6[rnd2];
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (i < 6) {
			while (rnd < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
			}
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + lName;
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + lName;
		}
		return names;
	}

}