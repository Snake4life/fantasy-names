var nm1 = ["", "", "", "", "", "b", "br", "d", "dr", "f", "g", "gl", "k", "l", "m", "n", "p", "q", "r", "t", "v", "w", "z", "zl"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oo", "ua", "uu", "ue", "ey", "oy"];
var nm3 = ["b", "bb", "d", "dd", "f", "g", "gg", "ll", "m", "mg", "mr", "mt", "n", "ng", "nd", "nk", "nm", "pp", "r", "rg", "rd", "rf", "rp", "rr", "rt", "ssc", "ss", "sg", "sc", "st", "t", "tt", "tw"];
var nm4 = ["", "", "", "", "", "", "", "", "b", "bb", "d", "g", "l", "lg", "m", "n"];
var nm5 = ["b", "d", "f", "g", "k", "l", "m", "n", "q", "r", "s", "t", "v", "w", "z"];
var nm6 = ["a", "e", "i", "o", "u"];
var nm7 = ["b", "bb", "bl", "d", "dl", "f", "ff", "fl", "fn", "fm", "ffl", "g", "gg", "gl", "gm", "gn", "l", "ll", "lb", "ld", "lt", "m", "mt", "md", "n", "nt", "nl", "p", "pp", "r", "rr", "rg", "rl", "rt", "rz", "rb", "s", "ss", "sg", "st", "sl", "sb", "tt", "t", "tl", "tr", "v", "z"];
var nm9 = ["b", "d", "f", "g", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "z"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "uu", "oo"];
var nm11 = ["b", "bb", "d", "g", "l", "lg", "m", "n"];

function generator$star_wars$toydarians(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		if (i % 2 != 0) {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd10 = Math.floor(Math.random() * nm7.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm7[rnd10] + nm10[rnd9];
		} else {
			rnd9 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd9];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			if (i < 5) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + "  " + namelast;
			} else {
				rnd5 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm7.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 4) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 8) {
					rnd5 = Math.floor(Math.random() * nm4.length);
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