var nm1 = ["", "", "", "", "", "", "b", "bl", "br", "c", "d", "dl", "dw", "f", "fr", "g", "gr", "h", "j", "k", "kr", "l", "m", "n", "p", "q", "r", "s", "t", "tr", "v", "w", "x", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "eo", "ie", "uu", "ea", "ee", "ia", "ao", "ue", "ae", "ay", "y", "ii", "ei", "iu", "ui", "oo", "ua", "yu"];
var nm3 = ["b", "bb", "br", "d", "dm", "fr", "g", "ggl", "gl", "hs", "j", "kk", "l", "ll", "llr", "lth", "m", "md", "n", "nb", "nch", "nd", "ng", "nn", "nr", "pl", "r", "rg", "rk", "rl", "rn", "rr", "rth", "rw", "shr", "ss", "st", "t", "th", "w", "xt", "z"];
var nm4 = ["", "", "", "", "", "b", "bb", "c", "d", "dt", "gg", "k", "kk", "l", "ld", "lld", "ln", "lss", "m", "n", "nb", "nt", "pt", "r", "rm", "rs", "rt", "s", "sh", "ss", "t", "tz", "v", "vv", "x"];
var nm5 = ["", "", "", "", "", "", "", "", "", "", "b", "ch", "d", "f", "fr", "g", "h", "j", "k", "l", "m", "n", "r", "s", "t", "tr", "v", "w", "z"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "ee", "uo", "ee", "aa", "uu", "ae", "ya", "yu"];
var nm7 = ["b", "bb", "f", "ff", "fr", "gr", "gg", "gl", "hl", "hn", "hm", "l", "ll", "lb", "lm", "ln", "ld", "m", "md", "mb", "ml", "mm", "n", "nb", "nm", "ng", "nd", "p", "pp", "r", "rr", "rb", "rd", "rl", "rn", "s", "st", "sth", "sd", "sh", "ss", "t", "th", "tt", "vv"];
var nm8 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "l", "n", "nn", "r", "s", "ss", "th", "v", "x"];
var nm9 = ["", "", "", "", "", "b", "bd", "br", "f", "fr", "g", "gh", "h", "j", "k", "l", "m", "n", "nh", "nr", "p", "pl", "r", "s", "sch", "sn", "sq", "st", "sw", "t", "ts", "v", "vh", "w", "y", "z"];
var nm10 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "ia", "ie", "ei", "oo", "ee", "uu", "aa", "au", "ya", "ea", "ii", "iu", "ua"];
var nm11 = ["b", "bb", "bbb", "d", "g", "gg", "gn", "hnt", "j", "kk", "l", "lk", "ll", "m", "mb", "mbl", "n", "nd", "ng", "nr", "ns", "ntr", "r", "rb", "rr", "rt", "rt", "s", "sc", "st", "tt", "v", "vn", "wn"];
var nm12 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "b", "bb", "bbs", "bl", "c", "cb", "d", "h", "k", "l", "ll", "ls", "m", "mb", "mm", "mp", "n", "nb", "nd", "nn", "nr", "nt", "p", "pt", "r", "rb", "rl", "rr", "rs", "rss", "s", "st", "t", "th", "v", "vv", "wn", "z"];

function generator$star_wars$sullustans(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 2 != 0) {
			while (rnd10 < 15) {
				rnd10 = Math.floor(Math.random() * nm12.length);
			}
			namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 3) {
				while (rnd < 10) {
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
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 6) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
			} else if (i < 8) {
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