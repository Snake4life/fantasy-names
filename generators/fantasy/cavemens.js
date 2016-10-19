function generator$fantasy$cavemens(type) {
	var nm1 = ["", "", "", "br", "bh", "cr", "d", "dr", "dh", "fr", "g", "gr", "gn", "gh", "j", "kr", "kh", "n", "r", "t", "v", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "a", "o", "o", "o", "ou", "oo", "aa", "oe", "ua", "uu", "ia"];
	var nm3 = ["cr", "cc", "ch", "d", "dd", "dr", "dh", "dv", "g", "gg", "gr", "gn", "gv", "gz", "k", "kn", "kz", "kv", "kk", "l", "ll", "lr", "lk", "mg", "mk", "n", "ng", "nk", "nd", "nr", "rg", "rd", "rb", "rl", "rr", "rz", "rv", "rk", "sk", "sg", "sv", "t", "tk", "tz", "tt", "v", "vv", "vr", "vk", "vd", "z", "zz", "zk", "zd", "zc", "zg"];
	var nm4 = ["", "", "b", "c", "d", "g", "h", "k", "kk", "lk", "ll", "n", "r", "rc", "rk", "rv", "t"];
	var nm5 = ["", "", "", "", "", "b", "bh", "c", "ch", "d", "dh", "f", "fl", "gh", "gn", "h", "j", "jh", "l", "m", "n", "r", "s", "sc", "sk", "sn", "st", "t", "th", "tr", "ts", "v", "z"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "o", "aa", "ae", "ai", "ee", "oe", "ua"];
	var nm7 = ["b", "b", "d", "d", "g", "g", "k", "k", "l", "l", "n", "n", "r", "r", "s", "s", "t", "t", "z", "z", "b", "b", "d", "d", "g", "g", "k", "k", "l", "l", "n", "n", "r", "r", "s", "s", "t", "t", "z", "z", "b", "br", "bh", "bn", "bb", "ch", "cn", "cl", "cr", "d", "dd", "dn", "dl", "fr", "fn", "fl", "g", "gg", "gl", "gn", "gr", "gy", "k", "kk", "ky", "kl", "kn", "km", "l", "ll", "lg", "ly", "ln", "lm", "lv", "mg", "ml", "n", "nn", "ng", "nk", "nd", "nz", "r", "rr", "rb", "rl", "rt", "rth", "s", "sz", "sr", "st", "sh", "ss", "t", "ty", "yl", "yr", "yn", "yg", "yr", "vr", "vn", "vl", "vk", "z", "zh", "zn"];
	var nm8 = ["", "", "", "", "", "", "", "", "h", "l", "n", "s"];
	var nm9 = ["", "", "", "br", "bh", "cr", "d", "dr", "dh", "fr", "g", "gr", "gn", "gh", "j", "kr", "kh", "n", "r", "t", "v", "z", "", "", "", "", "", "b", "bh", "c", "ch", "d", "dh", "f", "fl", "gh", "gn", "h", "j", "jh", "l", "m", "n", "r", "s", "sc", "sk", "sn", "st", "t", "th", "tr", "ts", "v", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "a", "o", "o", "o", "ou", "oo", "aa", "oe", "ua", "uu", "ia", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "i", "o", "u", "a", "e", "i", "o", "a", "e", "o", "aa", "ae", "ai", "ee", "oe", "ua"];
	var nm11 = ["b", "b", "d", "d", "g", "g", "k", "k", "l", "l", "n", "n", "r", "r", "s", "s", "t", "t", "z", "z", "b", "br", "bh", "bn", "bb", "ch", "cn", "cl", "cr", "d", "dd", "dn", "dl", "fr", "fn", "fl", "g", "gg", "gl", "gn", "gr", "gy", "k", "kk", "ky", "kl", "kn", "km", "l", "ll", "lg", "ly", "ln", "lm", "lv", "mg", "ml", "n", "nn", "ng", "nk", "nd", "nz", "r", "rr", "rb", "rl", "rt", "rth", "s", "sz", "sr", "st", "sh", "ss", "t", "ty", "yl", "yr", "yn", "yg", "yr", "vr", "vn", "vl", "vk", "z", "zh", "zn", "cr", "cc", "ch", "d", "dd", "dr", "dh", "dv", "g", "gg", "gr", "gn", "gv", "gz", "k", "kn", "kz", "kv", "kk", "l", "ll", "lr", "lk", "mg", "mk", "n", "ng", "nk", "nd", "nr", "rg", "rd", "rb", "rl", "rr", "rz", "rv", "rk", "sk", "sg", "sv", "t", "tk", "tz", "tt", "v", "vv", "vr", "vk", "vd", "z", "zz", "zk", "zd", "zc", "zg"];
	var nm12 = ["", "", "b", "c", "d", "g", "h", "k", "kk", "lk", "ll", "n", "r", "t", "", "", "", "", "h", "l", "n", "s"];



	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
		} else if (type === 2) {
			rnd = Math.floor(Math.random() * nm9.length);
			rnd2 = Math.floor(Math.random() * nm10.length);
			rnd3 = Math.floor(Math.random() * nm11.length);
			rnd4 = Math.floor(Math.random() * nm10.length);
			rnd5 = Math.floor(Math.random() * nm12.length);
			names = nm9[rnd] + nm10[rnd2] + nm11[rnd3] + nm10[rnd4] + nm12[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 3) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 2) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			}
		}
		return names;
	}

}