var nm1 = ["D", "G", "H", "J", "L", "M", "N", "Ng", "R", "T", "Th", "V"];
var nm2 = ["a", "i", "e", "o", "a", "ai", "ou", "aa", "a", "e", "i", "o"];
var nm3 = ["g", "gg", "k", "kk", "l", "ll", "m", "mm", "r", "rr", "sr", "ss", "t", "tt", "yc", "z", "zz"];
var nm4 = ["a", "e", "i", "o", "u"];
var nm5 = ["d", "h", "k", "l", "m", "n", "r", "rc", "v", "z", ""];

var nm6 = ["D", "G", "H", "J", "L", "M", "N", "S", "Sh", "T", "Th", "V", "Zh"];
var nm7 = ["a", "e", "i", "ee", "ai", "ay", "a", "e", "i", "a", "e", "i"];
var nm8 = ["d", "dd", "g", "gg", "hn", "l", "ll", "n", "nn", "r", "rr", "rt", "s", "ss", "sh", "shk", "v", "vn", "vv"];
var nm9 = ["a", "e", "i", "o", "u", "aa", "ou"];
var nm10 = ["r", "s", "sh", "ss", "", "", "", "", "", "", "", "", "", "", ""];
var nm11 = ["hn", "l", "ll", "n", "nn", "s", "ss", "sh", "v"];

function generator$star_trek$orions(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm7.length);
				rnd3 = Math.floor(Math.random() * nm8.length);
				rnd4 = Math.floor(Math.random() * nm9.length);
				rnd5 = Math.floor(Math.random() * nm10.length);
				names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
			} else {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm7.length);
				rnd3 = Math.floor(Math.random() * nm8.length);
				rnd4 = Math.floor(Math.random() * nm9.length);
				rnd5 = Math.floor(Math.random() * nm11.length);
				rnd6 = Math.floor(Math.random() * nm9.length);
				rnd7 = Math.floor(Math.random() * nm10.length);
				names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm11[rnd5] + nm9[rnd6] + nm10[rnd7];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
		}
		return names;
	}

}