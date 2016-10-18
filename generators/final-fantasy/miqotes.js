var nm1 = ["A'", "B'", "C'", "D'", "E'", "F'", "G'", "H'", "I'", "J'", "K'", "L'", "M'", "N'", "O'", "P'", "Q'", "R'", "S'", "T'", "U'", "V'", "W'", "X'", "Y'", "Z'"];
var nm2 = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var nm3 = ["a", "e", "o", "i", "u"];
var nm4 = ["", "", "", "a", "e", "o", "i", "u"];
var nm5 = ["", "h"];
var nm6 = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bb", "cc", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "ww", "zz", "cb", "gb", "lb", "mb", "nb", "rb", "bd", "cd", "gd", "ld", "md", "nd", "sd", "rd", "bf", "df", "kf", "lf", "mf", "nf", "pf", "rf", "sf", "tf", "bg", "dg", "lg", "mg", "ng", "rg", "sg", "ck", "lk", "mk", "nk", "pk", "rk", "sk", "tk", "bl", "dl", "fl", "gl", "kl", "ml", "nl", "pl", "rl", "sl", "tl", "bm", "dm", "fm", "gm", "km", "lm", "nm", "pm", "rm", "sm", "tm", "bn", "dn", "fn", "gn", "kn", "mn", "ln", "pn", "rn", "sn", "tn", "br", "cr", "dr", "fr", "gr", "kr", "lr", "mr", "nr", "pr", "sr", "tr", "vr", "wr", "zr", "bs", "cs", "ds", "fs", "gs", "ks", "ls", "ms", "ns", "ps", "rs", "ts", "bt", "ct", "kt", "lt", "mt", "nt", "pt", "rt", "st", "by", "cy", "dy", "fy", "gy", "ky", "ly", "my", "ny", "py", "ry", "sy", "ty"];
var nm7 = ["ei", "au", "aa", "ee", "oo", "aia", "a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "a", "e", "o", "i", "u"];
var nm8 = ["", "", "", "", "", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var nm9 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var nm10 = ["", "a", "e", "o", "i", "u"];
var nm11 = ["'a", "'to", "'li", "'sae", "'ra", "'ir", "'wo", "'ya", "'zi", "'tan"];

function generator$final_fantasy$miqotes(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd10 = Math.floor(Math.random() * nm2.length);
				rnd11 = Math.floor(Math.random() * nm5.length);
				rnd12 = Math.floor(Math.random() * nm7.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				rnd14 = Math.floor(Math.random() * nm5.length);
				if (rnd11 === 1) {
					rnd14 = 0;
				}
				rnd15 = Math.floor(Math.random() * nm7.length);
				if (rnd12 < 6) {
					while (rnd15 < 6) {
						rnd15 = Math.floor(Math.random() * nm7.length);
					}
				}
				rnd16 = Math.floor(Math.random() * nm9.length);
				rnd17 = Math.floor(Math.random() * nm5.length);
				if (rnd11 === 1 || rnd14 === 1) {
					rnd17 = 0;
				}
				rnd18 = Math.floor(Math.random() * nm10.length);
				if (rnd16 < 16) {
					rnd17 = 0;
					rnd18 = 0;
				} else {
					while (rnd18 === 0) {
						rnd18 = Math.floor(Math.random() * nm10.length);
					}
				}
				rnd19 = Math.floor(Math.random() * nm11.length);
				names = nm1[rnd] + nm6[rnd10] + nm5[rnd11] + nm7[rnd12] + nm6[rnd13] + nm5[rnd14] + nm7[rnd15] + nm9[rnd16] + nm5[rnd17] + nm10[rnd18];
			} else {
				rnd2 = Math.floor(Math.random() * nm8.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				rnd7 = Math.floor(Math.random() * nm5.length);
				rnd8 = Math.floor(Math.random() * nm5.length);
				if (rnd8 < 5) {
					rnd6 = 0;
					while (rnd5 < 3) {
						rnd5 = Math.floor(Math.random() * nm4.length);
					}
				}
				if (rnd6 === 1) {
					rnd7 = 0;
				}
				if (rnd5 < 3) {
					rnd8 = 0;
				}
				rnd10 = Math.floor(Math.random() * nm2.length);
				rnd11 = Math.floor(Math.random() * nm5.length);
				rnd12 = Math.floor(Math.random() * nm7.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				rnd14 = Math.floor(Math.random() * nm5.length);
				if (rnd11 === 1) {
					rnd14 = 0;
				}
				rnd15 = Math.floor(Math.random() * nm7.length);
				if (rnd12 < 6) {
					while (rnd15 < 6) {
						rnd15 = Math.floor(Math.random() * nm7.length);
					}
				}
				rnd16 = Math.floor(Math.random() * nm9.length);
				rnd17 = Math.floor(Math.random() * nm5.length);
				if (rnd11 === 1 || rnd14 === 1) {
					rnd17 = 0;
				}
				rnd18 = Math.floor(Math.random() * nm10.length);
				if (rnd16 < 16) {
					rnd17 = 0;
					rnd18 = 0;
				} else {
					while (rnd18 === 0) {
						rnd18 = Math.floor(Math.random() * nm10.length);
					}
				}
				names = nm8[rnd2] + nm5[rnd6] + nm3[rnd3] + nm5[rnd7] + nm2[rnd4] + nm4[rnd5] + nm5[rnd8] + " " + nm6[rnd10] + nm5[rnd11] + nm7[rnd12] + nm6[rnd13] + nm5[rnd14] + nm7[rnd15] + nm9[rnd16] + nm5[rnd17] + nm10[rnd18];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				rnd7 = Math.floor(Math.random() * nm5.length);
				rnd8 = Math.floor(Math.random() * nm5.length);
				if (rnd6 === 1) {
					rnd7 = 0;
				}
				if (rnd5 < 3) {
					rnd8 = 0;
				}
				names = nm1[rnd] + nm2[rnd2] + nm5[rnd6] + nm3[rnd3] + nm5[rnd7] + nm2[rnd4] + nm4[rnd5] + nm5[rnd8];
			} else {
				rnd2 = Math.floor(Math.random() * nm8.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				rnd7 = Math.floor(Math.random() * nm5.length);
				rnd8 = Math.floor(Math.random() * nm5.length);
				if (rnd8 < 5) {
					rnd6 = 0;
					while (rnd5 < 3) {
						rnd5 = Math.floor(Math.random() * nm4.length);
					}
				}
				if (rnd6 === 1) {
					rnd7 = 0;
				}
				if (rnd5 < 3) {
					rnd8 = 0;
				}
				rnd10 = Math.floor(Math.random() * nm2.length);
				rnd11 = Math.floor(Math.random() * nm5.length);
				rnd12 = Math.floor(Math.random() * nm7.length);
				rnd13 = Math.floor(Math.random() * nm6.length);
				rnd14 = Math.floor(Math.random() * nm5.length);
				if (rnd11 === 1) {
					rnd14 = 0;
				}
				rnd15 = Math.floor(Math.random() * nm7.length);
				if (rnd12 < 6) {
					while (rnd15 < 6) {
						rnd15 = Math.floor(Math.random() * nm7.length);
					}
				}
				rnd16 = Math.floor(Math.random() * nm9.length);
				rnd17 = Math.floor(Math.random() * nm5.length);
				if (rnd11 === 1 || rnd14 === 1) {
					rnd17 = 0;
				}
				rnd18 = Math.floor(Math.random() * nm10.length);
				if (rnd16 < 16) {
					rnd17 = 0;
					rnd18 = 0;
				} else {
					while (rnd18 === 0) {
						rnd18 = Math.floor(Math.random() * nm10.length);
					}
				}
				rnd19 = Math.floor(Math.random() * nm11.length);
				names = nm8[rnd2] + nm5[rnd6] + nm3[rnd3] + nm5[rnd7] + nm2[rnd4] + nm4[rnd5] + nm5[rnd8] + nm11[rnd19] + " " + nm6[rnd10] + nm5[rnd11] + nm7[rnd12] + nm6[rnd13] + nm5[rnd14] + nm7[rnd15] + nm9[rnd16] + nm5[rnd17] + nm10[rnd18];
			}
		}
		return names;
	}

}