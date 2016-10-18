function generator$descriptions$gems() {
	var nm1 = ["Agate", "Agate Geode", "Alexandrite", "Almandine Garnet", "Amazonite", "Amethyst", "Ametrine", "Ammolite", "Andalusite", "Apatite", "Aquamarine", "Aventurine", "Axinite", "Beryl", "Bloodstone", "Boulder Opal", "Calcite", "Carnelian", "Cassiterite", "Charoite", "Chrome Diopside", "Citrine", "Clinohumite", "Diamond", "Emerald", "Enstatite", "Fire Agate", "Fire Opal", "Fluorite", "Hematite", "Hiddenite", "Howlite", "Iolite", "Jasper", "Kyanite", "Lapis Lazuli", "Malachite", "Mali Garnet", "Melanite", "Moldavite", "Moonstone", "Morganite", "Moss Opal", "Nuummite", "Obsidian", "Onyx", "Opal", "Peridot", "Prehnite", "Pyrope Garnet", "Quartz", "Rainbow Moonstone", "Rainbow Pyrite", "Rhodochrosite", "Rhodolite Garnet", "Rhodonite", "Rose Quartz", "Ruby", "Sapphire", "Scapolite", "Seraphinite", "Serpentine", "Snowflake Obsidian", "Sodalite", "Sphalerite", "Sphene", "Spinel", "Star Diopside", "Star Garnet", "Star Ruby", "Star Sapphire", "Sugilite", "Sunstone", "Tanzanite", "Tiger's Eye", "Topaz", "Tourmaline", "Turquoise", "Verdite", "Zircon"];
	var nm2 = ["an antique cushion", "a baguette", "a brilliant", "a briolette", "a cabochon", "a cushion", "an emerald", "a heart", "a kite", "a marquise", "an octagon", "an oval", "a pear", "a princess", "a radiant", "a round", "a royal", "a square", "a triangle", "a trillion"];
	var nm3 = ["bean", "blueberry", "fig", "fist", "grape", "hazelnut", "kumquat", "lemon", "lentil", "lime", "pea", "peanut", "strawberry", "walnut"];
	var nm4 = ["average", "decent", "excellent", "fair", "fairly decent", "fairly poor", "fairly rough", "fine", "great", "inferior", "magnificent", "mediocre", "near flawless", "outstanding", "poor", "premium", "presentable", "pristine", "reasonable", "rough", "rugged", "superb", "supreme", "terrific"];
	var nm5 = ["barely sought after", "decently popular", "fairly popular", "in average demand", "in decent demand", "in fairly high demand", "in low demand", "in very high demand", "not that popular", "not very sought after", "often ignored", "often in high demand", "often quite popular", "quite unpopular", "rarely sought after"];
	var nm6 = ["an incredibly common", "a very common", "a fairly common", "a fairly uncommon", "a quite uncommon", "a very uncommon", "a fairly rare", "a quite rare", "a very rare", "an incredibly rare"];
	var nm7 = ["amplifying", "augmentative", "controlling", "cooling", "defensive", "desirable", "diminishing", "disabling", "electric", "elemental", "emotional", "enhancing", "enlarging", "fiery", "focusing", "fortunate", "healing", "icy", "invigorating", "life", "light", "mending", "potent", "protective", "rejuvenating", "seductive", "shady", "strengthening", "tenacious", "warming"];
	var nm8 = ["defensive weapon", "offensive weapon", "defensive spell focus", "offensive spell focus", "beneficial spell focus", "offensive weapon enhancement", "defensive weapon enhancement", "defensive spell focus enhancement", "offensive spell focus enhancement", "beneficial spell focus enhancement", "defensive artifact", "offensive artifact", "defensive artifact enhancement", "offensive artifact enhancement", "defensive jewelry", "offensive jewelry", "defensive jewelry enhancement", "offensive jewelry enhancement"];

	var rnd1 = Math.floor(Math.random() * nm1.length);
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3 = Math.floor(Math.random() * nm3.length);
	var rnd4 = Math.floor(Math.random() * nm4.length);
	var rnd5 = Math.floor(Math.random() * nm5.length);
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd9 = Math.floor(Math.random() * nm1.length);
	var rnd10 = Math.floor(Math.random() * nm2.length);
	var rnd11 = Math.floor(Math.random() * nm3.length);
	var rnd12 = Math.floor(Math.random() * nm4.length);
	var rnd13 = Math.floor(Math.random() * nm5.length);
	var rnd14 = Math.floor(Math.random() * nm6.length);
	var rnd15 = Math.floor(Math.random() * nm7.length);
	var rnd16 = Math.floor(Math.random() * nm8.length);

	var name = "This " + nm1[rnd1] + " with " + nm2[rnd2] + " cut and the size of a " + nm3[rnd3] + " is in " + nm4[rnd4] + " condition. These gems are " + nm5[rnd5] + ", but they're " + nm6[rnd6] + " gemstone species."
	var name2 = "It's said these gems contain " + nm7[rnd7] + " properties which make for a great " + nm8[rnd8] + ".";

	var name3 = "-----------------------------------------------------------------------------------------------------------------------------";

	var name4 = "This " + nm1[rnd9] + " with " + nm2[rnd10] + " cut and the size of a " + nm3[rnd11] + " is in " + nm4[rnd12] + " condition. These gems are " + nm5[rnd13] + ", but they're " + nm6[rnd14] + " gemstone species."
	var name5 = "It's said these gems contain " + nm7[rnd15] + " properties which make for a great " + nm8[rnd16] + ".";



	var result = "";
	result += name;
	result += "\n";
	result += name2;
	result += "\n";
	result += "\n";
	result += name3;
	result += "\n";
	result += "\n";
	result += name4;
	result += "\n";
	result += name5;
	return result;
}