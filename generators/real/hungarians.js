function generator$real$hungarians(type) {
	var nm1 = ["Ábel", "Ádám", "Ákos", "Ármin", "Áron", "Árpád", "Adrián", "Albert", "Alex", "Alexander", "András", "Antal", "Arnold", "Attila", "Bálint", "Béla", "Balázs", "Barna", "Barnabás", "Bence", "Bendegúz", "Benedek", "Benjámin", "Benjamin", "Bertalan", "Boldizsár", "Botond", "Csaba", "Csanád", "Csongor", "Dániel", "Dávid", "Dénes", "Dezső", "Dominik", "Domonkos", "Donát", "Endre", "Erik", "Ferenc", "Flórián", "Gábor", "Géza", "Gergő", "Gergely", "György", "Gyula", "Henrik", "Imre", "István", "János", "József", "Jakab", "Kálmán", "Károly", "Kevin", "Kornél", "Kristóf", "Krisztián", "Krisztofer", "László", "Lajos", "Levente", "Márió", "Márkó", "Márk", "Márton", "Máté", "Mátyás", "Marcell", "Martin", "Mihály", "Miklós", "Milán", "Nándor", "Noel", "Norbert", "Olivér", "Pál", "Péter", "Patrik", "Róbert", "Rajmund", "Renátó", "Richárd", "Roland", "Rudolf", "Sándor", "Soma", "Szabolcs", "Szilárd", "Szilveszter", "Tamás", "Tibor", "Valentin", "Viktor", "Vilmos", "Vince", "Zalán", "Zoltán", "Zsolt", "Zsombor"];
	var nm2 = ["Ágnes", "Éva", "Adél", "Adrienn", "Alexandra", "Andrea", "Anett", "Anikó", "Anita", "Anna", "Annamária", "Barbara", "Beatrix", "Bernadett", "Bettina", "Bianka", "Blanka", "Boglárka", "Borbála", "Brigitta", "Cintia", "Csenge", "Csilla", "Dóra", "Dalma", "Daniella", "Diána", "Dominika", "Dorina", "Dorina Mária", "Dorka", "Dorottya", "Dzsenifer", "Edina", "Elizabet", "Emese", "Enikő", "Erika", "Erzsébet", "Eszter", "Evelin", "Fanni", "Flóra", "Fruzsina", "Gabriella", "Georgina", "Gréta", "Hajnalka", "Hanna", "Henrietta", "Ildikó", "Ivett", "Izabella", "Júlia", "Judit", "Kíra", "Kamilla", "Kata", "Katalin", "Kinga", "Kitti", "Klaudia", "Krisztina", "Laura", "Liliána", "Lili", "Lilla", "Luca", "Mária", "Mónika", "Martina", "Melinda", "Mercédesz", "Nóra", "Natália", "Nikolett", "Nikoletta", "Noémi", "Orsolya", "Panna", "Patrícia", "Petra", "Réka", "Ramóna", "Rebeka", "Regina", "Renáta", "Sára", "Szabina", "Szilvia", "Szimonetta", "Tímea", "Tünde", "Tamara", "Vanda", "Vanessza", "Veronika", "Viktória", "Virág", "Vivien", "Zita", "Zsófia", "Zsanett", "Zsuzsanna"];
	var nm3 = ["Antal", "Bálint", "Bakos", "Miksa", "Csatár", "Bács", "Balázs", "Apród", "Balla", "Balog", "Balogh", "Barna", "Barta", "Biró", "Bodnár", "Bogdán", "Bognár", "Borbély", "Boros", "Budai", "Egyed", "Csonka", "Deák", "Dobos", "Dudás", "Fábián", "Fülöp", "Faragó", "Farkas", "Fazekas", "Fehér", "Fekete", "Fodor", "Gál", "Gáspár", "Gulyás", "Hajdú", "Halász", "Hegedüs", "Horváth", "Illés", "Jónás", "Jakab", "Juhász", "Katona", "Kelemen", "Kerekes", "Király", "Kis", "Kiss", "Kocsis", "Kovács", "Kozma", "László", "Lakatos", "Lengyel", "Lukács", "Márton", "Máté", "Mészáros", "Magyar", "Major", "Mezei", "Molnár", "Németh", "Nagy", "Nemes", "Novák", "Oláh", "Orbán", "Orosz", "Orsós", "Pál", "Pásztor", "Péter", "Pap", "Papp", "Vászoly", "Pataki", "Pintér", "Rácz", "Sándor", "Simon", "Sípos", "Soós", "Somogyi", "Székely", "Surány", "Szücs", "Szabó", "Kende", "Szalai", "Szekeres", "Szilágyi", "Szőke", "Szűts", "Tóth", "Török", "Takács", "Tamás", "Váradi", "Kapolcs", "Zobor", "Vörös", "Varga", "Vass", "Veres", "Vincze", "Virág"];

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm3.length);
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm2.length);
			names = nm3[rnd2] + " " + nm2[rnd];
			nm2.splice(rnd, 1);
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm3[rnd2] + " " + nm1[rnd];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd2, 1);
		return names;
	}

}