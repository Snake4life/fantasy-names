/* Kellid */
var nm1 = ["b", "br", "d", "dr", "g", "k", "kr", "p", "pr", "q", "r", "str", "t", "tr", "v"];
var nm2 = ["a", "e", "i", "o", "u"];
var nm3 = ["d", "l", "ld", "lb", "lk", "lr", "m", "ml", "n", "nd", "nk", "r", "rk", "rc", "rd", "rl"];
var nm4 = ["c", "d", "g", "k", "n", "t"];
var nm5 = ["", "", "b", "bh", "d", "dh", "h", "kh", "l", "m", "n", "p", "r", "s", "t", "th", "v", "y"];
var nm6 = ["d", "ll", "lb", "ld", "lr", "l", "lk", "m", "n", "nn", "nr", "nd", "nk", "r", "rr", "rl", "rn", "rm", "rd"];
var nm7 = ["", "", "", "", "h", "n", "s", "t"];
/* Ulfen */
var nm8 = ["", "", "", "", "", "b", "bj", "br", "f", "fr", "g", "gr", "h", "hr", "hj", "j", "k", "kr", "m", "r", "s", "st", "sv", "sk", "t", "th", "v", "y"];
var nm9 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "ei", "uu", "ae"];
var nm10 = ["bj", "d", "ddv", "dg", "dm", "dv", "g", "gb", "gbj", "gf", "gg", "gn", "gnv", "k", "ks", "lb", "lbj", "ld", "ldm", "lk", "ll", "lld", "m", "n", "nd", "ng", "ngv", "nk", "nn", "nv", "p", "r", "rg", "rl", "rn", "rnl", "rr", "rs", "rt", "rv", "sg", "sk", "st", "th", "tv", "v", "w", "x", "z"];
var nm11 = ["", "", "", "", "c", "d", "f", "g", "gg", "gr", "k", "ld", "lf", "lfr", "ll", "m", "n", "nd", "ndr", "nn", "r", "rk", "rl", "rn", "rr", "rth", "st", "t"];
var nm12 = ["", "", "", "", "", "b", "br", "d", "dr", "f", "fr", "g", "gr", "h", "j", "k", "l", "lj", "m", "n", "r", "s", "sv", "th", "t", "v"];
var nm13 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "y", "y", "au", "ie", "ae"];
var nm14 = ["bj", "d", "df", "dg", "dh", "dl", "dn", "dr", "fl", "g", "gd", "gn", "gv", "ld", "lk", "ll", "llg", "lv", "m", "n", "nd", "nfr", "ng", "nj", "nng", "nnv", "r", "rd", "rf", "rg", "rgr", "rl", "rn", "sfr", "sg", "sl", "str", "th", "thr"];
var nm15 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "d", "f", "g", "ld", "lf", "n", "nn", "rd", "rg", "s", "th"];
var nm16 = ["Amber", "Arm", "Ash", "Autumn", "Battle", "Bear", "Black", "Blaze", "Blood", "Boar", "Boulder", "Brawl", "Bright", "Bronze", "Bull", "Cinder", "Cloud", "Cold", "Common", "Dark", "Dawn", "Dead", "Doom", "Dream", "Dusk", "Dust", "Ember", "Even", "Fine", "Forest", "Free", "Frost", "Frozen", "Gloom", "Gold", "Grand", "Great", "Grim", "Grizzly", "Hallow", "Hell", "High", "Honey", "Horn", "Ice", "Iron", "Keen", "Light", "Lone", "Long", "Mighty", "Mist", "Moss", "Mountain", "Night", "Noble", "Pale", "Plain", "Pride", "Proud", "Quick", "Rage", "Rapid", "Raven", "River", "Rock", "Rune", "Shadow", "Sharp", "Silent", "Silver", "Smoke", "Snow", "Soft", "Spirit", "Star", "Steel", "Stone", "Storm", "Strong", "Summer", "Swift", "Thunder", "Troll", "True", "War", "Wild", "Wind", "Winter", "Wolf"];
var nm17 = ["arm", "arrow", "bane", "bash", "bear", "blade", "brace", "brand", "breaker", "breath", "brew", "caller", "cleaver", "crest", "crusher", "cut", "cutter", "dream", "eye", "eyes", "fall", "fire", "fist", "flame", "force", "forge", "fury", "gaze", "gleam", "grip", "guard", "hair", "hall", "hammer", "hand", "heart", "hunter", "killer", "lash", "mane", "mantle", "mark", "maul", "rage", "reaper", "reaver", "rider", "ripper", "roar", "rock", "root", "scar", "scream", "shield", "shout", "slayer", "snarl", "song", "spirit", "splitter", "star", "stride", "sun", "sword", "thorn", "tongue", "walker", "ward", "watcher", "wind", "wine", "wolf"];
/*Varisian */
var nm18 = ["", "", "", "", "", "b", "c", "d", "f", "g", "h", "j", "k", "l", "r", "s", "tr", "v", "y"];
var nm19 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ua", "eo", "oi", "ia"];
var nm20 = ["b", "br", "bg", "c", "d", "dg", "dr", "ds", "k", "l", "ld", "lp", "m", "n", "nd", "ndr", "nn", "r", "rdr", "rg", "rn", "rr", "sm", "sn", "ss", "st", "v", "vr", "vg", "vd"];
var nm21 = ["", "", "", "c", "k", "l", "ll", "n", "r", "rd", "rt", "s", "sk", "v"];
var nm22 = ["", "", "", "", "", "b", "c", "d", "f", "h", "k", "l", "m", "n", "r", "s", "sh", "t", "v", "z"];
var nm23 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "ya", "uu", "ie", "ei", "ia", "eo", "ae"];
var nm24 = ["d", "ff", "f", "fr", "fl", "j", "l", "ld", "ll", "lm", "lr", "ls", "lt", "m", "mm", "ms", "mr", "ns", "nr", "n", "nd", "nn", "ph", "r", "rl", "rh", "rm", "rn", "s", "sh", "sk", "sr", "ss", "sl", "th", "tl", "v", "x"];
var nm25 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "h", "k", "n", "r", "s"];
var nm26 = ["", "", "", "", "", "c", "cz", "d", "f", "fr", "g", "gr", "j", "k", "kl", "m", "mv", "p", "r", "s", "ts", "v", "vh", "w", "z"];
var nm27 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "ai", "io", "ae", "aa", "oo"];
var nm28 = ["cc", "d", "ddr", "dm", "g", "gr", "j", "k", "l", "ld", "ll", "m", "ml", "n", "nd", "ndl", "ng", "nj", "nn", "nt", "r", "rdr", "rk", "rr", "rs", "shk", "sht", "sk", "st", "t", "th", "ttl", "v", "zm", "zn", "zz"];
var nm29 = ["", "", "", "", "", "", "", "", "d", "kz", "kcz", "l", "lf", "n", "r", "rc", "rd", "rk", "s", "t", "v"];
/* Azlanti */
var nm30 = ["", "", "", "", "b", "br", "cr", "c", "d", "dh", "dr", "g", "gr", "j", "k", "kr", "m", "n", "nh", "r", "x", "z", "zr"];
var nm31 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "ou"];
var nm32 = ["b", "br", "bz", "c", "cr", "d", "dr", "dl", "gh", "gg", "gr", "gn", "gm", "k", "kk", "kn", "km", "kr", "lr", "lm", "ln", "lb", "lg", "ld", "m", "md", "mz", "mr", "mg", "n", "nd", "ng", "nd", "nr", "r", "rg", "rgh", "rp", "rr", "rz", "th"];
var nm33 = ["", "", "", "", "", "c", "d", "g", "l", "n", "r", "s", "sh"];
var nm34 = ["", "", "", "", "", "b", "bh", "ch", "d", "dh", "g", "h", "k", "kh", "l", "m", "n", "nh", "r", "s", "sh", "t", "th", "v"];
var nm35 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ia", "ea"];
var nm36 = ["d", "dr", "dh", "f", "ff", "g", "gg", "gn", "gm", "gh", "gl", "h", "hh", "l", "ll", "llm", "ls", "lz", "lm", "ln", "lg", "ld", "m", "mm", "mn", "ms", "mz", "ml", "n", "nn", "nl", "ns", "nr", "r", "rs", "rr", "rl", "rsh", "s", "ss", "sh", "sr", "t", "v", "zn"];
var nm37 = ["", "", "", "", "", "", "", "", "", "", "h", "l", "m", "n", "s", "st", "th"];
var nm38 = ["", "", "", "", "", "b", "br", "c", "d", "dr", "g", "gr", "h", "k", "kr", "l", "m", "n", "r", "s", "sh", "st", "t", "th", "v", "x", "z"];
var nm39 = ["a", "e", "i", "o", "u"];
var nm40 = ["d", "dr", "f", "g", "gg", "gr", "gh", "gm", "j", "k", "kk", "kr", "kn", "kl", "l", "ll", "ld", "lg", "lb", "lm", "ln", "m", "mm", "md", "mb", "mr", "ml", "n", "nn", "nb", "nl", "ng", "ngr", "nr", "r", "rs", "rr", "rb", "rg", "rl", "ss", "sh", "t", "th", "v", "z"];
var nm41 = ["", "", "", "", "", "g", "ll", "l", "m", "n", "r", "s", "sh", "st", "th"];
/* Keleshite */
var nm42 = ["", "", "", "", "b", "c", "d", "dh", "f", "gh", "gr", "h", "j", "k", "m", "n", "r", "s", "sh", "t", "x", "w", "z"];
var nm43 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "a", "i", "i", "u", "aa", "ya", "eo", "ee", "oo", "ai"];
var nm44 = ["b", "d", "dd", "dh", "dr", "dw", "f", "g", "h", "hr", "hs", "j", "k", "km", "l", "ll", "m", "mm", "n", "ns", "q", "qd", "qm", "r", "rb", "rf", "rg", "rh", "rr", "rw", "s", "sf", "sh", "sm", "ss", "st", "z"];
var nm45 = ["", "", "b", "d", "dh", "f", "j", "jh", "k", "l", "lf", "m", "n", "r", "s", "sh", "th", "wz", "z"];
var nm46 = ["", "", "", "f", "gh", "h", "j", "k", "kh", "l", "m", "n", "p", "r", "s", "sh", "t", "th", "w", "z"];
var nm47 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "u", "i", "y", "ya", "aa", "ai", "iya", "ee"];
var nm48 = ["b", "br", "d", "dh", "f", "fl", "fn", "h", "hd", "hj", "hm", "j", "km", "l", "lm", "m", "mt", "n", "nt", "ph", "q", "r", "rh", "s", "sf", "sh", "shm", "sm", "t", "th", "z"];
var nm49 = ["", "", "", "", "", "", "", "", "", "", "f", "h", "l", "n", "r", "s", "t"];
var nm50 = ["", "", "", "", "b", "bh", "d", "f", "gh", "h", "j", "k", "kh", "m", "q", "r", "s", "sh", "t", "vr", "y", "z"];
var nm51 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "i", "i", "ee", "aa", "ou", "ei"];
var nm52 = ["b", "bb", "d", "dd", "dr", "f", "h", "hr", "j", "k", "l", "lk", "ll", "lm", "m", "n", "nb", "nl", "ns", "r", "rw", "s", "sh", "sm", "sp", "sr", "ss", "st", "th", "tt", "v", "w", "z"];
var nm53 = ["", "", "", "d", "h", "j", "kh", "l", "lm", "m", "n", "r", "s"];
/* Garundi */
var nm54 = ["", "", "", "b", "ch", "f", "g", "h", "j", "k", "kh", "m", "n", "p", "q", "r", "s", "t", "th", "v", "z"];
var nm55 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "ae", "eu", "aa", "ui"];
var nm56 = ["b", "ch", "dr", "f", "fm", "g", "h", "hbr", "hm", "k", "kh", "kht", "l", "m", "mm", "ms", "n", "nh", "nk", "nkh", "nm", "nn", "nr", "ns", "nt", "p", "ph", "ps", "pt", "r", "rg", "rk", "rm", "rp", "rph", "rr", "rs", "rt", "s", "sk", "skh", "ss", "st", "t", "thr", "zgh"];
var nm57 = ["", "", "", "b", "d", "f", "ff", "h", "ln", "nn", "p", "r", "s", "sh", "t", "x"];
var nm58 = ["", "", "", "", "b", "ch", "cl", "h", "k", "kh", "l", "m", "n", "p", "r", "s", "sh", "t", "th", "z"];
var nm59 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "ia", "au", "eo", "ei"];
var nm60 = ["b", "c", "fs", "h", "hm", "k", "kh", "kr", "kt", "l", "m", "mm", "n", "nk", "nkh", "nn", "ns", "nt", "p", "pp", "q", "r", "rm", "rs", "s", "sh", "st", "t", "th", "tm", "tr", "z"];
var nm61 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "f", "h", "l", "m", "n", "r", "s", "t"];
var nm62 = ["", "", "", "", "", "", "", "", "b", "ch", "cl", "f", "g", "h", "j", "k", "kh", "l", "m", "n", "p", "q", "r", "s", "sh", "t", "th", "v", "z"];
var nm63 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "ae", "eu", "aa", "ui", "ee", "ia", "au", "eo", "ei"];
var nm64 = ["b", "c", "ch", "dr", "f", "fm", "fs", "g", "h", "hbr", "hm", "k", "kh", "kht", "kr", "kt", "l", "m", "mm", "ms", "n", "nh", "nk", "nkh", "nm", "nn", "nr", "ns", "nt", "p", "ph", "pp", "ps", "pt", "q", "r", "rg", "rk", "rm", "rp", "rph", "rr", "rs", "rt", "s", "sh", "sk", "skh", "ss", "st", "t", "th", "thr", "tm", "tr", "z", "zgh"];
var nm65 = ["", "", "", "", "", "", "", "", "b", "d", "f", "ff", "h", "l", "ln", "m", "n", "nn", "p", "r", "s", "sh", "t", "x"];

