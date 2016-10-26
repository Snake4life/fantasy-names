function generator$lord_of_the_rings$orcs() {
	var nm1 = ["b", "br", "c", "cr", "d", "dr", "g", "gh", "gr", "k", "kr", "l", "m", "r", "s", "sh", "sr"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au"];
	var nm3 = ["cb", "cd", "cr", "db", "dd", "fd", "fth", "g", "gb", "gd", "gg", "gl", "gr", "gz", "h", "lcm", "ld", "lf", "lg", "rb", "rc", "rd", "rg", "rz", "shn", "thr", "z", "zb", "zg", "zr", "zz"];
	var nm4 = ["c", "d", "dh", "f", "g", "gh", "kh", "l", "r", "rg", "sh", "t", "th", "", "", ""];
	var nm5 = ["a", "o", "u", "au"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			names = nm5[rnd] + nm3[rnd2] + nm2[rnd3] + nm4[rnd4];
		}
		return names;
	}

}