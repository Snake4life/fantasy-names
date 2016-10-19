function generator$fantasy$nagas() {
	var nm1 = ["", "", "", "", "", "", "ch", "d", "dh", "dhr", "h", "hr", "j", "jy", "k", "kh", "kr", "ksh", "l", "m", "n", "p", "pr", "s", "sr", "t", "v", "vr"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "a", "a", "a", "a", "a", "i", "i"];
	var nm3 = ["bh", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "y", "bh", "d", "dg", "dh", "dhy", "dm", "dr", "g", "h", "hl", "hy", "j", "k", "kh", "ksh", "ky", "l", "lm", "lw", "m", "mkh", "mv", "mvr", "n", "nd", "ndh", "ng", "nj", "nkh", "nm", "nshtr", "nt", "nth", "p", "pt", "r", "rd", "rk", "rm", "rn", "rt", "ry", "s", "sh", "shk", "shm", "shn", "shp", "shth", "shtr", "sr", "st", "sth", "sw", "t", "th", "tr", "tt", "ttr", "ty", "v", "vy", "y", "yl"];
	var nm4 = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "i", "u", "as", "at"];
	var nm5 = ["", "", "", "", "", "", "", "", "", "", "c", "cr", "ch", "d", "h", "k", "kr", "kh", "l", "r", "s", "s", "s", "sh", "sz", "sc", "sy", "sz", "sh", "t", "th", "x", "y", "z", "zs", "zh"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "aa", "ai", "ee", "ei", "ie"];
	var nm7 = ["c", "d", "dh", "k", "kh", "l", "r", "s", "sh", "t", "th", "x", "xh", "z", "zh", "c", "d", "k", "l", "r", "s", "t", "x", "z", "c", "d", "k", "l", "r", "s", "t", "x", "z", "s", "s", "sh", "sh", "cc", "ch", "ck", "cs", "csh", "cz", "dh", "dj", "kk", "kh", "ks", "ksh", "kz", "ll", "lh", "lz", "ls", "rr", "rc", "rg", "rh", "rj", "rs", "rsh", "rz", "rsz", "rt", "rth", "rc", "rk", "ss", "sc", "sh", "sk", "sz", "sy", "th", "tr", "ts", "tz", "tsh", "xh", "xs", "xz", "zh", "zs", "zz", "zs"];
	var nm8 = ["", "", "", "", "", "", "", "", "", "", "", "kh", "l", "r", "s", "sj", "ss", "sh", "sz", "t", "th", "x", "z", "zs"];



	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 2) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			} else if (i < 4) {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd7] + nm7[rnd6] + nm6[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 7) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
			} else if (i < 9) {
				rnd5 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm4[rnd4];
			} else {
				rnd5 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				rnd8 = Math.floor(Math.random() * nm3.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm3[rnd8] + nm4[rnd4];
			}
		}
		return names;
	}

}