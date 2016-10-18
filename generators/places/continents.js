var names1 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "gr", "kr", "pr", "tr", "vr", "wr", "str", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "vl", "ch", "ph", "sh", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var names2 = ["a", "e", "i", "o", "u", "eu", "eo", "ea", "ei", "ai", "au", "ae", "io", "ia", "iu", "ua"];
var names3 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "y", "z", "br", "cr", "dr", "gr", "kr", "tr", "vr", "wr", "str", "bl", "cl", "pl", "sl", "ch", "ph", "sh"];
var names4 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "gr", "kr", "pr", "tr", "str", "ph", "sh"];
var names5 = ["aes", "ai", "all", "an", "and", "ane", "ari", "as", "ath", "ax", "ea", "ela", "en", "end", "eon", "era", "eron", "es", "esh", "eth", "ia", "ias", "ica", "in", "ios", "ira", "is", "ish", "ith", "ix", "oa", "on", "one", "or", "ora", "oris", "os", "oth", "ox", "oya", "uan", "uin", "ul", "un", "une", "ura", "us", "ush", "uth", "ux"];
var names6 = ["a", "e", "i", "o", "u"];

function generator$places$continents() {

	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names6.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			if (rnd > 20) {
				while (rnd3 > 17) {
					rnd3 = Math.floor(Math.random() * names3.length);
				}
			}
			rnd6 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names5[rnd6];
		} else if (i < 6) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd6 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names5[rnd6];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			if (rnd > 20) {
				while (rnd3 > 17) {
					rnd3 = Math.floor(Math.random() * names3.length);
				}
			}
			rnd4 = Math.floor(Math.random() * names2.length);
			if (rnd2 > 4) {
				while (rnd4 > 4) {
					rnd4 = Math.floor(Math.random() * names2.length);
				}
			}
			rnd5 = Math.floor(Math.random() * names4.length);
			if (rnd > 17 || rnd > 20) {
				while (rnd5 > 19) {
					rnd5 = Math.floor(Math.random() * names4.length);
				}
			}
			rnd6 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names2[rnd4] + names4[rnd5] + names5[rnd6];
		}
		return names;
	}

}