function generator$pathfinder$humans(type) {

	i = Math.floor(Math.random() * 12); {
		if (type === 1) {
			if (i < 2) {
				rnd = Math.floor(Math.random() * nm5.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm6.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm7.length);
				names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5];
			} else if (i < 4) {
				rnd = Math.floor(Math.random() * nm12.length);
				rnd2 = Math.floor(Math.random() * nm13.length);
				rnd3 = Math.floor(Math.random() * nm14.length);
				rnd4 = Math.floor(Math.random() * nm13.length);
				rnd5 = Math.floor(Math.random() * nm15.length);
				rnd6 = Math.floor(Math.random() * nm16.length);
				rnd7 = Math.floor(Math.random() * nm17.length);
				names = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm13[rnd4] + nm15[rnd5] + " " + nm16[rnd6] + nm17[rnd7];
			} else if (i < 6) {
				rnd = Math.floor(Math.random() * nm22.length);
				rnd2 = Math.floor(Math.random() * nm23.length);
				rnd3 = Math.floor(Math.random() * nm24.length);
				rnd4 = Math.floor(Math.random() * nm23.length);
				rnd5 = Math.floor(Math.random() * nm25.length);
				rnd6 = Math.floor(Math.random() * nm26.length);
				rnd7 = Math.floor(Math.random() * nm27.length);
				rnd8 = Math.floor(Math.random() * nm28.length);
				rnd9 = Math.floor(Math.random() * nm27.length);
				rnd10 = Math.floor(Math.random() * nm29.length);
				names = nm22[rnd] + nm23[rnd2] + nm24[rnd3] + nm23[rnd4] + nm25[rnd5] + " " + nm26[rnd6] + nm27[rnd7] + nm28[rnd8] + nm27[rnd9] + nm28[rnd10];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm34.length);
				rnd2 = Math.floor(Math.random() * nm35.length);
				rnd3 = Math.floor(Math.random() * nm36.length);
				rnd4 = Math.floor(Math.random() * nm35.length);
				rnd5 = Math.floor(Math.random() * nm37.length);
				rnd6 = Math.floor(Math.random() * nm38.length);
				rnd7 = Math.floor(Math.random() * nm39.length);
				rnd8 = Math.floor(Math.random() * nm40.length);
				rnd9 = Math.floor(Math.random() * nm39.length);
				rnd10 = Math.floor(Math.random() * nm41.length);
				names = nm34[rnd] + nm35[rnd2] + nm36[rnd3] + nm35[rnd4] + nm37[rnd5] + " " + nm38[rnd6] + nm39[rnd7] + nm40[rnd8] + nm39[rnd9] + nm41[rnd10];
			} else if (i < 10) {
				rnd = Math.floor(Math.random() * nm46.length);
				rnd2 = Math.floor(Math.random() * nm47.length);
				rnd3 = Math.floor(Math.random() * nm48.length);
				rnd4 = Math.floor(Math.random() * nm47.length);
				rnd5 = Math.floor(Math.random() * nm49.length);
				rnd6 = Math.floor(Math.random() * nm50.length);
				rnd7 = Math.floor(Math.random() * nm51.length);
				rnd8 = Math.floor(Math.random() * nm52.length);
				rnd9 = Math.floor(Math.random() * nm51.length);
				rnd10 = Math.floor(Math.random() * nm53.length);
				names = nm46[rnd] + nm47[rnd2] + nm48[rnd3] + nm47[rnd4] + nm49[rnd5] + " " + nm50[rnd6] + nm51[rnd7] + nm52[rnd8] + nm51[rnd9] + nm53[rnd10];
			} else {
				rnd = Math.floor(Math.random() * nm58.length);
				rnd2 = Math.floor(Math.random() * nm59.length);
				rnd3 = Math.floor(Math.random() * nm60.length);
				rnd4 = Math.floor(Math.random() * nm59.length);
				rnd5 = Math.floor(Math.random() * nm61.length);
				rnd6 = Math.floor(Math.random() * nm62.length);
				rnd7 = Math.floor(Math.random() * nm63.length);
				rnd8 = Math.floor(Math.random() * nm64.length);
				rnd9 = Math.floor(Math.random() * nm63.length);
				rnd10 = Math.floor(Math.random() * nm65.length);
				names = nm58[rnd] + nm59[rnd2] + nm60[rnd3] + nm59[rnd4] + nm61[rnd5] + " " + nm62[rnd6] + nm63[rnd7] + nm64[rnd8] + nm63[rnd9] + nm65[rnd10];
			}
		} else {
			if (i < 2) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
			} else if (i < 4) {
				rnd = Math.floor(Math.random() * nm8.length);
				rnd2 = Math.floor(Math.random() * nm9.length);
				rnd3 = Math.floor(Math.random() * nm10.length);
				rnd4 = Math.floor(Math.random() * nm9.length);
				rnd5 = Math.floor(Math.random() * nm11.length);
				rnd6 = Math.floor(Math.random() * nm16.length);
				rnd7 = Math.floor(Math.random() * nm17.length);
				names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm9[rnd4] + nm11[rnd5] + " " + nm16[rnd6] + nm17[rnd7];
			} else if (i < 6) {
				rnd = Math.floor(Math.random() * nm18.length);
				rnd2 = Math.floor(Math.random() * nm19.length);
				rnd3 = Math.floor(Math.random() * nm20.length);
				rnd4 = Math.floor(Math.random() * nm19.length);
				rnd5 = Math.floor(Math.random() * nm21.length);
				rnd6 = Math.floor(Math.random() * nm26.length);
				rnd7 = Math.floor(Math.random() * nm27.length);
				rnd8 = Math.floor(Math.random() * nm28.length);
				rnd9 = Math.floor(Math.random() * nm27.length);
				rnd10 = Math.floor(Math.random() * nm29.length);
				names = nm18[rnd] + nm19[rnd2] + nm20[rnd3] + nm19[rnd4] + nm21[rnd5] + " " + nm26[rnd6] + nm27[rnd7] + nm28[rnd8] + nm27[rnd9] + nm28[rnd10];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm30.length);
				rnd2 = Math.floor(Math.random() * nm31.length);
				rnd3 = Math.floor(Math.random() * nm32.length);
				rnd4 = Math.floor(Math.random() * nm31.length);
				rnd5 = Math.floor(Math.random() * nm33.length);
				rnd6 = Math.floor(Math.random() * nm38.length);
				rnd7 = Math.floor(Math.random() * nm39.length);
				rnd8 = Math.floor(Math.random() * nm40.length);
				rnd9 = Math.floor(Math.random() * nm39.length);
				rnd10 = Math.floor(Math.random() * nm41.length);
				names = nm30[rnd] + nm31[rnd2] + nm32[rnd3] + nm31[rnd4] + nm33[rnd5] + " " + nm38[rnd6] + nm39[rnd7] + nm40[rnd8] + nm39[rnd9] + nm41[rnd10];
			} else if (i < 10) {
				rnd = Math.floor(Math.random() * nm42.length);
				rnd2 = Math.floor(Math.random() * nm43.length);
				rnd3 = Math.floor(Math.random() * nm44.length);
				rnd4 = Math.floor(Math.random() * nm43.length);
				rnd5 = Math.floor(Math.random() * nm45.length);
				rnd6 = Math.floor(Math.random() * nm50.length);
				rnd7 = Math.floor(Math.random() * nm51.length);
				rnd8 = Math.floor(Math.random() * nm52.length);
				rnd9 = Math.floor(Math.random() * nm51.length);
				rnd10 = Math.floor(Math.random() * nm53.length);
				names = nm42[rnd] + nm43[rnd2] + nm44[rnd3] + nm43[rnd4] + nm45[rnd5] + " " + nm50[rnd6] + nm51[rnd7] + nm52[rnd8] + nm51[rnd9] + nm53[rnd10];
			} else {
				rnd = Math.floor(Math.random() * nm54.length);
				rnd2 = Math.floor(Math.random() * nm55.length);
				rnd3 = Math.floor(Math.random() * nm56.length);
				rnd4 = Math.floor(Math.random() * nm55.length);
				rnd5 = Math.floor(Math.random() * nm57.length);
				rnd6 = Math.floor(Math.random() * nm62.length);
				rnd7 = Math.floor(Math.random() * nm63.length);
				rnd8 = Math.floor(Math.random() * nm64.length);
				rnd9 = Math.floor(Math.random() * nm63.length);
				rnd10 = Math.floor(Math.random() * nm65.length);
				names = nm54[rnd] + nm55[rnd2] + nm56[rnd3] + nm55[rnd4] + nm57[rnd5] + " " + nm62[rnd6] + nm63[rnd7] + nm64[rnd8] + nm63[rnd9] + nm65[rnd10];
			}
		}
		return names;
	}

}