
var nm1 = ["", "", "", "", "b", "br", "c", "cl", "cr", "d", "dr", "f", "fl", "fr", "g", "gr", "h", "j", "k", "kn", "kr", "l", "m", "n", "p", "q", "r", "s", "sl", "sv", "t", "th", "tr", "v", "w", "y"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ie", "ae", "oo", "ai", "ea", "aa", "ei", "ui", "uo", "oa"];
var nm3 = ["b", "br", "ch", "d", "db", "dg", "dl", "dr", "fr", "ft", "g", "gl", "gm", "h", "hw", "j", "k", "l", "lb", "lbr", "lc", "ld", "lf", "lh", "lk", "ll", "lm", "lr", "lst", "lt", "lw", "m", "mb", "mbl", "mpt", "n", "nbr", "nc", "nd", "nds", "ng", "ngr", "ngv", "ngw", "nn", "ns", "r", "rc", "rd", "rdl", "rdr", "rds", "rgr", "rk", "rm", "rmm", "rmn", "rn", "rr", "rs", "rsh", "rt", "rth", "rtl", "rtr", "rv", "rw", "rz", "s", "sb", "sl", "sth", "str", "stv", "t", "tch", "th", "thlb", "thm", "v", "vr", "w", "wl", "yn"];
var nm4 = ["", "", "", "", "", "c", "ch", "ck", "d", "f", "g", "gh", "l", "ld", "lf", "ll", "lt", "m", "mb", "n", "nd", "ng", "nt", "r", "rd", "rn", "rr", "rst", "rt", "rth", "s", "sk", "st", "t", "th", "w", "y"];

var nm5 = ["", "", "", "", "b", "br", "c", "d", "dr", "f", "fr", "g", "gr", "gl", "h", "j", "k", "kh", "l", "m", "n", "pr", "ph", "s", "sl", "sh", "sr", "t", "th", "tr", "w", "y"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "ia", "ua", "ae", "ee", "ie", "ea"];
var nm7 = ["bb", "br", "c", "d", "dd", "dn", "f", "ff", "fr", "fn", "gn", "g", "gg", "hr", "hn", "nl", "l", "ld", "ll", "lm", "ln", "lb", "ls", "lv", "m", "mm", "mn", "n", "ng", "nn", "nm", "nd", "nw", "ns", "p", "ph", "r", "rd", "rn", "rl", "rm", "rr", "rs", "rw", "rg", "rtr", "s", "sn", "sl", "sh", "sm", "ss", "t", "th", "tr", "tn", "v", "w"];
var nm8 = ["", "", "", "", "", "", "", "", "l", "ld", "n", "s", "t"];

function generator$inheritance_cycle$humans(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (rnd5 < 5) {
				rnd4 = 0;
			}
			if (i < 6) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd6] + nm7[rnd7] + nm6[rnd4] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				if (rnd < 4) {
					while (rnd4 < 5) {
						rnd4 = Math.floor(Math.random() * nm4.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd4];
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm4[rnd4];
			}
		}
		return names;
	}

}