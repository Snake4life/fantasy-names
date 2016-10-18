var nm1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z", "Bl", "Br", "Bj", "Dl", "Dr", "Dk", "Dn", "Fl", "Fr", "Fj", "Gr", "Gl", "Gn", "Gh", "Bh", "Dh", "Kr", "Kl", "Kh", "Kj", "Lh", "Mh", "Pr", "Pl", "Pj", "Ph", "Rh", "Qh", "Sl", "Sr", "Sh", "Tr", "Tw", "Sw", "Pw", "Kw", "Dw", "Bw", "Vr", "Vl", "Sn", "Sm", "Zn", "Zm", "Str"];
var nm2 = ["a", "e", "o", "i", "u", "ea", "eo", "ia", "io", "ou", "ua", "a", "e", "o", "i", "u"];
var nm3 = ["bb", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "xx", "zz", "bb", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "xx", "zz", "b", "d", "f", "g", "k", "l", "m", "n", "p", "r", "s", "t", "x", "z"];
var nm4 = ["oq", "iq", "aq", "eq", "uq", "ot", "it", "at", "et", "ut", "ap", "op", "ip", "ep", "up", "os", "is", "as", "es", "us", "ad", "id", "od", "ed", "ud", "of", "if", "af", "ef", "uf", "og", "ig", "ag", "eg", "ug", "ok", "ik", "ak", "ek", "uk", "ol", "il", "al", "el", "ul", "oz", "iz", "az", "ez", "uz", "ox", "ix", "ax", "ex", "ux", "on", "in", "an", "en", "un", "om", "im", "am", "em", "um", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm5 = ["Abjurer", "Adept", "Advisor", "Agent", "Alchemist", "Alchemagician", "Alienist", "Artisan", "Artificer", "Architect", "Analyst", "Analyzer", "Archivist", "Assembler", "Assistant", "Astronomer", "Attuner", "Beastmaster", "Builder", "Cabalist", "Calibrator", "Calculator", "Calumniator", "Chemist", "Cleaner", "Chef", "Chronicler", "Compiler", "Conjuror", "Constructor", "Convoker", "Counselor", "Collator", "Collaborator", "Crafter", "Craftsman", "Creator", "Deconstructor", "Demolisher", "Demolitionist", "Designer", "Defender", "Deviser", "Director", "Disassembler", "Diviner", "Doctor", "Dynamist", "Editor", "Elementalist", "Eliminator", "Emulator", "Enforcer", "Engineer", "Evoker", "Expert", "Explorer", "Examiner", "Extinguisher", "Exterminator", "Fabricator", "Gemcutter", "Generator", "Golementalist", "Golemwright", "Guardian", "Gunsmith", "Guide", "Helper", "Hunter", "Huntsman", "Hypnotist", "Illustrator", "Initiator", "Innovator", "Invader", "Invoker", "Instructor", "Instigator", "Interlocutor", "Interrogator", "Insurrectionist", "Inventor", "Inveigler", "Investigator", "Infiltrator", "Krewe Chief", "Kreweman", "Liquidator", "Maestro", "Machinist", "Marksman", "Mathematician", "Mechanic", "Mechwright", "Mechsmith", "Metallurgist", "Metaphysicist", "Mentor", "Mesmer", "Monitor", "Mortifactor", "Mortificator", "Navigator", "Necromancer", "Operator", "Optimizer", "Organizer", "Originator", "Paraphysicist", "Pathfinder", "Phantasmist", "Physicist", "Pistoleer", "Planner", "Princeps", "Progenitor", "Prognosticator", "Protector", "Provoker", "Professor", "Preceptor", "Psychometrist", "Reanimator", "Recalibrator", "Researcher", "Retriever", "Refiner", "Revisionist", "Sage", "Schematicist", "Seeker", "Sentinel", "Schemer", "Scientist", "Savant", "Saboteur", "Subversionist", "Specialist", "Statistician", "Supervisor", "Surveyor", "Synergist", "Teacher", "Techwright", "Techsmith", "Thaumaturgist", "Theorist", "Theonomist", "Thermodynamist", "Trailblazer", "Trainer", "Visualizer", "Weaponeer", "Electrician", "Mortician", "Scientician", "Technician", "Magitechnician", "Necrotechnician", "Pyrotechnician", "Cryotechnician", "Hydrotechnician", "Aerotechnician", "Terratechnician", "Electrotechnician", "Chronotechnician", "Astromancer", "Pyromancer", "Cryomancer", "Aeromancer", "Geomancer", "Terramancer", "Electromancer", "Chronomancer", "Technomancer", "Techromancer", "Golemancer", "Alchemologist", "Anthropologist", "Biologist", "Botanist", "Geologist", "Elixologist", "Chronologist", "Electrologist", "Parabiologist", "Parabotanist", "Pyrologist", "Necrologist", "Cryologist", "Hydrologist", "Aerologist", "Terrologist", "Hypnologist", "Illusionist", "Conflagrationist", "Schematologist", "Technologist", "Tempestologist", "Mesmerologist", "Meteorologist", "Mixologist", "Gemologist", "Golemologist", "Radiologist", "Thaumatologist", "Wraithologist", "Vulcanologist", "Xenologist "];

var nm6 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z", "Bl", "Br", "Bj", "Dl", "Dr", "Dk", "Dn", "Fl", "Fr", "Fj", "Gr", "Gl", "Gn", "Gh", "Bh", "Dh", "Kr", "Kl", "Kh", "Kj", "Lh", "Mh", "Pr", "Pl", "Pj", "Ph", "Rh", "Qh", "Sl", "Sr", "Sh", "Tr", "Tw", "Sw", "Pw", "Kw", "Dw", "Bw", "Vr", "Vl", "Sn", "Sm", "Zn", "Zm", "Str"];
var nm7 = ["a", "e", "o", "i", "u", "ea", "eo", "ia", "io", "ou", "ua", "a", "e", "o", "i", "u"];
var nm8 = ["bb", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "xx", "zz", "bb", "dd", "ff", "gg", "kk", "ll", "mm", "nn", "pp", "rr", "ss", "tt", "xx", "zz", "b", "d", "f", "g", "k", "l", "m", "n", "p", "r", "s", "t", "x", "z"];
var nm9 = ["o", "i", "a", "e", "u"];

function generator$guild_wars$asuras(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			rnd4 = Math.floor(Math.random() * nm8.length);
			rnd5 = Math.floor(Math.random() * nm9.length);
			if (i < 5) {
				names = nm5[rnd] + " " + nm6[rnd2] + nm7[rnd3] + nm8[rnd4] + nm9[rnd5];
			} else {
				names = nm6[rnd2] + nm7[rnd3] + nm8[rnd4] + nm9[rnd5] + " the " + nm5[rnd];
			}
		} else {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm1.length);
			rnd3 = Math.floor(Math.random() * nm2.length);
			rnd4 = Math.floor(Math.random() * nm3.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			if (i < 5) {
				names = nm5[rnd] + " " + nm1[rnd2] + nm2[rnd3] + nm3[rnd4] + nm4[rnd5];
			} else {
				names = nm1[rnd2] + nm2[rnd3] + nm3[rnd4] + nm4[rnd5] + " the " + nm5[rnd];
			}
		}
		return names;
	}

}