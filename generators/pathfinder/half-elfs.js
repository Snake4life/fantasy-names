function generator$pathfinder$half_elfs(type) {
	var nm1 = ["", "", "", "", "", "b", "c", "d", "g", "h", "j", "jh", "k", "kh", "kr", "l", "m", "n", "p", "q", "r", "s", "t", "tr", "v", "vr", "z", "zr"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "y", "ai", "ae", "ia", "ue", "ie", "ui"];
	var nm3 = ["d", "d", "d", "dr", "dl", "dw", "g", "g", "g", "gr", "gl", "gg", "gw", "l", "l", "l", "l", "ld", "lv", "lgr", "lbr", "lc", "ldr", "lg", "lgg", "lr", "lt", "lth", "m", "m", "m", "mr", "ml", "n", "n", "n", "nc", "nn", "nr", "nd", "ngr", "nv", "nvr", "r", "r", "r", "rc", "rg", "rr", "rth", "rv", "rvr", "rl", "rd", "rdr", "rgr", "rw", "s", "s", "s", "sh", "sl", "sr", "ss", "st", "str", "svr", "t", "t", "t", "th", "tt", "tr"];
	var nm4 = ["", "", "", "c", "h", "k", "l", "n", "nn", "r", "s"];
	var nm5 = ["", "", "", "", "c", "ch", "d", "j", "k", "kr", "l", "m", "n", "r", "s", "sh", "t", "thr", "th", "tr", "v", "vr", "vh", "z", "zr", "zh"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "au", "ie", "ua", "oi", "ou", "ae"];
	var nm7 = ["b", "b", "br", "cl", "cr", "d", "d", "gs", "gl", "gn", "gm", "gsh", "l", "l", "l", "lm", "lr", "lsr", "ltr", "ly", "lly", "ld", "ll", "lsb", "lv", "m", "m", "m", "my", "mr", "n", "n", "n", "nd", "nr", "nw", "nn", "ns", "nv", "ny", "pt", "pr", "r", "r", "r", "r", "rg", "rr", "rl", "rv", "ry", "s", "s", "s", "ss", "sy", "str", "sw", "thr", "tr", "th", "y", "y", "y"];
	var nm8 = ["", "", "", "", "", "", "", "", "", "", "h", "l", "n", "s", "ss", "th"];
	var nm9 = ["", "", "", "", "b", "bl", "cl", "d", "dr", "f", "fl", "fr", "g", "gl", "gr", "h", "j", "k", "kl", "kr", "l", "m", "n", "p", "pr", "s", "sl", "sk", "st", "t", "tr", "wr", "y", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "io", "ei", "iu", "ai", "ea", "ee"];
	var nm11 = ["d", "d", "d", "dr", "dw", "gr", "gw", "gn", "g", "g", "gg", "h", "h", "h", "j", "j", "j", "k", "k", "k", "kr", "kl", "km", "kn", "l", "l", "ll", "l", "lr", "lg", "ld", "ldr", "lmr", "ly", "m", "mg", "mr", "m", "m", "m", "n", "n", "n", "nn", "n", "nr", "ng", "ngr", "ndr", "nd", "nsh", "ntr", "r", "r", "r", "r", "rr", "rd", "rdr", "rg", "rgr", "rl", "rm", "rt", "s", "s", "s", "sdr", "sgr", "sg", "sh", "ssr", "t", "tr", "t", "t", "th", "v", "v", "vr", "vl", "w", "xh", "xt", "y", "yh", "zm"];
	var nm12 = ["", "", "", "", "", "", "", "ht", "l", "m", "n", "nd", "nn", "r", "rks", "rt", "s", "th", "w", "ys"];


	i = Math.floor(Math.random() * 10); {
		rnd10 = Math.floor(Math.random() * nm9.length);
		rnd11 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
		} else if (i % 2 === 0) {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			rnd15 = Math.floor(Math.random() * nm11.length);
			rnd16 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm11[rnd15] + nm10[rnd16] + nm12[rnd12];
		} else {
			while (rnd10 < 4) {
				rnd10 = Math.floor(Math.random() * nm9.length);
			}
			while (rnd12 < 7) {
				rnd12 = Math.floor(Math.random() * nm12.length);
			}
			nameLast = nm9[rnd10] + nm10[rnd11] + nm12[rnd12];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 3) {
				while (rnd < 4) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5] + " " + nameLast;
			} else if (i < 6) {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + nameLast;
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + " " + nameLast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + nameLast;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameLast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + nameLast;
			}
		}
		return names;
	}

}