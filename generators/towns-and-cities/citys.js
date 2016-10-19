function generator$towns_and_cities$citys() {
	var names1 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names2 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "fr", "gr", "kr", "pr", "qr", "sr", "tr", "vr", "wr", "yr", "zr", "str", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "vl", "yl", "zl", "ch", "kh", "ph", "sh", "yh", "zh"];
	var names3 = ["a", "e", "i", "o", "u", "ae", "ai", "ao", "au", "aa", "ee", "ea", "ei", "eo", "eu", "ia", "ie", "io", "iu", "oa", "oe", "oi", "oo", "ou", "ua", "ue", "ui", "uo", "uu", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var names4 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "fr", "gr", "kr", "pr", "tr", "vr", "wr", "zr", "st", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "vl", "zl", "ch", "kh", "ph", "sh", "zh"];
	var names5 = ["c", "d", "f", "h", "k", "l", "m", "n", "p", "r", "s", "t", "x", "y", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names6 = ["aco", "ada", "adena", "ago", "agos", "aka", "ale", "alo", "am", "anbu", "ance", "and", "ando", "ane", "ans", "anta", "arc", "ard", "ares", "ario", "ark", "aso", "athe", "eah", "edo", "ego", "eigh", "eim", "eka", "eles", "eley", "ence", "ens", "ento", "erton", "ery", "esa", "ester", "ey", "ia", "ico", "ido", "ila", "ille", "in", "inas", "ine", "ing", "irie", "ison", "ita", "ock", "odon", "oit", "ok", "olis", "olk", "oln", "ona", "oni", "onio", "ont", "ora", "ord", "ore", "oria", "ork", "osa", "ose", "ouis", "ouver", "ul", "urg", "urgh", "ury"];
	var names7 = ["bert", "bridge", "burg", "burgh", "burn", "bury", "bus", "by", "caster", "cester", "chester", "dale", "dence", "diff", "ding", "don", "fast", "field", "ford", "gan", "gas", "gate", "gend", "ginia", "gow", "ham", "hull", "land", "las", "ledo", "lens", "ling", "mery", "mond", "mont", "more", "mouth", "nard", "phia", "phis", "polis", "pool", "port", "pus", "ridge", "rith", "ron", "rora", "ross", "rough", "sa", "sall", "sas", "sea", "set", "sey", "shire", "son", "stead", "stin", "ta", "tin", "tol", "ton", "vale", "ver", "ville", "vine", "ving", "well", "wood"];


	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd0 = Math.floor(Math.random() * names1.length);
			rnd1 = Math.floor(Math.random() * names2.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names7.length);
			names = names1[rnd0] + names2[rnd1] + names3[rnd2] + names5[rnd3] + names7[rnd4];
		} else if (i < 5) {
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names4.length);
			rnd4 = Math.floor(Math.random() * names3.length);
			rnd5 = Math.floor(Math.random() * names5.length);
			rnd6 = Math.floor(Math.random() * names7.length);
			names = names3[rnd2] + names4[rnd3] + names3[rnd4] + names5[rnd5] + names7[rnd6];
		} else if (i < 8) {
			rnd0 = Math.floor(Math.random() * names1.length);
			rnd1 = Math.floor(Math.random() * names2.length);
			rnd2 = Math.floor(Math.random() * names6.length);
			names = names1[rnd0] + names2[rnd1] + names6[rnd2];
		} else {
			rnd0 = Math.floor(Math.random() * names1.length);
			rnd1 = Math.floor(Math.random() * names2.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names4.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			names = names1[rnd0] + names2[rnd1] + names3[rnd2] + names4[rnd3] + names6[rnd4];
		}
		return names;
	}

}