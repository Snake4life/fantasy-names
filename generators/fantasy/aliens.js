var nm1 = ["b", "br", "c", "cr", "ch", "d", "dr", "g", "gr", "j", "k", "kr", "kn", "km", "p", "pr", "q", "qr", "ql", "r", "st", "str", "t", "tr", "v", "vr", "w", "wr", "x", "xr", "z", "zr", "", "", "", "", ""];
var nm2 = ["a", "e", "i", "o", "u", "y", "au", "ou", "ei", "uy", "oe", "ua", "ue", "uo", "a", "e", "i", "o", "u", "y"];
var nm3 = ["b", "c", "d", "g", "j", "k", "l", "m", "p", "q", "r", "s", "t", "v", "w", "x", "z", "br", "cr", "dr", "gr", "kr", "km", "pr", "qr", "st", "tr", "vr", "wr", "xx", "zz", "bb", "dd", "g", "kk", "q'", "k'", "rr", "r'", "t'", "tt", "vv", "v'", "wr", "x'", "z'", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "y", "", "", "", "", "", ""];
var nm5 = ["b", "d", "g", "gh", "hr", "ht", "hn", "hm", "hz", "hx", "hq", "k", "ks", "kx", "lk", "lz", "lp", "lt", "m", "mt", "nt", "p", "pt", "q", "r", "rs", "rt", "rq", "rk", "rc", "rb", "rd", "sk", "t", "th", "ts", "wth", "x", "z"];

var nm6 = ["b", "bl", "c", "cl", "ch", "d", "f", "fr", "fl", "g", "gl", "gn", "h", "kl", "kn", "m", "n", "p", "pl", "ph", "q", "ql", "s", "st", "sl", "t", "v", "vl", "w", "z", "", "", "", "", "", "", "", "", ""];
var nm7 = ["a", "e", "i", "o", "u", "y", "ae", "ea", "eo", "oe", "ie", "ue", "ua", "a", "e", "i", "o", "u", "y"];
var nm8 = ["b", "c", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "w", "bb", "bl", "cl", "ff", "fl", "gl", "gn", "ks", "ll", "lh", "kh", "bh", "ch", "dh", "lm", "ln", "lph", "ls", "lf", "mm", "mn", "ms", "nn", "ns", "p", "ph", "ps", "rf", "ss", "st", "sh", "th", "ts", "s'", "l'", "n'", "m'", "f'", "h'"];
var nm10 = ["", "b", "d", "g", "gh", "h", "hs", "ht", "hn", "hm", "hl", "k", "l", "ll", "kh", "lh", "lm", "ln", "lph", "ls", "lf", "m", "mm", "n", "nn", "ns", "p", "ms", "ph", "ps", "s", "ss", "sh", "th", "ts", "w"];
var nm11 = ["a", "e", "i", "o", "u", "y", "ae", "ea", "eo", "oe", "ie", "ue", "ua", "", "", "", "", "", "", "", "", "", "", "", ""];

var nm12 = ["b", "bl", "br", "c", "ch", "cl", "cr", "d", "dr", "f", "fl", "fr", "g", "gl", "gn", "gr", "h", "j", "k", "kl", "km", "kn", "kr", "m", "n", "p", "ph", "pl", "pr", "q", "ql", "qr", "r", "s", "sl", "sr", "st", "str", "t", "tl", "tr", "v", "vl", "vr", "w", "wr", "x", "xr", "z", "zr", "", "", "", "", "", "", ""];
var nm13 = ["a", "ae", "au", "e", "ea", "ei", "eo", "i", "ie", "o", "oe", "ou", "u", "ua", "ue", "uo", "uy", "y"];
var nm14 = ["b", "bb", "bh", "bl", "br", "c", "ch", "cl", "cr", "d", "dd", "dh", "dr", "f", "ff", "fl", "g", "gl", "gn", "gr", "h", "hh", "hl", "hm", "hn", "hs", "hsh", "j", "k", "k'", "kh", "kk", "km", "kr", "ks", "l", "lf", "lh", "ll", "lm", "ln", "lph", "ls", "m", "mm", "mn", "ms", "n", "nn", "ns", "p", "ph", "pr", "ps", "q", "q'", "qr", "r", "r'", "rf", "rr", "s", "sh", "ss", "st", "t", "t'", "th", "tr", "ts", "tt", "v", "v'", "vr", "vv", "w", "wr", "x", "x'", "xx", "z", "zz"];
var nm15 = ["a", "e", "i", "o", "u", "y", "a", "ae", "au", "e", "ea", "ei", "eo", "i", "ie", "o", "oe", "ou", "u", "ua", "ue", "uo", "uy", "y", "", "", "", "", "", ""];
var nm16 = ["b", "d", "g", "gh", "h", "hl", "hm", "hn", "hq", "hr", "hs", "hsh", "hst", "ht", "hx", "hz", "k", "kh", "ks", "kx", "l", "lf", "lh", "lk", "ll", "lm", "ln", "lp", "lph", "ls", "lst", "lt", "lz", "m", "mm", "mn", "ms", "mt", "n", "nn", "ns", "nt", "p", "ph", "ps", "pt", "q", "r", "rb", "rc", "rd", "rf", "rk", "rq", "rs", "rst", "rt", "s", "sh", "sk", "sp", "ss", "st", "t", "th", "ts", "w", "wth", "x", "z"];
var nm17 = ["a", "e", "i", "o", "u", "y", "ae", "ea", "eo", "oe", "ie", "ue", "ua", "", "", "", "", "", "", "", "", "", "", "", ""];

function generator$fantasy$aliens() {

	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (rnd3 < 46) {
				while (rnd4 > 5) {
					rnd4 = Math.floor(Math.random() * nm4.length);
				}
			}
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm10.length);
			if (rnd4 > 5) {
				rnd5 = 0;
			}
			rnd6 = Math.floor(Math.random() * nm11.length);
			names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm4[rnd4] + nm10[rnd5] + nm11[rnd6];
		} else {
			rnd = Math.floor(Math.random() * nm12.length);
			rnd2 = Math.floor(Math.random() * nm13.length);
			rnd3 = Math.floor(Math.random() * nm14.length);
			rnd4 = Math.floor(Math.random() * nm15.length);
			if (rnd3 < 46) {
				while (rnd4 > 5) {
					rnd4 = Math.floor(Math.random() * nm15.length);
				}
			}
			rnd5 = Math.floor(Math.random() * nm16.length);
			rnd6 = Math.floor(Math.random() * nm17.length);
			names = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm15[rnd4] + nm16[rnd5] + nm17[rnd6];
		}
		return names;
	}

}