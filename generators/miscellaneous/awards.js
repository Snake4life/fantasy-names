function generator$miscellaneous$awards() {
	var nm1 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Acclaimed", "Adept", "Arcane", "Artistic", "Aurora", "Austere", "Bold", "Brass", "Bravery", "Bright", "Brilliant", "Candid", "Children's", "Clever", "Comfort", "Complexity", "Confusion", "Convention", "Crafty", "Creation", "Creative", "Critic", "Critics'", "Crystal", "Dapper", "Defiant", "Diamond", "Discovery", "Discretion", "Dual", "Duality", "Earnesty", "Education", "Elegance", "Elegant", "Elementary", "Enchanted", "Enlightened", "Ethic", "Exalted", "Excellence", "Experience", "Expert", "Expertise", "Fantasy", "Fashion", "Flawless", "Fragrant", "Free", "Future", "Gentle", "Golden", "Graceful", "Gracious", "Grand", "Guardian", "Handy", "Harmony", "Health", "Healthy", "Honest", "Honesty", "Honor", "Honored", "Humane", "Humanity", "Humble", "Imagination", "Impossible", "Incredible", "Independent", "Infinity", "Informed", "Innocence", "Intelligence", "Intelligent", "International", "Intrepid", "Jade", "Jubilant", "Knowledge", "Life", "Light", "Literary", "Logic", "Loyalty", "Luminous", "Luna", "Lunar", "Magic", "Majestic", "Majesty", "Medicine", "Melody", "Merry", "Miniature", "Motion", "Mysterious", "Mystery", "National", "Natural", "Nature", "Neo", "New", "Novel", "Novice", "Passion", "Peace", "People's", "Pointless", "Possibility", "Power", "Perseverance", "Prime", "Public's", "Regal", "Ruby", "Sanity", "Sapphire", "Science", "Short", "Silk", "Silver", "Solar", "Soul", "Stellar", "Style", "Stylish", "Superior", "Sympathy", "Teen", "Terror", "Truth", "Twin", "Unity", "Unsung", "Velvet", "Vigilant", "Virtuous", "Warped", "Wisdom", "Wise", "Young"];
	var nm2 = ["Act", "Actor", "Performance", "Performer", "Answer", "Art", "Atom", "Badge", "Balloon", "Band", "Bear", "Bell", "Bird", "Book", "Camera", "Canvas", "Chance", "Change", "Cherry", "Choice", "Clover", "Comet", "Cord", "Creator", "Crown", "Curtain", "Cushion", "Dance", "Design", "Droplet", "Eagle", "Education", "Engine", "Example", "Eye", "Fan", "Feather", "Film", "Fingerprint", "Flame", "Flower", "Footprint", "Globe", "Glove", "Halo", "Hammer", "Heart", "Hero", "Horse", "Image", "Impulse", "Instrument", "Invention", "Iris", "Jewel", "Ladybug", "Laugh", "Leaf", "Lion", "Locket", "Machine", "Mark", "Mask", "Melody", "Monkey", "Moon", "Mouse", "Music", "Owl", "Palm", "Performance", "Press", "Print", "Pulse", "Question", "Question Mark", "Quill", "Quiver", "Record", "Ribbon", "Smile", "Snail", "Song", "Spade", "Star", "Sun", "Taste", "Theory", "Throne", "Tune", "Veil", "Wand", "Wing"];
	var nm3 = ["", "", "", "", "", "Accolade", "Award", "Award", "Award", "Award", "Award", "Award", "Award", "Award", "Award", "Award", "Grant", "Hall of Fame", "Hall of Fame Award", "Prize", "Prize for Quality", "Quality Award", "Trophy", "of the Year"];



	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		if (nm1[rnd] === "") {
			while (rnd3 < 5) {
				rnd3 = Math.floor(Math.random() * nm3.length);
			}
		}
		names = "The " + nm1[rnd] + " " + nm2[rnd2] + " " + nm3[rnd3];
		nm1.splice(rnd, 1);
		nm2.splice(rnd2, 1);
		return names;
	}

}