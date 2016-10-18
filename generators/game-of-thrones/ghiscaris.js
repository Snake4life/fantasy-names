var nm1 = ["", "", "dr", "g", "gr", "h", "kr", "m", "pr", "q", "r", "sr", "sh", "z", "zh"];
var nm2 = ["a", "ei", "i", "o", "e", "a", "e", "i", "o", "a", "a"];
var nm3 = ["dn", "d", "gh", "ghd", "gn", "nd", "md", "k", "kh", "kn", "kl", "q", "qh", "qn", "rd", "rn", "rm", "sn", "zd", "zh", "zn", "zm", "zl"];
var nm4 = ["hr", "hl", "k", "l", "n", "q", "r", "s", "z"];
var nm5 = ["zo", "na", "mo"];
var nm6 = ["Ch", "D", "G", "H", "K", "L", "M", "N", "P", "Pr", "R", "S", "Sh", "Z", "Zh"];
var nm7 = ["a", "e", "i", "o", "a", "a"];
var nm8 = ["dn", "g", "gd", "ghd", "gn", "nd", "n", "m", "md", "kh", "l", "q", "qh", "qn", "r", "rr", "sh", "ss", "zz", "zd", "zh", "zn", "zm", "zl"];
var nm9 = ["", "", "", "d", "dh", "g", "gh", "h", "k", "l", "m", "n", "p", "qu", "r", "rh", "sh", "yh", "zh", "z"];
var nm10 = ["a", "e", "i", "u", "o", "a", "a"];
var nm11 = ["", "", "", "", "", "dh", "g", "hn", "hz", "hl", "kn", "kl", "l", "llh", "md", "nd", "q", "qu", "qq", "r", "rr", "rd", "sh", "sn", "z", "zk", "zz", "zn", "zd", "zh"];
var nm12 = ["", "a", "e", "i", "u", "o", "a", "a"];
var nm13 = ["", "", "", "hl", "k", "n", "q", "r", "z", "zn"];

function generator$game_of_thrones$ghiscaris(type) {

	i = Math.floor(Math.random() * 10); {
		rnd9 = Math.floor(Math.random() * nm9.length);
		rnd10 = Math.floor(Math.random() * nm10.length);
		rnd11 = Math.floor(Math.random() * nm11.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		rnd13 = Math.floor(Math.random() * nm13.length);
		names2 = nm9[rnd9] + nm10[rnd10] + nm11[rnd11] + nm12[rnd12] + nm13[rnd13];
		if (rnd11 < 5) {
			rnd12 = 0;
		} else {
			while (rnd12 === 0) {
				rnd12 = Math.floor(Math.random() * nm12.length);
			}
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm7.length);
			rnd3 = Math.floor(Math.random() * nm8.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names1 = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm7[rnd4] + nm8[rnd5] + nm7[rnd6];
			names = names1 + " " + names2.substr(0, 1).toUpperCase() + names2.substr(1);
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			names1 = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			names = names1.substr(0, 1).toUpperCase() + names1.substr(1) + " " + nm5[rnd6] + " " + names2.substr(0, 1).toUpperCase() + names2.substr(1);
		}
		return names;
	}

}