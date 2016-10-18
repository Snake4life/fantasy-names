var nm1 = ["", "", "", "", "", "c", "d", "gl", "h", "l", "m", "p", "pr", "r", "s", "t", "tr", "v", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "y", "io", "au", "ei"];
var nm3 = ["c", "cr", "chr", "ct", "g", "gn", "gz", "kr", "kt", "kx", "kn", "l", "lb", "ll", "mph", "n", "ph", "pr", "ps", "r", "rx", "rc", "rct", "rm", "rv", "rz", "st", "sp", "t", "tr", "v", "x", "xt", "c", "g", "l", "n", "r", "t", "v", "x"];
var nm4 = ["", "c", "cs", "n", "m", "r", "s", "t", "x"];
var nm5 = ["", "", "", "", "", "c", "d", "h", "l", "m", "n", "ph", "phr", "s", "sh", "t", "th", "v", "z"];
var nm6 = ["a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "y", "y", "y", "ia", "au", "ie", "io"];
var nm7 = ["b", "br", "c", "d", "dr", "f", "fr", "fn", "fl", "gh", "lv", "ln", "lm", "lz", "lph", "lf", "m", "mz", "mr", "mn", "n", "nv", "nz", "r", "rk", "rv", "rz", "rs", "t", "th", "v", "x", "z", "zn", "b", "c", "d", "f", "m", "n", "r", "t", "v", "x", "z", "b", "c", "d", "f", "m", "n", "r", "t", "v", "x", "z"];
var nm8 = ["", "", "", "", "", "c", "h", "n", "l", "ll", "s", "sh", "th", "x"];
var nm9 = ["Alpha", "Beta", "Bi", "Cen", "Cent", "Centi", "Chi", "Dec", "Deca", "Decem", "Delta", "Di", "Dodeca", "Du", "Duo", "Duodec", "Ennea", "Epsilon", "Eta", "Gamma", "Hec", "Hecato", "Hect", "Hep", "Hept", "Hepta", "Hex", "Hexa", "Iota", "Kappa", "Kilo", "Lambda", "Milli", "Mono", "Mu", "Non", "Nove", "Nu", "Nulli", "Oc", "Oct", "Octa", "Octo", "Ogdo", "Omega", "Penta", "Phi", "Pi", "Psi", "Quadri", "Quadru", "Rho", "Sedec", "Semi", "Sep", "Sept", "Sigma", "Tau", "Tetra", "Theta", "Tri", "Trio", "Unci", "Uni", "Upsilon", "Xi", "Zeta"];
var nm10 = ["bit", "byt", "coil", "col", "cue", "cy", "frag", "gine", "helix", "hicle", "jet", "lap", "lic", "lit", "lix", "logy", "loop", "maton", "mech", "mic", "mics", "net", "nic", "nics", "niq", "nis", "nism", "nix", "nogy", "nox", "pin", "ping", "pute", "ram", "rom", "ron", "ser", "sor", "tec", "tic", "tics", "ton", "tred", "tric", "tron", "vex", "vox", "ware", "xis", "zip"];

function generator$wildstar$wildstar_mecharis(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm9.length);
		rnd7 = Math.floor(Math.random() * nm10.length);
		lname = nm9[rnd6] + nm10[rnd7];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			if (i < 5) {
				rnd5 = Math.floor(Math.random() * nm8.length);
				if (rnd < 5) {
					while (rnd5 < 5) {
						rnd5 = Math.floor(Math.random() * nm8.length);
					}
				}
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + " " + lname;
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + " " + lname;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (rnd < 5) {
				while (rnd5 === 0) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + lname;
		}
		return names;
	}

}