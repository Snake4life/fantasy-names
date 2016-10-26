function generator$mass_effect$krogans(type) {
	var names1 = ["B", "Br", "C", "Cr", "Ch", "D", "Dr", "F", "G", "Gr", "H", "J", "K", "Kh", "Kr", "M", "N", "P", "Pr", "Q", "Qr", "R", "S", "Sr", "Str", "T", "Tr", "V", "Vr", "W", "Wr", "Zr"];
	var names2 = ["a", "e", "u", "i", "o", "a", "u"];
	var names3 = ["rr", "x", "nd", "nk", "yas", "rm", "rn", "rk", "tack", "rg", "g", "gg", "sk", "zk", "nd", "d", "rd", "xx", "yak", "yax", "rak", "nak", "kar", "kor", "lak", "gor", "gar", "gas", "r"];
	var names5 = ["ash", "bakur", "brakir", "dark", "drak", "drax", "dtar", "k", "kador", "karor", "kirum", "kmar", "kmor", "krax", "ksan", "ksar", "kson", "ksor", "l", "lot", "mar", "nar", "ndok", "ntor", "rax", "rbok", "rbon", "rdak", "rdan", "rdok", "rdon", "rgal", "rgon", "rkan", "rloc", "rlok", "rsan", "rtak", "tarog", "tarok", "tarum", "tarun", "tatog", "tilak", "vanor", "varog", "vrak", "x", "yrdok", "yrloc"];

	if (type === 1) {
		var names4 = [""];
	} else {
		var names4 = ["a", "e", "u", "i", "o", "a"];
	}

	i = Math.floor(Math.random() * 10); {
		rnd0 = Math.floor(Math.random() * names1.length);
		rnd1 = Math.floor(Math.random() * names2.length);
		rnd2 = Math.floor(Math.random() * names3.length);
		rnd3 = Math.floor(Math.random() * names4.length);
		rnd4 = Math.floor(Math.random() * names1.length);
		rnd5 = Math.floor(Math.random() * names2.length);
		rnd6 = Math.floor(Math.random() * names5.length);
		names = names1[rnd4] + names2[rnd5] + names5[rnd6] + " " + names1[rnd0] + names2[rnd1] + names3[rnd2] + names4[rnd3];
		return names;
	}

}