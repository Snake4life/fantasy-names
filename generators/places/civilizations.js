var nm1 = ["", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "fr", "gr", "kr", "pr", "sr", "tr", "vr", "wr", "str", "st", "bl", "cl", "fl", "gl", "kl", "sl", "vl", "ch", "ph", "sh", "sch", "gn", "kn", "sn", "sm", "sw", "tw", "sc", "wh", "th", "thr", "sph", "spr"];
var nm2 = ["a", "e", "i", "o", "u"];
var nm3 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "eu", "eo", "ea", "ei", "aa", "ai", "au", "ae", "io", "ia", "iu", "ie", "oo", "oa", "ou", "oe", "oi", "uu", "ua", "ue", "ui", "uo"];
var nm4 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "z"];
var nm5 = ["", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "z"];
var nm6 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "z", "bb", "cc", "ch", "ck", "cq", "cr", "cs", "ct", "cth", "cz", "dd", "dg", "dh", "dn", "dr", "fd", "ff", "fk", "fl", "fn", "fr", "gb", "gg", "gh", "gm", "gn", "gr", "hg", "hh", "hk", "hm", "hn", "hq", "hr", "kd", "kh", "kk", "kl", "kn", "kr", "ks", "ksh", "kt", "kth", "kz", "lb", "lc", "ld", "lf", "lg", "lh", "lk", "ll", "lm", "ln", "lp", "lph", "lq", "lr", "ls", "lsh", "lst", "lt", "lth", "lw", "lz", "mb", "md", "mh", "mk", "ml", "mm", "mn", "mp", "mph", "mq", "mr", "ms", "msh", "mt", "mth", "mst", "mz", "nb", "nc", "nd", "nf", "ng", "nh", "nk", "nl", "nm", "nn", "np", "nph", "nq", "nr", "ns", "nsh", "nst", "nt", "nth", "nw", "nz", "ph", "pm", "pn", "pp", "pq", "pr", "phr", "phl", "phm", "phn", "pth", "pt", "ps", "pz", "rb", "rc", "rd", "rf", "rg", "rh", "rk", "rl", "rm", "rn", "rp", "rph", "rq", "rr", "rs", "rsh", "rst", "rt", "rth", "rw", "rz", "sb", "sc", "sd", "sh", "sk", "sl", "sm", "sn", "sp", "sph", "sr", "ss", "st", "str", "sth", "sz", "th", "tl", "tm", "tn", "tr", "thr", "thn", "thm", "tch"];
var nm7 = ["", "", "", "", "", "", "", "", "c", "g", "h", "k", "l", "ll", "m", "n", "nd", "q", "r", "s", "sh", "t", "th", "x"];

function generator$places$civilizations() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		if (i < 3) {
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm5[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd5] + nm7[rnd6];
		} else if (i < 6) {
			rnd2 = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm7.length);
			names = nm1[rnd] + nm3[rnd2] + nm6[rnd3] + nm3[rnd4] + nm7[rnd5];
		} else if (i < 8) {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd3] + nm5[rnd4] + nm3[rnd5] + nm7[rnd6];
		} else {
			rnd2 = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm7.length);
			while (rnd5 < 8) {
				rnd5 = Math.floor(Math.random() * nm7.length);
			}
			rnd6 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd] + nm3[rnd2] + nm6[rnd3] + nm3[rnd4] + nm7[rnd5] + nm3[rnd6]
		}
		return names;
	}

}