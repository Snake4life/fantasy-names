function generator$fantasy$giants() {
	var nm1 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "r", "s", "t", "v", "w", "x", "z", "a", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "r", "s", "t", "v", "w", "x", "z", "ar", "br", "cr", "dr", "fr", "gr", "kr", "sr", "tr", "vr", "wr", "al", "bl", "cl", "dl", "fl", "gl", "kl", "sl", "vl", "zl", "", "", "", "", ""];
	var nm2 = ["e", "i", "u", "o", "a"];
	var nm3 = ["b", "c", "d", "f", "g", "k", "l", "m", "n", "r", "s", "t", "w", "x", "z", "", "", "", "", "", "", "", "", ""];
	var nm4 = ["ag", "am", "as", "bar", "barg", "bog", "bor", "bos", "brog", "der", "dhor", "dius", "dor", "dus", "fius", "fum", "fur", "gan", "gant", "gar", "gi", "gir", "grog", "kaos", "karos", "kos", "krus", "las", "lith", "log", "lor", "los", "malog", "mir", "mohr", "nar", "nas", "nir", "nus", "og", "om", "os", "rion", "roch", "rog", "rus", "rym", "sag", "sal", "sar", "sius", "sog", "sor", "tag", "tius", "theus", "thor", "thos", "to", "tor", "vag", "ver", "var", "vir", "vog", "war", "wor", "zar", "ziar", "zus"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm4.length);
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
		return names;
	}

}