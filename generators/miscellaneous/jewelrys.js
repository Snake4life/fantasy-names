var nm3 = ["Tiara", "Necklace", "Amulet", "Bracelet", "Ornament", "Pendant", "Ring", "Pin", "Choker", "Anklet", "Brooch", "Necklace", "Amulet", "Bracelet", "Pendant", "Ring"];

function generator$miscellaneous$jewelrys() {
	var nm1 = ["Adored", "Agate", "Aged", "Amber", "Amethyst", "Ancient", "Angel", "Angelic", "Anonymous", "Antique", "Arctic", "Austere", "Azure", "Blind", "Blushing", "Brave", "Bright", "Brilliant", "Broken", "Citrine", "Colossal", "Coral", "Crisp", "Crystal", "Curly", "Curvy", "Darling", "Dearest", "Defiant", "Devoted", "Diamond", "Diligent", "Earnest", "Elated", "Elegant", "Emerald", "Enchanted", "Enchanting", "Enlightened", "Exalted", "Exotic", "Faint", "Fair", "Feline", "Flawless", "Forsaken", "Free", "Frozen", "Garnet", "Gentle", "Gifted", "Glistening", "Graceful", "Gracious", "Grand", "Grateful", "Handsome", "Happy", "Harmonious", "Heaven", "Heavenly", "Hematite", "Honest", "Humble", "Idle", "Illustrious", "Impossible", "Infinite", "Innocent", "Jade", "Jasper", "Lavish", "Lonely", "Loyal", "Luminous", "Lunar", "Lustrous", "Majestic", "Malachite", "Mellow", "Mysterious", "Obsidian", "Ocean", "Onyx", "Parallel", "Peace", "Peaceful", "Pearl", "Perfect", "Pink", "Playful", "Precious", "Pristine", "Proud", "Pure", "Purity", "Quiet", "Royal", "Ruby", "Sapphire", "Scented", "Secret", "Serene", "Serpent", "Serpentine", "Shadow", "Silent", "Sinful", "Solar", "Spinel", "Spotless", "Stunning", "Sweet", "Tempting", "Tender", "Tinted", "Unmounted", "Velvet", "Vibrant", "Violet", "Virtuous", "Worthy", "Zircon"];
	var nm2 = ["Ambition", "Aura", "Balance", "Bauble", "Beauty", "Belle", "Blessing", "Bliss", "Blossom", "Bond", "Breath", "Bubble", "Charm", "Class", "Clover", "Core", "Crescent", "Crest", "Cross", "Crux", "Desire", "Devotion", "Dewdrop", "Dream", "Drop", "Droplet", "Eye", "Fan", "Favor", "Flame", "Flower", "Focus", "Force", "Gift", "Glamour", "Globe", "Grace", "Heart", "Hope", "Hum", "Hymn", "Image", "Leaf", "Life", "Light", "Lily", "Love", "Lure", "Mark", "Memorial", "Mind", "Moon", "Oath", "Oculus", "Orb", "Palm", "Panther", "Passion", "Petal", "Pledge", "Poem", "Prayer", "Promise", "Prospect", "Rainbow", "Resolve", "Riddle", "Rock", "Root", "Scale", "Seal", "Shield", "Song", "Soul", "Spark", "Spiral", "Spirit", "Star", "Stone", "Sun", "Swan", "Tear", "Teardrop", "Tempest", "Tribute", "Trinket", "Twin", "Twins", "Twirl", "Twist", "Valor", "Vigor", "Vision", "Voice", "Vow", "Whisper", "Will", "Wing", "Wings", "Wish"];


	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 5) {
			names = "The " + nm1[rnd] + " " + nm2[rnd2];
			nm1.splice(rnd, 1);
			nm2.splice(rnd2, 1);
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			names = "The " + nm1[rnd] + " " + nm2[rnd2] + " " + nm3[rnd3];
			nm1.splice(rnd, 1);
			nm2.splice(rnd2, 1);
		}
		return names;
	}

}