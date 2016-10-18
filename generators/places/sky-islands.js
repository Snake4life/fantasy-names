var nm1 = ["", "", "", "", "", "b", "c", "d", "dh", "f", "g", "h", "l", "m", "n", "ph", "s", "sh", "th", "v", "w"];
var nm2 = ["a", "e", "i", "o", "u", "a", "e", "o", "a", "e", "i", "o", "u", "a", "e", "o", "ea", "ae", "ia", "ai", "eo"];
var nm3 = ["b", "b", "f", "f", "ff", "g", "g", "h", "h", "j", "j", "l", "l", "ll", "m", "m", "mm", "n", "n", "nn", "r", "r", "s", "s", "ss", "th", "th", "v", "v", "b", "bh", "bl", "bs", "br", "f", "ff", "fl", "fr", "g", "gh", "gn", "gl", "h", "hn", "hl", "hm", "j", "l", "lf", "ll", "lt", "lc", "lb", "ld", "lm", "ln", "lr", "lw", "m", "mm", "mn", "mr", "n", "nn", "ns", "nth", "nt", "nm", "nf", "nph", "pr", "phr", "r", "rl", "rm", "rn", "s", "sf", "sh", "sp", "st", "sw", "ss", "sn", "sm", "th", "v"];
var nm4 = ["", "", "", "", "", "f", "h", "l", "m", "n", "r", "s", "th"];
var nm6 = ["Island", "Enclave", "Isle", "Islet", "Island", "Isle"];

function generator$places$sky_islands() {
	var nm5 = ["Aeranas", "Aerene", "Aeria", "Aeris", "Aeros", "Aerule", "Albatross", "Angel", "Apex", "Apogee", "Ataraxia", "Ataraxis", "Atmos", "Aura", "Aurora", "Avia", "Avian", "Avis", "Azura", "Azure", "Azuris", "Billow", "Bliss", "Borealis", "Buoya", "Bustard", "Cassowary", "Celes", "Celeste", "Cerulea", "Cerulis", "Cerulle", "Chinook", "Cirrostratus", "Cirrus", "Condor", "Crane", "Crow", "Crown", "Cuckoo", "Cumulus", "Dove", "Eagle", "Elysium", "Empyre", "Empyrea", "Empyris", "Falcon", "Flamingo", "Gale", "Griffin", "Gull", "Halo", "Halos", "Harmony", "Harpy", "Hippogriff", "Hummingbird", "Imperos", "Macaw", "Mistral", "Mistros", "Murmus", "Nebula", "Nightingale", "Nightowl", "Obelisk", "Owl", "Ozone", "Peacock", "Pegasus", "Pelican", "Phoenix", "Pigeon", "Raven", "Serenity", "Solace", "Sonas", "Sonus", "Sparrow", "Spire", "Stork", "Storm", "Stormy", "Stratos", "Stratus", "Swan", "Swift", "Thunder", "Toocan", "Tranquility", "Tropos", "Tumul", "Tumulus", "Utopia", "Valkyrie", "Ventis", "Vertex", "Volance", "Volantis", "Volar", "Volaris", "Vortex", "Vox", "Voxis", "Vulture", "Windy", "Zenith", "Zephyr", "Zephys", "Zion"];

	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm6.length);
		if (i < 6) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 3) {
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + " " + nm6[rnd7];
			} else if (i < 6) {
				rnd8 = Math.floor(Math.random() * nm3.length);
				rnd9 = Math.floor(Math.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd8] + nm2[rnd9] + nm4[rnd5] + " " + nm6[rnd7];
			}
		} else {
			rnd = Math.floor(Math.random() * nm5.length);
			nm5.splice(rnd, 1);
			names = nm5[rnd] + " " + nm6[rnd7];
		}
		return names;
	}

}