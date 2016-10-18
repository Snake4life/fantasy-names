var names1 = ["Lala", "Abra", "Ala", "Alaka", "Bim", "Braca", "Bracada", "Cada", "Cadabra", "Dabra", "Eppe", "Flam", "Flim", "Gobble", "Gobbledee", "Gook", "Hello", "Hillo", "Hocu", "Hocus", "Hollo", "Hum", "Jumbo", "Kakke", "Kazam", "Laka", "Mani", "Mumbo", "Ocus", "Om", "Padme", "Peppe", "Pocu", "Pocus", "Pow", "Presto", "Sala", "Same", "Sesa", "Sesame", "Shazam", "Sim", "Wow", "Zam", "Zik", "Zizzi", "Zuzzy"];
var names2 = ["Aioli", "Anise", "Basil", "Bay", "Celery", "Chili", "Chutney", "Cilantro", "Cinnamon", "Clove", "Coriander", "Cream", "Cumin", "Dashi", "Dressing", "Fennel", "Guacamole", "Jasmine", "Juniper", "Ketchup", "Lemon", "Lime", "Mace", "Marmite", "Mash", "Mayo", "Mint", "Miso", "Naise", "Nutmeg", "Oil", "Onion", "Oregano", "Paprika", "Parsley", "Pepper", "Peppermint", "Pesto", "Piccalilli", "Pickle", "Ponzu", "Radish", "Relish", "Rice", "Riyaki", "Rosemary", "Safe", "Saffron", "Salsa", "Sambal", "Sauce", "Sesame", "Shichimi", "Sichuan", "Soy", "Syrup", "Tarragon", "Tartar", "Teriya", "Teriyaki", "Thyme", "Turmeric", "Tzatziki", "Vanilla", "Wasabi"];

function generator$dragon_ball$others() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * names1.length);
			names = names1[rnd];
		} else {
			rnd = Math.floor(Math.random() * names2.length);
			names = names2[rnd];
		}
		return names;
	}

}