var names1 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", ""];
var names2 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "gr", "pr", "tr", "ch", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "vl", "st", "str"];
var names3 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "ie", "io", "ai", "ea", "ei", "eo"];
var names4 = ["b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "x", "y", "ld", "lf", "lk", "lm", "ln", "lp", "ls", "lt", "ck", "cs", "ct", "ft", "mn", "ms", "ng", "ns", "ps", "rd", "rg", "rk", "rs", "rt", "sk", "ss", "ll", "st", "sh"];
var names5 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "ie", "io", "ai", "ea", "ei", "eo"];
var names6 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bb", "cc", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "zz", "br", "cr", "gr", "pr", "tr", "ch", "bl", "cl", "fl", "gl", "kl", "pl", "sl", "vl", "st", "str"];
var names7 = ["a", "e", "i", "o", "u", "ia", "io", "ea", "ei", "eo"];
var names8 = [" Accordion", " Bass", " Bow", " Clarinet", " Drum", " Drums", " Flute", " Guitar", " Harmonica", " Horn", " Organ", " Pipe", " Saxophone", " Trombone", " Trumpet", " Tuba", " Violin", " Whistle", "horn", "phone", "pipe", "horn", "phone", "phone", "phone", "phone", "pipe"];
var names9 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "io", "ai", "ea", "eo", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function generator$miscellaneous$instruments() {

	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5];
		} else if (i < 6) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4];
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names9.length);
			rnd6 = Math.floor(Math.random() * names8.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names9[rnd5] + names8[rnd6];
		} else if (i === 8) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names5.length);
			rnd6 = Math.floor(Math.random() * names6.length);
			rnd7 = Math.floor(Math.random() * names7.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5] + names6[rnd6] + names7[rnd7];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names5.length);
			rnd6 = Math.floor(Math.random() * names4.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5] + names4[rnd6];
		}
		return names;
	}

}