var nm1 = ["", "", "", "", "", "b", "br", "ch", "cl", "d", "dr", "f", "g", "gr", "h", "j", "jh", "jw", "k", "kr", "l", "m", "n", "p", "ph", "pl", "pw", "q", "r", "s", "sn", "spr", "st", "t", "th", "tr", "v", "vl", "w", "wh", "y", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "oo", "ea", "ua", "eo", "ou", "ee", "ao", "ii", "aa", "ui", "au", "uu", "ie"];
var nm3 = ["'kl", "'tr", "b", "bb", "c", "d", "dl", "ff", "g", "gg", "ggj", "h", "k", "kk", "kl", "kn", "l", "ld", "lj", "ll", "lln", "lm", "ln", "lr", "lt", "m", "mf", "ml", "mw", "n", "nc", "nd", "nf", "ngt", "nst", "nt", "nw", "pl", "r", "rf", "rgl", "rl", "rm", "rn", "rr", "rt", "rth", "s", "sh", "sh't", "sm", "ss", "sthm", "t", "th", "thw", "tr", "tt", "v", "vv", "w", "wb", "x", "xx", "z", "zl", "zz"];
var nm4 = ["", "", "", "", "", "b", "bb", "bs", "c", "cl", "d", "g", "gg", "hp", "j", "k", "l", "ls", "m", "mm", "n", "nk", "ph", "r", "rd", "rg", "rl", "rn", "rr", "s", "ss", "t", "th", "v", "w", "wl", "x", "z"];
var nm5 = ["", "", "", "", "b", "bh", "ch", "cw", "d", "dh", "f", "fr", "gh", "gw", "h", "kh", "kl", "l", "m", "n", "ph", "pl", "pw", "r", "rh", "s", "sh", "sw", "sl", "t", "th", "tw", "v", "vl", "vh", "w", "wh", "y"];
var nm6 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "ee", "oo", "uu", "ii"];
var nm7 = ["'sh", "'th", "bl", "ch", "dh", "dw", "f", "ff", "gh", "gw", "h", "hh", "kh", "kw", "ks", "l", "ls", "ll", "ln", "lm", "lth", "lsh", "lw", "m", "mm", "mf", "mw", "mn", "ml", "mw", "n", "nd", "ndr", "nf", "nw", "nsh", "ph", "rsh", "rs", "rf", "rl", "rh", "r", "rw", "rn", "rm", "rth", "sh", "sf", "sv", "sw", "shw", "ss", "sn", "sm", "th", "thw", "thl", "v", "w", "wh", "wl", "ws", "wsh"];
var nm8 = ["", "", "", "", "", "", "", "", "", "b", "f", "g", "h", "l", "m", "mm", "n", "ph", "r", "s", "sh", "ss", "th", "w"];
var nm9 = ["", "", "", "", "b", "c", "ch", "cr", "d", "fl", "fr", "h", "l", "m", "n", "nh", "p", "pw", "r", "s", "sl", "t", "v", "w", "z"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "oo", "ea", "ee", "au", "ua"];
var nm11 = ["b", "bb", "bbl", "bl", "d", "dd", "f", "fl", "g", "h", "j", "k", "l", "ll", "lt", "m", "mfl", "n", "nd", "nt", "pr", "q", "r", "rk", "rt", "rtk", "s", "t", "th", "tr", "v", "w", "wm", "wr", "xl", "z"];
var nm12 = ["", "", "", "", "", "b", "bb", "d", "g", "hl", "k", "l", "ll", "m", "n", "ngs", "nd", "nn", "r", "rlq", "s", "t", "th", "thh", "ts", "w"];

function generator$star_wars$ithorians(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			while (rnd7 < 3) {
				rnd7 = Math.floor(Math.random() * nm9.length);
			}
			while (rnd10 < 4) {
				rnd10 = Math.floor(Math.random() * nm12.length);
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
			if (i < 4) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5b = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5b] + nm2[rnd6] + nm4[rnd5] + "  " + namelast;
			}
		}
		return names;
	}

}