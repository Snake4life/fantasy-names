function generator$descriptions$towns() {
	var names1 = ["Based", "Built", "Cast", "Constructed", "Designed", "Engineered", "Erected", "Established", "Fabricated", "Forged", "Formed", "Found", "Located", "Positioned", "Raised", "Rooted", "Set", "Settled", "Situated", "Stationed"];
	var names2 = ["on the Northern side of", "on the Southern side of", "on the Western side of", "on the Eastern side of", "on the top of", "on top of", "on the peak of", "on the base of", "on the bottom of", "on the right side of", "on the left side of", "on the light side of", "on the dark side of", "on the highest point of", "on the lowest point of", "above", "behind", "under", "inside", "around", "beside", "next to", "in", "on the end of"];
	var names3 = [" bluff", " canal", " canyon", " cave", " cavern", " cliff", " covert", " desert", " field", " forest", " geyser field", " glacier", " grotto", " grove", " hill", "n island", " jungle", " lake", " lava stream", " mound", " mountain", "n ocean", " peninsula", " river", " sea", " stream", " thicket", " tundra", " valley", " vulcano", " waterfall", " wetlands", " woodlands"];
	var names4 = ["village", "town", "city", "metropolis", "hamlet", "megalopolis", "outpost", "port", "township", "settlement", "crossroad", "burg"];
	var names5 = ["Barnemouth", "Paethsmouth", "Pernrith", "Perthlochry", "Pitmerden", "Coalfell", "Cullfield", "Darkwell", "Deathfall", "Doonatel", "Dry Gulch", "Easthaven", "Ecrin", "Erast", "Far Water", "Firebend", "Fool's March", "Frostford", "Goldcrest", "Goldenleaf", "Greenflower", "Garen's Well", "Haran", "Hillfar", "Hogsfeet", "Hollyhead", "Hull", "Hwen"];
	var names6 = ["humans", "elves", "orcs", "dwarves", "fairies", "trolls", "vampires", "werewolves", "humans", "humans", "humans", "night elves", "blood elves", "gnomes", "goblins", "high elves", "wood elves", "dark elves", "halflings", "giants", "pirates", "barbarians", "vikings"];
	var names7 = ["Agent", "Baron", "Captain", "Chief", "Colonel", "Commander", "Director", "Duchess", "Duke", "Earl", "General", "Governor", "Judge", "Knight", "Lady", "Lord", "Major", "Marshal", "Master", "Mayor", "Minister", "Mr.", "Mrs.", "Ms.", "Officer", "Ruler", "Sergeant", "Supervisor", "Warlord"];
	var names8 = ["Adwell", "Ady", "Afton", "Barnett", "Barney", "Barnfield", "Chilson", "Chilton", "Cawthorn", "Davenport", "Davey", "Dallin", "Eustice", "Eustis", "Evatt", "Falcon", "Faley", "Falkner", "Geary", "Gedman", "Gedney", "Hanshaw", "Hansley", "Hanson", "Lamkin", "Lamkins", "Lamm", "Lockridge", "Locks", "Lockwood", "Masser", "Massey", "Massingale", "Rosemond", "Shepherd", "Shepley", "Wakeley", "Wakelin"];
	var names9 = ["magical properties", "fertile soils", "ancient histories", "a cultural history", "hidden secrets", "healing properties", "an abundance of minerals", "a dark history", "rare resources", "precious gems", "ancient burial grounds", "old tombs", "a broken, hidden library", "an ancient water source", "dark ruins", "rare plants", "medicinal plants", "strong metal ores", "natural defences", "hidden tunnels", "ambush positions", "escape routes", "an abundance of wildlife", "ancient, lost technologies", "a comfortable weather system", "unique wildlife", "spiritual significance", "ancestral grounds", "ancient, unexplained statues", "body enhancing properties"];
	var names10 = ["n advancing", " booming", " breaking", " damaged", " declining", " developing", " failing", " feeble", " flourishing", " growing", " healthy", " hurting", "n improving", " mending", " poor", " progressing", " prospering", " prosperous", " thriving", " tormented", " troubled", "n unhealthy", " wounded"];
	var names11 = ["alchemy", "animal breeding", "animal training", "armorsmithing", "baking", "beer brewing", "blacksmithing", "carpenting", "cooking", "crafting", "engineering", "farming", "fishing", "fletching", "herbalism", "hunting", "jewelcrafting", "leatherworking", "medicine", "mining", "tailoring", "thieving", "trade", "war", "weaponsmithing", "wine brewing", "wood production", "woodcrafting"];

	var names14 = ["alchemy", "rare animal breeding", "rare animal training", "advanced armorsmithing", "refined baking", "elaborate beer brewing techniques", "elaborate blacksmithing", "refined carpenting", "sophisticated cooking", "complex crafting", "master engineering", "rare crop farming", "ocean fishing", "intricate fletching techniques", "rare herbalism", "sustainable hunting", "intricate jewelcrafting", "gorgeous leatherworking", "advanced medicine", "prosperous mining", "delicate tailoring", "highly skilled thieving", "prosperous trade", "skilled in the art of war", "weaponsmithing", "ancient wine brewing techniques", "rare wood production", "delicate woodcrafting", "a strong defence", "skilled fighters", "strong magicians", "deadly archers"];

	var names17 = ["gorgeous", "beautiful", "majestic", "elegant", "glorious", "impressive", "flamboyant", "luxuriant", "stunning", "impressive", "delightful", "graceful", "magnificent", "imposing", "sublime", "grandiose", "humble", "crude", "rough", "mediocre", "dull", "plain", "ordinary", "hideous", "gruesome", "dreadful", "macabre", "ghastly", "unattractive", "unexciting", "worn", "mundane"];
	var names18 = ["oak wood", "maple wood", "yew wood", "cypress wood", "pine wood", "spruce  wood", "redwood", "ash wood", "birch wood", "blackwood", "ebony wood", "elm wood", "ironwood", "mahogany wood", "silky oak wood", "willow wood", "bamboo", "tatchet", "shingle", "slate tile", "wheat straw", "seagrass", "ceramic tile", "copper"];
	var names19 = ["golden brick", "red brick", "redstone", "granite", "marble", "limestone", "sandstone", "stone veneer", "chiseled stone", "oak wood", "maple wood", "yew wood", "cypress wood", "pine wood", "spruce  wood", "redwood", "ash wood", "birch wood", "blackwood", "ebony wood", "elm wood", "ironwood", "mahogany wood", "silky oak wood", "willow wood", "bamboo", "tatchet", "shingle", "slate tile", "wheat straw", "seagrass", "ceramic tile", "copper", "lavastone"];
	var names20 = ["lucious gardens", "enchanting wildlife", "swarms of fireflies", "babbling creeks", "vibrant, rare trees", "breathtaking waterfall", "calm and quiet collection of ponds", "frozen lakes", "frozen waterfall", "imposing glacier", "ambient light of nearby lava streams", "the native bird species", "rainbow of different flowers", "everclear night sky", "huge, majestic geyser", "silent mountain range", "foggy fields", "a gorgeous mirror lake", "rows upon rows of lucious trees", "staircase of waterfalls", "frozen ponds", "aromatic flowers", "calming ocean front", "fields of farmland", "bamboo forest", "huge oak tree", "stunning canyon", "majestic fjords", "white, sandy beaches", "amazing sunsets"];
	var names21 = ["amusing", "captivating", "charming", "delightful", "enchanting", "enthralling", "entrancing", "fascinating", "glamorous", "heavenly", "intriguing", "inviting", "magical", "mystical", "mythical", "otherworldly", "pleasant", "pleasing", "seductive", "whimsical"];

	var names38 = ["town hall", "cathedral", "farm", "large park", "bank", "jail", "wishing well", "old bar", "armory", "training grounds", "graveyard", "mausoleum", "watchtower", "blacksmith", "hotel", "lighthouse", "market", "museum", "hospital", "barracks", "power plant", "watermill", "windmill", "library", "school", "temple", "castle", "dueling arena", "fountain", "greenhouse", "guard tower", "lumber mill", "quarry", "stables", "statue", "tombs", "monument", "ancient forge", "inn", "cemetery", "theatre", "stadium", "wizard tower"];

	var names41 = ["affluent", "beautiful", "bleak", "booming", "cheerful", "comfortable", "delightful", "enjoyable", "flourishing", "frightful", "gloomy", "gracious", "grim", "grisly", "growing", "gruesome", "harsh", "horrendous", "horrible", "horrific", "luxuriant", "macabre", "pleasant", "pleasurable", "prosperous", "sinister", "somber", "terrible", "terrifying", "thriving"];

	var random1 = parseInt(Math.floor((Math.random() * names1.length)));
	var random2 = parseInt(Math.floor((Math.random() * names2.length)));
	var random3 = parseInt(Math.floor((Math.random() * names3.length)));
	var random4 = parseInt(Math.floor((Math.random() * names4.length)));

	var random6 = parseInt(Math.floor((Math.random() * names6.length)));
	var random6b = parseInt(Math.floor((Math.random() * names6.length)));

	var random9 = parseInt(Math.floor((Math.random() * names9.length)));
	var random10 = parseInt(Math.floor((Math.random() * names10.length)));

	var random11 = parseInt(Math.floor((Math.random() * names11.length)));
	var random12 = parseInt(Math.floor((Math.random() * names11.length)));
	while (random12 == random11) {
		random12 = parseInt(Math.floor((Math.random() * names11.length)));
	}
	var random13 = parseInt(Math.floor((Math.random() * names11.length)));
	while (random13 == random12 || random13 == random11) {
		random13 = parseInt(Math.floor((Math.random() * names11.length)));
	}
	var random14 = parseInt(Math.floor((Math.random() * names14.length)));
	var random15 = parseInt(Math.floor((Math.random() * names14.length)));
	while (random15 == random14) {
		random15 = parseInt(Math.floor((Math.random() * names14.length)));
	}

	var random16 = parseInt(Math.floor((Math.random() * names11.length)));
	while (random16 == random11 || random16 == random12 || random16 == random13) {
		random16 = parseInt(Math.floor((Math.random() * names11.length)));
	}

	var random17 = parseInt(Math.floor((Math.random() * names17.length)));

	if (random17 > 16) {
		names18 = ["metal shingle", "galvanised steel", "rusted", "decaying", "blackened", "gray", "black wooden", "dark wooden", "murky wooden", "gloomy wooden", "half rotten"];
		names19 = ["mossy wooden", "mossy stone", "faded granite", "faded marble", "worn limestone", "worn sandstone", "stone veneer", "chiseled stone", "galvanised steel", "rusted", "decaying", "blackened", "gray", "black wooden", "dark wooden", "murky wooden", "gloomy wooden", "half rotten", "lavastone"];
		names20 = ["decaying trees", "rotten fields", "broken roads", "overgrown gardens", "vines overgrowing everything", "unmaintained gardens", "foggy surroundings", "murky woods", "musky swamps", "menacing mountain tops", "barren grounds", "absolute silence", "a large graveyard", "large cobwebs", "dusty windows", "dirty roads", "thick smoke", "creaking wood", "whistling wind", "scary animals", "a lot of insects", "scavenger birds", "ominous scarecrows"];
		names21 = ["bizarre", "bleak", "chilling", "creepy", "dark", "desolate", "dreary", "dull", "eerie", "foreboding", "frightening", "ghostly", "ghoulish", "gloomy", "grim", "grisly", "gruesome", "macabre", "morbid", "mysterious", "ominous", "peculiar", "repulsive", "revolting", "sinister", "somber", "spine-chilling", "supernatural", "uncanny", "unearthly"];
	}
	var random18 = parseInt(Math.floor((Math.random() * names18.length)));
	var random20 = parseInt(Math.floor((Math.random() * names20.length)));

	var random21 = parseInt(Math.floor((Math.random() * names21.length)));

	var random38 = parseInt(Math.floor((Math.random() * names38.length)));

	var random39 = parseInt(Math.floor((Math.random() * 50 + 20)));
	var random40 = random39.toString();

	var random41 = parseInt(Math.floor((Math.random() * names41.length)));

	if (random6 == 2) {
		names5 = ["Gorash", "Ogrinar", "Tohrall", "Dranorg", "Hammerfall", "Orsanum", "Wrothguard", "Garlund", "Kharn", "Xarluk"];
		names8 = ["Gnarg", "Gnarlug", "Gnorl", "Gnorth", "Gnoth", "Gnurl", "Golag", "Golub", "Gomatug", "Gomoku", "Gorgu", "Gorlag", "Grikug", "Grug", "Grukag", "Grukk", "Grung", "Gruul"];

		random5 = parseInt(Math.floor((Math.random() * names5.length)));
		random8 = parseInt(Math.floor((Math.random() * names8.length)));
	} else if (random6 == 3) {
		names5 = ["Balagost", "Moriath", "Nogrand", "Frosthold", "Hammerhold", "Thar Modan", "Kaz Modor", "Uldama", "Hammerforge", "Stormforge"];
		names8 = ["Bengahdar", "Banbrek", "Drumdus", "Dulgarn", "Galirg", "Kharnur", "Iromuador", "Ragorhdrom", "Urmbrek", "Theledon"];

		random5 = parseInt(Math.floor((Math.random() * names5.length)));
		random8 = parseInt(Math.floor((Math.random() * names8.length)));
	} else if (random6 == 4) {
		names5 = ["Eviana", "Malica", "Mystohr", "Arconia", "Aeria", "Mithyria", "Calairith", "Myracal", "Fentalia", "Curacius"];
		names7 = ["Queen", "King", "Prince", "Princess"];
		names8 = ["Azore", "Coral", "Cowrie", "Ebbie", "Gullie", "Ionia", "Ivory", "Marin", "Meer", "Meri", "Mora", "Nautila", "Oceana", "Pearl", "Percula", "Sandy", "Shelly", "Starfish", "Tidal", "Urchin", "Wave", "Whirl", "Wrassey", "Aed", "Aodh", "Aeden", "Ash", "Ashley", "Blaze", "Candala", "Coala", "Firo", "Flare"];

		random5 = parseInt(Math.floor((Math.random() * names5.length)));
		random7 = parseInt(Math.floor((Math.random() * names7.length)));
		random8 = parseInt(Math.floor((Math.random() * names8.length)));
	} else if (random6 == 5) {
		names5 = ["Zuldazin", "Zalzabin", "Jintalman", "Zulamor", "Julguroob", "Atalakar", "Zandalur", "Farakazul", "Guruubash", "Amano"];
		names8 = ["Ekon", "Erasto", "Haijen", "Hamedi", "Hokima", "Jaafan", "Jabir", "Jalai", "Javyn", "Jijel", "Juma", "Jumoke", "Kaijin", "Kazko", "Maalik", "Makas", "Malak", "Nyabingi", "Rahjin", "Rakash", "Rashi", "Razi"];
	} else if (random6 == 1 || random6 == 11 || random6 == 12 || random6 == 15 || random6 == 16 || random6 == 17) {
		names5 = ["Gandoline", "Galadoneh", "Tirianae", "Darnassea", "Sinashari", "Kaladorei", "Hiborane", "Fandralore", "Cenorias", "Ishnuala"];
		names8 = ["Wyninn", "Ninleyn", "Tinlef", "Elluin", "Elduin", "Elmon", "Almar", "Alas", "Alwin", "Almer", "Alre", "Alred", "Alen", "Alluin", "Alduin", "Almon", "Hagmar", "Hagas", "Hagwin", "Hagmer", "Hagre"];
	} else if (random6 == 13) {
		names5 = ["Nomeregone", "Meckotarq", "Kasmord", "Trokkus", "Hitonkar", "Serian", "Gloufry", "Hazelmyre", "Erposanra", "Ardnode"];
		names8 = ["Glinoflonk", "Bonlebick", "Bimbik", "Gnobflink", "Binflonk", "Nittlewizz", "Gimkink", "Merbibus", "Totonk", "Dinnus"];
	} else if (random6 == 14) {
		names5 = ["Bolgewotar", "Galowax", "Kozan", "Stimwedle", "Bootabai", "Midsprocket", "Rotchet", "Grozlik", "Andormyn", "Ventarco"];
		names8 = ["Karax", "Baxeek", "Soxart", "Rezikmez", "Fizink", "Wimax", "Jexmelyx", "Grexmex", "Tinkbelex", "Greekeels"];
	} else if (random6 == 20) {
		names7 = ["Captain"];
	} else {
		null;
	}
	if (random17 > 16) {
		names18 = ["metal shingle", "galvanised steel", "rusted", "decaying", "blackened", "gray", "black wooden", "dark wooden", "murky wooden", "gloomy wooden", "half rotten"];
		names19 = ["faded granite", "faded marble", "worn limestone", "worn sandstone", "stone veneer", "chiseled stone", "galvanised steel", "rusted", "decaying", "blackened", "gray", "black wooden", "dark wooden", "murky wooden", "gloomy wooden", "half rotten", "lavastone"];
		names20 = ["decaying trees", "rotten fields", "broken roads", "overgrown gardens", "vines overgrowing everything", "unmaintained gardens", "foggy surroundings", "murky woods", "musky swamps", "menacing mountain tops", "barren grounds", "absolute silence", "a large graveyard", "large cobwebs", "dusty windows", "dirty roads", "thick smoke", "creaking wood", "whistling wind", "scary animals", "a lot of insects", "scavenger birds", "ominous scarecrows"];
		names21 = ["bizarre", "bleak", "chilling", "creepy", "dark", "desolate", "dreary", "dull", "eerie", "foreboding", "frightening", "ghostly", "ghoulish", "gloomy", "grim", "grisly", "gruesome", "macabre", "morbid", "mysterious", "ominous", "peculiar", "repulsive", "revolting", "sinister", "somber", "spine-chilling", "supernatural", "uncanny", "unearthly"];
	}

	var random5 = parseInt(Math.floor((Math.random() * names5.length)));
	var random7 = parseInt(Math.floor((Math.random() * names7.length)));
	var random8 = parseInt(Math.floor((Math.random() * names8.length)));
	var random19 = parseInt(Math.floor((Math.random() * names19.length)));

	var name = names1[random1] + " " + names2[random2] + " a " + names3[random3] + ", the " + names4[random4] + " of " + names5[random5] + " is home to " + names6[random6] + " lead by " + names7[random7] + " " + names8[random8] + ".";
	var name2 = "This " + names4[random4] + " wasn't built by a" + names3[random3] + " by accident, as it has " + names9[random9] + ", which is of great importance to the people of " + names5[random5] + " and its success.";

	var name3 = "The " + names4[random4] + " itself looks " + names17[random17] + ". With its " + names18[random18] + " rooftops, " + names19[random19] + " walls and " + names20[random20] + ", " + names5[random5] + " has a " + names21[random21] + " atmosphere.";
	var name4 = "The main attraction is the " + names38[random38] + ", which was built " + random40 + " years ago and designed by " + names6[random6b] + ".";

	var name5 = names5[random5] + " has a" + names10[random10] + " economy, which is mainly supported by " + names11[random11] + ", " + names11[random12] + " and " + names11[random13] + ". But their biggest strengths are " + names14[random14] + " and " + names14[random15] + ".";
	var name6 = "However, " + names5[random5] + " lacks people skilled in " + names11[random16] + ".";

	var name7 = "Despite its strengths and weaknesses, " + names5[random5] + " is most likely headed towards a " + names41[random41] + " future under the leadership of " + names7[random7] + " " + names8[random8] + ". But this remains to be seen.";




	var result = "";
	result += name;
	result += "\n";
	result += name2;
	result += "\n";
	result += "\n";
	result += name3;
	result += "\n";
	result += name4;
	result += "\n";
	result += "\n";
	result += name5;
	result += "\n";
	result += name6;
	result += "\n";
	result += "\n";
	result += name7;
	return result;
}