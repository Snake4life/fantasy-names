var nm1 = ["", "", "", "", "", "b", "bl", "brr", "ch", "d", "h", "hr", "j", "k", "kl", "kr", "kt", "m", "mn", "n", "nb", "p", "pl", "pr", "r", "rk", "sn", "sq", "t", "th", "tt", "ts", "v", "w", "wr", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "oe", "ee", "ii", "ee", "ia", "ui", "eo"];
var nm3 = ["b", "bb", "bl", "bw", "d", "g", "j", "k", "k't", "k'ch", "k'k", "kch", "kk", "kt", "kth", "l", "lh", "lv", "m", "n", "ng", "nz", "pt", "r", "rk", "s", "ss", "t", "th", "thch", "tj", "tk", "tt", "ttj", "z", "zj", "zz"];
var nm4 = ["", "", "", "", "c", "dt", "g", "h", "k", "kk", "kth", "l", "n", "nk", "nt", "pp", "r", "s", "t", "th", "tk", "w", "x", "zz"];
var nm5 = ["", "", "", "", "b", "bh", "bl", "ch", "dh", "d", "h", "k", "kh", "kw", "kl", "kn", "l", "m", "n", "p", "pl", "r", "rh", "rw", "s", "sh", "sn", "sl", "th", "ts", "tw", "v", "vl", "w", "wh"];
var nm7 = ["b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w"];
var nm8 = ["", "", "", "", "", "c", "d", "h", "k", "l", "m", "n", "s", "t"];
var nm9 = ["", "", "", "", "b'", "b", "d'n", "d", "f", "h", "j", "k", "k'", "kl", "kr", "kk", "l", "m", "m'", "nk", "n", "p", "pt", "q", "q'", "s", "t", "tl", "th", "w"];
var nm11 = ["c", "d", "g", "h", "j", "k", "l", "m", "n", "q", "r", "s", "t", "v", "z"];
var nm12 = ["", "", "", "", "", "c", "d", "hs", "k", "kt", "kth", "l", "m", "n", "r", "s", "y", "z"];

function generator$star_wars$jawas(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm9.length);
		rnd8 = Math.floor(Math.random() * nm2.length);
		rnd10 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			while (rnd7 < 4) {
				rnd7 = Math.floor(Math.random() * nm9.length);
			}
			while (rnd10 < 5) {
				rnd10 = Math.floor(Math.random() * nm12.length);
			}
			namelast = nm9[rnd7] + nm2[rnd8] + nm12[rnd10];
		} else if (i % 2 === 0) {
			rnd9 = Math.floor(Math.random() * nm2.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm2[rnd8] + nm11[rnd11] + nm2[rnd9] + nm12[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm2.length);
			rnd11 = Math.floor(Math.random() * nm11.length);
			rnd12 = Math.floor(Math.random() * nm2.length);
			rnd13 = Math.floor(Math.random() * nm11.length);
			namelast = nm9[rnd7] + nm2[rnd8] + nm11[rnd11] + nm2[rnd9] + nm11[rnd13] + nm2[rnd12] + nm12[rnd10];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 6) {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5b = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd5b] + nm2[rnd6] + nm8[rnd5] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 4) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + namelast;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5b = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5b] + nm2[rnd6] + nm4[rnd5] + "  " + namelast;
			}
		}
		return names;
	}

}