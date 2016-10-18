var nm1 = ["", "", "", "", "", "b", "br", "bh", "ch", "d", "dr", "dh", "g", "gr", "gh", "k", "kr", "kh", "l", "m", "n", "q", "r", "v", "z", "vr", "zr"];
var nm2 = ["a", "e", "i", "o", "u", "a", "o", "u"];
var nm3 = ["b", "cc", "d", "dd", "gg", "g", "r", "rr", "z", "zz", "b", "cc", "d", "dd", "gg", "g", "r", "rr", "z", "zz", "br", "cr", "dr", "dg", "dz", "dgr", "dk", "gr", "gh", "gk", "gz", "gm", "gn", "gv", "lb", "lg", "lgr", "ldr", "lbr", "lk", "lz", "mm", "rg", "rm", "rdr", "rbr", "rd", "rk", "rkr", "rgr", "rz", "shb", "shn", "zg", "zgr", "zd", "zr", "zdr"];
var nm4 = ["", "kh", "d", "dh", "g", "gh", "l", "n", "r", "rd", "z"];

function generator$towns_and_cities$orcish_citys() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		if (i < 2) {
			rnd6 = Math.floor(Math.random() * nm1.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			rnd8 = Math.floor(Math.random() * nm4.length);
			if (rnd < 5) {
				while (rnd5 === 0) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + nm1[rnd6] + nm2[rnd4] + nm3[rnd3] + nm2[rnd7] + nm4[rnd8];
		} else if (i < 6) {
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else if (i < 8) {
			rnd6 = Math.floor(Math.random() * nm3.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd6] + nm2[rnd7] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else {
			rnd6 = Math.floor(Math.random() * nm1.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			rnd8 = Math.floor(Math.random() * nm4.length);
			if (rnd < 5) {
				while (rnd5 === 0) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			names = nm1[rnd6] + nm2[rnd4] + nm3[rnd3] + nm2[rnd7] + nm4[rnd8] + "  " + nm1[rnd] + nm2[rnd2] + nm4[rnd5];
		}
		return names;
	}

}