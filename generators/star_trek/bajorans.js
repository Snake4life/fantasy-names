function generator$star_trek$bajorans(type) {
	var nm1 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "ch", "sh", "br", "pr", "tr", "dr", "kr", "vr", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "ee"];
	var nm3 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "nj", "mj", "nt", "mt", "ct", "kt", "ny", "cy", "gy", "ky", "my", "py", "sy", "ty", "ry", "rm", "rb", "rc", "rd", "rj", "rk", "rm", "rn", "rp", "rs", "rt", "rv", "rw", "rz", "sh", "ch", "th", "ll", "dd", "gg", "kk", "rr", "zk", "sk", "lk", "tk", "tr", "dr"];
	var nm4 = ["a", "e", "i", "o", "u"];
	var nm5 = ["n", "ld", "k", "s", "r", "sh", "t", "m", "lb", "hl", "l", "d", "ld", "g", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

	var nm6 = ["b", "ch", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "kr", "tr", "rh", "sh", "", "", "", ""];
	var nm7 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "aie", "ue", "oa", "aa", "ee"];
	var nm8 = ["b", "c", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "b", "c", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "ln", "lb", "lz", "lg", "lk", "ltr", "zk", "zd", "rk", "rd", "rg", "rn", "rt", "yr", "yd", "mm", "rr", "ss", "nn", "tt", "br", "kr", "gd", "nd", "nt"];
	var nm9 = ["m", "s", "r", "n", "g", "l", "th", "rn", "c"];
	var nm10 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", ""];

	var nm11 = ["b", "bl", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y", "z", "gr", "gl", "sh", "", "", "", "", "", "", "", "", ""];
	var nm12 = ["a", "e", "i", "a", "e", "i", "o", "o", "u", "ee", "ai", "oa"];
	var nm13 = ["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y", "z", "sh", "pr", "rd", "lr", "gh", "rj", "lk"];
	var nm14 = ["a", "e", "i", "o", "a", "e", "u", "a", "e", "i", "o", "ia", "ea"];
	var nm15 = ["h", "l", "m", "n", "r", "s", "t", "w", "y", "z"];
	var nm16 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "ia", "ea", "", "", "", "", "", ""];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			if (i < 5) {
				rnd6 = Math.floor(Math.random() * nm11.length);
				rnd7 = Math.floor(Math.random() * nm12.length);
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm14.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + " " + nm11[rnd6] + nm12[rnd7] + nm13[rnd8] + nm14[rnd9];
			} else {
				rnd6 = Math.floor(Math.random() * nm11.length);
				rnd7 = Math.floor(Math.random() * nm12.length);
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm14.length);
				rnd10 = Math.floor(Math.random() * nm15.length);
				rnd11 = Math.floor(Math.random() * nm16.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + " " + nm11[rnd6] + nm12[rnd7] + nm13[rnd8] + nm14[rnd9] + nm15[rnd10] + nm16[rnd11];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			if (i < 5) {
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				rnd8 = Math.floor(Math.random() * nm8.length);
				rnd9 = Math.floor(Math.random() * nm10.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + " " + nm6[rnd6] + nm7[rnd7] + nm8[rnd8] + nm10[rnd9];
			} else {
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				rnd8 = Math.floor(Math.random() * nm8.length);
				rnd9 = Math.floor(Math.random() * nm4.length);
				rnd10 = Math.floor(Math.random() * nm9.length);
				rnd11 = Math.floor(Math.random() * nm10.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + " " + nm6[rnd6] + nm7[rnd7] + nm8[rnd8] + nm4[rnd9] + nm9[rnd10] + nm10[rnd11];
			}
		}
		return names;
	}

}