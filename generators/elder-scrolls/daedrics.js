var nm1 = ["b", "br", "c", "cr", "ch", "d", "dr", "g", "gr", "j", "k", "kr", "kn", "km", "p", "pr", "q", "qr", "r", "st", "str", "t", "tr", "v", "vr", "w", "wr", "x", "z", "zr", "", "", "", "", ""];
var nm2 = ["a", "e", "i", "o", "u", "y", "au", "ou", "ei", "uy", "oe", "ua", "ue", "uo", "a", "e", "i", "o", "u", "y"];
var nm3 = ["b", "c", "d", "g", "j", "k", "l", "m", "p", "q", "r", "s", "t", "v", "w", "x", "z", "br", "cr", "dr", "gr", "kr", "km", "pr", "qr", "st", "tr", "xx", "g", "q'", "k'", "rr", "r'", "t'", "tt", "vv", "v'", "x'", "z'", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "", "", "", "", "", ""];
var nm5 = ["ag", "ah", "al", "ala", "alag", "ath", "bal", "cath", "cius", "cus", "dea", "dia", "hala", "icus", "ina", "ine", "ira", "ite", "lag", "maeus", "mina", "nal", "nes", "oth", "rath", "roth", "unes", "ura", "us", "vus", "yite", ];
var nm6 = ["b", "bl", "c", "cl", "ch", "d", "f", "fr", "fl", "g", "gl", "gn", "h", "kl", "kn", "m", "n", "p", "pl", "ph", "q", "ql", "s", "st", "sl", "t", "v", "vl", "w", "z", "", "", "", "", ""];
var nm7 = ["a", "e", "i", "o", "u", "y", "ae", "ea", "eo", "oe", "ie", "ue", "ua", "a", "e", "i", "o", "u", "y"];
var nm8 = ["b", "c", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "w", "bb", "bl", "ff", "fl", "gl", "gn", "hh", "hs", "hl", "hn", "hm", "ks", "ll", "lh", "kh", "bh", "ch", "dh", "lm", "ln", "lf", "mm", "mn", "ms", "nn", "ns", "p", "ph", "ps", "rf", "ss", "st", "sh", "th", "ts", "s'", "l'", "n'", "m'", "f'", "h'"];
var nm9 = ["a", "e", "i", "o", "u", "y", "", "", "", "", "", ""];
var nm10 = ["ag", "ah", "al", "ala", "alag", "ath", "bal", "cath", "cius", "cus", "dea", "dia", "hala", "icus", "ina", "ine", "ira", "ite", "lag", "maeus", "mina", "nal", "nes", "oth", "rath", "roth", "unes", "ura", "us", "vus", "yite"];
var nm11 = ["Insomnia", "Lunacy", "Luna", "Mania", "Phobia", "Luna", "Solar", "Dementia", "Hysteria", "Delirium", "Pedigree", "Bane", "Anathema", "Grace", "Hope", "Malison", "Misery", "Blight", "Poison", "Venom", "Calamity", "Malificent", "Sinister", "Grim", "Gloom", "Dire", "Malign", "Malefic", "Joy", "Nova", "Misty", "Dusk", "Dawn", "Twilight", "Rogue", "Ominous", "Vile", "Nefarious", "Melancholy", "Saturnine", "Solemn", "Glum", "Austere", "Morose", "Surly", "Brusque", "Gruff", "Demise", "Necrosis", "Silence", "Enigma", "Virulence", "Spite", "Malign", "Storm", "Serene", "Harmony", "Strife", "Striker", "Sloth", "Drowsy", "Supine", "Laggard"];

function generator$elder_scrolls$daedrics() {

	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			if (rnd3 < 46) {
				while (rnd4 > 5) {
					rnd4 = parseInt(Math.floor((Math.random() * nm4.length)));
				}
			}
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm9.length);
			if (rnd3 < 46) {
				while (rnd4 > 5) {
					rnd4 = parseInt(Math.floor((Math.random() * nm4.length)));
				}
			}
			rnd5 = Math.floor(Math.random() * nm10.length);
			names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm9[rnd4] + nm10[rnd5];
		} else {
			rnd = Math.floor(Math.random() * nm11.length);
			names = nm11[rnd];
		}
		return names;
	}

}