var nm1 = ["", "", "", "", "", "b", "br", "c", "d", "f", "h", "j", "k", "kh", "kn", "l", "m", "n", "p", "r", "rh", "rr", "s", "sh", "shr", "t", "v", "w", "y", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oo", "ey", "ei", "ea", "ee", "aa"];
var nm3 = ["ch", "d", "dd", "f", "fr", "k", "kt", "kx", "l", "m", "mr", "md", "mt", "n", "nd", "ng", "nn", "nt", "ntv", "nr", "ny", "pr", "r", "rk", "rr", "s", "shn", "sn", "sp", "spr", "th", "tr", "tv", "v", "w", "x", "z"];
var nm4 = ["", "", "", "", "", "c", "d", "f", "g", "k", "l", "m", "n", "ng", "nn", "r", "rr", "s", "t", "x"];
var nm5 = ["", "", "", "", "", "", "", "d", "dr", "dh", "f", "fr", "g", "gh", "h", "k", "kh", "l", "m", "n", "p", "r", "rh", "s", "sh", "th", "w", "y", "z"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "ea", "ee", "ai", "ie", "ia", "oo"];
var nm7 = ["b", "c", "ch", "f", "ff", "h", "hl", "l", "ll", "lm", "ln", "lr", "m", "ml", "mm", "my", "n", "nn", "nl", "nd", "ny", "r", "rr", "s", "ss", "sh", "shn", "t", "th", "w", "y"];
var nm8 = ["", "", "", "", "", "", "", "f", "h", "l", "n", "s", "t"];
var nm9 = ["", "", "", "b", "br", "d", "dr", "f", "g", "k", "l", "m", "n", "r", "rh", "s", "st", "t", "tr", "v", "vr", "z"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oa", "ai", "ia", "ii", "ie", "ee", "oo"];
var nm11 = ["ch", "chm", "d", "dd", "dr", "dj", "g", "gg", "gr", "gd", "gn", "j", "k", "kt", "kk", "l", "m", "mm", "md", "mp", "n", "nd", "nn", "ng", "nr", "nt", "r", "rr", "rd", "rg", "rj", "rt", "rv", "st", "t", "tr", "wch", "z"];
var nm12 = ["", "", "", "", "", "", "", "c", "d", "g", "k", "l", "ll", "m", "mt", "n", "ng", "nd", "nt", "r", "rk", "rr", "s", "ss", "t", "ts", "z", "zz"];

function generator$star_wars$nautolans(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			while (rnd7 < 3) {
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
				while (rnd < 7) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5] + "  " + namelast;
			} else if (i < 7) {
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
			} else if (i < 7) {
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