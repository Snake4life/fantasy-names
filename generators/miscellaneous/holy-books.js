function generator$miscellaneous$holy_books(type) {
	var nm3 = ["Book", "Books", "Scroll", "Scrolls", "Testament", "Testaments", "Codex", "Codices", "Chronicle", "Chronicles", "Tome", "Tomes", "Word", "Words"];
	var nm4 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm5 = ["a", "e", "u", "i", "o", "y"];
	var nm6 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm7 = ["agi", "aldir", "aos", "arus", "borh", "bris", "bum", "bus", "dall", "dar", "darr", "des", "dis", "dite", "dohr", "don", "dos", "dros", "dum", "dur", "emis", "enar", "esis", "eus", "eyar", "eyr", "her", "ion", "ione", "ius", "jun", "ldir", "lios", "lo", "lous", "mes", "mir", "mjir", "mos", "mus", "nia", "nir", "nos", "nus", "ohr", "orr", "rasil", "reus", "ros", "ruer", "rus", "ses", "stus", "tar", "tarr", "teus", "thar", "ther", "tia", "ton", "tos", "tyx", "ysus"];
	var nm8 = ["ra", "ara", "ella", "elia", "nja", "yja", "ulla", "la", "na", "ana", "neas", "phine", "tris", "gyn", "syn", "dite", "ena", "hena", "tia", "anke", "mera", "nera", "soi", "heia", "mis", "thys", "asis", "one", "dione", "dona", "ona", "phion", "trix", "tix", "lene", "lena", "phy", "tune", "va", "una", "tuna", "arae", "aris", "ris", "tia", "rena", "raura", "dea", "enta", "dia", "ta"];

	var nm1 = ["Absolution", "Angels", "Answers", "Ardor", "Balance", "Birth", "Births", "Blessings", "Brotherhood", "Cerberus", "Change", "Children", "Clarity", "Connections", "Cycles", "Dawn", "Death", "Dedication", "Design", "Desires", "Divines", "Divinity", "Dominion", "Duality", "Dusk", "Earth", "Effigies", "Elements", "Embers", "Emissaries", "Epochs", "Eternity", "Eyes", "Facts", "Faith", "Fate", "Fealty", "Fears", "Felicity", "Fidelity", "Fire", "Flames", "Fury", "Genesis", "Glory", "Gods", "Grace", "Guidance", "Harmony", "Hearts", "Heaven", "Heralds", "Hope", "Illumination", "Inception", "Infinity", "Innocence", "Integrity", "Kinship", "Legacies", "Life", "Light", "Loyalty", "Miracles", "Moons", "Morality", "Nature", "Passion", "Perfection", "Piety", "Prophecies", "Prophets", "Prudence", "Purity", "Revelations", "Saints", "Sanction", "Seraphs", "Serenity", "Service", "Sight", "Sisterhood", "Souls", "Spirits", "Stars", "Suns", "Teachings", "Titans", "Tranquility", "Truths", "Valediction", "Virtues", "Vision", "Visions", "Vitality", "Witnesses", "Worship", "Worth", "Zeal", "Zion", "the Alpha", "the Archangel", "the Aspect", "the Child", "the Children", "the Curator", "the Custodian", "the Cycle", "the Daemon", "the Divine", "the Emissary", "the Equilibrium", "the Eye", "the Father", "the Heart", "the Matriarch", "the Mind", "the Moon", "the Mother", "the Omega", "the Oracle", "the Past", "the Patriarch", "the Phoenix", "the Rapture", "the Sentinel", "the Shepherd", "the Sign", "the Solstice", "the Sun", "the Truth"];
	var nm2 = ["Absolution", "Aeon", "Affinity", "Afterworld", "Almighty", "Alpha", "Amity", "Amnesty", "Angelic", "Apex", "Ardor", "Ascension", "Aspect", "Astral", "Ataraxia", "Azure", "Balance", "Birth", "Blessed", "Bloodline", "Brotherhood", "Celestial", "Century", "Cerberus", "Clarity", "Concord", "Connection", "Covenant", "Crown", "Curator", "Custodian", "Cycle", "Daemon", "Dawn", "Descendant", "Devotion", "Divine", "Divinity", "Dominion", "Duality", "Effigy", "Element", "Elysian", "Ember", "Emissary", "Empyrean", "Epitome", "Epoch", "Equilibrium", "Essence", "Eternal", "Ethereal", "Evidence", "Exemplary", "Faith", "Fate", "Fealty", "Felicity", "Fidelity", "Fire", "Force", "Fundamental", "Generation", "Genesis", "Glory", "Guardian", "Hallowed", "Harmony", "Heaven", "Heirloom", "Herald", "Heritage", "Heritage", "Holy", "Idol", "Illumination", "Immortal", "Inception", "Infinitude", "Infinity", "Innocence", "Integrity", "Keeper", "Kindred", "Kingdom", "Kinship", "Legacy", "Life", "Light", "Lineage", "Loyalty", "Lustrous", "Master", "Matriarch", "Mercy", "Messenger", "Miracle", "Moon", "Morality", "Myriad", "Noble", "Observance", "Omega", "Oracle", "Paragon", "Passion", "Patriarch", "Pedigree", "Perfection", "Phoenix", "Piety", "Pinnacle", "Pious", "Power", "Prime", "Prodigy", "Prophecy", "Prophet", "Prudence", "Pure", "Purity", "Rapture", "Realm", "Revelation", "Revered", "Reverent", "Righteous", "Sacred", "Saintly", "Sanctified", "Sanctity", "Sentinel", "Seraph", "Serenity", "Service", "Shepherd", "Sign", "Sinless", "Sisterhood", "Solemn", "Solstice", "Soul", "Spire", "Spirit", "Sun", "Titan", "Totem", "Tranquility", "Truth", "Unity", "Utopia", "Venerable", "Vertex", "Virtue", "Vision", "Vitality", "Witness", "Worship", "Worthy", "Zeal", "Zenith", "Zion"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm3.length);
		if (i < 3) {
			rnd2 = Math.floor(Math.random() * nm1.length);
			names = "The " + nm3[rnd] + " of " + nm1[rnd2];
			nm1.splice(rnd2, 1);
		} else if (i < 6) {
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = "The " + nm2[rnd2] + " " + nm3[rnd];
			nm1.splice(rnd2, 1);
		} else if (i < 8) {
			rnd2 = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			rnd6 = Math.floor(Math.random() * nm8.length);
			names = "The " + nm1[rnd2] + " of " + nm4[rnd3] + nm5[rnd4] + nm6[rnd5] + nm8[rnd6];
			nm1.splice(rnd2, 1);
		} else {
			rnd3 = Math.floor(Math.random() * nm4.length);
			rnd4 = Math.floor(Math.random() * nm5.length);
			rnd5 = Math.floor(Math.random() * nm6.length);
			rnd6 = Math.floor(Math.random() * nm7.length);
			names = "The " + nm3[rnd] + " of " + nm4[rnd3] + nm5[rnd4] + nm6[rnd5] + nm7[rnd6];
			nm1.splice(rnd2, 1);
		}
		return names;
	}

}