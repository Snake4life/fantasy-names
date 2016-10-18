var nm1 = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var nm2 = ["a", "e", "u", "i", "o", "y"];
var nm3 = ["agi", "aldir", "aos", "arus", "borh", "bris", "bum", "bus", "dall", "dar", "darr", "des", "dis", "dite", "dohr", "don", "dos", "dros", "dum", "dur", "emis", "enar", "esis", "eus", "eyar", "eyr", "her", "ion", "ione", "ius", "jun", "ldir", "lios", "lo", "lous", "mes", "mir", "mjir", "mos", "mus", "nia", "nir", "nos", "nus", "ohr", "orr", "rasil", "reus", "ros", "ruer", "rus", "ses", "stus", "tar", "tarr", "teus", "thar", "ther", "tia", "ton", "tos", "tyx", "ysus"];
var nm7 = ["god", "goddess"];
var nm6 = [
	["Provided", "are made"],
	["As long as", "are abided by"],
	["Even when", "cannot be made"],
	["Sometimes even when", "are not met"],
	["But only ever if", "are adhere to"],
	["But make sure", "are followed"],
	["Even if", "cannot be abided by"]
];
var nm8b = ["deeply", "greatly", "highly", "hugely", "much", "often", "vastly"];
var nm8 = [" deeply", " greatly", " highly", " hugely", " much", "n often", " vastly"];
var nm9 = ["admired", "adored", "beloved", "celebrated", "embraced", "esteemed", "favored", "feared", "glorified", "honored", "idolized", "obeyed", "praised", "regarded", "respected", "trusted", "venerated"];
var nm10 = ["Action", "Advice", "Afterlife", "Air", "Animals", "Answers", "Autumn", "Balance", "Battle", "Beasts", "Birth", "Blood", "Bloodshed", "Celebration", "Chains", "Chance", "Change", "Company", "Crime", "Dance", "Darkness", "Day", "Death", "Desire", "Destiny", "Disease", "Dreams", "Drinks", "Existence", "Family", "Fate", "Feasts", "Fights", "Fire", "Food", "Fortune", "Friendship", "Gold", "Growth", "Guidance", "Harmony", "Hatred", "Heritage", "Homes", "Honor", "Hospitality", "Humor", "Ice", "Infinity", "Iron", "Jewels", "Jokes", "Journey", "Joy", "Justice", "Knowledge", "Language", "Laughter", "Leadership", "Learning", "Life", "Light", "Love", "Luck", "Lust", "Money", "Mountains", "Music", "Nature", "Night", "Nightmares", "Oceans", "Pain", "Peace", "Plants", "Pleasure", "Poison", "Power", "Property", "Prosperity", "Punishment", "Purpose", "Questions", "Rain", "Rebirth", "Respect", "Rewards", "Rhythm", "Riches", "Riddles", "Science", "Shadows", "Silver", "Sleep", "Smoke", "Snow", "Song", "Spirits", "Spring", "Stories", "Summer", "Surprises", "Teaching", "Thoughts", "Thrones", "Thunder", "Time", "Tradition", "Travel", "Voyages", "War", "Water", "Wealth", "Weather", "Wind", "Winter", "Wisdom", "Writing"];
var nm11 = ["action", "advice", "afterlife", "air", "animals", "answers", "autumn", "balance", "battle", "beasts", "birth", "blood", "bloodshed", "celebration", "chains", "chance", "change", "company", "crime", "dance", "darkness", "day", "death", "desire", "destiny", "disease", "dreams", "drinks", "existence", "family", "fate", "feasts", "fights", "fire", "food", "fortune", "friendship", "gold", "growth", "guidance", "harmony", "hatred", "heritage", "homes", "honor", "hospitality", "humor", "ice", "infinity", "iron", "jewels", "jokes", "journey", "joy", "justice", "knowledge", "language", "laughter", "leadership", "learning", "life", "light", "love", "luck", "lust", "money", "mountains", "music", "nature", "night", "nightmares", "oceans", "pain", "peace", "plants", "pleasure", "poison", "power", "property", "prosperity", "punishment", "purpose", "questions", "rain", "rebirth", "respect", "rewards", "rhythm", "riches", "riddles", "science", "shadows", "silver", "sleep", "smoke", "snow", "song", "spirits", "spring", "stories", "summer", "surprises", "teaching", "thoughts", "thrones", "thunder", "time", "tradition", "travel", "voyages", "war", "water", "wealth", "weather", "wind", "winter", "wisdom", "writing"];
var nm4 = ["but a few", "common", "crucial", "dominant", "principal", "several major", "the main three", "very important", "vital"];
var nm12 = ["most would describe him as", "he's often considered to be", "people tend to see him as", "his personality is often described as", "most would regard him as", "many think of him as"];
var nm5 = ["offerings", "sacrifices", "gifts", "vows", "alms", "atonements", "chants", "pledges", "oaths"];
var nm13 = ["abrasive", "active", "adaptable", "adventurous", "aggressive", "agonizing", "ambitious", "amoral", "amusing", "angry", "anticipative", "apathetic", "appreciative", "argumentative", "arrogant", "aspiring", "athletic", "balanced", "barbaric", "blunt", "brilliant", "brutal", "callous", "calm", "capable", "captivating", "careless", "caring", "charismatic", "charming", "cheerful", "childish", "clear-headed", "clever", "coarse", "cold", "companionably", "compassionate", "conceited", "confident", "considerate", "contemplative", "cooperative", "courageous", "courteous", "crass", "crazy", "creative", "criminal", "crude", "cruel", "curious", "cynical", "daring", "deceitful", "decisive", "dedicated", "demanding", "desperate", "destructive", "determined", "devious", "difficult", "disciplined", "disconcerting", "discreet", "dishonest", "disloyal", "disorderly", "disrespectful", "disruptive", "disturbing", "dominating", "dutiful", "dynamic", "earnest", "efficient", "egocentric", "elegant", "empathetic", "energetic", "enthusiastic", "envious", "exciting", "extreme", "faithful", "farsighted", "flexible", "focused", "forgiving", "forthright", "freethinking", "friendly", "frightening", "fun-loving", "generous", "gentle", "good-natured", "gracious", "greedy", "grim", "hardworking", "hateful", "helpful", "heroic", "honest", "honorable", "hostile", "humble", "humorous", "idealistic", "ignorant", "imaginative", "impatient", "imprudent", "incisive", "inconsiderate", "incorruptible", "independent", "individualistic", "innovative", "insensitive", "insightful", "insincere", "insulting", "intelligent", "intolerant", "intuitive", "irrational", "irresponsible", "irritable", "kind", "lazy", "leaderly", "lovable", "loyal", "malicious", "methodical", "miserable", "modest", "monstrous", "morbid", "narcissistic", "narrow-minded", "negativistic", "neglectful", "objective", "obnoxious", "observant", "obsessive", "open", "opportunistic", "optimistic", "orderly", "organized", "outspoken", "passionate", "patient", "pedantic", "perceptive", "persuasive", "perverse", "petty", "playful", "pompous", "possessive", "power-hungry", "practical", "precise", "predatory", "prejudiced", "pretentious", "protective", "provocative", "punctual", "rational", "realistic", "reflective", "relaxed", "reliable", "resourceful", "respectful", "responsible", "responsive", "romantic", "sadistic", "scornful", "self-indulgent", "selfish", "selfless", "sensitive", "sentimental", "shallow", "sharing", "sly", "sociable", "spontaneous", "stable", "superficial", "surprising", "sweet", "sympathetic", "tactless", "thievish", "thoughtless", "tolerant", "treacherous", "troublesome", "trusting", "uncaring", "understanding", "unfriendly", "unstable", "upright", "venomous", "vindictive", "warm", "wise", "witty"];
var nm14 = ["tall", "short", "incredibly tall", "giant", "small", "little"];
var nm15 = ["muscular", "fat", "thin", "slim", "slender", "meager", "strong", "large", "athletic"];
var nm16 = ["handsome", "ugly", "mundane", "pretty", "attractive", "fair", "rough", "old", "young", "aged", "mature", "immature", "youthful"];
var nm17 = ["elegant", "graceful", "dirty", "colorful", "terrifying", "pure", "bright", "gleaming", "glowing", "unkempt", "spotless"];
var nm19 = ["alligator", "ape", "bat", "bear", "beast", "bird", "bison", "boar", "bull", "cat", "cobra", "coyote", "crane", "crow", "deer", "dinosaur", "dog", "dragon", "eagle", "elephant", "fox", "goat", "gorilla", "hare", "hawk", "hippo", "horse", "hummingbird", "hyena", "ibis", "jackal", "jaguar", "kangaroo", "lemur", "leopard", "lion", "llama", "mammoth", "moose", "mouse", "nightingale", "octopus", "ostrich", "owl", "panda", "panther", "parrot", "pig", "ram", "rat", "reptile", "rhino", "salamander", "serpent", "shark", "sheep", "snake", "spider", "tiger", "toad", "turtle", "weasel", "wolf", "wolverine"];
var nm20 = ["humanoid ", "somewhat humanoid ", "larger than average ", "more powerful looking ", "unique kind of ", "creature with the head of a", "human with the head of a", "form of a", "human with the body of a", "hybrid with the body of a"];
var nm21 = ["no preferred place", "one true place", "one main place", "a few main places", "all sorts of places", "many different places", "a few types of places"];
var nm22 = ["who wish to devote themselves to", "seeking the aid or guidance of", "who seek the assistance of", "in need of the wisdom of", "who desire the wisdom and guidance of", "calling for the aid of", "craving the power potentially given by", "yearn for the blessings of", "thirst for the powers and blessings of", "in pursuit of the aid of"];
var nm23 = ["altars", "small altars", "natural sanctuaries", "natural altars", "shrines", "natural shrines", "small shrines", "homemade shrines", "handheld symbols", "carried symbols", "dedicated clothing pieces", "pagodas", "larger prayer houses", "worn symbols"];
var nm24 = ["a good way to show your dedication", "ideal to increase your connection", "a good way to start connecting", "preferred by most", "probably the most commonly form of worship", "a mandatory form of worship to some", "pretty much the single most common form of worship", "commonly found throughout the lands", "good ways to find other followers", "part of every day life by now", "prevelent even outside of these circles", "typically found to be a good place to start"];
var nm25 = ["numerous", "few", "quite numerous", "common", "plentiful", "abundant", "many", "in the minority", "in the majority", "infrequently encountered"];
var nm26 = ["adults", "adventurers", "advisors", "animal keepers", "artists", "commoners", "crafters", "elderly", "explorers", "farmers", "fighters", "foresters", "gatherers", "guards", "healers", "heralds", "herbalists", "hunters", "magicians", "masters", "merchants", "minstrels", "nobility", "outcasts", "outlaws", "parents", "peasants", "philosophers", "pilgrims", "politicians", "professionals", "rangers", "royalty", "sailors", "sales people", "scholars", "servants", "shepherds", "slaves", "soldiers", "tavernfolk", "teachers", "the poor", "the wealthy", "the young", "trackers", "traders", "travelers", "vendors", "warriors"];
var nm27 = [", but appreciated are all those who seek the aid of", ", but welcome are all those who put their faith in the hands of", ", but welcome are all who seek the guidance of", ", but none will be turned away from the glory of", ", but all are welcome under the guidance of", ", but none shall be excluded from the aid of", ", but all others are welcome to seek the aid of", ", but if in need all others are welcome to seek the guidance of", ", but when in need you're always welcome to seek the help of", ", but welcome are all among the followers of", " and only those who truly put their faith in", " and it's them that are most favored by", " and they're by far the most favorite worshippers of", " and outsiders are often less welcome among followers of", " and it's tricky to be accepted otherwise among worshippers of", " and few others seem to be welcome among followers of", " and these seem to be the only people aided by", " and are favored and focused on by", " and others are generally ignored by", " and no others are usually welcomed among followers of"];
var nm28 = ["one", "many", "a few", "a couple of", "a handful", "countless", "no", "no need for", "no desire for", "no luck with"];
var nm29 = "lovers";
var nm30 = ", but the main one is";
var nm31 = ["Which doesn't affect the power", "This changes little in regards to the aid", "Granted this changes nothing to the power", "Of course this changes nothing to the guidance", "But this has no effect on the help", "This only adds to the aid", "Which only fuels the power", "This only helps focus the power", "This just empowers the guidance", "Fortunately this just strengthens the aid"];
var nm32 = ["may", "may or may not", "will", "can", "could", "could potentially", "may possibly"];
var nm33 = ["lovers often strike back together when one of them is crossed", "lovers provide strength and aid in times of great need", "lovers will often unite when either one is under scrutiny", "united lovers stand strong together", "when together they're a force to be reckoned with", "love can be a distraction", "lovers require require dedication and attention too", "lovers too need help in times of need, whether they're a god or not", "love brings about all sorts of emotion and not always the good ones", "lovers can become rivals too", "without allies you're on your own in times of peril", "even gods stand vulnerable when on their own", "even gods could use allies when others wish to take their power", "a god on their own is still vulnerable despite their godly powers", "without allies to back them up even gods can fall", "it's the strongest gods that require no aid after all", "only the strongest of gods can stand alone", "it's the mightiest of deities that can walk alone", "it's only the most confident of gods that can stand alone", "only the mightiest and the overly proud gods dare stand alone"];

