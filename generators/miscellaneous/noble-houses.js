function generator$miscellaneous$noble_houses() {
	var names1 = ["Ander", "Arm", "Arn", "Bal", "Batten", "Beau", "Beres", "Black", "Blan", "Boat", "Bott", "Bran", "Brew", "Bridge", "Brow", "Buck", "Cal", "Camp", "Car", "Caul", "Chal", "Chap", "Clay", "Cole", "Con", "Cope", "Coul", "Coving", "Craw", "Cunning", "Daven", "Daw", "Dris", "Du", "Ed", "Eger", "Est", "Fair", "Farn", "Fiel", "Fore", "Fox", "Frank", "Free", "Fuller", "Gallo", "Gardi", "Garret", "Glad", "Gold", "Good", "Gran", "Greg", "Gren", "Ham", "Hamil", "Har", "Harring", "Hart", "Hen", "Hol", "Hop", "How", "Hub", "Hum", "Hutch", "Jen", "Ken", "Knap", "Lam", "Lamb", "Lan", "Law", "Le", "Lind", "Living", "Mac", "Man", "Marsh", "Mau", "Max", "May", "Mea", "Mer", "Mon", "Mont", "Mor", "More", "Moris", "Mul", "Mur", "Nel", "Nichol", "Nick", "Nor", "O", "Os", "Pad", "Paken", "Pal", "Par", "Part", "Patter", "Pau", "Pear", "Penning", "Pet", "Peter", "Pett", "Pick", "Pit", "Pitt", "Port", "Put", "Rain", "Ram", "Ran", "Rem", "Rober", "Robin", "Rosen", "Rot", "Roths", "Rott", "Rut", "Ruther", "Rux", "San", "Saun", "Saw", "Sey", "Shan", "Shear", "Shep", "Shur", "Sin", "Skel", "Skin", "Small", "Solo", "Spen", "Stan", "Ste", "Stone", "Strat", "Sul", "Swee", "Tal", "Tay", "Tho", "Thorn", "Tom", "Town", "Under", "Valen", "Wai", "Wal", "War", "Wat", "Wea", "Web", "Wer", "Whit", "Wil", "Win", "Woo", "Wood", "Wyn", "Yeat"];
	var names2 = ["bard", "barry", "barth", "bell", "bert", "borne", "bot", "bow", "brand", "brandt", "brick", "brook", "burg", "burn", "card", "caster", "cher", "child", "clair", "coll", "comb", "cox", "cus", "dal", "dall", "daway", "del", "dell", "der", "ders", "ding", "don", "dows", "drey", "dwell", "dwin", "fax", "field", "ford", "fort", "gan", "ger", "gett", "gomery", "gor", "hall", "ham", "herd", "hold", "hope", "ker", "kett", "kins", "lace", "land", "ledge", "leigh", "ler", "less", "lins", "lor", "lyn", "maker", "man", "mann", "mar", "mas", "mer", "mers", "mert", "mier", "mon", "mond", "mont", "mour", "nard", "nedy", "nell", "nelly", "ner", "ney", "ning", "nings", "non", "nor", "pard", "perd", "phens", "phrey", "port", "rance", "rant", "rence", "rene", "rett", "rice", "ridge", "rish", "rough", "row", "ryett", "say", "sen", "send", "sey", "sley", "smith", "son", "ster", "ston", "stone", "strong", "sworth", "ter", "tero", "ters", "thall", "tine", "ton", "van", "ver", "ville", "vine", "ward", "wards", "way", "well", "wen", "wens", "win", "wood", "yer"];

	var names3 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z", "br", "dr", "fr", "gr", "pr", "tr", "st", "fl", "gl", "bl", "pl", "ph", "sh", "sl", "", "", "", "", "", "", "", "", "", ""];
	var names4 = ["a", "e", "i", "o", "u", "ai", "oo", "ee", "ea", "ou", "ai"];
	var names5 = ["bb", "cc", "dd", "gg", "kk", "ll", "mm", "nn", "rr", "ss", "pp", "bs", "ck", "ckl", "dg", "dk", "dl", "ds", "dw", "gl", "lb", "lbr", "ld", "ldw", "lf", "lm", "lst", "lt", "lw", "mb", "mps", "nc", "nch", "nd", "ndr", "ns", "nsl", "nt", "nth", "ntl", "rb", "rdn", "rg", "rk", "rl", "rn", "rns", "rp", "rt", "rv", "sh", "st", "stm", "tch", "tl", "tm", "vs", "wd", "wf", "wl", "wn", "wst", "yd", "yt"];
	var names6 = ["ch", "gg", "ggs", "gs", "k", "l", "ld", "ll", "m", "mb", "n", "ng", "ngs", "ns", "p", "ph", "r", "rd", "rn", "rs", "s", "sh", "ss", "t", "tt", "w", "wl", "ws", "y", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

	var names7 = ["Amber", "Apple", "Arm", "August", "Autumn", "Bar", "Bell", "Black", "Boat", "Bow", "Brew", "Bride", "Bridge", "Bronze", "Brown", "Buck", "Camp", "Can", "Chamber", "Chap", "Clay", "Cliff", "Cob", "Cole", "Coll", "Copper", "Cotton", "Coving", "Craw", "Crow", "Cunning", "Dark", "Daven", "Daw", "Down", "Dye", "Eagle", "East", "Feather", "Fish", "Fletch", "Fore", "Fox", "Free", "Fuller", "Gallo", "Gard", "Gentle", "Gil", "Gill", "God", "Gold", "Good", "Grand", "Green", "Grim", "Gross", "Hart", "Hawk", "Hollo", "Hunting", "Kil", "Knight", "Law", "Living", "Loch", "Lock", "Love", "Marsh", "Merry", "Mill", "Moon", "More", "Moss", "New", "Night", "North", "Rain", "Raven", "Rich", "Robin", "Roth", "Rott", "Sea", "Silver", "Small", "Solo", "South", "Spring", "Stone", "Summer", "Sweet", "Timber", "Town", "Under", "Web", "West", "Whit", "Winter", "Wood"];
	var names8 = ["bard", "beard", "borne", "bow", "breed", "bride", "burn", "colt", "comb", "dall", "end", "field", "ford", "gard", "guard", "hall", "ham", "head", "hill", "kind", "land", "ledge", "less", "ling", "low", "maker", "man", "mann", "mere", "mond", "more", "mour", "port", "rich", "riddle", "ridge", "send", "smith", "son", "star", "stein", "ster", "strong", "tomb", "ton", "tree", "ward", "water", "way", "well", "win", "wood"];


	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			names = names1[rnd] + names2[rnd2];
		} else if (i < 6) {
			rnd = Math.floor(Math.random() * names7.length);
			rnd2 = Math.floor(Math.random() * names8.length);
			names = names7[rnd] + names8[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names4.length);
			if (rnd2 > 4) {
				while (rnd4 > 4) {
					rnd4 = Math.floor(Math.random() * names4.length);
				}
			}
			rnd5 = Math.floor(Math.random() * names6.length);
			names = names3[rnd] + names4[rnd2] + names5[rnd3] + names4[rnd4] + names6[rnd5];
		}
		return names;
	}

}