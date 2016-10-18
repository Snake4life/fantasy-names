var names1 = ["Ae", "Aega", "Aera", "Aery", "Bae", "Baese", "Balae", "Dae", "Daema", "Daera", "Gae", "Gahae", "Galae", "Garae", "Jacae", "Jae", "Jaehae", "Jaere", "Lae", "Lucae", "Ma", "Mae", "Maeha", "Malae", "Mata", "Rae", "Ragae", "Rahae", "Rhae", "Tae", "Taece", "Tahae", "Talae", "Tyrae", "Va", "Vae", "Vahae", "Vi", "Vise", "Yrae"];
var names2 = ["dar", "dor", "gar", "garon", "garys", "gel", "gon", "gor", "lar", "larr", "larys", "lon", "lor", "lyx", "mar", "marr", "marys", "mion", "mon", "mond", "mor", "morys", "myx", "nar", "narr", "nor", "nys", "nyx", "raenar", "rion", "ron", "rys", "var", "von", "vor"];
var names3 = ["Aene", "Aere", "Alae", "Aly", "Bae", "Bhae", "Ba", "Dae", "Daene", "Delae", "Elae", "Erae", "Hae", "Haele", "He", "Jae", "Jaela", "Jelae", "Mae", "Maele", "Malae", "Manae", "Nae", "Naela", "Naere", "Nelae", "Nesae", "Raene", "Relae", "Renae", "Rhae", "Rhaene", "Sae", "Saela", "Saene", "Saere", "Selae", "Vae", "Vhae", "Vyse"];
var names4 = ["hna", "hra", "hrys", "hnae", "hra", "la", "lys", "lla", "lyra", "mys", "mala", "mera", "na", "nla", "nera", "nna", "nya", "nyra", "nys", "ra", "rla", "rya", "rys", "ssa", "sanne", "sella", "sa", "sys"];
var names5 = ["Aer", "Ag", "Ar", "Bael", "Bar", "Ber", "Caen", "Cal", "Cel", "Daer", "Dal", "Dor", "Gael", "Gal", "Gon", "Laen", "Laer", "Len", "Maen", "Mal", "Mel", "Nael", "Nar", "Noh", "Qar", "Qoh", "Rael", "Raen", "Rah", "Taen", "Tael", "Tar", "Vael", "Val", "Vel"];
var names6 = ["aellis", "aelor", "aenor", "aeris", "aleos", "anyon", "areon", "daerys", "eneos", "ennis", "eris", "gaeron", "garis", "gyreon", "iar", "inarys", "itheos", "laeris", "laeron", "larys", "maereon", "naeros", "nalys", "nareon", "naris", "raenos", "ralis", "reos", "talor", "talos", "taris", "theon", "theos", "tigar", "yreos"];

function generator$game_of_thrones$valyrians(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			names = names3[rnd] + names4[rnd2] + " " + names5[rnd3] + names6[rnd4];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			rnd3 = Math.floor(Math.random() * names5.length);
			rnd4 = Math.floor(Math.random() * names6.length);
			names = names1[rnd] + names2[rnd2] + " " + names5[rnd3] + names6[rnd4];
		}
		return names;
	}

}