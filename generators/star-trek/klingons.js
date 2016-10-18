var nm1 = ["a", "o", "u", "e"];
var nm2 = ["b", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "ts", "th", "tr", "st", "sh", "gr", "ch", "kr", "kl", "dr"];
var nm3 = ["a", "e", "i", "o", "u", "a", "o"];
var nm4 = ["k", "k", "k", "m", "t", "r", "v", "g", "p", "n", "l", "d", "z", "b", "h", "m", "t", "r", "v", "g", "p", "n", "l", "d", "z", "b", "h", "r", "r", "r", "cl", "dm", "dr", "gh", "gr", "hl", "hm", "ll", "mp", "mt", "nk", "nm", "nt", "rg", "rk", "rl", "rn", "rp", "rr", "rt", "sk", "th", "tr", "wr", "yb"];
var nm5 = ["k", "k", "m", "r", "k", "l", "n", "rgh", "ng", "x", "s", "n", "th", "hk", "hl", "d", "l", "c", "gh", "ss", "z", "ll", "rrd", "rd", "t", "q", "sh", "w", "rf"];
var nm6 = ["o", "a", "i", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm7 = ["'", "", "", "", "", "", "", "", "", ""];
var nm8 = ["", "Ch'", "D'", "H'", "J'", "K'", "L'", "T'", "W'", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var nm9 = ["b", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "ts", "th", "tr", "st", "sh", "gr", "ch", "kr", "kl", "dr"];
var nm10 = ["d", "g", "h", "k", "l", "m", "n", "r", "t", "v", "x", "z", "lk", "nn", "tb", "hl", "rs", "ll", "lkr", "km", "dr", "rl", "lk", "lg", "rg", "sk", "th", "tr", "dm", "hm", "ng", "nk", "l", "n", "l", "n", "k"];
var nm11 = ["r", "nn", "l", "h", "g", "n", "ss", "s", "yr", "st", "th", "j", "m", "v", "ll", "sh", "hl", "ng", "w"];
var nm12 = ["o", "a", "i", "", "", "", "", "", ""];

var nm13 = ["", "", "", "b", "c", "g'g", "d", "d'gh", "dr", "f", "g'", "g", "gr", "h", "j", "k'g", "k't", "k'mp", "k", "kh", "kl", "kr", "l", "m", "mn", "mr", "mv", "n", "ng", "p", "q", "r", "rr", "s", "sh", "t", "th", "tr", "v", "vr", "w", "x", "z"];
var nm14 = ["c", "ct", "ck", "ch", "b", "d", "g", "gg", "ggr", "hn", "hnr", "k", "k'M", "ll", "lk", "lv", "lm", "lt", "mm", "mmr", "m", "mp", "mr", "nn", "nk", "nl", "nj", "nz", "ndl", "ns", "n", "nt", "r", "rr", "rs", "rmd", "rn", "rp", "rtr", "rst", "rt", "rg", "rm", "rd", "rsh", "ss", "str", "sht", "tzh", "v", "wr", "x", "yg", "z", "zh"];
var nm15 = ["bh", "c", "ct", "ck", "cx", "ch", "d", "dh", "j", "g", "gh", "h", "k", "l", "lt", "m", "n", "nn", "ng", "r", "rc", "rr", "rgh", "rk", "rv", "rn", "rg", "sh", "sht", "s", "ss", "t", "th", "v", "x", "z", "zh"];

function generator$star_trek$klingons(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm9.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm11.length);
				rnd5 = Math.floor(Math.random() * nm12.length);
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm8.length);
				if (rnd6 === 0) {
					rnd7 = 0;
				}
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm3.length);
				rnd10 = Math.floor(Math.random() * nm14.length);
				rnd11 = Math.floor(Math.random() * nm3.length);
				rnd12 = Math.floor(Math.random() * nm15.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				names = nm8[rnd7] + nm1[rnd] + nm9[rnd2] + nm7[rnd6] + nm3[rnd3] + nm11[rnd4] + nm12[rnd5] + " " + nm13[rnd8] + nm3[rnd9] + nm14[rnd10] + nm3[rnd11] + nm15[rnd12] + nm6[rnd13];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm9.length);
				rnd2 = Math.floor(Math.random() * nm3.length);
				rnd3 = Math.floor(Math.random() * nm10.length);
				rnd4 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm11.length);
				rnd6 = Math.floor(Math.random() * nm12.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				rnd8 = Math.floor(Math.random() * nm8.length);
				if (rnd7 === 0) {
					rnd8 = 0;
				}
				rnd9 = Math.floor(Math.random() * nm13.length);
				rnd10 = Math.floor(Math.random() * nm3.length);
				rnd13 = Math.floor(Math.random() * nm15.length);
				rnd12 = Math.floor(Math.random() * nm6.length);
				names = nm8[rnd8] + nm9[rnd] + nm3[rnd2] + nm10[rnd3] + nm7[rnd7] + nm3[rnd4] + nm11[rnd5] + nm12[rnd6] + " " + nm13[rnd9] + nm3[rnd10] + nm15[rnd13] + nm6[rnd12];
			} else {
				rnd = Math.floor(Math.random() * nm9.length);
				rnd2 = Math.floor(Math.random() * nm3.length);
				rnd3 = Math.floor(Math.random() * nm11.length);
				rnd4 = Math.floor(Math.random() * nm12.length);
				rnd5 = Math.floor(Math.random() * nm8.length);
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm3.length);
				rnd10 = Math.floor(Math.random() * nm14.length);
				rnd11 = Math.floor(Math.random() * nm3.length);
				rnd12 = Math.floor(Math.random() * nm15.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				names = nm8[rnd5] + nm9[rnd] + nm3[rnd2] + nm11[rnd3] + nm12[rnd4] + " " + nm13[rnd8] + nm3[rnd9] + nm14[rnd10] + nm3[rnd11] + nm15[rnd12] + nm6[rnd13];
			}
		} else {
			if (i < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm5.length);
				rnd5 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm8.length);
				if (rnd6 === 0) {
					rnd7 = 0;
				}
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm3.length);
				rnd10 = Math.floor(Math.random() * nm14.length);
				rnd11 = Math.floor(Math.random() * nm3.length);
				rnd12 = Math.floor(Math.random() * nm15.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				names = nm8[rnd7] + nm1[rnd] + nm2[rnd2] + nm7[rnd6] + nm3[rnd3] + nm5[rnd4] + nm6[rnd5] + " " + nm13[rnd8] + nm3[rnd9] + nm14[rnd10] + nm3[rnd11] + nm15[rnd12] + nm6[rnd13];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm3.length);
				rnd3 = Math.floor(Math.random() * nm4.length);
				rnd4 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				rnd8 = Math.floor(Math.random() * nm8.length);
				if (rnd7 === 0) {
					rnd8 = 0;
				}
				rnd9 = Math.floor(Math.random() * nm13.length);
				rnd10 = Math.floor(Math.random() * nm3.length);
				rnd13 = Math.floor(Math.random() * nm15.length);
				rnd12 = Math.floor(Math.random() * nm6.length);
				names = nm8[rnd8] + nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm7[rnd7] + nm3[rnd4] + nm5[rnd5] + nm6[rnd6] + " " + nm13[rnd9] + nm3[rnd10] + nm15[rnd13] + nm6[rnd12];
			} else {
				rnd = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm3.length);
				rnd3 = Math.floor(Math.random() * nm5.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd5 = Math.floor(Math.random() * nm8.length);
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm3.length);
				rnd10 = Math.floor(Math.random() * nm14.length);
				rnd11 = Math.floor(Math.random() * nm3.length);
				rnd12 = Math.floor(Math.random() * nm15.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				names = nm8[rnd5] + nm2[rnd] + nm3[rnd2] + nm5[rnd3] + nm6[rnd4] + " " + nm13[rnd8] + nm3[rnd9] + nm14[rnd10] + nm3[rnd11] + nm15[rnd12] + nm6[rnd13];
			}
		}
		return names;
	}

}