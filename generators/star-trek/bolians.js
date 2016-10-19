function generator$star_trek$bolians(type) {
	var nm1 = ["Ado", "Ara", "Ardo", "Ba", "Bo", "Bra", "Che", "Co", "Cra", "Da", "Dai", "Dri", "Ga", "Grai", "Gri", "Ha", "Hi", "Hra", "La", "Li", "Lo", "Ma", "Mai", "Mo", "Na", "Ni", "No", "Oda", "Ori", "Orla", "Qa", "Qe", "Qhi", "Ra", "Rai", "Ri", "Sa", "Sho", "Sra", "The", "To", "Tra", "Va", "Vo", "Vri", "Xa", "Xai", "Xi", "Ya", "Yai", "Ye", "Za", "Zai", "Zi"];
	var nm2 = ["d", "dar", "daw", "ds", "f", "fe", "fel", "fer", "g", "ge", "gg", "gon", "k", "ken", "kin", "kk", "l", "lar", "ll", "ls", "m", "man", "mix", "ms", "n", "nd", "nn", "nor", "q", "q'no", "q'ra", "q'si", "q'ta", "qar", "r", "ran", "rr", "rs", "s", "sh", "sia", "ss", "t", "thaw", "tix", "tt", "w", "wd", "wer", "ws", "x", "xin", "xor", "xx"];
	var nm3 = ["Ala", "Ana", "Ara", "Bela", "Bine", "By", "Che", "Cia", "Cila", "Di", "Dire", "Do", "Eli", "Ena", "Era", "Fely", "Fri", "Fy", "Gile", "Go", "Gy", "He", "Hia", "Hira", "Keno", "Kise", "Ky", "Lena", "Lo", "Ly", "Mi", "Mite", "My", "Myne", "Nera", "Ni", "Ny", "Oli", "Ora", "Oshe", "Qena", "Qhi", "Qi", "Rely", "Ri", "Ria", "Se", "Seri", "So", "Tia", "Tri", "Ty", "Veli", "Vira", "Vy", "Wane", "Wile", "Wy", "Ya", "Yle", "Yra", "Ze", "Zi"];
	var nm4 = ["des", "dia", "dit", "dra", "ha", "hara", "his", "hya", "kena", "kia", "kis", "kye", "lara", "lea", "leya", "lwat", "mena", "mia", "mis", "moya", "na", "ndis", "ndra", "nila", "sea", "sen", "sia", "sina", "tea", "tena", "tia", "tra", "ves", "vil", "vria", "vya", "wela", "wia", "win", "wira", "xea", "xena", "xia", "xis", "zena", "zia", "zila", "zira"];
	var nm5 = ["Adi", "Ara", "Arli", "Bela", "Bore", "Bro", "Cha", "Chu", "Cora", "Dina", "Do", "Dra", "Era", "Erno", "Esra", "Fera", "Fo", "Fro", "Gadi", "Gara", "Gro", "Ha", "Hera", "Ho", "Kera", "Ki", "Kra", "La", "Lica", "Lyna", "Ma", "Mari", "Mo", "Na", "Ne", "Nora", "Ora", "Orna", "Oro", "Qa", "Qira", "Qo", "Ra", "Re", "Rina", "Sa", "Sina", "So", "Tado", "Tari", "Tra", "Va", "Vade", "Viro", "Wa", "Wera", "Wora", "Xa", "Xira", "Xo", "Za", "Zira", "Zo"];
	var nm6 = ["d", "das", "dd", "din", "f", "far", "ff", "fit", "g", "gg", "git", "gon", "ha", "har", "hino", "ht", "l", "lar", "lin", "ll", "mar", "min", "mm", "nar", "nat", "nin", "nn", "ra", "ras", "ro", "rr", "sa", "sin", "slo", "ss", "ta", "ten", "tor", "tt", "wa", "was", "wat"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			names = nm3[rnd] + nm4[rnd2] + " " + nm5[rnd3] + nm6[rnd4];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			names = nm1[rnd] + nm2[rnd2] + " " + nm5[rnd3] + nm6[rnd4];
		}
		return names;
	}

}