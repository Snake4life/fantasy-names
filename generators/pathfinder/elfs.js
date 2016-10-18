var nm1 = ["", "", "", "", "", "c", "d", "f", "g", "h", "k", "kr", "l", "m", "n", "s", "t", "th", "v", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "o", "o", "e", "e", "ae", "ia", "ie", "ea", "ei", "io"];
var nm3 = ["ch", "cl", "cv", "dr", "dv", "g", "g", "g", "gl", "gr", "ghr", "ght", "h", "h", "h", "j", "j", "l", "l", "l", "l", "l", "l", "lm", "ln", "ldr", "lvr", "ld", "ldl", "ll", "ls", "lth", "lv", "m", "m", "m", "m", "mr", "mv", "n", "n", "n", "n", "nr", "nv", "nvr", "nth", "nd", "ndl", "ndr", "nl", "r", "r", "r", "r", "r", "rl", "rgr", "rg", "rd", "rdl", "rdr", "s", "s", "s", "s", "sh", "shn", "st", "sv", "sr", "sth", "t", "t", "t", "th", "th", "v", "v", "v", "vr", "y", "y", "y"];
var nm4 = ["", "l", "m", "n", "r", "s", "ss", "l", "m", "n", "r", "s", "ss"];
var nm5 = ["", "", "", "", "", "d", "f", "h", "j", "k", "l", "m", "n", "ph", "s", "sh", "t", "th", "v", "y"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "o", "o", "e", "e", "ie", "ia", "ea", "au", "aa", "ao", "eae", "ou", "ae"];
var nm7 = ["c", "c", "c", "cl", "cn", "cm", "d", "d", "d", "dr", "dn", "dm", "g", "g", "g", "gn", "gh", "gy", "h", "h", "h", "h", "hh", "hh", "hn", "hl", "hr", "l", "l", "l", "l", "l", "ll", "ll", "lm", "ln", "lhr", "lhn", "lv", "ls", "lsh", "ly", "ll", "m", "m", "m", "m", "mm", "mm", "mh", "mn", "mr", "n", "n", "n", "nn", "nn", "nd", "ndl", "ndr", "nn", "nr", "nth", "ns", "nl", "nh", "ny", "r", "r", "r", "rr", "rr", "rdl", "rl", "rn", "rv", "rs", "s", "s", "s", "ss", "ss", "sh", "shr", "sl", "th", "v", "v", "v", "y", "y", "y"];
var nm8 = ["", "", "", "", "", "", "", "", "", "", "", "h", "l", "n", "s", "ss"];
var nm9 = ["", "", "", "", "c", "d", "f", "g", "gr", "h", "j", "k", "l", "m", "n", "s", "sh", "t", "th", "v", "w", "y", "z", "zh"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "e", "e", "o", "o", "ai", "ee", "ei", "ia", "ie", "ae", "io"];
var nm11 = ["cl", "d", "d", "d", "dn", "dr", "g", "g", "g", "gh", "gl", "gr", "h", "h", "h", "hh", "j", "k", "k", "k", "l", "l", "l", "l", "l", "ll", "ll", "ll", "ld", "ldl", "ldr", "lf", "lhn", "lhr", "ll", "llm", "llv", "lm", "ln", "ls", "lv", "lvr", "m", "m", "m", "mm", "mm", "mn", "mr", "mv", "n", "n", "n", "nn", "n", "nd", "ndl", "ndr", "nl", "nn", "nr", "ns", "nth", "nv", "ph", "r", "r", "r", "rr", "rd", "rdl", "rg", "rl", "rm", "rr", "s", "s", "s", "ss", "ss", "sh", "sl", "ss", "st", "th", "tl", "v", "v", "v", "y", "y", "y"];
var nm12 = ["", "", "h", "l", "m", "n", "r", "s"];

function generator$pathfinder$elfs(type) {

	i = Math.floor(Math.random() * 10); {
		rnd10 = Math.floor(Math.random() * nm9.length);
		rnd11 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
		} else if (i % 2 === 0) {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			rnd15 = Math.floor(Math.random() * nm11.length);
			rnd16 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm11[rnd15] + nm10[rnd16] + nm12[rnd12];
		} else {
			while (rnd10 < 4) {
				rnd10 = Math.floor(Math.random() * nm9.length);
			}
			while (rnd12 < 2) {
				rnd12 = Math.floor(Math.random() * nm12.length);
			}
			nameLast = nm9[rnd10] + nm10[rnd11] + nm12[rnd12];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 4) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + nameLast;
			} else if (i < 8) {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + " " + nameLast;
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				rnd8 = Math.floor(Math.random() * nm7.length);
				rnd9 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm7[rnd8] + nm6[rnd9] + nm8[rnd5] + " " + nameLast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 === 0) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + nameLast;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameLast;
			} else if (i < 9) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + nameLast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				rnd8 = Math.floor(Math.random() * nm3.length);
				rnd9 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm3[rnd8] + nm2[rnd9] + nm4[rnd5] + " " + nameLast;
			}
		}
		return names;
	}

}