function generator$fantasy$robots() {
	var names1 = ["Adept", "Advanced", "Artificial", "Automated", "Automatic", "Autonomous", "Bio-Electrionic", "Bionic", "Compact", "Computerized", "Conscious", "Cybernated", "Cybernetic", "Digital", "Dynamic", "Efficient", "Electronic", "Essential", "Exceptional", "Experimental", "Extra-Terrestrial", "Extraterrestial", "Extreme", "General", "Generic", "Global", "High-Powered", "Highpowered", "Humanoid", "Independent", "Integrated", "Intelligent", "Main", "Mechanical", "Mechanized", "Motorized", "Neohuman", "Nuclear", "Perceptive", "Personal", "Preliminary", "Primary", "Prime", "Primitive", "Programmed", "Rational", "Reactive", "Responsive", "Robotic", "Secondary", "Self-Aware", "Self-Regulaing", "Self-Reliant", "Self-Sufficient", "Sensitive", "Sensory", "Solar", "Strategic", "Super", "Supreme", "Synchronized", "Temporary", "Ultimate", "Unified", "Universal"];
	var names2 = ["Air Defense", "Air Safety", "Airplane Control", "Algorithm", "Analysis", "Animal Control", "Animal Handling", "Animal Protection", "Assassination", "Base Protection", "Battle", "Bodyguard", "Bomb Disposal", "Care", "Caretaker", "Construction", "Contamination", "Cultivation", "Data Analyzing", "Data Collection", "Data Destruction", "Data Protection", "Decoding", "Demolition", "Detection", "Diplomacy", "Docking", "Domination", "Education", "Emergency Repair", "Emergency Response", "Emergency", "Emulation", "Encoding", "Encryption", "Enforcer", "Engineering", "Eradication", "Escort", "Evacuation", "Evasion", "Examination", "Excevation", "Excretion", "Expedition", "Exploration", "Farming", "Fire Fighting", "First Aid", "Flora and Fauna", "Garbage Disposal", "Guidance", "Harvesting", "Home Protection", "Human Control", "Human Protection", "Human Training", "Infiltration", "Info Analyzing", "Info Collection", "Information", "Inspection", "Instruction", "Instructor", "Invasion", "Lab Partner", "Laboratorium", "Life Emulation", "Life Protection", "Life Simulation", "Lifeform Detection", "Management", "Mapping", "Medical", "Mining", "Network Defense", "Neutralization", "Nullification", "Observer", "Ocean Exploration", "Oceanic Navigation", "Operating", "Operation", "Peacekeeping", "Personal Protection", "Pilot", "Piloting", "Planet Defence", "Planet Examination", "Planet Exploration", "Planet Survey", "Planetary Analysis", "Planetary Expedition", "Probe", "Processor", "Protection", "Recording", "Regulation", "Repairation", "Riot Control", "Robot Control", "Sabotage", "Safety Guard", "Safety", "Sanitation", "Science", "Servant", "Shepherd", "Simulation", "Space Expedition", "Space Exploration", "Space Navigation", "Spacecraft Defense", "Supervision", "Teaching", "Termination", "Terraforming", "Translation", "Transportation", "Travel", "Troubleshooting", "Unit Response", "Usher", "Utility", "Vegetation", "War Domination", "War Management", "War", "Waste Collection", "Waste Disposal"];
	var names3 = ["Android", "Automaton", "Bot", "Cyborg", "Device", "Droid", "Drone", "Emulator", "Entity", "Golem", "Juggernaut", "Machine", "Prototype", "Robot", "Technician", "Technology"];
	var names4 = ["01010010 (R in binary)", "Alpha", "Andromeda", "Andy Roid", "Anne Droid", "Ash", "Auto", "Axel", "Azerty", "Beta", "Bit", "Bolt", "Booker", "Boomer", "Bracer", "Brainstorm", "Brobot", "Bult", "Buttons", "Cabe", "Clank", "Cole", "Combot", "Copper", "Core", "Corion", "Corius", "Crowby", "Curious", "Cyb", "Cybel", "Cyd", "Cyl", "Cylinder", "Data", "Devi", "Dot", "Dotty", "Drillbit", "Dustie", "Earl", "Experiment", "Fiber", "Gadget", "Gage", "Gear", "Gearz", "Gere", "Gigabit", "Golem", "Greez", "Grezzer", "Hammer", "Jet", "Jin", "Kitt", "Knave", "Led", "Mace", "Mach", "Max", "Mecha", "Mechan", "Mechi", "Micro", "Mig", "Norbit", "Nozzle", "Otis", "Plex", "Plexi", "Plier", "Prime", "Proto", "Qwerty", "Ranger", "Ratcher", "Ratchet", "Rob Bitt", "Rob Bott", "Rob Oto", "Robbie", "Robert", "Roberto", "Rubber", "Rust", "Rusty", "Sark", "Scrap", "Scrappie", "Scrappy", "Screwie", "Scythe", "Scyther", "Shrimp", "Silver", "Skip", "Socket", "Sona", "Spanner", "Spark", "Sparkle", "Sparky", "Spencer", "Spirit", "Spud", "Spudnik", "Sterling", "Talus", "Tech", "Tera", "Terra", "Test", "Tin", "Tink", "Tinker", "Tobor", "Tracker", "Twobit", "Wire"];
	var names5 = ["a", "e", "i", "o", "u"];
	var names6 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
	var names7 = ["a", "e", "i", "o", "u", "", "", "", ""];
	var names8 = ["b", "c", "d", "f", "g", "h", "x", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "x", "y", "z", "", "", "", "", "", "", "", "", "", ""];
	var names9 = ["x", "tron", "roid", "ator", "oid", "", "", "", "", "", "", ""];


	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd0 = Math.floor(Math.random() * names1.length);
			rnd1 = Math.floor(Math.random() * names2.length);
			rnd2 = Math.floor(Math.random() * names3.length);
			names = names1[rnd0] + " " + names2[rnd1] + " " + names3[rnd2];
		} else if (i < 8) {
			rnd0 = Math.floor(Math.random() * names4.length);
			names = names4[rnd0];
		} else {
			rnd0 = Math.floor(Math.random() * names5.length);
			rnd1 = Math.floor(Math.random() * names6.length);
			rnd2 = Math.floor(Math.random() * names7.length);
			rnd3 = Math.floor(Math.random() * names8.length);
			rnd4 = Math.floor(Math.random() * names9.length);
			names = names5[rnd0] + names6[rnd1] + names7[rnd2] + names8[rnd3] + names9[rnd4];
		}
		return names;
	}

}