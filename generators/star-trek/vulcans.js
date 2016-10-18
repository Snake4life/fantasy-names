var nm1 = ["Ch", "D", "F", "H", "J", "K", "L", "M", "N", "P", "S", "Sk", "Sp", "St", "Str", "T", "T'K", "V", "V'L", "S", "Sk", "Sp", "St", "Str", "S"];
var nm2 = ["aa", "ia", "au", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y"];
var nm3 = ["d", "f", "j", "kk", "l", "ll", "lk", "lv", "n", "p", "r", "rr", "s", "str", "ss", "t", "v"];
var nm4 = ["", "", "c", "ck", "k", "k", "k", "l", "lk", "m", "n", "nn", "r", "rk", "s", "ss", "t", "tt", "th", "v"];

var nm5 = ["f", "h", "l", "m", "n", "s", "t's", "t'r", "t'h", "t'l", "t'm", "t'p", "t'pl", "t'pr", "t'sh", "v'l", "v"];
var nm6 = ["", "", "", "", "", "f", "h", "l", "m", "n", "s", "t's", "t'r", "t'h", "t'l", "t'm", "t'p", "t'pl", "t'pr", "t'sh", "v'l", "v"];
var nm7 = ["aa", "ai", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
var nm8 = ["k", "l", "m", "n", "nv", "nn", "r", "rr", "s", "ss", "t", "v"];
var nm9 = ["", "", "k", "l", "n", "ng", "r", "s", "th"];

function generator$star_trek$vulcans(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm5.length);
				rnd2 = Math.floor(Math.random() * nm7.length);
				rnd3 = Math.floor(Math.random() * nm9.length);
				names = nm5[rnd] + nm7[rnd2] + nm9[rnd3];
			} else {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm7.length);
				rnd3 = Math.floor(Math.random() * nm8.length);
				rnd4 = Math.floor(Math.random() * nm7.length);
				if (rnd2 < 2) {
					while (rnd4 < 2) {
						rnd4 = Math.floor(Math.random() * nm7.length);
					}
				}
				rnd5 = Math.floor(Math.random() * nm9.length);
				names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm9[rnd5];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm4.length);
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd3];
			} else {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				if (rnd2 < 3) {
					while (rnd4 < 3) {
						rnd4 = Math.floor(Math.random() * nm2.length);
					}
				}
				rnd5 = Math.floor(Math.random() * nm4.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			}
		}
		return names;
	}

}