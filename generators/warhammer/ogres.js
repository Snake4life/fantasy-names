function generator$warhammer$ogres() {
	var nm1 = ["b", "br", "cr", "d", "dr", "g", "gr", "gl", "k", "kr", "n", "q", "qr", "r", "skr", "sk", "sg", "sgr", "tr", "v", "vr", "z", "zr"];
	var nm2 = ["a", "o", "u", "a", "o", "u", "a", "o", "u", "a", "o", "u", "a", "o", "u", "e", "e", "ea", "ao", "ua", "au"];
	var nm3 = ["cl", "cr", "dgr", "ddr", "dz", "g", "gz", "gdr", "gbr", "gr", "gk", "gkr", "k", "kr", "kgz", "kg", "kgr", "kdr", "kb", "lgr", "lkf", "lgf", "", "ldr", "lgb", "lgd", "lgdr", "lzr", "lz", "ng", "ngr", "nd", "ndr", "nk", "nkz", "r", "rg", "rgr", "rgz", "rz", "s", "sgr", "sd", "sfl", "sgl"];
	var nm4 = ["c", "d", "dd", "g", "gg", "k", "kk", "s"];
	var nm5 = ["barb", "beast", "bitter", "black", "blood", "blunt", "bone", "boulder", "brick", "bristle", "bronze", "brown", "cask", "chain", "chest", "coal", "cold", "dark", "dew", "dim", "dirt", "dust", "earth", "ember", "fern", "fire", "flame", "flint", "frost", "froth", "gold", "gore", "granite", "gravel", "green", "gut", "guts", "hill", "horn", "horse", "iron", "keg", "krag", "lone", "long", "man", "metal", "molten", "mud", "oat", "orb", "ore", "pebble", "rage", "rain", "rock", "simple", "slate", "snow", "stone", "stout", "strong", "tusk", "wild"];
	var nm6 = ["back", "bane", "bash", "basher", "beard", "belly", "belt", "bender", "bite", "biter", "bone", "brace", "branch", "breaker", "breath", "bringer", "brow", "buckle", "buster", "chaser", "chew", "chewer", "cleaver", "crush", "crusher", "cut", "cutter", "dig", "digger", "eater", "eye", "eyes", "feet", "fist", "foot", "force", "gaze", "gazer", "grip", "hammer", "hand", "head", "hunter", "mark", "maul", "maw", "might", "munch", "muncher", "pelt", "punch", "ripper", "seeker", "shoulder", "slayer", "snarl", "spine", "splinter", "splitter", "strength", "stride", "strider", "striker", "teeth", "tooth", "watcher"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		rnd3 = Math.floor(Math.random() * nm5.length);
		rnd4 = Math.floor(Math.random() * nm6.length);
		while (nm5[rnd3] === nm6[rnd4]) {
			rnd4 = Math.floor(Math.random() * nm6.length);
		}
		lName = " " + nm5[rnd3] + nm6[rnd4];
		if (i < 5) {
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + lName;
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + lName;
		}
		return names;
	}

}