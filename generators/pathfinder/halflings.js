var nm1 = ["", "", "b", "br", "d", "f", "h", "j", "l", "m", "n", "p", "r", "s", "t", "tr", "v", "vr", "x"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa"];
var nm3 = ["b", "b", "d", "d", "f", "f", "g", "g", "k", "k", "l", "l", "lb", "ld", "m", "m", "mr", "mg", "n", "n", "nd", "ng", "nk", "nt", "r", "r", "rb", "rc", "rg", "rr", "rk", "sg", "sk", "st", "v", "v", "x", "x"];
var nm4 = ["", "", "", "k", "l", "m", "n", "nd", "pp", "r", "rd", "rn", "s", "th"];
var nm5 = ["", "", "", "b", "d", "f", "h", "j", "k", "l", "m", "n", "pr", "r", "s", "t", "v", "w", "y"];
var nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "iu", "io", "oe", "ai", "ia", "ae"];
var nm7 = ["dg", "f", "f", "hs", "hr", "hn", "hj", "l", "l", "lc", "lk", "ll", "lm", "ln", "ld", "lr", "m", "m", "mb", "n", "n", "nt", "nth", "nr", "r", "r", "rl", "rr", "s", "s", "ss", "st", "str", "t", "t", "th", "tt", "v", "v", "y", "y", "z", "z"];
var nm8 = ["", "", "", "", "", "", "", "", "", "", "h", "l", "n", "s", "t", "th"];
var nm9 = ["", "", "", "b", "bl", "c", "d", "f", "g", "gl", "gn", "h", "k", "kl", "n", "p", "r", "s", "t", "v", "vl"];
var nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y", "ia", "ae", "ea", "ai"];
var nm11 = ["bl", "br", "bbl", "dl", "dn", "dr", "ffl", "ggl", "gr", "gdd", "gn", "l", "ld", "lb", "lv", "ln", "lm", "lr", "lz", "lv", "m", "mb", "md", "n", "nd", "ng", "nb", "nv", "nch", "nd", "r", "rb", "rd", "rw", "s", "sr", "sb", "sd", "sl", "v", "vr", "vl", "wh", "zr", "zz"];
var nm12 = ["", "", "", "g", "l", "lk", "n", "nch", "nd", "r", "rd", "rg", "s", "th", "x"];
var nm13 = ["Amber", "Arms", "Ash", "Autumn", "Bard", "Black", "Blaze", "Blossom", "Bright", "Bronze", "Cask", "Cinder", "Cliff", "Cloud", "Cold", "Common", "Coven", "Crag", "Dark", "Dawn", "Day", "Deep", "Dew", "Down", "Dream", "Dusk", "Dust", "Earth", "Even", "Ever", "Far", "Feather", "Fern", "Flame", "Flat", "Flint", "Fog", "Forest", "Free", "Frost", "Full", "Gold", "Grand", "Grass", "Gray", "Green", "Hard", "Haven", "Haze", "Heart", "High", "Hill", "Honor", "Humble", "Iron", "Keen", "Leaf", "Light", "Lone", "Long", "Low", "Meadow", "Mild", "Mist", "Moon", "Moss", "Never", "Night", "Noble", "Orb", "Pale", "Pine", "Plain", "Rain", "Red", "Rich", "River", "Rumble", "Shadow", "Silent", "Simple", "Single", "Snow", "Soft", "Spirit", "Spring", "Star", "Still", "Stone", "Summer", "Sun", "Swift", "Tree", "True", "Truth", "Turn", "Water", "Whit", "Wind", "Winter", "Wise", "Wood"];
var nm14 = ["arm", "beam", "bend", "blaze", "bloom", "blossom", "bough", "brace", "branch", "brand", "breath", "breeze", "brook", "brow", "cloud", "coin", "creek", "crest", "dew", "down", "draft", "dream", "fall", "flaw", "flow", "flower", "force", "gaze", "gazer", "gem", "glade", "gleam", "glide", "glow", "grain", "grip", "guard", "hair", "hand", "heart", "helm", "horn", "keep", "leaf", "less", "light", "more", "orb", "peak", "ridge", "root", "run", "shine", "shot", "soar", "song", "spark", "stream", "stride", "sun", "surge", "sword", "sworn", "thorn", "tide", "track", "vale", "valor", "ward", "water", "whirl", "wing", "with", "worth"];

function generator$pathfinder$halflings(type) {

	i = Math.floor(Math.random() * 10); {
		rnd10 = Math.floor(Math.random() * nm9.length);
		rnd11 = Math.floor(Math.random() * nm10.length);
		rnd12 = Math.floor(Math.random() * nm12.length);
		if (i % 3 === 0 && i % 2 != 0) {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			rnd15 = Math.floor(Math.random() * nm11.length);
			rnd16 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm11[rnd15] + nm10[rnd16] + nm12[rnd12];
		} else if (i % 2 === 0) {
			rnd13 = Math.floor(Math.random() * nm13.length);
			rnd14 = Math.floor(Math.random() * nm14.length);
			nameLast = nm13[rnd13] + nm14[rnd14];
		} else {
			rnd13 = Math.floor(Math.random() * nm11.length);
			rnd14 = Math.floor(Math.random() * nm10.length);
			nameLast = nm9[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
		}
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			rnd5 = Math.floor(Math.random() * nm8.length);
			if (i < 5) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + " " + nameLast;
			} else {
				rnd6 = Math.floor(Math.random() * nm7.length);
				rnd7 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5] + " " + nameLast;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				while (rnd < 2) {
					rnd = Math.floor(Math.random() * nm1.length);
				}
				while (rnd5 < 3) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + "  " + nameLast;
			} else if (i < 7) {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nameLast;
			} else {
				rnd3 = Math.floor(Math.random() * nm3.length);
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + " " + nameLast;
			}
		}
		return names;
	}

}