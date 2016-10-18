var nm1 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm2 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y", "z", "ch", "sh", "ph"];
var nm3 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ea", "io", "ae", "eo"];
var nm4 = ["g", "h", "l", "m", "n", "r", "s", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm5 = ["bea", "bis", "bo", "dah", "del", "den", "dia", "dore", "dows", "fey", "gan", "gish", "gren", "hala", "hana", "hel", "hina", "kala", "kira", "la", "lara", "laris", "las", "lear", "less", "lia", "lis", "lore", "mani", "mer", "mia", "mora", "mu", "muria", "mus", "naha", "nahar", "nara", "nas", "nase", "nee", "neer", "nemo", "nera", "nero", "ney", "neya", "nis", "nor", "nora", "now", "noya", "nya", "nyss", "phae", "phis", "pyre", "ra", "raya", "sira", "sium", "soah", "sone", "sora", "tia", "tira", "tory", "tu", "vana", "ven", "vyre", "wan", "wen", "wyn", "zo"];

var nm6 = ["Aerial", "Ageless", "Angelic", "Argent", "Astral", "Azure", "Beatific", "Blessed", "Blissful", "Bright", "Celestial", "Cerulean", "Champion", "Chosen", "Cloud", "Cosmic", "Divine", "Dream", "Elysian", "Emerald", "Empyreal", "Empyrean", "Eternal", "Ethereal", "Euphoric", "Exalted", "Glorious", "Grand", "Green", "Hallowed", "Happy", "Harmonic", "Heavenly", "Hero", "Holy", "Hunting", "Immortal", "Infinite", "Ivory", "Jade", "Light", "Miracle", "Olympian", "Paradise", "Pearly", "Perpetual", "Prime", "Promised", "Proven", "Rainbow", "Sapphire", "Seraphic", "Silver", "Sky", "Spirit", "Spring", "Sublime", "Summer", "Timeless", "Utopia", "Warrior", "Wonder"];
var nm7 = ["Domain", "Empire", "Field", "Fields", "Forest", "Forests", "Garden", "Gardens", "Ground", "Grounds", "Haven", "Heaven", "Heavens", "Home", "Kingdom", "Land", "Lands", "Meadow", "Meadows", "Oasis", "Pasture", "Pastures", "Plane", "Planes", "Realm", "Sanctuary", "Sanctum", "World"];

var nm8 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm9 = ["b", "c", "d", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z", "ch", "sh", "br", "cr", "dr", "gr", "kr", "pr", "str", "tr", "vr"];
var nm10 = ["a", "e", "i", "o", "u", "ea", "ou", "ua", "iu"];
var nm11 = ["n", "r", "s", "g", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm12 = ["'dem", "'qar", "'qira", "'xin", "'ziha", "bax", "byss", "dahn", "dell", "dess", "dis", "doze", "dues", "gara", "garn", "gash", "gor", "grinn", "hara", "hull", "huza", "jura", "kax", "kaz", "khan", "kiru", "kura", "mas", "mez", "mixar", "morta", "muria", "mus", "muy", "nahar", "naq", "naza", "naze", "nery", "nex", "nin", "nixa", "niza", "no", "nur", "nura", "ny", "paqar", "pax", "pyre", "qa", "qore", "qu", "qur", "ra", "rax", "siux", "six", "sour", "sura", "thor", "tix", "turan", "vara", "vax", "vye", "wax", "wren", "wyn", "xan", "zar", "zo", "zora", "zya", "zyss"];

var nm13 = ["Abominable", "Agony", "Anguish", "Ashen", "Battle", "Blasted", "Bleak", "Blind", "Burning", "Carnage", "Conflict", "Crimson", "Dark", "Dead", "Delirium", "Demon", "Demonic", "Devil", "Diabolic", "Dire", "Dread", "Ebon", "Fever", "Flaming", "Foul", "Frenzy", "Gallow", "Gloom", "Grave", "Gray", "Grim", "Horror", "Infernal", "Killing", "Mad", "Manic", "Misery", "Misty", "Nether", "Obsidian", "Onyx", "Penance", "Plague", "Punishment", "Retribution", "Rotten", "Sanguine", "Scarlet", "Scourge", "Shadow", "Silent", "Sinister", "Skeletal", "Slave", "Somber", "Sorrow", "Struggle", "Terror", "Torment", "Torture", "Vicious", "Vile", "Wayward", "Wicked"];
var nm14 = ["Domain", "Empire", "Field", "Fields", "Ground", "Grounds", "Kingdom", "Land", "Lands", "Pasture", "Pastures", "Plane", "Planes", "Realm", "World"];

function generator$miscellaneous$afterlifes(type) {

	i = Math.floor(Math.random() * 10); {
		if (type != 1) {
			if (i < 5) {
				rnd0 = Math.floor(Math.random() * nm1.length);
				rnd1 = Math.floor(Math.random() * nm2.length);
				rnd2 = Math.floor(Math.random() * nm3.length);
				rnd3 = Math.floor(Math.random() * nm4.length);
				rnd4 = Math.floor(Math.random() * nm5.length);
				name = nm1[rnd0] + nm2[rnd1] + nm3[rnd2] + nm4[rnd3] + nm5[rnd4];
			} else {
				rnd = Math.floor(Math.random() * nm6.length);
				rnd2 = Math.floor(Math.random() * nm7.length);
				name = "The " + nm6[rnd] + " " + nm7[rnd2];
			}
		} else if (type === 1) {
			if (i < 5) {
				rnd0 = Math.floor(Math.random() * nm8.length);
				rnd1 = Math.floor(Math.random() * nm9.length);
				rnd2 = Math.floor(Math.random() * nm10.length);
				rnd3 = Math.floor(Math.random() * nm11.length);
				rnd4 = Math.floor(Math.random() * nm12.length);
				name = nm8[rnd0] + nm9[rnd1] + nm10[rnd2] + nm11[rnd3] + nm12[rnd4];
			} else {
				rnd = Math.floor(Math.random() * nm13.length);
				rnd2 = Math.floor(Math.random() * nm14.length);
				name = "The " + nm13[rnd] + " " + nm14[rnd2];
			}
		}
		return name;
	}

}