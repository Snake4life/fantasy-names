var namesFemale = ["bea", "betha", "brix", "cia", "cilia", "dira", "dita", "gami", "ghana", "grid", "hilde", "len", "lian", "lya", "mira", "mish", "mona", "mura", "ness", "peste", "pris", "reas", "reda", "ren", "ress", "rina", "ris", "roti", "rotia", "selm", "sin", "tulah", "vana", "vash", "ven", "verra", "viah", "vris", "xaura", "zaen"];
var namesMale = ["brum", "cular", "dan", "dhur", "dulus", "dum", "gan", "ghor", "grim", "kai", "kar", "khar", "kras", "lak", "lazar", "lekai", "los", "mien", "mon", "pent", "qir", "qur", "rael", "rius", "row", "thik", "thum", "tic", "vok", "vras", "xir", "xius", "xor", "zad", "zar", "zhar", "zhul", "zis", "zius", "zor"];
var namesNeutral = ["baem", "bres", "brix", "cix", "crux", "dhir", "dhos", "drem", "drex", "drim", "ghrin", "laer", "leki", "mek", "min", "mirn", "morn", "nirn", "noth", "nus", "peth", "prix", "qis", "qrax", "shis", "thas", "thes", "thir", "tos", "war", "with", "wix", "xas", "xhin", "xiem", "xis", "xith", "yor", "zael", "zis"];
var names1 = ["a", "e", "i", "o", "u", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var names2 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "y", "z", "br", "cr", "dr", "gr", "kr", "pr", "str", "vr", "wr", "zr", "st", "ch", "chr", "sh"];
var names3 = ["a", "e", "i", "o", "u", "ae", "ou", "au", "ei", "io", "a", "e", "i", "o", "a", "e"];
var names5 = ["Alure", "Anatomy", "Ashes", "Bane", "Black", "Blackhand", "Blight", "Bloodworth", "Bonecall", "Calamity", "Carnage", "Craft", "Crane", "Crow", "Cruor", "Daemonne", "Deathbloom", "Deathhand", "Deathwhisper", "Deville", "Diction", "Doomweaver", "Doomwhisper", "Dreadmore", "Fester", "Gloom", "Graeme", "Gravemore", "Graves", "Grimm", "Haggard", "Hex", "Incarnate", "Kane", "Livid", "Magnus", "Malefic", "Maleficum", "Malicius", "Mallus", "Metus", "Mildew", "Molder", "Morbide", "Morte", "Mortice", "Naxxremis", "Necrosyse", "Nightfall", "Nightshade", "Nyte", "Onyx", "Payne", "Plasma", "Putrescence", "Rane", "Rotheart", "Sanguine", "Sanguis", "Shade", "Shadowend", "Siphon", "Solace", "Umbra", "Vacuity", "Void", "Whisper", "the Abominable", "the Abomination", "the Adept", "the Analyzer", "the Animated", "the Animator", "the Beast", "the Black", "the Blight", "the Carver", "the Constructed", "the Constructor", "the Corpse", "the Corpsemaker", "the Corrupted", "the Corruptor", "the Couldronmaster", "the Crippled", "the Curropted", "the Darkheart", "the Darkmaster", "the Doctor", "the De-Composer", "the Decayer", "the Decomposer", "the Decrepit", "the Defiler", "the Demise", "the Demon", "the Desecrator", "the Dissector", "the Eradicator", "the Eternal", "the Examiner", "the Experi-Mentor", "the Experiment", "the Extinguisher", "the Feeble", "the Fleshrender", "the Gorish", "the Haggard", "the Hallowed", "the Harvester", "the Hollow", "the Immortal", "the Inquisitor", "the Insane", "the Living", "the Mad", "the Maggot", "the Manifested", "the Mute", "the Necro", "the Necromancer", "the Nightmare", "the Paranoid", "the Plaguebringer", "the Plaguemaster", "the Putrid", "the Raised", "the Reanimator", "the Reaper", "the Renewer", "the Renovator", "the Resurrector", "the Reviver", "the Risen", "the Rotting", "the Serpent", "the Soulkeeper", "the Soulreaper", "the Surgeon", "the Tyrant", "the Undead", "the Undertaker", "the Unliving", "the Vivisector", "the Wraith"];

function generator$fantasy$necromancers(type) {
	var names4 = type === 1 ? namesFemale : namesMale;

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * names1.length);
		rnd2 = Math.floor(Math.random() * names2.length);
		rnd3 = Math.floor(Math.random() * names3.length);
		rnd4 = Math.floor(Math.random() * names4.length);
		rnd5 = Math.floor(Math.random() * names5.length);
		names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + "  " + names5[rnd5];
		return names;
	}

}