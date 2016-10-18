function generator$descriptions$castles() {
	var nm1 = ["Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen"];
	var nm2 = ["broad", "lean", "massive", "narrow", "skinny", "slim", "solid", "strong", "thick", "thin"];
	var nm3 = ["round", "square"];
	var nm4 = ["piercing the sky are the first you'll see of this castle", "dominate the sky line of this massive castle", "dwarf everything below them", "reach twice the height of the next tallest building in this elegant castle", "surround the castle, they reach twice the height of the walls", "form a protective wall on two sides of the castle", "are low, but set firm and strong for a great defensive line", "guard the weakest points of this castle", "form a protective barrier all around the castle", "have been build on various tactical spots for an ideal defense", "are scattered in a seemingly random pattern, but have been build for an ideal defense", "form an almost perfectly squared barrier around this marvelous castle", "surround the castle in almost a perfect circle around this incredible castle", "are both a defensive and decorational aspect of this elegant castle", "tower above all, they're linked with small bridges"];
	var nm5 = ["big", "enormous", "fairly low", "fortified", "giant", "high", "huge", "large", "lower", "reinforced", "strengthened", "tall", "towering"];
	var nm6 = ["thick", "massive", "chunky", "heavy", "solid", "firm", "thin", "narrow", "wide", "vast"];
	var nm7 = ["basalt", "black stone", "blue stone", "bronze stone", "brown stone", "dark brown stone", "dark green stone", "dark grey stone", "dark red stone", "golden stone", "granite", "green stone", "grey stone", "light brown stone", "light green stone", "light grey stone", "light pink stone", "light red stone", "obsidian", "red stone", "sandstone", "silver stone", "white marble", "white stone", "yellow stone"];
	var nm8 = ["Small", "Tall", "Wide", "Tall, wide", "Stylish", "Refined", "Elegant", "Simple", "Grand", "Ornate", "Crude", "Dull", "Rough"];
	var nm9 = ["generously across the walls in a seemingly random pattern", "generously across the walls in an asymmetric pattern", "generously around the walls in fairly symmetrical patterns", "generously around the walls in seeminly perfect symmetry", "thinly across the walls in a seemingly random pattern", "thinly across the walls in an asymmetric pattern", "thinly around the walls in fairly symmetrical patterns", "thinly around the walls in seeminly perfect symmetry", "here and there across the walls in a seemingly random pattern", "here and there across the walls in an asymmetric pattern", "here and there around the walls in fairly symmetrical patterns", "here and there around the walls in seeminly perfect symmetry"];
	var nm10 = ["holes of various sizes", "symmetric holes", "same-sized holes", "small holes", "symmetric crenelations", "asymmetric crenelations", "overhanging crenelations", "huge crenelations"];
	var nm11 = ["sizable", "huge", "moderate", "regular", "great", "vast"];
	var nm12 = ["broad", "colossal", "enormous", "giant", "great", "heavy", "hefty", "huge", "large", "massive", "tall", "thick", "wide"];
	var nm13 = ["metal", "wooden"];
	var nm14 = [", a draw bridge", ", a regular bridge", ""];
	var nm15 = ["hot oil pots", "archer holes", "a moat", "strong defenses", "large crenelations", "various artillery equipment"];
	var nm16 = ["guards the only easy way across the river", "protects those in need of aid in this rough mountain pass", "guards the last stronghold along this rough shoreline", "offers a safe home to all those in need in these cold mountains", "gives a safe place to rest in this forest stronghold", "offers a warm haven within these cold, isolated lands", "guards the only place with water within these hot, dry lands", "guards the only passage into the castle build upon a mountain top", "guards the only entrance to the castle build at the edges of a shoreline", "protects those in need from the treacherous lands outside", "guards the inhabitants of this island castle", "guards a tranquil city within this extinguished volcano"];
	var nm17 = ["and it's the only way in, at least to those unfamiliar with the castle and its surroundings", " and it's the only easy way in, any other side would be futile", ", but it's not the only way in, which fortunately only very few know", ", but it's not the only way in, but it'll be your best shot if you wish to conquer this castle", " and it's the only way in, at least without taking down the castle walls", " and it's the only way in, if you can make it that is", ", but it's not the only way in when you know the castle's secret passages", " and it's the only easy way in, but easy is very relative here"];
	var nm18 = ["Huge statues of heroes and kings decorate the bridge outside, memories of glories of the past", "Statues of kings are lined up outside of the castle gates, serving as reminders of the past", "Remnants of broken siege engines, swords and shields litter the fields outside, a painful reminder of a past war", "Well kept gardens with fragrant flowers, gorgeous trees and many bushes decorate the outside of the castle", "Carts, boxes, tents and various trade goods are stacked and packed outside the castle, ready to be sold", "Huge dragon bones litter the fields outside the castle, half overgrown, but still a painful reminder of the past", "Fields of nothingness stretch out outside the castle, allowing to see people coming far before they pose a threat", "Small buildings, houses and other structures populate the grounds outside the castle walls, homes for the poorest of the poor", "Large boulders litter the fields outside the castle, paths to and from the castle snake around them and farm plots are small and scattered all around", "Plain fields of a type of grass cover most of the fields outside of the castle, adding to the castle's aesthetics", "A handful of waterfalls flow into various small rivers and provide the precious farm fields outside the castle with needed water", "Trees grow close to the castle gates and provide it with valuable wood for all sorts of purposes", "Lush fields of crops surround the castle walls and provides the inhabitants with food all year round", "The forest outside of the castle gates is light up with bioluminescent creatues, adding to the atmosphere of the castle", "Various large houses are scattered outside the castle gates, surprisingly the rich are comfortable with living outside the gates as well"];
	var nm19 = ["has clearly stood the test of time and its inhabitants are intend on making sure it stays that way for ages to come", "has stood the test of time, it stood it well, but cracks begin to show here and there", "has clearly stood the test of time, the rocks of the walls are aged and vines and plants grow inside the cracks, but this castle will last for ages to come", "is relatively new, but so far it stood its ground with ease and it'll likely do so for ages to come", "has clearly been around for at least a thousand years, but it doesn't seem like it will collapse any time soon", "looks very new, but without knowing its history it's impossible to tell if it's a newly build castle or a well kept one", "shows signs of decay after being around for ages, but its inhabitants are determined to repair any weaknesses to make sure this castle will be around for ages to come", "shows signs of expansion as some parts are clearly build more recently than others, the inhabitants are already working on another part and hope to keep expanding", "has been improved and improved over the ages, some parts of the castle are clearly newer than others, the inhabitants are determined to keep their castle as modern as possible", "has stood the test of time and despite knowing some very rough times, the castle still stands and it looks like it will do so for many years to come"];

	var rnd1 = Math.floor(Math.random() * nm1.length);
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3 = Math.floor(Math.random() * nm3.length);
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
	var rnd14 = Math.floor(Math.random() * nm14.length);
	var rnd15 = Math.floor(Math.random() * nm15.length);
	var rnd16 = Math.floor(Math.random() * nm16.length);
	var rnd17 = Math.floor(Math.random() * nm17.length);
	var rnd18 = Math.floor(Math.random() * nm18.length);
	var rnd19 = Math.floor(Math.random() * nm19.length);

	var name = nm1[rnd1] + " " + nm2[rnd2] + ", " + nm3[rnd3] + " towers " + nm4[rnd4] + " and are connected by " + nm5[rnd5] + ", " + nm6[rnd6] + " walls made of " + nm7[rnd7] + ".";
	var name2 = nm8[rnd8] + " windows are scattered " + nm9[rnd9] + ", along with " + nm10[rnd10] + " for archers and artillery.";

	var name3 = "A " + nm11[rnd11] + " gate with " + nm12[rnd12] + " " + nm13[rnd13] + " doors" + nm14[rnd14] + " and " + nm15[rnd15] + " " + nm16[rnd16] + nm17[rnd17] + ".";

	var name4 = nm18[rnd18] + ". This castle " + nm19[rnd19] + ".";

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
	return result;
}