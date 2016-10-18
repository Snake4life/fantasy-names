var nm1 = ["br", "d", "dr", "g", "gr", "j", "k", "kr", "q", "r", "t", "v", "z"];
var nm2 = ["a", "e", "o", "u"];
var nm3 = ["b", "br", "d", "dr", "g", "gg", "gn", "k", "kn", "kk", "lk", "lg", "r", "rr", "rk", "rg", "rv", "rz", "rd", "rb", "v", "z", "zk", "zg"];
var nm4 = ["c", "d", "g", "k", "ll", "r", "s", "z"];
var nm5 = ["ch", "d", "f", "h", "j", "k", "l", "n", "r", "t", "v", "z"];
var nm6 = ["a", "e", "o"];
var nm7 = ["dk", "dr", "fk", "fr", "gn", "kn", "kr", "kz", "x", "lk", "lr", "lg", "lz", "rv", "rs", "rz", "rd", "rb", "sk", "sh", "sv", "st", "sr", "v", "vk", "z", "zk"];
var nm8 = ["h", "l", "ll", "m", "n", "nn", "r", "s", "ss", "t", "tt", "z"];
var nm9 = ["blast", "bleak", "bone", "boulder", "brutal", "bulk", "burst", "cold", "crack", "crag", "crash", "dark", "deep", "doom", "ember", "fight", "fire", "firm", "fist", "flame", "force", "frost", "grand", "grim", "hard", "ice", "iron", "long", "metal", "power", "red", "rigid", "shadow", "slab", "slam", "slate", "smash", "stark", "steel", "stern", "stone", "stout", "strong", "stubborn", "ten", "thunder", "timber", "titan", "tough", "vault"];
var nm10 = ["bend", "blaze", "blight", "bough", "breaker", "brow", "burst", "buster", "clash", "crag", "crest", "crusher", "cut", "down", "dream", "fall", "flake", "force", "fury", "grip", "guard", "heart", "horn", "hunter", "keep", "keeper", "lash", "mark", "master", "might", "more", "prime", "quake", "rage", "reaper", "rend", "ridge", "right", "roar", "runner", "shade", "shadow", "shard", "shatter", "shout", "sky", "sliver", "smasher", "snap", "song", "sorrow", "spell", "spire", "spirit", "splinter", "split", "splitter", "storm", "stride", "strike", "thorn", "track", "trap", "valor", "walker", "ward", "watcher"];

function generator$wildstar$wildstar_granoks(type) {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm9.length);
		rnd7 = Math.floor(Math.random() * nm10.length);
		while (nm9[rnd6] === nm10[rnd7]) {
			rnd7 = Math.floor(Math.random() * nm10.length);
		}
		lname = nm9[rnd6] + nm10[rnd7];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			if (i < 6) {
				rnd3 = Math.floor(Math.random() * nm7.length);
				rnd4 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + " " + lname;
			} else {
				rnd3 = Math.floor(Math.random() * nm8.length);
				names = nm5[rnd] + nm6[rnd2] + nm8[rnd3] + " " + lname;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			if (i < 6) {
				rnd4 = Math.floor(Math.random() * nm2.length);
				rnd5 = Math.floor(Math.random() * nm4.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + lname;
			} else {
				names = nm1[rnd] + nm2[rnd2] + nm4[rnd5] + " " + lname;
			}
		}
		return names;
	}

}