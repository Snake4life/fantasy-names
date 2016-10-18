function generator$descriptions$potions() {
	var nm1 = ["n accuracy", "n agility", "n amnesia", "n anger", "n apathy", "n arcane enhancement", "n arcane protection", "n aura balancing", "n awakening", " balance", " beauty", " berserker", " blinding", " bloodlust", " brutality", " camouflage", " chaos", " clairvoyance", " comforting", " concentration", " deafening", " death", " deep sleep", " deliriousness", " delusion", " depression", " desire", " disabling", " disease curing", " dmonic", " domination", " dream inducement", " dream vision", " dreamless sleeping", " dreamwalker", "n eagle vision", "n ecstasy", "n empathy", "n empowerment", "n energy", "n enhanced pain relief", "n enhanced reflexes", "n enhanced senses", "n enhanced sight", "n eternal sleeping", "n excitement", " farsight", " feather weight", " fever", " fire protection", " fire resistance", " fixation", " flight", " focus", " foresight", " forgetfulness", " fortitude", " fortune", " free will", " frozen blood", " fury", " ghost sight", " giant growth", " gills", " growth", " hallicination", " happiness", " harmony", " haste", " healing", " health", " hidden talent", " honesty", " hunger", " hysteria", "n idle mind", "n immobilizing", "n immortality", "n immunity", "n incapacitating", "n increased health", "n increased immunity", "n insanity", "n insight", "n insomnia", "n intellect", "n intuition", "n invisibility", "n invulnerability", "n iron skin", " jealousy", " joy", " knowledge", " light feet", " lightning speed", " love", " lucid dream", " lunacy", " lust", " madness", " manipulation", " mind alteration", " mind blanking", " mind control", " mind corrupting", " mind domination", " mind paralyzing", " mind restricting", " mind soothing", " misfortune", " night vision", " nightmare", " nightmare inducement", " pain relief", " paralyzing", " patience", " perception", " petrification", " piece of mind", " premonition", " purification", " rage", " rejuvenation", " restricting", " revelation", " reversed growth", " seduction", " serenity", " shrinking", " silence", " sleeping", " slowing", " strength", " stunning", " swiftness", " tranquillity", " transcendence", " truth", " vigor", " vision", " vision inducement", " vitality", " wisdom"];
	var nm2 = ["follow the steps closely and with great attention to detail", "follow the steps with absolute precision", "follow the steps below, but feel free to add your own twist", "stick to the recipe below as much as you can", "follow the recipe reasonably close, adding your own spin if so desired", "follow the recipe well, but feel free to experiment if so desired", "stick to the recipe, there can be no substitutes or mistakes", "follow the recipe well, but feel free to use close substitutes if required", "follow the recipe with exact precision or risk an uncertain outcome", "stick to the recipe, even small mistakes can lead to a different effect"];
	var nm3 = ["1 batch", "2 batches", "3 batches", "1 tablespoon", "2 tablespoons", "3 tablespoons", "5 tablespoons", "4 tablespoons", "1 handful", "2 handfuls", "2 bits", "3 bits", "4 bits", "5 bits", "6 bits", "1 heap", "2 heaps", "3 heaps", "1 teaspoon", "2 teaspoons", "3 teaspoons", "4 teaspoons", "5 teaspoons", "1 cup", "2 cups", "1 pinch", "2 pinches", "3 pinches", "4 pinches", "1 dash", "2 dashes", "3 dashes", "1 sprinkle", "2 sprinkles", "3 sprinkles", "4 sprinkles"];
	var nm4 = ["Abyss", "Angel", "Arctic", "Ash", "Assassin", "Autumn", "Bitter", "Black", "Blister", "Blood", "Blue", "Brown", "Bruise", "Candy", "Cave", "Cavern", "Cinder", "Cliff", "Demon", "Devil", "Dragon", "Drake", "Dream", "Earth", "Elephant", "Ember", "Emerald", "Fade", "Fire", "Flux", "Forest", "Golden", "Hate", "Hazel", "Heart", "Hybernation", "Ice", "Ivory", "Jade", "King's", "Knettle", "Knot", "Lake", "Love", "Mage", "Mammoth", "Mellow", "Mercy", "Monk's", "Moon", "Mountain", "Mud", "Ocean", "Orange", "Peace", "Pearl", "Pygmy", "Queen's", "Rain", "Red", "River", "Ruby", "Sanguine", "Sapphire", "Sea", "Shimmer", "Silk", "Snowy", "Sorrow", "Sour", "Spark", "Spring", "Star", "Stinky", "Storm", "Summer", "Sun", "Swamp", "Sweet", "Thorn", "Thunder", "Tiger", "Tundra", "Venom", "Viper", "Void", "Water", "White", "Wild", "Winter", "Witch's", "Wolf", "Worm", "Yellow"];
	var nm5 = ["Angelica", "Anise", "Aniseed", "Avens", "Barberry", "Bark", "Basil", "Bay Leaf", "Blossom", "Borage", "Caraway", "Cardamom", "Cassia", "Catnip", "Celery", "Chervil", "Chicory", "Chives", "Cilantro", "Cinnamon", "Clary", "Clove", "Coriander", "Cress", "Cudweed", "Culantro", "Cumin", "Curry Leaf", "Dill", "Dill Seed", "Fennel", "Fenugreek", "Flower", "Galangal", "Galingale", "Garlic", "Ginger", "Grains", "Grass", "Herb", "Hyssop", "Lavender", "Leaf", "Leaves", "Licorice", "Lovage", "Mace", "Mallow", "Marjoram", "Mint", "Moss", "Mustard", "Nigella", "Nutmeg", "Oregano", "Paprika", "Parsley", "Pepper", "Peppermint", "Petal", "Quassia", "Root", "Rosemary", "Rue", "Safflower", "Saffron", "Sage", "Salt", "Sassafras", "Savory", "Seed", "Shiso", "Sorrel", "Spearmint", "Spice", "Sumac", "Tarragon", "Thyme", "Turmeric", "Vanilla", "Bloom", "Tea Leaf", "Ivy", "Weed", "Creeper", "Vine"];
	var nm6 = ["Crush", "Smash", "Mash", "Bruise", "Break", "Squeeze", "Pulverize", "Beat", "Crunch", "Squash", "Grind"];
	var nm7 = ["with a pestle and mortar", "with whatever you can find and put it in a container", "with a suitable utensil and put it in a cup", "in a towel with a rolling pin and put it in a cup", "with your hands and put the result in a container", "with whatever does the job for you and put the result in a cup", "in a cup, making sure you don't break the cup as it's probably a delicate cup", "in a suitable container by using your hands", "until you think you've done a good job and put the result in a cup", "until you're done and put it in a container", "for a good few minutes or until you're bored and put it into a cup", "with a suitable tool until your arms get tired. If you start to bleed, go see a doctor and start over", "with your hands, or make your friend do it for you, and put it to a cup", "by summoning one of your minions and having it do the work for you, make it put the result in a cup", "very delicately at first, then with unleashed fury at the end. Put the result in a cup", "as you'd do with your enemies and put the result in a container", "and, while doing so, let go of all your stress. Put the result in a container"];
	var nm8 = ["some water", "a dash of water", "a little bit of water", "a sprinkle of liquid ice", "a dash of liquid steam", "an equal amount of water", "a handful of water", "a dash of preboiled water", "some purified water", "some ice, let it melt", "some clean water"];
	var nm9 = ["a smooth paste", "a smooth-ish paste", "a messy mix", "a watery mixture", "a cream-like paste", "a lumpy paste", "a lumpy cream", "a thick paste", "what's now basically dirty water, or tea", "messy water", "a jelly-like salve", "a thick emulsion", "a smooth emulsion", "a creamy emulsion"];
	var nm10 = ["one half at a time", " one quarter at a time", " a little bit at a time", " all at once", " in small amounts at a time", " in tiny amounts at a time", ", first one tiny amount, then everything else", ", first almost everything, then the last tiny remnants", " all at once and make sure you don't leave any remnants", " all at once. If it came in a package, recycle the package", ", one half at a time until you've added three parts", ", all at once, then take it out again and put it back in", ", a quarter first, then a half and then a third of it"];
	var nm11 = ["fresh, clean water", "fresh spring water", "clean river water", "purified water", "molten ice", "liquified steam", "steamed ice", "iced steam", "water, any water", "water or some other clear liquid, but no tears", "holy water, if you're a vampire wear gloves", "unholy water, if you only have holy water do something sinful to it", "holy and unholy water, then watch if anything happens", "water from the fountain of youth. If you don't have any, use baby bath water", "unsalted sea water", "salty sea water, as in the sea water has to be upset or agitated", "water elemental water", "crocodile tears", "water from the dead sea, if it's too far away, get normal sea water and kill it", "red water or blue water, your choice", "rainwater", "living water, but kill it first"];
	var nm12 = ["slowly bring it to a simmer", "slowly bring it to a boil", "bring it to a boil as fast as you can", "let it sit there for a while, then bring it to a boil", "turn up the heat, then turn on the stove and bring the mixture to a boil", "gently warm up the mixture. Cuddling is an option, but the stove works better", "bring it to a boil, then freeze it, then bring it to a simmer", "freeze it, then let it melt and bring it to a gentle simmer", "cool it down with how cool you are, then bring the mixture to a boil", "let it rest for a while. Wake up the mixture and bring it to a simmer", "let it steep while you do something fun, then come back and bring it to a boil", "gently, very gently bring it to a simmer"];
	var nm13 = ["brew overnight, or not if you're impatient", "reduce until a thick syrup", "simmer for a while, you've earned a break", "rest overnight", "reduce by half", "boil until you can smell it's burned", "imbue for an hour or so", "simmer and steep while you take a power nap", "steam for a short while", "simmer until it starts to shimmer", "cool down to the body temperature of a reptile", "cool down until it feels slightly scalding", "cool down until it has changed color", "simmer until it has darkened in color", "reduce until it has changed color"];
	var nm14 = ["in that order", "in reverse order", "a half at a time of a mixture of both", "a half at a time, alternating between the two", "a quarter at a time of a mixture of both", "a quarter at a time, alternating between the two", "all at once of one, then half at a time of the other", "all at once on the count of three. Yes, three shall be the number of counting", "mix both together first, then add all at once", "make sure to add them in the right order, from least to most volatile", "add them all at once, but do it very gently", "just throw it all in there, show them who's boss", "gently drop them in, the less splashing the better"];
	var nm15 = ["Reheat everything and let it simmer", "Bring everything back to a boil, turn of the heat", "Turn up the heat one last time", "Gently warm up the mixture once more", "Slowly, very slowly bring the mixture up to a simmer", "Quickly bring everything up to a boil", "Reheat what by now is a foul liquid", "Gently warm the currently disgusting mixture", "Reheat what's now already a quite appealing mixture", "Rapidly heat the mixture until it's hot"];
	var nm16 = ["cool down to room temperature", "cool down and rest for an hour", "rest until the mixture has a thick consistency", "cool down until the mixture is thick and gloopy", "rest for a short while to let everything intermingle", "cool down and rest, you should probably do the same", "rest for an hour, you could do something else in the meantime, like make a potion", "cool down. If you touch the liquid and it burns you, it hasn't cooled down enough", "rest for a while. If you're impatient you can skip this and move on", "cool down, but don't let it become too cool, like 'too cool for school' cool", "cool down until it's roughly as cool as the cool side of a pillow", "rest while you take a power nap, maybe two since you've worked hard", "rest and steep for about half an hour"];
	var nm17 = ["Pour everything through a fine sieve to remove any clumps", "Pour the mixture through a very fine sieve to remove impurities", "Pour everything through a broad sieve. It's pointless, but looks cool,", "Stir everything a final time to thoroughly mix everything", "Stir the mixture a final time, if it sticks you know it's right", "Stir everything one last time to make sure what you made is in fact a potion", "Whisk the mixture heavily to aerate it. Stop when it's frothy", "Whisk everything with a knife until you realize you look like a fool", "Whisk the mixture gently to break up any potential clumps", "Remove the impurities floating at the surface with a spoon", "Remove the impurities at the surface and banish them to oblivion", "Remove the solidified impurities floating at the surface", "Take a small sip to test your potion. If your potion has a bad effect and you still took a sip you might as well drink everything", "Take a small sip to test your potion. Make sure you have an antidote ready, if you don't then, well, good luck"];
	var nm18 = ["Only a small sip will be needed for the potion to take effect, store leftovers in a cold place", "Only a droplet is needed for the potion to take effect. If you made a lot you can store leftovers in oblivion", "Only a small sip is needed for the potion to be effective, but it tastes really good so a big sip is more fun", "Only a droplet is needed for the potion to work. Store leftovers in a dark, cold place. Like your heart", "A good gulp is needed for the potion to work. Restraints may be needed to feed it to your victim, I mean sacrifice. No I did mean victim", "A good gulp is needed for potion to be effective, but it tastes awful so maybe mix it with some honey", "A good amount is needed for the potion to take effect, a bad amount would be bad", "A good amount is needed for the potion to work, so make sure you use enough, but not too much", "Only a droplet is needed for the potion to work. That's right, this potion is super potent, almost omnipotent. Almost", "Only a small sip is needed for the potion to be effective, but when you use it on bugs it's not very effective", "A lot is needed for the potion to take effect, if you didn't make enough go back to step 1", "A lot is needed for the potion to work, like 'a lot' a lot. Like you need to practically bathe in it 'a lot'", "A lot is needed for the potion to be effective. It's not very potent. We should probably have used different ingredients", "A few sips is all that's needed for the potion to work. A few gulps will work too, but a few slurps will be too little and not very classy", "Only a small amount is needed for the potion to work. If your target is small a puny amount will do. If your target is puny, a potion isn't really needed", "Only a small amount is needed for the potion to work. Perhaps turn it into ice cubes for a 'special' party", "A small, but very cold amount is needed for the potion to be effective. Mixing it in a milkshake could work, but be warry of brain freeze", "One droplet is enough for the potion to work. Two droplets would be overkill. Three droplets would be, well, why would anybody dare use three droplets", "Three droplets is all it takes for the potion to work. Three shall be the number of droplets, the number of droplets shall be three. Four shall not be the number of droplets, nor two", "A lot is needed for the potion to work. About a bucket will do. If the potion is meant to kill or incapacitate something, you might as well throw the bucket itself"];
	var nm19 = ["Several Snapes", "Ano N. Ymous", "Ariane", "Babidibi", "Chef-Queen Elzar", "Dr.", "Dr. Bunsen Honeydew, Tested on Beaker", "Dr. Disaster (Name's a coincidence, I promise)", "Dr. Jekyll", "Dr. Pepper", "Dr. Stranger", "Gul'Dan", "Kel'Thuzad", "Merelin", "Millhouse Manastorm", "Miss Daisy Oopsey", "Morrigan", "Neloth", "Nemo", "Professor Farnsworth", "Professor Wernstrom", "Randal Flag", "The Brain", "The Greying Wizard", "The Quarterblood Prince", "The White Witcher", "Tim the Enchanter", "Van Helsing", "Victor Frankenstein", "Walter Heisenberg", "Wilter Whate", "Wolly Winka"];

	var rnd1 = Math.floor(Math.random() * nm1.length);
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3a = Math.floor(Math.random() * nm3.length);
	var rnd3b = Math.floor(Math.random() * nm3.length);
	var rnd3c = Math.floor(Math.random() * nm3.length);
	var rnd3d = Math.floor(Math.random() * nm3.length);
	var rnd3e = Math.floor(Math.random() * nm3.length);
	var rnd4a = Math.floor(Math.random() * nm4.length);
	var rnd4b = Math.floor(Math.random() * nm4.length);
	while (rnd4b === rnd4a) {
		rnd4b = Math.floor(Math.random() * nm4.length);
	}
	var rnd4c = Math.floor(Math.random() * nm4.length);
	while (rnd4b === rnd4c || rnd4a === rnd4c) {
		rnd4c = Math.floor(Math.random() * nm4.length);
	}
	var rnd4d = Math.floor(Math.random() * nm4.length);
	while (rnd4d === rnd4a || rnd4d === rnd4b || rnd4d === rnd4c) {
		rnd4d = Math.floor(Math.random() * nm4.length);
	}
	var rnd4e = Math.floor(Math.random() * nm4.length);
	while (rnd4e === rnd4a || rnd4e === rnd4b || rnd4e === rnd4c || rnd4e === rnd4d) {
		rnd4e = Math.floor(Math.random() * nm4.length);
	}
	var rnd5a = Math.floor(Math.random() * nm5.length);
	var rnd5b = Math.floor(Math.random() * nm5.length);
	while (rnd5b === rnd5a) {
		rnd5b = Math.floor(Math.random() * nm5.length);
	}
	var rnd5c = Math.floor(Math.random() * nm5.length);
	while (rnd5b === rnd5c || rnd5a === rnd5c) {
		rnd5c = Math.floor(Math.random() * nm5.length);
	}
	var rnd5d = Math.floor(Math.random() * nm5.length);
	while (rnd5d === rnd5a || rnd5d === rnd5b || rnd5d === rnd5c) {
		rnd5d = Math.floor(Math.random() * nm5.length);
	}
	var rnd5e = Math.floor(Math.random() * nm5.length);
	while (rnd5e === rnd5a || rnd5e === rnd5b || rnd5e === rnd5c || rnd5e === rnd5d) {
		rnd5e = Math.floor(Math.random() * nm5.length);
	}
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd9 = Math.floor(Math.random() * nm9.length);
	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd13 = Math.floor(Math.random() * nm13.length);
	var rnd14 = Math.floor(Math.random() * nm14.length);
	var rnd15 = Math.floor(Math.random() * nm15.length);
	var rnd16 = Math.floor(Math.random() * nm16.length);
	var rnd17 = Math.floor(Math.random() * nm17.length);
	var rnd18 = Math.floor(Math.random() * nm18.length);
	var rnd19 = Math.floor(Math.random() * nm19.length);

	var name = "To brew a" + nm1[rnd1] + " potion, gather the following ingredients and " + nm2[rnd2] + ".";
	var name2 = "- " + nm3[rnd3a] + " of " + nm4[rnd4a] + " " + nm5[rnd5a];
	var name3 = "- " + nm3[rnd3b] + " of " + nm4[rnd4b] + " " + nm5[rnd5b];
	var name4 = "- " + nm3[rnd3c] + " of " + nm4[rnd4c] + " " + nm5[rnd5c];
	var name5 = "- " + nm3[rnd3d] + " of " + nm4[rnd4d] + " " + nm5[rnd5d];
	var name6 = "- " + nm3[rnd3e] + " of " + nm4[rnd4e] + " " + nm5[rnd5e];

	var name7 = nm6[rnd6] + " the " + nm4[rnd4a] + " " + nm5[rnd5a] + " " + nm7[rnd7] + ". Add " + nm8[rnd8] + " to turn it into " + nm9[rnd9] + ", then add the " + nm4[rnd4b] + " " + nm5[rnd5b] + nm10[rnd10] + ".";
	var name8 = "Fill a pan with " + nm11[rnd11] + ", add the mixture and " + nm12[rnd12] + ". Let it " + nm13[rnd13] + " before adding the " + nm4[rnd4c] + " " + nm5[rnd5c] + " and " + nm4[rnd4d] + " " + nm5[rnd5d] + ", " + nm14[rnd14] + ".";
	var name9 = nm15[rnd15] + ", mix in the " + nm4[rnd4e] + " " + nm5[rnd5e] + " and let everything " + nm16[rnd16] + ".";

	var name10 = nm17[rnd17] + ". Your potion is ready to be used. " + nm18[rnd18] + ".";

	var name11 = "Recipe by " + nm19[rnd19] + ".";

	var result = "";
	result += name;
	result += "\n";
	result += name2;
	result += "\n";
	result += name3;
	result += "\n";
	result += name4;
	result += "\n";
	result += name5;
	result += "\n";
	result += name6;
	result += "\n";
	result += "\n";
	result += name7;
	result += "\n";
	result += name8;
	result += "\n";
	result += name9;
	result += "\n";
	result += "\n";
	result += name10;
	result += "\n";
	result += "\n";
	result += name11;
	return result;
}