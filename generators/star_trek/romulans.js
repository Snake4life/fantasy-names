function generator$star_trek$romulans(type) {
	var nm1 = ["b", "ch", "c", "d", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "th", "v", "vr", "x", "", ""];
	var nm2 = ["a", "e", "i", "o", "u"];
	var nm3 = ["b", "c", "chr", "j", "k", "l", "j", "k", "l", "lm", "ld", "m", "m", "ns", "nd", "ncl", "r", "r", "rr", "t", "t", "v"];
	var nm4 = ["a", "e", "i", "o", "u", "ai", "ee", "iu"];
	var nm5 = ["", "b", "hk", "k", "l", "m", "n", "r", "s", "t", "th", "x"];
	var nm6 = ["", "a", "e", "o", "", "", "", "", "", "", "", "", "", ""];

	var nm7 = ["b", "c", "d", "h", "k", "l", "m", "n", "p", "r", "s", "t", "th", "v"];
	var nm8 = ["h", "k", "l", "ll", "m", "n", "r", "rr", "t", "tr", "th", "v"];
	var nm9 = ["a", "e", "i", "o", "u", "au", "ee"];
	var nm10 = ["", "k", "l", "m", "n", "s", "th"];
	var nm11 = ["", "a", "a"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm7.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm9.length);
			rnd5 = Math.floor(Math.random() * nm10.length);
			rnd6 = Math.floor(Math.random() * nm11.length);
			if (rnd5 === 0) {
				rnd6 = 0;
			}
			names = nm7[rnd] + nm2[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5] + nm11[rnd6];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			if (rnd5 === 0) {
				rnd6 = 0;
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6];
		}
		return names;
	}

}