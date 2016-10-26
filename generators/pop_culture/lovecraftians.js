function generator$pop_culture$lovecraftians() {
	var nm1 = ["a", "e", "i", "u", "o", "a", "ai", "aiu", "aiue", "e", "i", "ia", "iau", "iu", "o", "u", "y", "ya", "yi", "yo"];
	var nm2 = ["bh", "br", "c'th", "cn", "ct", "cth", "cx", "d", "d'", "g", "gh", "ghr", "gr", "h", "k", "kh", "kth", "mh", "mh'", "ml", "n", "ng", "sh", "t", "th", "tr", "v", "v'", "vh", "vh'", "vr", "x", "z", "z'", "zh"];
	var nm3 = ["a", "e", "i", "u", "o", "a", "e", "i", "u", "o", "ao", "aio", "ui", "aa", "io", "ou", "y"];
	var nm4 = ["bb", "bh", "br", "cn", "ct", "dh", "dhr", "dr", "drr", "g", "gd", "gg", "ggd", "gh", "gn", "gnn", "gr", "jh", "kl", "l", "ld", "lk", "ll", "lp", "lth", "mbr", "nd", "p", "r", "rr", "rv", "th", "thl", "thr", "thrh", "tl", "vh", "x", "xh", "z", "zh", "zt"];
	var nm5 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "'dhr", "'dr", "'end", "'gn", "'ith", "'itr", "'k", "'kr", "'l", "'m", "'r", "'th", "'vh", "'x", "'zh"];
	var nm6 = ["a", "e", "i", "u", "o"];
	var nm7 = ["", "", "", "", "", "", "", "", "", "", "d", "g", "h", "l", "lb", "lbh", "n", "r", "rc", "rh", "s", "sh", "ss", "st", "sz", "th", "tl", "x", "xr", "xz"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm2.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm5[rnd4] + nm6[rnd5] + nm7[rnd6];
		} else {
			rnd1 = Math.floor(Math.random() * nm1.length);
			rnd = Math.floor(Math.random() * nm2.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm1[rnd1] + nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm5[rnd4] + nm6[rnd5] + nm7[rnd6];
		}
		return names;
	}

}