var nm1 = ["", "", "", "b", "c", "ch", "chr", "d", "dh", "f", "fr", "g", "gr", "j", "k", "kr", "l", "m", "n", "nr", "p", "ph", "pw", "q", "r", "s", "sh", "sq", "t", "th", "tr", "ts", "v", "w", "wh", "y", "z"];
var nm2 = ["y", "y", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "io", "oe", "ue", "ui", "ua", "ea"];
var nm3 = ["b", "bk", "ck", "ct", "d", "dk", "dg", "dl", "dm", "dr", "g", "gg", "gk", "k", "kk", "l", "lb", "lg", "ll", "lm", "lp", "lw", "m", "mt", "n", "ndr", "nt", "p", "pp", "q", "r", "rgl", "rh", "rl", "rr", "rrh", "rth", "rz", "sq", "ss", "ssth", "st", "sth", "w"];
var nm4 = ["", "", "", "d", "f", "g", "hlg", "k", "l", "lg", "mp", "n", "nn", "q", "r", "rg", "rgg", "rl", "rn", "rr", "rsk", "s", "sh", "sk", "t", "z"];
var nm5 = ["", "", "", "b", "c", "ch", "d", "fr", "g", "gr", "j", "k", "kr", "l", "m", "n", "pr", "r", "pr", "sl", "sq", "sll", "t", "th", "tr", "ts", "v", "w", "y", "z"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "i", "o", "u", "a", "e", "i", "o", "u", "au", "ee", "aa"];
var nm7 = ["bn", "br", "c", "ck", "cp", "cm", "dk", "dm", "g", "gg", "hl", "k", "kk", "kr", "km", "l", "lb", "lp", "lg", "lm", "nm", "n", "nn", "nd", "nr", "nt", "p", "pp", "q", "r", "rk", "rr", "rt", "rh", "rz", "s", "ss", "st", "sm", "sq", "t", "v", "w", "wm"];
var nm8 = ["", "", "", "", "d", "dd", "ff", "g", "k", "l", "lg", "ll", "ls", "m", "n", "nk", "nx", "q", "r", "rg", "rn", "rv", "s", "sk", "t", "z"];

function generator$star_wars$quarrens() {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm5.length);
		rnd8 = Math.floor(Math.random() * nm6.length);
		rnd10 = Math.floor(Math.random() * nm8.length);
		if (i % 2 === 0) {
			while (rnd7 < 3) {
				rnd7 = Math.floor(Math.random() * nm5.length);
			}
			namelast = nm5[rnd7] + nm6[rnd8] + nm8[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm6.length);
			rnd11 = Math.floor(Math.random() * nm7.length);
			namelast = nm5[rnd7] + nm6[rnd8] + nm7[rnd11] + nm6[rnd9] + nm8[rnd10];
		}
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm4.length);
		if (i < 5) {
			while (rnd < 3) {
				rnd = Math.floor(Math.random() * nm1.length);
			}
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd3] + "  " + namelast;
		} else {
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd5] + nm4[rnd3] + "  " + namelast;
		}
		return names;
	}

}