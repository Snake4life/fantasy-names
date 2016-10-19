function generator$descriptions$flags() {
	var names1 = ["a cross dividing a background in 2 larger and 2 smaller squares", "a cross dividing a background in 2 larger and 2 smaller triangles", "a cross dividing a background in 4 equal square parts", "a cross dividing a background in 4 equal triangular parts", "a cross on a background", "a large star", "a moon and a star on a background", "a moon and two stars on a background", "an important spiritual symbol", "an outlined cross", "an outlined cross dividing a background in 4 square parts", "an outlined cross dividing a background in 4 triangular parts", "five diagonal stripes", "five horizontal stripes", "five vertical stripes", "four diagonal stripes", "four horizontal stripes", "four small crosses", "four vertical stripes", "one circle", "the country's outline on a background", "three circles", "three connected cirlces", "three diagonal stripes", "three horizontal stripes", "three horizontal stripes and a circle", "three horizontal stripes and a triangle", "three small crosses", "three vertical stripes", "three vertical stripes and a cirlce", "three vertical stripes and a triangle", "two circles", "two connected circles", "two diagonal stripes", "two diagonally divided parts", "two horizontal and 1 vertical stripe", "two horizontal stripes", "two horizontal stripes and a cirlce", "two horizontal stripes and a star", "two horizontal stripes and a triangle", "two jaggedly connected parts", "two small crosses", "two vertical stripes", "two vertical stripes and a circle", "two vertical stripes and a star", "two vertical stripes and a triangle"];
	var names2 = ["black", "blue", "bronze", "brown", "gold", "grey", "orange", "pink", "purple", "red", "silver", "white", "yellow", "dark blue", "dark bronze", "dark brown", "dark gold", "dark grey", "dark orange", "dark pink", "dark purple", "dark red", "dark silver", "dark yellow", "light blue", "light bronze", "light brown", "light gold", "light grey", "light orange", "light pink", "light purple", "light red", "light silver", "light yellow"];
	var names3 = [", black", ", blue", ", bronze", ", brown", ", gold", ", grey", ", orange", ", pink", ", purple", ", red", ", silver", ", white", ", yellow", ", dark blue", ", dark bronze", ", dark brown", ", dark gold", ", dark grey", ", dark orange", ", dark pink", ", dark purple", ", dark red", ", dark silver", ", dark yellow", ", light blue", ", light bronze", ", light brown", ", light gold", ", light grey", ", light orange", ", light pink", ", light purple", ", light red", ", light silver", ", light yellow", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names4 = [", black", ", blue", ", bronze", ", brown", ", gold", ", grey", ", orange", ", pink", ", purple", ", red", ", silver", ", white", ", yellow", ", dark blue", ", dark bronze", ", dark brown", ", dark gold", ", dark grey", ", dark orange", ", dark pink", ", dark purple", ", dark red", ", dark silver", ", dark yellow", ", light blue", ", light bronze", ", light brown", ", light gold", ", light grey", ", light orange", ", light pink", ", light purple", ", light red", ", light silver", ", light yellow", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var names5 = ["black", " and blue", " and bronze", " and brown", " and gold", " and grey", " and orange", " and pink", " and purple", " and red", " and silver", " and white", " and yellow", " and dark blue", " and dark bronze", " and dark brown", " and dark gold", " and dark grey", " and dark orange", " and dark pink", " and dark purple", " and dark red", " and dark silver", " and dark yellow", " and light blue", " and light bronze", " and light brown", " and light gold", " and light grey", " and light orange", " and light pink", " and light purple", " and light red", " and light silver", " and light yellow"];

	var names6 = ["a bear", "a bell", "a bird's claw", "a boar", "a bow", "a bow and arrow", "a cannon", "a castle", "a cat", "a catapult", "a chicken", "a cow", "a cow skull", "a coyote", "a crescent moon", "a crown", "a dagger", "a dog", "a dragon", "a dragontooth", "a eagle", "a falcon", "a farmer", "a feather", "a fifteen point star", "a fish", "a flower", "a grain stalk", "a group of fish", "a gryphon", "a hammer", "a hand", "a hatchet", "a heart", "a horse", "a human skull", "a hummingbird", "a large star", "a lion", "a lion holding a snake", "a local animal", "a lotus", "a maiden", "a maple leaf", "a mermaid", "a moon", "a mountain top", "a mythical bird", "a nightengale", "a parrot", "a phoenix", "a pickaxe", "a pig", "a pinecone", "a pinetree", "a pistol", "a priest's hat", "a raven", "a rifle", "a rooster", "a rose", "a sail", "a sapling", "a sea monster", "a seagull", "a seahorse", "a shark", "a shark's fin", "a sheep", "a shield", "a ship", "a sickle", "a silhouette of the country", "a skull", "a snake", "a snowflake", "a spear", "a spider", "a sun", "a sword", "a tree", "a tucan", "a tulip", "a twelve point star", "a twig", "a water lily", "a whale", "a whale's tail", "a whip", "a willow", "a wolf", "a wolf holding a snake", "a yew tree", "an acorn", "an albatross", "an alligator", "an anima's claw", "an animal's tail", "an army helmet", "an arrow", "an eagle", "an eagle holding a snake", "an eagle holding a sword", "an eye", "an important spiritual symbol", "an oak", "an open book", "animal teeth", "devil horns", "lion teeth", "raindrops", "snowflakes", "three eyes", "three fish", "three religious symbols", "two angel wings", "two arrows", "two castle towers", "two cats", "two circling sharks", "two corn cobs", "two crossed arrows", "two crossed bones", "two crossed grain stalks", "two crossed pistols", "two crossed rifles", "two crossed swords", "two daggers", "two dogs", "two dragonteeth", "two eagle claws", "two eagle wings", "two eyes", "two feathers", "two fish", "two hands", "two lions", "two palm trees", "two ravens", "two religious symbols", "two ribbons held up by two spears", "two shaking hands", "two shark teeth", "two ships", "two snakes", "two spears behind a shield", "two swords behind a shield", "two twigs", "two whips", "two wolves"];
	var names7 = ["above a lake", "above a meteor", "above a rainbow", "above a river", "above a shooting star", "in a circle", "in a cogwheel", "in a hexagon", "in a pentagon", "in a shield", "in a square", "in a triangle", "on a cloak", "on top of a bullseye", "on top of a cannon", "on top of a castle", "on top of a crescent moon", "on top of a crown", "on top of a donkey", "on top of a fire", "on top of a hill", "on top of a key", "on top of a large ship", "on top of a lighthouse", "on top of a mountain", "on top of a rock", "on top of a sea turtle", "on top of a shield", "on top of a stripe", "on top of a sun", "on top of a tank", "on top of a torch", "on top of a tortoise", "on top of a turtle shell", "on top of a water droplet", "on top of a wave", "on top of a whale", "on top of an elephant", "on top of an iceberg", "on top of three small circles", "on top of three stripes", "on top of tree", "on top of two crossed torches", "on top of two feathers", "on top of two large crossed bones", "on top of two small circles", "on top of two stripes", "on top of two waves", "surrounded by abstract line patterns", "surrounded by different leaves", "surrounded by flowers", "surrounded by four arrow tips", "surrounded by four seasonal symbols", "surrounded by four spearpoints", "surrounded by important resource icons", "surrounded by leaves", "surrounded by petals", "surrounded by roses", "surrounded by several seeds", "surrounded by small circles", "surrounded by small cogwheels", "surrounded by small diamonds", "surrounded by small stars", "surrounded by smaller spiritual symbols", "surrounded by stripes", "surrounded by sun rays", "surrounded by the twelve zodiac symbols", "surrounded by three small stars", "surrounded by vines", "surrounded by words written in their language", "under a bullseye", "under a cannon", "under a castle", "under a crescent moon", "under a crown", "under a fire", "under a hill", "under a key", "under a large ship", "under a lighthouse", "under a meteor", "under a mountain", "under a rainbow", "under a rock", "under a seagull", "under a shield", "under a shooting star", "under a stripe", "under a sun", "under a tank", "under a torch", "under a water droplet", "under a wave", "under an albatross", "under an eagle", "under an iceberg", "under three small circles", "under three stripes", "under tree", "under two crossed torches", "under two feathers", "under two large crossed bones", "under two small circles", "under two stripes", "under two waves", "with a bell on either side", "with a bird's wing on either side", "with a candle on either side", "with a cogwheel on either side", "with a crab claw on either side", "with a craw on either side", "with a cross on either side", "with a diamond on either side", "with a dragontooth on either side", "with a droplet on either side", "with a feather on either side", "with a fish on either side", "with a fist on either side", "with a flame on either side", "with a flower on either side", "with a grain stalk on either side", "with a horseshoe on either side", "with a hummingbird on either side", "with a key on either side", "with a lightning bolt on either side", "with a lion's tooth on either side", "with a lobster on either side", "with a pillar on either side", "with a pistol on either side", "with a rifle on either side", "with a seahorse on either side", "with a shark's fin on either side", "with a shields on either side", "with a small crown on either side", "with a smaller spiritual symbol on either side", "with a spear on either side", "with a star on either side", "with a starfish on either side", "with a sword on either side", "with a torch on either side", "with an arrow on either side", "with an important herb on either side", "with coral on either side", "with firewood on either side", "with two droplets on either side"];
	var names8 = [", but the emblem is only shown on very special occassions.", ", but the emblem is only used as part of the army branches.", ", but the emblem is only used during celebrations.", ", but the emblem is only used during religious rituals.", ", but the emblem is only used on official flags and armour.", ", but the emblem is shown only on special occassions.", ", but the emblem isn't shown on the standard flag.", ", but the people can choose whether they want the emblem on their flag or not.", ", the emblem has to be part of every flag by law.", ", the emblem is part of the standard flag and thus shown all the time."];

	var names9 = ["adversity", "ancestry", "anguish", "aptitude", "artistry", "audacity", "boldness", "bravery", "conquests", "country's nature", "courage", "craftsmanship", "defeats", "determination", "diligence", "diversity", "endurance", "fortitude", "fortune", "future", "grief", "grit", "happiness", "hardship", "health", "heritage", "heroism", "history", "honor", "ingenuity", "intrepidity", "knowledge", "lineage", "local fauna", "local flora", "luck", "misfortune", "pain", "past", "perseverance", "persistence", "prowess", "resilience", "resolve", "strength", "suffering", "tenacity", "valor", "victories", "virtuosity"];

	var random1 = parseInt(Math.floor((Math.random() * names1.length)));
	var random2 = parseInt(Math.floor((Math.random() * names2.length)));
	var random3 = parseInt(Math.floor((Math.random() * names3.length)));
	while (random3 === random2) {
		random3 = parseInt(Math.floor((Math.random() * names3.length)));
	}
	var random4 = parseInt(Math.floor((Math.random() * names4.length)));
	while (random4 === random2 || random4 === random3) {
		random4 = parseInt(Math.floor((Math.random() * names4.length)));
	}
	var random5 = parseInt(Math.floor((Math.random() * names5.length)));
	while (random5 === random2 || random5 === random3 || random5 === random4) {
		random5 = parseInt(Math.floor((Math.random() * names5.length)));
	}
	var random6 = parseInt(Math.floor((Math.random() * names6.length)));
	var random7 = parseInt(Math.floor((Math.random() * names7.length)));
	var random8 = parseInt(Math.floor((Math.random() * names8.length)));

	var random9 = parseInt(Math.floor((Math.random() * names9.length)));
	var random10 = parseInt(Math.floor((Math.random() * names9.length)));
	while (random10 === random9) {
		random10 = parseInt(Math.floor((Math.random() * names9.length)));
	}
	var random11 = parseInt(Math.floor((Math.random() * names9.length)));
	while (random11 === random9 || random11 === random10) {
		random11 = parseInt(Math.floor((Math.random() * names9.length)));
	}

	var random12 = parseInt(Math.floor((Math.random() * names1.length)));
	var random13 = parseInt(Math.floor((Math.random() * names2.length)));
	var random14 = parseInt(Math.floor((Math.random() * names3.length)));
	while (random14 === random13) {
		random14 = parseInt(Math.floor((Math.random() * names3.length)));
	}
	var random15 = parseInt(Math.floor((Math.random() * names4.length)));
	while (random15 === random13 || random15 === random14) {
		random15 = parseInt(Math.floor((Math.random() * names4.length)));
	}
	var random16 = parseInt(Math.floor((Math.random() * names5.length)));
	while (random16 === random13 || random16 === random14 || random16 === random15) {
		random16 = parseInt(Math.floor((Math.random() * names5.length)));
	}
	var random17 = parseInt(Math.floor((Math.random() * names6.length)));
	var random18 = parseInt(Math.floor((Math.random() * names7.length)));
	var random19 = parseInt(Math.floor((Math.random() * names8.length)));

	var random20 = parseInt(Math.floor((Math.random() * names9.length)));
	var random21 = parseInt(Math.floor((Math.random() * names9.length)));
	while (random21 === random20) {
		random21 = parseInt(Math.floor((Math.random() * names9.length)));
	}
	var random22 = parseInt(Math.floor((Math.random() * names9.length)));
	while (random22 === random20 || random22 === random21) {
		random22 = parseInt(Math.floor((Math.random() * names9.length)));
	}

	var name = "The flag is made up of " + names1[random1] + " in " + names2[random2] + names3[random3] + names4[random4] + names5[random5] + ".";
	var name2 = "Their emblem consists of " + names6[random6] + " " + names7[random7] + names8[random8];
	var name3 = "The emblem stands for their " + names9[random9] + ", their " + names9[random10] + " and their " + names9[random11] + ".";

	var name4 = "-----------------------------------------------------------------------------------------------------------------------------";

	var name5 = "The flag is made up of " + names1[random12] + " in " + names2[random13] + names3[random14] + names4[random15] + names5[random16] + ".";
	var name6 = "Their emblem consists of " + names6[random17] + " " + names7[random18] + names8[random19];
	var name7 = "The emblem stands for their " + names9[random20] + ", their " + names9[random21] + " and their " + names9[random22] + ".";


	var result = "";
	result += name;
	result += "\n";
	result += name2;
	result += "\n";
	result += name3;
	result += "\n";
	result += "\n";
	result += name4;
	result += "\n";
	result += "\n";
	result += name5;
	result += "\n";
	result += name6;
	result += "\n";
	result += name7;
	return result;
}