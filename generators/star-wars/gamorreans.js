var nm1 = ["", "", "", "", "", "b", "bl", "bn", "br", "c", "d", "dr", "g", "gh", "gl", "gr", "grr", "grt", "h", "j", "k", "kl", "kr", "l", "m", "n", "p", "r", "sc", "sh", "sl", "sn", "sq", "st", "t", "th", "tr", "v", "vr", "w", "x", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ea", "eu", "au", "ee", "oo", "uu", "ou", "ua"];
var nm3 = ["b", "bn", "br", "d", "dbr", "fn", "g", "gb", "ggt", "gh", "gl", "gn", "gr", "gt", "gz", "kt", "l", "lg", "ll", "lr", "m", "mb", "mm", "mr", "n", "nf", "ngf", "nt", "nth", "r", "rg", "rk", "rl", "rm", "rn", "rt", "sh", "ss", "t", "th", "thm", "v", "zz"];
var nm4 = ["b", "c", "ck", "ckt", "f", "ff", "g", "gg", "gh", "k", "kk", "l", "lk", "m", "n", "ng", "nn", "nt", "r", "rc", "rg", "rk", "rn", "rp", "rrp", "rrt", "rt", "rth", "s", "ss", "t", "th", "tt", "z"];
var nm5 = ["", "", "", "", "", "", "", "", "b", "bl", "bn", "br", "c", "d", "dr", "g", "gh", "gl", "gr", "grr", "grt", "h", "j", "k", "kl", "kr", "l", "m", "n", "p", "r", "sc", "sh", "sl", "sn", "sq", "st", "t", "th", "tr", "v", "vr", "w", "x", "z"];
var nm6 = ["b", "bn", "br", "d", "dv", "fbr", "fn", "g", "gb", "gg", "gh", "gl", "gm", "gn", "gr", "gsh", "gv", "km", "l", "ll", "lly", "ln", "lr", "m", "mm", "mr", "mv", "n", "ndr", "nf", "ng", "nr", "nth", "r", "rg", "rk", "rl", "rm", "rn", "rr", "shr", "sn", "sr", "t", "th", "thn", "tr", "vn", "zs"];
var nm7 = ["", "", "", "", "b", "c", "cz", "cs", "f", "ff", "g", "gg", "gh", "k", "ks", "l", "ms", "m", "n", "ns", "nn", "ng", "r", "rc", "rf", "rn", "rq", "rs", "rr", "rm", "rth", "s", "ss", "t", "th", "sh", "sz", "z"];
var nm8 = ["b", "bn", "br", "d", "dbr", "dv", "fbr", "fn", "g", "gb", "gg", "ggt", "gh", "gl", "gm", "gn", "gr", "gsh", "gt", "gv", "gz", "km", "kt", "l", "lg", "ll", "lly", "ln", "lr", "m", "mb", "mm", "mr", "mv", "n", "ndr", "nf", "ng", "ngf", "nr", "nt", "nth", "r", "rg", "rk", "rl", "rm", "rn", "rr", "rt", "sh", "shr", "sn", "sr", "ss", "t", "th", "thm", "thn", "tr", "v", "vn", "zs", "zz"];
var nm9 = ["b", "c", "ck", "ckt", "cs", "cz", "f", "ff", "g", "gg", "gh", "k", "kk", "ks", "l", "lk", "m", "ms", "n", "ng", "nn", "ns", "nt", "r", "rc", "rf", "rg", "rk", "rm", "rn", "rp", "rq", "rr", "rrp", "rrt", "rs", "rt", "rth", "s", "sh", "ss", "sz", "t", "th", "tt", "z"];

function generator$star_wars$gamorreans(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm1.length);
		rnd7 = Math.floor(Math.random() * nm2.length);
		rnd8 = Math.floor(Math.random() * nm9.length);
		if (i % 2 === 0) {
			namelast = nm1[rnd6] + nm2[rnd7] + nm9[rnd8];
		} else {
			rnd9 = Math.floor(Math.random() * nm8.length);
			rnd11 = Math.floor(Math.random() * nm2.length);
			namelast = nm1[rnd6] + nm2[rnd7] + nm8[rnd9] + nm2[rnd11] + nm9[rnd8];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd5] + nm7[rnd4] + "  " + namelast;
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd4] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4] + "  " + namelast;
			}
		}
		return names;
	}

}