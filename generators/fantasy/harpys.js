var nm1 = ["Aell", "Aer", "Air", "Ar", "Av", "Bel", "Ber", "Caell", "Cal", "Cec", "Cel", "Crel", "Cyl", "Der", "Des", "Dhon", "Dhyl", "Dor", "Dys", "Faen", "Fean", "Fer", "Flor", "Glor", "God", "Gwyn", "Gyl", "Hell", "Hem", "Heph", "Hyn", "Hyst", "Ial", "Ier", "Ill", "Ion", "Laer", "Lin", "Lor", "Lyn", "Lyph", "Lys", "Lyv", "Maer", "Men", "Mes", "Mor", "Myn", "Nel", "Nell", "Neph", "Ner", "Nor", "Nyph", "Nyr", "Nys", "Oc", "Ocyp", "Oll", "Or", "Orin", "Pel", "Per", "Phel", "Phlor", "Phyn", "Pod", "Sav", "Seph", "Sol", "Syl", "Syr", "Taer", "Ten", "Thel", "Ther", "Thyl", "Tyl", "Typh", "Tyr", "Tyv", "Uem", "Ur", "Uv", "Vael", "Vel", "Ver", "Vol", "Vyn", "Xel", "Xir", "Xyl", "Xyn", "Yen", "Yes", "Yor", "Zean", "Zel", "Zeph", "Zer"];
var nm2 = ["a", "aene", "aeno", "alin", "alis", "alle", "ane", "aphe", "aphine", "ara", "arge", "aria", "ase", "asha", "asis", "ea", "eano", "eanor", "efis", "elle", "ena", "enne", "eo", "ephise", "era", "erin", "eris", "ete", "ethe", "evis", "ia", "ial", "ialle", "iana", "iane", "iara", "ie", "ielle", "iene", "inis", "inore", "iphis", "iris", "is", "ise", "o", "oah", "oe", "oelle", "oene", "oinne", "ola", "one", "onia", "ophine", "ophis", "ora", "orena", "oris", "oya", "ya", "yana", "ylia", "ylis", "yne", "ynea", "ynne", "ynore", "yore", "yphe", "yre", "yrea", "yris", "ys", "yth"];

function generator$fantasy$harpys() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		names = nm1[rnd] + nm2[rnd2];
		return names;
	}

}