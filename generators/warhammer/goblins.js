var nm1 = ["c", "ch", "cr", "g", "gh", "gr", "gn", "k", "kr", "kn", "r", "sk", "sc", "sm", "sn", "st", "str", "skr", "t", "tr", "z", "zr"];
var nm2 = ["a", "i", "o", "a", "i", "o", "a", "i", "o", "e", "u"];
var nm3 = ["c", "cc", "cl", "cr", "cn", "gl", "gr", "gn", "gg", "g", "gd", "gdr", "gs", "gt", "gtr", "k", "kk", "kt", "kr", "ktr", "ks", "kz", "kv", "ng", "nz", "nr", "nk", "nkz", "nks", "rc", "rk", "rg", "rgr", "rkr", "rs", "rsn", "rsm", "rz", "rt", "rtr", "rsl", "sn", "str", "sk", "sc", "str", "skr", "sz", "tr", "tkr", "tn", "tv", "vr", "vl"];
var nm4 = ["", "", "", "", "c", "k", "n", "m", "mm", "r", "rr", "rk", "s", "sk", "sz", "x", "z"];
var nm5 = ["c", "ch", "d", "g", "gh", "k", "kh", "r", "sr", "sc", "sk", "sn", "sl", "t", "th", "tr", "v", "x", "z"];
var nm6 = ["i", "a", "i", "a", "i", "a", "i", "a", "e", "e", "e", "o", "u"];
var nm7 = ["c", "ch", "cc", "g", "gg", "gr", "gtr", "gn", "gz", "k", "kr", "kz", "kt", "l", "ll", "lc", "lk", "lz", "lg", "n", "nn", "nr", "nt", "nk", "r", "rr", "rl", "rk", "rn", "rm", "t", "tt", "th", "tr", "tz", "tzr", "tsr", "tg", "v", "vr", "z", "zr", "zz", "zg", "zk", "zn"];

function generator$warhammer$goblins(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			if (i < 4) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4];
			} else {
				rnd5 = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5] + nm6[rnd6];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 4) {
				while (rnd5 < 4) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
			} else {
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			}
		}
		return names;
	}

}