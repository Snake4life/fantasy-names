function generator$star_wars$gotals() {
	var nm1 = ["f", "gl", "h", "j", "k", "l", "m", "n", "s", "t", "th", "v", "vl", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "aa", "uu", "ee"];
	var nm3 = ["'h", "hs", "h'sh", "h'l", "hx", "hk", "hk'kh", "'k", "k", "kh", "'kh", "'l", "lt", "p", "ph", "r'ph", "r", "'r", "r'l", "rl", "sk", "s'kh", "s'm", "sl", "shn", "sh'n", "sh'm", "sz", "shm", "t", "t'm", "tm", "tn", "tl", "t'n", "xs", "xz"];
	var nm4 = ["c", "k", "l", "m", "n", "s", "sh", "r", "rn", "tt", "th", "x"];
	var nm5 = ["g", "gr", "j", "k", "kr", "kl", "m", "n", "r", "s", "tr", "v", "z"];
	var nm6 = ["a", "e", "i", "o", "u"];
	var nm7 = ["hs", "hx", "k", "kh", "l", "ll", "r", "rr", "rl", "rs", "s", "ss", "sl", "sk", "sh", "sm", "st", "t", "th", "tl", "v", "x", "z"];
	var nm8 = ["c", "gg", "gh", "l", "m", "n", "nth", "r", "rn", "rk", "ss", "t", "th", "x"];


	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm5.length);
		rnd7 = Math.floor(Math.random() * nm6.length);
		rnd8 = Math.floor(Math.random() * nm8.length);
		if (i % 2 === 0) {
			namelast = nm5[rnd6] + nm6[rnd7] + nm8[rnd8];
		} else {
			rnd9 = Math.floor(Math.random() * nm7.length);
			rnd11 = Math.floor(Math.random() * nm6.length);
			namelast = nm5[rnd6] + nm6[rnd7] + nm7[rnd9] + nm6[rnd11] + nm8[rnd8];
		}
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		if (i < 5) {
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd4] + "  " + namelast;
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4] + "  " + namelast;
		}
		return names;
	}

}