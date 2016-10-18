var nm1 = ["", "", "", "", "", "b", "ch", "gr", "j", "k", "kr", "p", "pr", "q", "qr", "r", "s", "t", "tr", "tch", "x", "v", "z"];
var nm2 = ["a", "e", "o", "u", "a", "e", "o", "u", "a", "e", "o", "u", "a", "e", "o", "u", "i", "i", "a", "e", "o", "u", "au", "ai", "oi", "ou"];
var nm3 = ["ch", "j", "k", "kk", "l", "ll", "m", "n", "nn", "p", "pp", "q", "r", "rr", "s", "t", "v", "y", "x", "z", "zz"];
var nm4 = ["", "", "", "", "", "", "", "", "", "", "ck", "gh", "k", "l", "n", "r"];
var nm5 = ["", "", "", "", "", "ch", "d", "g", "gh", "k", "kh", "m", "n", "p", "q", "r", "s", "sh", "t", "th", "v", "z", "zh"];
var nm6 = ["a", "e", "o", "u", "a", "e", "o", "u", "a", "e", "o", "u", "a", "e", "o", "u", "i", "i", "a", "e", "o", "u", "ai", "io", "ee", "ae"];
var nm7 = ["b", "ch", "g", "j", "k", "ky", "lk", "l", "ll", "ly", "m", "mk", "nk", "ny", "p", "py", "r", "rr", "rk", "s", "t", "ty", "tch", "v", "vy", "z", "zz"];
var nm8 = ["", "", "", "", "", "", "", "", "", "", "k", "l", "n", "r"];
var nm9 = ["", "", "", "", "", "b", "ch", "d", "g", "j", "k", "kr", "m", "n", "p", "pr", "q", "r", "s", "t", "tch", "v", "z"];
var nm10 = ["a", "e", "i", "o", "u", "a", "o", "e", "a", "o", "e", "u"];
var nm11 = ["ch", "g", "j", "k", "kk", "ky", "l", "ll", "m", "n", "ng", "nk", "p", "pp", "q", "r", "rr", "s", "t", "tch", "v", "y", "z", "zz"];
var nm12 = ["", "", "ck", "k", "l", "n", "r", "t"];

function generator$pathfinder$tengus(type) {

	i = Math.floor(Math.random() * 10); {
		rnd8 = Math.floor(Math.random() * nm9.length);
		rnd9 = Math.floor(Math.random() * nm10.length);
		rnd10 = Math.floor(Math.random() * nm11.length);
		rnd11 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		lastName = nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm10[rnd11] + nm12[rnd12];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 3) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm5.length);
				}
				while (rnd5 < 10) {
					rnd5 = Math.floor(Math.random() * nm8.length);
				}
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd5] + " " + lastName;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + lastName;
			} else {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + " " + lastName;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				while (rnd < 5) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 10) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + " " + lastName;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + lastName;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + lastName;
			}
		}
		return names;
	}

}