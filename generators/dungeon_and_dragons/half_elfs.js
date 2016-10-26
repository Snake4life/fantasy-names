function generator$dungeon_and_dragons$half_elfs(type) {
	var nm1 = ["Al", "Aro", "Bar", "Bel", "Cor", "Cra", "Dav", "Dor", "Eir", "El", "Fal", "Fril", "Gaer", "Gra", "Hal", "Hor", "Ian", "Ilo", "Jam", "Kev", "Kri", "Leo", "Lor", "Mar", "Mei", "Nil", "Nor", "Ori", "Os", "Pan", "Pet", "Quo", "Raf", "Ri", "Sar", "Syl", "Tra", "Tyr", "Uan", "Ul", "Van", "Vic", "Wal", "Wil", "Xan", "Xav", "Yen", "Yor", "Zan", "Zyl"];
	var nm2 = ["avor", "ben", "borin", "coril", "craes", "deyr", "dithas", "elor", "enas", "faelor", "faerd", "finas", "fyr", "gotin", "gretor", "homin", "horn", "kas", "koris", "lamir", "lanann", "lumin", "minar", "morn", "nan", "neak", "neiros", "orin", "ovar", "parin", "phanis", "qarim", "qinor", "reak", "ril", "ros", "sariph", "staer", "torin", "tumil", "valor", "voril", "warith", "word", "xian", "xiron", "yeras", "ynor", "zaphir", "zaren"];
	var nm3 = ["Alu", "Aly", "Ar", "Bren", "Byn", "Car", "Co", "Dar", "Del", "El", "Eli", "Fae", "Fha", "Gal", "Gif", "Haly", "Ho", "Ile", "Iro", "Jen", "Jil", "Kri", "Kys", "Les", "Lora", "Ma", "Mar", "Mare", "Neri", "Nor", "Ol", "Ophi", "Phaye", "Pri", "Qi", "Que", "Rel", "Res", "Sael", "Saf", "Syl", "Ther", "Tyl", "Una", "Uri", "Ven", "Vyl", "Win", "Wol", "Xil", "Xyr", "Yes", "Yll", "Zel", "Zin"];
	var nm4 = ["aerys", "anys", "bellis", "bwynn", "cerys", "charis", "diane", "dove", "elor", "enyphe", "faen", "fine", "galyn", "gwynn", "hana", "hophe", "kaen", "kilia", "lahne", "lynn", "mae", "malis", "mythe", "nalore", "noa", "nys", "ona", "phira", "pisys", "qarin", "qwyn", "rila", "rora", "seris", "stine", "sys", "thana", "theris", "tihne", "trana", "viel", "vyre", "walyn", "waris", "xaris", "xipha", "yaries", "yra", "zenya", "zira"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2];
		}
		return names;
	}

}