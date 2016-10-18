var names1 = ["A", "Agga", "Ara", "Ardo", "Ba", "Bo", "Bra", "Bro", "Da", "Do", "Dra", "Dro", "Ga", "Gro", "Gru", "Gu", "Ho", "Hra", "Hro", "Hu", "Ja", "Jara", "Jo", "Jora", "Ka", "Kra", "Kri", "Kru", "Sha", "Sra", "Sru", "Sta", "Tho", "Ti", "Tra", "Tro", "U", "Uma", "Ura", "Uri"];
var names2 = ["dar", "dog", "dor", "drag", "gah", "gga", "ggan", "ggor", "gir", "gra", "kha", "khan", "khar", "kkan", "kor", "laf", "lf", "llag", "log", "lor", "mar", "mhor", "mman", "mor", "nar", "nnag", "nog", "nthor", "rak", "rlag", "rrag", "rras", "tar", "ther", "thor", "ttag", "vas", "vor", "vrak", "vvar"];
var names3 = ["Bi", "Bra", "Bre", "Bu", "Cha", "Che", "Cru", "Cwe", "Da", "De", "Dre", "Dri", "Fa", "Fe", "Fra", "Fri", "Ge", "Gi", "Gre", "Gri", "Gwe", "Ma", "Mhe", "Mi", "Pha", "Phu", "Pre", "Pru", "Ra", "Re", "Ri", "Ru", "Sha", "Sre", "Sta", "Ste", "Ta", "Tra", "Tre", "Tri"];
var names4 = ["cei", "cha", "chal", "ffis", "ggi", "ggin", "ggis", "hell", "his", "hynn", "ka", "kinn", "kis", "lenn", "lla", "llis", "ma", "miy", "mmi", "nell", "nna", "nni", "ress", "rra", "rris", "senne", "sha", "ssi", "tish", "tta", "twyn", "va", "vara", "vell", "wenn", "wyn", "wys", "ya", "yas", "yenn"];

function generator$game_of_thrones$mountain_clans(type) {

	i = Math.floor(Math.random() * 10); {
		if (type == 1) {
			rnd = Math.floor(Math.random() * names3.length);
			rnd2 = Math.floor(Math.random() * names4.length);
			names = names3[rnd] + names4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * names1.length);
			rnd2 = Math.floor(Math.random() * names2.length);
			names = names1[rnd] + names2[rnd2];
		}
		return names;
	}

}