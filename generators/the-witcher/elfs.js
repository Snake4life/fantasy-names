var nm1 = ["", "", "", "", "", "c", "ch", "cr", "d", "f", "g", "h", "m", "r", "s", "t", "v", "vr"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "oi", "au", "ai", "ei", "ae", "ea", "io"];
var nm3 = ["b", "bh", "ch", "d", "dr", "h", "l", "m", "md", "ml", "mm", "n", "nd", "ndr", "ng", "ngr", "nl", "nn", "r", "rbr", "rd", "rl", "rn", "rrd", "rv", "s", "v"];
var nm4 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "oi", "au", "ai", "ei", "ae", "ea", "io"];
var nm5 = ["", "b", "bh", "ch", "d", "dr", "h", "l", "m", "md", "ml", "mm", "n", "nd", "ndr", "ng", "ngr", "nl", "nn", "r", "rbr", "rd", "rl", "rn", "rrd", "rv", "s", "v"];
var nm7 = ["", "", "", "", "d", "r", "s", "n", "c", "ch", "l", "rr", "th", "m", "nn"];

var nm8 = ["", "", "", "", "", "c", "d", "f", "h", "l", "m", "n", "r", "s", "sr", "sh", "t", "th", "v"];
var nm9 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ie", "ee", "io", "ua", "ia"];
var nm10 = ["d", "dh", "fr", "f", "ff", "gl", "gh", "l", "ll", "m", "mm", "mn", "n", "nn", "nr", "r", "rr", "s", "ss", "sh", "th", "thl", "tt", "t", "tl", "v"];
var nm11 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ie", "ee", "io", "ua", "ia"];
var nm12 = ["", "d", "dh", "fr", "f", "ff", "gl", "gh", "l", "ll", "m", "mm", "mn", "n", "nn", "nr", "r", "rr", "s", "ss", "sh", "th", "thl", "tt", "t", "tl", "v"];
var nm14 = ["", "", "", "", "", "", "", "", "", "nn", "n", "l", "s", "sh"];

function generator$the_witcher$elfs(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm8.length);
			rnd2 = Math.floor(Math.random() * nm9.length);
			rnd3 = Math.floor(Math.random() * nm10.length);
			rnd6 = Math.floor(Math.random() * nm9.length);
			rnd7 = Math.floor(Math.random() * nm14.length);
			if (i < 5) {
				names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm9[rnd6] + nm14[rnd7];
			} else {
				rnd4 = Math.floor(Math.random() * nm11.length);
				rnd5 = Math.floor(Math.random() * nm12.length);
				if (rnd4 < 20) {
					rnd5 = 0;
					rnd6 = 0;
				} else {
					while (rnd5 === 0) {
						rnd5 = Math.floor(Math.random() * nm12.length);
					}
				}
				names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5] + nm9[rnd6] + nm14[rnd7];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm2.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm7[rnd7];
			} else {
				rnd4 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				if (rnd4 < 30) {
					rnd5 = 0;
					rnd6 = 0;
				} else {
					while (rnd5 === 0) {
						rnd5 = Math.floor(Math.random() * nm5.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm2[rnd6] + nm7[rnd7];
			}
		}
		return names;
	}

}