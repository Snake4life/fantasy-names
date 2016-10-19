function generator$pathfinder$drows(type) {
	var nm1 = ["", "", "", "", "", "br", "bh", "c", "dh", "dr", "f", "g", "gr", "gh", "j", "k", "kr", "kh", "m", "n", "ph", "q", "r", "s", "t", "v", "w", "x", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "y", "io", "ae", "ou", "ie", "ui", "yi", "ey"];
	var nm3 = ["bn", "bs", "bz", "c", "cn", "cm", "cr", "dr", "dn", "g", "gn", "gv", "gg", "k", "kr", "kz", "kn", "kq", "l", "lf", "lm", "lr", "lq", "lc", "lv", "m", "mm", "mr", "mz", "ml", "mdr", "n", "ndr", "nd", "nz", "nc", "nq", "r", "rc", "rn", "rr", "rz", "rdr", "rq", "t", "tr", "v", "vr", "vdr"];
	var nm4 = ["", "", "", "c", "d", "g", "n", "r", "rn", "ss", "v", "x"];
	var nm5 = ["", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "l", "m", "n", "p", "ph", "q", "r", "s", "sc", "t", "th", "tr", "v", "w", "x", "z"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "ia", "ae", "ie", "ei", "ya", "ee", "ai"];
	var nm7 = ["b", "b", "b", "bv", "br", "c", "c", "c", "cr", "cs", "cn", "d", "d", "d", "dr", "dh", "dv", "fr", "h", "h", "h", "kr", "kn", "kl", "kv", "ksh", "l", "l", "l", "ll", "ll", "lm", "lv", "lr", "lq", "lsh", "mbr", "mr", "mv", "n", "n", "n", "nn", "nd", "nsh", "ns", "nz", "nv", "nr", "p", "p", "p", "ph", "phr", "r", "r", "r", "rn", "rsh", "rq", "s", "s", "s", "ss", "sh", "shr", "sc", "str", "v", "v", "vvn", "vr"];
	var nm8 = ["", "", "", "", "", "", "", "", "", "", "h", "l", "n", "nth", "s", "ss"];
	var nm9 = ["", "", "", "", "b", "c", "d", "g", "j", "k", "m", "n", "p", "q", "r", "s", "shr", "t", "th", "v", "w", "x", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "y", "y", "ae", "iu", "ei", "ie", "ia", "ai", "ee"];
	var nm11 = ["d", "dr", "g", "gn", "gr", "ld", "lr", "ldr", "lv", "lz", "m", "mr", "n", "nd", "nn", "ng", "nr", "ndr", "nz", "nvr", "r", "rq", "rdr", "rz", "rv", "s", "sr", "shr", "str", "vr", "vn", "x", "xr", "zr", "z"];
	var nm12 = ["", "", "", "", "", "c", "d", "h", "n", "rc", "s", "sh", "t", "th", "v", "x"];


	i = Math.floor(Math.random() * 10); {
		rnd10 = Math.floor(Math.random() * nm9.length);
		rnd11 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		rnd13 = Math.floor(Math.random() * nm11.length);
		rnd14 = Math.floor(Math.random() * nm10.length);
		if (i % 2 === 0) {
			rnd15 = Math.floor(Math.random() * nm11.length);
			rnd16 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm11[rnd15] + nm10[rnd16] + nm12[rnd12];
		} else {
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 4) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + nameLast;
			} else if (i < 8) {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + " " + nameLast;
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				rnd8 = Math.floor(Math.random() * nm7.length);
				rnd9 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm7[rnd8] + nm6[rnd9] + nm8[rnd5] + " " + nameLast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 2) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + nameLast;
			} else if (i < 7) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameLast;
			} else {
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + nameLast;
			}
		}
		return names;
	}

}