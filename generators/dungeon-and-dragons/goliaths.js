var namesFemF = ["Age", "Ane", "Gau", "Ge", "Ina", "Kau", "Ke", "Ki", "Kuo", "La", "Le", "Maa", "Man", "Mau", "Me", "Na", "Nal", "Ni", "One", "Ori", "Paa", "Pau", "Pe", "Tha", "The", "Thu", "Vaa", "Vau", "Ve", "Vu"];
var namesFemL = ["gea", "geo", "gia", "gu", "kea", "keo", "ki", "kia", "kio", "la", "lai", "lane", "lea", "leo", "lo", "lu", "meo", "mi", "mia", "ne", "nea", "neo", "ni", "nia", "nu", "peo", "peu", "pu", "rea", "ri", "ria", "the", "thea", "thia", "thio", "thu", "vea", "vi", "via", "vu"];
var namesMaleF = ["Ag", "Apa", "Au", "Aug", "Eg", "Gau", "Gea", "Gha", "Ili", "Kana", "Kava", "Keo", "Khu", "La", "Ma", "Mau", "Mea", "Mo", "Na", "Neo", "Pa", "Pu", "Tha", "Thava", "Tho", "Va", "Vau", "Vega", "Vi", "Vo"];
var namesMaleL = ["gak", "gal", "gan", "gath", "ghan", "gith", "glath", "gun", "kan", "kein", "khal", "kin", "kon", "lath", "lig", "lok", "mahg", "mahk", "mahl", "mak", "man", "mith", "mul", "nak", "nath", "nihl", "noth", "path", "phak", "thag", "thak", "tham", "thi", "thok", "veith", "vek", "vhal", "vhik", "vith", "voi"];
var namesMid = ["Adeptweaver", "Bearfinder", "Bearkiller", "Bearvigor", "Braveguard", "Braveheart", "Brightheart", "Dawncaller", "Daydreamer", "Deerchaser", "Deerfrightner", "Deerhunter", "Deerstalker", "Dreamwanderer", "Fearless", "Flintfinder", "Flowerpicker", "Foodfinder", "Foodmaker", "Frightheart", "Goatherder", "Goatwatcher", "Hardworker", "Hidetanner", "Highclimber", "Honestheart", "Horncarver", "Keeneye", "Keenshot", "Keenwatcher", "Lonehunter", "Lonewalker", "Longleaper", "Lowlander", "Lumberbearer", "Lumberhauler", "Mastercook", "Messenger", "Minddrifter", "Mountainclimber", "Nightrunner", "Nightwarrior", "Rainwatcher", "Riverjumper", "Rockbreaker", "Rocksmasher", "Rootfinder", "Rootsmasher", "Silentstalker", "Silentwalker", "Skywatcher", "Slywalker", "Smartleader", "Steadyhand", "Stonebreaker", "Stormwatcher", "Stronghunter", "Strongleader", "Strongwalker", "Swiftaid", "Swifthunter", "Swiftrunner", "Swiftstriker", "Swiftwalker", "Threadtwister", "Thunderfist", "Treelogger", "Tribeguard", "Truefriend", "Truthspeaker", "Wanderlost", "Wildfinder", "Wildstalker", "Wisewalker", "Woundmender"];
var namesSurF = ["Agu-Ul", "Agu-V", "Anakal", "Apuna-M", "Athun", "Egena-V", "Egum", "Elan", "Ganu-M", "Gathak", "Gean", "Inul", "Kalag", "Kaluk", "Katho-Ol", "Kolae-G", "Kolak", "Kulan", "Kulum", "Lakum", "Maluk", "Munak", "Muthal", "Nalak", "Nola-K", "Nugal", "Nulak", "Ogol", "Oveth", "Thenal", "Thul", "Thunuk", "Ugun", "Uthenu-K", "Vaimei-L", "Valu-N", "Vathun", "Veom", "Vuma-Th", "Vunak"];
var namesSurL = ["aga", "ageane", "akane", "akanu", "akume", "alathi", "amino", "amune", "anathi", "atake", "athai", "athala", "atho", "avea", "avi", "avone", "eaku", "ekali", "elo", "iaga", "iago", "iala", "iano", "igala", "igane", "igano", "igo", "igone", "ileana", "ithino", "olake", "ugate", "ugoni", "ukane", "ukate", "ukena", "ulane", "upine", "utha", "uthea"];

function generator$dungeon_and_dragons$goliaths(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * namesFemF.length);
			rnd2 = Math.floor(Math.random() * namesFemL.length);
			rnd3 = Math.floor(Math.random() * namesMid.length);
			rnd4 = Math.floor(Math.random() * namesSurF.length);
			rnd5 = Math.floor(Math.random() * namesSurL.length);
			names = namesFemF[rnd] + namesFemL[rnd2] + " " + namesMid[rnd3] + " " + namesSurF[rnd4] + namesSurL[rnd5];
		} else {
			rnd = Math.floor(Math.random() * namesMaleF.length);
			rnd2 = Math.floor(Math.random() * namesMaleL.length);
			rnd3 = Math.floor(Math.random() * namesMid.length);
			rnd4 = Math.floor(Math.random() * namesSurF.length);
			rnd5 = Math.floor(Math.random() * namesSurL.length);
			names = namesMaleF[rnd] + namesMaleL[rnd2] + " " + namesMid[rnd3] + " " + namesSurF[rnd4] + namesSurL[rnd5];
		}
		return names;
	}

}