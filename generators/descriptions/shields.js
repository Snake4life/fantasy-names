function generator$descriptions$shields() {
	var nm1 = ["durable", "forceful", "impressive", "mighty", "powerful", "reinforced", "robust", "solid", "sturdy", "tenacious", "tough"];
	var nm2 = ["rounded heater shield", "pointed heater shield", "sharp heater shield", "diamond heater shield", "triangular heater shield", "wide oval shield", "long oval shield", "Greek-style shield", "rounded oval shield", "long afro shield", "pointed afro shield", "rounded afro shield", "Roman-style shield", "Norman kite shield", "triangular kite shield", "rounded kite shield", "pointed kite shield", "teardrop kite shield", "agular coffin shield", "rounded coffin shield", "round shield", "square shield", "war-door shield", "Wankel shield"];
	var nm3 = ["adamantite", "ebonsteel", "hardwood", "iron", "ironbark", "mithril", "steel"];
	var nm4 = ["a forceful safeguard", "a mighty buffer", "a powerful buffer", "a powerful bulwark", "a robust cover", "a stable barricade", "a stalwart cover", "a tenacious barricade", "a tough safeguard", "a very resilient buffer", "a very resistant defense", "an agile safety guard", "an unbreakable defense", "an unyielding safeguard", "great lasting cover", "great protection", "heavy duty protection", "reinforced protection", "unyielding protection", "vigorous protection"];
	var nm5 = ["arrows and bolts", "bludgeoning attacks", "coordinated attacks", "crushing attacks", "lunging attacks", "piercing attacks", "slashing attacks", "smaller ballistics", "stabbing attacks"];
	var nm6 = ["This is no coincidence", "Rightfully so as well", "This isn't a mere fluke", "This is the result of expertise", "This isn't just any old shield", "A true work of mastery", "Not the work of a mere amateur", "The result of years of experience", "Perfected throughout the ages", "Mastery and perfection came into play"];
	var nm7 = ["abyss dwarves", "aurora gnomes", "chaos gnomes", "darkwood elves", "draconic goblins", "ebonwood elves", "enigma goblins", "fel orcs", "fury dragonkin", "lightwell humans", "lunar dragonkin", "nightmare trolls", "shadow trolls", "summit dwarves", "titan orcs", "ursine humans"];
	var nm8 = ["a chronomatic", "a cryo", "a draconic", "a hydro", "a pyro", "a storm", "a thaumatic", "a volcanic", "an ancient", "an arcane", "an elemental"];
	var nm9 = ["ornamented", "embellished", "enhanced", "emblazoned", "augmented", "reinforced"];
	var nm10 = ["small spikes", "large spikes", "double rows of small spikes", "layered metal plates", "metal plating", "metal rings", "small metal studs", "large metal studs", "thick metal plating", "a metal lining", "a thick metal lining", "broad metal lining", "layered metal scales", "layered metal rings", "double rows of metal studs"];
	var nm11 = ["intricate metalwork", "gilded linings", "decorative paintwork", "feather-like metalwork", "intricate metal patterns", "a simple layer of paint", "inscribed runes", "engraved words", "bone-like ornaments", "a scaly texture", "intricate paintings", "wing-like metalwork", "golden studs", "decorative gems", "small repeated symbols"];
	var nm12 = ["decorated", "adorned", "embellished", "garnished", "ornamented"];
	var nm13 = ["a painting of a sigil", "emblems of victory", "several skulls", "animal horns", "a large gem", "elaborate paintwork", "complex metalwork", "symmetrical metalwork", "painted symbols", "a painted animal head", "several gem stones", "metalwork wings", "symbols of nature", "metalwork scales", "a symbol of rank", "intertwining metalwork", "symmetrical paintwork", "religious symbols", "bones", "small spikes", "a large spike", "small scrolls attached with wax", "zealous texts", "seemingly magical runes", "symbols of personal accomplishments"];
	var nm14 = ["has seen its fair share of battle", "has seen better, peaceful times", "has been through numerous battles", "has experienced the art of war", "knows the ins and outs of battle", "has been through hell and back", "has seen glory and victory", "has served its master well", "stood the tests of battle", "never failed its master", "has yet to see its first battle", "has yet to taste blood", "hasn't been through hell just yet", "never went to war", "has only known times of peace", "has yet to protect its master", "hasn't felt the clash of a sword", "knows not what battle is", "is naive to the ways of war", "has yet to prove itself"];
	var nm15 = ["Everything's in pristine condition", "Not a scratch or mark to be found", "All polished and shiny", "As if freshly forged and crafted", "Nothing has left its mark yet", "As if carefully looked after", "With a full life ahead of it"];
	var nm16 = ", who knows if this shield ";
	var nm17 = ["will ever know the glory of victory", "will one day need to prove its worth in battle", "is even meant for battle or for ceremony", "is going to get a chance to shine in battle", "will ever need to protect its master", "will ever be called upon in some future war", "will ever be matched with a master of its equal", "is ever going to be the final barricade between life and death", "will ever get to stare at death and smile", "will one day be praised and admired"];
	var nm18 = ["this shield is ready to prove itself", "nothing will stand in its way", "this shield will serve its master well", "this shield is ready for anything and everything", "this shield craves a master of its equal", "this shield yearns for glory", "glory shall come to this shield in one way or another", "this shield can overcome anything", "this shield shall always stand between its master and death", "this shield will always be by the side of its master"];

	var rnd1 = Math.floor(Math.random() * nm1.length);
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3 = Math.floor(Math.random() * nm3.length);
	var rnd4 = Math.floor(Math.random() * nm4.length);
	var rnd5a = Math.floor(Math.random() * nm5.length);
	var rnd5b = Math.floor(Math.random() * nm5.length);
	while (rnd5a === rnd5b) {
		rnd5b = Math.floor(Math.random() * nm5.length);
	}
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd9 = Math.floor(Math.random() * nm9.length);
	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd13a = Math.floor(Math.random() * nm13.length);
	var rnd13b = Math.floor(Math.random() * nm13.length);
	while (rnd13a === rnd13b) {
		rnd13b = Math.floor(Math.random() * nm13.length);
	}
	var rnd14 = Math.floor(Math.random() * nm14.length);
	if (rnd14 < 10) {
		nm15 = ["Dents and scratches", "Scratches and marks", "Scores and scratches", "Dints and dents", "Nicks and cuts", "Indentions and scrapes", "Damage and trauma", "Gashes and cuts", "Fissures and dents", "Holes and cracks"];
		nm16 = " made by who knows what leave ";
		nm17 = ["perhaps fond memories of victory", "a legacy of battles long over", "visible reminders of victory and loss", "echos of both glory and death", "mementos of beating the odds", "likely painful reminders of cruel times", "trophies of defeating death", "signs of perseverance and power", "warnings of the endurance of both shield and master", "indications you may wish to avoid its master's path"];
		nm18 = ["this shield is ready for more", "this shield's days are far from over", "this shield hungers for more", "this shield isn't done serving just yet", "neither shield nor master is ready to rest", "nothing will get passed this shield", "this shield will never yield", "glory and victory are waiting once more", "death will have to wait a little while longer", "there's no stopping now"];
	}
	var rnd15 = Math.floor(Math.random() * nm15.length);
	var rnd17 = Math.floor(Math.random() * nm17.length);
	var rnd18 = Math.floor(Math.random() * nm18.length);

	var name = "This " + nm1[rnd1] + " " + nm2[rnd2] + ", made from " + nm3[rnd3] + ", offers " + nm4[rnd4] + ", especially against " + nm5[rnd5a] + " and " + nm5[rnd5b] + ".";
	var name2 = nm6[rnd6] + ", as this shield was forged by " + nm7[rnd7] + " in " + nm8[rnd8] + " workshop.";

	var name3 = "The shield's edges are " + nm9[rnd9] + " with " + nm10[rnd10] + " and have been decorated with " + nm11[rnd11] + ".";
	var name4 = "Its center is " + nm12[rnd12] + " with " + nm13[rnd13a] + " and " + nm13[rnd13b] + ".";

	var name5 = "It's clear this shield " + nm14[rnd14] + ". " + nm15[rnd15] + nm16 + nm17[rnd17] + ", but one this is for sure: " + nm18[rnd18] + ".";




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