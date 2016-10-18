var names2 = ["a", "e", "i", "o", "u", "aa", "ee", "ae"];
var names5 = ["C", "F", "H", "G", "J", "L", "M", "N", "R", "S", "Sh", "V", "T", "W", "X", "Y", "Z"];
var names6 = ["dal", "dda", "dor", "fal", "fin", "for", "gar", "l", "la", "lan", "las", "lin", "ll", "llo", "lon", "lun", "m", "ma", "man", "mas", "me", "min", "mis", "mm", "mma", "mor", "mos", "mun", "n", "nar", "nis", "nn", "nna", "r", "ra", "rah", "ram", "ras", "ris", "rol", "rrel", "rul", "s", "sa", "sal", "sar", "ss", "sul", "zh", "zu"];
var names7 = ["nar", "vas"];
var names8 = ["bra", "ca", "chol", "darum", "din", "dir", "dolor", "dor", "doruk", "firn", "fis", "gro", "hala", "hok", "ji", "jol", "ko", "kor", "kra", "larm", "lazi", "leya", "ma", "morn", "nbay", "nil", "nna", "pal", "pan", "ra", "rah", "raka", "ram", "rark", "reh", "ron", "sost", "talir", "vo", "vum", "wa", "wal", "wan", "wib", "worp", "yya", "zal", "zay", "zorn", "zzor"];

function generator$mass_effect$quarians(type) {
	if (type === 1) {
		var names1 = ["K", "G", "C", "F", "H", "J", "L", "M", "N", "R", "S", "V", "W", "Y", "Z", "C", "F", "H", "J", "L", "M", "N", "R", "S", "V", "W", "Y", "Z"];
		var names3 = ["f", "h", "l", "m", "n", "r", "s", "l", "n", "nn", "mm", "tor", "to", "sin", "lo"];
		var names4 = [""];
	} else {
		var names1 = ["C", "F", "H", "J", "L", "M", "N", "R", "S", "Sh", "W", "Y", "Z"];
		var names3 = ["f", "h", "l", "m", "n", "r", "s", "l", "n", "nn", "mm"];
		var names4 = ["a", "e", "u", "i", "o", "a"];
	}

	i = Math.floor(Math.random() * 10); {
		rnd0 = Math.floor(Math.random() * names1.length);
		rnd1 = Math.floor(Math.random() * names2.length);
		rnd2 = Math.floor(Math.random() * names3.length);
		rnd3 = Math.floor(Math.random() * names4.length);
		rnd4 = Math.floor(Math.random() * names5.length);
		rnd5 = Math.floor(Math.random() * names2.length);
		rnd6 = Math.floor(Math.random() * names6.length);
		rnd7 = Math.floor(Math.random() * names7.length);
		rnd8 = Math.floor(Math.random() * names5.length);
		rnd9 = Math.floor(Math.random() * names2.length);
		rnd10 = Math.floor(Math.random() * names8.length);
		names = names1[rnd0] + names2[rnd1] + names3[rnd2] + names4[rnd3] + "'" + names5[rnd4] + names2[rnd5] + names6[rnd6] + " " + names7[rnd7] + " " + names5[rnd8] + names2[rnd9] + names8[rnd10];
		return names;
	}

}