var nm1 = ["", "", "", "c", "d", "f", "h", "k", "m", "n", "r", "s", "t", "v", "w", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "ae", "ie", "ye", "yi", "ei"];
var nm3 = ["d", "dh", "f", "fl", "fn", "l", "ll", "ld", "ln", "lm", "lr", "lv", "m", "mm", "md", "mr", "mn", "mk", "n", "nn", "nh", "nk", "ng", "nv", "nl", "r", "rr", "rn", "rl", "rk", "rd", "s", "sl", "sh", "shk"];
var nm4 = ["", "", "", "", "j", "l", "m", "n", "r", "s", "th"];
var nm5 = ["ch", "d", "h", "j", "k", "m", "n", "t", "v", "z"];
var nm6 = ["a", "e", "i", "a", "e", "i", "a", "e", "i", "o", "u", "aa", "ii"];
var nm7 = ["d", "f", "h", "j", "l", "m", "n", "r", "s", "v", "w", "z"];
var nm8 = ["", "", "l", "mm", "n", "r", "s"];

function generator$star_wars$iktotchis(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm5.length);
		rnd7 = Math.floor(Math.random() * nm6.length);
		rnd8 = Math.floor(Math.random() * nm8.length);
		if (i % 2 === 0) {
			rnd9 = Math.floor(Math.random() * nm7.length);
			rnd10 = Math.floor(Math.random() * nm6.length);
			namelast = nm5[rnd6] + nm6[rnd7] + nm7[rnd9] + nm6[rnd10] + nm8[rnd8];
		} else {
			namelast = nm5[rnd6] + nm6[rnd7] + nm8[rnd8];
		}
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + "  " + namelast;
		return names;
	}

}