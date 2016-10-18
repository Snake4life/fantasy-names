var nm1 = ["", "", "", "", "b", "bl", "br", "c", "cr", "cl", "d", "f", "fl", "fr", "g", "h", "j", "k", "kl", "kr", "l", "m", "n", "p", "r", "s", "sk", "t", "w", "y", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oo", "oe", "ee", "ie", "ue", "ia", "au"];
var nm3 = ["b", "bb", "bl", "bs", "d", "dr", "g", "gg", "k", "kf", "kn", "l", "ll", "llb", "lsb", "lsk", "ly", "m", "mb", "mf", "n", "nb", "nk", "nn", "nt", "p", "pp", "r", "rk", "rs", "rt", "rv", "s", "sm", "ss", "t", "tt", "v", "x", "z", "zz"];
var nm4 = ["", "", "", "b", "c", "d", "f", "ff", "gg", "h", "k", "l", "m", "n", "nn", "p", "r", "rd", "rt", "s", "sh", "sk", "ss", "w"];
var nm5 = ["", "", "", "", "", "b", "bl", "c", "cl", "d", "dh", "f", "fl", "fr", "h", "j", "kl", "kh", "l", "m", "n", "p", "r", "s", "sh", "spl", "t", "th", "w", "y"];
var nm6 = ["bl", "bb", "b", "bs", "d", "dd", "dh", "f", "ff", "g", "l", "ll", "ls", "lb", "ls", "m", "mm", "mb", "mf", "n", "nb", "nn", "nd", "p", "pf", "pd", "pp", "r", "rt", "rs", "s", "ss", "sm", "sn", "sd", "t", "th", "tt", "w", "x", "z"];
var nm7 = ["", "", "", "", "", "b", "d", "f", "ff", "g", "h", "l", "m", "n", "rs", "s", "ss", "w"];
var nm8 = ["b", "c", "d", "f", "g", "gr", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "sh", "sl", "sq", "t", "tr", "w", "y", "w", "z"];
var nm9 = ["bb", "bbl", "bl", "d", "db", "dr", "dt", "f", "ff", "g", "gl", "j", "kk", "ll", "lb", "ld", "ls", "m", "mb", "mf", "nd", "ng", "p", "pf", "r", "rd", "rm", "rp", "rs", "rsh", "s", "ss", "sb", "sd", "sm", "th", "tt", "ttl", "w", "z", "zb"];
var nm10 = ["", "", "", "", "b", "d", "f", "g", "l", "ls", "m", "mk", "n", "nks", "nt", "p", "pps", "r", "rm", "rr", "rs", "rt", "s", "ss", "th", "w", "wn", "z", "zz"];

function generator$star_wars$gungans(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm8.length);
		rnd7 = Math.floor(Math.random() * nm2.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		if (i % 2 === 0) {
			namelast = nm8[rnd6] + nm2[rnd7] + nm10[rnd8];
		} else {
			rnd9 = Math.floor(Math.random() * nm9.length);
			rnd11 = Math.floor(Math.random() * nm2.length);
			namelast = nm8[rnd6] + nm2[rnd7] + nm9[rnd9] + nm2[rnd11] + nm10[rnd8];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			if (i < 4) {
				if (rnd < 4) {
					while (rnd4 < 3) {
						rnd4 = Math.floor(Math.random() * nm7.length);
					}
				}
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd4] + "  " + namelast;
			} else if (i < 7) {
				while (rnd < 4) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				names = nm5[rnd] + nm2[rnd2] + "-" + nm5[rnd] + nm2[rnd2] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd5] + nm7[rnd4] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 4) {
				if (rnd < 4) {
					while (rnd4 < 3) {
						rnd4 = Math.floor(Math.random() * nm4.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd4] + "  " + namelast;
			} else if (i < 7) {
				while (rnd < 4) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd4 < 3) {
					rnd4 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd4] + "-" + nm1[rnd] + nm2[rnd2] + nm4[rnd4] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4] + "  " + namelast;
			}
		}
		return names;
	}

}