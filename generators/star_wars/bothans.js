function generator$star_wars$bothans(type) {
	var nm1 = ["", "", "b", "c", "d", "g", "gr", "h", "k", "n", "r", "tr", "v", "y", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "aa", "ee", "ai", "ia"];
	var nm3 = ["b", "br", "c", "ct", "d", "dr", "g", "h", "kr", "k", "m", "nt", "r", "ry", "tr", "v"];
	var nm4 = ["c", "g", "gt", "k", "m", "n", "r", "rc", "rd", "rsk", "sc", "sk", "st", "th"];
	var nm5 = ["", "", "", "c", "dh", "g", "gn", "gl", "h", "k", "kn", "l", "m", "n", "s", "th", "v", "y"];
	var nm6 = ["c", "g", "h", "kh", "l", "m", "n", "nt", "nd", "q", "qh", "r", "rr", "s", "t", "th", "tr", "v"];
	var nm7 = ["h", "l", "m", "n", "nn", "r", "s", "t", "th"];
	var nm8 = ["bw", "d", "f", "g", "gr", "h", "k", "kr", "l", "m", "n", "s", "tr", "v"];
	var nm9 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "aa", "ee", "ai", "ia", "ua", "ea"];
	var nm10 = ["d", "d'h", "f'l", "'f", "h'r", "h", "'h", "k", "'k", "l", "'l", "n", "n'd", "nr", "n'q", "nd", "n'n", "q", "r", "rr", "'r", "s", "s'", "'t", "t", "th", "v'", "y'l"];
	var nm11 = ["h", "l", "m", "n", "r", "s", "t", "v"];
	var nm12 = ["", "", "", "", "", "a", "e", "i", "o", "u"];


	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm8.length);
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd9 = Math.floor(Math.random() * nm9.length);
		rnd10 = Math.floor(Math.random() * nm11.length);
		rnd11 = Math.floor(Math.random() * nm12.length);
		namelast = nm8[rnd6] + nm9[rnd7] + nm10[rnd8] + nm9[rnd9] + nm11[rnd10] + nm12[rnd11];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm7.length);
			if (i < 7) {
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 7) {
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
			}
		}
		return names;
	}

}