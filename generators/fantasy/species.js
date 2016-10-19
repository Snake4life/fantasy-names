function generator$fantasy$species() {
	var nm1 = ["a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "ai", "ea", "eo", "oi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm2 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "ch", "chr", "chl", "z", "br", "cr", "dr", "fr", "gr", "kr", "pr", "sr", "tr", "str", "bl", "cl", "fl", "kl", "pl", "sl", "vl", "ph", "sh"];
	var nm3 = ["a", "e", "o", "i", "u", "a", "e", "o", "i", "u", "ai", "ea", "eo", "oi", "y"];
	var nm4 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "bl", "br", "bb", "bs", "bd", "bn", "ch", "chl", "chr", "cl", "ck", "cn", "cr", "cc", "dr", "dl", "ds", "dn", "dd", "fl", "ff", "fr", "fn", "gr", "gn", "gs", "gl", "gg", "kl", "kh", "kn", "kk", "kr", "ll", "ln", "lm", "ls", "ld", "lb", "mm", "mn", "md", "ml", "ms", "nn", "nd", "ng", "nt", "ns", "nst", "pp", "ph", "pl", "ps", "pd", "pr", "rr", "rd", "rn", "rl", "rs", "rt", "ss", "sh", "sht", "sl", "sn", "sr", "st", "str", "tr", "tt", "th", "tn", "tm", "tv", "vv", "vl", "vn"];
	var nm7 = ["", "", "", "", "", "", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "x", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "x", "ch", "ck", "th", "gs", "rd", "rg", "rk", "rm", "rn", "rq", "rs", "rst", "rx", "ds", "cs", "fs", "gs", "ks", "ls", "ms", "ns", "ps", "rs", "ts", "st", "ph", "sh", "ln", "lm", "lk", "ld", "lt"];
	var nm8 = ["c", "gian", "lese", "lian", "n", "nan", "ne", "nee", "nes", "nian", "nin", "no", "nsian", "r", "rd", "rn", "se", "sh", "t", "te", "vese", "vian"];
	var check = ["anal", "anus", "arse", "ass", "balls", "bastard", "biatch", "bitch", "bollock", "bollok", "boner", "boob", "bugger", "bum", "butt", "clitoris", "cock", "coon", "crap", "cunt", "damn", "dick", "dildo", "dyke", "fag", "feck", "felching", "fellate", "fellatio", "flange", "fuck", "gay", "goddamn", "homo", "jackass", "jerk", "jizz", "knobend", "labia", "muff", "nigga", "nigger", "penis", "piss", "poop", "prick", "pube", "pussy", "queer", "scrotum", "sex", "shit", "slut", "smegma", "spunk", "tit", "tosser", "turd", "twat", "vagina", "wank", "whore", "wtf"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		if (i < 5) {
			rnd4 = Math.floor(Math.random() * nm7.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm7[rnd4];
			for (j = 0; j < check.length; j++) {
				while (names === check[j]) {
					rnd = Math.floor(Math.random() * nm1.length);
					rnd2 = Math.floor(Math.random() * nm2.length);
					rnd3 = Math.floor(Math.random() * nm3.length);
					rnd4 = Math.floor(Math.random() * nm7.length);
					names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm7[rnd4];
				}
			}
		} else {
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm3.length);
			rnd7 = Math.floor(Math.random() * nm8.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd6] + nm8[rnd7];
			for (j = 0; j < check.length; j++) {
				while (names === check[j]) {
					rnd = Math.floor(Math.random() * nm1.length);
					rnd2 = Math.floor(Math.random() * nm2.length);
					rnd3 = Math.floor(Math.random() * nm3.length);
					rnd4 = Math.floor(Math.random() * nm4.length);
					rnd6 = Math.floor(Math.random() * nm3.length);
					rnd7 = Math.floor(Math.random() * nm8.length);
					names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm3[rnd6] + nm8[rnd7];
				}
			}
		}
		return names;
	}

}