var nm1 = ["", "", "", "br", "d", "dr", "g", "gr", "kh", "kr", "m", "n", "r", "s", "sr", "str", "th", "tr", "thr", "v", "z"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "au", "ai", "oa", "ao"];
var nm3 = ["d", "g", "k", "l", "r", "th", "d", "g", "k", "l", "r", "th", "br", "d", "dh", "dr", "g", "gr", "gh", "gn", "gm", "gz", "gd", "k", "kr", "l", "lb", "ld", "lg", "lgr", "ldr", "nd", "ng", "nr", "ndr", "ngr", "r", "rd", "rdr", "rg", "rt", "rbr", "rb", "rgr", "th", "tr", "thr"];
var nm4 = ["c", "d", "g", "gg", "k", "m", "mm", "n", "r", "rd", "t"];
var nm5 = ["b", "bh", "c", "d", "dr", "g", "gh", "h", "m", "n", "s", "sk", "sc", "t", "th", "v", "z", "zh"];
var nm6 = ["e", "i", "u", "e", "i", "u", "e", "i", "u", "e", "i", "u", "a", "a", "o", "o"];
var nm7 = ["br", "dr", "dg", "dw", "dd", "ff", "fr", "gr", "gw", "gn", "gm", "gf", "gv", "kk", "kh", "kr", "kv", "lg", "lgr", "lv", "ng", "ngr", "ngw", "nd", "ndw", "ndr", "rg", "rgr", "rgw", "rw", "rz", "sg", "sgr", "sv", "th", "tr", "tv", "thr", "vr"];
var nm8 = ["", "", "", "", "", "d", "h", "m", "n", "t"];
var nm9 = ["amber", "autumn", "battle", "bear", "bitter", "black", "blunt", "boulder", "brane", "bright", "brittle", "broad", "broken", "bronze", "brown", "cask", "cinder", "cliff", "coal", "cold", "common", "copper", "crag", "deep", "distant", "ember", "far", "fiery", "fire", "flame", "flat", "flint", "forge", "full", "fuse", "gold", "golden", "grand", "granite", "gray", "great", "grim", "grudge", "grumble", "hammer", "hill", "ingot", "iron", "keen", "keg", "krag", "lead", "light", "magma", "merry", "metal", "mild", "mirth", "mithril", "mountain", "noble", "onyx", "plain", "proud", "regal", "rich", "rock", "rough", "rumble", "shatter", "silver", "slender", "solid", "steel", "stone", "storm", "stout", "strong", "thunder", "true"];
var nm10 = ["arm", "armor", "armour", "axe", "back", "basher", "beam", "beard", "bearer", "belly", "belt", "bender", "bluff", "bone", "bough", "brace", "branch", "brand", "breaker", "brew", "brewer", "bringer", "brow", "buckle", "buster", "chaser", "chest", "chin", "cloak", "crag", "crest", "digger", "dreamer", "feet", "finger", "fire", "fist", "fists", "flame", "foot", "force", "forge", "forged", "fury", "grip", "grog", "guard", "gut", "hammer", "hand", "hank", "head", "heart", "helm", "keeper", "maker", "mantle", "mark", "master", "might", "more", "punch", "rage", "seeker", "shaper", "shield", "shoulder", "shout", "strength", "strider", "striker", "surge", "sworn", "thane", "walker", "ward"];

function generator$warhammer$dwarfs(type) {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm9.length);
		rnd2 = Math.floor(Math.random() * nm10.length);
		while (nm9[rnd] === nm10[rnd2]) {
			rnd2 = Math.floor(Math.random() * nm10.length);
		}
		nameL = nm9[rnd] + nm10[rnd2];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + nameL;
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameL;
			} else {
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + nameL;
			}
		}
		return names;
	}

}