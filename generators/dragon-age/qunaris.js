var namesFemale = ["As", "Bah", "Bir", "Birs", "Can", "Dem", "Fad", "Giz", "Hat", "Kar", "Kard", "Kub", "Kubr", "Kut", "Mel", "Naz", "Nazl", "Nih", "Or", "Ork", "Oz", "Ozen", "Ras", "San", "Say", "Sem", "Ser", "Sol", "Solm", "Sum", "Tam", "Tamg", "Tur", "Turn", "Yas", "Yasem", "Yen", "Yon"];
var namesFemale2 = ["a", "aan", "al", "am", "an", "anem", "ar", "asan", "ay", "ayar", "az", "azik", "azli", "e", "ek", "elek", "elen", "em", "emin", "en", "ena", "ener", "enli", "er", "era", "et", "ice", "ide", "ie", "iha", "ihan", "ik", "in", "onal", "ul", "umer"];
var namesMale = ["Ak", "Akin", "Akor", "Al", "Ar", "Aris", "Arm", "Arv", "As", "Ask", "Askh", "Asl", "Bas", "Bast", "Bur", "Dur", "Gun", "Gund", "Gur", "Gurh", "Jar", "Jarv", "Kan", "Ket", "Kub", "Mar", "Met", "Naz", "Ok", "Okan", "Or", "Orn", "Oz", "Ozk", "Sal", "Sen", "S", "St", "Tam", "Ten", "Yag", "Yagm"];
var namesFamily = ["aarad", "aari", "aas", "aca", "ad", "ak", "alit", "amay", "an", "anat", "aner", "ant", "arad", "ari", "as", "at", "ay", "azim", "ehan", "ek", "en", "enol", "er", "ilay", "im", "iner", "ishok", "it", "ogan", "ojan", "ok", "ol", "oren", "ri", "ug", "ul", "urak", "urhan", "utlu"];

function generator$dragon_age$qunaris(type) {
	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd0 = Math.floor(Math.random() * namesFemale.length);
			rnd1 = Math.floor(Math.random() * namesFemale2.length);
			names = namesFemale[rnd0] + namesFemale2[rnd1];
		} else {
			rnd0 = Math.floor(Math.random() * namesMale.length);
			rnd1 = Math.floor(Math.random() * namesFamily.length);
			names = namesMale[rnd0] + namesFamily[rnd1];
		}

		return names;
	}

}