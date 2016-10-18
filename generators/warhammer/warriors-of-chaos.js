var nm1 = ["", "", "", "b", "bl", "br", "d", "dr", "dj", "f", "fr", "g", "gr", "gh", "k", "kh", "kr", "m", "r", "s", "sc", "sr", "sk", "sz", "str", "t", "tr", "v", "w"];
var nm2 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "ao", "au", "oa", "ay"];
var nm3 = ["d", "gg", "k", "kh", "l", "m", "r", "rr", "z", "zh", "zz", "d", "gg", "k", "kh", "l", "m", "r", "rr", "z", "zh", "zz", "d", "gg", "k", "kh", "l", "m", "r", "rr", "z", "zh", "zz", "d", "gg", "k", "kh", "l", "m", "r", "rr", "z", "zh", "zz", "d", "dr", "dz", "gv", "gg", "gr", "gn", "gtr", "gz", "k", "kr", "kz", "kh", "ktr", "kth", "kx", "l", "lr", "lfr", "lvr", "lv", "lg", "lgr", "ld", "ldr", "m", "mk", "mkr", "mz", "mv", "mvr", "r", "rr", "rx", "rz", "rzr", "rk", "rkh", "rch", "rgh", "rb", "sz", "str", "sgr", "sg", "sk", "skr", "st", "sht", "shtr", "shk", "szh", "z", "zh", "zz", "zr"];
var nm4 = ["", "", "b", "ch", "k", "l", "lk", "ld", "n", "nd", "r", "rd", "rk", "rt", "rr", "s", "sk", "t", "tts", "tch", "x"];
var nm5 = ["bh", "br", "d", "dh", "f", "fr", "fh", "g", "gh", "gr", "kh", "kr", "k", "m", "mh", "n", "nh", "r", "rh", "s", "sh", "sl", "sm", "sn", "st", "sth", "t", "th", "thr", "tr", "v", "vh", "vr", "w", "wh"];
var nm6 = ["a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "a", "a", "ia", "ea", "ae"];
var nm7 = ["d", "g", "gg", "gh", "k", "kk", "kh", "l", "ll", "m", "mm", "r", "rr", "s", "ss", "z", "zh", "zz", "d", "g", "gg", "gh", "k", "kk", "kh", "l", "ll", "m", "mm", "r", "rr", "s", "ss", "z", "zh", "zz", "d", "g", "gg", "gh", "k", "kk", "kh", "l", "ll", "m", "mm", "r", "rr", "s", "ss", "z", "zh", "zz", "d", "dj", "dn", "fr", "fg", "gg", "g", "gr", "gh", "gn", "gm", "gz", "k", "kk", "kn", "kh", "kr", "kz", "kt", "kth", "l", "ll", "lr", "lx", "lt", "lth", "ln", "lk", "m", "mm", "mn", "mr", "mv", "mz", "mk", "nk", "ng", "nm", "nr", "nth", "nz", "nv", "r", "rr", "rth", "rsh", "rz", "rzh", "rl", "rc", "rch", "s", "ss", "sz", "sh", "shz", "shn", "sq", "shq", "sht", "shtr", "szh", "z", "zz", "zh", "zn", "zhn"];
var nm8 = ["amber", "battle", "bitter", "black", "blaze", "blazing", "blood", "burn", "burning", "chaos", "cinder", "daemon", "dark", "dead", "death", "demon", "doom", "ember", "fiery", "fire", "flame", "fuse", "gloom", "haze", "hell", "moon", "nether", "night", "pyre", "rage", "rot", "shade", "shadow", "silent", "storm", "sun", "thunder", "twice", "void", "wild", "wraith", "wrath"];
var nm9 = ["bane", "bash", "blaze", "blight", "bone", "born", "bound", "breath", "buster", "chaser", "cleaver", "eater", "fall", "fang", "fire", "flame", "flare", "flaw", "force", "forge", "forged", "fury", "gaze", "guard", "gut", "hand", "heart", "lash", "mark", "marked", "might", "more", "mourn", "rage", "reaper", "reaver", "scar", "scream", "seeker", "shade", "shadow", "shard", "spawn", "spawned", "spew", "spit", "strength", "stride", "sunder", "surge", "sworn", "wrath"];
var nm10 = ["Abandoned", "Aggressor", "Anguished", "Beast", "Befouled", "Behemoth", "Berserker", "Bewitched", "Blood Bathed", "Blood Soaked", "Bloodied", "Bloody", "Bone Crusher", "Corrupted Mind", "Corruption Lord", "Corruptor", "Crooked Smile", "Cunning", "Cunning Mind", "Curseling", "Dark Lord", "Dark Master", "Dark Night", "Dead Mind", "Defiled", "Dread Lord", "Eternal", "Everchosen", "Explosive", "Faithless", "Forsaken", "Fury", "Gory", "Grave Digger", "Grave Robber", "Grim Reaper", "Grotesque", "Hollow", "Hound", "Ill Tempered", "Impure", "Insane", "Irrational", "Jester", "Leechlord", "Lone Wolf", "Lost Mind", "Magnificent", "Mammoth", "Maneater", "Manslayer", "Menace", "Merciless", "Mutant", "Necromancer", "Nightmare", "Nomad", "Parasite", "Pollutor", "Rash", "Roamer", "Rotten", "Rotting", "Sanguine", "Sanguine Lord", "Serpent", "Serpent Tongue", "Shadow Dweller", "Sinner", "Skeptic", "Skinner", "Slaughterer", "Soothsayer", "Suneater", "Transient", "Unstable", "Vagrant", "Vengeful", "Volatile", "Wanderer", "Warmonger", "Wicked", "Wrathful", "Wreckage", "Wretched"];



function generator$warhammer$warriors_of_chaos(type) {

	i = Math.floor(Math.random() * 10); {
		if (i % 3 === 0) {
			rnd = Math.floor(Math.random() * nm8.length);
			rnd2 = Math.floor(Math.random() * nm9.length);
			while (nm8[rnd] === nm9[rnd2]) {
				rnd2 = Math.floor(Math.random() * nm9.length);
			}
			lName = nm8[rnd] + nm9[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm10.length);
			lName = "the " + nm10[rnd];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			if (i < 6) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + " " + lName;
			} else {
				rnd5 = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5] + nm6[rnd6] + " " + lName;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 6) {
				if (rnd < 3) {
					while (rnd5 < 2) {
						rnd5 = Math.floor(Math.random() * nm4.length);
					}
				}
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + lName;
			} else {
				rnd7 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + lName;
			}
		}
		return names;
	}

}