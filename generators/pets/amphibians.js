function generator$pets$amphibians(type) {
	var nm1 = ["Alien", "Arrow", "Bazoo", "Beaker", "Belch", "Belcher", "Binky", "Bloats", "Blob", "Bob", "Bog", "Bogs", "Booger", "Boogy", "Bubba", "Bubbles", "Buffle", "Buffles", "Bully", "Buster", "Charizard", "Charmander", "Chubber", "Chubbles", "Chubbs", "Chubby", "Chunky", "Claw", "Clawde", "Clawdius", "Claws", "Cozmo", "Cricket", "Croak", "Croaker", "Croaks", "Crook", "Cruncher", "Crunchy", "Curmet", "Dart", "Darts", "Doc", "Fatty", "Fiddles", "Fire", "Flibbit", "Flippy", "Flips", "Flubber", "Flubs", "Flye", "Freak", "Freckles", "Frogger", "Froggie", "Frogzilla", "Gobbles", "Goble", "Gobles", "Godzilla", "Golem", "Goliath", "Gooey", "Grog", "Hobbit", "Hopkins", "Hopper", "Hopscotch", "Hudini", "Jabba", "JarJar", "Kermi", "Kermie", "Kermit", "Leaps", "Leapy", "Mantis", "Marsh", "Mello", "Mellow", "Mog", "MrSticky", "Mud", "Muds", "Newt", "Newton", "Orbit", "Patches", "Pickle", "Pickles", "Pogo", "Predator", "Prince", "Puddles", "Pudge", "Pug", "Quibbit", "Ribbit", "Shmoo", "Shmooch", "Skippy", "Skittles", "Slick", "Slimes", "Slippy", "Slub", "Slug", "Slugg", "Sluggs", "Slugs", "Smeagol", "Smudge", "Spot", "Sticky", "Stinky", "Stubby", "Stumper", "Swampie", "Swamps", "Thor", "Toad", "Weirdo", "Whopper", "Wiggles", "Wobble", "Wobbles", "Yoda"];
	var nm2 = ["Algee", "Amazone", "Amazonia", "Babe", "Belchy", "Blinks", "Blinky", "Bloats", "Bubble", "Bubbles", "Buffy", "Bufonia", "Cherry", "Chops", "Chubbles", "Chubby", "Clawdia", "Cookie", "Cosmo", "Cricket", "Croaks", "Daphne", "Dirty", "Faye", "Fern", "Fiddle", "Flubby", "Flye", "Freakey", "Freckles", "Frogzilla", "Fye", "Fyre", "Geo", "Gobbles", "Gooey", "Hippity", "Hipscotch", "Hoppity", "Iggy", "Karma", "Kirby", "Kiss", "Kisses", "Leaps", "Leapy", "Lilo", "Lily", "Lilypad", "Lips", "Mello", "Muddy", "Muds", "Mystique", "Noodles", "Patches", "Peeps", "Penelope", "Pepper", "Pickle", "Pickles", "Princess", "Puds", "Pugs", "Pumpkin", "Raisin", "Ribbit", "Ribbits", "Sally", "Shirly", "Shmoo", "Shmooches", "Slimey", "Slippy", "Smiley", "Smooch", "Snaile", "Sparkle", "Sparkles", "Speckles", "Spot", "Spots", "Squee", "Squiggy", "Stitch", "Stitches", "Teeny", "Tiggles", "Tiny", "Tootsie", "Trixie", "Twiggy", "Twinkle", "Waddle", "Waddles", "Wiggle", "Wiggles", "Wobble", "Wobbles", "Xena"];


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