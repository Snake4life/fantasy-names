var nm1 = ["a", "e", "i", "o", "u", "", "", "", "", "", ""];
var nm2 = ["b", "c", "d", "g", "k", "l", "m", "n", "r", "s", "t"];
var nm3 = ["a", "e", "i", "o", "u", "ei", "aa", "oa"];
var nm4 = ["b", "c", "d", "g", "k", "l", "m", "n", "r", "s", "t", "b", "c", "d", "g", "k", "l", "m", "n", "r", "s", "t", "br", "cr", "dr", "gr", "kr", "mr", "nr", "tr", "sb", "sd", "sl", "sm", "sn", "sr", "str", "ndr", "nd", "ng", "nk", "nl", "nt", "tt", "rr", "bb", "dd", "gg"];
var nm5 = ["a", "e", "i", "o", "u"];
var nm6 = ["m", "n", "s", "d", "h", "l"];

var nm7 = ["d", "h", "j", "k", "l", "lw", "m", "n", "st", "t", "r", "rw", "v"];
var nm8 = ["a", "e", "i", "o", "u", "ea", "ee", "ia"];
var nm9 = ["d", "h", "l", "ll", "nn", "mm", "n", "m", "rr", "r", "s", "ss", "str", "v", "vr", "x", "y"];
var nm10 = ["a", "e", "i", "o"];
var nm11 = ["d", "h", "l", "n", "m", "r", "s", "v", "x", "y"];
var nm12 = ["t", "h", "w", "n", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var nm13 = ["a", "e", "i", "o", "u", "", "", "", "", "", ""];
var nm14 = ["b", "d", "g", "h", "k", "m", "n", "r", "s", "t", "v", "z", "gr", "dr", "tr", "br", "ch"];
var nm15 = ["a", "e", "i", "o", "u", "oi", "aa", "ea", "ai", "ei"];
var nm16 = ["b", "c", "d", "g", "k", "l", "lbr", "m", "n", "r", "s", "str", "t", "v", "x", "z"];
var nm17 = ["x", "n", "r", "l", "m", "k", "d", "t", "", "", "", "", "", ""];

function generator$star_trek$betazoids(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm7.length);
				rnd2 = Math.floor(Math.random() * nm8.length);
				rnd3 = Math.floor(Math.random() * nm9.length);
				rnd4 = Math.floor(Math.random() * nm10.length);
				rnd5 = Math.floor(Math.random() * nm12.length);
				rnd6 = Math.floor(Math.random() * nm13.length);
				rnd7 = Math.floor(Math.random() * nm14.length);
				rnd8 = Math.floor(Math.random() * nm15.length);
				rnd9 = Math.floor(Math.random() * nm16.length);
				rnd10 = Math.floor(Math.random() * nm5.length);
				rnd11 = Math.floor(Math.random() * nm17.length);
				names = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm12[rnd5] + " " + nm13[rnd6] + nm14[rnd7] + nm15[rnd8] + nm16[rnd9] + nm5[rnd10] + nm17[rnd11];
			} else {
				rnd = Math.floor(Math.random() * nm7.length);
				rnd2 = Math.floor(Math.random() * nm8.length);
				rnd3 = Math.floor(Math.random() * nm9.length);
				rnd4 = Math.floor(Math.random() * nm10.length);
				rnd5 = Math.floor(Math.random() * nm11.length);
				rnd6 = Math.floor(Math.random() * nm10.length);
				rnd7 = Math.floor(Math.random() * nm12.length);
				rnd8 = Math.floor(Math.random() * nm13.length);
				rnd9 = Math.floor(Math.random() * nm14.length);
				rnd10 = Math.floor(Math.random() * nm15.length);
				rnd12 = Math.floor(Math.random() * nm17.length);
				names = nm7[rnd] + nm8[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5] + nm10[rnd6] + nm12[rnd7] + " " + nm13[rnd8] + nm14[rnd9] + nm15[rnd10] + nm17[rnd12];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				rnd7 = Math.floor(Math.random() * nm13.length);
				rnd8 = Math.floor(Math.random() * nm14.length);
				rnd9 = Math.floor(Math.random() * nm15.length);
				rnd11 = Math.floor(Math.random() * nm17.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + " " + nm13[rnd7] + nm14[rnd8] + nm15[rnd9] + nm17[rnd11];
			} else {
				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm4.length);
				rnd3 = Math.floor(Math.random() * nm5.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				rnd6 = Math.floor(Math.random() * nm13.length);
				rnd7 = Math.floor(Math.random() * nm14.length);
				rnd8 = Math.floor(Math.random() * nm15.length);
				rnd9 = Math.floor(Math.random() * nm16.length);
				rnd10 = Math.floor(Math.random() * nm5.length);
				rnd11 = Math.floor(Math.random() * nm17.length);
				names = nm3[rnd] + nm4[rnd2] + nm5[rnd3] + nm6[rnd4] + " " + nm13[rnd6] + nm14[rnd7] + nm15[rnd8] + nm16[rnd9] + nm5[rnd10] + nm17[rnd11];
			}
		}
		return names;
	}

}