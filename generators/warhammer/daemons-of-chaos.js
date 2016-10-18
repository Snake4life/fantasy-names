var nm1 = ["", "", "", "", "c", "ch", "cr", "cz", "g", "gr", "k", "kr", "kh", "n", "q", "qh", "qr", "r", "rh", "sc", "str", "sk", "t", "tr", "v", "vr", "z", "zh"];
var nm2 = ["a", "o", "u", "a", "o", "u", "i", "a", "o", "u", "a", "o", "u", "i", "e", "e", "ai"];
var nm3 = ["'", "", "", "", "", ""];
var nm4 = ["ch", "dr", "dj", "dz", "g", "gh", "gg", "gr", "gd", "gb", "k", "kr", "kz", "m", "mn", "mz", "mr", "n", "nn", "nd", "ng", "nz", "ndr", "nbr", "ngr", "r", "rr", "rdr", "rgr", "rz", "rzh", "rzr", "rbr", "sr", "sg", "sgh", "shr", "zh", "zr", "zhr", "zg", "zk"];
var nm5 = ["c", "k", "l", "n", "nd", "s", "th", "z"];
var nm6 = ["amber", "ash", "battle", "bitter", "blade", "blaze", "blazing", "blood", "bone", "chain", "chaos", "cinder", "claw", "dead", "death", "ember", "fate", "fire", "flame", "fury", "gore", "grim", "heart", "hell", "horn", "lone", "mourn", "nether", "night", "obsidian", "onyx", "plague", "pyre", "rage", "shadow", "silent", "skull", "slate", "storm", "void", "wild", "wrath"];
var nm7 = ["bane", "bender", "binder", "blaze", "bleeder", "blight", "born", "brand", "breaker", "breath", "bringer", "caller", "chaser", "cleaver", "crest", "dancer", "drifter", "father", "flayer", "force", "forged", "gaze", "gazer", "grip", "heart", "hunter", "keeper", "maker", "master", "might", "mourn", "reaper", "reaver", "rider", "ripper", "seeker", "shade", "shadow", "shaper", "strider", "striker", "sworn", "taker", "thane", "watcher", "weaver"];
var nm8 = ["the ", "", "", ""];

function generator$warhammer$daemons_of_chaos() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm4.length);
		rnd6 = Math.floor(Math.random() * nm5.length);
		rnd7 = Math.floor(Math.random() * nm6.length);
		rnd8 = Math.floor(Math.random() * nm7.length);
		rnd9 = Math.floor(Math.random() * nm8.length);
		while (nm6[rnd7] === nm7[rnd8]) {
			rnd8 = Math.floor(Math.random() * nm7.length);
		}
		names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd5] + nm2[rnd4] + nm5[rnd6] + " " + nm8[rnd9] + nm6[rnd7] + nm7[rnd8];
		return names;
	}

}