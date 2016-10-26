function generator$dungeon_and_dragons$githzerais(type) {
	var namesFemF = ["Ad", "Alm", "Arw", "Ash", "Dah", "Dhar", "Dolm", "Dran", "Ell", "Erzh", "Esz", "Ezh", "Grel", "Halm", "Han", "Harn", "Heln", "Ihr", "Iln", "Imm", "Iz", "Kan", "Kharm", "Khaz", "Krez", "Laz", "Lez", "Lhash", "Magd", "Marm", "Nagr", "Nah", "Nalm", "Rasz", "Rez", "Sham", "Sharm", "Shund", "Um", "Uw"];
	var namesFemL = ["a", "ah", "aka", "al", "arah", "arin", "aya", "ayah", "eah", "eka", "el", "ela", "elna", "elya", "elzal", "ena", "enah", "era", "erah", "eya", "ihn", "ila", "ilzin", "in", "ina", "ira", "iza", "mina", "ya", "yara"];
	var namesMaleF = ["Am", "Ar", "Ara", "Aza", "Bar", "Bra", "Bru", "Da", "Dar", "Dor", "Dra", "Dro", "Du", "Fa", "Far", "Fer", "Gra", "Gran", "Gre", "Gro", "Gru", "Hu", "Ka", "Kar", "Kha", "Kra", "Kro", "Ma", "Mu", "Na", "Nar", "Nu", "Ra", "Ran", "Rin", "Ru", "Sha", "Shra", "Sra", "Zra"];
	var namesMaleL = ["d", "dak", "gh", "k", "kahr", "kar", "khar", "kk", "lag", "llak", "mag", "mak", "nag", "rag", "rak", "ram", "rath", "rek", "rg", "rm", "rth", "ruk", "th", "tig", "zag", "zak", "zar", "zeg", "zirg", "zth"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * namesFemF.length);
			rnd2 = Math.floor(Math.random() * namesFemL.length);
			names = namesFemF[rnd] + namesFemL[rnd2];
		} else {
			rnd = Math.floor(Math.random() * namesMaleF.length);
			rnd2 = Math.floor(Math.random() * namesMaleL.length);
			names = namesMaleF[rnd] + namesMaleL[rnd2];
		}
		return names;
	}

}