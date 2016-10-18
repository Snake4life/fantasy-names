function generator$descriptions$societys() {
	var names1 = ["nation", "country", "union", "state"];
	var names2 = ["Suya", "Avaria", "Estein", "Ushen", "Iaburg", "Uxil", "Boles", "Setan", "Suvania", "Xeria", "Costan", "Uvoswela", "Atbrines", "Sabia", "Ebastana", "Etrien", "Uxtrus", "Ponga", "Teles", "Docor", "Exbreau", "Alaybraria", "Embron", "Ariasken", "Emuathen"];
	var names3 = ["betrayal", "bitter struggles", "bountiful nature", "bravery", "comradery", "craftsmanship", "cunning", "darker times", "dignity", "distrust", "endurance", "faith", "famines", "fertile soils", "friendship", "hard work", "honor", "horrible crimes", "industrial advancements", "ingenuity", "intelligence", "intense labour", "kindness", "leadership", "love", "natural resource abundance", "poorer times", "prosperous trade", "rare resources", "rare soils", "resourcefulness", "sacrifices", "science", "sins", "solidarity", "strong minds", "trust", "vigor", "violent battles", "virtues", "vitality", "war", "wisdom", "wit", "wrongdoings"];
	var names4 = ["wealthiest", "luckiest", "most fortunate", "most booming economies", "most independent", "happiest", "most successful", "most adored", "most blessed", "most self-sufficient", "most self-reliant", "most liberated", "safest", "richest", "most profitable", "unhappiest", "poorest", "most bleak", "most needy", "most unfortunate", "most troubled", "most unconnected", "most uncontrolled", "most hindered", "most dangerous", "least self-sufficient", "most confined", "most burdened", "most unproductive", "most inefficient"];
	var names5 = ["education", "trade", "infrastructure", "medicine", "food production", "sustainability", "housing", "fuel efficiency", "fuel production", "public safety", "public health", "science", "industry", "hygiene", "clean water", "income", "life expectancy", "literacy", "export", "natural resources"];
	var names6 = " a little in "

	var names7 = ["aristocratic", "autocratic", "capitalist ", "communist", "confederate", "democratic", "diarchic", "feudal ", "matriarchal", "monarchical", "parliamentary", "patriarchal", "plutocratic", "republic", "socialist ", "theocratic", "totalitarian", "tribalistic"];
	var names8 = ["Fortunately", "Unfortunately"];
	var names9 = ["no", "no", "no", "no real", "little to none", "hardly any", "barely any"];
	var names10 = [" and there hasn't been for a long time.", " and this has been the case for a long time.", " and this has been so for quite some time.", ", but this hasn't always been the case.", ", but this is a fairly recent development.", ", but this is only a recent occurance.", " and this has been the case for decades.", " and this has been so for nearly a century.", ", but things could change soon.", ", but things are changing at the moment.", ", but all this could change in a second.", ", but this will not last.", " and this will probably last for decades to come.", " and this may not last much longer.", " and this doesn't appear to be changing any time soon."];

	var names11 = ["a failed harvest", "a flood", "an active volcano", "a conflict with a neighboring country", "a new disease", "pollution of water", "air pollution", "the rise of gangs", "the rise of drugs", "a smuggling organization", "a group of bandits", "aggressive wildlife", "imminent war", "a huge forest fire", "a drought", "an animal disease"];
	var names12 = ["is doing everything it can", "is working on a solution", "is implementing a solution", "lacks resources", "is powerless", "is asking other countries to help", "is too preoccupied with other issues", "is willing to sacrifice a lot", "can't do anything more", "is unable", "is incapable", "won't be able", "can't possibly do anything", "does whatever it takes", "might sacrifice too much", "will do anything in its power", "is supported by the people", "is working with the public", "is supported by other nations", "is alone in trying"];

	var names13 = ["happy", "content", "quite happy", "fairly content", "cheerful", "joyful", "pleased", "gratified", "delighted", "jolly"];
	var names14 = ["admirable", "brilliant", "decent", "enjoyable", "fine", "good", "gratifying", "great", "honest", "pleasant", "pleasing", "rewarding", "satisfying", "terrific", "wonderful"];
	var names15 = " and ";
	var names16 = " might be ";
	var names17 = " most ";

	var names18 = ["no importance", "barely any importance", "no real importance", "no importance at all", "great importance", "quite some importance", "much importance", "a fair deal of importance"];
	var names19 = ["adventurous", "careful", "cautious", "confident", "creative", "curious", "dedicated", "driven", "dutiful", "elegant", "energetic", "faithful", "friendly", "generous", "gentle", "helpful", "honest", "hospitable", "intrepid", "joyful", "just", "law-abiding", "light-hearted", "modest", "open to strangers", "optimistic", "proper", "proud", "reserved", "sensitive", "serious", "warry of strangers"];
	var names20 = ["are very spiritual", "are quite spiritual", "are extremely spiritual", "are moderately spiritual", "aren't very spiritual", "aren't spiritual at all", "aren't really spiritual"];
	var names21 = " however "
	var names22 = " have ";
	var names23 = ["many special ceremonies", "an abundance of celebrations", "an interesting way of life", "special rituals", "intriguing rites of passage", "strict rules", "firm beliefs", "beautiful customs", "ancient traditions", "odd formalities"];

	var random1 = parseInt(Math.floor((Math.random() * names1.length)));
	var random2 = parseInt(Math.floor((Math.random() * names2.length)));
	var random3a = parseInt(Math.floor((Math.random() * names3.length)));
	var random3b = parseInt(Math.floor((Math.random() * names3.length)));
	while (random3b === random3a) {
		random3b = parseInt(Math.floor((Math.random() * names3.length)));
	}
	var random3c = parseInt(Math.floor((Math.random() * names3.length)));
	while (random3c === random3a || random3c === random3b) {
		random3c = parseInt(Math.floor((Math.random() * names3.length)));
	}
	var random4 = parseInt(Math.floor((Math.random() * names4.length)));
	if (random4 > 14) {
		names6 = " a lot in ";
		names13 = ["bitter", "cheerless", "depressed", "distressed", "gloomy", "miserable", "pessimistic", "sorrowful", "troubled", "unhappy"];
		names14 = ["horrible", "unpleasant", "unenjoyable", "troubling", "dreadful", "grim", "cruel", "bleak", "harsh", "somber", "sour", "gloomy", "hopeless", "tough", "rough"];
		names15 = ", but "
		names16 = " is really "
		names17 = " some "
	}
	var random5a = parseInt(Math.floor((Math.random() * names5.length)));
	var random5b = parseInt(Math.floor((Math.random() * names5.length)));
	while (random5b === random5a) {
		random5b = parseInt(Math.floor((Math.random() * names5.length)));
	}
	var random5c = parseInt(Math.floor((Math.random() * names5.length)));
	while (random5c === random5a || random5c === random5b) {
		random5c = parseInt(Math.floor((Math.random() * names5.length)));
	}
	var random5d = parseInt(Math.floor((Math.random() * names5.length)));
	while (random5d === random5a || random5d === random5b || random5d === random5c) {
		random5d = parseInt(Math.floor((Math.random() * names5.length)));
	}
	var random5e = parseInt(Math.floor((Math.random() * names5.length)));
	while (random5e === random5a || random5e === random5b || random5e === random5c || random5e === random5d) {
		random5e = parseInt(Math.floor((Math.random() * names5.length)));
	}
	var random7 = parseInt(Math.floor((Math.random() * names7.length)));
	var random8 = parseInt(Math.floor((Math.random() * names8.length)));
	if (random8 === 1) {
		names9 = ["quite a few", "a couple of", "some", "a few small", "a lot of", "many", "some strong", "fairly strong"];
	}
	var random9 = parseInt(Math.floor((Math.random() * names9.length)));
	if (random9 > 4) {
		if (random8 === 0) {
			names10 = [", but they pose no real threat.", ", but they're not taken seriously by the general public.", ", but they're nothing more than a few sensationalists.", ", but these are mostly conspiracy theorists with a small following.", " and these could grow into bigger, more serious problems.", " and these may turn out to be bigger problems than expected.", ", but these small groups could turn into bigger problems quite fast.", ", but these smaller threats could get out of control fast.", ", but luckily they form no real threat to the safety of the people.", ", but fortunately they're no danger to the public and are largely unknown to the public.", " and while they may be small now, they're slowly growing.", " and although they're steadily growing, they're also being dealt with by the leaders.", " and they seem to be steadily decreasing and slowly dying out.", " and their insignificance means they pose no danger to the public.", ", but they're too small to have to worry about."];
		} else if (random8 === 1) {
			names10 = [", but despite their size they form no real danger to the current leadership.", ", but they're already beginning to lose public interest and are declining in size.", " and they continue to grow at a rapid pace.", " and they slowly gain more and more public interest.", " and they might very soon become a force to be reckoned with.", ", but they're far from becoming a real opposing force.", ", but so far they've stuck to peaceful protests.", " and they have no issue with resorting to violence.", " and their size could soon become a problem.", " and they may one day overthrow the current leadership.", ", but they mainly want a change of way things are lead, rather than a new leadership.", ", but they will most likely remain a fairly insignificant threat.", " and despite their size, they're slowly losing relevance and the public interest.", " and although they could overthrow the current leadership, the majority of the public is still in favor of the current leaders.", ", but the general public opposes their views, so they form no real threat to the current leaders."];
		}
	}
	var random10 = parseInt(Math.floor((Math.random() * names10.length)));
	var random11 = parseInt(Math.floor((Math.random() * names11.length)));
	var random12 = parseInt(Math.floor((Math.random() * names12.length)));
	var random13 = parseInt(Math.floor((Math.random() * names13.length)));
	var random14 = parseInt(Math.floor((Math.random() * names14.length)));
	var random18 = parseInt(Math.floor((Math.random() * names18.length)));
	var random19 = parseInt(Math.floor((Math.random() * names19.length)));
	var random20 = parseInt(Math.floor((Math.random() * names20.length)));
	if (random18 < 4 && random20 > 3) {
		names21 = " either ";
		names22 = " rely more on ";
		names23 = ["what they know will work", "what they can prove", "science", "each other", "nature", "their experience", "their ancestry", "their history", "their heritage", "the world around them", "technology"];
	} else if (random18 > 3 && random20 > 3) {
		names21 = " however ";
		names22 = ", but they do have ";
		names23 = ["many special ceremonies", "an abundance of celebrations", "an interesting way of life", "special rituals", "intriguing rites of passage", "strict rules", "firm beliefs", "beautiful customs", "ancient traditions", "odd formalities"];
	} else if (random18 > 3 && random20 < 4) {
		names21 = " as well ";
		names22 = " have ";
		names23 = ["many special ceremonies", "an abundance of celebrations", "an interesting way of life", "special rituals", "intriguing rites of passage", "strict rules", "firm beliefs", "beautiful customs", "ancient traditions", "odd formalities"];
	}
	var random23a = parseInt(Math.floor((Math.random() * names23.length)));
	var random23b = parseInt(Math.floor((Math.random() * names23.length)));
	while (random23a === random23b) {
		random23b = parseInt(Math.floor((Math.random() * names23.length)));
	}

	var name = "The " + names1[random1] + " of " + names2[random2] + ". Built upon the " + names3[random3a] + ", " + names3[random3b] + " and " + names3[random3c] + " of its past, this " + names1[random1] + " is now among the " + names4[random4] + " countries in its corner of the world.";
	var name2 = "Their " + names5[random5a] + ", " + names5[random5b] + " and " + names5[random5c] + " are among its current greatest strengths. Unfortunately they lack " + names6 + names5[random5d] + " and " + names5[random5e] + ".";

	var name3 = names2[random2] + " is a " + names7[random7] + " " + names1[random1] + ". There are " + names9[random9] + " opposing groups against the current leadership" + names10[random10];
	var name4 = "However, the current greatest threat to the nation is " + names11[random11] + ", but the current leadership " + names12[random12] + " to solve this issue. ";

	var name5 = "The people of " + names2[random2] + " are " + names13[random13] + ". They live " + names14[random14] + " lives" + names15 + " while " + names5[random5d] + names16 + " lacking, their " + names5[random5a] + " helps relief " + names17 + " of their issues.";
	var name6 = "Religion holds " + names18[random18] + " in their lives and, if anything, has made them more " + names19[random19] + ". The people of " + names2[random2] + " " + names20[random20] + names21 + " and they" + names22 + names23[random23a] + " and " + names23[random23b] + ".";

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
	return result;
}