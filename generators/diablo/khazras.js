var nm1 = ["", "", "", "", "b", "bl", "br", "ch", "cr", "d", "dr", "gh", "gr", "h", "hr", "k", "kr", "l", "m", "mw", "n", "r", "sh", "sk", "sn", "t", "th", "tr"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "oa", "ao", "au"];
var nm3 = ["br", "d", "dr", "g", "gr", "ggr", "gl", "hg", "hl", "hgr", "lg", "lgh", "ld", "lz", "lb", "lghb", "ll", "lm", "ndr", "nd", "nz", "nr", "r", "rb", "rg", "rd", "rgr", "rt", "rth", "rz", "t", "wd"];
var nm4 = ["", "", "", "ch", "d", "g", "gg", "k", "l", "lm", "m", "n", "nn", "r", "rg", "s", "sh", "t", "tch", "th", "wl"];

function generator$diablo$khazras() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (i < 5) {
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else {
			rnd6 = Math.floor(Math.random() * nm3.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
		}
		return names;
	}

}