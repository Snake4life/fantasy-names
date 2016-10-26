function generator$star_wars_the_old_republic$togrutas(type) {
	var nm0 = ["", "", "", "", "", "", "", "", "", "a", "o", "u"];
	var nm1 = ["b", "c", "d", "h", "k", "m", "r", "s", "t", "v", "z"];
	var nm2 = ["a", "o", "u"];
	var nm3 = ["b", "br", "d", "k", "kr", "ky", "l", "n", "nz", "r", "rh", "s", "sht", "t", "vr", "z"];
	var nm4 = ["a", "aa", "ee", "i", "o", "y"];
	var nm5 = ["", "", "", "", "", "", "", "hd", "k", "n", "m", "r", "s", "sh"];

	var nm6 = ["", "", "", "", "a", "a", "o", "a"];
	var nm7 = ["b", "c", "d", "h", "k", "l", "m", "n", "r", "s", "sh", "z"];
	var nm8 = ["a", "aa", "e", "o"];
	var nm9 = ["d", "hn", "hl", "hs", "k", "l", "m", "mn", "n", "r", "rl", "rsh", "rn", "s", "ss", "sh", "shl", "t", "th", "tt"];
	var nm10 = ["a", "aa", "a", "a", "o"];
	var nm11 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "n", "m", "h", "s", "sh"];

	var nm12 = ["b", "d", "h", "k", "l", "m", "n", "ph", "r", "s", "t", "v", "z"];
	var nm13 = ["a", "y", "aa", "i", "e"];
	var nm14 = ["br", "d", "k", "kr", "l", "m", "n", "r", "rn", "rl", "s", "ss", "sh", "shr", "vr", "w", "z"];
	var nm15 = ["a", "aa", "e", "u", "y", "a", "e", "u", "i", "o", "o", "ii", "ua", "ee"];
	var nm16 = ["", "", "", "", "ks", "l", "n", "m", "r", "s", "sh"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm12.length);
			rnd2 = Math.floor(Math.random() * nm13.length);
			rnd3 = Math.floor(Math.random() * nm14.length);
			rnd4 = Math.floor(Math.random() * nm15.length);
			rnd5 = Math.floor(Math.random() * nm16.length);
			lName = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm15[rnd4] + nm16[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm12.length);
			rnd2 = Math.floor(Math.random() * nm13.length);
			rnd5 = Math.floor(Math.random() * nm16.length);
			lName = nm12[rnd] + nm13[rnd2] + nm16[rnd5];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm9.length);
			rnd5 = Math.floor(Math.random() * nm10.length);
			rnd6 = Math.floor(Math.random() * nm11.length);
			names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5] + nm11[rnd6] + " " + lName;
		} else {
			rnd = Math.floor(Math.random() * nm0.length);
			rnd1 = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm0[rnd] + nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + " " + lName;
		}
		return names;
	}

}