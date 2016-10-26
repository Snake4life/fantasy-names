function generator$pop_culture$homestucks() {
	var nm0 = ["c", "d", "f", "g", "h", "k", "l", "m", "n", "r", "p", "s", "t", "v", "x", "z"];
	var nm1 = ["cr", "dr", "fr", "gr", "gh", "kh", "kr", "rh", "ph", "pr", "sk", "st", "tr", "vr", "xh", "zh"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "ai", "ea", "ee", "eu", "ei", "ia", "ie", "io"];
	var nm3 = ["a", "e", "i", "o", "u"];
	var nm4 = ["dc", "dj", "dn", "dr", "dv", "dy", "dz", "fg", "fk", "fr", "ft", "fz", "gg", "gh", "gn", "gr", "gt", "gz", "kh", "kk", "kn", "kr", "ks", "kt", "kz", "ld", "lg", "lk", "ll", "lm", "ln", "lr", "lv", "ly", "mk", "mm", "mr", "mv", "mz", "nc", "nd", "ng", "nk", "nl", "nn", "nr", "nt", "nv", "ny", "nz", "qq", "qr", "qt", "rc", "rg", "rk", "rl", "rm", "rn", "rr", "rt", "rv", "rx", "rz", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "sr", "ss", "st", "sy", "th", "tr", "vl", "vr", "zl", "zr", "zz"];
	var nm5 = ["d", "f", "g", "k", "l", "m", "n", "q", "r", "s", "t", "v", "y", "z"];
	var nm6 = ["h", "k", "m", "n", "r", "s", "t", "x", "z"];


	i = Math.floor(Math.random() * 10); {
		if (i % 2 === 0) {
			rnd = Math.floor(Math.random() * nm0.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 29) {
				while (rnd4 > 29) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			if (rnd2 < 30 && rnd4 < 30) {
				rnd5 = Math.floor(Math.random() * nm6.length);
				namesf = nm0[rnd] + nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm6[rnd5];
			} else {
				namesf = nm0[rnd] + nm2[rnd2] + nm4[rnd3] + nm2[rnd4];
			}
		} else if (i % 3 === 0) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 29) {
				while (rnd4 > 29) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			if (rnd2 < 30 && rnd4 < 30) {
				rnd5 = Math.floor(Math.random() * nm6.length);
				namesf = nm1[rnd] + nm2[rnd2] + nm5[rnd3] + nm2[rnd4] + nm6[rnd5];
			} else {
				namesf = nm1[rnd] + nm2[rnd2] + nm5[rnd3] + nm2[rnd4];
			}
		} else {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 29) {
				if (rnd4 > 29) {
					namesf = nm2[rnd2] + nm4[rnd3] + nm2[rnd4];
				} else {
					rnd5 = Math.floor(Math.random() * nm6.length);
					namesf = nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm6[rnd5];
				}
			} else {
				if (rnd4 > 29) {
					rnd5 = Math.floor(Math.random() * nm6.length);
					namesf = nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm6[rnd5];
				} else {
					rnd5 = Math.floor(Math.random() * nm5.length);
					rnd6 = Math.floor(Math.random() * nm3.length);
					namesf = nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm5[rnd5] + nm3[rnd6];
				}
			}
		}
		if (i % 2 === 0) {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 29) {
				if (rnd4 > 29) {
					names = namesf + " " + nm2[rnd2] + nm4[rnd3] + nm2[rnd4];
				} else {
					rnd5 = Math.floor(Math.random() * nm6.length);
					names = namesf + " " + nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm6[rnd5];
				}
			} else {
				if (rnd4 > 29) {
					rnd5 = Math.floor(Math.random() * nm6.length);
					names = namesf + " " + nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm6[rnd5];
				} else {
					rnd5 = Math.floor(Math.random() * nm5.length);
					rnd6 = Math.floor(Math.random() * nm3.length);
					names = namesf + " " + nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm5[rnd5] + nm3[rnd6];
				}
			}
		} else if (i % 3 === 0) {
			rnd = Math.floor(Math.random() * nm0.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 29) {
				while (rnd4 > 29) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			if (rnd2 < 30 && rnd4 < 30) {
				rnd5 = Math.floor(Math.random() * nm6.length);
				names = namesf + " " + nm0[rnd] + nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm6[rnd5];
			} else {
				names = namesf + " " + nm0[rnd] + nm2[rnd2] + nm4[rnd3] + nm2[rnd4];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 29) {
				while (rnd4 > 29) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			if (rnd2 < 30 && rnd4 < 30) {
				rnd5 = Math.floor(Math.random() * nm6.length);
				names = namesf + " " + nm1[rnd] + nm2[rnd2] + nm5[rnd3] + nm2[rnd4] + nm6[rnd5];
			} else {
				names = namesf + " " + nm1[rnd] + nm2[rnd2] + nm5[rnd3] + nm2[rnd4];
			}
		}
		return names;
	}

}