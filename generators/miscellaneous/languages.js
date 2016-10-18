var nm1 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bh", "bl", "br", "ch", "cl", "cr", "cy", "dh", "dr", "fh", "fl", "fr", "gh", "gn", "gl", "gr", "kh", "kl", "kn", "kr", "mh", "my", "nh", "ph", "pl", "pr", "pn", "rh", "sc", "sh", "sl", "sm", "sn", "sp", "sr", "st", "str", "th", "tr", "ty", "vh", "wh", "zh", ];
var nm2 = ["a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "ae", "ao", "ai", "au", "ea", "eo", "ei", "eu", "oa", "oe", "oi", "ou", "ia", "ie", "io", "iu", "ua", "ue", "uo", "ui", "aa", "ee", "oo", "uu"];
var nm3 = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bb", "cc", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "ww", "zz", "cb", "lb", "nb", "bd", "zb", "cd", "gd", "ld", "md", "nd", "sd", "rd", "zd", "lf", "mf", "nf", "sf", "tf", "lg", "mg", "ng", "rg", "sg", "zg", "yg", "ck", "lk", "mk", "str", "nk", "sk", "tk", "zk", "fl", "gl", "kl", "pl", "sl", "tl", "dm", "fm", "gm", "km", "lm", "nm", "sm", "tm", "xm", "zm", "yn", "dn", "fn", "gn", "kn", "mn", "pn", "sn", "tn", "xn", "zn", "np", "sp", "tp", "xp", "fr", "gr", "kr", "pr", "tr", "gs", "ks", "ls", "ms", "ns", "ps", "ts", "xs", "ct", "kt", "lt", "mt", "nt", "pt", "rt", "st", "xt", "yt"];
var nm4 = ["abi", "ada", "ali", "an", "esh", "ash", "ani", "ano", "arhi", "ari", "aric", "arin", "asy", "athi", "ati", "ean", "ekhi", "eno", "eesh", "ese", "esh", "ethi", "eti", "ian", "ic", "ili", "in", "ina", "ish", "iya", "oshi", "oni", "osa", "uin", "un", "uni", "uri"];

function generator$miscellaneous$languages() {

	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			name = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
		} else if (i < 6) {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			name = nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 19) {
				while (rnd4 > 19) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			rnd5 = Math.floor(Math.random() * nm3.length);
			if (rnd3 > 80) {
				while (rnd5 > 80) {
					rnd5 = Math.floor(Math.random() * nm3.length);
				}
			}
			rnd6 = Math.floor(Math.random() * nm4.length);
			name = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm4[rnd6];
		} else {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (rnd2 > 19) {
				while (rnd4 > 19) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			rnd5 = Math.floor(Math.random() * nm3.length);
			if (rnd3 > 80) {
				while (rnd5 > 80) {
					rnd5 = Math.floor(Math.random() * nm3.length);
				}
			}
			rnd6 = Math.floor(Math.random() * nm4.length);
			name = nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm4[rnd6];
		}
		return name;
	}

}