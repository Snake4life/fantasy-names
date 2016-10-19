function generator$fantasy$sea_creatures() {
	var nm1 = ["B", "Bl", "Cr", "Ch", "G", "Gl", "Gr", "H", "J", "K", "Kr", "L", "M", "S", "Sc", "Tr", "Z"];
	var nm2 = ["o", "a", "a", "o", "e", "i", "u", "y"];
	var nm3 = ["bd", "bs", "dr", "gl", "gn", "gm", "gr", "k", "kr", "kl", "ll", "nd", "nr", "ng", "r", "rg", "rk", "rc", "sc", "st", "sk", "sh", "tr", "th", "q", "z"];
	var nm4 = ["", "", "d", "g", "k", "l", "m", "n", "r", "s", "sh", "wr", "x"];
	var nm5 = ["Agile", "Amphibian", "Arctic", "Barb-Tailed", "Barbed", "Beaked", "Bigeyed", "Black-Eyed", "Black-Striped", "Blind", "Blood-Eyed", "Bloodthirsty", "Boulder-Scaled", "Bright", "Brutal", "Chaotic", "Clouded", "Cobalt", "Cold-Blooded", "Colossal", "Crazed", "Crimson", "Crowned", "Dark", "Deep Sea", "Diabolical", "Ebon", "Electric", "Elusive", "Evasive", "Feral", "Flying", "Four-Eyed", "Giant", "Giant-Fin", "Gigantic", "Glowing", "Golden", "Greater", "Grim", "Herculean", "Horned", "Iron", "Iron-Scaled", "Ivory", "Jade", "Largetooth", "Lone", "Long-Horned", "Long-Tailed", "Mad", "Malevolent", "Mammoth", "Masked", "Matriarch", "Megamouth", "Monstrous", "Murky", "Nervous", "Nimble", "Obsidian", "One-Eyed", "Onyx", "Painted", "Patriarch", "Preying", "Primeval", "Primitive", "Rabid", "Raging", "Rapid", "Ravaging", "Red-Eyed", "Ribbon-Tailed", "Ruthless", "Sapphire", "Savage", "Scarred", "Silent", "Silver", "Silver-Striped", "Slender", "Spiky", "Stalking", "Supreme", "Swift", "Thorn-Scaled", "Titanic", "Titanium", "Vicious", "White-Eyed", "Wild", "Winged"];
	var nm6 = ["Angel", "Apocalypse", "Army", "Arrow", "Assassin", "Blaze", "Blight", "Bone", "Boulder", "Bull", "Butcher", "Cannibal", "Chaos", "Corpse", "Crocodile", "Dagger", "Dawn", "Demon", "Dino", "Dire", "Doom", "Dragon", "Dread", "Ghost", "Goblin", "Grieve", "Harlequin", "Hell", "Horror", "Hound", "Hunting", "Jelly", "Jester", "Killer", "Leopard", "Lion", "Lizard", "Mayhem", "Miracle", "Mocking", "Monster", "Nether", "Night", "Nightmare", "Ogre", "Phantom", "Predator", "Puffer", "Raptor", "Razor", "Requiem", "Rock", "Rogue", "Sand", "Serpent", "Shadow", "Skeleton", "Slayer", "Sleeper", "Slumber", "Spider", "Spine", "Spite", "Storm", "Sword", "Tentacle", "Terror", "Thunder", "Tiger", "Torment", "Tresher", "Vampire", "Venom", "Void", "Wonder", "World"];
	var nm7 = ["Beast", "Behemoth", "Clam", "Crab", "Devil", "Dolphin", "Eel", "Fiend", "Fish", "Leviathan", "Lobster", "Octopus", "Orka", "Ray", "Seal", "Shark", "Snake", "Squid", "Turtle", "Whale", "Worm"];
	var nm8 = ["Alliconda", "Alliganha", "Alligatopus", "Clamaconda", "Clamiranha", "Clamster", "Clamtopus", "Crabaconda", "Crabemoth", "Crabiathan", "Crabiranha", "Crabshark", "Crabtopus", "Dolpheel", "Dolphemoth", "Dolphiathan", "Dolphiconda", "Dolphigator", "Dolphipus", "Dolphiranha", "Dolphiray", "Dolphishark", "Eelaconda", "Eeligator", "Eelodile", "Lobstaconda", "Lobstagator", "Lobstemoth", "Lobsteranha", "Lobsteray", "Lobstiathan", "Lobstodile", "Lobstopus", "Lobstorka", "Lobsturtle", "Orkagator", "Orkallion", "Orkiathan", "Orktopus", "Pirahnopus", "Piranhagator", "Piranharay", "Piranhashark", "Piranheel", "Piranhemoth", "Piranhiathan", "Piranhobster", "Piranhopus", "Piranhorka", "Sealaconda", "Sealcroc", "Sealiathan", "Sealligator", "Sharkaconda", "Sharkanha", "Sharkeel", "Sharkellion", "Sharkemoth", "Sharkfiend", "Sharkigator", "Sharkodil", "Sharkray", "Sharksnake", "Sharksquid", "Sharktopus", "Sharkworm", "Snaketopus", "Squidaconda", "Squidigator", "Squidodile", "Squidshark", "Squitopus", "Turtleconda", "Turtledile", "Turtleviathan", "Turtligator", "Turtlobster", "Whalaconda", "Whalecroc", "Whaletopus", "Whaliathan"];


	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm2.length);
			rnd5 = Math.floor(Math.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * nm5.length);
			rnd2 = Math.floor(Math.random() * nm6.length);
			rnd3 = Math.floor(Math.random() * nm7.length);
			names = "The " + nm5[rnd] + " " + nm6[rnd2] + " " + nm7[rnd3];
		} else {
			rnd = Math.floor(Math.random() * nm8.length);
			names = nm8[rnd];
		}
		return names;
	}

}