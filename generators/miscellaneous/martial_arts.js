function generator$miscellaneous$martial_arts() {
	var nm1 = ["", "b", "d", "g", "h", "l", "m", "n", "ng", "s", "t", "w"];
	var nm2 = ["a", "e", "i", "o", "u", "aa", "ai", "oa", "oe"];
	var nm3 = ["b", "gw", "hn", "hl", "ht", "l", "mb", "n", "nt", "nd", "ng", "ngw", "r", "rm", "s"];

	var nm4 = ["", "", "b", "br", "c", "cr", "ch", "d", "g", "gr", "h", "j", "k", "m", "n", "sh", "st", "v", "w"];
	var nm5 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oei", "ou", "ee", "oo", "ea", "eo", "ue", "ua", "ia"];
	var nm6 = ["c", "ch", "d", "gr", "j", "k", "l", "m", "mp", "n", "nch", "nd", "nz", "nt", "nk", "p", "q", "st", "r", "rt", "t", "v"];
	var nm7 = ["", "", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oei", "ou", "ee", "oo", "ea", "eo", "ue", "ua", "ia"];
	var nm8 = ["", "", "c", "ch", "d", "gr", "j", "k", "l", "m", "mp", "n", "nch", "nd", "nz", "nt", "nk", "p", "q", "st", "r", "rt", "t", "v"];
	var nm9 = [" ", "-"];

	var nm10 = ["b", "d", "f", "h", "k", "khr", "s", "t", "m", "n", "p", "q", "v"];
	var nm11 = ["a", "e", "i", "o", "u"];
	var nm12 = ["c", "d", "df", "dh", "fr", "g", "j", "ht", "k", "kh", "l", "nh", "m", "p", "r", "rs", "sw", "sth", "st", "z"];
	var nm13 = ["", "a", "e", "i", "o", "u"];
	var nm14 = ["", "", "c", "d", "df", "dh", "fr", "g", "j", "ht", "k", "kh", "l", "nh", "m", "p", "r", "rs", "sw", "sth", "st", "z"];
	var nm15 = ["", "", "b", "f", "g", "h", "hr", "hn", "k", "m", "n", "p", "r", "sh"];

	var nm16 = ["", "", "", "", "b", "ch", "c", "g", "gw", "gy", "h", "hw", "j", "k", "kb", "kr", "ky", "l", "m", "nh", "ny", "p", "pr", "sh", "s", "t", "th", "v", "w", "y"];
	var nm17 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oi", "ae", "eo", "ua", "ai", "ia", "ei", "oo", "aa", "ou", "ee"];
	var nm18 = ["b", "by", "chk", "ch", "d", "ddh", "dh", "hlw", "hw", "j", "k", "km", "kn", "kw", "ky", "l", "lg", "ll", "mb", "md", "mp", "n", "nb", "nd", "ng", "ngd", "nj", "nk", "nsh", "nt", "p", "pk", "pp", "r", "rn", "s", "sh", "st", "t", "th", "thw", "tk", "ts", "tt", "y"];
	var nm19 = ["", "", "", "", "", "", "", "", "", "", "", "", "k", "l", "m", "n", "ng", "r", "s", "t", "w", "y"];
	var nm20 = [];


	i = Math.floor(Math.random() * 10); {
		if (i < 2) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 4) {
				while (rnd4 > 4) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			rnd5 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 4 || rnd4 > 4) {
				while (rnd6 > 4) {
					rnd6 = Math.floor(Math.random() * nm2.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm2[rnd6];
		} else if (i === 2) {
			rnd = Math.floor(Math.random() * nm4.length);
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			if (rnd2 > 20) {
				while (rnd4 > 22) {
					rnd4 = Math.floor(Math.random() * nm7.length);
				}
			}
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (rnd4 < 2) {
				rnd5 = 0;
			}
			rnd6 = Math.floor(Math.random() * nm5.length);
			if (rnd2 > 20 || rnd4 > 22) {
				while (rnd6 > 20) {
					rnd6 = Math.floor(Math.random() * nm5.length);
				}
			}
			names = nm4[rnd] + nm5[rnd2] + nm6[rnd3] + nm7[rnd4] + nm8[rnd5] + nm5[rnd6];
		} else if (i === 3) {
			rnd = Math.floor(Math.random() * nm4.length);
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm9.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm5.length);
			rnd8 = Math.floor(Math.random() * nm6.length);
			rnd9 = Math.floor(Math.random() * nm5.length);
			names = nm4[rnd] + nm5[rnd2] + nm6[rnd3] + nm5[rnd4] + nm9[rnd5] + nm4[rnd6] + nm5[rnd7] + nm6[rnd8] + nm5[rnd9]
		} else if (i === 4) {
			rnd = Math.floor(Math.random() * nm10.length);
			rnd2 = Math.floor(Math.random() * nm11.length);
			rnd3 = Math.floor(Math.random() * nm12.length);
			rnd4 = Math.floor(Math.random() * nm13.length);
			rnd5 = Math.floor(Math.random() * nm14.length);
			if (rnd4 === 0) {
				rnd5 = 0;
			}
			rnd6 = Math.floor(Math.random() * nm11.length);
			rnd7 = Math.floor(Math.random() * nm15.length);
			names = nm10[rnd] + nm11[rnd2] + nm12[rnd3] + nm13[rnd4] + nm14[rnd5] + nm11[rnd6] + nm15[rnd7];
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * nm16.length);
			rnd2 = Math.floor(Math.random() * nm17.length);
			rnd3 = Math.floor(Math.random() * nm18.length);
			rnd4 = Math.floor(Math.random() * nm17.length);
			rnd5 = Math.floor(Math.random() * nm19.length);
			names = nm16[rnd] + nm17[rnd2] + nm18[rnd3] + nm17[rnd4] + nm19[rnd5];
		} else if (i === 7) {
			rnd = Math.floor(Math.random() * nm16.length);
			rnd2 = Math.floor(Math.random() * nm17.length);
			rnd3 = Math.floor(Math.random() * nm18.length);
			rnd4 = Math.floor(Math.random() * nm17.length);
			rnd5 = Math.floor(Math.random() * nm18.length);
			rnd6 = Math.floor(Math.random() * nm17.length);
			if (rnd2 > 24 || rnd4 > 24) {
				while (rnd6 > 24) {
					rnd6 = Math.floor(Math.random() * nm17.length);
				}
			}
			rnd7 = Math.floor(Math.random() * nm19.length);
			names = nm16[rnd] + nm17[rnd2] + nm18[rnd3] + nm17[rnd4] + nm18[rnd5] + nm17[rnd6] + nm19[rnd7];
		} else if (i === 8) {
			rnd = Math.floor(Math.random() * nm16.length);
			rnd2 = Math.floor(Math.random() * nm17.length);
			rnd3 = Math.floor(Math.random() * nm19.length);
			if (rnd < 3) {
				while (rnd3 < 12) {
					rnd3 = Math.floor(Math.random() * nm19.length);
				}
			}
			rnd4 = Math.floor(Math.random() * nm9.length);
			rnd5 = Math.floor(Math.random() * nm16.length);
			rnd6 = Math.floor(Math.random() * nm17.length);
			rnd7 = Math.floor(Math.random() * nm18.length);
			rnd8 = Math.floor(Math.random() * nm17.length);
			rnd9 = Math.floor(Math.random() * nm19.length);
			names = nm16[rnd] + nm17[rnd2] + nm19[rnd3] + nm9[rnd4] + nm16[rnd5] + nm17[rnd6] + nm18[rnd7] + nm17[rnd8] + nm19[rnd9];
		} else {
			rnd = Math.floor(Math.random() * nm16.length);
			rnd2 = Math.floor(Math.random() * nm17.length);
			rnd3 = Math.floor(Math.random() * nm19.length);
			if (rnd < 3) {
				while (rnd3 < 12) {
					rnd3 = Math.floor(Math.random() * nm19.length);
				}
			}
			rnd4 = Math.floor(Math.random() * nm9.length);
			rnd5 = Math.floor(Math.random() * nm16.length);
			rnd6 = Math.floor(Math.random() * nm17.length);
			rnd7 = Math.floor(Math.random() * nm18.length);
			rnd8 = Math.floor(Math.random() * nm17.length);
			rnd9 = Math.floor(Math.random() * nm19.length);
			names = nm16[rnd5] + nm17[rnd6] + nm18[rnd7] + nm17[rnd8] + nm19[rnd9] + nm9[rnd4] + nm16[rnd] + nm17[rnd2] + nm19[rnd3];
		}
		return names;
	}

}