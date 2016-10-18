var nm1 = ["B", "Br", "D", "Dr", "Gr", "J", "K", "Kr", "L", "N", "M", "S", "Sk", "Sn", "St", "T", "Tr", "V", "Vr"];
var nm2 = ["a", "e", "i", "o", "u", "y", "aa", "ee"];
var nm3 = ["g", "gg", "gt", "gh", "k", "kt", "kk", "l", "ll", "nt", "nx", "r", "rl", "rr", "rk", "rn", "rg", "sk"];
var nm4 = ["a", "e", "i", "o", "u"];
var nm5 = ["d", "g", "gr", "j", "k", "kr", "l", "mt", "ng", "nt", "r", "rt", "rn", "st", "ts", "th", "v"];
var nm6 = ["", "", "g", "k", "l", "m", "n", "r", "x"];
var nm7 = ["Adept", "Admired", "Aggressive", "Aggressor", "Agile", "Ambitious", "Assassin", "Avenger", "Beast", "Behemoth", "Bloodbringer", "Bloodhunter", "Bloodied", "Bold", "Brave", "Brilliant", "Brutal", "Butcher", "Champion", "Clever", "Corruptor", "Crafty", "Crooked", "Cunning", "Danger", "Dapper", "Defiant", "Diligent", "Doombringer", "Eliminator", "Enforcer", "Enormous", "Exalted", "Executioner", "Expert", "Fearless", "Glorious", "Grand", "Great", "Hunter", "Illustrious", "Immortal", "Incredible", "Infamous", "Inventor", "Killer", "Knowing", "Loyal", "Magnificent", "Marvelous", "Master", "Masterful", "Menace", "Merciless", "Mighty", "Paragon", "Powerful", "Prestigious", "Proud", "Razor", "Reckless", "Reliable", "Ruthless", "Slayer", "Sneaky", "Stark", "Stout", "Strong", "Terrific", "Terror", "Turbulent", "Undefeated", "Valiant", "Vengeful", "Victorious", "Vigilant", "Warlord", "Warmonger", "Warrior", "Wild", "Wonderful", "Wrathful", "Wretched", "Zealous"];
var nm8 = ["B", "D", "G", "J", "K", "L", "N", "M", "S", "T", "V"];
var nm9 = ["d", "g", "gg", "gr", "k", "kr", "kk", "l", "ll", "ng", "n", "nn", "r", "rl", "rr", "rk", "rn", "rg", "st", "sk", "th", "v"];

function generator$doctor_who$sontarans() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd7 = Math.floor(Math.random() * nm8.length);
		rnd8 = Math.floor(Math.random() * nm4.length);
		rnd9 = Math.floor(Math.random() * nm9.length);
		rnd10 = Math.floor(Math.random() * nm4.length);
		rnd11 = Math.floor(Math.random() * nm6.length);
		if (i < 5) {
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm7.length);
			names = nm8[rnd7] + nm4[rnd8] + nm9[rnd9] + nm4[rnd10] + nm6[rnd11] + "  " + nm1[rnd] + nm2[rnd2] + nm3[rnd3] + " the " + nm7[rnd4];
		} else if (i < 8) {
			rnd2 = Math.floor(Math.random() * nm4.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm8[rnd7] + nm4[rnd8] + nm9[rnd9] + nm4[rnd10] + nm6[rnd11] + "  " + nm1[rnd] + nm4[rnd2] + nm5[rnd3] + nm4[rnd4] + nm6[rnd5] + " the " + nm7[rnd6];
		} else {
			rnd2 = Math.floor(Math.random() * nm4.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm3.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = nm8[rnd7] + nm4[rnd8] + nm9[rnd9] + nm4[rnd10] + nm6[rnd11] + "  " + nm1[rnd] + nm4[rnd2] + nm5[rnd3] + nm4[rnd4] + nm3[rnd5] + " the " + nm7[rnd6];
		}
		return names;
	}

}