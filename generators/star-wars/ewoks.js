var nm1 = ["", "", "b", "ch", "c", "d", "gr", "g", "k", "kr", "l", "m", "n", "p", "r", "t", "tr", "w"];
var nm2 = ["a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "e", "i", "ee", "oo", "aa", "y"];
var nm3 = ["b", "ck", "d", "dr", "gr", "gl", "g", "k", "kk", "l", "ll", "m", "n", "pl", "rf", "rp", "rph", "rr", "st", "str"];
var nm4 = ["", "", "", "", "", "", "c", "ck", "k", "l", "m", "n", "ng", "t"];
var nm5 = ["", "", "b", "ch", "d", "f", "g", "gl", "gn", "k", "kn", "l", "m", "n", "p", "r", "t", "tr"];
var nm6 = ["ck", "d", "gr", "gl", "gn", "k", "l", "ll", "m", "n", "p", "pr", "r", "rph", "rp", "rr", "s", "sh", "st", "t", "zz"];
var nm7 = ["b", "d", "f", "g", "gr", "gl", "j", "k", "kr", "l", "m", "n", "r", "t", "tr", "w", "z"];
var nm8 = ["dr", "dd", "gr", "k", "kk", "l", "ll", "lr", "m", "mr", "mn", "n", "nr", "nl", "nt", "r", "rr", "rl", "st", "str"];
var nm9 = ["c", "ck", "k", "l", "m", "n", "ng", "t"];

function generator$star_wars$ewoks(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm7.length);
		rnd7 = Math.floor(Math.random() * nm2.length);
		rnd8 = Math.floor(Math.random() * nm8.length);
		rnd10 = Math.floor(Math.random() * nm2.length);
		if (i % 2 === 0) {
			rnd9 = Math.floor(Math.random() * nm9.length);
			namelast = nm7[rnd6] + nm2[rnd7] + nm8[rnd8] + nm2[rnd10] + nm9[rnd9];
		} else {
			rnd9 = Math.floor(Math.random() * nm8.length);
			rnd11 = Math.floor(Math.random() * nm2.length);
			namelast = nm7[rnd6] + nm2[rnd7] + nm8[rnd8] + nm2[rnd10] + nm8[rnd9] + nm2[rnd11];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			if (i < 6) {
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + "  " + namelast;
			} else {
				rnd5 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd5] + nm2[rnd6] + "  " + namelast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
		}
		return names;
	}

}