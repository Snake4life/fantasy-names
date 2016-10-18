var names1 = ["Adar", "Aer", "Ar", "Ball", "Bel", "Brach", "Daar", "Don", "Draq", "Garr", "Goran", "Gyll", "Har", "Harl", "Hor", "Ill", "Inn", "Irr", "Jaer", "Jaq", "Jor", "Laraz", "Laz", "Lys", "Maerr", "Mal", "Mar", "Nak", "Nor", "Nyess", "Sall", "Stall", "Syr", "Thor", "Treg", "Tych", "Var", "Varg", "Vog", "Vyr"];
var names2 = ["adhor", "an", "ano", "aphos", "aquo", "ar", "ario", "aro", "apho", "arro", "ello", "elos", "en", "enhor", "enno", "eo", "eqor", "ero", "esso", "icho", "idos", "illos", "io", "iphos", "iros", "o", "odos", "onar", "onno", "onos", "oquo", "or", "orno", "oros", "os", "yllo", "ynno", "yrio", "yros", "ys"];
var names3 = ["Ahr", "Aren", "Daen", "Dil", "Dor", "Erin", "Erl", "Faey", "Fer", "Firan", "Harr", "Hel", "Hen", "Il", "Iner", "Laen", "Ler", "Less", "Mel", "Mesh", "Min", "Nes", "Nil", "Noar", "Onal", "Or", "Phen", "Phir", "Sael", "Ser", "Sir", "Taen", "Tir", "Triann", "Vaer", "Vell", "Vor", "Waer", "Wen", "Wyn"];
var names4 = ["a", "aena", "aerah", "ala", "aleah", "anah", "anea", "aria", "asha", "aya", "eah", "ela", "ella", "elna", "era", "erah", "esa", "esha", "eya", "eyana", "ianna", "ila", "ina", "ira", "irah", "issa", "ola", "olana", "olla", "ona", "ora", "oreah", "orlah", "osha", "ylea", "ylla", "yna", "ynea", "ysa", "ysha"];
var names5 = ["Aen", "Ahr", "Aner", "Baerr", "Bah", "Bren", "Dirr", "Drenn", "Dyn", "Enn", "Eran", "Ess", "Faen", "Flaer", "For", "Fyll", "Hart", "Hest", "Hot", "Iran", "Irn", "Irr", "Maeg", "Mar", "Mop", "Naer", "Nah", "Nest", "Orl", "Orm", "Ost", "Paen", "Pahr", "Phass", "San", "Sorr", "Stass", "Vhass", "Voll", "Vyn"];
var names6 = ["aan", "aar", "aenor", "ah", "ahran", "anar", "ar", "aris", "assar", "atis", "el", "elar", "elion", "en", "enohr", "erah", "erion", "erris", "in", "inar", "ion", "ios", "irah", "iris", "iros", "ohr", "ohrin", "olis", "onnis", "oran", "oris", "orlan", "os", "oyor", "yl", "ymion", "yr", "yrion", "yris", "ys"];

function generator$game_of_thrones$free_citys(type) {

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