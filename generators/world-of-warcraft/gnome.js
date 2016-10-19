function generator$world_of_warcraft$gnome(type) {
	var nm1 = ["Ba", "Bil", "Bim", "Bin", "Bink", "Bo", "Bom", "Bon", "Bonk", "Bu", "Bur", "Car", "Do", "Don", "Donk", "Di", "Dim", "Din", "Dink", "El", "Fen", "Fil", "Fim", "Fin", "Fink", "Gel", "Gim", "Glim", "Glin", "Glink", "Gno", "Hin", "Hink", "Klo", "La", "Lo", "Mit", "Mittle", "Nit", "Nittle", "Pit", "Pith", "Tal", "Ten", "Teen", "Then", "Thin", "Think", "Tin", "To", "Toc", "Tyn"];
	var nm2 = ["k", "b", "l", "ka", "ba", "la", "lo", "bo", "ko", "li", "bi", "ki", "da", "do", "di", "bee", "lee", "kee", "dee", "le", "a", "o", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm3 = ["ago", "an", "argo", "arn", "ash", "bick", "bik", "bink", "ble", "brik", "brick", "bus", "dink", "dus", "fink", "finkle", "flink", "fonk", "flonk", "fizz", "go", "gus", "kink", "klink", "klonk", "link", "mac", "mink", "nk", "nus", "onk", "rgo", "sizz", "ris", "tink", "tonk", "tank", "think", "thin", "ulo", "vash", "vizz", "wick", "win", "wack", "wizz"];
	var nm4 = ["Ba", "Bil", "Bim", "Bin", "Bink", "Bip", "Bix", "Bixi", "Bo", "Bon", "By", "Bur", "Car", "Di", "Dim", "Din", "Dink", "Do", "El", "Fen", "Fil", "Fim", "Fyn", "Fynk", "Gel", "Gim", "Gin", "Ginn", "Glin", "Glink", "Gno", "Gyn", "Gynn", "Hin", "Hink", "Jul", "Kat", "Kath", "Kel", "Ket", "Keth", "Kit", "Kith", "Klo", "La", "Lis", "Liss", "Lo", "Lym", "Lys", "Lyss", "Mer", "Mit", "Mittle", "Nit", "Nittle", "Pit", "Pith", "Syr", "Seel", "Soo", "Tal", "Tan", "Teel", "Teen", "Ten", "Then", "Thin", "Think", "Til", "Tin", "To", "Toc", "Tyl", "Tyn"];
	var nm5 = ["ky", "by", "la", "lo", "bo", "ko", "li", "bi", "ki", "da", "do", "di", "bee", "lee", "kee", "dee", "le", "a", "o", "y", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
	var nm6 = ["ago", "an", "arn", "ash", "bick", "bik", "bink", "ble", "brik", "brick", "bus", "dink", "dinkey", "dinkle", "dus", "fink", "finkle", "flink", "flynk", "fonk", "flonk", "fizz", "fizzy", "fizzle", "go", "gus", "kin", "kink", "klinkle", "linkey", "ly", "mac", "mink", "nk", "nus", "onk", "rgo", "sizz", "sizzle", "ris", "tink", "tinkle", "tonk", "think", "thinkle", "thin", "ulo", "vash", "vizz", "vizzle", "wick", "win", "wack"];
	var nm7 = ["Acer", "Berry", "Bizz", "Black", "Cast", "Click", "Cog", "Draxle", "Fast", "Fine", "Fizzle", "Gear", "Grind", "Mecha", "Mekka", "Over", "Porter", "Puddle", "Sad", "Shine", "Short", "Spanner", "Spark", "Spring", "Spry", "Steam", "Storm", "Swift", "Thistle", "Tink", "Tossle", "Twist", "Wobble"];
	var nm8 = ["bang", "blast", "bonk", "bus", "crank", "dwadle", "fizz", "fizzle", "fuse", "fuzz", "gauge", "gear", "grinder", "house", "kettle", "master", "needle", "nozzle", "pipe", "span", "spanner", "spark", "spindle", "spinner", "spring", "sprocket", "steel", "strip", "torque", "whistle", "wizzle", "wrench"];


	i = Math.floor(Math.random() * 10); {
		rnd7 = Math.floor(Math.random() * nm7.length);
		rnd8 = Math.floor(Math.random() * nm8.length);
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm4.length);
			rnd2 = Math.floor(Math.random() * nm5.length);
			rnd3 = Math.floor(Math.random() * nm6.length);
			names = nm4[rnd] + nm5[rnd2] + nm6[rnd3] + " " + nm7[rnd7] + nm8[rnd8];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + " " + nm7[rnd7] + nm8[rnd8];
		}
		return names;
	}

}