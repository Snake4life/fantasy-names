function generator$miscellaneous$chivalric_orders() {
	var nm1 = ["Ash", "Autumn", "Balance", "Battle", "Blood", "Brass", "Carnage", "Chains", "Change", "Courage", "Darkness", "Dawn", "Death", "Defiance", "Desire", "Devotion", "Direction", "Dusk", "Exaltation", "Existence", "Faith", "Fate", "Fear", "Fire", "Fortitude", "Fury", "Gallantry", "Giants", "Glory", "Gold", "Grit", "Guidance", "Harmony", "Heroism", "History", "Honor", "Ice", "Infinity", "Iron", "Judgment", "Justice", "Knowledge", "Leather", "Light", "Limbo", "Nightfall", "Oaths", "Peace", "Pestilence", "Prayer", "Riddles", "Serenity", "Servitude", "Shadows", "Silver", "Smoke and Ash", "Solitude", "Spirit", "Spirits", "Spring", "Summer", "Sunrise", "Tenacity", "Thunder", "Time", "Tranquility", "Valiance", "Valor", "Wealth", "Winter", "Worship"];
	var nm2 = ["Abyss", "Angel", "Arachnid", "Arch", "Archangel", "Ash", "Banner", "Bat", "Bear", "Beast", "Birth", "Blade", "Blessed", "Book", "Brave", "Bridge", "Broken Sword", "Brother", "Bull", "Carriage", "Chain", "Chalice", "Cherub", "Circle", "Cleansing Flame", "Coast", "Crescent", "Crest", "Crib", "Cross", "Crow", "Crown", "Desire", "Divine", "Divine Hand", "Dragon", "Dust", "Eagle", "Earth", "Edge", "Eye", "Faith", "Falcon", "Fang", "Fate", "Father", "Feather", "Fist", "Flame", "Flower", "Fruit", "Garden", "Gate", "Golden Thread", "Griffin", "Guardian", "Hammer", "Heart", "Hook", "Horn", "Hydra", "Ice", "Isle", "Knot", "Lake", "Land", "Leaf", "Light", "Lion", "Maple", "Mask", "Mire", "Moon", "Mother", "Mountain", "Nest", "Night", "Oak", "Ocean", "Oracle", "Orb", "Owl", "Parchment", "Phoenix", "Prophet", "Pyre", "Quill", "Quiver", "Rain", "Raven", "Rose", "Saint", "Salt", "Sand", "Sanguine", "Scarf", "Scythe", "Seraph", "Seraphim", "Serpent", "Shadow", "Shield", "Silver", "Sister", "Sky", "Snake", "Spirit", "Spur", "Star", "Stars", "Stone", "Sun", "Sword", "Temple", "Truth", "Voyage", "Water", "Wave"];
	var nm3 = ["Abyss", "Angel", "Ashen", "Autumn", "Banner", "Birth", "Blessed", "Blood", "Brass", "Brave", "Chain", "Chalice", "Cherub", "Circle", "Cleansing", "Crescent", "Crest", "Cross", "Crow", "Crown", "Darkness", "Dawn", "Death", "Divine", "Dragon", "Dusk", "Dust", "Eagle", "Exaltation", "Faith", "Falcon", "Fang", "Fate", "Father", "Fear", "Feather", "Fire", "Flame", "Flower", "Fury", "Garden", "Gate", "Glory", "Golden", "Griffin", "Guardian", "Guiding", "Honor", "Hydra", "Infinity", "Iron", "Judgment", "Justice", "Knowledge", "Lake", "Land", "Leather", "Light", "Limbo", "Lion", "Maple", "Masked", "Mire", "Moon", "Mother", "Mountain", "Nest", "Night", "Nightfall", "Oak", "Ocean", "Oracle", "Owl", "Parchment", "Phoenix", "Prayer", "Prophet", "Pyre", "Raven", "Rose", "Salt", "Sand", "Sanguine", "Scythe", "Seraph", "Seraphim", "Serenity", "Serpent", "Shadow", "Silver", "Sister", "Sky", "Solitude", "Spirit", "Spring", "Star", "Stone", "Summer", "Sun", "Sunrise", "Temple", "Thunder", "Timeless", "Tranquil", "Valiant", "Valor", "Voyage", "Water", "Winter", "Worship"];
	var nm4 = ["Knights", "Order", "Soldiers", "Squires", "Preservers", "Guardians", "Custodians", "Legion", "League", "Circle", "Lancers", "Shields", "Helmets", "Templars", "Knights", "Order", "Knights", "Order"];



	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm4.length);
		if (i < 3) {
			rnd = Math.floor(Math.random() * nm2.length);
			names = "The " + nm4[rnd2] + " of the " + nm2[rnd];
			nm2.splice(rnd, 1);
		} else if (i < 7) {
			rnd = Math.floor(Math.random() * nm3.length);
			names = "The " + nm3[rnd] + " " + nm4[rnd2];
			nm3.splice(rnd, 1);
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			names = "The " + nm4[rnd2] + " of " + nm1[rnd];
			nm1.splice(rnd, 1);
		}
		return names;
	}

}