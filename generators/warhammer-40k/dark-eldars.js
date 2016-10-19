function generator$warhammer_40k$dark_eldars(type) {
	var names1 = ["Aes", "Ar'o", "Ar'ug", "Arh", "Arma", "Arqa", "Arzo", "Arzur", "Asdru", "Bahr", "Bahru", "Baze", "Bazha", "Bernu", "Bhu", "Bra", "Braes", "Bura", "Caen", "Char", "Cra'oza", "Crahl", "Daza", "Dra", "Draz", "Duhr", "El'ur", "Erza", "Ez", "Ezar", "Fahar", "Fahr", "Fhars", "Frae", "Fure", "Ga'on", "Gahu", "Gara", "Gra", "Griza", "Gura", "Id'ar", "Iru", "Iys", "Izen", "Izra", "Kae", "Kahar", "Kahr", "Khan", "Kyra", "Laerh", "Lahza", "Laku", "Laza", "Le'u", "Maru", "Masra", "Mazro", "Meza", "Mo'u", "Much", "Muri", "Or'i", "Ori", "Orqa", "Oura", "Ozu", "Taga", "Tah", "Teza", "Trazh", "Yl'a", "Yra", "Yzu"];
	var names2 = ["baehr", "bran", "braq", "bros", "bryn", "dazar", "dhar", "diaq", "dovur", "dros", "durin", "gahn", "gard", "gran", "grath", "hiron", "his", "hyque", "kei", "kos", "kras", "kyth", "mahr", "maq", "mar", "mass", "mien", "moque", "mor", "naer", "nahr", "nazar", "neque", "nyr", "qar", "qir", "ra", "rad", "raes", "ras", "rath", "raz", "riaq", "rihz", "rior", "rizar", "ruin", "ryq", "sar", "sarith", "saros", "sath", "shar", "sque", "stra", "syr", "tahr", "taz", "teque", "thara", "tharn", "tiron", "tyhr", "tzar", "vall", "van", "vhar", "vor", "vyn", "zaen", "zaq", "zhan", "zhar", "zon", "zyth"];
	var names3 = ["Aes", "Aezo", "Ahl", "Al'o", "Ar'us", "Ara", "Arqi", "Arze", "Ashru", "Baeh", "Baes", "Bahre", "Belze", "Besnu", "Bezha", "Bhi", "Bhra", "Bira", "Caren", "Cher", "Crehn", "Cri'ora", "Dehza", "Der", "Dera", "Drehz", "Ehz", "El'or", "Eraza", "Ezir", "Fehsa", "Fera", "Fha", "Fihr", "Frae", "Gae'en", "Gahnu", "Garia", "Gri", "Grihza", "Gura", "Iaze", "Ide'a", "Ire", "Iyes", "Izera", "Kaera", "Kahna", "Kehna", "Khel", "Kihre", "Lae'o", "Laerh", "Laeza", "Lanu", "Lohza", "Maero", "Meha", "Mera", "Meri", "Mero'a", "Mesra", "Mihza", "Ohza", "Ora", "Ora'i", "Ori", "Oriqa", "Taza", "Teha", "Tera", "Trezh", "Yna", "Yr'a", "Yzi"];
	var names4 = ["baehra", "brique", "bris", "brynn", "daque", "dera", "deza", "dhae", "dove", "dreos", "gahne", "geza", "gohne", "grynn", "gwyss", "heque", "hia", "hira", "keo", "keri", "kryss", "kysse", "maque", "mare", "mea", "mehra", "mirenne", "mohre", "myss", "naehr", "nahra", "neque", "neza", "nyrr", "qinn", "qore", "rae", "raesh", "reah", "reaq", "renar", "renn", "resse", "rihque", "rith", "riza", "rizora", "runae", "saer", "sarihs", "seos", "seqe", "seth", "sher", "shi", "sira", "syrr", "taena", "taez", "tarin", "teque", "thara", "thera", "tihr", "tyhs", "vaesh", "velle", "vero", "vynn", "zae", "zaehn", "zhael", "zhenne", "zoh", "zysh"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
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