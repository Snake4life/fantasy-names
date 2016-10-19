function generator$star_wars$trandoshans(type) {
	var nm1 = ["", "", "", "", "", "", "", "", "", "", "b", "bh", "bl", "br", "c", "ch", "cl", "cr", "d", "dh", "dr", "fr", "g", "gh", "gr", "grr", "gwh", "h", "hr", "hss", "j", "k", "khr", "kl", "kr", "l", "m", "mr", "n", "nr", "nrr", "p", "pr", "q", "r", "s", "sh", "sk", "sl", "ss", "ssk", "sstr", "st", "thr", "t", "tr", "tsh", "tss", "v", "vr", "w", "x", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "y", "uu", "ee", "aa", "oo", "ai", "ui", "ey"];
	var nm3 = ["ch", "cr", "d", "dfr", "dg", "g", "gg", "gr", "hhm", "hs", "k", "khss", "kk", "kr", "ks", "kt", "l", "ld", "lf", "ll", "lt", "m", "mr", "n", "nd", "ng", "nk", "nn", "nt", "nv", "ph", "qz", "r", "rd", "rk", "rn", "rr", "rth", "rtsn", "s", "sd", "sh", "sn", "ss", "sskr", "t", "tl", "tt", "v", "vr", "z", "zzm"];
	var nm4 = ["", "", "", "", "", "", "", "", "", "", "b", "c", "d", "ff", "g", "gg", "h", "hk", "hssk", "k", "kk", "kss", "kt", "l", "ll", "mx", "n", "nk", "pp", "q", "r", "rg", "rj", "rk", "rkh", "rq", "rr", "rrng", "rrsk", "rsk", "rssk", "rst", "rt", "rth", "s", "sh", "shk", "sk", "ss", "ssc", "ssh", "ssk", "sskk", "sst", "t", "tch", "tt", "v", "w", "x", "xx", "z"];
	var nm5 = ["", "", "", "", "", "", "", "", "", "", "b", "bh", "bl", "cl", "ch", "cr", "dh", "dr", "f", "fr", "fl", "g", "gh", "gr", "h", "hs", "k", "kh", "kl", "kn", "km", "l", "m", "ms", "mss", "mh", "n", "ns", "nh", "p", "pr", "q", "r", "rh", "s", "sh", "ss", "sl", "sm", "st", "t", "th", "tr", "ts", "v", "w", "z"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "y", "uu", "ee", "aa", "oo", "ai"];
	var nm7 = ["ch", "d", "dw", "f", "ff", "g", "gg", "gl", "h", "hh", "hr", "hs", "hss", "k", "ks", "khs", "l", "ls", "lss", "ll", "lf", "lm", "ln", "ld", "m", "ml", "n", "nl", "nd", "nc", "ph", "r", "rs", "rl", "rt", "rth", "rg", "sl", "ss", "sh", "st", "t", "th", "tt", "tl", "v", "z"];
	var nm8 = ["", "", "", "", "", "", "", "", "", "", "c", "d", "f", "ff", "h", "k", "kss", "l", "m", "n", "nn", "rkh", "s", "ss", "sh", "ssh", "t", "th"];
	var nm9 = ["", "", "", "", "", "", "", "b", "br", "d", "dr", "f", "g", "gr", "h", "hs", "hss", "hsk", "j", "jh", "jhc", "k", "kl", "m", "n", "r", "s", "ss", "sm", "st", "sv", "t", "tr", "ts", "v", "vl", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "y", "ea", "aa", "oo", "eo", "ee", "au"];
	var nm11 = ["br", "b", "cr", "cd", "d", "dg", "dm", "dr", "dr", "g", "gg", "gr", "gs", "gl", "k", "kk", "kr", "ks", "kl", "l", "ll", "ls", "m", "mm", "mr", "ms", "n", "nn", "ns", "nl", "ng", "q", "r", "rs", "rz", "rd", "rr", "s", "ss", "sd", "sl", "sg", "tn", "v", "vv"];
	var nm12 = ["", "", "", "", "", "", "", "", "", "", "c", "gg", "gh", "hk", "k", "kt", "l", "n", "r", "rn", "rs", "s", "sss", "st", "ssk", "sch", "ss", "t", "tch", "z"];


	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 2 != 0) {
			while (rnd10 < 7) {
				rnd10 = Math.floor(Math.random() * nm12.length);
			}
			namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 3) {
				while (rnd < 10) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd5 < 10) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
			}
		}
		return names;
	}

}