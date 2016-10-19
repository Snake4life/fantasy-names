function generator$destiny$hives(type) {
	var nm1 = ["b", "cr", "d", "g", "gr", "k", "kr", "m", "n", "r", "s", "tr", "z"];
	var nm2 = ["a", "e", "o", "u", "a", "e", "o", "u", "a", "e", "o", "u", "oo"];
	var nm3 = ["c", "cr", "gr", "k", "kr", "m", "n", "nd", "r", "rd", "rg", "rn", "rv", "rz", "t", "tr", "v", "z"];
	var nm4 = ["", "c", "k", "k", "n", "r", "x"];
	var nm5 = ["c", "ch", "h", "m", "n", "ph", "s", "sh", "th", "v", "z", "zh"];
	var nm6 = ["a", "e", "i", "e", "i", "o"];
	var nm7 = ["g", "lk", "lm", "ln", "m", "mn", "n", "nl", "nr", "rm", "sh", "sm", "sn", "sr", "st", "th", "tr", "v", "vn", "vr", "z", "zd", "zl", "zn"];
	var nm8 = ["", "", "", "", "h", "l", "s", "th"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		}
		return names;
	}

}