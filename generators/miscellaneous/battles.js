function generator$miscellaneous$battles() {
	var names1 = ["Battle", "Assault", "Battle", "Battle", "Attack", "War", "War", "Siege"];
	var names2 = ["Advisors", "Allies", "Ancients", "Attrition", "Bad Omen", "Beliefs", "Bent Truths", "Betrayal", "Blind Justice", "Bloodthirst", "Bows", "Broken Bones", "Broken Dreams", "Broken Homes", "Broken Laws", "Broken Love", "Broken Minds", "Broken Mountains", "Broken Pacts", "Broken Wills", "Brothers", "Burning Fields", "Burning Lands", "Burning Plains", "Camouflage", "Chemistry", "Chiefs", "Corrupted Lands", "Corrupted Minds", "Courage", "Covert Actions", "Cowards", "Craftsmen", "Death's Fall", "Death's Rise", "Deception", "Delirium", "Devotion", "Dictators", "Differences", "Dishonesty", "Equality", "Eternal Bombardments", "Eternal Fires", "Eternal Hunger", "Eternal Regrets", "Eternal Suffering", "Executioners", "Exploding Mountains", "Faiths", "Fallen Angels", "False Promises", "False Prophets", "Fear", "Final Rests", "Fools", "Freedom", "Frozen Fires", "Frozen Lakes", "Glimmering Hope", "Glorious Conquests", "Gold", "Hallow Hill", "Heaven", "Hell", "Heroes", "High Tide", "Horrors", "Ignorance", "Imbalance", "Impending Doom", "Independence", "Insanity", "Integrity", "Iron", "Ivory", "Justice", "Kings Betrayal", "Kings Glory", "Kings Hill", "Kings Mountain", "Last Resorts", "Last Rites", "Liberty", "Lost Brothers", "Lost Faiths", "Lost Friends", "Lost Security", "Lost Sons", "Lost Souls", "Loyalties", "Lust", "Mad Bulls", "Mad Kings", "Mad Minds", "Maidens", "Mercy", "Naive Trust", "Nature", "Nature's Protectors", "New Allies", "New Hope", "New Orphans", "Nightmares", "Open Seas", "Pawns", "Pests", "Plagued Fires", "Poisoned Crops", "Poisoned Minds", "Purification", "Rats", "Red Waters", "Regrets", "Resources", "Scimitars", "Secrets", "Silence", "Smoking Homes", "Sons", "Spears", "Spies", "Starvation", "Steel", "Storms", "Strong Desires", "Tenacity", "Terror", "Titans", "Total Destruction", "Total Domination", "Treason", "Tribulation", "Trust", "Truth", "Tycoons", "Tyrants", "Unforseen Victory", "Unsung Heroes", "Utopia", "Vengeance", "Vile Actions", "Vile Men", "White Mountain", "Widow Makers", "Widows", "Wits", "the Ancestors", "the Apocalypse", "the Atlantic", "the Betrayed", "the Black Scar", "the Blood River", "the Broken Mountain", "the Burning Forest", "the Burning Sea", "the Chanceless", "the Curse", "the Dark", "the Dead Sea", "the Dieing Forest", "the Drained Sea", "the Dry Sea", "the Dunes", "the Eclipse", "the Endless Storm", "the Eternal Day", "the Eternal Night", "the Falling Sky", "the False King", "the False Prophet", "the Fiery Lake", "the Frozen Harbor", "the Frozen Ocean", "the High Seas", "the Homeless", "the Infested", "the Last Stand", "the Light", "the Molten Mountain", "the Night", "the Nomads", "the Occult", "the Oppressor", "the Peaks", "the People", "the Plague", "the Planet", "the Rebellion", "the Red Mountain", "the Retreating Ocean", "the Righteous", "the Risen", "the River Bank", "the Scorching Lands", "the Scourge", "the Shores", "the Towers", "the True King", "the True Prophet", "the Void"];
	var names3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
	var names4 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u"];
	var names5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
	var names6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y"];
	var names7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"];

	i = Math.floor(Math.random() * 10); {
		if (i < 6) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			names = names1[rnd] + " of " + names2[rnd2];
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names4.length);
			rnd4 = Math.floor(Math.random() * names7.length);
			names = names1[rnd] + " of " + names3[rnd2] + names4[rnd3] + names7[rnd4];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			rnd3 = Math.floor(Math.random() * names4.length);
			rnd4 = Math.floor(Math.random() * names5.length);
			rnd5 = Math.floor(Math.random() * names6.length);
			rnd6 = Math.floor(Math.random() * names7.length);
			names = names1[rnd] + " of " + names3[rnd2] + names4[rnd3] + names5[rnd4] + names6[rnd5] + names7[rnd];
		}
		return names;
	}

}