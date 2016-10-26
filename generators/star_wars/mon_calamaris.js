function generator$star_wars$mon_calamaris(type) {
	var nm1 = ["", "", "", "", "", "b", "br", "c", "ch", "cr", "d", "dr", "f", "g", "gh", "gr", "h", "j", "jh", "k", "kr", "l", "m", "mx", "n", "p", "q", "r", "s", "sh", "t", "tr", "v", "vc", "vr", "y"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "oo", "ee", "oe", "io", "ua", "ae", "oa", "ie", "ai", "uu", "ea"];
	var nm3 = ["b", "br", "c", "ck", "ckd", "ckl", "ckr", "dr", "fw", "g", "ggr", "h", "hd", "j", "k", "kb", "kk", "kl", "km", "l", "lb", "lbr", "ld", "lk", "lkph", "ll", "lm", "lp", "lsp", "lt", "ly", "m", "mb", "mbr", "mck", "mm", "n", "nd", "ndl", "ng", "nk", "nl", "nq", "ns", "ph", "r", "rb", "rch", "rg", "rl", "rn", "rpf", "rr", "rsh", "rt", "s", "sf", "shn", "ss", "t", "th", "tr", "tt", "vr", "x", "xl", "yg", "z", "zl"];
	var nm4 = ["", "", "", "", "", "b", "c", "ck", "ff", "h", "k", "kk", "l", "ll", "ln", "m", "n", "ns", "nt", "r", "rl", "rn", "rt", "rth", "rx", "s", "sh", "ss", "ss", "sz", "t", "th", "x", "z"];
	var nm5 = ["", "", "", "", "", "b", "c", "ch", "d", "f", "h", "j", "jh", "k", "kl", "l", "m", "mh", "n", "nh", "r", "s", "sh", "t", "th", "v", "vr", "y"];
	var nm6 = ["a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "ea", "ie", "ue", "ee", "ia", "ae"];
	var nm7 = ["b", "bt", "d", "dh", "dn", "f", "fw", "fn", "fl", "hl", "hh", "hn", "hm", "hl", "k", "kh", "ky", "kl", "km", "kn", "l", "lb", "lh", "lm", "ln", "ll", "m", "mb", "mn", "md", "n", "nd", "nl", "nh", "nk", "nky", "nm", "nn", "r", "rd", "rg", "rh", "s", "sh", "sm", "so", "w", "y", "z"];
	var nm8 = ["", "", "", "", "", "", "", "", "", "", "h", "l", "m", "n", "nt", "r", "s"];
	var nm9 = ["", "", "", "", "b", "br", "d", "g", "gh", "gr", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "vr", "w"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ou", "ia", "ua", "ai", "oo", "aa", "ee"];
	var nm11 = ["b", "bb", "br", "ch", "ckb", "ckd", "d", "dd", "dl", "dr", "g", "gr", "gb", "h", "hd", "k", "kb", "l", "lb", "lk", "lg", "lgr", "lw", "ld", "m", "mg", "md", "mb", "n", "md", "mb", "ng", "p", "pt", "r", "rc", "rr", "rt", "rg", "rb", "rgr", "s", "spl", "sc", "shc", "sr", "th", "thr", "tr", "tt", "vn", "y"];
	var nm12 = ["", "", "", "", "", "", "", "b", "bb", "c", "hb", "hd", "k", "kk", "l", "ll", "ls", "n", "r", "s", "sch", "ss", "x", "xx", "xz"];


	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			while (rnd7 < 4) {
				rnd7 = Math.floor(Math.random() * nm9.length);
			}
			namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
		} else if (i % 2 === 0) {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			rnd12 = Math.floor(Math.random() * nm10.length);
			rnd13 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm11[rnd13] + nm10[rnd12] + nm12[rnd10];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 4) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5] + " " + namelast;
			} else if (i < 8) {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd5b = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5b] + nm6[rnd6] + nm8[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 5) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
			} else if (i < 8) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + "  " + namelast;
			}
		}
		return names;
	}

}