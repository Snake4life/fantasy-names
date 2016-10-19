function generator$fantasy$sylphs(type) {
	var nm1 = ["c", "ch", "l", "m", "n", "ph", "s", "th", "v", "w", "y"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ae", "ea", "ei", "ia", "ie", "ue", "ua", "aei", "aea", "eae"];
	var nm3 = ["bh", "c", "ch", "h", "y", "hl", "hm", "hy", "l", "lm", "ln", "ls", "lt", "lth", "lv", "ll", "m", "mm", "mn", "mh", "ms", "mth", "n", "nh", "nn", "nl", "nt", "ns", "nth", "nv", "nf", "nm", "nh", "nhr", "ph", "phr", "r", "rd", "rph", "rs", "rth", "rh", "rn", "rm", "rv", "ss", "sn", "sh", "st", "t", "th", "thr", "v", "w"];
	var nm4 = ["f", "l", "m", "n", "s", "th", "f", "ff", "h", "l", "m", "n", "ph", "s", "sh", "th", "y"];
	var nm5 = ["", "", "", "", "dh", "f", "h", "l", "m", "n", "ph", "s", "sh", "th", "w", "y"];
	var nm6 = ["c", "h", "y", "hl", "hn", "hm", "hsh", "hph", "hy", "hth", "ht", "l", "ll", "lsh", "lf", "ln", "lph", "ls", "lth", "m", "mn", "mh", "ms", "n", "nh", "nl", "nsh", "nt", "ns", "nth", "nph", "nf", "nm", "nh", "nhr", "ph", "phn", "phl", "r", "rd", "rph", "rsh", "rs", "rth", "rh", "rn", "rm", "ss", "sn", "shn", "sh", "st", "sht", "t", "th", "thr", "v", "w"];
	var nm7 = ["", "", "", "", "f", "ff", "h", "l", "m", "n", "ph", "s", "sh", "y", "f", "ff", "h", "ph", "s", "sh", "y"];
	var nm8 = ["", "", "", "", "", "c", "dh", "f", "h", "l", "m", "n", "ph", "s", "sh", "th", "v", "w", "y"];
	var nm9 = ["ch", "h", "hl", "hn", "hm", "hsh", "hph", "ht", "hth", "l", "lsh", "lf", "lm", "ln", "lph", "ls", "lt", "lth", "lv", "m", "mm", "mn", "mh", "ms", "msh", "mth", "mf", "n", "nh", "nl", "nsh", "nt", "ns", "nth", "nph", "nv", "nf", "nm", "nh", "nhr", "ph", "phr", "phn", "phl", "r", "rd", "rph", "rsh", "rs", "rth", "rh", "rn", "rm", "ss", "sn", "shn", "sh", "st", "sht", "t", "th", "thr", "v", "w", "y"];
	var nm10 = ["f", "ff", "h", "l", "m", "n", "ph", "s", "sh", "th", "y"];



	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm7.length);
			if (i < 5) {
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5];
			} else if (i < 8) {
				rnd6 = Math.floor(Math.random() * nm2.length);
				while (rnd5 < 4) {
					rnd5 = Math.floor(Math.random() * nm7.length);
				}
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5] + nm2[rnd6];
			} else {
				rnd6 = Math.floor(Math.random() * nm2.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				rnd8 = Math.floor(Math.random() * nm2.length);
				names = nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd7] + nm2[rnd8] + nm7[rnd5] + nm2[rnd6];
				while (names.length > 10) {
					rnd = Math.floor(Math.random() * nm5.length);
					rnd3 = Math.floor(Math.random() * nm6.length);
					rnd5 = Math.floor(Math.random() * nm7.length);
					rnd6 = Math.floor(Math.random() * nm2.length);
					rnd7 = Math.floor(Math.random() * nm6.length);
					rnd2 = Math.floor(Math.random() * nm2.length);
					rnd4 = Math.floor(Math.random() * nm2.length);
					names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd6] + nm9[rnd7] + nm2[rnd4] + nm10[rnd5];
				}
			}
		} else if (type === 2) {
			rnd = Math.floor(Math.random() * nm8.length);
			rnd3 = Math.floor(Math.random() * nm9.length);
			rnd5 = Math.floor(Math.random() * nm10.length);
			if (i < 7) {
				names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd4] + nm10[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm2.length);
				rnd7 = Math.floor(Math.random() * nm9.length);
				names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd6] + nm9[rnd7] + nm2[rnd4] + nm10[rnd5];
				while (names.length > 10) {
					rnd = Math.floor(Math.random() * nm8.length);
					rnd3 = Math.floor(Math.random() * nm9.length);
					rnd5 = Math.floor(Math.random() * nm10.length);
					rnd6 = Math.floor(Math.random() * nm2.length);
					rnd7 = Math.floor(Math.random() * nm9.length);
					rnd2 = Math.floor(Math.random() * nm2.length);
					rnd4 = Math.floor(Math.random() * nm2.length);
					names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd6] + nm9[rnd7] + nm2[rnd4] + nm10[rnd5];
				}
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 7) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm2.length);
				rnd7 = Math.floor(Math.random() * nm3.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd6] + nm3[rnd7] + nm2[rnd4] + nm4[rnd5];
				while (names.length > 10) {
					rnd = Math.floor(Math.random() * nm1.length);
					rnd3 = Math.floor(Math.random() * nm3.length);
					rnd5 = Math.floor(Math.random() * nm4.length);
					rnd6 = Math.floor(Math.random() * nm2.length);
					rnd7 = Math.floor(Math.random() * nm3.length);
					rnd2 = Math.floor(Math.random() * nm2.length);
					rnd4 = Math.floor(Math.random() * nm2.length);
					names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd6] + nm9[rnd7] + nm2[rnd4] + nm10[rnd5];
				}
			}
		}
		return names;
	}

}