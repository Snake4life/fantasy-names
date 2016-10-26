function generator$star_wars_the_old_republic$siths(type) {
	var nm1 = ["a", "i", "o", "u", "â", "û", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm2 = ["ch", "d", "dz", "h", "j", "k", "kr", "kh", "m", "n", "l", "q", "r", "rh", "s", "sh", "sr", "t", "ts", "w", "wr", "wh", "y", "z", "zh", "zr", "ch", "d", "h", "j", "k", "m", "n", "l", "q", "r", "s", "t", "w", "y", "z"];
	var nm3 = ["a", "i", "o", "u", "ai", "oi", "a", "i", "o", "u", "a", "i", "o", "u", "â", "û"];
	var nm4 = ["d", "h", "j", "k", "l", "m", "n", "sh", "q", "r", "s", "t", "ts", "w", "y", "z"];
	var nm5 = ["d", "h", "j", "k", "l", "m", "n", "sh", "q", "r", "s", "t", "ts", "w", "y", "z", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm6 = ["a", "û", "â", "i", "o", "u", "ai", "oi"];
	var nm7 = ["r", "t", "s", "sh", "z", "n", "m", "ts", "l", "w", "", "", "", ""];
	var nm8 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm9 = ["b", "bh", "br", "c", "ch", "cl", "d", "dr", "dh", "g", "gr", "gh", "j", "k", "kh", "m", "n", "p", "pl", "q", "r", "rh", "s", "sl", "sh", "t", "tr", "v", "vl", "vr", "w", "wr", "wh", "x", "y", "z", "zh", "zr", "b", "c", "d", "g", "j", "k", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
	var nm10 = ["a", "e", "i", "o", "u", "ae", "ea", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm11 = ["d", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x"];
	var nm12 = ["b", "c", "d", "g", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm13 = ["a", "e", "i", "o", "u", "iu", "ae", "ia", "ua", "uo", "ea", "iu", "ae", "ia", "ua"];
	var nm14 = ["th", "s", "sh", "n", "m", "x", "l", "wr", "sy", "ty", "tiur", "tiuth", "siuth", "ny", "nyr", "lyr", "rius", "", "", "", "", "", "", "", "", "", "", "", "", ""];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm8.length);
			rnd2 = Math.floor(Math.random() * nm9.length);
			rnd3 = Math.floor(Math.random() * nm10.length);
			rnd4 = Math.floor(Math.random() * nm11.length);
			rnd5 = Math.floor(Math.random() * nm12.length);
			rnd6 = Math.floor(Math.random() * nm13.length);
			rnd7 = Math.floor(Math.random() * nm14.length);
			names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4] + nm12[rnd5] + nm13[rnd6] + nm14[rnd7];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm6.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + nm7[rnd7];
		}
		return names;
	}

}