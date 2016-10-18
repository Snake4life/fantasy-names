var names1 = ["ae", "ea", "ai", "au", "ou", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var names2 = ["ae", "eo", "ea", "ai", "ui", "ou", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
var names3 = ["b", "c", "d", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "gr", "kr", "pr", "tr", "vr", "wr", "st", "sl", "ch", "sh", "ph", "kh", "th"];
var names4 = ["b", "c", "d", "g", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "g", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "b", "c", "d", "f", "g", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bb", "cc", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "zz", "br", "cr", "dr", "gr", "kr", "pr", "sr", "tr", "zr", "st", "sl", "ch", "sh", "ph", "kh", "th"];
var names5 = ["ba", "bet", "bia", "borg", "burg", "ca", "caea", "can", "cia", "curia", "dal", "del", "dia", "dian", "do", "dor", "dora", "dour", "galla", "gary", "gia", "gon", "han", "kar", "kha", "kya", "les", "lia", "lon", "lan", "lum", "lux", "lyra", "mid", "mor", "more", "nad", "nait", "nao", "nate", "nada", "neian", "nem", "nia", "nid", "niel", "ning", "ntis", "nyth", "pan", "phate", "pia", "pis", "ra", "ral", "rean", "rene", "renth", "ria", "rian", "rid", "rin", "ris", "rith", "rus", "ryn", "sal", "san", "sea", "seon", "sha", "sian", "site", "sta", "ston", "teron", "terra", "tha", "thage", "then", "thia", "tia", "tis", "tish", "ton", "topia", "tor", "tus", "valon", "varia", "vell", "ven", "via", "viel", "wen", "weth", "wyth", "ya", "zar", "zia"];
var names6 = ["Kingdom", "Empire", "Dynasty"];

function generator$places$kingdoms() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names2.length);
			rnd4 = Math.floor(Math.random() * names5.length);
			rnd5 = Math.floor(Math.random() * names6.length);
			names = names1[rnd] + names3[rnd2] + names2[rnd3] + names5[rnd4] + " " + names6[rnd5];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names2.length);
			if (rnd < 5) {
				while (rnd3 < 6) {
					rnd3 = Math.floor(Math.random() * names2.length);
				}
			}
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names2.length);
			if (rnd3 < 6) {
				while (rnd5 < 6) {
					rnd5 = Math.floor(Math.random() * names2.length);
				}
			}
			rnd6 = Math.floor(Math.random() * names5.length);
			rnd7 = Math.floor(Math.random() * names6.length);
			names = names1[rnd] + names3[rnd2] + names2[rnd3] + names4[rnd4] + names2[rnd5] + names5[rnd6] + " " + names6[rnd7];
		}
		return names;
	}

}