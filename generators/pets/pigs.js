function generator$pets$pigs(type) {
	var nm1 = ["Chris P. Bacon", "Ace", "Truffle", "Trufflers", "Acorn", "Admiral", "Snortimer", "Ascot", "Axel", "Bacon", "Badger", "Bailey", "Bing", "Blitz", "Blizz", "Bowser", "Boxer", "Bramble", "Brew", "Bronco", "Buddy", "Bullet", "Button", "Buttons", "Casanova", "Cashew", "Caveman", "Chili", "Chop", "Choplin", "Chubs", "Cookie", "Cotton", "Crackle", "Deacon", "Deuce", "Dipper", "Dodge", "Dodger", "Doom", "Duffy", "Einswine", "Fizzle", "Flye", "Fudge", "Gizmo", "Glutton", "Goliath", "Gorge", "Gorger", "Greedo", "Grouch", "Grumby", "Gumball", "Hambo", "Hamilton", "Hamlet", "Hammer", "Hammibal", "Hannibal", "Hawke", "Hector", "Hercules", "Hog", "Hogger", "Hogzilla", "Hulk", "Iggy", "Judge", "Lad", "Macho", "Magnum", "Magnum Pig", "Marble", "Mello", "Mellow", "Mud", "Mudpie", "Mudster", "Nibble", "Nibbler", "Noodle", "Norton", "Nugget", "Oinkers", "Onyx", "Oreo", "Paddington", "Patches", "Pepper", "Pie", "Piggles", "Pigsley", "Popcorn", "Porkchop", "Puddle", "Pudge", "Rambo", "Rambore", "Ringo", "Rosco", "Rugby", "Russell", "Scamper", "Scout", "Slob", "Slobber", "Smokey", "Smudge", "Snuff", "Snuffles", "Stuffy", "Titan", "Waddle", "Waddles", "Wedge", "Whopper", "Wilburt", "Wobble", "Yoda"];
	var nm2 = ["Abby", "Amber", "Trufflers", "Badge", "Beauty", "Beebee", "Bell", "Bella", "Bertha", "Betty", "Blush", "Brandy", "Brew", "Button", "Buttons", "Caramel", "Checkers", "Chili", "Chips", "Coco", "Cookie", "Coral", "Cotton", "Daisy", "Dakota", "Dawn", "Dee", "Deedee", "Dew", "Dodger", "Doppler", "Dot", "Dots", "Dottie", "Dove", "Duffy", "Dutchess", "Frazzle", "Frizzle", "Fuchsia", "Ginger", "Gorgy", "Grace", "Granny", "Gummy", "Iggy", "June", "Jynx", "Lily", "Lola", "Lulu", "Maggie", "Maple", "Marbles", "Mello", "Mellow", "Missy", "Mittens", "Momma", "Muckie", "Nibble", "Nibbles", "Noodle", "Noodles", "Nugget", "Oinkee", "Olive", "Opal", "Orbit", "Oreo", "Paprika", "Peaches", "Pepper", "Pie", "Pink", "Pinky", "Pookie", "Popcorn", "Poppy", "Porkette", "Princess", "Prudence", "Pudge", "Pudgy", "Rose", "Roseate", "Rosie", "Rune", "Salmone", "Skye", "Slobs", "Sludges", "Slushie", "Smudge", "Smudges", "Snoots", "Snuffle", "Spot", "Stuffles", "Sugar", "Thistle", "Trixie", "Tulip", "Twinkie", "Twinkle", "Ursula", "Wiggle", "Waddle", "Waddles", "Wiggles", "Wobble"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm2.length);
			names = nm2[rnd];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd];
		}
		return names;
	}

}