var nm1 = ["b", "c", "d", "f", "g", "h", "l", "m", "n", "p", "r", "s", "t", "w", "y", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "bl", "br", "ch", "cl", "cr", "dr", "fl", "fr", "gl", "gr", "pl", "pr", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "tr", "tw", "wh", "wr", "sch", "scr", "sph", "shr", "spl", "spr", "str", "thr"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "eo", "ea", "ee", "oo", "oa", "ia", "io"];
var nm3 = ["br", "bl", "c", "ch", "cl", "ct", "ck", "cc", "d", "dg", "dw", "dr", "dl", "f", "g", "gg", "gl", "gw", "gr", "h", "k", "kr", "kw", "l", "ll", "lb", "ld", "lg", "lm", "ln", "lr", "lw", "lz", "m", "mr", "ml", "nw", "n", "nn", "ng", "nl", "p", "ph", "r", "rb", "rc", "rd", "rg", "rl", "rm", "rn", "rr", "rs", "rst", "rt", "rth", "rtr", "rw", "rv", "s", "ss", "sh", "st", "sth", "str", "sl", "sw", "t", "tb", "tl", "tg", "tm", "tn", "tw", "th", "tt", "v", "w", "wl", "wn", "x", "z"];
var nm4 = ["c", "d", "f", "ff", "g", "gg", "h", "l", "ll", "m", "mm", "n", "nn", "p", "pp", "r", "rr", "s", "ss", "t", "tt", "w"];
var nm5 = ["st", "sk", "sp", "nd", "nt", "nk", "mp", "rd", "ld", "lp", "rk", "lt", "lf", "pt", "ft", "ct", "t", "d", "k", "n", "p", "l", "g", "m", "s", "b", "c", "t", "d", "k", "n", "p", "l", "g", "m", "s", "b", "c"];
var nm6 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "West", "East", "North", "South", "Little", "Upper", "Lower", "Fort", "Upper West", "Upper East", "Upper North", "Upper South", "Lower West", "Lower East", "Lower North", "Lower South", "Midtown", "Waterside", "Bayside", "Downtown"];
var nm7 = ["", "Acre", "Avenue", "Bazaar", "Boulevard", "Center", "Circle", "Corner", "Cross", "District", "East", "Garden", "Grove", "Heights", "Hill", "Hills", "Market", "North", "Park", "Place", "Plaza", "Point", "Road", "Row", "Side", "South", "Square", "Street", "Town", "Vale", "Valley", "West", "Wood", "Yard"];

function generator$places$city_districts() {

	i = Math.floor(Math.random() * 10); {
		rnd6 = Math.floor(Math.random() * nm6.length);
		rnd7 = Math.floor(Math.random() * nm7.length);
		if (rnd6 < 20) {
			while (rnd7 === 0) {
				rnd7 = Math.floor(Math.random() * nm7.length);
			}
		} else {
			rnd7 = 0;
		}
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd5 = Math.floor(Math.random() * nm5.length);
		if (i < 2) {
			names = nm6[rnd6] + " " + nm1[rnd] + nm2[rnd2] + nm5[rnd5] + "  " + nm7[rnd7];
		} else if (i < 4) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			names = nm6[rnd6] + " " + nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm5[rnd5] + "  " + nm7[rnd7];
		} else if (i < 8) {
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			names = nm6[rnd6] + " " + nm1[rnd] + nm2[rnd2] + nm4[rnd3] + nm2[rnd4] + nm5[rnd5] + "  " + nm7[rnd7];
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm2.length);
			if (i < 8) {
				names = nm6[rnd6] + " " + nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd6] + nm2[rnd7] + nm5[rnd5] + "  " + nm7[rnd7];
			} else {
				names = nm6[rnd6] + " " + nm1[rnd] + nm2[rnd2] + nm4[rnd6] + nm2[rnd4] + nm3[rnd3] + nm2[rnd7] + nm5[rnd5] + "  " + nm7[rnd7];
			}
		}
		return names;
	}

}