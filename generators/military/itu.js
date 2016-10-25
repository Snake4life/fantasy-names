function generator$military$itu() {
	var names = ["Amsterdam", "Baltimore", "Casablanca", "Denmark", "Edison", "Florida", "Gallipoli", "Havana", "Italia", "Jerusalem", "Kilogramme", "Liverpool", "Madagascar", "New York", "Oslo", "Paris", "Quebec", "Roma", "Santiago", "Tripoli", "Upsala", "Valencia", "Washington", "Xanthippe", "Yokohama", "Zurich"];

	var r1 = Math.floor(Math.random() * names.length);
	var r2 = Math.floor(Math.random() * (names.length - 1));
	if (r2 >= r1) r2 = r2 + 1;

	return names[r1] + " " + names[r2];
}