function generator$legend_of_zelda$minishs() {
	var nm1 = ["B", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "T"];
	var nm2 = ["e", "i", "o", "e", "i", "o", "a", "u"];
	var nm3 = ["b", "d", "f", "g", "k", "l", "m", "n", "p", "r", "s", "t"];
	var nm4 = ["ari", "tari", "rari"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
		return names;
	}

}