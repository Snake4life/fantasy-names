function generator$fantasy$succubus(type) {
	var nm1 = ["Aer", "Arlen", "Azer", "Boren", "Brax", "Bren", "Caran", "Char", "Col", "Cryn", "Dhar", "Drac", "Dyn", "Eor", "Eran", "Ezrin", "Faren", "Fhar", "Forn", "Fyz", "Garan", "Gnar", "Grul", "Har", "Hurin", "Hyir", "Iar", "Igar", "Inor", "Jar", "Jhor", "Joran", "Kran", "Kuron", "Kyl", "Lanar", "Lar", "Lohr", "Mahr", "Maran", "Maz", "Nahar", "Naj", "Nyr", "Ohir", "Ohm", "Oran", "Pam", "Phir", "Prax", "Qahr", "Qrin", "Qur", "Rhar", "Rizar", "Ryz", "Sal", "Sur", "Suran", "Syl", "Thal", "Tor", "Traz", "Unor", "Ur", "Uran", "Vohr", "Vox", "Vyl", "Wahr", "Wes", "Wrax", "Xahr", "Xal", "Xin", "Yhr", "Ylan", "Ynar", "Zael", "Zahr", "Zaran", "Zohn"];
	var nm2 = ["aer", "ahr", "an", "anin", "arax", "aris", "ath", "axis", "ear", "ed", "el", "elon", "enar", "er", "errith", "eth", "ex", "ez", "ied", "igar", "ihr", "ilan", "irad", "ith", "ix", "ixan", "ixar", "lagar", "lahin", "lan", "larin", "lax", "lead", "liar", "lynx", "lyx", "nar", "narax", "near", "neth", "nex", "nihr", "nil", "niran", "nyx", "olan", "on", "orad", "oriad", "orin", "oth", "ovan", "ox", "rad", "rahn", "rel", "renar", "riad", "ryd", "rydar", "ryn", "sahr", "san", "syn", "syx", "tar", "taran", "tihr", "tiran", "trax", "tyz", "vahr", "vile", "viraz", "vix", "vyce", "vyn", "yd", "yhad", "ylan", "ynad", "ynir", "yth", "yx", "yxir"];
	var nm3 = ["Aez", "Aries", "Azaer", "Berin", "Briz", "Bwyn", "Cahr", "Caril", "Cat", "Char", "Daem", "Dhys", "Dren", "Elin", "Eshir", "Elrin", "Fel", "Fyr", "Fyrel", "Fyser", "Ginor", "Glys", "Gryn", "Harel", "Hel", "Hyr", "Iphis", "Irin", "Isir", "Jaen", "Jil", "Jyn", "Kel", "Kryn", "Kyl", "Lil", "Lilin", "Lynn", "Merid", "Mez", "Mhyr", "Nemor", "Ness", "Nym", "Ohir", "Or", "Orin", "Pen", "Phis", "Pris", "Qhes", "Qin", "Qyr", "Rhel", "Ris", "Ryr", "Sar", "Shar", "Shirin", "Shy", "Thel", "Tin", "Tryx", "Uhr", "Uril", "Usin", "Vhes", "Vilin", "Vyl", "Win", "Wylin", "Wys", "Xen", "Xis", "Xyl", "Ynis", "Yrel", "Yser", "Zaeh", "Zarin", "Zell", "Zrix"];
	var nm4 = ["aela", "aith", "ana", "ania", "anya", "arah", "aris", "aya", "eli", "elin", "era", "erris", "esh", "esha", "ess", "eth", "eva", "evera", "iana", "ielle", "ienne", "iesh", "ieth", "ira", "ith", "ixia", "ixis", "lea", "lenne", "less", "lia", "lienne", "lisa", "lith", "lyn", "lyss", "nara", "nell", "nessa", "neth", "ney", "nila", "nixi", "nore", "nys", "ola", "ona", "ora", "oria", "orin", "oris", "oth", "ova", "rahne", "raya", "reia", "relle", "riane", "rya", "ryna", "ryss", "sea", "sha", "sya", "syss", "tarish", "thine", "tia", "tila", "tora", "tyse", "via", "vielle", "vienne", "vyn", "vynia", "vyra", "yera", "yla", "ynore", "yra", "ysh", "ysha", "yss", "yxih"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2];
		}
		return names;
	}

}