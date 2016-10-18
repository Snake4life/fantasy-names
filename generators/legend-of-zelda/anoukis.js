var nm1 = ["", "", "", "", "b", "d", "f", "g", "h", "k", "l", "m", "n", "p", "r", "s", "t", "w", "y", "z"];
var nm2 = ["a", "u", "o", "e"];
var nm3 = ["u", "o", "u", "o", "u", "o", "oo"];

function generator$legend_of_zelda$anoukis() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm1.length);
		while (rnd4 < 4) {
			rnd4 = Math.floor(Math.random() * nm1.length);
		}
		names = nm1[rnd] + nm2[rnd2] + nm1[rnd4] + nm3[rnd3];
		return names;
	}

}