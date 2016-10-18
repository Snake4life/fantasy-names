var nm1 = ["", "", "", "", "", "b", "bl", "br", "bw", "c", "ch", "d", "dr", "f", "g", "gl", "gr", "h", "j", "k", "kh", "kl", "kr", "l", "m", "n", "p", "pl", "pr", "q", "r", "s", "sh", "sk", "sm", "sp", "sz", "t", "tr", "v", "w", "wh", "y", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "uu", "ee", "io", "oo", "eu", "ua", "ai", "oa", "oe", "ae"];
var nm3 = ["b", "bb", "bd", "bs", "ch", "chr", "d", "dd", "ddl", "ff", "ffr", "g", "gg", "gh", "gr", "j", "jj", "k", "kk", "l", "lb", "ld", "lg", "ll", "ln", "lr", "lt", "m", "mb", "mdr", "mr", "n", "nd", "ng", "ngr", "nj", "nn", "nt", "nv", "ny", "pp", "q", "r", "rb", "rbl", "rchr", "rd", "rdr", "rg", "rgr", "rk", "rl", "rp", "rph", "rr", "rrb", "rrg", "rs", "rt", "rv", "rz", "s", "sh", "sk", "skh", "ss", "st", "t", "th", "tj", "tt", "v", "w", "wn", "x", "yb"];
var nm4 = ["", "", "", "", "", "", "", "", "", "b", "c", "d", "g", "gg", "h", "hl", "k", "l", "lb", "ll", "m", "n", "nn", "r", "rd", "rg", "rgg", "rm", "s", "sch", "sh", "sk", "ss", "th", "x", "z", "zz"];

function generator$star_wars$hutts(type) {

	i = Math.floor(Math.random() * 10); {
		rnd8 = Math.floor(Math.random() * nm1.length);
		rnd9 = Math.floor(Math.random() * nm2.length);
		rnd12 = Math.floor(Math.random() * nm4.length);
		if (i % 2 === 0) {
			rnd10 = Math.floor(Math.random() * nm3.length);
			rnd11 = Math.floor(Math.random() * nm2.length);
			namelast = nm1[rnd8] + nm2[rnd9] + nm3[rnd10] + nm2[rnd11] + nm4[rnd12];
		} else {
			while (rnd8 < 5) {
				rnd8 = Math.floor(Math.random() * nm1.length);
			}
			while (rnd12 < 9) {
				rnd12 = Math.floor(Math.random() * nm4.length);
			}
			namelast = nm1[rnd8] + nm2[rnd9] + nm4[rnd12];
		}
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (i < 7) {
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
		} else {
			rnd6 = Math.floor(Math.random() * nm3.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + "  " + namelast;
		}
		return names;
	}

}