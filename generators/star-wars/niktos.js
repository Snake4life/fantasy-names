function generator$star_wars$niktos() {
	var nm1 = ["", "", "", "", "b", "bh", "br", "c", "ch", "d", "dr", "f", "fh", "g", "gr", "h", "j", "kl", "l", "m", "n", "p", "r", "s", "sr", "sl", "t", "ts", "v", "wl"];
	var nm2 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "au", "oo", "io", "ia", "ou", "aa", "ai", "oi", "ea"];
	var nm3 = ["b", "bb", "bd", "d", "dd", "dr", "dg", "dr", "g", "gr", "gg", "gb", "k", "kt", "kr", "kn", "kh", "l", "lf", "ll", "lv", "m", "n", "nd", "ndl", "ndr", "ng", "ns", "nt", "r", "rd", "rk", "rsk", "s", "sh", "ss", "t", "th", "v", "x", "z"];
	var nm4 = ["", "", "", "", "", "ch", "d", "gg", "k", "kk", "kt", "l", "m", "n", "nc", "nn", "r", "rsk", "s", "sh", "sk", "t", "th", "v", "wl", "x"];
	var nm5 = ["b'r", "d'r", "d'w", "f'w", "f'r", "g'r", "g'w", "g'l", "g'n", "k'w", "k'r", "k'l", "m'tr", "n'r", "n'tr", "s'r", "s'v", "t'r", "t'sr", "v'r", "b", "bh", "br", "c", "ch", "d", "dr", "f", "fh", "g", "gr", "h", "j", "kl", "l", "m", "n", "p", "r", "s", "sr", "sl", "t", "ts", "v", "wl"];
	var nm6 = ["'b", "'d", "b'd", "b'r", "d'r", "d'g", "d'gr", "g'b", "g'r", "'g", "'j", "'k", "k'tr", "k'r", "k'n", "l'v", "l'm", "l'r", "'m", "'n", "n'dr", "n'd", "'p", "'r", "r'r", "r'kr", "r's", "s'sh", "s'th", "'t", "t'r", "t'v", "b", "bb", "bd", "d", "dd", "dr", "dg", "dr", "g", "gr", "gg", "gb", "k", "kt", "kr", "kn", "kh", "l", "lf", "ll", "lv", "m", "n", "nd", "ndl", "ndr", "ng", "ns", "nt", "r", "rd", "rk", "rsk", "s", "sh", "ss", "t", "th", "v", "x", "z"];
	var nm9 = ["", "", "", "", "b", "ch", "d", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "sh", "t", "v", "w", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "oo", "uu", "au", "ou", "oi", "ai", "ei"];
	var nm11 = ["b", "cc", "g", "g", "gg", "gt", "gn", "gm", "gl", "gt", "gr", "k", "kt", "kk", "kn", "km", "kl", "m", "mk", "mp", "mpl", "n", "nd", "nk", "ng", "nt", "p", "pl", "pt", "r", "rc", "rk", "rd", "rt", "rs", "s", "st", "t", "z"];
	var nm12 = ["", "", "", "", "", "c", "g", "k", "l", "n", "nn", "nk", "m", "mk", "rch", "rk", "rg", "rc", "rr", "s", "sh", "sk", "t", "th", "tt", "x"];


	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 2 === 0) {
			while (rnd7 < 4) {
				rnd7 = Math.floor(Math.random() * nm9.length);
			}
			while (rnd10 < 5) {
				rnd10 = Math.floor(Math.random() * nm12.length);
			}
			namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
		}
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (i < 3) {
			while (rnd < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
			}
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
		} else if (i < 6) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
		} else if (i < 8) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd6 = Math.floor(Math.random() * nm3.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + "  " + namelast;
		} else {
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd3b = Math.floor(Math.random() * nm6.length);
			rnd4b = Math.floor(Math.random() * nm2.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			if (rnd6 < 20 && rnd3 < 32) {
				while (rnd3b < 32) {
					rnd3b = Math.floor(Math.random() * nm6.length);
				}
			}
			if (rnd6 > 19 || rnd3 > 31) {
				while (rnd3b > 31) {
					rnd3b = Math.floor(Math.random() * nm6.length);
				}
			}
			names = nm5[rnd6] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd3b] + nm2[rnd4b] + nm4[rnd5] + "  " + namelast;
		}
		return names;
	}

}