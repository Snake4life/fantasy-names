var nm1 = ["c", "cz", "h", "j", "k", "s", "t", "th", "tr", "x", "xz", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "uu", "ee"];
var nm3 = ["b", "h", "j", "n", "nn", "m", "mr", "mn", "mm", "rr", "sh", "sz", "t", "z", "zz"];
var nm4 = ["", "", "", "l", "n", "nn", "r", "s", "st", "t", "x"];
var nm5 = ["", "", "b", "d", "f", "g", "gl", "k", "kr", "l", "m", "n", "s", "th", "x", "z"];
var nm6 = ["d", "dv", "f", "ff", "ll", "m", "mm", "ml", "n", "nl", "nr", "r", "rr", "s", "ss", "st", "sn", "sm", "sv", "t", "v"];
var nm7 = ["", "", "", "bs", "l", "m", "n", "s", "t"];
var nm8 = ["br", "b", "d", "dr", "g", "gr", "k", "kr", "l", "m", "s", "t", "w", "x", "z"];
var nm9 = ["d", "dv", "dr", "f", "g", "gr", "gn", "l", "ll", "m", "mm", "mr", "ms", "nr", "nn", "n", "ns", "s", "ss", "st", "sm", "sn", "sv", "rr", "t", "tr", "thr", "v", "vr", "z"];
var nm10 = ["c", "d", "j", "l", "m", "n", "r", "ss", "t", "x"];

function generator$star_wars$falleens(type) {

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
			if (i < 5) {
				while (rnd4 < 3) {
					rnd4 = Math.floor(Math.random() * nm7.length);
				}
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd4] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd5] + nm7[rnd4] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd4 < 3) {
					rnd4 = Math.floor(Math.random() * nm4.length);
				}
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