function generator$star_trek$saurians(type) {
	var nm1 = ["", "d", "g", "j", "k", "kr", "m", "n", "pl", "r", "st", "t", "y", "z"];
	var nm2 = ["a", "e", "i", "o", "u"];
	var nm3 = ["g", "gz", "ggt", "j", "k", "kz", "kr", "km", "l", "m", "mz", "nz", "n", "nn", "r", "rr", "rk", "rd", "t", "tg", "tk", "zk", "zr", "zg", "z", "g", "j", "k", "l", "m", "n", "r", "t", "z", "g", "j", "k", "l", "m", "n", "r", "t", "z"];
	var nm4 = ["c", "chv", "g", "gt", "k", "n", "s", "ss", "t", "tt", "z"];
	var nm5 = ["a", "e", "i", "o", "u", "ee", "ii", "", ""];
	var nm6 = ["g", "gz", "ggt", "j", "k", "kz", "kr", "km", "l", "m", "mz", "nz", "n", "nn", "r", "rr", "rk", "rd", "t", "tg", "tk", "zk", "zr", "zg", "z", "c", "chv", "g", "gt", "k", "n", "s", "ss", "t", "tt", "z"];

	var nm7 = ["", "", "c", "g", "gl", "h", "j", "k", "l", "n", "m", "r", "s", "sh", "y"];
	var nm8 = ["a", "e", "i", "o", "u", "ia", "ie", "uo", "ai", "uu", "oo", "ae", "uoa"];
	var nm9 = ["gr", "gg", "g", "gt", "h", "l", "m", "n", "nn", "q", "qq", "r", "rr", "sh", "s", "ss", "t", "tt", "v", "y", "z"];
	var nm10 = ["", "", "", "", "", "", "", "", "ch", "g", "m", "n", "s"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm7.length);
				rnd2 = Math.floor(Math.random() * nm8.length);
				rnd3 = Math.floor(Math.random() * nm9.length);
				rnd4 = Math.floor(Math.random() * nm8.length);
				if (rnd2 > 4) {
					while (rnd4 > 4) {
						rnd4 = Math.floor(Math.random() * nm8.length);
					}
				}
				rnd5 = Math.floor(Math.random() * nm10.length);
				names = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd4] + nm10[rnd5];
			} else {
				rnd = Math.floor(Math.random() * nm7.length);
				rnd2 = Math.floor(Math.random() * nm8.length);
				rnd3 = Math.floor(Math.random() * nm9.length);
				rnd4 = Math.floor(Math.random() * nm8.length);
				if (rnd2 > 4) {
					while (rnd4 > 4) {
						rnd4 = Math.floor(Math.random() * nm8.length);
					}
				}
				rnd5 = Math.floor(Math.random() * nm9.length);
				rnd6 = Math.floor(Math.random() * nm8.length);
				if (rnd2 > 4 || rnd4 > 4) {
					while (rnd6 > 4) {
						rnd6 = Math.floor(Math.random() * nm8.length);
					}
				}
				rnd7 = Math.floor(Math.random() * nm10.length);
				names = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm8[rnd4] + nm9[rnd5] + nm8[rnd6] + nm10[rnd7];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm2[rnd2] + nm6[rnd3] + nm5[rnd6];
			} else {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm5[rnd6];
			}
		}
		return names;
	}

}