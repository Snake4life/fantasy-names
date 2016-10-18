var nm1 = ["", "", "", "", "", "b", "br", "c", "cr", "dr", "f", "gr", "h", "kr", "kz", "m", "n", "pr", "r", "t", "tr", "v", "vr"];
var nm2 = ["a", "e", "i", "o", "u"];
var nm3 = ["b", "br", "bd", "bz", "d", "dd", "dr", "dz", "g", "gh", "gr", "gn", "gz", "k", "kk", "kd", "kz", "kn", "l", "ld", "lkz", "ll", "lz", "lr", "lg", "lk", "m", "mg", "mz", "mr", "n", "ng", "nr", "nk", "r", "rd", "rk", "rn", "rr", "rg", "rz", "rv", "s", "sr", "sk", "sg", "sc", "v", "vr", "vk", "vz", "z", "zr", "zk", "zn", "zm", "zc"];
var nm4 = ["", "", "", "ch", "g", "hn", "hk", "hm", "hd", "k", "kk", "lk", "lkk", "lt", "ld", "m", "n", "r", "rd", "rk", "rg", "rn", "sh", "sk", "t"];
var nm5 = ["", "", "", "", "", "b", "c", "ch", "d", "g", "gr", "f", "g", "gr", "k", "kr", "l", "m", "n", "r", "t", "tr", "v", "vr"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "ya", "oa", "ia", "ua"];
var nm7 = ["b", "bb", "bg", "d", "dd", "dg", "dj", "dr", "ff", "gg", "gj", "gd", "gr", "gn", "gm", "hj", "hm", "hn", "hr", "k", "kd", "kb", "kr", "kk", "l", "lb", "lg", "llg", "ld", "lld", "lk", "lr", "llr", "m", "mr", "mj", "mg", "mk", "ng", "nj", "n", "nn", "nr", "r", "rg", "rj", "rr", "rv", "sgr", "sg", "sh", "sk", "z", "zn"];
var nm8 = ["", "", "", "", "", "", "", "", "", "", "c", "d", "g", "k", "m", "n", "ng", "s", "ss", "t"];
var nm9 = ["", "", "", "", "", "b", "br", "ch", "cr", "d", "dh", "f", "g", "gh", "gr", "k", "kr", "kh", "m", "n", "r", "t", "th", "v", "vh", "z"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "uu", "aa", "ua"];
var nm11 = ["d", "dd", "dr", "fr", "fn", "g", "gg", "gd", "gn", "gm", "gz", "hm", "hj", "hm", "k", "kk", "kd", "kn", "ld", "lb", "lk", "lz", "lg", "lk", "ll", "lr", "m", "mg", "mk", "n", "nn", "ng", "nr", "nk", "r", "rr", "rg", "rk", "rn", "rm", "rv", "sg", "ss", "s", "sr", "sk", "sn", "v", "vr", "vn", "vk", "z", "zk", "zn", "zm"];
var nm12 = ["d", "hn", "hd", "k", "l", "m", "n", "r", "s", "sh", "t", "th"];

function generator$pathfinder$orcs(type) {

	i = Math.floor(Math.random() * 10); {
		rnd8 = Math.floor(Math.random() * nm9.length);
		rnd9 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		if (i % 2 === 0) {
			while (rnd8 < 5) {
				rnd8 = Math.floor(Math.random() * nm9.length);
			}
			nameLast = nm9[rnd8] + nm10[rnd9] + nm12[rnd12];
		} else {
			rnd10 = Math.floor(Math.random() * nm11.length);
			rnd11 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm10[rnd11] + nm12[rnd12];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 2) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				while (rnd5 < 10) {
					rnd5 = Math.floor(Math.random() * nm8.length);
				}
				names = nm5[rnd] + nm2[rnd2] + nm8[rnd5] + " " + nameLast;
			} else if (i < 8) {
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5] + " " + nameLast;
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd6] + nm2[rnd7] + nm8[rnd5] + " " + nameLast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + " " + nameLast;
			} else {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameLast;
			}
		}
		return names;
	}

}