function generator$diablo$nephalems(type) {
	var nm1 = ["", "", "", "", "b", "c", "d", "g", "j", "k", "l", "m", "n", "ph", "r", "t", "v", "w", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "oe", "io", "y"];
	var nm3 = ["c", "dr", "gr", "l", "ld", "lm", "ln", "m", "md", "mn", "n", "nd", "r", "rl", "rd", "s", "ss", "th", "thm", "z"];
	var nm4 = ["", "", "", "", "", "b", "c", "d", "k", "l", "ln", "lm", "n", "r", "s"];
	var nm5 = ["", "", "", "", "", "ch", "h", "j", "l", "m", "n", "ph", "r", "rh", "s", "sh", "w", "z"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y"];
	var nm7 = ["dr", "l", "ll", "lm", "ln", "ld", "m", "mn", "n", "nm", "nn", "nr", "mr", "lgr", "n", "r", "rl", "rn", "rm", "rsh", "s", "sh", "ss", "th"];
	var nm8 = ["", "", "", "", "", "l", "n", "r", "s", "sh"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 5) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
			}
		}
		return names;
	}

}