var nm1 = ["A", "Ar", "Al", "B", "Br", "Bl", "C", "Cr", "Cl", "D", "Dl", "Dr", "E", "Er", "El", "F", "Fl", "G", "Gl", "Gr", "H", "I", "Il", "J", "K", "Kl", "Kr", "L", "M", "N", "O", "Or", "Ol", "P", "Pl", "Ph", "Pr", "R", "S", "Sl", "Str", "T", "Tr", "U", "Ur", "Ul", "V", "Vr", "W", "Wr", "X", "Z"];
var nm2 = ["a", "e", "i", "o", "u", "y"];
var nm3 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
var nm4 = ["aemon", "aenon", "aeon", "aestus", "aeus", "agos", "aios", "anes", "anos", "antos", "aon", "arus", "as", "ates", "atos", "aumas", "eas", "eidon", "er", "erion", "erus", "es", "etheus", "etus", "eus", "ias", "ibos", "ion", "ios", "is", "iton", "ius", "o", "oeis", "oeus", "olus", "on", "onos", "or", "os", "oteus", "otos", "otus", "ous", "us", "yrus", "ys", "ytion"];
var nm5 = ["bor", "ban", "bran", "cron", "carn", "crin", "dral", "dor", "dall", "fin", "furn", "fan", "gran", "gone", "glan", "hum", "hurn", "harm", "krol", "kall", "kule", "lorn", "lans", "lath", "moth", "morn", "merth", "nirn", "noth", "nall", "pas", "poth", "pos", "rall", "roth", "rorn", "sal", "sor", "sul", "stral", "storn", "stag", "thorn", "tral", "turn", "vral", "vor", "vil", "will", "wor", "warn", "zran", "zorn", "zark"];
var nm6 = ["A", "Ar", "Al", "B", "Br", "Bl", "C", "Cr", "Cl", "D", "Dr", "E", "Er", "El", "F", "Fl", "G", "Gl", "Gr", "H", "I", "Il", "J", "K", "Kl", "Kr", "L", "M", "N", "O", "Or", "Ol", "P", "Pl", "Ph", "Pr", "R", "S", "Sl", "Str", "T", "Tr", "U", "Ur", "Ul", "V", "Vr", "W", "Wr", "X", "Z"];
var nm7 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];

function generator$fantasy$centaurs(type) {
	if (type === 1) {
		names4 = ["a", "acea", "aea", "aenna", "aeno", "aia", "alia", "allo", "ania", "anke", "aope", "apso", "ar", "arge", "astea", "ato", "e", "ea", "eia", "eis", "eles", "elete", "eme", "emis", "ena", "ene", "enope", "era", "eria", "eris", "erope", "eros", "ese", "esia", "eso", "eta", "ete", "ethe", "etis", "etna", "eto", "etope", "ia", "iae", "idia", "ieia", "inoe", "inthe", "io", "ione", "iope", "is", "ite", "ithea", "o", "oe", "oebe", "oina", "ois", "ole", "olpe", "on", "ona", "one", "onis", "oosa", "ope", "orie", "oris", "osia", "osie", "osyne", "othoe", "ousa", "us", "ybia", "yia", "ylla", "ynome", "yo", "yone", "ypso", "ys", "ytie", "yx"];
		names5 = ["belle", "bes", "both", "cris", "cith", "cise", "dine", "dim", "dol", "flin", "fone", "fran", "grin", "gone", "gana", "hine", "hoth", "hante", "kine", "kres", "koe", "lynn", "lore", "less", "melle", "mine", "mare", "nine", "nith", "nys", "pris", "plix", "pione", "phine", "phes", "phe", "renne", "rila", "rone", "syla", "sin", "sane", "trix", "tyne", "toph", "vina", "vera", "vin", "wyn", "wane", "woth", "zyna", "zora", "zith"];
	}

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4];
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm5.length);
			names = nm6[rnd] + nm2[rnd2] + nm5[rnd3];
		} else {
			rnd = Math.floor(Math.random() * nm6.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			names = nm6[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm5[rnd5];
		}
		return names;
	}

}