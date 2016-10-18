var nm1 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", ""];
var nm2 = ["b", "br", "c", "cr", "d", "dr", "g", "gr", "j", "k", "kr", "kn", "p", "pr", "q", "qr", "r", "st", "str", "t", "tr", "v", "vr", "w", "x", "z", "", "", "", "", "", "", "", "", "", "", ""];
var nm3 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u"];
var nm4 = ["b", "c", "d", "g", "j", "k", "l", "m", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
var nm5 = ["bahn", "barin", "beus", "bin", "bus", "dalf", "del", "dium", "dore", "dus", "farihm", "faris", "feus", "flyn", "forn", "gast", "geor", "gorim", "groln", "grur", "hagan", "harad", "haris", "hith", "hone", "jahr", "jamar", "jeik", "jest", "jor", "kalis", "key", "kius", "kore", "kron", "lenor", "leus", "lin", "lius", "lore", "maex", "marim", "mazz", "monar", "morn", "naxx", "neus", "nior", "nitor", "norim", "pan", "phior", "pius", "pniar", "prix", "qiohr", "qium", "qor", "qrax", "quam", "ras", "rhan", "rius", "ronin", "rune", "shan", "sim", "sior", "sorin", "strum", "tarum", "taz", "thar", "tior", "trix", "veus", "viar", "vior", "vius", "vras", "wahl", "wix", "wras", "wrick", "wyn", "xarif", "xeor", "xium", "xius", "xon", "ydor", "ynas", "yorn", "yrin", "yus", "zahr", "zax", "zif", "zohr", "zor"];
var nm6 = ["b", "bl", "c", "cl", "d", "f", "fr", "fl", "g", "gl", "gn", "h", "kl", "kn", "m", "n", "p", "pl", "ph", "q", "s", "st", "sl", "t", "v", "vl", "w", "z"];
var nm7 = ["b", "c", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "w"];
var nm8 = ["belle", "baris", "beus", "bine", "beus", "dali", "delis", "disum", "dores", "deis", "faeh", "faris", "fea", "fyne", "fora", "gaell", "georis", "gis", "garis", "grith", "haen", "harith", "harise", "hith", "hione", "jelle", "jes", "jyll", "jiane", "jior", "kealis", "key", "kely", "kora", "kon", "lyn", "leas", "lune", "laes", "lore", "maev", "mari", "meazz", "monora", "morith", "naxix", "neas", "nilor", "nirn", "nora", "paen", "phi", "pianne", "pyx", "prixys", "qiohn", "qille", "qora", "qix", "qian", "ras", "rihan", "ris", "ro", "rune", "shan", "saem", "sinor", "soph", "strea", "taris", "taz", "thal", "tosh", "trix", "veus", "via", "vira", "vys", "vae", "weahl", "wix", "wrys", "waelle", "wyn", "xaryl", "xea", "xis", "xyll", "xone", "ydae", "yna", "yora", "yrin", "yeas", "zahn", "zyxi", "zif", "zohra", "zora"];
var nm9 = ["b", "bl", "c", "cl", "d", "f", "fr", "fl", "g", "gl", "gn", "h", "kl", "kn", "m", "n", "p", "pl", "ph", "q", "s", "st", "sl", "t", "v", "vl", "w", "z"];

function generator$fantasy$wizards(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 2) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm8.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd5] + nm8[rnd6];
			} else if (i < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm8.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm8[rnd6];
			} else if (i < 6) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm9.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm7.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm8.length);
				names = nm1[rnd] + nm9[rnd2] + nm3[rnd3] + nm7[rnd4] + nm3[rnd5] + nm8[rnd6];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm9.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm8.length);
				names = nm1[rnd] + nm9[rnd2] + nm3[rnd5] + nm8[rnd6];
			} else {
				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm8.length);
				names = nm3[rnd] + nm4[rnd2] + nm8[rnd5];
			}
		} else {
			if (i < 2) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd5] + nm5[rnd6];
			} else if (i < 4) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm5[rnd6];
			} else if (i < 6) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm6.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm7.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm6[rnd2] + nm3[rnd3] + nm7[rnd4] + nm3[rnd5] + nm5[rnd6];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm6.length);
				rnd5 = Math.floor(Math.random() * nm3.length);
				rnd6 = Math.floor(Math.random() * nm5.length);
				names = nm1[rnd] + nm6[rnd2] + nm3[rnd5] + nm5[rnd6];
			} else {
				rnd = Math.floor(Math.random() * nm3.length);
				rnd2 = Math.floor(Math.random() * nm4.length);
				rnd5 = Math.floor(Math.random() * nm5.length);
				names = nm3[rnd] + nm4[rnd2] + nm5[rnd5];
			}
		}
		return names;
	}

}