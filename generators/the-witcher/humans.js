var nm1 = ["", "", "", "", "", "b", "br", "c", "ch", "d", "dr", "f", "gr", "g", "h", "k", "kr", "l", "m", "n", "r", "s", "st", "str", "t", "th", "v", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ui", "ea", "ei", "ie", "ai", "ua", "ei", "eo", "ia", "aa", "ee"];
var nm3 = ["b", "b", "br", "bl", "cl", "c", "c", "cr", "d", "d", "dl", "dr", "g", "g", "gr", "gn", "k", "k", "kr", "kn", "l", "l", "lc", "ll", "lm", "lt", "lw", "m", "m", "mn", "mr", "n", "n", "nc", "ndl", "nh", "nn", "ns", "nz", "r", "r", "rd", "rk", "rn", "rs", "rv", "ry", "s", "s", "st", "sk", "sr", "str", "t", "th", "tr", "tn", "t", "thm", "v", "v", "z", "z"];
var nm4 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ui", "ea", "ei", "ie", "ai", "ua", "ei", "eo", "ia", "aa", "ee"];
var nm5 = ["", "b", "b", "br", "bl", "cl", "c", "c", "cr", "d", "d", "dl", "dr", "g", "g", "gr", "gn", "k", "k", "kr", "kn", "l", "l", "lc", "ll", "lm", "lt", "lw", "m", "m", "mn", "mr", "n", "n", "nc", "ndl", "nh", "nn", "ns", "nz", "r", "r", "rd", "rk", "rn", "rs", "rv", "ry", "s", "s", "st", "sk", "sr", "str", "t", "th", "tr", "tn", "t", "thm", "v", "v", "z", "z"];
var nm7 = ["", "", "", "", "b", "c", "ck", "d", "k", "l", "ld", "ll", "lt", "n", "nd", "r", "s", "st", "y"];

var nm8 = ["", "", "", "", "", "br", "c", "d", "dh", "f", "gl", "gr", "gw", "k", "l", "m", "n", "ph", "r", "s", "sh", "t", "th", "tr", "v", "y"];
var nm9 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "io", "ei", "ea", "ae", "ia", "ue", "ua"];
var nm10 = ["br", "b", "dh", "d", "dd", "f", "ff", "fr", "g", "gh", "gg", "k", "l", "ll", "lm", "ln", "lv", "n", "nc", "nfr", "nn", "pp", "ph", "pr", "r", "rg", "rr", "s", "ss", "sh", "tt", "th", "v", "zk", "z"];
var nm11 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "io", "ei", "ea", "ae", "ia", "ue", "ua"];
var nm12 = ["", "br", "b", "dh", "d", "dd", "f", "ff", "fr", "g", "gh", "gg", "k", "l", "ll", "lm", "ln", "lv", "n", "nc", "nfr", "nn", "pp", "ph", "pr", "r", "rg", "rr", "s", "ss", "sh", "tt", "th", "v", "zk", "z"];
var nm14 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "s", "n", "h", "l", "th"];

function generator$the_witcher$humans(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm8.length);
			rnd2 = Math.floor(Math.random() * nm9.length);
			rnd3 = Math.floor(Math.random() * nm10.length);
			rnd6 = Math.floor(Math.random() * nm9.length);
			rnd7 = Math.floor(Math.random() * nm14.length);
			if (i < 5) {
				names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm9[rnd6] + nm14[rnd7];
			} else {
				rnd4 = Math.floor(Math.random() * nm11.length);
				rnd5 = Math.floor(Math.random() * nm12.length);
				if (rnd4 < 20) {
					rnd5 = 0;
					rnd6 = 0;
				} else {
					while (rnd5 === 0) {
						rnd5 = Math.floor(Math.random() * nm12.length);
					}
				}
				names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5] + nm9[rnd6] + nm14[rnd7];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm2.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm7[rnd7];
			} else {
				rnd4 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				if (rnd4 < 40) {
					rnd5 = 0;
					rnd6 = 0;
				} else {
					while (rnd5 === 0) {
						rnd5 = Math.floor(Math.random() * nm5.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm2[rnd6] + nm7[rnd7];
			}
		}
		return names;
	}

}