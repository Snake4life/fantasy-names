function generator$descriptions$taverns() {
	var type = Math.random();
	var names1 = ["welcoming", "cozy", "inviting", "warm", "cheerful", "snug", "delightful", "well maintained", "clean", "homey", "folksy", "pleasant", "intimate", "rustic", "modest", "humble", "peaceful", "beautiful", "enchanting", "cheerful"];
	var names2 = ["Bricks", "Clay", "Clay bricks", "Hardwooden planks", "Large and small stones", "Large stones", "Logs", "Plastered walls", "Sandstone bricks", "Small stones", "Softwood", "Softwooden planks", "Stacked boulders", "Stacked stones", "Timber"];
	var names3 = ["carved pillars", "hardwooden beams", "hardwooden pillars", "hardwooden tree trunks", "huge, stone beams", "huge, stone pillars", "intricate stone carvings", "intricate wooden carvings", "marble details", "marble pillars", "marble stones", "sandstone pillars", "softwooden tree trunks", "stone beams", "stone pillars", "thick, hardwooden logs", "thick, stone beams", "tree trunks", "well-crafted wooden beams", "wooden pillars"];
	var names4 = ["hard", "near impossible", "difficult", "tough", "impossible"];
	var names5 = ["curtained windows", "darkened windows", "high windows", "large, curtained windows", "large, stained glass windows", "small, curtained windows", "small, stained glass windows", "stained glass windows", "windows", "closed windows"];
	var names6 = ["animation", "cheerful sounds", "clapping and cheering", "clinking of beer glasses", "energy and excitement", "enjoyment", "entertained voices", "entertainment", "enthusiastic noises", "excited voices", "excitement", "happiness and joy", "hustling and bustling", "inviting music", "laughter", "laughter and cheering", "livelyness", "music and songs", "music and voices", "noise", "passionate voices", "sounds of cutlery and drinking glasses", "sounds of dancing and singing", "thrilled sounds", "warm noises"];
	var names7 = ["decorated, metal door", "decorated, wooden door", "hardwooden door", "heavily used, metal door", "heavily used, wooden door", "heavy, metallic door", "heavy, wooden door", "huge, hardwooden door", "old, hardwooden door", "old, metal door", "old, wooden door", "small, softwooden door", "thick, metal door", "thick, wooden door", "well-crafted, metal door"];
	var names8 = ["amazing, but unknown scents", "a pleasant atmosphere", "excitement", "joyful music", "cheerful singing", "the smell of alcohol", "laughing voices", "clapping hands", "dancing people", "aromas of roasted meats", "the smile of a waitress", "overall happiness", "a sense of home", "a feeling of comfort"];
	var names9 = ["busy", "extremely busy", "quite busy", "a little preoccupied", "handling some customers", "engaged in a conversation", "working hard", "buried in orders", "swamped in work", "working up a sweat"];
	var names10 = ["short wave", "smile", "wink", "friendly nod", "wave"];
	var names11 = ["lovely", "alluring", "enchanting", "engaging", "charming"];
	var names12 = ["Hardwooden beams", "Marble pillars", "Rounded, stone beams", "Rounded, wooden beams", "Several walls", "Sqaured, stone beams", "Squared, wooden beams", "Stone beams", "Tree logs", "Wooden beams"];
	var names13 = ["Christmas-like lights", "ambient lights", "candles", "chandeliers", "decorational lights", "fans", "huge lamps", "lanterns", "large candles", "light fixtures", "lights", "rows of small candles", "rows of small lights", "sconces", "torches"];
	var names14 = ["clear of anything, though signs do show plenty of things used to hang on the walls, though they've probably been knocked off by customers who had too much to drink.", "completely empty, besides the lighting, most likely because customers stumble against the walls too often and would knock off anything on the walls.", "covered in photographs of personal achievements, all related to the nearby mountain. Some of people who reached the summit, others simply of happy people.", "decorated with mounted animal heads, hides and small animals. It's clear the owner is an avid hunter and the smells coming from the kitchen indicate the animals don't go to waste.", "decorated with sports memorabilia, it's clear the owner, and probably the customers, are avid fans.", "full of paintings, all in a different style, but all of the surrounding area.", "full of paintings, judging by the style they're all done by 1 person, perhaps the owner.", "littered with all sorts of memorabilia, though whether they're collected or donated is uncertain.", "littered with so many different memorabilia, you're not sure if they tried going for a specific style at one time or just put up anything they like.", "loaded with hundreds of memorabilia, all signed and most likely donated by customers.", "overflowing with signatures and written messages, undoubtedly from happy customers.", "packed with all sorts of travel memorabilia, most likely all collected by the owner.", "packed with rows of painted portraits. You recognize the bartender on one of them, so the others must be either friends, family or previous owners.", "swarmed with flags of all sorts and sizes. Some are from nearby towns or provinces, others from the far corners of the world. They must've been fited to the owner.", "swarming with photographs, some of what undoubtedly must be famous people and others of happy customers."];
	var names15 = ["Locals", "Tourists", "Travelers", "Passing traders", "Workers", "Soldiers", "Groups belonging to some kind of organization, whether sport, music or other you're not sure of,"];
	var names16 = ["is often a good sign.", "could be seen as the best sign you can get.", "could be seen as a bad sign, though you're sure it's not.", "often indicates great food.", "often means great company.", "often leads to exciting evenings.", "is probably the best clientele for the owner."];
	var names17 = [", what looks like couples, lone travellers and anybody else who enjoys great company.", ", what must be seperate groups who have bonded over great food and conversation.", ", what seems to be entire families, all enjoying the food, drinks and company of each other.", ", what seems to be one large group of people.", ", what seems to be the entire surrounding village.", " happy, excited groups of people, some are dancing on the table, while others cheer them on with clapping and yelling.", " locals, travellers, foreigners and anybody else who wishes to join.", " seperate groups of people, all enjoying themselves, but they keep to themselves.", " seperate groups who, after having had quite a few drinks, seem to be trying to prove which group is best.", " several smaller groups of people."];
	var names18 = ["are clearly having a good time.", "seem to be enjoying themselves a lot, perhaps too much, if such a thing is possible.", "are probably starting to reach the point of having drunk too much, though nobody seems to mind.", "clearly enjoy each other's company, though they seem to be strangers who have met here.", "are playing games and, judging by their laughter, are either telling jokes or great, perhaps embarrasing, tales.", "seem to be close with the owner, though they happily welcome others among their midst.", "are singing and dancing, occassionaly pulling an unsuspecting waitress amidst their dancing group.", "are indulging in great food and drinks, while some do try to strike a conversation, others can barely speak a word between eating what must be delicious food.", "who seem to be strangers to each other, all sitting here because there are no other seats. Though they all clearly enjoy each other's company."];
	var names19 = ["the smells of grilled and cooked food coming from the kitchen, it must be the food.", "the amount of cups, tankards and glasses on the table, it's probably the fine alcoholic drinks.", "the amount of men staring at one of the waitresses, it's probably her beauty and charm.", "the amount of women in this tavern and the amount of them trying to subtly eye the bartender, it's probably his good looks and charm.", "the music and how many people are dancing, it must be the live band who just started playing.", "the angelic voice who just started singing, it must be famous for this singer.", "the laughter, cheering and overall enjoyment of everybody, it's probably the people themselves who make this tavern famous.", "the warmth and joy radiating throught the tavern, it's probably the atmosphere that makes this tavern famous."];

	if (type > 0.5) {
		names1 = ["broken", "cheerless", "cold", "crude", "dark", "depressing", "dire", "dirty", "disturbing", "dull", "gloomy", "horrible", "nasty", "rough", "ugly", "uncomfortable", "unenjoyable", "unfriendly", "uninviting", "unwelcoming"];
		names5 = ["curtained windows", "darkened windows", "high windows", "large, curtained windows", "large, stained glass windows", "small, curtained windows", "small, stained glass windows", "stained glass windows", "windows", "closed windows", "dirty windows", "dusty windows"];
		names6 = ["apathy", "awkward silence", "bitterness", "coldness", "depressing vibes", "dire mood", "gloominess", "lack of joy", "lack of life", "lack of people", "lethargy", "lifelessness", "ominous atmosphere", "quiet sorrow", "silence", "uncomfortable atmosphere", "whispers and weeping"];
		names7 = ["worn, metal door", "worn, wooden door", "hardwooden door", "heavily used, metal door", "heavily used, wooden door", "heavy, metallic door", "heavy, wooden door", "huge, hardwooden door", "old, hardwooden door", "old, metal door", "old, wooden door", "small, softwooden door", "thick, metal door", "thick, wooden door", "dirty, metal door", "dirty, wooden door"]
		names8 = ["a horrific scent", "dirt and dust from all places", "silence", "a few groans", "watching eyes", "the smell of alcohol", "whispers", "the sound of the wind outside", "a coldness", "aromas of what's probably food, hopefully", "the rinkle of the doorbell", "thick air", "a layer of smoke hanging below the ceiling", "a feeling of discomfort"];
		names9 = ["coughing into a dirty napkin", "lying in a chair, doing nothing", "pouring a drink for a customer", "reading a newspaper", "rubbing a glass with a cloth, though it's not getting cleaner", "sleeping", "smoking tobacco", "staring at nothing", "talking to a customer", "trying to catch a spider"];
		names10 = [""];
		names11 = ["dire", "disgusting", "dreary", "dull", "gloomy", "horrible", "somber"];
		names13 = ["candles", "broken fans", "huge, dusty lamps", "lanterns", "large, molten candles", "light fixtures", "broken lights", "rows of small, molten candles", "rows of small, broken lights", "sconces", "unlit torches"];
		names14 = ["completely empty, only covered in a layer of fatty grime", "decorated, if you can call it that, with old paintings covered in dust", "covered in cobwebs and any decoration that does hang there is now unrecognizable", "covered in a layer of dust, making it near impossible to see what the few paintings on the walls are about", "decorated with sport's memorabilia, though it looks like it hasn't been maintained or cleaned for years", "loaded with pictures, though the dust and cobwebs stops you from taking a closer look", "covered in messages, once written by loyal customers and now covered in dust, worn away and mostly unreadable", "decorated with mounted animal heads and small animals, though most have become worn and broken, given the place an even creapier feel", "littered with all sorts of memorabilia, many of which have become unrecognizable due to dust, cobwebs and other dirt", "covered in photographs of what were undoubtedly better times for this tavern. They're now more of a painful reminder of what it has turned into"];
		names15 = ["could be locals, could be lost souls", "could be anybody really", "you'd like to stay away from", "are silent and they keep to themselves", "are eerily silent, you're unsure if all of them are even alive", "appear to be quite ominous and suspicious in your eyes", "appear to be dangerous in way or another", "probably work less honorable operations"];
		names16 = ["you'd like to stay as for away from them as possible", "you hope they'll leave you alone, just like you're leaving them alone", "they give you an uncomfortable feeling of dread", "it makes you a little nervous", "you think it's probably time to leave, right now", "it's about the clearest sign you can get, telling you you don't belong", "you begin to fear for your safety, it's probably best to find a different place"];
		names17 = [""];
		names18 = [""];
		names19 = ["the figures lurking in the shadows, it's probably some dirty business", "the dirt and unhygienic circumstances, it's probably food poisoning", "everything you've seen so far, you don't really care and you probably don't want to know", "the things and people you've seen, you're not waiting to find out", "everything in this place, it must be something horrifying", "judging by the people in this place, it's probably something shady and possibly dangerous for strangers like you"];
	}

	var random1a = parseInt(Math.floor((Math.random() * names1.length)));
	var random1b = parseInt(Math.floor((Math.random() * names1.length)));
	while (random1a === random1b) {
		random1b = parseInt(Math.floor((Math.random() * names1.length)));
	}
	var random1c = parseInt(Math.floor((Math.random() * names1.length)));
	while (random1a === random1c || random1b === random1c) {
		random1c = parseInt(Math.floor((Math.random() * names1.length)));
	}
	var random2 = parseInt(Math.floor((Math.random() * names2.length)));
	var random3 = parseInt(Math.floor((Math.random() * names3.length)));
	var random4 = parseInt(Math.floor((Math.random() * names4.length)));
	var random5 = parseInt(Math.floor((Math.random() * names5.length)));
	var random6 = parseInt(Math.floor((Math.random() * names6.length)));
	var random7 = parseInt(Math.floor((Math.random() * names7.length)));
	var random8a = parseInt(Math.floor((Math.random() * names8.length)));
	var random8b = parseInt(Math.floor((Math.random() * names8.length)));
	while (random8a === random8b) {
		random8b = parseInt(Math.floor((Math.random() * names8.length)));
	}
	var random9 = parseInt(Math.floor((Math.random() * names9.length)));
	var random10 = parseInt(Math.floor((Math.random() * names10.length)));
	var random11 = parseInt(Math.floor((Math.random() * names11.length)));
	var random12 = parseInt(Math.floor((Math.random() * names12.length)));
	var random13 = parseInt(Math.floor((Math.random() * names13.length)));
	var random14 = parseInt(Math.floor((Math.random() * names14.length)));
	var random15 = parseInt(Math.floor((Math.random() * names15.length)));
	var random16 = parseInt(Math.floor((Math.random() * names16.length)));
	var random17 = parseInt(Math.floor((Math.random() * names17.length)));
	var random18 = parseInt(Math.floor((Math.random() * names18.length)));
	var random19 = parseInt(Math.floor((Math.random() * names19.length)));


	var name = "From the outside it looks " + names1[random1a] + ", " + names1[random1b] + " and " + names1[random1c] + ". " + names2[random2] + " and " + names3[random3] + " make up most of the building's outer structure.";
	var name2 = "It's " + names4[random4] + " to see through the " + names5[random5] + ", but the " + names6[random6] + " from within can be felt outside.";

	var name3 = "As you enter the tavern through the " + names7[random7] + ", you're welcomed by " + names8[random8a] + " and " + names8[random8b] + ".";
	var name4 = "The bartender is " + names9[random9] + ", but still manages to welcome you with a " + names10[random10] + ".";

	var name5 = "It's as " + names11[random11] + " inside as it is on the outside. " + names12[random12] + " support the upper floor and the " + names13[random13] + " attached to them. The walls are " + names14[random14] + ".";

	var name6 = "The tavern itself is packed. " + names15[random15] + " seem to be the primary clientele here, which " + names16[random16] + " Several long tables are occupied by" + names17[random17] + " The other, smaller tables are also occupied by people who " + names18[random18] + " Even most of the stools at the bar are occupied, though nobody seems to mind more company.";

	var name7 = "You did hear rumors about this tavern, supposedly it's famous for something, but you can't remember what for. Though judging by " + names19[random19] + " You manage to find a seat and prepare for what will undoubtedbly be a great evening.";
	if (type > 0.5) {
		name4 = "The bartender is " + names9[random9] + " and makes no effort to acknowledge your pressence.";
		name6 = "The tavern itself is almost completely abanonded.  The few people inside " + names15[random15] + ", but whoever they are, " + names16[random16] + ".";
		name7 = "You did hear rumors about this tavern, supposedly it's infamous for something, but for the life of you you can't remember what for. Though juding by " + names19[random19] + ".";
	}


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
	result += "\n";
	result += name6;
	result += "\n";
	result += "\n";
	result += name7;
	return result;
}