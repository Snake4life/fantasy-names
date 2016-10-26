function generator$star_wars$kel_dors(type) {
	var nm1 = ["", "", "", "", "", "b", "ch", "d", "gn", "h", "j", "k", "n", "p", "pl", "r", "s", "sh", "t", "tr", "v", "w", "x", "y", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "o", "y", "a", "e", "i", "o", "u", "a", "o", "y", "a", "o", "a", "e", "i", "o", "u", "a", "o", "y", "a", "e", "i", "o", "u", "a", "o", "y", "a", "o", "ee", "aa", "oo", "ia", "ea"];
	var nm3 = ["'r", "c", "c'", "chk", "h", "'h", "k", "'k", "kr", "l'", "ll", "ls", "r", "r'", "rr", "rv", "'s", "s", "st", "tch", "t'", "tchk", "z", "z'", "'z"];
	var nm4 = ["", "", "", "", "", "", "l", "ln", "lt", "m", "n", "r", "rn", "rs", "rss", "s", "ss", "st"];
	var nm5 = ["", "", "", "", "bh", "ch", "dh", "dr", "gh", "g", "h", "kr", "m", "n", "p", "r", "s", "sh", "t", "th", "y", "v", "w"];
	var nm6 = ["a", "i", "u", "a", "i", "a", "i", "u", "e", "a", "i", "o", "ee"];
	var nm7 = ["'c", "ch", "h", "'h", "k", "kh", "'k", "'l", "l", "q", "'q", "qr", "r", "'r", "rr", "rz", "st", "s'", "sz", "th", "t'", "'z"];
	var nm8 = ["", "", "", "", "", "", "", "l", "m", "n", "s", "th"];
	var nm9 = ["", "", "", "", "", "b", "br", "ch", "d", "dr", "g", "h", "k", "m", "n", "p", "r", "s", "sh", "t", "tl", "v", "y", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "a", "e", "i", "o", "u", "a", "a", "e", "i", "o", "u", "a", "a", "e", "i", "o", "u", "a", "a", "e", "i", "o", "u", "a", "ii", "ai", "oo", "aa", "uu"];
	var nm11 = ["c", "ch", "g", "hr", "k", "kr", "l", "lr", "mn", "n", "nd", "r", "rr", "rv", "s", "sz", "st", "t", "tch", "z"];
	var nm12 = ["", "", "", "", "", "", "", "", "c", "k", "l", "ln", "mm", "n", "ng", "r", "s", "ss", "w", "zz"];


	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			while (rnd7 < 5) {
				rnd7 = Math.floor(Math.random() * nm9.length);
			}
			namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
		} else if (i % 2 === 0) {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm10.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			rnd12 = Math.floor(Math.random() * nm10.length);
			rnd13 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm11[rnd13] + nm10[rnd12] + nm12[rnd10];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 4) {
				while (rnd < 4) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5] + "  " + namelast;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd5b = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5b] + nm6[rnd6] + nm8[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
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