function generator$rift$high_elfs(type) {
	if (type === 1) {
		var names1 = ["Ael", "Aem", "Aer", "Aern", "Aest", "Ag", "Aghn", "Ail", "Aiy", "Alis", "Am", "Amay", "Aoib", "Awen", "Brian", "Brig", "Cael", "Caen", "Cainn", "Ceall", "Cear", "Chey", "Daer", "Deir", "Don", "Eab", "Ead", "Eil", "Eist", "Eor", "Eten", "Faen", "Fen", "Fin", "Finn", "Gael", "Gel", "Hat", "Kim", "Kol", "Laen", "Leen", "Lenm", "Maed", "Maen", "Maer", "Maev", "Mag", "Mair", "Med", "Mig", "Moir", "Mor", "Muir", "Naem", "Nam", "Nual", "On", "Onid", "Orl", "Ros", "Saen", "Shan", "Sib", "Sor", "Taer", "Tak", "Ter", "Wak", "Wik", "Yok"];
		var names2 = ["aela", "aelah", "aena", "aene", "aenon", "aid", "aigen", "aimh", "aine", "aith", "ala", "alae", "alasa", "ane", "angwa", "ania", "anne", "anon", "aoin", "aoine", "athla", "auma", "awa", "eal", "eala", "eamhna", "eann", "ear", "earca", "eekoni", "een", "eine", "eis", "enda", "enia", "enna", "iav", "ighid", "ilahi", "ilin", "ine", "inita", "inka", "inn", "iona", "ionn", "irin", "irne", "is", "ise", "ish", "ita", "odhna", "oise", "oma", "ona", "oni", "onora", "ose", "ovi", "uala", "uanee", "ulah", "unia", "uoia"];
	} else {
		var names1 = ["Adh", "Ag", "Ahm", "Ail", "Ain", "An", "Aodh", "Apen", "Ar", "Bair", "Baol", "Bean", "Beol", "Cadh", "Cail", "Caim", "Caol", "Ceall", "Cean", "Cher", "Cill", "Col", "Con", "Dak", "Deam", "Dels", "Din", "Each", "Eam", "Ear", "Earn", "Eimh", "Eir", "Eirn", "Eog", "Fael", "Fear", "Fer", "Fin", "Finn", "Greag", "Hahn", "Hint", "Hon", "Kel", "Lans", "Maed", "Mael", "Maodh", "Maoil", "Mis", "Mok", "Muat", "Muir", "Niadh", "Ohan", "PAid", "Pead", "Raem", "Saem", "Seam", "Sen", "Taim", "Tas", "Tok", "Wak", "Wan", "Yis", "Yum"];
		var names2 = ["amh", "in", "onn", "ear", "ach", "aire", "ithir", "ileas", "os", "amcha", "uan", "oine", "ionn", "alach", "eart", "ainn", "aon", "easal", "eall", "adh", "air", "eidigh", "obhar", "uil", "ionan", "uimin", "eaglan", "ang", "ead", "eal", "aidh", "earn", "onn", "anan", "ainin", "iarn", "ainm", "iachna", "ias", "asan", "uaire", "erian", "airian", "ainn", "aoilin", "ios", "each", "eamas", "eanan", "amh", "anu", "ando", "imon", "oki", "eyo", "unta", "oda", "otah", "osan", "emin", "abaoo", "omemah", "ahome", "aneo", "on", "otah", "oton", "ehew", "aska", "enam", "iye", "achme", "opka", "etu", "ahton"];
	}

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * names1.length);
		rnd2 = Math.floor(Math.random() * names2.length);
		names = names1[rnd] + names2[rnd2];
		return names;
	}

}