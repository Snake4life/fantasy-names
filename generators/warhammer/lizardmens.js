function generator$warhammer$lizardmens() {
	var nm = ["c", "cr", "ch", "g", "h", "kr", "m", "n", "q", "qr", "t", "tl", "x", "xlt", "y", "z"];
	var nm1 = ["", "", "", "", "", "c", "cr", "ch", "g", "h", "kr", "m", "n", "q", "qr", "t", "tl", "x", "xlt", "y", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oa", "aui", "a'u", "o'e", "o'a", "u'a", "a'e", "e'a"];
	var nm3 = ["c", "cc", "ch", "cht", "chtl", "cn", "ct", "ctl", "d", "h", "hc", "hg", "hp", "ht", "htl", "htz", "k", "kt", "l", "lch", "lh", "ll", "lm", "ln", "lp", "lt", "lx", "m", "n", "nd", "nh", "nq", "nt", "ntl", "p", "q", "r", "szc", "t", "tl", "tt", "tz", "tzc", "tzp", "tzt", "x", "xc", "xch", "xt", "xtl", "xy", "y", "z", "zc", "zd", "zq", "ztl"];
	var nm4 = ["", "", "", "c", "ch", "cl", "k", "l", "n", "p", "r", "tl", "x"];
	var nm5 = ["c", "ch", "cl", "k", "l", "n", "p", "r", "tl", "x"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (i < 3) {
			if (rnd < 5) {
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else if (i < 6) {
			rnd6 = Math.floor(Math.random() * nm3.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
		} else if (i < 8) {
			rnd6 = Math.floor(Math.random() * nm.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "-" + nm[rnd6] + nm2[rnd7];
		} else {
			rnd = Math.floor(Math.random() * nm.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			rnd8 = Math.floor(Math.random() * nm5.length);
			names = nm[rnd] + nm2[rnd2] + nm5[rnd5] + "-" + nm[rnd6] + nm2[rnd7] + nm3[rnd3] + nm2[rnd4] + nm5[rnd8];
		}
		return names;
	}

}