var nm1 = ["b", "c", "d", "g", "j", "k", "m", "p", "q", "r", "t", "v", "z"];
var nm2 = ["a", "e", "u", "i", "o"];
var nm3 = ["b", "d", "r", "rr", "dd", "zz", "rb", "rd", "rg", "rj", "rk", "rq", "rt", "rh", "rl", "rs", "rv", "nd", "ng", "nd", "nr", "nt", "nv", "dg", "zd", "zg", "zr"];
var nm4 = ["ck", "n", "k", "d", "r", "z", "t", "g"];
var nm5 = ["ar", "or", "ur", "an", "on", "un", "at", "ot", "ut", "az", "oz", "uz", "ab", "ob", "ub", "ad", "od", "ud", "ak", "ok", "uk", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var nm6 = ["b", "c", "d", "g", "j", "k", "m", "p", "q", "r", "t", "v", "z"];
var nm7 = ["b", "c", "d", "g", "h", "j", "k", "l", "p", "q", "r", "t", "v", "x", "y", "z", "cc", "dd", "gg", "kk", "pp", "qq", "rr", "tt", "vv", "xx", "zz"];
var nm8 = ["n", "x", "q", "s", "th", "g", "", "", "", "", "", "", ""];
var nm9 = ["in", "en", "iq", "eq", "ix", "ex", "eth", "ith", "ez", "iz", "ey", "iy"];
var nm10 = ["a", "e", "o", "u", "", "", "", ""];

function generator$star_trek$benzites(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm8.length);
				names = nm6[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5];
			} else {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm9.length);
				rnd5 = Math.floor(Math.random() * nm10.length);
				names = nm6[rnd] + nm2[rnd2] + nm7[rnd3] + nm9[rnd4] + nm10[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm5[rnd6];
		}
		return names;
	}

}