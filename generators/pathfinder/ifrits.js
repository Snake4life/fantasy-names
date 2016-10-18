var nm1 = ["", "", "", "", "b", "d", "g", "j", "k", "m", "n", "r", "t", "v", "z"];
var nm2 = ["a", "e", "i", "u"];
var nm3 = ["c", "f", "g", "j", "k", "l", "m", "n", "q", "r", "v"];
var nm4 = ["", "", "", "d", "g", "h", "j", "l", "m", "n", "q", "t"];
var nm5 = ["", "", "", "c", "f", "g", "h", "l", "m", "n", "q", "s", "w", "z"];
var nm6 = ["a", "e", "i"];
var nm7 = ["d", "dw", "dr", "h", "l", "lr", "ly", "m", "ml", "mr", "n", "nr", "nl", "q", "qh", "qr", "r", "rh", "ry", "rl", "t", "ty", "th", "tw", "tr", "w", "y"];
var nm8 = ["", "", "", "", "", "", "", "", "h", "n", "s"];

function generator$pathfinder$ifrits(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 8) {
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5];
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd6] + nm2[rnd7] + nm8[rnd5];
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		}
		return names;
	}

}