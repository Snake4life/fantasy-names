function generator$real$burmese_myanmars(type) {
	var nm2 = ["Aeindra", "Ag", "Aung", "Aye", "Cho", "Ei", "Eindra", "Eka", "Hayma", "Haymar", "Hlaing", "Hline", "Hnin", "Hsu", "Htay", "Htet", "Htun", "Inzali", "Kay", "Khaing", "Khin", "Khine", "Kyaw", "Le", "Marlar", "May", "Mon", "Myat", "Myint", "Myitzu", "Naing", "Nanda", "Nandar", "New", "Nhin", "Nila", "Nilar", "Nine", "Nway", "Nwe", "Ohmar", "Ommar", "Phone", "Phyo", "Phyu", "Pwint", "San", "Sanda", "Sandar", "Su", "Thanda", "Thandar", "Thawda", "Thawdar", "Thawka", "Theingi", "Thet", "Thi", "Thida", "Thidar", "Thin", "Thinza", "Thinzar", "Thiri", "Thu", "Thuzar", "Tun", "U", "Win", "Yadana", "Yadanar", "Yati", "Yee", "Yi", "Yin", "Yu", "Yuzana", "Zar", "Zaw", "Zin"];
	var nm1 = ["Ag", "Arkar", "Aung", "Bo", "Hein", "Htet", "Htun", "Htut", "Kan", "Kaung", "Khaing", "Khant", "Khine", "Ko", "Kyaw", "Lin", "Linn", "Maung", "Mg", "Min", "Myat", "Myint", "Myo", "Naing", "Nyan", "Phone", "Phyo", "Phyoe", "Pyae", "Pyay", "Sein", "Soe", "Thant", "Thawda", "Thet", "Thiha", "Thu", "Thura", "Thurein", "Thuta", "Tun", "U", "Wai", "Win", "Wunna", "Yarzar", "Yaza", "Ye", "Zarni", "Zaw", "Zeya", "Zeyar", "Zin"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 4) {
				rnd = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				names = nm2[rnd] + " " + nm2[rnd2];
			} else if (i < 7) {
				rnd = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm2.length);
				names = nm2[rnd] + " " + nm2[rnd2] + " " + nm2[rnd3];
			} else {
				rnd = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm2.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm2[rnd] + " " + nm2[rnd2] + " " + nm2[rnd3] + " " + nm2[rnd4];
			}
		} else {
			if (i < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm1.length);
				names = nm1[rnd] + " " + nm1[rnd2];
			} else if (i < 7) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm1.length);
				rnd3 = Math.floor(Math.random() * nm1.length);
				names = nm1[rnd] + " " + nm1[rnd2] + " " + nm1[rnd3];
			} else {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm1.length);
				rnd3 = Math.floor(Math.random() * nm1.length);
				rnd4 = Math.floor(Math.random() * nm1.length);
				names = nm1[rnd] + " " + nm1[rnd2] + " " + nm1[rnd3] + " " + nm1[rnd4]
			}
		}
		return names;
	}

}