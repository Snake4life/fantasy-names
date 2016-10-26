function generator$dungeon_and_dragons$minotaurs(type) {
	var namesFemF = ["Aam", "Ane", "Are", "Ase", "Duu", "Em", "Enti", "Este", "Fen", "Hene", "Hes", "Hila", "Hine", "Ias", "Ire", "Ki", "Kia", "Kuo", "Laan", "Line", "Loo", "Muu", "Nan", "Nea", "Neo", "Noo", "Nuo", "Oen", "Oes", "Raas", "Ras", "Sees", "Seo", "Sina", "Tee", "Tes", "Tia", "Tina", "Uova", "Weo"];
	var namesFemL = ["dra", "fin", "kane", "kea", "la", "las", "len", "lin", "lo", "mas", "me", "mi", "min", "na", "nan", "nas", "nim", "nu", "pen", "pe", "ra", "ren", "res", "rin", "ris", "ru", "sen", "sia", "ta", "ter", "tin", "tra", "tred", "tri", "trin", "tris", "ven", "vena", "vera", "vin"];
	var namesMaleF = ["Ar", "Are", "Aste", "Bjor", "Car", "Cod", "Da", "Djar", "Djun", "Doen", "Dor", "Dur", "Foos", "Gar", "Goe", "Gra", "Gran", "Gun", "Hun", "Ja", "Jar", "Kar", "Kin", "Kir", "Koo", "Koor", "Krum", "Kur", "Man", "Min", "Mir", "Noo", "Pod", "Rak", "Te", "Toon", "Trak", "Tur", "Zam", "Zun"];
	var namesMaleL = ["ban", "baran", "bur", "dak", "daran", "dor", "fajar", "faruk", "furan", "gajan", "garak", "gur", "jar", "kan", "kar", "karat", "kun", "kurat", "kus", "manuk", "maruk", "nark", "narun", "paran", "raduk", "rak", "rakar", "ranak", "rapak", "ras", "rat", "rios", "ron", "rus", "rut", "tagar", "taruk", "toron", "turok", "tus"];
	var namesSur = ["Agilebody", "Agilemind", "Bearfighter", "Boldmind", "Boldwarrior", "Boulderfist", "Boulderhide", "Braveheart", "Brightheart", "Brightmind", "Fearlessheart", "Fistfury", "Gloryhunter", "Gloryslash", "Goblinbane", "Goblinslayer", "Greathunter", "Heavyhide", "Honorheart", "Ironheart", "Ironhorn", "Ironskin", "Ironskull", "Jaggedhorns", "Keeneye", "Nimblestep", "Orcbane", "Orcslayer", "Rockhorn", "Ruggedhide", "Sharpmind", "Silentstriker", "Silentwalker", "Singlehorn", "Steadyhand", "Steelhide", "Steelhorn", "Steelskin", "Steelskull", "Stonehide", "Stormhoof", "Stormroar", "Stoutheart", "Strongleader", "Strongroar", "Swiftrunner", "Swiftstriker", "Swiftwalker", "Thickhide", "Thickskin", "Thunderfist", "Thunderhoof", "Thunderroar", "Toughpelt", "Truthspeaker", "Valiantheart", "Vigileye", "Wolfheart", "Wolfrunner", "Wolfvigor"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * namesFemF.length);
			rnd2 = Math.floor(Math.random() * namesFemL.length);
			rnd3 = Math.floor(Math.random() * namesSur.length);
			names = namesFemF[rnd] + namesFemL[rnd2] + " " + namesSur[rnd3];
		} else {
			rnd = Math.floor(Math.random() * namesMaleF.length);
			rnd2 = Math.floor(Math.random() * namesMaleL.length);
			rnd3 = Math.floor(Math.random() * namesSur.length);
			names = namesMaleF[rnd] + namesMaleL[rnd2] + " " + namesSur[rnd3];
		}
		return names;
	}

}