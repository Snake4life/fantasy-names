var nm1 = ["A'", "Ch'", "Gr'", "H'", "K'", "Q'", "R'", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm2 = ["B", "C", "Ch", "D", "G", "K", "Q", "R", "S", "Sh", "Sl", "T", "Th", "Y", "V", "Z"];
var nm3 = ["a", "a", "e", "i", "o", "u", "a", "a", "o", "u", "e", "i", "o", "u", "a", "a", "o", "aa", "ai", "ee"];
var nm4 = ["c", "cr", "g", "gg", "gd", "gr", "hr", "hv", "hm", "k", "kh", "kd", "kr", "kv", "km", "kn", "lm", "lr", "lh", "lg", "m", "mr", "mn", "mg", "md", "mv", "n", "nn", "nr", "nv", "q", "qq", "qh", "r", "rr", "rt", "rd", "t", "v", "z", "zh", "zr", "zd"];
var nm5 = ["", "", "", "c", "d", "g", "gg", "k", "n", "q", "r", "r", "rk"];

var nm6 = ["Gk", "Gr", "Gu", "Gg", "Kr", "Kk", "Ku", "Kg", "Or", "Ok", "Og", "Rr", "Rg", "Rk", "Ro", "Ru", "Ur", "Ur", "Ur"];
var nm7 = ["k", "h", "r", "g", "rh", "ur", "or", "orur", "rrur", "rror", "rurr", "orr", "urr", "rorr", "rurr", "orrur", "ror", "rur", "urur"];
var nm8 = ["or", "ok", "ro", "ot", "uk", "rk", "kr", "kk", "oa", "ur", "r", "tl", "ru"];
var nm9 = ["r", "rs", "ruur", "ur", "rur", "urr", "rr", "rt", "urs", "rurs", "ruk"];
var nm10 = ["ak", "ar", "rr", "r", "kt", "rt", "ku", "ra", "ro", "ru"];
var nm11 = ["k", "r", "hr", "ur", "t", "ht", "or", "ar", "ut", "uk"];

var nm12 = ["Ch", "G", "H", "Kh", "L", "Q", "R", "Rh", "Sh", "T", "Th", "V", "Y", "Z"];
var nm13 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "a", "e", "e", "e", "ee", "aa", "ie", "ei"];
var nm14 = ["d", "g", "k", "kk", "kh", "kt", "kz", "q", "qt", "qr", "qz", "rt", "r", "rr", "rh", "rt", "x", "xt", "xr", "z", "zt", "zr"];
var nm15 = ["c", "g", "gh", "k", "n", "m", "rn", "rm", "rr", "rg", "rc", "rh", "rk"];

var nm16 = ["cr", "br", "b", "g", "gr", "h", "k", "kr", "l", "q", "qr", "r", "rh", "s", "sr", "sh", "t", "tr", "th", "y", "v", "z", "zr"];
var nm17 = ["a", "e", "i", "o", "u", "a", "o"];
var nm18 = ["c", "cr", "g", "gg", "gd", "gr", "k", "kh", "kd", "kr", "kv", "km", "kn", "n", "nn", "nr", "nv", "q", "qq", "qh", "r", "rr", "rt", "rd", "t", "v", "z", "zh", "zr", "zd"];
var nm19 = ["c", "ct", "g", "gg", "k", "kt", "n", "q", "qt", "r", "rr", "rk", "rc", "rg", "rq", "rt", "rd", "tt", "t"];

function generator$star_wars$tusken_raiders(type) {

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm16.length);
		rnd8 = Math.floor(Math.random() * nm17.length);
		rnd10 = Math.floor(Math.random() * nm19.length);
		if (i % 2 != 0) {
			namelast = nm16[rnd7] + nm17[rnd8] + nm19[rnd10];
		} else {
			rnd9 = Math.floor(Math.random() * nm17.length);
			rnd11 = Math.floor(Math.random() * nm18.length);
			namelast = nm16[rnd7] + nm17[rnd8] + nm18[rnd11] + nm17[rnd9] + nm19[rnd10];
		}
		if (type === 1) {
			rnd2 = Math.floor(Math.random() * nm12.length);
			rnd3 = Math.floor(Math.random() * nm13.length);
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd4 = Math.floor(Math.random() * nm15.length);
				names = nm1[rnd] + nm12[rnd2] + nm13[rnd3] + nm15[rnd4] + " " + namelast;
			} else {
				rnd = Math.floor(Math.random() * nm14.length);
				rnd4 = Math.floor(Math.random() * nm13.length);
				names = nm12[rnd2] + nm13[rnd3] + nm14[rnd] + nm13[rnd4] + " " + namelast;
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				if (i < 3) {
					names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm5[rnd5] + "  " + namelast;
				} else {
					rnd6 = Math.floor(Math.random() * nm3.length);
					rnd4 = Math.floor(Math.random() * nm4.length);
					names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd6] + nm5[rnd5] + "  " + namelast;
				}
			} else {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm7.length);
				rnd3 = Math.floor(Math.random() * nm8.length);
				rnd4 = Math.floor(Math.random() * nm9.length);
				if (i < 8) {
					names = nm6[rnd] + nm7[rnd2] + "'" + nm8[rnd3] + nm9[rnd4];
				} else {
					rnd5 = Math.floor(Math.random() * nm10.length);
					rnd6 = Math.floor(Math.random() * nm11.length);
					names = nm6[rnd] + nm7[rnd2] + "'" + nm8[rnd3] + nm9[rnd4] + "'" + nm10[rnd5] + nm11[rnd6];
				}
			}
		}
		return names;
	}

}