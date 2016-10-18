var nm1 = ["", "", "", "", "", "", "", "b", "ch", "cr", "cy", "d", "dr", "g", "gn", "gr", "j", "k", "kr", "ky", "l", "n", "p", "q", "qr", "r", "sh", "t", "tr", "ty", "v", "x", "y", "z", "zr"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "ia", "iu", "ai", "aa"];
var nm3 = ["bb", "bh", "bj", "bk", "bl", "bq", "br", "gb", "gf", "gh", "gl", "gm", "gn", "gr", "kb", "kh", "kj", "kk", "kl", "km", "kn", "kr", "lb", "lj", "ll", "ln", "lp", "lr", "lt", "ph", "pk", "pn", "pp", "pq", "pr", "rb", "rj", "rk", "rl", "rm", "rn", "rp", "rq", "rr", "rt", "zb", "zl", "zm", "zn", "zp", "zr", "zt", "cb", "cl", "cn", "cq", "cr", "ct", "cx", "cz", "dj", "dr", "dv", "dz", "fn", "fr", "nc", "nd", "ng", "nj", "nl", "nt", "qb", "ql", "qn", "qq", "qr", "sc", "sh", "sk", "sl", "sm", "sn", "sq", "sr", "ss", "st", "str", "sz", "tc", "th", "tj", "tn", "xh", "xn"];
var nm4 = ["", "", "", "", "", "b", "c", "k", "l", "m", "n", "p", "q", "r", "s", "t", "x", "z"];
var nm5 = ["ch", "cr", "cy", "d", "dr", "gn", "gr", "kr", "ky", "qr", "r", "sz", "t", "tr", "ty", "v", "x", "y", "z", "zr"];
var nm6 = ["c", "l", "m", "n", "p", "q", "r", "t", "x", "z"];


function generator$fantasy$imps(type) {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i % 3 === 0) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			names = nm5[rnd] + nm2[rnd2] + nm6[rnd3];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (rnd < 7) {
				while (rnd5 < 5) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd2] + nm2[rnd4] + nm4[rnd5];
		}
		tyr = Math.random() * 300 | 0;
		if (tyr === 10) {
			names = "Tyrion Lannister (just kidding)";
		}
		return names;
	}

}