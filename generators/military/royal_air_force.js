function generator$military$royal_air_force() {
	var names = ["Ace", "Beer", "Charlie", "Don", "Edward", "Freddie", "George", "Harry", "Ink", "Johnnie", "King", "London", "Monkey", "Nuts", "Orange", "Pip", "Queen", "Robert", "Sugar", "Toc", "Uncle", "Vic", "William", "Xray", "Yorker", "Zebra"];

	var r1 = Math.floor(Math.random() * names.length);
	var r2 = Math.floor(Math.random() * (names.length - 1));
	if (r2 >= r1) r2 = r2 + 1;

	return names[r1] + " " + names[r2];
}