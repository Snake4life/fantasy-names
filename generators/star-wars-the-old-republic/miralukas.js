var nm1 = ["A", "B", "Ch", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", ""];
var nm2 = ["i", "a", "o", "e", "u"];
var nm3 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z"];
var nm4 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm5 = ["i", "a", "o", "e", "u", "", "", "", "", "", "", "", "", "", ""];
var nm6 = ["c", "d", "f", "h", "hr", "hk", "hl", "k", "l", "m", "n", "p", "r", "rr", "rth", "s", "t", "th", "y"];

var nm7 = ["A", "B", "Ch", "D", "E", "F", "Fl", "G", "Gl", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "Sh", "Sl", "T", "U", "V", "W", "X", "Y", "Z"];
var nm8 = ["i", "a", "o", "e", "u", "", "", ""];

function generator$star_wars_the_old_republic$miralukas(type) {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd2b = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		rnd6 = Math.floor(Math.random() * nm6.length);
		if (type === 1) {
			rnd1 = Math.floor(Math.random() * nm7.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			names = nm7[rnd1] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd2b] + nm8[rnd5] + nm6[rnd6];
		} else {
			rnd1 = Math.floor(Math.random() * nm1.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd2b] + nm5[rnd5] + nm6[rnd6];
		}
		return names;
	}

}