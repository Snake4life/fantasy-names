function generator$star_wars_the_old_republic$cathars(type) {
	var nm1 = ["", "", "a", "u", "y", "i"];
	var nm2 = ["c", "cr", "h", "kh", "m", "n", "r", "s", "t", "x"];
	var nm3 = ["a", "i", "o", "y", "u"];
	var nm4 = ["c", "d", "k", "m", "n", "nd", "r", "rb", "s"];
	var nm5 = ["", "", "", "", "", "c", "h", "hr", "k", "m", "n", "rr", "x"];

	var nm6 = ["c", "ch", "d", "j", "m", "n", "r", "s", "th", "x"];
	var nm7 = ["h", "l", "lv", "m", "n", "r", "s", "th", "v", "sh", "w"];
	var nm8 = ["r", "h", "s", "n", "hr", "x", "sh", "z"];
	var nm9 = ["", "", "", "a", "i", "y"];

	var nm10 = ["j", "k", "l", "m", "n", "p", "r", "s", "t"];
	var nm11 = ["i", "o", "a", "u"];
	var nm12 = ["d", "l", "m", "n", "s", "sh", "rg", "z"];
	var nm13 = ["", "", "", "g", "k", "l", "m", "n", "r", "s", "t"];
	var nm14 = ["", "", "", "h"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rn = Math.floor(Math.random() * nm10.length);
			rn2 = Math.floor(Math.random() * nm14.length);
			rn3 = Math.floor(Math.random() * nm11.length);
			rn4 = Math.floor(Math.random() * nm12.length);
			rn5 = Math.floor(Math.random() * nm11.length);
			rn6 = Math.floor(Math.random() * nm13.length);
			lName = nm10[rn] + nm14[rn2] + nm11[rn3] + nm12[rn4] + nm11[rn5] + nm13[rn6];
		} else {
			rn = Math.floor(Math.random() * nm10.length);
			rn2 = Math.floor(Math.random() * nm14.length);
			rn5 = Math.floor(Math.random() * nm11.length);
			rn6 = Math.floor(Math.random() * nm13.length);
			lName = nm10[rn] + nm14[rn2] + nm11[rn5] + nm13[rn6];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			rnd6 = Math.floor(Math.random() * nm9.length);
			names = nm6[rnd] + nm3[rnd2] + nm7[rnd3] + nm3[rnd4] + nm8[rnd5] + nm9[rnd6] + " " + lName;
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm3.length);
				rnd3 = Math.floor(Math.random() * nm4.length);
				rnd4 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				names = nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm3[rnd4] + nm5[rnd5] + " " + lName;
			} else {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd4] + " " + lName;
			}
		}
		return names;
	}

}