function generator$wildstar$wildstar_chuas(type) {
	var nm1 = ["b", "d", "f", "g", "j", "m", "n", "r", "sh", "t", "th", "v", "x", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ao", "oa", "ia", "ee", "ua"];
	var nm3 = ["br", "bn", "dr", "dh", "dg", "dz", "fr", "ff", "g", "gn", "gg", "gz", "gh", "j", "k", "kn", "kv", "kt", "kv", "kz", "lk", "lv", "lg", "ll", "n", "nn", "nk", "np", "nt", "nv", "m", "mm", "mk", "pp", "rr", "rg", "rsr", "rs", "rt", "rv", "rk", "sk", "ss", "sz", "sn", "sm", "t", "tt", "tk", "v", "vn"];
	var nm4 = ["", "", "", "", "", "", "", "c", "h", "l", "ll", "n", "nn", "r", "rr", "s", "ss", "sh", "t", "th", "w", "x", "zz"];
	var nm5 = ["b", "br", "d", "dr", "f", "fr", "g", "gn", "gr", "j", "m", "n", "r", "s", "sh", "st", "t", "th", "tr", "v", "vr", "z"];
	var nm6 = ["a", "e", "i", "o", "u"];
	var nm7 = ["", "", "", "", "", "", "", "c", "f", "h", "l", "ll", "m", "ms", "n", "ns", "nn", "r", "rr", "s", "ss", "sh", "t", "th", "x", "zz"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm5.length);
		rnd2 = Math.floor(Math.random() * nm6.length);
		rnd3 = Math.floor(Math.random() * nm7.length);
		if (i % 2 === 0) {
			while (rnd3 < 7) {
				rnd3 = Math.floor(Math.random() * nm7.length);
			}
			lname = nm5[rnd] + nm6[rnd2] + nm7[rnd3];
		} else {
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			lname = nm5[rnd] + nm6[rnd2] + nm3[rnd4] + nm6[rnd5] + nm7[rnd3];
		}
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			while (rnd5 < 7) {
				rnd5 = Math.floor(Math.random() * nm4.length);
			}
			name = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + " " + lname;
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			name = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + lname;
		}
		return name;
	}

}