var nm3b = ["agi", "aldir", "aos", "arus", "borh", "bris", "bum", "bus", "dall", "dar", "darr", "des", "dis", "dite", "dohr", "don", "dos", "dros", "dum", "dur", "emis", "enar", "esis", "eus", "eyar", "eyr", "her", "ion", "ione", "ius", "jun", "ldir", "lios", "lo", "lous", "mes", "mir", "mjir", "mos", "mus", "nia", "nir", "nos", "nus", "ohr", "orr", "rasil", "reus", "ros", "ruer", "rus", "ses", "stus", "tar", "tarr", "teus", "thar", "ther", "tia", "ton", "tos", "tyx", "ysus", "ra", "ara", "ella", "elia", "nja", "yja", "ulla", "la", "na", "ana", "neas", "phine", "tris", "gyn", "syn", "dite", "ena", "hena", "tia", "anke", "mera", "nera", "soi", "heia", "mis", "thys", "asis", "one", "dione", "dona", "ona", "phion", "trix", "tix", "lene", "lena", "phy", "tune", "va", "una", "tuna", "arae", "aris", "ris", "tia", "rena", "raura", "dea", "enta", "dia", "ta"];

function generator$descriptions$gods(type) {
	var tp = type;
	var rnd7 = Math.floor(Math.random() * nm7.length);
	if (rnd7 === 1) {
		nm1 = ["B", "C", "D", "F", "G", "H", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
		nm3 = ["ra", "ara", "ella", "elia", "nja", "yja", "ulla", "la", "na", "ana", "neas", "phine", "tris", "gyn", "syn", "dite", "ena", "hena", "tia", "anke", "mera", "nera", "soi", "heia", "mis", "thys", "asis", "one", "dione", "dona", "ona", "phion", "trix", "tix", "lene", "lena", "phy", "tune", "va", "una", "tuna", "arae", "aris", "ris", "tia", "rena", "raura", "dea", "enta", "dia", "ta"];
		nm12 = ["most would describe her as", "she's often considered to be", "people tend to see her as", "her personality is often described as", "most would regard her as", "many think of her as"];
	}
	var rnd1 = Math.floor(Math.random() * nm1.length);
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3 = Math.floor(Math.random() * nm3.length);
	var rnd5 = Math.floor(Math.random() * nm5.length);
	var rnd5b = Math.floor(Math.random() * nm5.length);
	while (rnd5 === rnd5b) {
		rnd5b = Math.floor(Math.random() * nm5.length);
	}
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd8b = Math.floor(Math.random() * nm8b.length);
	while (rnd8 === rnd8b) {
		rnd8b = Math.floor(Math.random() * nm8b.length);
	}
	var rnd9 = Math.floor(Math.random() * nm9.length);
	var rnd9b = Math.floor(Math.random() * nm9.length);
	while (rnd9 === rnd9b) {
		rnd9b = Math.floor(Math.random() * nm9.length);
	}
	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	while (rnd10 === rnd11) {
		rnd11 = Math.floor(Math.random() * nm11.length);
	}
	var rnd11b = Math.floor(Math.random() * nm11.length);
	while (rnd10 === rnd11b || rnd11 == rnd11b) {
		rnd11b = Math.floor(Math.random() * nm11.length);
	}
	var rnd4 = Math.floor(Math.random() * nm4.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd13 = Math.floor(Math.random() * nm13.length);
	var rnd13b = Math.floor(Math.random() * nm13.length);
	while (rnd13 === rnd13b) {
		rnd13b = Math.floor(Math.random() * nm13.length);
	}
	if (tp === 1) {
		var rnd14 = Math.floor(Math.random() * nm14.length);
		var rnd15 = Math.floor(Math.random() * nm15.length);
		var rnd16 = Math.floor(Math.random() * nm16.length);
		var rnd17 = Math.floor(Math.random() * nm17.length);
		var nmType = nm14[rnd14] + ", " + nm15[rnd15] + ", " + nm16[rnd16] + " and " + nm17[rnd17];
	} else {
		var rnd20 = Math.floor(Math.random() * nm20.length);
		if (rnd20 > 4) {
			nm19 = ["n alligator", "n ape", " bat", " bear", " beast", " bird", " bison", " boar", " bull", " cat", " cobra", " coyote", " crane", " crow", " deer", " dinosaur", " dog", " dragon", "n eagle", "n elephant", " fox", " goat", " gorilla", " hare", " hawk", " hippo", " horse", " hummingbird", " hyena", "n ibis", " jackal", " jaguar", " kangaroo", " lemur", " leopard", " lion", " llama", " mammoth", " moose", " mouse", " nightingale", "n octopus", "n ostrich", "n owl", " panda", " panther", " parrot", " pig", " ram", " rat", " reptile", " rhino", " salamander", " serpent", " shark", " sheep", " snake", " spider", " tiger", " toad", " turtle", " weasel", " wolf", " wolverine"];
			var rnd19 = Math.floor(Math.random() * nm19.length);
			var nmType = nm20[rnd20] + nm19[rnd19];
		} else {
			var rnd19 = Math.floor(Math.random() * nm19.length);
			var nmType = "a " + nm20[rnd20] + nm19[rnd19];
		}
	}
	var rnd21 = Math.floor(Math.random() * nm21.length);
	var rnd22 = Math.floor(Math.random() * nm22.length);
	var rnd23 = Math.floor(Math.random() * nm23.length);
	var rnd23b = Math.floor(Math.random() * nm23.length);
	while (rnd23 === rnd23b) {
		rnd23b = Math.floor(Math.random() * nm23.length);
	}
	var rnd24 = Math.floor(Math.random() * nm24.length);
	var rnd25 = Math.floor(Math.random() * nm25.length);
	var rnd26 = Math.floor(Math.random() * nm26.length);
	var rnd26b = Math.floor(Math.random() * nm26.length);
	while (rnd26 === rnd26b) {
		rnd26b = Math.floor(Math.random() * nm26.length);
	}
	var rnd27 = Math.floor(Math.random() * nm27.length);
	var rnd28 = Math.floor(Math.random() * nm28.length);
	if (rnd28 === 0) {
		nm29 = "lover"
		var rnd1b = Math.floor(Math.random() * nm1.length);
		var rnd2b = Math.floor(Math.random() * nm2.length);
		var rnd3b = Math.floor(Math.random() * nm3b.length);
		nm30 = ": " + nm1[rnd1b] + nm2[rnd2b] + nm3b[rnd3b];
	} else if (rnd28 > 5) {
		nm30 = "";
		nm29 = "lovers";
	} else {
		var rnd1b = Math.floor(Math.random() * nm1.length);
		var rnd2b = Math.floor(Math.random() * nm2.length);
		var rnd3b = Math.floor(Math.random() * nm3b.length);
		nm29 = "lovers";
		nm30 = ", but the main one is " + nm1[rnd1b] + nm2[rnd2b] + nm3b[rnd3b]
	}
	var rnd31 = Math.floor(Math.random() * nm31.length);
	var rnd32 = Math.floor(Math.random() * nm32.length);
	var rnd33 = Math.floor(Math.random() * nm33.length);

	var name = nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + " is a" + nm8[rnd8] + " " + nm9[rnd9] + " and " + nm8b[rnd8b] + " " + nm9[rnd9b] + " " + nm7[rnd7] + ". " + nm10[rnd10] + ", " + nm11[rnd11] + " and " + nm11[rnd11b] + " are " + nm4[rnd4] + " elements this divine being is associated with and " + nm12[rnd12] + " " + nm13[rnd13] + " and " + nm13[rnd13b] + ".";

	var name2 = "Often depicted as " + nmType + " " + nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + " is usually worshipped through " + nm5[rnd5] + " and " + nm5[rnd5b] + ".";

	var name3 = "There's " + nm21[rnd21] + " for those " + nm22[rnd22] + " " + nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + ", but " + nm23[rnd23] + " and " + nm23[rnd23b] + " are " + nm24[rnd24] + ".";
	var name4 = "Worshippers are " + nm25[rnd25] + " and tend to come in the form of " + nm26[rnd26] + " and " + nm26[rnd26b] + nm27[rnd27] + " this " + nm7[rnd7] + ". " + nm6[rnd6][0] + " the right " + nm5[rnd5] + " and " + nm5[rnd5b] + " " + nm6[rnd6][1] + ".";

	var name5 = nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + " has " + nm28[rnd28] + " " + nm29 + nm30 + ". " + nm31[rnd31] + " " + nm1[rnd1] + nm2[rnd2] + nm3[rnd3] + " " + nm32[rnd32] + " provide, but " + nm33[rnd33] + ".";




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
	return result;
}