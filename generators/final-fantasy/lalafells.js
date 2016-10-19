function generator$final_fantasy$lalafells(type) {
	var nm1 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "y", "ch", "sh"];
	var nm2 = ["a", "e", "i", "o", "u"];
	var nm3 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "y", "ch", "sh"];
	var nm4 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "r", "l", "s", "n", "g"];
	var nm5 = ["", "a", "e", "i", "o", "u"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm1.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm1[rnd] + nm2[rnd2] + nm1[rnd3] + nm2[rnd4] + " " + nm1[rnd] + nm2[rnd2] + nm1[rnd3] + nm2[rnd4];
			} else {
				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm1.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm3[rnd] + nm2[rnd2] + nm1[rnd3] + nm2[rnd4] + nm1[rnd3] + nm2[rnd4] + " " + nm3[rnd] + nm2[rnd2] + nm1[rnd3] + nm2[rnd4];
			}
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm1.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm1.length);
				rnd6 = Math.floor(Math.random() * nm2.length);
				rnd7 = Math.floor(Math.random() * nm1.length);
				rnd8 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm1[rnd] + nm2[rnd2] + nm1[rnd3] + nm2[rnd4] + nm1[rnd5] + nm2[rnd6] + " " + nm1[rnd7] + nm2[rnd8] + nm1[rnd7] + nm2[rnd8] + nm1[rnd3] + nm2[rnd4] + nm1[rnd5] + nm2[rnd6];
			} else {

				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm4.length);
				rnd4 = Math.floor(Math.random() * nm1.length);
				rnd5 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm5.length);
				if (rnd6 < 15) {
					rnd7 = 0;
				}
				if (rnd6 > 14) {
					while (rnd7 === 0) {
						rnd7 = Math.floor(Math.random() * nm5.length);
					}
				}
				rnd8 = Math.floor(Math.random() * nm4.length);
				rnd9 = Math.floor(Math.random() * nm1.length);
				rnd10 = Math.floor(Math.random() * nm2.length);
				rnd11 = Math.floor(Math.random() * nm3.length);
				rnd12 = Math.floor(Math.random() * nm5.length);
				if (rnd11 < 15) {
					rnd12 = 0;
				}
				if (rnd11 > 14) {
					while (rnd12 === 0) {
						rnd12 = Math.floor(Math.random() * nm5.length);
					}
				}
				names = nm3[rnd] + nm2[rnd2] + nm4[rnd3] + nm1[rnd4] + nm2[rnd5] + nm3[rnd6] + nm5[rnd7] + nm4[rnd8] + " " + nm1[rnd9] + nm2[rnd10] + nm3[rnd11] + nm5[rnd12] + nm1[rnd4] + nm2[rnd5] + nm3[rnd6] + nm5[rnd7] + nm4[rnd8];
			}
		}
		return names;
	}

}