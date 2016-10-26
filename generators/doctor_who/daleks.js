function generator$doctor_who$daleks() {
	var nm1 = ["C", "Ch", "D", "Dh", "G", "Gh", "K", "Kh", "R", "S", "Th", "V"];
	var nm2 = ["a", "aa", "e", "a", "e", "a", "e", "i", "o"];
	var nm3 = ["c", "d", "k", "m", "n", "r", "s", "ss", "st", "t", "th", "y"];

	var ext = Math.floor(Math.random() * 150);

	i = Math.floor(Math.random() * 10); {
		if (ext === 1) {
			names = "Exterminate! Exterminate! Exterminate!";
			if (i === 9) {
				names = "Just kidding. :) Enjoy this Easter egg."
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
		}
		return names;
	}

}