var names3 = ["Aga", "Alno", "Asra", "Aza", "Ba", "Bha", "Bno", "Bre", "Care", "Choa", "Chra", "Chru", "Chze", "Cra", "Csto", "Cza", "Dju", "Do", "Dru", "Dzre", "Ge", "Gra", "Gri", "Gzo", "Ilze", "Inra", "Ishe", "Izvu", "Ja", "Jho", "Jle", "Jra", "Ko", "Kre", "Ksre", "Kzre", "Me", "Mha", "Mro", "Mza", "Nchu", "Nhe", "No", "Nro", "Ra", "Rao", "Rho", "Ryu", "Shra", "Sne", "Stu", "Szo", "Ta", "Tcha", "Tro", "Tze", "Ya", "Ycho", "Ynza", "Yre"];
var names4 = ["baln", "bchasz", "bnanch", "bwarn", "dchan", "dlin", "dras", "drunz", "dzach", "fnyg", "frach", "frysz", "furn", "garn", "glan", "glynsh", "grenz", "grozsch", "gwetch", "hatch", "hnch", "hretz", "hron", "huanch", "larn", "lchanf", "lratz", "lrohn", "lzarf", "maratzch", "mgunch", "morn", "mratz", "mrumhz", "nard", "ngnthumz", "nrazg", "nruz", "nrynn", "nzcharn", "rach", "rhytz", "rlakch", "rlatz", "rzhurk", "tarn", "tchatz", "tchzan", "thurzch", "tvar", "varn", "vnorz", "vragch", "vretch", "vzyrn", "zalf", "zchyn", "zhurz", "zlurch", "ztar"];

function generator$elder_scrolls$dwemers(type) {
	if (type === 1) {
		var names1 = ["Akna", "Alzi", "Ara", "Azsa", "Blu", "Bri", "Byra", "Bze", "Cfra", "Che", "Chli", "Chro", "Chza", "Cra", "Csi", "Czou", "Da", "Dou", "Dre", "Dri", "Gli", "Go", "Grwe", "Gzi", "Ichu", "Iora", "Irda", "Itho", "Jare", "Jo", "Jri", "Jza", "Ka", "Kri", "Ksho", "Kzua", "Mhe", "Mli", "Mo", "Mra", "Na", "Nhe", "Nra", "Nri", "Rlo", "Rue", "Rya", "Rzu", "Shi", "Shtro", "So", "Stre", "Ta", "Tae", "Tche", "Thri", "Ylre", "Yne", "Yra", "Yzra"];
		var names2 = ["blan", "brina", "bryn", "bwyr", "dhis", "dilan", "dlen", "dryna", "drys", "flis", "frinn", "ftris", "fwinn", "glas", "glern", "grida", "griln", "gven", "gzis", "hken", "hner", "hrada", "hvlin", "hzis", "lamch", "lirda", "llez", "lnif", "lnmer", "mchin", "mdida", "mris", "mtrin", "mzlin", "nadis", "ncha", "nhatch", "nrida", "nvrin", "nwess", "rbira", "rlis", "rloar", "rtes", "rves", "tchis", "thanch", "trech", "trez", "twern", "vlara", "vlen", "vrash", "vrin", "vzal", "zara", "zlen", "znara", "zril", "zshen"];
	} else {
		var names1 = ["Ancha", "Atha", "Achy", "Agru", "Bla", "Bzra", "Brazze", "Bthu", "Cuo", "Cbra", "Ctu", "Cna", "Chua", "Chra", "Chiu", "Chu", "Dzra", "Da", "Dha", "Du", "Gru", "Gou", "Ghro", "Gha", "Irha", "Igre", "Ingu", "Ihle", "Jna", "Jru", "Jhou", "Jlare", "Ka", "Kagre", "Kla", "Kzya", "Mi", "Mzu", "Mhu", "Mcha", "Nchu", "Nchy", "Ne", "Nevi", "Ra", "Rku", "Rhzo", "Rale", "Sza", "Suo", "Shtra", "Stho", "Tcha", "Tzo", "Tna", "Tugra", "Ya", "Yra", "Ytha", "Yhna"];
		var names2 = ["ban", "bgar", "bond", "brec", "dac", "dchu", "dgir", "dit", "drak", "fgru", "fk", "frak", "fuan", "ggo", "gr", "grac", "grath", "grum", "gvin", "harn", "hlac", "hld", "hrek", "hrk", "lbar", "lchond", "lec", "len", "lzrak", "mac", "mgar", "min", "mrond", "muard", "nac", "nbric", "nch", "nd", "ndam", "nzgar", "rd", "ren", "rhunch", "rk", "rlac", "tchan", "thas", "thld", "thunch", "thzgar", "vin", "vith", "vlar", "vnak", "vraz", "zbrar", "zdir", "zgar", "znak", "zzefk"];
	}

	i = Math.floor(Math.random() * 10); {
		rnd0 = Math.floor(Math.random() * names1.length);
		rnd1 = Math.floor(Math.random() * names2.length);
		rnd2 = Math.floor(Math.random() * names3.length);
		rnd3 = Math.floor(Math.random() * names4.length);
		names = names1[rnd0] + names2[rnd1] + " " + names3[rnd2] + names4[rnd3];
		return names;
	}

}