var nm1 = ["Algal", "Bare", "Barren", "Dense", "Dwarf", "Hard", "Pygmy", "Scorched", "Scorch", "Scrub", "Tender", "Wild", "Nettle", "Shadow", "Splint", "Splinter", "Mad", "Gentle", "Spring", "Summer", "Winter", "Autumn", "Fall", "Snow", "Iron", "Wise", "Clever", "Cunning", "Sharp", "Bland", "Taint", "Tainted", "Mellow", "Weeping", "Tender", "Kind", "Soft", "Quiet", "Silent", "Mild", "Bitter", "Cruel", "Mean", "Vine", "Black", "Gray", "Charred", "Burn", "Burned"];
var nm2 = ["acorn", "alder", "ash", "beech", "birch", "cedar", "cherry", "cypress", "elm", "fir", "juniper", "larch", "locust", "maple", "oak", "peach", "pine", "poplar", "spruce", "walnut", "willow", "yew", "tree", "hazel", "twig", "trunk", "root", "nut", "trunk", "herb", "limb", "beard", "leaf", "husk", "spur", "sprout", "wood", "stump", "thorn", "talon", "blossom", "leg", "legs", "limbs", "tendril"];
var nm3 = ["Acorn", "Alder", "Ash", "Beech", "Birch", "Cedar", "Cherry", "Cypress", "Elm", "Fir", "Juniper", "Larch", "Locust", "Maple", "Oak", "Oaken", "Peach", "Pine", "Poplar", "Spruce", "Walnut", "Willow", "Yew", "Tree", "Hazel", "Thistle"];
var nm4 = ["bark", "beard", "blade", "bramble", "nettle", "spray", "bush", "shell", "husk", "claw", "fang", "talon", "paw", "crown", "fern", "copse", "scrub", "flesh", "fury", "grove", "covert", "stand", "herb", "leaf", "growl", "howl", "trunk", "root", "bellow", "roar", "snarl", "shade", "shadow", "flower", "blossom", "limb", "lock", "spine", "pad", "needle", "stalk", "splint", "splinter", "spur", "twig", "stub", "stump", "shrub", "skin", "thorn", "tip", "tooth", "twig", "wood", "burn", "scar", "eye", "brow", "sprout", "tendril"];

function generator$fantasy$ents() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2];
		}
		return names;
	}

}