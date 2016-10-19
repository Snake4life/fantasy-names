function generator$harry_potter$hippogriffs(type) {
	var nm1 = ["Agile", "Beauty", "Blitz", "Breeze", "Brisk", "Buck", "Charge", "Class", "Dart", "Dash", "Draft", "Fleet", "Flow", "Flurry", "Flux", "Gale", "Gentle", "Glamor", "Grace", "Guard", "Gust", "Hale", "Hate", "Hurricane", "Iron", "Keen", "Loud", "Mellow", "Nimble", "Quick", "Quiet", "Rough", "Rush", "Sharp", "Silk", "Soft", "Spirit", "Spry", "Stark", "Steel", "Storm", "Stout", "Strong", "Surge", "Swift", "Tame", "Tender", "Thunder", "Wild", "Wind"];
	var nm2 = ["beak", "bill", "claw", "colt", "eye", "feather", "fluff", "fringe", "hoof", "hook", "mane", "plume", "quill", "scream", "screech", "steed", "tail", "talon", "tuft", "wing"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		names = nm1[rnd] + nm2[rnd2];
		return names;
	}

}