var nm1 = ["B", "Br", "Ch", "C", "Cr", "D", "Dv", "Fr", "F", "G", "Gl", "Gr", "H", "J", "K", "Kh", "L", "M", "N", "Pr", "R", "Sh", "Sk", "T", "Th", "Tr", "V", "W", "X", "Z", "Zh"];
var nm2 = ["aa", "ao", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "o"];
var nm3 = ["bl", "fr", "g", "gr", "hr", "l", "ll", "nn", "nk", "r", "rgg", "rk", "s", "shl", "shn", "vr", "rt"];
var nm4 = ["ch", "g", "gm", "k", "llv", "m", "n", "nn", "nch", "nd", "r", "rsh", "rc", "rg", "rv", "th", "s", "sh", "ss", "v"];
var nm5 = ["", "", "", "", "", "", "", "", " bav", " bim", " blasch", " chim", " glasch", " glov", " lorin", " jav"];

var nm6 = ["B", "Bl", "Ch", "C", "Cl", "D", "Fr", "Fr", "F", "G", "Gl", "Gh", "H", "J", "K", "Kh", "L", "M", "N", "P", "R", "Sh", "Sk", "T", "Th", "Tl", "V", "W", "Z", "Zh"];
var nm8 = ["bl", "f", "ff", "g", "gg", "gr", "hr", "hl", "l", "ll", "nn", "nk", "r", "rk", "s", "ss", "shl", "shn", "v", "rth", "th", "t", "tt"];
var nm9 = ["", "", "", "", "", "", "ch", "f", "g", "gh", "hg", "hk", "l", "ll", "m", "n", "nn", "nsh", "nd", "p", "r", "rr", "rs", "rg", "rn", "th", "s", "sh", "ss", "v", "w"];
var nm10 = ["ch", "f", "g", "gh", "hg", "hk", "l", "ll", "m", "n", "nn", "nsh", "nd", "p", "r", "rr", "rs", "rg", "rn", "th", "s", "sh", "ss", "v", "w"];
var nm11 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "aa", "ao", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "o"];

var nm12 = ["B", "Bl", "Br", "C", "Ch", "Cl", "Cr", "D", "Dv", "F", "Fr", "G", "Gh", "Gl", "Gr", "H", "J", "K", "Kh", "L", "M", "N", "P", "Pr", "R", "Sh", "Sk", "T", "Th", "Tl", "Tr", "V", "W", "X", "Z", "Zh"];
var nm13 = ["bl", "f", "ff", "fr", "g", "gg", "gr", "hl", "hr", "l", "ll", "nk", "nn", "r", "rgg", "rk", "rth", "s", "shl", "shn", "ss", "t", "th", "tt", "v", "vr"];
var nm14 = ["ch", "f", "g", "gh", "gm", "hg", "hk", "k", "l", "ll", "llv", "m", "n", "nch", "nd", "nn", "nsh", "p", "r", "rc", "rg", "rn", "rr", "rs", "rsh", "rv", "s", "sh", "ss", "th", "v", "w"];

function generator$star_trek$tellarites(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm8.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm9.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				rnd7 = Math.floor(Math.random() * nm12.length);
				rnd8 = Math.floor(Math.random() * nm2.length);
				rnd9 = Math.floor(Math.random() * nm14.length);
				names = nm6[rnd] + nm2[rnd2] + nm8[rnd3] + nm2[rnd4] + nm9[rnd5] + nm5[rnd6] + " " + nm12[rnd7] + nm2[rnd8] + nm14[rnd9];
			} else {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm10.length);
				rnd4 = Math.floor(Math.random() * nm11.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				rnd6 = Math.floor(Math.random() * nm12.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm2.length);
				rnd10 = Math.floor(Math.random() * nm14.length);
				names = nm6[rnd] + nm2[rnd2] + nm10[rnd3] + nm11[rnd4] + nm5[rnd5] + " " + nm12[rnd6] + nm2[rnd7] + nm13[rnd8] + nm2[rnd9] + nm14[rnd10];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm4.length);
				rnd4 = Math.floor(Math.random() * nm5.length);
				rnd5 = Math.floor(Math.random() * nm12.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				rnd7 = Math.floor(Math.random() * nm13.length);
				rnd8 = Math.floor(Math.random() * nm2.length);
				rnd9 = Math.floor(Math.random() * nm14.length);
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd3] + nm5[rnd4] + " " + nm12[rnd5] + nm2[rnd6] + nm13[rnd7] + nm2[rnd8] + nm14[rnd9];
			} else {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				rnd7 = Math.floor(Math.random() * nm12.length);
				rnd8 = Math.floor(Math.random() * nm2.length);
				rnd9 = Math.floor(Math.random() * nm14.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm5[rnd6] + " " + nm12[rnd7] + nm2[rnd8] + nm14[rnd9];
			}
		}
		return names;
	}

}