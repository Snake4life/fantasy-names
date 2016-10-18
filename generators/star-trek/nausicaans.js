var nm1 = ["", "", "b", "ch", "d", "dg", "gh", "g", "gr", "h", "j", "k", "kl", "lh", "l", "m", "n", "p", "r", "s", "sh", "st", "t", "th", "tl", "tr", "v", "x", "y", "z"];
var nm2 = ["ae", "ee", "ei", "ou", "uu", "a", "e", "i", "o", "u"];
var nm3 = ["bz", "ch", "d", "g", "ggr", "gv", "h", "j", "jh", "l", "lth", "lrsh", "k", "kz", "kkz", "ktz", "m", "mmk", "n", "p", "r", "rt", "rg", "rc", "sh", "th", "t", "tz", "v", "y", "yk", "z", "zj", "zzg", "d", "g", "h", "j", "l", "k", "m", "n", "p", "r", "t", "v", "y", "z"];
var nm4 = ["", "", "c", "chk", "rdz", "g", "jz", "k", "m", "n", "ng", "p", "r", "rr", "rrg", "sh", "t", "th", "tz", "tkz", "x", "z"];
var nm5 = ["c", "chk", "rdz", "g", "jz", "k", "m", "n", "ng", "p", "r", "rr", "rrg", "sh", "t", "th", "tz", "tkz", "x", "z"];
var nm6 = ["", "", "", "a", "e", "i", "o", "u"];

function generator$star_trek$nausicaans(type) {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (rnd2 < 5) {
				while (rnd4 < 5) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
		}
		return names;
	}

}