var nm1 = ["", "", "", "", "", "b", "d", "g", "h", "j", "k", "m", "n", "r", "v", "z"];
var nm2 = ["a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "aa", "ua", "ia", "uu"];
var nm3 = ["c", "cr", "dr", "g", "gg", "gr", "gh", "k", "kr", "kk", "l", "n", "nk", "ng", "q", "r", "rr", "rk", "rg", "rq", "v", "vr", "vh", "z", "zg", "c", "g", "k", "l", "n", "q", "r", "v", "z", "c", "g", "k", "l", "n", "q", "r", "v", "z", "c", "g", "k", "l", "n", "q", "r", "v", "z", "c", "g", "k", "l", "n", "q", "r", "v", "z"];
var nm4 = ["d", "n", "r", "s", "th", "z"];
var nm5 = ["c", "g", "j", "k", "m", "n", "r", "s", "t", "v", "z"];
var nm6 = ["a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "ia", "ee", "ae", "ie"];
var nm7 = ["cc", "g", "gn", "gr", "k", "kk", "kr", "kn", "kz", "kl", "lk", "lg", "lr", "lz", "m", "mz", "mm", "n", "nn", "nk", "ng", "nz", "nr", "r", "rg", "rk", "rs", "rv", "s", "sz", "sr", "sq", "zz", "g", "k", "m", "n", "r", "t", "v", "z", "g", "k", "m", "n", "r", "t", "v", "z", "g", "k", "m", "n", "r", "t", "v", "z", "g", "k", "m", "n", "r", "t", "v", "z"];
var nm8 = ["amber", "ash", "axe", "battle", "beast", "blaze", "blood", "burning", "chaos", "cinder", "claw", "cold", "dark", "dead", "death", "deep", "doom", "ember", "far", "fire", "fist", "flame", "fury", "fuse", "glow", "grand", "hard", "haze", "heavy", "hell", "iron", "keen", "lone", "mist", "molten", "moon", "mountain", "mourn", "nether", "night", "pride", "proud", "pyre", "rage", "rough", "rumble", "shade", "shadow", "sharp", "skull", "spider", "steel", "still", "storm", "stout", "strong", "sun", "swift", "titan", "true", "wild", "wolf", "wrath"];
var nm9 = ["bane", "bash", "basher", "beam", "blade", "blaze", "blight", "bow", "branch", "brand", "breaker", "bringer", "caller", "claw", "crusher", "cut", "cutter", "fall", "fang", "fire", "fist", "flaw", "flayer", "force", "forge", "fury", "gaze", "gloom", "glory", "grip", "guard", "hammer", "hell", "horn", "hunter", "killer", "lash", "mane", "mark", "maul", "maw", "mourn", "rage", "reaper", "reaver", "ripper", "roar", "run", "runner", "scream", "shade", "shadow", "shard", "shot", "slayer", "snarl", "soar", "spear", "spire", "splitter", "stalker", "storm", "strike", "taker", "talon", "thorn", "ward", "weaver"];

function generator$wildstar$wildstar_drakens(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm8.length);
		rnd7 = Math.floor(Math.random() * nm9.length);
		while (nm8[rnd6] === nm9[rnd7]) {
			rnd7 = Math.floor(Math.random() * nm9.length);
		}
		lname = nm8[rnd6] + nm9[rnd7];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			if (i < 5) {
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
			if (i < 7) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + lname;
			} else {
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + lname;
			}
		}
		return names;
	}

}