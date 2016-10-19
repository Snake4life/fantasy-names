function generator$world_of_warcraft$draenei(type) {
	var nm1 = ["Aho", "Ak", "Ar", "Art", "Az", "Beh", "Beho", "Bra", "Bran'", "Bre", "Cae", "Caed", "Cem", "Dek", "Der", "Dere", "Dran'", "Du", "Dug", "Eoc", "Fal", "Fan", "Fin", "Fun", "Ga", "Gan", "Han", "Har", "Hob", "Hoba", "Iz", "Jov", "Kav", "Kel", "Kha", "Kil", "Luc", "Ma", "Mah", "Maho", "Mu", "Mua", "Nah", "Naho", "Nob", "Nobu", "Oc", "Ock", "On", "Os", "Rem", "Ste", "Tal", "Tho", "Tor", "Tora", "Toral", "Uz", "Vel", "Vel'", "Ven", "Vor", "Yil"];
	var nm2 = ["g", "n", "ph", "f", "r", "t", "h", "d", "m", "ga", "na", "pha", "fa", "ra", "ta", "ha", "da", "ma", "go", "no", "pho", "fo", "ro", "to", "ho", "do", "mo", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm3 = ["aam", "aan", "ag", "aid", "allius", "allus", "alus", "am", "an", "anaar", "anos", "ard", "as", "at", "ath", "co", "daan", "diir", "ed", "el", "en", "fik", "iir", "il", "in", "ir", "iru", "is", "khen", "lac", "lag", "lat", "liir", "lir", "luun", "mat", "miir", "miis", "mir", "mis", "mos", "naar", "nan", "niir", "nis", "ogg", "omat", "onan", "ord", "orhan", "oth", "ras", "red", "tun", "ul", "undo", "uun"];
	var nm4 = ["Aal", "Ael", "Aelle", "Aello", "Aev", "Aeva", "Aeve", "Al", "Alta", "Av", "Ava", "Ave", "Ba", "Bet", "Bel", "Bil", "Cuz", "Ed", "Edi", "Edir", "Ego", "El", "Elle", "Ello", "En", "Er", "Ere", "Far", "Fe", "Fin", "Go", "Gor", "Got", "Haf", "Hafe", "Ir", "Ire", "Ires", "Is", "Ja", "Jael", "Jal", "Ji", "Jol", "Kha", "Kaz", "Lun", "Luna", "Ma", "Mah", "Mam", "Mer", "Mes", "Mi", "Mia", "Mo", "Mom", "Mon", "Mu", "Muh", "Mum", "Mus", "Ne", "Nes", "Nur", "Nurg", "Nus", "Pha", "Phae", "Phe", "Rem", "Reme", "Ruk", "Se", "Ses", "Si", "Sul", "Thel", "Thela", "Tre", "Tri", "Um", "Ura", "Val", "Valu"];
	var nm5 = ["b", "ba", "be", "bo", "d", "da", "de", "do", "h", "ha", "he", "ho", "la", "le", "lo", "r", "ra", "re", "ro", "s", "sa", "se", "so", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm6 = ["aan", "al", "all", "ally", "araa", "ca", "dine", "ela", "elle", "elli", "era", "ere", "ett", "ette", "gin", "guni", "haa", "hi", "hri", "in", "ine", "irah", "kua", "la", "laa", "laana", "lae", "laena", "lun", "mae", "mena", "mere", "mis", "mon", "nii", "nora", "oh", "ora", "raa", "rah", "ran", "ret", "rette", "ri", "rii", "rua", "sa", "stra", "straa", "taa", "ti", "tia", "tra", "traa", "ua", "un", "uni", "zi"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm4.length);
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			names = nm4[rnd] + nm5[rnd2] + nm6[rnd3];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
		}
		return names;
	}

}