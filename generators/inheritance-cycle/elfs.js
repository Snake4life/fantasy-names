
var nm1 = ["", "", "", "", "b", "bl", "c", "cl", "d", "f", "g", "gl", "gn", "h", "k", "l", "m", "n", "t", "th", "v", "vr", "w"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "í", "ö", "ä", "äo", "á", "ae", "ia", "ie", "io", "au", "ae"];
var nm3 = ["c", "d", "dhg", "dg", "dr", "dh", "f", "g", "gh", "l", "lm", "ln", "ld", "ldth", "ll", "lr", "mn", "m", "mh", "n", "nd", "nr", "nth", "nw", "r", "rd", "rv", "rz", "rth", "s", "sd", "th", "tr", "v"];
var nm4 = ["", "", "", "", "", "dr", "l", "ldr", "lr", "mh", "n", "ng", "r", "rm", "s"];

var nm5 = ["", "", "", "", "", "bh", "cl", "d", "f", "gl", "gh", "h", "l", "m", "n", "rh", "s", "t", "th", "v", "w", "y"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "í", "ë", "ö", "á", "ëa", "ia", "io", "au", "ue", "ua", "ía", "ae"];
var nm7 = ["d", "dr", "fr", "l", "ll", "lr", "ln", "lm", "ldr", "ld", "ly", "m", "mv", "my", "mm", "ny", "n", "nn", "nv", "nz", "r", "rm", "ry", "rh", "sn", "sl", "t", "th", "y"];
var nm8 = ["", "", "", "", "", "", "", "d", "n", "r", "s", "th"];

function generator$inheritance_cycle$elfs(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 6) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd6] + nm7[rnd7] + nm6[rnd4] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				if (rnd < 4) {
					while (rnd4 < 5) {
						rnd4 = Math.floor(Math.random() * nm4.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd4];
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm4[rnd4];
			}
		}
		return names;
	}

}