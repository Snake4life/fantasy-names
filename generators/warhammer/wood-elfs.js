function generator$warhammer$wood_elfs(type) {
	var nm1 = ["", "", "", "c", "d", "dh", "g", "k", "kh", "sc", "str", "t", "th", "tr", "v", "z"];
	var nm2 = ["a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "a", "a", "o", "o", "a", "o", "o", "a", "io", "aa", "ae", "ia"];
	var nm3 = ["c", "d", "k", "l", "r", "c", "d", "k", "l", "r", "c", "cc", "cr", "dr", "d", "k", "kk", "lc", "lg", "lk", "ll", "lt", "lv", "l", "r", "rl", "rt", "rc", "rg", "rn", "sc", "sr", "st", "sl", "th", "tr", "tt", "zc", "zk", "zl"];
	var nm4 = ["", "", "", "c", "n", "s", "t", "th"];
	var nm5 = ["", "", "", "", "", "d", "dh", "dr", "f", "h", "l", "m", "n", "ph", "q", "s", "th", "v", "y"];
	var nm6 = ["a", "e", "i", "y", "a", "e", "i", "y", "a", "e", "i", "y", "a", "e", "a", "a", "e", "e", "ie", "ae"];
	var nm7 = ["c", "cc", "ch", "d", "dd", "dr", "h", "hh", "lc", "ll", "lv", "ls", "lt", "lth", "ln", "lm", "l", "n", "nn", "nr", "nv", "nd", "ph", "r", "rl", "rr", "rv", "rl", "s", "ss", "sh", "st", "str", "sv", "t", "th", "tr", "v"];
	var nm8 = ["", "", "", "", "f", "h", "l", "n", "s", "th"];



	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 5) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
			}
		}
		return names;
	}

}