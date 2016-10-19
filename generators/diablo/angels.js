function generator$diablo$angels(type) {
	var nm1 = ["", "", "", "", "b", "c", "dr", "g", "h", "l", "m", "n", "p", "r", "s", "t", "th", "v", "y", "z"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ai"];
	var nm3 = ["br", "d", "dr", "f", "g", "l", "lt", "ll", "lg", "lth", "lz", "m", "mp", "mph", "mphr", "mr", "n", "nd", "nn", "nny", "nr", "nl", "ph", "r", "s", "sr", "st", "th", "z", "zr"];
	var nm4 = ["al", "ael", "eon", "iel", "ial", "il", "el", "ius", "ion", "on", "os", "ual", "us"];
	var nm5 = ["c", "dr", "f", "g", "h", "k", "l", "m", "n", "p", "ph", "s", "th", "v"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ai", "au"];
	var nm7 = ["br", "c", "dr", "dy", "f", "g", "gh", "gl", "hn", "hr", "l", "ll", "lth", "ls", "lz", "ln", "lm", "lf", "m", "mr", "ml", "mn", "mph", "nl", "ny", "nph", "nd", "r", "rd", "s", "sh", "sr", "th", "z"];
	var nm8 = ["el", "ael", "il", "on", "uen", "uel", "eil", "iel", "is", "ith", "oelle", "oenne", "aelle"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm8.length);
			if (i < 5) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm8[rnd4];
			} else {
				rnd5 = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd6] + nm7[rnd5] + nm8[rnd4];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
			} else {
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm3[rnd5] + nm4[rnd4];
			}
		}
		return names;
	}

}