function generator$pathfinder$half_orcs(type) {
	var nm1 = ["", "", "", "b", "br", "c", "cr", "d", "dr", "g", "gr", "h", "hr", "k", "m", "n", "p", "t", "th", "ts", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "o", "o", "aa", "au", "oa", "ia", "ai", "uu"];
	var nm3 = ["br", "b", "d", "dh", "dr", "dz", "g", "gr", "gd", "gh", "k", "kh", "kt", "kd", "kr", "lgr", "ltr", "ldr", "lr", "lkr", "nd", "ng", "ngr", "ndr", "nv", "r", "rv", "rg", "rdr", "st", "sd", "str", "tr", "v", "zr", "zz", "zv", "zvr"];
	var nm4 = ["", "", "", "ch", "d", "g", "k", "l", "lm", "n", "r", "rg", "rm", "rv", "s", "sk", "t", "x", "zhg"];
	var nm5 = ["", "", "", "", "", "b", "br", "c", "d", "dr", "g", "h", "k", "m", "n", "r", "rz", "s", "sh", "str", "t", "v", "w", "z"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "o", "o", "ay", "ou", "ai", "uo"];
	var nm7 = ["b", "br", "bl", "c", "cl", "cr", "d", "dl", "dr", "g", "gh", "gr", "gl", "hg", "hk", "hr", "jk", "l", "ljk", "ll", "ln", "lr", "lt", "m", "mr", "mg", "ml", "n", "ng", "nl", "nc", "r", "rg", "rl", "rd", "s", "sl", "sr", "t", "tt", "tr", "v", "vr", "z", "zr"];
	var nm8 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "h", "n", "sh", "th", "x"];
	var nm9 = ["", "", "", "", "", "b", "c", "d", "g", "gn", "h", "j", "k", "m", "n", "r", "s", "sh", "t", "th", "v", "w", "z"];
	var nm10 = ["a", "e", "i", "o", "u"];
	var nm11 = ["b", "br", "d", "dr", "dk", "g", "gr", "gh", "gl", "k", "kr", "l", "lk", "lgr", "ln", "lr", "lr", "m", "mk", "n", "nr", "nk", "nd", "ndr", "ng", "rg", "rv", "rk", "r", "rr", "rsh", "shk", "st", "sk", "sr", "sv", "svr", "tsk", "tk", "tr", "v", "xl", "xn", "z", "zr", "zk"];
	var nm12 = ["", "", "", "", "", "ch", "d", "k", "ld", "lm", "m", "n", "r", "shky", "tsky", "v", "x", "z"];


	i = Math.floor(Math.random() * 10); {
		rnd10 = Math.floor(Math.random() * nm9.length);
		rnd11 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			rnd15 = Math.floor(Math.random() * nm11.length);
			rnd16 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm11[rnd15] + nm10[rnd16] + nm12[rnd12];
		} else if (i % 2 === 0) {
			while (rnd10 < 5) {
				rnd10 = Math.floor(Math.random() * nm9.length);
			}
			while (rnd12 < 5) {
				rnd12 = Math.floor(Math.random() * nm12.length);
			}
			nameLast = nm9[rnd10] + nm10[rnd11] + nm12[rnd12];
		} else {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 8) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + nameLast;
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + " " + nameLast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 3) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + nameLast;
			} else if (i < 9) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameLast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + nameLast;
			}
		}
		return names;
	}

}