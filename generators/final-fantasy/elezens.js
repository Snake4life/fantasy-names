var nm1 = ["A", "E", "I", "O", "U", "Au", "Eau", "A", "E", "I", "O"];
var nm2 = ["b", "d", "f", "j", "l", "m", "n", "p", "r", "s", "t", "v", "z", "br", "dr", "fr", "gr", "str", "tr", "vr", "rr", "fl", "gl", "ll", "pl", "rl", "ch", "ph", "sh", "lb", "ld", "lf", "lm", "ln", "lp", "ls", "lv", "lw"];
var nm3 = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "Z", "Br", "Dr", "Gr", "Pr", "Tr", "Cl", "Gl", "Sh", "Ph"];
var nm4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "eau", "oi", "au", "io", "ai", "eo", "ou", "ei", "io", "ia"];
var nm5 = ["b", "c", "d", "f", "h", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z", "ff", "ll", "mm", "nn", "rr", "ss", "tt", "sh", "ph", "ch"];
var nm6 = ["onne", "inne", "anne", "ionne", "ianne", "one", "ine", "ane", "ione", "iane", "ette", "elle", "itte", "ie", "iene", "enne", "ene", "eanne", "eane", "eone", "eonne"];

var nm7 = ["ant", "ault", "aut", "aux", "ax", "eaux", "ent", "ert", "eux", "ex", "ix", "oix", "ont", "ort", "oux"];

var nm8 = ["a", "e", "i", "o", "u", "ui", "eau", "ai", "ou", "au", "ui", "ea", "ie"];
var nm9 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "l", "m", "n", "p", "r", "s", "t", "v"];
var nm10 = ["", "a", "e", "i", "o", "u"];
var nm11 = ["b", "c", "d", "f", "g", "h", "j", "l", "m", "n", "p", "r", "s", "t", "v"];
var nm12 = ["ain", "air", "aire", "ame", "anc", "and", "ane", "ant", "ard", "at", "ault", "aut", "aux", "eaux", "elle", "ent", "eois", "ert", "ette", "eur", "eux", "ie", "ier", "iere", "ieu", "in", "ine", "ins", "ione", "ionne", "ois", "oix", "on", "ond", "ont", "ort", "oud", "oux", "oy", "uet", "uste"];

function generator$final_fantasy$elezens(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm8.length);
				rnd8 = Math.floor(Math.random() * nm9.length);
				rnd9 = Math.floor(Math.random() * nm10.length);
				if (rnd8 < 16) {
					rnd9 = 0;
				}
				if (rnd8 > 15) {
					while (rnd9 === 0) {
						rnd9 = Math.floor(Math.random() * nm10.length);
					}
				}
				rnd10 = Math.floor(Math.random() * nm11.length);
				rnd11 = Math.floor(Math.random() * nm12.length);
				names = nm1[rnd] + nm2[rnd2] + nm6[rnd5] + " " + nm3[rnd6] + nm8[rnd7] + nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm12[rnd11];
			} else {
				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm4.length);
				rnd3 = Math.floor(Math.random() * nm5.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm8.length);
				rnd8 = Math.floor(Math.random() * nm9.length);
				rnd9 = Math.floor(Math.random() * nm10.length);
				if (rnd8 < 16) {
					rnd9 = 0;
				}
				if (rnd8 > 15) {
					while (rnd9 === 0) {
						rnd9 = Math.floor(Math.random() * nm10.length);
					}
				}
				rnd10 = Math.floor(Math.random() * nm11.length);
				rnd11 = Math.floor(Math.random() * nm12.length);
				names = nm3[rnd] + nm4[rnd2] + nm5[rnd3] + nm6[rnd4] + " " + nm3[rnd6] + nm8[rnd7] + nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm12[rnd11];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm8.length);
				rnd8 = Math.floor(Math.random() * nm9.length);
				rnd9 = Math.floor(Math.random() * nm10.length);
				if (rnd8 < 16) {
					rnd9 = 0;
				}
				if (rnd8 > 15) {
					while (rnd9 === 0) {
						rnd9 = Math.floor(Math.random() * nm10.length);
					}
				}
				rnd10 = Math.floor(Math.random() * nm11.length);
				rnd11 = Math.floor(Math.random() * nm12.length);
				names = nm1[rnd] + nm2[rnd2] + nm7[rnd5] + " " + nm3[rnd6] + nm8[rnd7] + nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm12[rnd11];
			} else {
				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm4.length);
				rnd3 = Math.floor(Math.random() * nm5.length);
				rnd4 = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm8.length);
				rnd8 = Math.floor(Math.random() * nm9.length);
				rnd9 = Math.floor(Math.random() * nm10.length);
				if (rnd8 < 16) {
					rnd9 = 0;
				}
				if (rnd8 > 15) {
					while (rnd9 === 0) {
						rnd9 = Math.floor(Math.random() * nm10.length);
					}
				}
				rnd10 = Math.floor(Math.random() * nm11.length);
				rnd11 = Math.floor(Math.random() * nm12.length);
				names = nm3[rnd] + nm4[rnd2] + nm5[rnd3] + nm7[rnd4] + " " + nm3[rnd6] + nm8[rnd7] + nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm12[rnd11];
			}
		}
		return names;
	}

}