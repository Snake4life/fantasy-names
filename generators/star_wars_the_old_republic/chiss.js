function generator$star_wars_the_old_republic$chiss() {
	var nm1 = ["B", "C", "D", "G", "H", "J", "K", "M", "N", "P", "R", "S", "T", "V", "W", "Z"];
	var nm2 = ["a", "e", "u", "i", "o", "a", "e", "u", "i", "o", "ra", "re", "ru", "ri", "ro", "la", "le", "lu", "li", "lo"];
	var nm3 = ["th", "tth", "tt", "s", "ss", "sh", "st", "sd", "g", "gh", "w", "q", "qh", "r", "rr", "rs", "rt", "rd", "rg", "rk", "rm", "rn", "c", "rc", "sk", "z", "zz", "m", "mm", "n", "ng"];
	var nm4 = ["i", "a", "o", "e", "u", "", "", "", "", "", "", "", ""];

	var nm5 = ["b", "c", "d", "g", "h", "m", "n", "l", "p", "r", "s", "t", "v", "w", "z", "b", "c", "d", "g", "h", "m", "n", "l", "p", "r", "s", "t", "v", "w", "z", "ab", "ac", "ad", "ag", "ah", "am", "an", "al", "ap", "ar", "as", "at", "av", "aw", "az", "ob", "oc", "od", "og", "oh", "om", "on", "ol", "op", "or", "os", "ot", "ov", "ow", "oz", "ib", "ic", "id", "ig", "ih", "im", "in", "il", "ip", "ir", "is", "it", "iv", "iw", "iz", "eb", "ec", "ed", "eg", "eh", "em", "en", "el", "ep", "er", "es", "et", "ev", "ew", "ez"];
	var nm6 = ["a", "e", "u", "i", "o", "a", "e", "u", "i", "o", "a", "e", "u", "i", "o", "ae", "ea", "au", "ua", "ao", "oa", "ou", "uo", "ia", "ai"];
	var nm7 = ["n", "t", "th", "w", "l", "m", "sh", "s", "k", "w", "z", "r"];
	var nm8 = ["i", "a", "o", "e", "u", "", "", "", "", "", "", "", ""];

	var nm9 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "z", "", "", "", "", "", "", "", "", "", ""];
	var nm10 = ["a", "e", "u", "i", "o", "a", "e", "u", "i", "o", "ra", "re", "ru", "ri", "ro", "la", "le", "lu", "li", "lo", "ae", "ea", "au", "ua", "ao", "oa", "ou", "uo", "ia", "ai"];
	var nm11 = ["th", "tth", "tt", "s", "s", "s", "g", "g", "r", "r", "c", "c", "m", "m", "n", "n", "z", "z", "ss", "sh", "st", "sd", "g", "gh", "w", "q", "qh", "r", "rr", "rs", "rt", "rd", "rg", "rk", "rm", "rn", "c", "rc", "sk", "z", "zz", "m", "mm", "n", "ng"];
	var nm12 = ["i", "a", "o", "e", "u"];
	var nm13 = ["th", "tth", "tt", "s", "s", "s", "g", "g", "r", "r", "c", "c", "m", "m", "n", "n", "z", "z", "ss", "sh", "st", "sd", "g", "gh", "w", "q", "qh", "r", "rr", "rs", "rt", "rd", "rg", "rk", "rm", "rn", "c", "rc", "sk", "z", "zz", "m", "mm", "n", "ng", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm14 = ["i", "a", "o", "e", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		rnd5 = Math.floor(Math.random() * nm5.length);
		rnd6 = Math.floor(Math.random() * nm6.length);
		rnd7 = Math.floor(Math.random() * nm7.length);
		rnd8 = Math.floor(Math.random() * nm8.length);
		rnd9 = Math.floor(Math.random() * nm9.length);
		rnd10 = Math.floor(Math.random() * nm10.length);
		rnd11 = Math.floor(Math.random() * nm11.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		rnd13 = Math.floor(Math.random() * nm13.length);
		rnd14 = Math.floor(Math.random() * nm14.length);
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + "'" + nm5[rnd5] + nm6[rnd6] + nm7[rnd7] + nm8[rnd8] + "'" + nm9[rnd9] + nm10[rnd10] + nm11[rnd11] + nm12[rnd12] + nm13[rnd13] + nm14[rnd14];
		return names;
	}

}