var nm1 = ["delicate", "elegant", "fancy", "graceful", "luxurious", "relatively simple", "majestic", "modest", "noble", "ornate", "rather simple", "refined", "stylish", "traditional"];
var nm2 = ["Queen Anne neckline", "court neckline", "cowl neckline", "draped neckline", "halter neckline", "jewel neckline", "keyhole neckline", "round neckline", "scoop neckline", "semi-sweethear neckline", "square neckline", "sweetheart neckline", "v-neck"];
var nm3 = ["charmingly", "daintily", "delicately", "elegantly", "entrancingly", "gracefully", "graciously", "harmoniously", "lightly", "subtly", "tastefully", "wonderfully"];
var nm4 = ["comfortable", "delectable", "delicate", "exquisite", "fine", "flowing", "gentle", "ornate", "satiny", "silky", "smooth", "soft", "velvety"];
var nm5 = ["buttoned up fabric", "loosely tied fabric", "tightly tied fabric", "corset-like tied fabric", "corset"];
var nm6 = ["thin", "thick", "simple", "small", "slender", "light", "dark", "large", "long", "wide", "small"];
var nm7 = ["leather belt", "ribbon", "cloth belt", "rope belt", "cloth band"];
var nm8 = ["fairly high", "quite high", "low", "high", "fairly low", "quite low"];
var nm9 = ["opens up slightly and reveals", "opens up to the right and reveals", "opens up to the left and reveals", "opens up and reveals", "opens up wide and reveals", "flows down and hides", "opens up left and right and reveals", "flows down wide and hides"];
var nm10 = ["is shorter at the front and curves outwards", "is much shorter at the front and curves outwards", "is shorter at the front and flows straight down", "reaches the ground generously", "easily reaches the ground in the front", "is longer than the bottom dress and flows straight down", "is longer than the bottom dress and curves outwards", "makes it just to the ground to cover her feet"];
var nm11 = ["fair", "large", "good", "short", "decent", "long", "small"];
var nm12 = ["broad curve", "narrow curve", "narrow tip", "broad tip", "narrow rectangle", "broad rectangle"];
var nm13 = ["very long", "quite long", "a little too long", "purposely too long", "incredibly long", "the length of her arms", "longer than her arms", "slightly shorter than her arms", "almost the length of her arms", "fairly short", "a little short"];
var nm14 = ["incredibly wide", "very wide", "quite wide", "wide", "a little wide", "narrow", "quite narrow", "a little narrow", "a comfortable fit", "a loose fit"];
var nm15 = ["just below the shoulder", "just below the elbow", "just above the elbow", "below the shoulder", "below the elbow", "above the elbow", "well below the shoulder", "well below the elbow", "well above the elbow", "at the elbow", "at the shoulder"];
var nm16 = ["they change color and where ", ""];
var nm17 = ["decorative", "elegant", "ornamental", "cosmetic", "embellishing", "ornate", "delicate", "graceful", "luxurious", "simple", "modest", "refined", "stylish"];
var nm18 = ["edges", "sleeves", "sleeves and bottom", "bottom", "neckline", "bottom and neckline", "sleeves, bottom and neckline", "sleeves and neckline"];

var nm19 = ["long", "very long", "fairly long", "short", "very short", "fairly short"];
var nm20 = ["leather", "hide", "furred", "cloth", "animal skin", "silky", "velvety"];
var nm21 = ["just below his waist", "well below his waist", "just below his groin", "well below his groin", "just below his knees", "well below his knees", "just above his waist", "well above his waist", "just above his groin", "well above his groin", "just above his knees", "well above his knees", "his waist", "his knees", "his groin"];
var nm22 = ["tightly tied with string", "loosely tied with string", "buttoned up completely", "almost completely buttoned up", "half buttoned up", "barely tied with string", "barely buttoned up", "bound"];
var nm23 = ["at the center", "at the left side", "at the right side", "at the top left side", "at the top right side", "at the bottom left side", "at the bottom right side", "slightly off-center"];
var nm24 = " jacket ";
var nm25 = ["incredibly wide", "very wide", "quite wide", "wide", "a little wide", "narrow", "quite narrow", "a little narrow", "a comfortable fit", "a loose fit"];
var nm26 = ["his hands", "just above his hands", "well below his hands", "below his hands", "well above his hands", "his wrists", "just below his wrists", "just above his wrists", "well above his wrists", "well below his wrists"];
var nm27 = ["a single thread lining from top to bottom", "several thread linings from top to bottom", "a single thread lining at the sleeve ends", "several thread linings at the sleeve ends", "a decorative band at the edges", "a decorative band almost at the edges", "a single thread lining and a decorative band"];
var nm28 = ["round neckline", "wide, round neckline", "narrow, round neckline", "deep, round neckline", "wide v-neck", "narrow v-neck", "deep v-neck", "rectangular neckline", "wide, rectangular neckline", "narrow, rectangular neckline", "deep, rectangular neckline"];
var nm29 = ["rough", "elegant", "fancy", "graceful", "luxurious", "relatively simple", "majestic", "modest", "noble", "ornate", "rather simple", "refined", "stylish", "traditional"];
var nm30 = ["thin", "thick", "simple", "small", "big", "light", "dark", "large", "long", "wide", "small"];
var nm31 = ["leather belt", "cloth belt", "rope belt", "cloth band"];
var nm32 = ["a big belt buckle", "a simple knot", "a small belt buckle", "an intricate knot", "an ornate pin", "a decorative pin"];
var nm33 = ["purely decorative and a sign of wealth", "mostly decorative and a sign of wealth", "entirely decorative and a way to show off", "solely decorative and a status symbol", "mostly decorative, but does serve its purpose", "partially decorative, but mostly a purposeful addition", "slightly decorative, but mostly there to hang things from", "almost entirely a functional addition", "purely a functional addition", "a functional addition, but does have some decorative value"];
var nm35 = ["leather", "hide", "furred", "soft leather", "hard leather", "bound cloth"];
var nm36 = ["rare", "very rare", "fairly rare", "fairly uncommon", "very uncommon", "pretty uncommon", "pretty rare", "pretty unusual", "pretty unique"];
var nm37 = ["quite simple", "a simple design", "an ordinary design", "a common design", "a common type", "not that special", "a design found commonly", "not any different from others"];
var nm38 = ["boots", "shoes"];
var nm39 = ["leather", "hide", "fur", "leather", "leather", "cloth"];

