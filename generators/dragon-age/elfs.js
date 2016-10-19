function generator$dragon_age$elfs(type) {
	var namesFemale = ["Ada", "Ari", "Aria", "Asha", "Ashi", "Athe", "Bri", "Bria", "Dany", "De", "Deve", "Di", "Elo", "Fi", "Fio", "Ghe", "Io", "Ise", "Ka", "La", "Lana", "Li", "Lia", "Ma", "Mare", "Me", "Melo", "Merri", "Mi", "Mih", "Na", "Nama", "Ne", "Nesi", "Nesia", "No", "Nola", "Ora", "Orana", "Pa", "Pano", "Ri", "Se", "Sera", "Sha", "Shae", "Shi", "Shia", "Va", "Valo", "Valy", "Vari", "Ve", "Vela"];
	var namesFemale2 = ["hari", "hra", "hris", "la", "lanna", "ll", "lle", "lora", "lva", "lwyn", "lya", "maya", "na", "naya", "ne", "ni", "nna", "nne", "nni", "nowen", "nril", "nyla", "ra", "rana", "ranni", "ren", "ri", "riel", "ril", "rill", "ris", "rrill", "sa", "siara", "ssa", "thari", "thra", "triel", "va", "vera", "vra", "wen", "wyn", "ya"];
	var namesMale = ["Ad", "Al", "Ala", "Ar", "At", "Ath", "Bra", "Ca", "Cam", "Car", "Cy", "Cyr", "Dey", "El", "Fe", "Fel", "Fen", "Fey", "Feyn", "Ga", "Gar", "Ge", "Get", "Geth", "Ha", "Har", "Hu", "Il", "Ja", "Jos", "Jun", "Le", "Lem", "Ne", "Nel", "Pa", "Pai", "Pi", "Sa", "Sam", "Sar", "Se", "Sen", "So", "Sor", "Ta", "Tae", "Tam", "The", "Thel", "Thre", "Va", "Var", "Vara", "Ye", "Yev", "Zat", "Zath", "Zev"];
	var namesFamily = ["cen", "dis", "dor", "gan", "hel", "hon", "horn", "lan", "laros", "lasan", "lassan", "len", "lhen", "mael", "men", "met", "nar", "narel", "rahel", "ralan", "ran", "rand", "ras", "rel", "ren", "rian", "riel", "rion", "ris", "rith", "ron", "ros", "sas", "thon", "thorn", "vel", "ven", "vin", "wen"];

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd0 = Math.floor(Math.random() * namesFemale.length);
			rnd1 = Math.floor(Math.random() * namesFemale2.length);
			names = namesFem[rnd0] + namesFemale2[rnd1];
		} else {
			rnd0 = Math.floor(Math.random() * namesMale.length);
			rnd1 = Math.floor(Math.random() * namesFamily.length);
			names = namesMale[rnd0] + namesFamily[rnd1];
		}
		return names;
	}

}