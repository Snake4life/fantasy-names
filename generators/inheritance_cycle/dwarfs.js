function generator$inheritance_cycle$dwarfs(type) {﻿
	var nm1 = ["", "", "", "", "b", "br", "bl", "d", "dr", "f", "fl", "fr", "g", "gr", "h", "ht", "hv", "k", "kr", "kv", "m", "n", "r", "sk", "sv", "th", "thr", "v"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "û", "ó", "é", "á", "î", "â", "ei", "ie", "eo"];
	var nm3 = ["d", "dg", "dr", "fn", "g", "gn", "gd", "gm", "k", "kr", "kksv", "kn", "km", "ldh", "ldhr", "lm", "m", "mm", "mn", "nd", "ndf", "nn", "nndr", "r", "rd", "rg", "rgh", "rh", "rm", "rr", "s", "st", "th", "thg", "thm", "v", "w"];
	var nm4 = ["", "", "", "", "", "fk", "g", "k", "kk", "l", "ldn", "m", "n", "nd", "r", "rd", "rk", "rm", "rn", "rst", "rv", "s", "st", "th"];

	var nm5 = ["bh", "d", "dh", "f", "fl", "fr", "fn", "g", "gl", "gh", "gl", "h", "hn", "hr", "hl", "hv", "m", "n", "mh", "s", "th", "v"];
	var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "û", "í", "á", "ûi", "io", "îo"];
	var nm7 = ["d", "df", "dr", "fn", "fl", "fr", "gn", "gm", "gh", "l", "ln", "lm", "lr", "ld", "ll", "m", "mr", "mn", "mh", "md", "mm", "nd", "nr", "nh", "nn", "n", "ngl", "nh", "r", "rd", "rdr", "rn", "rh", "s", "ss", "th", "v", "w"];
	var nm8 = ["", "", "", "", "", "n", "nn", "s"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (rnd5 < 5) {
				rnd4 = 0;
			}
			if (i < 6) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm7.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd6] + nm7[rnd7] + nm6[rnd4] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				if (rnd < 4) {
					while (rnd4 < 5) {
						rnd4 = Math.floor(Math.random() * nm4.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd4];
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm4[rnd4];
			}
		}
		return names;
	}

}