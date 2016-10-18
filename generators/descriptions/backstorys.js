function generator$descriptions$backstorys(type) {
	var nm1 = ["He", "he", "his", "him", "man"];
	var nm2 = ["adventurous", "affectionate", "analytical", "athletic", "brave", "calm", "capable", "charismatic", "charming", "cheerful", "creative", "curious", "daring", "dedicated", "dependable", "determined", "driven", "dutiful", "eager", "elegant", "energetic", "faithful", "funny", "generous", "gentle", "happy", "helpful", "honest", "hospitable", "humble", "humorous", "innocent", "intelligent", "intrepid", "jovial", "just", "light-hearted", "loyal", "modest", "mysterious", "polite", "popular", "proud", "quick", "reliable", "responsible", "savvy", "sensitive", "sincere", "sweet", "talkative", "thoughtful", "whimsical", "wise", "witty"];
	var nm3 = ["anxious", "arrogant", "bewildered", "bossy", "conceited", "confused", "facetious", "foolish", "greedy", "grouchy", "harsh", "ignorant", "immature", "impatient", "impulsive", "jealous", "lonely", "mean", "naive", "nervous", "opinionated", "pompous", "rash", "restless", "rude", "selfish", "snobbish", "stubborn", "timid", "uncontrolled"];
	var nm4 = ["This is to be expected from somebody", "But what'd you expect from somebody", "This isn't surprising considering for someone", "Which isn't out of the ordinary for someone", "But this is all just a facade, a mechanism to deal", "But there's more than this to somebody", "But there's more than meets the eye, not surprising for somebody"];
	var nm5 = ["n average", " wealthy", " royal", "n ordinary", " fairly rich", " high class", " middle class", " loving", " large", " small", " decent", " successful"];
	var nm6 = ["n average", " normal", " large", " wealthy", " major", "n important", " merchant", " developing", " developed"];
	var nm7 = ["town", "city", "village", "port", "community", "capital"];
	var nm8 = ["without worry", "out of trouble", "free of worries", "free of trouble", "in peace", "comfortably", "happily"];
	var nm9 = Math.floor(Math.random() * 10) + 10;
	var nm10 = ["things changed", "things began to change", "life changed", "life began to change"];
	var nm11 = ["gained responsibilities", "gained new responsibilities", "became more important", "became more important to society", "got an important job", "started to travel a lot", "started to travel the world", "started to experience the world", "started working for the family company", "studied a lot", "went to college", "explored the country", "moved out", "moved in with a friend", "did volunteering work", "did a lot of small jobs", "moved to another country", "became a travelling adventurer", "went on an adventure", "improved upon existing powers", "got a new pet", "got a new companion"];
	var nm12 = ["among the most popular people", "becoming quite desirable", "very successful", "growing up fast", "meeting a lot of influential people", "making many new friends", "learning a lot of new skills", "gaining a little fame", "making some great new friends", "about to meet 'Mr(s). Right'", "learning a new language", "becoming more cultured", "slowly improving upon existing skills", "learning how to cook in new styles", "strengthening the relationships with friends", "strengthening the relationship with both parents", "competing in large tournaments"];
	var nm12b = ["managed to bloom", "succeeded", "managed to thrive", "boomed", "went beyond expectations", "reached for the stars", "lives the dream", "blossomed", "reached the top", "made a fortune", "fulfilled dreams", "thrived", "enjoys life", "loves life", "struggles to make it", "is going on a journey", "is part of an adventure", "is trying to reach the top", "is unstoppable", "is on top of the world", "is exploring new areas", "is discovering hidden secrets", "is discovering hidden treasures", "is venturing out", "is trying to help others"];
	var nm13 = ["With the support of great friends", "With the support of great parents", "With plenty of money and connections", "Alongside great friends", "With amazing, new friends", "With a great deal of determination", "With determination and some luck", "Alongside trusted friends", "With a great companion", "Through hard work", "Through plenty of trial and error", "By never giving up", "After an astonishing adventure", "With the help of great friends", "Having overcome plenty of obstacles"];
	var nm14 = ["strange", "weird", "crazy", "ever changing", "fast", "fast changing", "amazing", "fantasy", "fantastic", "wacky", "absurd", "strange", "mad", "wild", "remarkable", "wonderful", "outlandish", "astonishing", "extraordinary", "mystifying"];
	var nm15 = ["bravery", "brilliance", "capability", "charm", "compassion", "curiosity", "determination", "diligence", "eagerness", "sense of humor", "wits", "cunning", "perseverance", "persistence", "skills", "powers", "talents", "wisdom", "intrepidness", "honesty"];
	var nm16 = ["reaching great success", "finding a way to the top", "fulfilling all dreams", "accomplish all goals", "improving the world", "going beyond expectations", "climbing to the top", "staying ahead of the game", "reaching full potential", "doing anything"];
	var nm17 = ["a force to be reckoned with", "a true inspiration for many", "a true friend for life", "an ally you'd want by your side", "somebody we can expect great things of", "somebody who could change the world", "a great leader, perhaps even of the nation", "an unstoppable force", "a friend you'd want by your side", "a person of (great) importance"];
	var nm18 = ["Despite all this success,", "However,", "But there may be more to it than this;", "But for now that's speculation;", "But only time will tell;", "But who really knows what will happen;", "But anything could happen;", "But things could change quickly;"];
	var nm19 = ["searching for a higher purpose", "still studying", "enjoying the simpler life", "having fun with friends", "travelling the world", "exploring everything", "still growing up and learning new things", "still finding the right place in the world", "still looking for a true calling", "still trying to perfect skills", "improving upon skills and talents", "learning how to reach full potential", "enjoying the world and its beauty", "looking for a place to truly call home", "still learning, exploring and discovering"];
	var nm20 = ["to explore", "than meets the eye", "than we know", "secrets than answers", "than what we get to know", "to experience", "to discover", "to see, taste and experience", "than people let on", "incredible sights to behold", "watchful eyes than expected", "caution than needed", "to learn", "to enjoy", "people to meet"];
	var nm21 = ["great friends", "great companions", "great parents", "amazing friends", "plenty of resources", "a great family", "awesome friends", "great people around", "wise teachers and great friends", "a close group of friends"];
	var names = [];

	var tp = type;
	var gnd = Math.random();
	if (gnd < 0.5) {
		nm1 = ["She", "she", "her", "her", "woman"];
	}
	if (tp === 2) {
		nm2 = ["adventurous", "ambitious", "angry", "arrogant", "brave", "calm", "capable", "cautious", "clever", "coarse", "conceited", "confident", "crafty", "cross", "daring", "dauntless", "determined", "eager", "efficient", "facetious", "fierce", "frank", "gloomy", "greedy", "hardy", "harsh", "impartial", "impatient", "impolite", "impulsive", "independent", "intelligent", "keen", "loyal", "malicious", "mysterious", "observant", "pensive", "petulant", "precise", "punctilious", "quick", "quiet", "sarcastic", "scornful", "self-reliant", "sincere", "skillful", "sly", "stingy", "strict", "stubborn", "sullen", "tactful", "versatile", "vulgar", "witty"];
		nm3 = ["disturbing", "dreadful", "gruesome", "horrifying", "shocking", "terrible", "tormented", "troubled", "ugly", "unsettling"];
		nm5 = [" broken", " decent", " fairly rich", " great", " high class", " large", " loving", " lower class", " middle class", " needy", " poor", " small", " successful", " wealthy", "n average", "n ordinary"];
		nm6 = ["n average", " normal", " large", " wealthy", " major", "n important", " merchant", " developing", " developed", " poor", " broken"];
		nm9 = Math.floor(Math.random() * 13) + 4;
		nm10 = ["things changed", "life changed", "everything changed", "life changed drastically", "life took a turn for the worst", "things took a turn for the worst"];
		if (gnd < 0.5) {
			nm11 = ["lost her parents in", "lost her mother in", "lost her father in", "lost her parents when they left after", "lost her best friend in", "lost her home when it was destroyed after", "lost her money after", "lost her family was they were split up after", "lost her brother in", "lost her sister in", "lost her sisters in", "lost her brothers in", "lost her siblings in", "lost her family in", "killed somebody by accident during", "killed somebody during", "maimed somebody during", "accidently maimed somebody during", "destroyed someone's life during", "destroyed someone's life by accident during"];
		} else {
			nm11 = ["lost his parents in", "lost his mother in", "lost his father in", "lost his parents when they left after", "lost his best friend in", "lost his home when it was destroyed after", "lost his money after", "lost his family was they were split up after", "lost his brother in", "lost his sister in", "lost his sisters in", "lost his brothers in", "lost his siblings in", "lost his family in", "killed somebody by accident during", "killed somebody during", "maimed somebody during", "accidently maimed somebody during", "destroyed someone's life during", "destroyed someone's life by accident during"];
		}
		nm12 = ["a freak fire", "a robbery gone wrong", "a terrible disaster", "a natural disaster", "a suspicious accident", "a fight which got out of control", "an invasion", "a brutal war", "a drought", "an act of terrorism", "a volcanic eruption", "a hurricane", "an earthquake", "a horrible flood", "a long lasting heatwave", "an epidemic", "a food shortage", "a power outage", "a government takeover", "a rebellion", "a revolution"];
		nm12b = ["abandoned by all", "forsaken by all", "arrested", "forgotten by everybody", "neglected by everybody", "shunned", "rejected by all", "becoming an outcast", "caught up with the wrong people", "initiated in a gang", "now part of a sinister clan", "headed for a life of crime", "headed for a life of misery", "now alone and forgotten", "now alone, miserable and abandoned"];
		nm13 = ["With a new found friend", "All alone", "Without any help", "With a childhood friend", "With the help of a stranger", "Alone, lost and forgotten", "With the help of a small group of strangers", "With a couple of friends", "With a new found love", "With the help of a suspicious stranger", "With the help of a suspicious friend", "While persued by the authority", "While persued by a criminal gang", "While persued by strangers", "While obstructed by many", "Against all odds", "Alongside a brother", "Alongside a sister", "Alongside a cousin", "Together with a companion", "Together with a pet", "With a loyal stranger", "With a loyal friend", "Reunited with a friend", "Reunited with a lost pet"];
		nm14 = ["wicked", "crazy", "bizarre", "cruel", "outlandish", "odd", "harsh", "criminal", "insane", "mad", "bitter", "rough", "bleak", "brutal", "relentless", "unkind", "pitiless", "vicious", "villainous", "corrupt"];
		nm15 = ["bravery", "fighting skills", "capability", "charm", "vigor", "courage", "determination", "diligence", "eagerness", "inginuity", "wits", "cunning", "perseverance", "persistance", "skills", "powers", "talents", "wisdom", "intrepidness", "strength"];
		nm16 = ["battle the elements", "overcome all odds", "survive everything", "go beyond expectations", "face all obstacles", "conquer all fears and doubts", "crush all that's in the way", "overpower anybody who's a hinderance", "keep ahead of the curve", "remain out of reach of danger", "train to perfection", "escape hell", "reach full potential", "start a new life", "find a new home"];
		nm17 = nm16;
		nm18 = ["Still plagued by the past", "While haunted by memories of the past", "Powerless to change the past", "With new found pride and some happiness", "Still affected by the past", "Having finally found some peace of mind", "Having finally found some stability", "After finally turning life around", "With a new chance at life", "With the lessons of the past", "While still constantly on the move", "With the skills learned in the past", "Having found a significant other", "Settled down and with some peace and quiet", "While constantly travelling the world"];
		nm19 = ["on helping people", "as a mercenary for the king", "a small job with low pay", "on making it in a large tournament", "on meeting new, kind people", "buying a house", "fitting in with society", "as a travelling trader", "as a travelling gun for hire", "as a travelling help for hire", "on travelling and surviving of nature", "perfecting skills and talents", "tracking the people of the past", "as help for hire", "as a sailor"];
		nm20 = ["find some form of redemption", "shed the memories of the past", "be released of the haunting memories", "find a place to call home", "live a normal life", "find safety and happiness", "find joy and happiness in life", "leave the past behind", "find inner peace", "find answers to the events of the past", "learn more about the past", "find vengeance for the actions in the past", "forget about the past", "start life over on a good note", "support a new, honest life"];
		nm21 = ["peace of mind", "friends", "happiness", "joy and love for life", "stability and security", "tranquility", "joys and comforts of life", "pleasureful life", "significant other", "purpose to life"];
	}
	var rnd2a = Math.floor(Math.random() * nm2.length);
	var rnd2b = Math.floor(Math.random() * nm2.length);
	while (rnd2a === rnd2b) {
		rnd2b = Math.floor(Math.random() * nm2.length);
	}
	var rnd2c = Math.floor(Math.random() * nm2.length);
	while (rnd2c === rnd2b || rnd2c === rnd2a) {
		rnd2c = Math.floor(Math.random() * nm2.length);
	}
	var rnd3 = Math.floor(Math.random() * nm3.length);
	var rnd4 = Math.floor(Math.random() * nm4.length);
	var rnd5 = Math.floor(Math.random() * nm5.length);
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd12b = Math.floor(Math.random() * nm12b.length);
	var rnd13 = Math.floor(Math.random() * nm13.length);
	var rnd14 = Math.floor(Math.random() * nm14.length);
	var rnd15a = Math.floor(Math.random() * nm15.length);
	var rnd15b = Math.floor(Math.random() * nm15.length);
	while (rnd15a === rnd15b) {
		rnd15b = Math.floor(Math.random() * nm15.length);
	}
	var rnd16 = Math.floor(Math.random() * nm16.length);
	var rnd17 = Math.floor(Math.random() * nm17.length);
	while (rnd16 === rnd17) {
		rnd17 = Math.floor(Math.random() * nm17.length);
	}
	var rnd18 = Math.floor(Math.random() * nm18.length);
	var rnd19 = Math.floor(Math.random() * nm19.length);
	var rnd20 = Math.floor(Math.random() * nm20.length);
	var rnd21 = Math.floor(Math.random() * nm21.length);

	if (tp === 2) {
		names[0] = nm1[0] + "'s " + nm2[rnd2a] + ", " + nm2[rnd2b] + " and " + nm2[rnd2c] + ". " + nm4[rnd4] + " with " + nm1[2] + " " + nm3[rnd3] + " past.";
		names[1] = nm1[0] + " was born and grew up in a" + nm5[rnd5] + " family in a" + nm6[rnd6] + " " + nm7[rnd7] + ", " + nm1[1] + " lived " + nm8[rnd8] + " until " + nm1[1] + " was about " + nm9 + " years old, but at that point " + nm10[rnd10] + ".";
		names[2] = nm1[0] + " " + nm11[rnd11] + " " + nm12[rnd12] + " and was " + nm12b[rnd12b] + ". " + nm13[rnd13] + " " + nm1[1] + " had to survive in a " + nm14[rnd14] + " world. But with " + nm1[2] + " " + nm15[rnd15a] + " and " + nm15[rnd15b] + ", " + nm1[1] + " managed to " + nm16[rnd16] + " and " + nm17[rnd17] + ". This has turned " + nm1[3] + " into the " + nm1[4] + " " + nm1[1] + " is today.";
		names[3] = nm18[rnd18] + ", " + nm1[1] + " now works " + nm19[rnd19] + ". By doing so, " + nm1[1] + " hopes to " + nm20[rnd20] + " and finally find " + nm21[rnd21] + " " + nm1[1] + " has never had.";
	} else {
		names[0] = nm1[0] + "'s " + nm2[rnd2a] + ", " + nm2[rnd2b] + ", " + nm2[rnd2c] + " and perhaps a little too " + nm3[rnd3] + ". " + nm4[rnd4] + " with " + nm1[2] + " position.";
		names[1] = nm1[0] + " was born in a" + nm5[rnd5] + " family in a" + nm6[rnd6] + " " + nm7[rnd7] + ". " + nm1[0] + " lived " + nm8[rnd8] + " until " + nm1[1] + " was about " + nm9 + " years old, but at that point " + nm10[rnd10] + ".";
		names[2] = nm1[0] + " " + nm11[rnd11] + " and was " + nm12[rnd12] + ".  " + nm13[rnd13] + ", " + nm1[1] + " " + nm12b[rnd12b] + " in a " + nm14[rnd14] + " world. But with " + nm1[2] + " " + nm15[rnd15a] + " and " + nm15[rnd15b] + ", there's nothing to stop " + nm1[3] + " from " + nm16[rnd16] + ". " + nm1[0] + " could quickly become " + nm17[rnd17] + ".";
		names[3] = nm18[rnd18] + " " + nm1[1] + " is currently " + nm19[rnd19] + ". " + nm1[0] + " feels like there's more " + nm20[rnd20] + " in this world. Luckily " + nm1[1] + " has " + nm21[rnd21] + " to support " + nm1[3] + ".";
	}

	var result = "";

	for (i = 0; i < 4; i++) {
		result += names;
		result += "\n";
		result += "\n";
	}

	return result;
}