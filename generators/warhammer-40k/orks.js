var names1 = ["b", "br", "ch", "d", "dh", "dr", "g", "gh", "gr", "hr", "k", "kh", "kr", "m", "n", "r", "sk", "sm", "sn", "t", "tr", "v", "vr", "w", "wr", "z", "zh", "zr", "", "", "", "", ""];
var names2 = ["a", "i", "o", "u", "a", "u"];
var names3 = ["b", "d", "dbr", "dr", "g", "gb", "gd", "gg", "gh", "gn", "gt", "gz", "hrbl", "k", "kg", "kk", "kt", "lgr", "nz", "r", "rb", "rg", "rgn", "rgr", "rk", "rkr", "rl", "rz", "sk", "skr", "t", "tgr", "tzm", "tzn", "zdr", "zg", "zgr"];
var names4 = ["a", "o", "u"];
var names5 = ["d", "g", "gar", "gas", "gg", "gus", "k", "kh", "kk", "m", "nak", "r", "rd", "rk", "x", "z", "zak", "zz", ];

var names6 = ["Barb", "Battle", "Big", "Blood", "Blud", "Bone", "Brain", "Crook", "Crown", "Dark", "Dome", "Doom", "Dream", "Ead", "Ed", "Face", "Fire", "Fist", "Gloom", "Glum", "God", "Gore", "Grave", "Grim", "Gut", "Gutz", "Hed", "Hell", "Ice", "Iron", "Jaw", "Jowl", "Kill", "Klaw", "Krook", "Mad", "Mighty", "Mug", "Muzzle", "Rabid", "Rage", "Rekk", "Rock", "Scalp", "Skar", "Skull", "Slay", "Strong", "War", "Wild"];
var names7 = ["acka", "ackah", "basha", "bashah", "boila", "boilah", "braka", "brakah", "brakka", "brakkah", "breaka", "breakah", "busta", "choppa", "choppah", "cleava", "cleavah", "clompa", "clompah", "cooka", "cookah", "cracka", "crackah", "crasha", "crashah", "crumpa", "crumpah", "crusha", "crushah", "cutta", "cuttah", "dagga", "daggah", "fang", "fist", "gasha", "gashah", "gutta", "guttah", "hacka", "hackah", "kleava", "kleavah", "krak", "kraka", "krakah", "krumpa", "krumpah", "krusha", "krushah", "rippa", "rippah", "shredda", "shreddah", "skar", "skorcha", "skorchah", "slasha", "slashah", "smasha", "smashah", "snagga", "snaggah", "snappa", "snappah", "spitta", "spittah", "splitta", "splittah", "stampa", "stampah", "stompa", "stompah", "trasha", "trashah", "wakka", "wakkah", "whacka", "whackah"];

function generator$warhammer_40k$orks() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names3.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			rnd5 = Math.floor(Math.random() * names5.length);
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5];
		} else {
			rnd = Math.floor(Math.random() * names6.length);
			rnd2 = Math.floor(Math.random() * names7.length);
			names = names6[rnd] + names7[rnd2];
		}
		return names;
	}

}