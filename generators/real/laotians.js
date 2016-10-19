function generator$real$laotians(type) {
	var nm1 = ["Akamu", "Analu", "Aulii", "Bane", "Bane ", "Havika", "Ikaika", "Kahoku", "Kai", "Kaili", "Kaipo", "Kalani", "Kale", "Kale ", "Kalei", "Kanoa", "Kapono", "Kawaii", "Keahi", "Keanu", "Kelii", "Keoki", "Keola", "Keon", "Keona", "Keowynn", "Kimo", "Kimo ", "Koa", "Konala", "Kye", "Kye ", "Lae", "Lani", "Leilani", "Liko", "Lilo", "Loe", "Maiele", "Maik", "Makaio", "Makan", "Makan ", "Makani", "Malo", "Malo ", "Mauli", "Meka", "Mele", "Moana", "Moke", "Mya", "Noi", "Oke", "Palani", "Paxathipatai", "Pekelo", "Phetdum", "Phonesavanh", "Saravan", "Sathanalat", "Sengprachanh", "Sommai", "Somphone", "Songkram", "Sonxai", "Teyvada", "Ulani", "Wongduan", "Xaisomboun"];
	var nm2 = ["Aelan", "Ailani", "Akela", "Alaina", "Alamea", "Alana", "Alani", "Alanna", "Alaula", "Aleka", "Alika", "Alli", "Allyn", "Aloha", "Alohi", "Alohilani", "Alona", "Alun", "Alyn", "Anani", "Ani", "Aolani", "Aolha", "Aulani", "Aulii", "Bane", "Bounmy", "Chansouda", "Chanthadeth", "Dorit", "Edena", "Gladi", "Haimi", "Haleah", "Haleigha", "Halia", "Hina", "Inoke", "Iokina", "Iolana", "Iolani", "Ipo", "Iwalani", "Jeanitha", "Kai", "Kaiah", "Kailani", "Kailea", "Kaili", "Kalaina", "Kalama", "Kalani", "Kalea", "Kaleah", "Kalei", "Kaleigh", "Kaleikaumaka", "Kalena", "Kalia", "Kalina", "Kaloni", "Kamea", "Kawailani", "Kawena", "Keahi", "Keala", "Keanu", "Keiki", "Keilana", "Keili", "Kekiokolanee", "Kekona", "Keola", "Ketsada", "Khampheng", "Kiana", "Kiele", "Kieli", "Kina", "Kinipela", "Konane", "Lae", "Lahela", "Laina", "Lanai", "Lani", "Lanikai", "Laya", "Leigha", "Leilana", "Leilana ", "Leilani", "Leilanie", "Liliha", "Lilo", "Loe", "Lokelani", "Lulani", "Mahina", "Maik", "Maile", "Makaio", "Makala", "Makana", "Makani", "Makelina", "Makenna", "Malana", "Maleah", "Malia", "Malu", "Mauli", "Mei", "Milani", "Mily", "Moana", "Moanna", "Moke", "Mya", "Nalani", "Nalanie", "Nani", "Napua", "Noelani", "Noma", "Okalani", "Oke", "Okelani", "Okilani", "Oliana", "Olina", "Onaona", "Palila", "Peni", "Phetmany", "Phetsavanh", "Pilialoha", "Pilis", "Pualani", "Roselani", "Saengvone", "Sasilvia", "Sathit", "Somphone", "Soukchanda", "Sousida", "Suke", "Ulani", "Ululani", "Wanika"];
	var nm3 = ["Bokeo", "Bouphavanh", "Bouvanaat", "Champasack", "Champasak", "Chanthanane", "Chanthavong	 ", "Chanthavong", "Chanthraphone", "Cheruene", "Douangmala", "Douangvily", "Genevong", "Inthisane", "Kaewdara", "Keobounphanh", "Keobunta", "Keomany", "Keopraseuth", "Keothavong", "Kethavongsa", "Ketthavong", "Khamchanh", "Khamsomphou", "Khamvongsouk", "Khanthavong", "Khotpanya", "Khouphongsy", "Kittiphan", "Kommandam", "Kouanchao", "Lengsavad", "Louangrath	 ", "Malaythong", "Manwilaivong", "Menorath", "Ornpaeng", "Oudomphonh", "Pakdimounivong", "Phanivong", "Phankham", "Phaophanit", "Phengsavath", "Phetphommasouk", "Phommajack", "Phommasane", "Phommathep", "Phomsouvanh", "Phomvihane", "Phothisarath", "Phoumsavanh", "Phoutthasinh", "Phrasavath", "Rattanavongsa", "Saenbouthalath", "Saengsavang", "Saengsouriya", "Saenthavisouk", "Savang", "Sayasone", "Sayavong", "Saysamongdy", "Saysanasy", "Seeha", "Sengprachanh", "Sengtavisouk", "Siharath ", "Simnouansai", "Siphandon", "Sisoulith", "Siyavong", "Somphonpadee", "Somphousiharath", "Sonexarth", "Souksanh", "Soulignavong", "Southavilay", "Souvannaphouma", "Syrypanha", "Syvongsa", "Tayvihane", "Thammasith", "Thammavong", "Thammavong ", "Thammavongsa", "Thepsenavong", "Thiamphasone", "Thonemany", "Vatthana", "Viravongs", "Vongphachanh", "Vongphakdy", "Vongsamphanh", "Vongsay", "Vongvichit", "Vongvilay", "Vorachith", "Xiengboree"];


	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm3.length);
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm2.length);
			names = nm2[rnd] + " " + nm3[rnd2];
			nm2.splice(rnd, 1);
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd] + " " + nm3[rnd2];
			nm1.splice(rnd, 1);
		}
		nm3.splice(rnd2, 1);
		return names;
	}

}