var nm1 = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Type 1", "Type 2", "Type 3", "Type 4", "Type 5", "Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Rank 1", "Rank 2", "Rank 3", "Rank 4", "Rank 5", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"];
var nm2 = ["Aggressive", "Ancient", "Angry", "Animalistic", "Aquatic", "Artificial", "Beastly", "Bitter", "Boulder", "Cataclysmic", "Cheerful", "Childlike", "Clone", "Common", "Corrupted", "Crazed", "Cruel", "Dark", "Deadly", "Demonic", "Derange", "Destructive", "Diabolical", "Docile", "Dormant", "Dumb", "Echo", "Electric", "Energized", "Energy", "Envious", "Evil", "Familiar", "Fire", "Foreign", "Forsaken", "Foul", "Frantic", "Freeroaming", "Frenzied", "Friendly", "Frost", "Gentle", "Grieving", "Gruesome", "Harmful", "Harmless", "Hellish", "Helpful", "Ignorant", "Infernal", "Insane", "Intelligent", "Invisible", "Jealous", "Lonely", "Mad", "Malevolent", "Malicious", "Malign", "Mellow", "Metal", "Mild", "Mirror", "Mischievous", "Monstrous", "Mournful", "Natural", "Nefarious", "Nuclear", "Obedient", "Obscene", "Passive", "Petrified", "Petty", "Playful", "Pleasant", "Portal", "Radioactive", "Rejected", "Residual", "Rude", "Shadow", "Slumbering", "Sly", "Solitary", "Somber", "Sorrow", "Stinking", "Teasing", "Teleportation", "Timelost", "Toxic", "Trapped", "Tricky", "Twin", "Uncommon", "Vengeful", "Wandering", "Wicked"];
var nm3 = ["Apparition", "Appearance", "Banshee", "Behemoth", "Boogieman", "Daemon", "Demon", "Devil", "Duplicate", "Entity", "Ethereal", "Ghost", "Glob", "Haunt", "Metamorph", "Mutation", "Phantasm", "Phantom", "Poltergeist", "Revenant", "Shade", "Shadow", "Shifter", "Specter", "Spirit", "Spook", "Tempus", "Vision", "Visitor", "Wraith"];

function generator$fantasy$ghost_classifications() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		names = nm1[rnd] + " " + nm2[rnd2] + " " + nm3[rnd3];
		return names;
	}

}