var nm1 = ["", "", "b", "d", "h", "l", "m", "n", "p", "r", "t", "v"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "o", "a", "e", "a", "e", "i", "o", "u", "a", "e", "o", "a", "e", "ee", "oo"];
var nm3 = ["b", "bb", "br", "bn", "d", "dn", "dr", "dd", "j", "l", "lb", "lbr", "ldr", "lr", "lm", "ln", "ld", "md", "ml", "mdr", "md", "mr", "mm", "mn", "ndr", "n", "nn", "nl", "nd", "nb", "r", "rl", "rn", "rm", "rd", "rb"];
var nm4 = ["", "", "", "b", "g", "gh", "j", "k", "m", "n", "p", "q", "r", "t", "tz", "x"];
var nm5 = ["", "", "b", "bh", "bl", "f", "fl", "h", "l", "m", "n", "ph", "s", "sl", "w"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "a", "e", "o", "a", "e", "o"];
var nm7 = ["bk", "b", "bb", "bn", "bl", "bs", "bh", "d", "dd", "dn", "dl", "f", "ff", "fl", "fr", "h", "hh", "l", "ll", "lm", "lr", "ln", "ld", "m", "mm", "ml", "md", "mn", "ms", "n", "nn", "nl", "ns", "nm", "ph", "phl", "phn", "t", "th", "tl", "tn", "ts"];
var nm8 = ["", "", "", "", "", "", "", "f", "h", "l", "n", "m", "s", "ss", "th"];
var nm9 = ["b", "br", "d", "dr", "h", "l", "m", "n", "r", "s", "sr", "t", "v"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "o", "a", "e", "i", "o", "u", "a", "e", "o", "a", "e", "i", "o", "u", "a", "e", "o", "ee", "oo", "ai"];
var nm11 = ["b", "d", "g", "j", "k", "l", "m", "n", "q", "t", "v"];
var nm12 = ["", "", "", "", "d", "g", "k", "l", "m", "n", "q", "r", "s", "x"];

function generator$star_wars$ortolans(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 2 === 0) {
			namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			names = nm5[rnd] + nm6[rnd2] + nm7[rnd4] + nm6[rnd5] + nm8[rnd3] + "  " + namelast;
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 2) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd3 < 3) {
					rnd3 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd3] + "  " + namelast;
			} else {
				rnd4 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd5] + nm4[rnd3] + "  " + namelast;
			}
		}
		return names;
	}

}