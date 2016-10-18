var nm1 = ["b", "c", "d", "g", "j", "k", "l", "m", "n", "q", "r", "s", "t", "tr", "v", "z", "", ""];
var nm2 = ["oi", "ao", "ui", "ei", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
var nm3 = ["b", "c", "d", "g", "j", "k", "l", "m", "n", "p", "q", "r", "t", "v", "z", "b", "bb", "bt", "cz", "c", "d", "dl", "dz", "g", "gr", "j", "k", "kz", "kl", "kr", "l", "lt", "lv", "m", "nj", "nb", "n", "nth", "p", "q", "qr", "r", "rr", "rrn", "rn", "t", "tt", "v", "vv", "z", "zz", "ztr", "zm"];
var nm4 = ["b", "c", "d", "f", "g", "k", "m", "nt", "n", "p", "q", "r", "sz", "t", "v", "z", "", ""];

function generator$star_trek$letheans(type) {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm2.length);
			rnd7 = Math.floor(Math.random() * nm4.length);
			if (rnd2 < 4) {
				while (rnd4 < 4) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
				while (rnd6 < 4) {
					rnd6 = Math.floor(Math.random() * nm2.length);
				}
			}
			if (rnd4 < 4) {
				while (rnd6 < 4) {
					rnd6 = Math.floor(Math.random() * nm2.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm2[rnd6] + nm4[rnd7];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (rnd2 < 4) {
				while (rnd4 < 4) {
					rnd4 = Math.floor(Math.random() * nm2.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		}
		return names;
	}

}