function generator$pathfinder$ratfolks(type) {
	var nm1 = ["", "", "", "", "", "", "", "b", "br", "c", "cr", "ch", "d", "dr", "dj", "g", "gr", "gn", "gl", "j", "k", "kr", "kv", "kn", "m", "n", "p", "pr", "r", "s", "st", "sr", "skr", "sc", "scr", "sk", "t", "tr", "v", "vr", "z", "zr"];
	var nm2 = ["a", "e", "i", "o", "a", "e", "i"];
	var nm3 = ["cc", "cd", "cr", "gg", "gr", "gk", "gv", "gd", "kk", "kr", "kv", "kz", "m", "mm", "md", "mk", "mv", "mz", "n", "nn", "nd", "nv", "nk", "ng", "nz", "rr", "r", "rk", "rv", "rz", "rc", "rg", "rd", "vv", "v", "vd", "vk", "vz"];
	var nm4 = ["c", "g", "c", "g", "hl", "hz", "hk", "hn", "hc", "k", "m", "n", "q", "r", "s", "t", "z", "k", "m", "n", "q", "r", "s", "t", "z"];
	var nm5 = ["b", "bh", "c", "ch", "dh", "f", "fr", "fh", "gh", "j", "k", "m", "n", "nh", "p", "r", "s", "sh", "t", "th", "v", "vh", "z", "zh"];
	var nm6 = ["a", "e", "i", "o", "u", "e", "e", "e", "i", "i", "i"];
	var nm7 = ["b", "bb", "c", "cc", "f", "ff", "g", "gg", "j", "k", "kk", "l", "ll", "m", "mm", "n", "nn", "p", "pp", "r", "rr", "s", "ss", "t", "tt", "z", "zz"];
	var nm8 = ["", "", "", "", "", "", "", "", "ch", "f", "hm", "hl", "ks", "l", "m", "n", "r", "s", "sh", "t", "th", "tch", "x"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 5) {
				while (rnd5 < 8) {
					rnd5 = Math.floor(Math.random() * nm8.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5];
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 7) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			}
		}
		return names;
	}

}