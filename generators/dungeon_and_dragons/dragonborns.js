function generator$dungeon_and_dragons$dragonborns(type) {
	var nm1 = ["Ali", "Ar", "Ba", "Bal", "Bel", "Bha", "Bren", "Caer", "Calu", "Dur", "Do", "Dra", "Era", "Faer", "Fro", "Gre", "Ghe", "Gora", "He", "Hi", "Ior", "Jin", "Jar", "Kil", "Kriv", "Lor", "Lumi", "Mar", "Mor", "Med", "Nar", "Nes", "Na", "Oti", "Orla", "Pri", "Pa", "Qel", "Ravo", "Ras", "Rho", "Sa", "Sha", "Sul", "Taz", "To", "Trou", "Udo", "Uro", "Vor", "Vyu", "Vrak", "Wor", "Wu", "Wra", "Wul", "Xar", "Yor", "Zor", "Zra"];
	var nm2 = ["barum", "bor", "broth", "ciar", "crath", "daar", "dhall", "dorim", "farn", "fras", "gar", "ghull", "grax", "hadur", "hazar", "jhan", "jurn", "kax", "kris", "kul", "lasar", "lin", "mash", "morn", "naar", "prax", "qiroth", "qrin", "qull", "rakas", "rash", "rinn", "roth", "sashi", "seth", "skan", "trin", "turim", "varax", "vroth", "vull", "warum", "wunax", "xan", "xiros", "yax", "ythas", "zavur", "zire", "ziros"];
	var nm3 = ["Ari", "A", "Bi", "Bel", "Cris", "Ca", "Drys", "Da", "Erli", "Esh", "Fae", "Fen", "Gur", "Gri", "Hin", "Ha", "Irly", "Irie", "Jes", "Jo", "Ka", "Kel", "Ko", "Lilo", "Lora", "Mal", "Mi", "Na", "Nes", "Nys", "Ori", "O", "Ophi", "Phi", "Per", "Qi", "Quil", "Rai", "Rashi", "So", "Su", "Tha", "Ther", "Uri", "Ushi", "Val", "Vyra", "Welsi", "Wra", "Xy", "Xis", "Ya", "Yr", "Zen", "Zof"];
	var nm4 = ["birith", "bis", "bith", "coria", "cys", "dalynn", "drish", "drith", "faeth", "fyire", "gil", "gissa", "gwen", "hime", "hymm", "karyn", "kira", "larys", "liann", "lyassa", "meila", "myse", "norae", "nys", "patys", "pora", "qorel", "qwen", "rann", "riel", "rina", "rinn", "rish", "rith", "saadi", "shann", "sira", "thibra", "thyra", "vayla", "vyre", "vys", "wophyl", "wyn", "xiris", "xora", "yassa", "yries", "zita", "zys"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2];
		}
		return names;
	}

}