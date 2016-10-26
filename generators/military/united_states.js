function generator$military$united_states() {
	var names = ["Able", "Baker", "Charlie", "Dog", "Easy", "Fox", "George", "How", "Item", "Jig", "King", "Love", "Mike", "Nan", "Oboe", "Peter", "Queen", "Roger", "Sugar", "Tare", "Uncle", "Victor", "William", "Xray", "Yoke", "Zebra"];

	var r1 = Math.floor(Math.random() * names.length);
	var r2 = Math.floor(Math.random() * (names.length - 1));
	if (r2 >= r1) r2 = r2 + 1;

	return names[r1] + " " + names[r2];
}