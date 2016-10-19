function generator$halo$sangheilis(type) {
	var nm1 = ["b", "c", "d", "f", "gr", "j", "k", "kh", "l", "mr", "n'th", "r", "rt", "s", "t", "th", "v", "x", "z", "", ""];
	var nm2 = ["a", "e", "i", "o", "u", "y"];
	var nm3 = ["da", "do", "g", "ga", "ha", "ka", "kan", "ko", "l", "la", "pa", "po", "r", "ra", "re", "ro", "s", "sa", "san", "so", "sze", "t", "ta", "tan", "to", "va", "vo", "vu", "za", "ze", "zo"];
	var nm4 = ["Cha", "Da", "Dra", "Ga", "Go", "Ha", "Ka", "Ko", "Kra", "Ku", "La", "Lo", "Lu", "Ma", "Mda", "Mo", "Mu", "Na", "Nra", "Nu", "Ra", "Re", "Ro", "Sa", "Sra", "Su", "Ta", "Te", "Tra", "Tu", "Va", "Vo", "Vra", "Vu", "Wa", "Za", "Zo", "Zu"];
	var nm5 = ["cam", "dam", "dom", "dum", "fam", "fum", "gam", "gram", "gum", "ham", "hom", "kam", "lcam", "lkam", "ma", "man", "nam", "ngam", "nom", "ntak", "ralum", "ram", "rom", "rum", "sam", "sov", "sum", "tam", "tan", "ttin", "tum", "vam", "vum", "zam", "zum"];
	var nm6 = ["b", "c", "d", "f", "h", "g", "k", "kh", "l", "m", "n", "r", "sh", "s", "t", "th", "v", "x", "z"];
	var nm7 = ["a", "e", "o", "u"];
	var nm8 = ["ea", "ha", "he", "ia", "ie", "io", "la", "le", "lo", "ma", "me", "mi", "mo", "n", "na", "ne", "pa", "sa", "se", "sha", "she", "so", "wa", "we", "xa", "xe", "xi", "ya", "ye", "yo"];
	var nm9 = ["", "", "ee", "", "ai"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm9.length);
			names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + " '" + nm4[rnd4] + nm5[rnd5] + nm9[rnd6];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm9.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + " '" + nm4[rnd4] + nm5[rnd5] + nm9[rnd6];
		}
		return names;
	}

}