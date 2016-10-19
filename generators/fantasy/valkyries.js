function generator$fantasy$valkyries() {
	var names1 = ["A", "Aga", "Ar", "Bry", "Ey", "Fri", "Fria", "Ge", "Gei", "Go", "Guo", "He", "Hi", "Hja", "Hjo", "Hla", "Hlo", "Hri", "Hru", "Ka", "Mi", "O", "Re", "Regi", "Ro", "Sa", "San", "Si", "Ska", "Ske", "Sko", "Sku", "Sva", "Sve", "Svei", "Svi", "Tho", "Thri", "Thru", "Va"];
	var names2 = ["dana", "dis", "dmadra", "dne", "dr", "dra", "drifa", "dul", "gabi", "gin", "ginleif", "gjold", "grdrifa", "grior", "grun", "gul", "hildr", "hylde", "ja", "la", "ld", "ldana", "ldr", "leif", "lmold", "lna", "lrun", "ma", "madra", "mold", "nd", "ndul", "ngrior", "nhildr", "nhylde", "nul", "pul", "ra", "rdmadra", "rifa", "rior", "rja", "ronul", "run", "rvif", "st", "ta", "tha", "va", "vif"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * names1.length);
		rnd2 = Math.floor(Math.random() * names2.length);
		names = names1[rnd] + names2[rnd2];
		return names;
	}

}