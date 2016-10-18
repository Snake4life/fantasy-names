var nm1 = ["b", "br", "d", "dr", "dw", "f", "fl", "fr", "g", "gl", "gr", "k", "kh", "kr", "l", "m", "mh", "n", "t", "th", "thr"];
var nm2 = ["a", "e", "i", "o", "u"];
var nm3 = ["b", "f", "fr", "l", "lb", "lr", "lv", "m", "mb", "ml", "mr", "n", "nd", "nr", "r", "rb", "rl", "rv", "s", "sr"];
var nm4 = ["k", "m", "n", "r"];
var nm5 = ["a", "ai", "e", "i", "o", "oi", "u"];
var nm6 = ["b", "d", "f", "g", "k", "l", "m", "n", "t"];
var nm7 = ["a", "e", "i", "o", "u", "", "", "", ""];

function generator$lord_of_the_rings$dwarfs() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			names = nm1[rnd] + nm5[rnd2] + nm6[rnd3] + nm7[rnd4];
		}
		return names;
	}

}