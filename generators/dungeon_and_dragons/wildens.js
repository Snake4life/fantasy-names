function generator$dungeon_and_dragons$wildens(type) {
	var namesMaleFf = ["Ban", "Bar", "Dal", "Dam", "Dun", "Dur", "Fas", "Fin", "Kan", "Kin", "Kor", "Lan", "Lim", "Lon", "Man", "Mar", "Mas", "Mid", "Mor", "Mur", "Nam", "Nor", "Rad", "Ran", "Ras", "Rod", "San", "Sin", "Tor", "Tum"];
	var namesMaleFl = ["darras", "darris", "dommar", "donnir", "durrun", "farran", "fidden", "garron", "kammin", "karran", "lammir", "larrin", "mannor", "marden", "mennar", "mennor", "mindin", "mirron", "morrin", "murrin", "norren", "norten", "rammas", "sammas", "sannim", "sarrin", "sarris", "sorran", "tarrin", "torrin"];
	var namesMaleSf = ["Barrun", "Burrin", "Darras", "Farran", "Farrin", "Fidden", "Garrin", "Harren", "Harrun", "Karrat", "Karren", "Ketten", "Korrin", "Larras", "Lommir", "Lorrin", "Marrad", "Mirren", "Mirrun", "Morrin", "Parran", "Purren", "Tarris", "Torren", "Torrim", "Turrus", "Venner", "Vunnar", "Zakkan", "Zarrak"];
	var namesMaleSl = ["bar", "bor", "bun", "das", "din", "dun", "dur", "fas", "fum", "gar", "gun", "kas", "kin", "las", "lis", "mar", "mas", "min", "mur", "nas", "nim", "nor", "pan", "rak", "ras", "tor", "tur", "zad", "zim", "zor"];
	var namesFemF = ["Allin", "Ashin", "Bunn", "Dann", "Darn", "Diss", "Enn", "Eril", "Fenn", "Fert", "Firr", "Fiss", "Genn", "Grin", "Kalk", "Kenn", "Kers", "Krin", "Lerm", "Less", "Linn", "Lorr", "Minn", "Mirt", "Mist", "Nem", "Niss", "Shall", "Shan", "Shenn", "Tarr", "Taz", "Tell", "Tin", "Tirr", "Tris", "Wenn", "Zar", "Zaz", "Zell"];
	var namesFemL = ["ahai", "akei", "alin", "amai", "anai", "annar", "annas", "arris", "arrel", "arresh", "artish", "asha", "atish", "elbis", "embin", "enna", "ennash", "entah", "eris", "erla", "erlis", "imai", "imbel", "imei", "immesh", "inah", "inash", "inda", "inna", "innem", "irrah", "ishai", "issa", "itas", "onnes", "onteh", "orda", "oren", "oris", "orren"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * namesFemF.length);
			rnd2 = Math.floor(Math.random() * namesFemL.length);
			names = namesFemF[rnd] + namesFemL[rnd2];
		} else {
			if (i < 5) {
				rnd = Math.floor(Math.random() * namesMaleFf.length);
				rnd2 = Math.floor(Math.random() * namesMaleFl.length);
				names = namesMaleFf[rnd] + namesMaleFl[rnd2];
			} else {
				rnd = Math.floor(Math.random() * namesMaleSf.length);
				rnd2 = Math.floor(Math.random() * namesMaleSl.length);
				names = namesMaleSf[rnd] + namesMaleSl[rnd2];
			}
		}
		return names;
	}

}