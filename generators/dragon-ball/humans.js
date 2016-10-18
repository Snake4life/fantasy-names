var namesMale = ["Acon", "Acoron", "Aise", "Alamond", "Alcoh", "Almon", "Ayos", "Bakpa", "Bakpak", "Barush", "Batone", "Batto", "Beare", "Bedd", "Beere", "Bere", "Bereef", "Bet", "Bouk", "Braed", "Bred", "Brieve", "Brus", "Butta", "Caff", "Calcula", "Callacu", "Cassew", "Chap", "Chapz", "Char", "Chayer", "Chaznut", "Chesnu", "Cilpen", "Coco", "Coconu", "Coff", "Cohol", "Conut", "Cray", "Cube", "Culator", "Darc", "Darrek", "Delnoo", "Dennim", "Dimsu", "Dinnem", "Drawar", "Drawe", "Eci", "Faso", "Fizz", "Fizzy", "Forook", "Fungu", "Futo", "Gallue", "Garmant", "Garmen", "Geenz", "Glew", "Gus", "Hazzel", "Jaenz", "Jean", "Juiz", "Juze", "Krad", "Krof", "Ligh", "Lite", "Makker", "Marka", "Milke", "Millek", "Naife", "Naive", "Niar", "Noudel", "Painte", "Panz", "Payned", "Peelo", "Pensil", "Pents", "Phorc", "Pillo", "Pistasio", "Pran", "Prinro", "Pudden", "Puds", "Qube", "Rayne", "Rayo", "Rayon", "Reeb", "Ryce", "Salado", "Salla", "Sano", "Sanow", "Shewca", "Shrim", "Shrin", "Sisor", "Sisso", "Soi", "Soia", "Soofa", "Soya", "Spoune", "Sprinro", "Stachio", "Stapeler", "Stapple", "Staypel", "Storrem", "Strom", "Sumai", "Sumdi", "Taibbel", "Terbut", "Thunda", "Thunder", "Tofoo", "Tonba", "Tonwon", "Trousa", "Trouse", "Truff", "Truffel", "Waine", "Walnu", "Wonto", "Wryce", "Yogu", "Yogur", "Zelnu"];
var namesFemale = ["Acore", "Alcohi", "Alicoh", "Almo", "Almone", "Ayos", "Bara", "Beckpek", "Bedde", "Beeri", "Bett", "Betto", "Betton", "Biki", "Book", "Bouke", "Brishe", "Brusse", "Buttey", "Caffey", "Calci", "Calculi", "Carmente", "Cashey", "Chaire", "Chare", "Chessynu", "Cilpenne", "Coco", "Coconu", "Coffey", "Coholi", "Conuco", "Corna", "Crayo", "Crayone", "Culati", "Darke", "Deni", "Denime", "Dimsue", "Fizzy", "Forkey", "Fungee", "Fungey", "Garme", "Garmen", "Gerielin", "Glew", "Glu", "Hazel", "Hazzel", "Icorne", "Ise", "Isey", "Jean", "Jeanz", "Juce", "Jucey", "Kibini", "Kichey", "Kini", "Kinibi", "Kitchy", "Knaife", "Ladsa", "Ligh", "Lingee", "Lingie", "Lite", "Llowpi", "Melkey", "Milleke", "Naife", "Needle", "Noudelle", "Nucoco", "Painte", "Pannetey", "Pantee", "Parawne", "Payntee", "Penci", "Pentey", "Pillo", "Pilow", "Pista", "Prawne", "Puddey", "Puddy", "Qubey", "Raicey", "Raine", "Rayce", "Rayne", "Sala", "Saladi", "Sano", "Shewca", "Shisu", "Shorette", "Shortee", "Shrimme", "Shumay", "Shumi", "Sisso", "Skurtey", "Sladi", "Sno", "Sofai", "Sorsi", "Soufa", "Soye", "Spinro", "Spone", "Sprinro", "Srimpee", "Stachi", "Stapely", "Stapley", "Storme", "Stormey", "Sueshi", "Sumdi", "Susi", "Tabelle", "Tofi", "Tofue", "Tonwo", "Truffelle", "Truffs", "Undey", "Undi", "Wonto", "Yaso", "Yogi", "Yoguri"];

function generator$dragon_ball$humans(type) {
	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * namesFemale.length);
			names = namesFemale[rnd];
		} else {
			rnd = Math.floor(Math.random() * namesMale.length);
			names = namesMale[rnd];
		}
		return names;
	}

}