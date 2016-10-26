function generator$doctor_who$ice_warriors() {
	var nm1 = ["h", "gr", "g", "gl", "k", "kr", "kl", "r", "sk", "sl", "ss", "sr", "sz", "v", "vr", "xz", "x", "xr", "xzn", "z"];
	var nm2 = ["a", "i", "o", "e", "aa", "a", "u", "a", "y", "a"];
	var nm3 = ["d", "dr", "kss", "ld", "m", "nt", "r", "rt", "rd", "rn", "rg", "sb", "sr", "sz", "szr", "zr", "ssb", "x", "xl", "z", "zd"];
	var nm4 = ["d", "dz", "k", "kz", "l", "lk", "n", "r", "rd", "rzz", "rz", "rs", "x", "z"];
	var nm5 = ["a", "", "", "", "", "", ""];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			names = nm5[rnd] + nm1[rnd2] + nm2[rnd3] + nm3[rnd4] + nm2[rnd5] + nm4[rnd6];
		} else {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm2.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			names = nm5[rnd] + nm1[rnd2] + nm2[rnd3] + nm4[rnd6];
		}
		return names;
	}

}