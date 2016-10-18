var nm1 = ["d", "dh", "g", "gh", "k", "kh", "m", "n", "sh", "t", "th", "tl", "v", "z", "zh"];
var nm2 = ["a'au", "au'ua", "o'ou", "u'u", "u'ua", "u'uo", "ua'au"];
var nm2b = ["a", "o", "u"];
var nm3 = ["d", "g", "l", "m", "n", "r", "v", "z"];
var nm4 = ["c", "ch", "g", "l", "m", "n", "r", "v", "z"];
var nm5 = ["c", "d", "k", "l", "lk", "ll", "m", "n", "rc", "rd", "rg", "rk", "rn"];

function generator$destiny$cabals() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		if (i < 5) {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
		} else if (i < 7) {
			rnd2 = Math.floor(Math.random() * nm2b.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2b[rnd2] + nm4[rnd3];
		} else {
			rnd2 = Math.floor(Math.random() * nm2b.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm2b.length);
			rnd5 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd] + nm2b[rnd2] + nm3[rnd5] + nm2b[rnd2] + nm4[rnd3];
		}
		return names;
	}

}