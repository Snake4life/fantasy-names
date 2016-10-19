function generator$descriptions$battlefields() {
	var nm1 = ["field", "forest", "farm field", "beach", "village", "town", "city"];
	var nm2 = ["bodies", "blood", "gore", "suits", "weapons", "shells", "carnage", "wounded fighters", "destruction"];
	var nm3 = ["pink", "silver", "brown", "blue", "black", "gray", "khaki"];
	var nm4 = ["peaceful, ", "quiet, ", "tranquil, ", "serene, ", "beautiful, ", "harmonious, ", "marvelous, ", "vast, ", "delicate, "];
	var nm5 = ["green", "lush", "snowy", "tender", "luscious", "rich"];
	var nm6 = ["ruthless battle", "disastrous fight", "long, destructive battle", "devastating war", "tragic civil war", "full-blown invasion", "large scale assault", "terrible battle", "bloody war", "cruel war"];
	var nm7 = ["be filled with the scent of food from a nearby town", "be rich with scents from nearby breweries", "carry the sounds of birds, rivers and wildlife", "be soft and carry a gentle breeze", "be rich in sound from a nearby town and a forest full of wildlife", "be full of nature's sounds", "be delicate and quiet", "be fresh and smell of nature's wonders", "carry the delicate scents of flowers and fruits", "carry the sounds of a large waterfall, small rivers and nature's wildlife"];
	var nm8 = ["thick with the scent of death and decay", "heavy and thick with the scent of smoke", "carrying a thick, black smoke and small embers", "deafening loud, the sound of explosions drowns any other sound in the area", "a hellish symphony of screams, explosions and gunfire", "a barrage of sounds of explosions, war cries and the screams of the wounded", "merely a canvas for the stench of death and the cries of the dying", "thick with the stench of gunpowder, blood, gore and death", "heavy with the screams of dying fighters and the scent of their blood", "glowing red with fire and thick with smoke, ash and embers"];
	var nm9 = ["enough to make even the bravest tremble in fear", "something no survivor will ever forget", "hell has descended upon this area", "a sight of pure nightmares", "the mere sense of it will make you want to run", "there's no coming back from this", "enough to destroy whatever courage is left in the survivors"];

	var nm10 = ["Two armies", "Two parties", "Two trained armies", "Two barely trained groups", "An army and a rebellion", "An army of rebels and an army of warriors"];
	var nm11 = ["for supremacy", "for resources", "over a mere difference in lifestyle and belief", "for independance", "because of a betrayal", "because of the lies of their leaders", "without knowing the true reason", "for control of the area", "due to a difference in beliefs"];
	var nm12 = ["it's clear who will win", "the victor is obvious", "it's becoming clear which side will win", "at this point it's undeniable which side will win", "it's starting to become clear which side will win", "it's yet to be determined which side's on the winning hand", "the battle is in nobody's favor yet", "there's no hint of which side will win", "with no side on the winning hand, this battle could go on for a long time", "this battle has yet to find its winning side"];
	var nm13 = ["dead", "dead and wounded", "wounded"];
	var nm14 = " the losing side ";
	var nm15 = ["lay in heaps across", "are scattered across", "are abundant and lay in heaps around", "are spread around", "lay in large groups across"];
	var nm16 = " grim "
	var nm17 = ["despair", "the certainty of death", "anguish", "gloom", "pain", "sorrow", "horror", "agony", "strain", "exhaustion", "fatigue"];
	var nm18 = ["yet they fight on", "but they force themselves to fight nonetheless", "but they refuse to give up", "they want to give up, but somehow keep fighting", "their spirit will be broken soon", "they continue to fight, but their fight is a hopeless one", "fighting is useless, but they will fight to the death"];

	var nm19 = ["the rush of victory coursing through their bodies", "victory ready for the taking", "victory becoming more and more likely", "a certainty of victory", "the thought of victory in their minds"];
	var nm20 = " the winning side ";
	var nm21 = ["pushes harder and harder on their enemies", "pushes on and on", "fights even harder and with more tenacity", "fights with a sense of relief knowing all will be over soon", "has gained a morale boost and is fighting their enemies with more determination", "fights as if they're invinsible", "fights with new found strength"];
	var nm22 = ["bloodlust", "a frenzy", "rage", "panic", "hysteria", "terror", "exhaustion", "fatigue"];
	var nm23 = ["frantically killing any enemy in sight", "on a rampage against anybody standing in their way", "killing any enemy they see in a fury of blood and gore", "recklessly charging towards the enemy with only the aim to kill all", "carelessly charging any enemy without a care for their own safety"];
	var nm24 = ["just wish all this was over", "can only think of home and what they left behind", "fight on in the hopes to survive this terror", "fight merely for the sake of survival", "seem to be fairly unaffected by the terrors around them", "fight by only focusing on their enemy and not the carnage around them", "long for the end of this battle"];

	var nm25 = ["heavy", "enormous", "unimaginable", "tremendous", "immense", "disastrous", "tragic", "devastating"];
	var nm26 = ["years", "decades", "ages", "generations", "a lifetime"];
	var nm27 = ["explosion holes", "broken siege engines", "metal", "bodies", "weaponry", "lost bombs", "rubble", "debris", "blood", "gore"];
	var nm28 = ["trees", "flowers", "grass", "bushes", "shrubs", "plants"];

	var rnd1 = Math.floor(Math.random() * nm1.length);
	if (rnd1 > 1 && rnd1 < 4) {
		nm4 = ["peaceful ", "quiet ", "tranquil ", "serene ", "beautiful ", "vast ", "stunning ", "tremendous "];
		nm5 = [""];
	} else if (rnd1 > 3 && rnd1 < 6) {
		nm4 = ["peaceful, ", "quiet, ", "tranquil, ", "serene, ", "beautiful, ", "harmonious, ", "small, ", "reserved, "];
		nm5 = ["harbor", "fishing", "small", "trading", "growing", "farming", "hard working", "dynamic"];
		nm7 = ["be rich in scents of food, fresh fish and new brews", "be rich in the scents and sounds of hard work", "be filled with the scent of freshly baked bread and the sound of people", "carry the sound of working people and large tools", "be vibrant with the sound of work, trade and craftsmanship"];
		nm28 = ["homes", "market stalls", "schools", "businesses", "buildings", "monuments", "roads", "gardens", "parks"];
	} else if (rnd1 === 6) {
		nm4 = ["busy ", "lively ", "bright ", "spirited ", "bustling ", "hectic "];
		nm5 = [""];
		nm7 = ["be rich in scents of food, fresh fish and new brews", "be rich in the scents and sounds of hard work", "be filled with the scent of freshly baked bread and the sound of people", "carry the sound of working people and large tools", "be vibrant with the sound of work, trade and craftsmanship", "be packed with a wide array of city sounds", "be loud and bustling with sounds of the city"];
		nm28 = ["homes", "market stalls", "schools", "businesses", "buildings", "monuments", "roads", "gardens", "parks"];
	}
	var rnd2a = Math.floor(Math.random() * nm2.length);
	var rnd2b = Math.floor(Math.random() * nm2.length);
	while (rnd2b === rnd2a) {
		rnd2b = Math.floor(Math.random() * nm2.length);
	}
	var rnd2c = Math.floor(Math.random() * nm2.length);
	while (rnd2c === rnd2a || rnd2c === rnd2b) {
		rnd2c = Math.floor(Math.random() * nm2.length);
	}
	var rnd3a = Math.floor(Math.random() * nm3.length);
	var rnd3b = Math.floor(Math.random() * nm3.length);
	while (rnd3b === rnd3a) {
		rnd3b = Math.floor(Math.random() * nm3.length);
	}
	var rnd4 = Math.floor(Math.random() * nm4.length);
	var rnd5 = Math.floor(Math.random() * nm5.length);
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd9 = Math.floor(Math.random() * nm9.length);

	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd13 = Math.floor(Math.random() * nm13.length);
	if (rnd12 > 4) {
		nm14 = " one side ";
		nm16 = " hopeful ";
		nm17 = ["victory in mind", "hope in their hearts", "adrenaline rushing through their bodies", "weapons clenched in their hands", "gritting teeth", "their muscles tense and anxious", "boots stepping firmly", "eyes searching their surroundings", "nervous, yet steady breathing"];
		nm18 = ["they courageously fight on", "they push harder and harder on the enemy", "they fight their enemy in an equal battle", "they take on their enemies", "they carry out their orders in a tough fight"];
		nm19 = ["the uncertainty of battle coursing through their minds", "a lack of confidence in a postive outcome", "no way of knowing they're winning or losing", "the chaos of battle concealing any sense of victory or defeat", "both confidence and panic", "a strong possibility of pain or death", "the possibility of death shaking their knees", "no way to know if they'll live or die"];
		nm20 = " the other side ";
		nm21 = ["fights like their lives depend on it, which they do", "fights with fear flowing through their veins", "battles their enemies head on in the hope to come out on top", "does whatever it can in order to try to defeat their enemies", "ferociously battles their enemies", "desperately fights their enemies without knowing which side is stronger", "courageously fights their enemies with the hope of being the stronger side"];
	}
	var rnd15 = Math.floor(Math.random() * nm15.length);
	var rnd17a = Math.floor(Math.random() * nm17.length);
	var rnd17b = Math.floor(Math.random() * nm17.length);
	while (rnd17b === rnd17a) {
		rnd17b = Math.floor(Math.random() * nm17.length);
	}
	var rnd18 = Math.floor(Math.random() * nm18.length);
	var rnd19 = Math.floor(Math.random() * nm19.length);
	var rnd21 = Math.floor(Math.random() * nm21.length);
	var rnd22 = Math.floor(Math.random() * nm22.length);
	if (rnd22 > 2 && rnd22 < 6) {
		nm23 = ["barely able to force their bodies in motion", "bursting out in tears and screams", "mumbling things about home and family", "hiding or running away from the fight", "no longer capable of moving, let alone defending themselves"];
	} else if (rnd22 > 5) {
		nm23 = ["collapsing left and right", "doing all they can to force their body in motion", "sleeping amidst debris, rubble and their wounded", "barely able to stand, let along lift an arm to defend themselves", "giving in to whatever fate this battle has in story for them", "no longer able to defend themselves and too tired to care"];
	}
	var rnd23 = Math.floor(Math.random() * nm23.length);
	var rnd24 = Math.floor(Math.random() * nm24.length);

	var rnd25 = Math.floor(Math.random() * nm25.length);
	var rnd26 = Math.floor(Math.random() * nm26.length);
	var rnd27a = Math.floor(Math.random() * nm27.length);
	var rnd27b = Math.floor(Math.random() * nm27.length);
	while (rnd27b === rnd27a) {
		rnd27b = Math.floor(Math.random() * nm27.length);
	}
	var rnd27c = Math.floor(Math.random() * nm27.length);
	while (rnd27c === rnd27a || rnd27c === rnd27b) {
		rnd27c = Math.floor(Math.random() * nm27.length);
	}
	var rnd28a = Math.floor(Math.random() * nm28.length);
	var rnd28b = Math.floor(Math.random() * nm28.length);
	while (rnd3b === rnd3a) {
		rnd28b = Math.floor(Math.random() * nm28.length);
	}
	var rnd28c = Math.floor(Math.random() * nm28.length);
	while (rnd28c === rnd28a || rnd28c === rnd28b) {
		rnd28c = Math.floor(Math.random() * nm28.length);
	}

	var name = "The " + nm1[rnd1] + " is littered with " + nm2[rnd2a] + ", " + nm2[rnd2b] + " and " + nm2[rnd2c] + ". Red, " + nm3[rnd3a] + " and " + nm3[rnd3b] + " are the new colors of what was once a " + nm4[rnd4] + nm5[rnd5] + " " + nm1[rnd1] + ", which has now become the stage of a " + nm6[rnd6] + ".";
	var name2 = "The air which would normally " + nm7[rnd7] + " is now " + nm8[rnd8] + ", " + nm9[rnd9] + ".";

	var name3 = nm10[rnd10] + " fight each other " + nm11[rnd11] + ", but " + nm12[rnd12] + ". The " + nm13[rnd13] + " of" + nm14 + nm15[rnd15] + " the " + nm1[rnd1] + " and the faces of the fighters are" + nm16 + "with " + nm17[rnd17a] + " and " + nm17[rnd17b] + ", " + nm18[rnd18] + ".";

	var name4 = "With " + nm19[rnd19] + nm20 + nm21[rnd21] + ". Some have succumbed to " + nm22[rnd22] + " and are " + nm23[rnd23] + ", while others " + nm24[rnd24] + ".";

	var name5 = "The toll on both nature and humanity is " + nm25[rnd25] + ". It'll likely take " + nm26[rnd26] + " before this " + nm1[rnd1] + " will have recovered. It's clear " + nm27[rnd27a] + ", " + nm27[rnd27b] + " and " + nm27[rnd27c] + " have taken the place of " + nm28[rnd28a] + ", " + nm28[rnd28b] + " and " + nm28[rnd28c] + ".";

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
	result += "\n";
	result += name5;
	return result;
}