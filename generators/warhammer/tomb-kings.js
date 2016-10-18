var nm1 = ["", "", "", "", "ch", "f", "h", "k", "kh", "m", "n", "r", "s", "t", "th"];
var nm2 = ["a", "e", "o", "a", "e", "o", "a", "e", "o", "a", "e", "o", "i", "i"];
var nm3 = ["b", "ch", "f", "h", "k", "kh", "l", "m", "mh", "n", "p", "ph", "r", "s", "sh", "t", "th", "y", "b", "bd", "ch", "ct", "f", "h", "k", "kh", "kht", "kt", "l", "m", "mh", "mkh", "mt", "n", "nkh", "ns", "p", "ph", "phk", "phr", "pht", "pr", "pth", "r", "rkh", "rs", "rt", "s", "sf", "sh", "shk", "skh", "sph", "ss", "st", "t", "th", "tm", "tr", "ttr", "y"];
var nm4 = ["", "", "f", "h", "kh", "m", "n", "nb", "p", "ph", "r", "rs", "s"];
var nm5 = ["b", "h", "k", "kh", "m", "n", "p", "ph", "r", "s", "sh", "t", "th"];
var nm6 = ["a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "e", "i", "o", "o"];
var nm7 = ["b", "d", "f", "fr", "g", "gt", "gh", "h", "k", "kh", "kt", "l", "m", "mkh", "mph", "n", "nkh", "nph", "nth", "nkhn", "ns", "nt", "p", "ph", "phr", "pth", "r", "rh", "rm", "rt", "ry", "s", "st", "t", "tr", "th", "thy", "y", "z", "zh"];
var nm8 = ["Academic", "Acclaimed", "Adept", "Ambitious", "Ancient", "Architect", "Artist", "Austere", "Black", "Blessed", "Bright", "Brilliant", "Celebrated", "Chaste", "Composed", "Conjurer", "Content", "Crimson", "Cunning", "Devoted", "Diligent", "Earnest", "Educated", "Elegant", "Enchanted", "Enlightened", "Euphoric", "Exalted", "Flawless", "Generous", "Gifted", "Giving", "Glorious", "Graceful", "Grand", "Great", "Hallowed", "Herald", "Hierpohant", "Holy", "Honorable", "Honored", "Humble", "Idealist", "Illustrious", "Immortal", "Imperishable", "Incredible", "Infinite", "Knowing", "Learned", "Light", "Loyal", "Magnificent", "Majestic", "Marvelous", "Oracle", "Paragon", "Patient", "Powerful", "Prestigious", "Prime", "Prophet", "Soothsayer", "Sophisticated", "Terrific", "Treasure", "Treasured", "Valiant", "Visionary", "Watcher", "White", "Zealous"];

function generator$warhammer$tomb_kings(type) {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm8.length);
		nameL = " the " + nm8[rnd];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm6.length);
			if (i < 5) {
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nameL;
			} else {
				rnd5 = Math.floor(Math.random() * nm7.length);
				rnd6 = Math.floor(Math.random() * nm6.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd5] + nm6[rnd6] + nameL;
			}
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (rnd < 4) {
				while (rnd5 < 2) {
					rnd5 = Math.floor(Math.random() * nm4.length);
				}
			}
			if (i < 5) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nameL;
			} else {
				rnd6 = Math.floor(Math.random() * nm3.length);
				rnd7 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5] + nameL;
			}
		}
		return names;
	}

}