function generator$descriptions$medieval_clothings(type) {
	var tp = type;

	if (tp === 1) {
		var rnd = Math.floor(Math.random() * nm1.length);
		var rnd2 = Math.floor(Math.random() * nm2.length);
		var rnd3 = Math.floor(Math.random() * nm3.length);
		var rnd1 = Math.floor(Math.random() * nm1.length);
		while (rnd === rnd1) {
			rnd1 = Math.floor(Math.random() * nm1.length);
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
		var rnd14 = Math.floor(Math.random() * nm14.length);
		var rnd15 = Math.floor(Math.random() * nm15.length);
		var rnd16 = Math.floor(Math.random() * nm16.length);
		var rnd16b = Math.floor(Math.random() * nm6.length);
		var rnd17 = Math.floor(Math.random() * nm17.length);
		var rnd18 = Math.floor(Math.random() * nm18.length);
		var name = "Her " + nm1[rnd] + " dress flows from top to bottom and has a " + nm2[rnd2] + ", which " + nm3[rnd3] + " reveals the " + nm1[rnd1] + " dress worn below it. The " + nm4[rnd4] + ", " + nm5[rnd5] + " of her dress covers her stomach where the continuous flow is broken up by a " + nm6[rnd6] + " " + nm7[rnd7] + " worn " + nm8[rnd8] + " around her waist.";
		var name2 = "Below the " + nm7[rnd7] + " the dress " + nm9[rnd9] + " the dress below. The front of the top dress " + nm10[rnd10] + ", the back continues to flow a " + nm11[rnd11] + " length behind her and ends in a " + nm12[rnd12] + ".";
		var name3 = "Her sleeves are " + nm13[rnd13] + " and " + nm14[rnd14] + ", their flow is broken up " + nm15[rnd15] + " where " + nm16[rnd16] + "they're divided by " + nm6[rnd16b] + ", " + nm17[rnd17] + " bands, these are the same fabric and color used to outline the " + nm18[rnd18] + " of the dress.";
	} else {
		var rnd19 = Math.floor(Math.random() * nm19.length);
		var rnd20 = Math.floor(Math.random() * nm20.length);
		var rnd21 = Math.floor(Math.random() * nm21.length);
		var rnd22 = Math.floor(Math.random() * nm22.length);
		var rnd23 = Math.floor(Math.random() * nm23.length);
		if (rnd19 > 2) {
			rnd24 = " shirt ";
		}
		var rnd25 = Math.floor(Math.random() * nm25.length);
		var rnd26 = Math.floor(Math.random() * nm26.length);
		var rnd27 = Math.floor(Math.random() * nm27.length);
		var rnd28 = Math.floor(Math.random() * nm28.length);
		var rnd29 = Math.floor(Math.random() * nm29.length);
		var rnd30 = Math.floor(Math.random() * nm30.length);
		var rnd31 = Math.floor(Math.random() * nm31.length);
		var rnd32 = Math.floor(Math.random() * nm32.length);
		var rnd33 = Math.floor(Math.random() * nm33.length);
		var rnd34 = Math.floor(Math.random() * nm25.length);
		var rnd35 = Math.floor(Math.random() * nm35.length);
		var rnd36 = Math.floor(Math.random() * nm36.length);
		var rnd37 = Math.floor(Math.random() * nm37.length);
		var rnd38 = Math.floor(Math.random() * nm38.length);

		var name = "His " + nm19[rnd19] + " sleeved, " + nm20[rnd20] + " jacket covers him to " + nm21[rnd21] + " and is " + nm22[rnd22] + " " + nm23[rnd23] + ". The sleeves of his" + nm24 + "are " + nm25[rnd25] + " and reach down to " + nm26[rnd26] + ", they're decorated with " + nm27[rnd27] + ".";
		var name2 = "The jacket has a " + nm28[rnd28] + " which reveals part of the " + nm29[rnd29] + " shirt worn below it and is worn with a " + nm30[rnd30] + " " + nm31[rnd31] + ", which is held together by " + nm32[rnd32] + ". The " + nm31[rnd31] + " is " + nm33[rnd33] + ".";
		var name3 = "His pants are simple and " + nm25[rnd34] + " and reach down to his " + nm35[rnd35] + " " + nm38[rnd38] + ". The " + nm38[rnd38] + " are made from a " + nm36[rnd36] + " " + nm39[rnd35] + ", but are otherwise " + nm37[rnd37] + ".";
	}


	var result = "";
	result += name;
	result += "\n";
	result += "\n";
	result += name2;
	result += "\n";
	result += "\n";
	result += name3;
	return result;
}