function generator$star_wars$gands() {
	var nm1 = ["", "", "c", "c'n", "d", "d'k", "k", "l", "n", "r'k", "r", "s", "s'z", "t", "t'r", "v", "v'l", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "aa", "oo", "uu", "ee", "ay", "ai", "ey", "ya", "yu", "yi"];
	var nm3 = ["b", "ck", "d", "dn", "ff", "fn", "fl", "g", "gn", "gl", "k", "kk", "kn", "kl", "l", "ll", "ln", "ls", "ld", "nl", "nf", "q", "r", "rn", "rl", "s", "ss", "sl", "ssl", "t", "z", "zl"];
	var nm4 = ["", "d", "k", "l", "n", "r", "sh", "ss", "x"];
	var nm5 = ["cr", "cn", "d", "dr", "k", "kr", "l", "n", "p", "pr", "pn", "q", "qr", "sr", "shr", "tr", "v", "vr", "z"];
	var nm6 = ["ck", "cl", "d", "ff", "fr", "gg", "gl", "k", "kk", "kr", "q", "ql", "qr", "rr", "rn", "rl", "sl", "th", "t", "tr", "z", "zz", "zl"];
	var nm7 = ["", "", "", "", "", "", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "aa", "oo", "uu", "ee", "ay", "ai", "ey", "ya", "yu", "yi"];


	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm5.length);
		rnd7 = Math.floor(Math.random() * nm2.length);
		rnd8 = Math.floor(Math.random() * nm6.length);
		rnd9 = Math.floor(Math.random() * nm7.length);
		namelast = nm5[rnd6] + nm2[rnd7] + nm6[rnd8] + nm7[rnd9];
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		if (i < 5) {
			while (rnd4 < 2) {
				rnd4 = Math.floor(Math.random() * nm4.length);
			}
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd4] + "  " + namelast;
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4] + "  " + namelast;
		}
		return names;
	}

}