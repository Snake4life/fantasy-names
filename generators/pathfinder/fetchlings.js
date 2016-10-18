var nm1 = ["", "", "", "br", "dr", "gr", "j", "m", "n", "q", "qr", "r", "s", "tr", "x", "y", "z"];
var nm2 = ["a", "e", "i", "o", "u"];
var nm3 = ["c", "d", "g", "h", "j", "k", "l", "m", "n", "r", "s", "t", "v", "z"];
var nm4 = ["", "", "", "c", "h", "l", "m", "n", "r", "t", "x"];
var nm5 = ["c", "f", "g", "h", "l", "m", "n", "q", "r", "s", "t", "th", "v", "y", "z"];
var nm7 = ["c", "fz", "fn", "g", "gv", "gn", "gz", "h", "hn", "hv", "hz", "l", "lv", "lr", "ls", "lz", "m", "mr", "mv", "mz", "nv", "nz", "nr", "r", "rr", "rs", "rz", "rh", "rv", "sc", "sh", "sr", "sv", "th", "thr", "tv", "tn"];
var nm8 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "h", "l", "m", "n", "s", "x"];

function generator$pathfinder$fetchlings(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 6) {
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
			if (rnd < 3) {
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		}
		return names;
	}

}