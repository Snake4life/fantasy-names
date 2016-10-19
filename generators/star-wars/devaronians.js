function generator$star_wars$devaronians(type) {
	var nm1 = ["c", "cr", "ch", "g", "gr", "h", "j", "k", "l", "m", "n", "r", "s", "t", "tr", "v", "vr", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "ue", "ao", "ei", "aa"];
	var nm3 = ["c", "ch", "g", "gh", "gr", "k", "kr", "kh", "kl", "l", "ll", "lm", "m", "mr", "mm", "md", "n", "nd", "r", "rt", "ss", "vr", "v"];
	var nm4 = ["", "", "", "", "", "c", "cx", "hk", "hr", "k", "kh", "lc", "lt", "n", "r", "rc", "rh", "s", "ss", "t", "th", "x"];
	var nm5 = ["b", "br", "bh", "c", "ch", "cr", "g", "gh", "h", "k", "l", "m", "n", "s", "t", "th", "v"];
	var nm6 = ["bh", "ch", "dh", "g", "gh", "gn", "h", "hn", "hs", "l", "ll", "ln", "lm", "m", "mm", "mn", "n", "nn", "nch", "r", "rh", "s", "ss", "v"];
	var nm7 = ["", "", "", "", "h", "l", "m", "n", "s", "th", "y"];
	var nm8 = ["br", "c", "ch", "dr", "d'r", "d'v", "dh", "g", "gr", "g'v", "h", "j", "m", "n'v", "n", "r", "t", "t'v", "t'r", "v"];
	var nm9 = ["d", "dd", "gr", "gn", "k", "kr", "kl", "l", "lg", "ln", "ll", "lr", "m", "mm", "mr", "mn", "n", "nn", "nd", "nh", "r", "rh", "rg", "s", "sn", "ss", "x", "v", "z"];
	var nm10 = ["c", "ct", "g", "hrk", "hk", "k", "kt", "l", "n", "ndt", "nd", "nt", "q", "r", "rt", "rk", "s", "sk", "st", "v", "w", "z"];


	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm8.length);
		rnd7 = Math.floor(Math.random() * nm2.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		if (i % 2 === 0) {
			namelast = nm8[rnd6] + nm2[rnd7] + nm10[rnd8];
		} else {
			rnd9 = Math.floor(Math.random() * nm9.length);
			rnd10 = Math.floor(Math.random() * nm2.length);
			namelast = nm8[rnd6] + nm2[rnd7] + nm9[rnd9] + nm2[rnd10] + nm10[rnd8];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm7.length);
			if (i < 4) {
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd5] + "  " + namelast;
			} else if (i < 8) {
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd3b = Math.floor(Math.random() * nm6.length);
				rnd4b = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd3b] + nm2[rnd4b] + nm7[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 4) {
				while (rnd5 < 5) {
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
				rnd3b = Math.floor(Math.random() * nm3.length);
				rnd4b = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd3b] + nm2[rnd4b] + nm4[rnd5] + "  " + namelast;
			}
		}
		return names;
	}

}