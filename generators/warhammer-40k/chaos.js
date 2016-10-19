function generator$warhammer_40k$chaos(type) {
	var names1 = ["Aba", "Abru", "Ahru", "An", "Anta", "Anu", "Ar", "Ara", "As", "Azu", "Ba", "Balta", "Barba", "Bero", "Bru", "Bulda", "Burro", "Caorpu", "Chen", "Cru", "Dav", "Dema", "Dev", "Drach", "Dy", "Eku", "Ela", "Ely", "En", "Ere", "Esto", "Ez", "Far", "Fester", "Fu", "Fur", "Furi", "Gal", "Gara", "Goul", "Graza", "Gu", "Gura", "Hala", "He", "Hez", "Hon", "Hou", "Ingu", "Ji", "Juru", "Ka", "Kal", "Kasso", "Kaz", "Kha", "Khro", "Kraa", "Kre", "Ku", "Kur", "Kurna", "Ky", "Lo", "Lu", "Ma", "Mal", "Mephi", "Mo", "Morde", "Morte", "Nazu", "Neme", "Omphu", "Onai", "Parge", "Pho", "Pu", "Puri", "Rha", "Rhy", "Ro", "Ru", "Sathu", "Sava", "Sek", "Si", "Sky", "Svo", "Ta", "Talo", "Tita", "Tu", "Urka", "Urkra", "Urla", "Var", "Vu", "Yga", "Za", "Zho", "Zhu", "Zy"];
	var names2 = ["'gaz", "'gom", "'khar", "'loth", "'lumin", "'palos", "'ryon", "'sax", "'tiro", "'tzor", "ban", "bar", "bas", "bhor", "bire", "bus", "cius", "daran", "das", "dax", "dekai", "del", "diaz", "dire", "don", "dred", "duk", "far", "gan", "gar", "garr", "gax", "ghast", "gon", "gor", "gore", "gral", "grim", "harr", "kai", "khar", "kos", "las", "lash", "lax", "laz", "lek", "lock", "mek", "min", "mon", "mor", "mort", "mus", "nacus", "naer", "nath", "nax", "neus", "nogar", "nok", "non", "nux", "phoz", "phus", "pulax", "rah", "rak", "ram", "rand", "rass", "rath", "rax", "raz", "rhaz", "rion", "ritus", "rolath", "ron", "roq", "ross", "roth", "routh", "roz", "rulak", "ruman", "rus", "salax", "sour", "stix", "stur", "thac", "thal", "thor", "thral", "toth", "trax", "trius", "vax", "vile", "xus", "zar"];
	var names3 = ["Abi", "Abre", "Aer", "Ahnu", "An", "Ana", "Ara", "Arhi", "As", "Azu", "Ba", "Bala", "Beldi", "Belo", "Berba", "Berro", "Bri", "Cari", "Ches", "Cry", "Dema", "Dev", "Div", "Dresh", "Dy", "Eki", "Ela", "Ely", "En", "Ene", "Esta", "Ez", "Fer", "Ferri", "Fes", "Fihr", "Fy", "Gal", "Gaya", "Gi", "Gira", "Gol", "Grisa", "He", "Hela", "Hen", "Hez", "Hoa", "Inge", "Ji", "Jura", "Ka", "Kaha", "Kashu", "Ke", "Kel", "Kez", "Khaa", "Khry", "Kir", "Korna", "Kre", "Ky", "Li", "Lo", "Ma", "Mel", "Mephi", "Mo", "Morde", "More", "Nasu", "Neme", "Oni", "Ophu", "Perge", "Pho", "Pi", "Puri", "Rhia", "Rhy", "Ro", "Ry", "Sehk", "Sephu", "Shi", "Sio", "Siva", "Ski", "Telo", "Tha", "Tiya", "Tu", "Una", "Ura", "Urli", "Ver", "Vu", "Ya", "Za", "Zho", "Zoe", "Zy"];
	var names4 = ["'gah", "'ginn", "'khas", "'lith", "'lumix", "'phis", "'rya", "'sax", "'tira", "'yah", "bara", "bess", "bhox", "bine", "bis", "bise", "cian", "darah", "dash", "dea", "dehk", "dell", "dex", "diaz", "dine", "dresh", "dynn", "faer", "gaer", "gash", "genn", "gihr", "gone", "goye", "grell", "grine", "grinn", "gwer", "hirr", "kei", "kha", "kiz", "lashe", "leck", "lek", "less", "lix", "liz", "mex", "mine", "mona", "mora", "morta", "muse", "naere", "neon", "nesh", "neth", "neuth", "nihx", "nix", "nosa", "nu", "phis", "pho", "prix", "rane", "raz", "reah", "renne", "reon", "resh", "ress", "rhazi", "rilith", "rique", "riss", "rith", "riyes", "riz", "rothe", "roush", "roze", "rumine", "ruse", "ruxa", "ryn", "silix", "sou", "sty", "styxe", "thall", "thess", "thia", "this", "tosh", "triesh", "trix", "vie", "vix", "xis", "zara"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			names = names3[rnd] + names4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			names = names1[rnd] + names2[rnd2];
		}
		return names;
	}

}