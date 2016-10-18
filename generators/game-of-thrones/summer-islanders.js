var nm1 = ["B", "Bh", "D", "J", "M", "S", "T", "X", "Xh", "Z", "Zh"];
var nm2 = ["a", "o", "a"];
var nm3 = ["b", "bh", "dh", "l", "lth", "ll", "lh", "n", "nt", "qu", "r", "rr"];
var nm4 = ["r", "l", "", "r", "l", "s"];
var nm5 = ["Ch", "H", "J", "L", "M", "N", "R", "S", "T", "X", "Xh", "Z", "Zh"];
var nm6 = ["dh", "l", "ll", "lh", "n", "nd", "nt", "r", "rr", "t", "s", "z"];
var nm7 = ["Ch", "D", "Q", "Qh", "R", "Rh", "S", "T", "X", "Xh", "Z", "Zh"];
var nm8 = ["a", "o", "a", "aa"];
var nm9 = ["", "", "qu", "d", "l", "m", "n", "q", "r", "s", "x"];
var nm10 = ["", "a", "o", "a"];
var nm11 = ["", "", "", "n", "q", "s"];

function generator$game_of_thrones$summer_islanders(type) {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd2b = Math.floor(Math.random() * nm2.length);
		rnd7 = Math.floor(Math.random() * nm7.length);
		rnd8 = Math.floor(Math.random() * nm8.length);
		rnd9 = Math.floor(Math.random() * nm9.length);
		rnd10 = Math.floor(Math.random() * nm10.length);
		rnd11 = Math.floor(Math.random() * nm11.length);
		if (rnd9 < 3) {
			rnd10 = 0;
		}
		if (rnd10 === 0) {
			rnd11 = 0;
		}
		if (type === 1) {
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			if (i < 5) {
				names = nm5[rnd5] + nm2[rnd2] + nm6[rnd6] + nm2[rnd2b] + " " + nm7[rnd7] + nm8[rnd8] + nm9[rnd9] + nm10[rnd10] + nm11[rnd11];
			} else {
				rnd6b = Math.floor(Math.random() * nm6.length);
				rnd2c = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd5] + nm2[rnd2] + nm6[rnd6] + nm2[rnd2b] + nm6[rnd6b] + nm2[rnd2c] + " " + nm7[rnd7] + nm8[rnd8] + nm9[rnd9] + nm10[rnd10] + nm11[rnd11];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm4[rnd4] + " " + nm7[rnd7] + nm8[rnd8] + nm9[rnd9] + nm10[rnd10] + nm11[rnd11];
			} else {
				rnd3b = Math.floor(Math.random() * nm3.length);
				rnd2c = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm3[rnd3b] + nm2[rnd2c] + nm4[rnd4] + " " + nm7[rnd7] + nm8[rnd8] + nm9[rnd9] + nm10[rnd10] + nm11[rnd11];
			}
		}
		return names;
	}

}