var nm1 = ["b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y", "", "", "", "", "", "", "", "", ""];
var nm2 = ["a", "e", "u", "i", "o"];
var nm3 = ["b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y"];
var nm4 = ["b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y", "b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w", "x", "y", "bn", "dn", "fn", "gn", "kn", "pn", "sn", "tn", "bm", "dm", "fm", "gm", "km", "pm", "sm", "tm", "bk", "dk", "lk", "mk", "nk", "pk", "sk", "tk", "bl", "fl", "gl", "pl", "tl", "xl", "sl", "bd", "gd", "fd", "ld", "pd", "sd", "xd", "bb", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "ww", "br", "dr", "gr", "fr", "kr", "pr", "tr", "xr"];

function generator$halo$mgalekgolos() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm3.length);
		rnd6 = Math.floor(Math.random() * nm2.length);

		rnd7 = Math.floor(Math.random() * nm3.length);
		rnd8 = Math.floor(Math.random() * nm2.length);
		rnd9 = Math.floor(Math.random() * nm3.length);
		rnd10 = Math.floor(Math.random() * nm2.length);

		rnd11 = Math.floor(Math.random() * nm3.length);
		rnd12 = Math.floor(Math.random() * nm2.length);
		rnd13 = Math.floor(Math.random() * nm4.length);
		rnd14 = Math.floor(Math.random() * nm2.length);
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd5] + nm2[rnd6] + " " + nm3[rnd7] + nm2[rnd8] + nm3[rnd9] + nm2[rnd10] + " " + nm3[rnd11] + nm2[rnd12] + nm4[rnd13] + nm2[rnd14];
		return names;
	}

}