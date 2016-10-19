function generator$star_wars_the_old_republic$rattatakis(type) {
	var nm1 = ["a", "e", "i", "o", "u", "ai", "au", "ei", "ou", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm2 = ["b", "br", "bz", "bj", "c", "cz", "ch", "d", "dj", "dz", "g", "gr", "h", "j", "k", "kz", "kr", "p", "pr", "pj", "pz", "q", "r", "sj", "st", "sr", "t", "ts", "tr", "v", "wr", "x", "xj", "xr", "yj", "yr", "ys", "yz", "z", "zr"];
	var nm3 = ["i", "a", "o", "e", "u"];
	var nm4 = ["c", "ch", "dj", "g", "gr", "h", "k", "m", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
	var nm5 = ["c", "ch", "dj", "g", "gr", "h", "k", "m", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "i", "o", "u", "", "", "", "", "", "", "", ""];
	var nm6 = ["a", "e", "i", "o", "u", "ai", "au", "ei", "ou", "ay", "ey", "oy", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm7 = ["b", "br", "bj", "c", "cz", "ch", "d", "dj", "dz", "g", "h", "j", "k", "kz", "l", "m", "n", "p", "pr", "pj", "q", "r", "s", "sj", "st", "sr", "t", "ts", "tr", "v", "w", "wr", "x", "xj", "xr", "y", "yj", "yr", "ys", "yz", "z", "zr"];
	var nm8 = ["i", "a", "o", "e", "u", "ie", "ai", "ey", "ay"];


	i = Math.floor(Math.random() * 10); {
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		rnd5 = Math.floor(Math.random() * nm5.length);
		if (type === 1) {
			rnd6 = Math.floor(Math.random() * nm6.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			rnd8 = Math.floor(Math.random() * nm8.length);
			names = nm6[rnd6] + nm7[rnd7] + nm8[rnd8] + nm4[rnd4] + nm3[rnd3] + nm5[rnd5];
		} else {
			rnd6 = Math.floor(Math.random() * nm1.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			rnd8 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd6] + nm2[rnd7] + nm3[rnd8] + nm4[rnd4] + nm3[rnd3] + nm5[rnd5];
		}
		return names;
	}

}