function generator$miscellaneous$molecules() {
	var nm1 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "deca", "di", "duo", "hepta", "hexa", "hydra", "hydro", "hypo", "iso", "mono", "octa", "penta", "tetra", "tri"];
	var nm2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a", "e", "i", "o"];
	var nm3 = ["b", "br", "c", "ch", "chl", "chr", "cl", "d", "f", "fl", "fr", "g", "gl", "h", "j", "k", "l", "m", "n", "p", "ph", "pl", "pr", "ps", "r", "rh", "s", "sh", "sp", "st", "str", "t", "th", "tr", "v", "w", "z"];
	var nm4 = ["b", "bd", "br", "bsc", "c", "cc", "cch", "ch", "chl", "chr", "cl", "cr", "ct", "d", "dr", "dv", "f", "ff", "fl", "g", "gl", "gn", "h", "k", "l", "lb", "lc", "lch", "ldr", "lf", "lg", "ll", "lp", "lph", "lpr", "lt", "m", "mm", "mn", "mph", "n", "nc", "nd", "nh", "nk", "nn", "ns", "nt", "nth", "nthr", "nz", "p", "ph", "phth", "pp", "pr", "ps", "pt", "pth", "q", "rb", "rchl", "rd", "rf", "rg", "rh", "rk", "rl", "rn", "rph", "rq", "rr", "rrh", "rs", "rt", "rv", "s", "sc", "sg", "sp", "sph", "spl", "ss", "st", "str", "t", "th", "tr", "v", "x", "z"];
	var nm5 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "ae", "aa", "ai", "au", "ea", "ee", "ei", "eo", "eu", "ia", "ie", "io", "iu", "ua", "ue", "ui", "ya", "ye", "yo"];
	var nm6 = ["aene", "an", "ane", "ar", "as", "ase", "asy", "ate", "eide", "ein", "eite", "el", "ene", "er", "ial", "id", "ide", "iene", "in", "ine", "iol", "ite", "ium", "oate", "ocin", "ol", "ole", "on", "one", "or", "ose", "ox", "oxin", "uene", "um", "ur", "ycin", "yde", "yl", "yme", "yn"];


	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd4] + nm4[rnd5] + nm6[rnd6];
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			rnd7 = Math.floor(Math.random() * nm4.length);
			rnd8 = Math.floor(Math.random() * nm6.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd8];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			rnd7 = Math.floor(Math.random() * nm4.length);
			rnd8 = Math.floor(Math.random() * nm5.length);
			rnd9 = Math.floor(Math.random() * nm4.length);
			rnd10 = Math.floor(Math.random() * nm6.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm5[rnd8] + nm4[rnd9] + nm6[rnd10];
		}
		return names;
	}

}