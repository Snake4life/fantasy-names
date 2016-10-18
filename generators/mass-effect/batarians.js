var nm2 = ["a", "e", "u", "i", "o", "", "", "", "", "", "", "", "", "", ""];
var nm3 = ["b", "br", "c", "cr", "d", "dh", "dr", "f", "g", "gr", "gh", "k", "kh", "kr", "p", "pr", "r", "s"];
var nm4 = ["a", "e", "a", "o"];
var nm5 = ["chi", "chia", "cress", "fin", "fine", "kia", "kira", "kis", "lea", "leya", "lile", "lla", "lle", "lya", "men", "mis", "misa", "mye", "neya", "nim", "nin", "nine", "nis", "nith", "nna", "nne", "nya", "phe", "phi", "pril", "pris", "rish", "rith", "sin", "sina", "the", "tia", "tin", "vile", "zis"];
var nm6 = ["b", "c", "d", "f", "g", "k", "m", "n", "p", "r", "s"];
var nm7 = ["'", ""];
var nm8 = ["ba", "b", "bar", "can", "char", "dah", "drak", "dor", "gan", "goh", "gar", "han", "hal", "h", "kan", "kk", "lak", "lok", "lor", "mak", "mon", "nak", "nrek", "prak", "pos", "rah", "ral", "rk", "roh", "rok", "ros", "rr", "ss", "star", "th", "tor", "van", "vran", "war", "wen"];
var nm9 = ["cor", "gan", "gar", "grom", "ko", "kon", "lem", "lo", "m", "mak", "mo", "n", "nk", "no", "po", "por", "prak", "rag", "rak", "rek", "rem", "rk", "rlak", "rn", "rok", "ros", "rvan", "sk", "srak", "svan", "svin", "th", "than", "thar", "thor", "tin", "to", "tok", "tor", "y"];

function generator$mass_effect$batarians(type) {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm2.length);
		rnd2 = Math.floor(Math.random() * nm3.length);
		rnd3 = Math.floor(Math.random() * nm4.length);
		rnd4 = Math.floor(Math.random() * nm5.length);
		rnd5 = Math.floor(Math.random() * nm3.length);
		rnd6 = Math.floor(Math.random() * nm4.length);
		rnd7 = Math.floor(Math.random() * nm6.length);
		rnd8 = Math.floor(Math.random() * nm7.length);
		rnd9 = Math.floor(Math.random() * nm6.length);
		rnd10 = Math.floor(Math.random() * nm4.length);
		rnd11 = Math.floor(Math.random() * nm8.length);
		rnd12 = Math.floor(Math.random() * nm9.length);
		if (type === 1) {
			names = nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm9[rnd12] + " " + nm3[rnd5] + nm4[rnd6] + nm6[rnd7] + nm7[rnd8] + nm6[rnd9] + nm4[rnd10] + nm8[rnd11];
		} else {
			names = nm2[rnd] + nm3[rnd2] + nm4[rnd3] + nm5[rnd4] + " " + nm3[rnd5] + nm4[rnd6] + nm6[rnd7] + nm7[rnd8] + nm6[rnd9] + nm4[rnd10] + nm8[rnd11];
		}
		return names;
	}

}