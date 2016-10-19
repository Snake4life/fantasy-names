function generator$halo$jiralhanaes() {
	var nm1 = ["b", "br", "c", "cr", "d", "dr", "f", "g", "gr", "h", "k", "kr", "l", "m", "n", "p", "pr", "r", "s", "t", "tr", "v", "w", "z"];
	var nm2 = ["a", "e", "y", "u", "i", "o"];
	var nm3 = ["bb", "cc", "ck", "ct", "dd", "gt", "kk", "kt", "ll", "rb", "rc", "rd", "rg", "rk", "rl", "rm", "rn", "rp", "rr", "rs", "rt", "rv", "rz", "ss", "st", "b", "c", "d", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "z"];
	var nm4 = ["bb", "cc", "ck", "ct", "dd", "gt", "kk", "kt", "ll", "rb", "rc", "rd", "rg", "rk", "rl", "rm", "rn", "rp", "rr", "rs", "rt", "rv", "rz", "ss", "st", "b", "c", "d", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm5 = ["us", "um", "eus", "eum", "ion", "ius", "is"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (rnd3 < 25) {
			while (rnd5 < 25) {
				rnd5 = Math.floor(Math.random() * nm4.length);
			}
		}
		rnd6 = Math.floor(Math.random() * nm5.length);
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm5[rnd6];
		return names;
	}

}