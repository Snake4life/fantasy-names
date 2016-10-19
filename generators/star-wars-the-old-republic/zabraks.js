function generator$star_wars_the_old_republic$zabraks(type) {
	var nm1 = ["A", "O", "E", "U", "B", "Br", "Bl", "D", "Dr", "G", "Gr", "H", "K", "Kr", "Kl", "M", "N", "P", "Q", "R", "S", "St", "T", "V", "Vr", "X"];
	var nm2 = ["a", "o", "u", "e"];
	var nm3 = ["ra", "ro", "ru", "rga", "rgo", "rgu", "rge", "ba", "bo", "bu", "bra", "bru", "bro", "da", "do", "du", "dra", "dru", "dro", "ga", "go", "gu", "gro", "gra", "gru", "ka", "ko", "ku", "ke", "kra", "kro", "kru", "ma", "mo", "mu", "na", "no", "nu", "pa", "po", "pu", "pra", "pro", "pru", "qa", "qo", "qu", "sa", "so", "su", "sra", "sro", "sru", "sta", "sto", "stu", "ta", "to", "tu", "tra", "tro", "tru", "va", "vo", "vu", "vra", "vro", "vru", "xa", "xo", "xu"];
	var nm4 = ["d", "g", "k", "m", "n", "p", "r", "s", "t", "x", "", "", "", "", "", "", "", "", ""];
	var nm5 = ["a", "o", "u", "e", "", "", "", "", "", "", ""];
	var nm6 = ["A", "O", "E", "B", "Bl", "D", "G", "H", "K", "Kl", "L", "M", "N", "P", "Q", "R", "S", "St", "T", "V", "Vr", "X", "W"];
	var nm7 = ["ba", "be", "bi", "bo", "bra", "bre", "bri", "bro", "da", "de", "di", "do", "dra", "dre", "dri", "dro", "ga", "ge", "gi", "go", "gra", "gre", "gri", "gro", "ka", "ke", "ki", "ko", "kra", "kre", "kri", "kro", "ma", "me", "mi", "mo", "na", "ne", "ni", "no", "pa", "pe", "pi", "po", "pra", "pre", "pri", "pro", "qa", "qe", "qi", "qo", "ra", "re", "rga", "rge", "rgi", "rgo", "ri", "ro", "sa", "se", "si", "so", "sra", "sre", "sri", "sro", "sta", "ste", "sti", "sto", "ta", "te", "ti", "to", "tra", "tre", "tri", "tro", "va", "ve", "vi", "vo", "vra", "vre", "vri", "vro", "xa", "xe", "xi", "xo"];
	var nm8 = ["a", "o", "u", "e", "i", "", "", "", ""];


	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			names = nm6[rnd] + nm2[rnd2] + nm7[rnd3] + nm4[rnd4] + nm8[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
		}
		return names;
	}

}