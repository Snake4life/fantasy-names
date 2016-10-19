function generator$miscellaneous$wines() {﻿
	var nm1 = ["", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bl", "br", "ch", "cl", "dh", "fr", "fl", "gh", "gr", "sh", "tr"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ueu", "ou", "au", "ai", "ue", "eau", "au", "ei", "ee", "ia", "ie", "io", "uei", "oui", "ieu", "eo"];
	var nm3 = ["bb", "bl", "br", "c", "cc", "cch", "ch", "d", "f", "g", "gd", "gn", "gr", "j", "k", "l", "lb", "lbl", "ldt", "ll", "lr", "ls", "m", "mb", "mbl", "mbr", "mch", "mm", "mp", "n", "nc", "nch", "nd", "ndr", "ng", "nh", "nj", "nk", "nn", "nt", "nth", "ntr", "nv", "pf", "pl", "q", "r", "rb", "rc", "rch", "rd", "rf", "rg", "rgr", "rh", "rl", "rm", "rn", "rr", "rs", "rt", "rth", "rtz", "s", "sb", "sc", "sl", "ss", "ssl", "st", "th", "tt", "v", "vr", "x", "z"];
	var nm4 = ["beit", "bera", "beutel", "blage", "bles", "blis", "bourg", "bria", "cano", "cati", "cchio", "cchus", "ce", "cella", "chage", "che", "chen", "chot", "dange", "deaux", "der", "dol", "drieu", "fe", "ge", "geac", "geot", "gey", "giens", "gna", "gnan", "gne", "gnon", "gros", "grube", "gueil", "heim", "kastel", "lage", "lais", "las", "lbot", "lese", "let", "lien", "lino", "lion", "lla", "lle", "llina", "llo", "llon", "lly", "lo", "lon", "lou", "lung", "ly", "ma", "mante", "mat", "may", "mbes", "me", "mens", "ment", "mes", "meur", "ms", "mune", "mur", "na", "nac", "nais", "nas", "nay", "nce", "nche", "ne", "nee", "nel", "ner", "nett", "nia", "nier", "nieux", "nis", "nne", "node", "non", "note", "nots", "nti", "ntre", "nues", "nuhr", "phe", "que", "quem", "raud", "reic", "reich", "resco", "rie", "rnes", "rnet", "rno", "rol", "rons", "rre", "rten", "rtin", "rton", "san", "sco", "sir", "sis", "sne", "sone", "sse", "ssec", "sson", "sus", "tage", "tan", "tium", "tour", "tre", "tte", "val", "ve", "vel", "vens", "ves", "ville", "vrey", "vry", "wen", "wer", "xin", "zeaux", "zin"];
	var nm5 = ["", "", "", "", "", "", "", "Abboccato", "Acescence", "Adamado", "Adega", "Amabile", "Annata", "Bianco", "Blanc", "Blanco", "Branco", "Cépage", "Cap Classique", "Cava", "Chiaretto", "Clairet", "Classic", "Demi-Sec", "Doce", "Dolce", "Doux", "Dulce", "Edes", "Frizzante", "Fume", "Garrafeira", "Granvas", "Halbtrocken", "Invecchiato", "Liquoroso", "Mousseux", "Noir", "Pétillant", "Piquant", "Rich", "Rosado", "Rosato", "Rosso", "Rouge", "Süss", "Sec", "Secco", "Száraz", "Vendemmia", "Vendimia", "Viejo", "d'Or"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm4[rnd3] + " " + nm5[rnd4];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nm5[rnd6];
		}
		return names;
	}

}