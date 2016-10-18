var nm1 = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "Z"];
var nm2 = ["oo", "a", "o"];
var nm3 = ["", "d", "n", "r", "l", "b", "k"];
var nm4 = ["b", "d", "k", "p", "r"];
var nm5 = ["y", "ey"];
var nm6 = ["ee", "i", "o"];
var nm7 = ["", "n", "s", "l", "b", "m", "p"];
var nm8 = ["k", "n", "s", "l", "m", "p"];

function generator$harry_potter$house_elfs(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			if (rnd2 === 0) {
				rnd3 = 0;
			} else {
				while (rnd3 === 0) {
					rnd3 = Math.floor(Math.random() * nm7.length);
				}
			}
			rnd4 = Math.floor(Math.random() * nm8.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm6[rnd2] + nm7[rnd3] + nm8[rnd4] + nm5[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			if (rnd2 === 0) {
				rnd3 = 0;
			} else {
				while (rnd3 === 0) {
					rnd3 = Math.floor(Math.random() * nm3.length);
				}
			}
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
		}
		return names;
	}

}