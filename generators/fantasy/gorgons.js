var nm1 = ["ch", "chr", "d", "h", "k", "m", "n", "ph", "r", "sth", "th", "x", "v", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "eia", "ei", "eu", "ae", "ya", "ai", "ia"];
var nm3 = ["d", "l", "m", "n", "r", "s", "x", "v", "z", "d", "l", "m", "n", "r", "s", "x", "v", "z", "d", "l", "m", "n", "r", "s", "x", "v", "z", "dn", "dr", "gg", "gn", "kt", "lc", "ld", "mbr", "nc", "ndr", "nt", "nth", "rd", "rl", "rr", "sc", "sd", "sn", "sp", "st", "str", "th", "tt"];
var nm4 = ["a", "e", "o", "a", "e", "o", "a", "e", "o", "ea", "ia", "y"];
var nm5 = ["aemon", "aenon", "aeon", "aestus", "aeus", "agos", "aios", "anes", "anos", "antos", "aon", "arus", "as", "ates", "atos", "aumas", "eas", "eidon", "er", "erion", "erus", "es", "etheus", "etus", "eus", "ias", "ibos", "ion", "ios", "is", "iton", "ius", "o", "oeis", "oeus", "olus", "on", "onos", "or", "os", "oteus", "otos", "otus", "ous", "us", "yrus", "ys", "ytion"];

function generator$fantasy$gorgons(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
			} else {
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				if (rnd3 > 26) {
					while (rnd5 > 26) {
						rnd5 = Math.floor(Math.random() * nm3.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm3[rnd5] + nm4[rnd4];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd4];
		}
		return names;
	}

}