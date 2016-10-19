function generator$pathfinder$tians(type) {
	/* Tian-Dan - Vietnamese */
	var nm1 = ["", "", "", "b", "c", "ch", "d", "g", "h", "kh", "l", "m", "ng", "nh", "ph", "q", "s", "th", "t", "tr", "v", "x"];
	var nm2 = ["a", "ai", "ao", "i", "ia", "ie", "ieu", "o", "oa", "oai", "u", "ua", "ue", "ui", "uo", "uu"];
	var nm3 = ["", "c", "n", "ng", "nh", "t", "y"];
	var nm4 = ["", "", "", "b", "c", "ch", "d", "g", "h", "hy", "k", "kh", "l", "m", "n", "ng", "nh", "ph", "q", "s", "t", "th", "tr", "v", "x", "y"];
	var nm5 = ["a", "ai", "ao", "au", "e", "h", "i", "ia", "ie", "ieu", "iu", "o", "oa", "u", "ua", "ue", "uo"];
	var nm6 = ["", "", "", "c", "ch", "m", "n", "ng", "nh", "p", "t", "y"];
	var nm7 = ["b", "c", "ch", "d", "g", "h", "k", "kh", "l", "m", "ng", "nh", "nz", "ph", "q", "s", "t", "th", "tr", "v"];
	var nm8 = ["a", "ai", "ao", "au", "i", "ia", "ie", "ieu", "o", "oa", "oi", "oo", "ou", "u", "ua", "ue", "ui", "uo", "uu", "uy", "uye"];
	var nm9 = ["", "", "c", "ch", "m", "n", "ng", "nh", "p", "y"];
	/* Tian-Dtang - Cambodian/Khmer */
	var nm10 = ["b", "ch", "chh", "d", "h", "kh", "k", "kr", "l", "m", "n", "ph", "p", "pr", "r", "s", "sr", "th", "v"];
	var nm11 = ["oeu", "ou", "ea", "ei", "ia", "ao", "au", "ai", "uo", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm12 = ["b", "ch", "d", "h", "k", "kb", "kd", "kh", "kng", "kr", "ks", "ksm", "ktr", "l", "m", "mb", "ml", "mn", "mph", "mr", "n", "nch", "ngh", "ngs", "nkr", "nl", "nm", "nn", "nr", "ns", "nth", "ntr", "nv", "ny", "p", "ph", "r", "rk", "ry", "s", "sm", "sn", "t", "td", "th", "tt", "v", "y"];
	var nm13 = ["k", "l", "m", "n", "ng", "nn", "p", "r", "s", "th", "y"];
	var nm14 = ["b", "ch", "d", "j", "k", "kr", "l", "m", "n", "ph", "p", "r", "s", "sr", "t", "th", "v"];
	var nm15 = ["b", "ch", "d", "k", "kd", "kh", "kkl", "kr", "kry", "ksm", "l", "ll", "lth", "m", "mb", "md", "mj", "mp", "mph", "mr", "n", "nch", "nd", "ngs", "nkr", "nl", "nm", "nn", "nnl", "nt", "nth", "ntr", "nv", "ny", "p", "ph", "r", "rk", "rph", "rsd", "rt", "rv", "ry", "s", "sm", "sn", "sn", "t", "td", "th", "tr", "tt", "v", "vy", "w", "y", "yh", "ym", "yn", "yp"];
	var nm16 = ["ch", "k", "kry", "l", "lly", "ly", "m", "mphy", "n", "ng", "nn", "nny", "ny", "ry", "s", "ss", "th", "vy", "y"];
	var nm17 = ["b", "ch", "chh", "d", "h", "j", "k", "kh", "khl", "l", "m", "nh", "n", "p", "ph", "r", "s", "t", "th", "v", "y"];
	var nm18 = ["a", "aa", "ae", "ao", "e", "ea", "eo", "i", "ia", "ie", "o", "oe", "ou", "u", "uo"];
	var nm19 = ["ch", "k", "l", "m", "n", "ng", "r", "rn", "s", "t", "th", "v", "y"];
	/* Tian-Hwan - Korean*/
	var nm20 = ["b", "by", "ch", "d", "g", "h", "hy", "j", "k", "kw", "ky", "m", "my", "n", "p", "py", "s", "sh", "t", "w", "y"];
	var nm21 = ["a", "ae", "am", "an", "ang", "e", "ee", "ejun", "eo", "eon", "eong", "eung", "i", "ihu", "ihun", "in", "injae", "injun", "o", "ochun", "ohyon", "on", "ong", "onghyon", "ongmin", "onjun", "onu", "oo", "oon", "oung", "u", "uck", "uk", "ul", "un", "ung", "unghyon", "unho", "unso", "unyong", "uwon"];
	var nm22 = ["bok", "bong", "cheol", "chol", "chuk", "chul", "dae", "eun", "gi", "gu", "gun", "gyu", "hae", "han", "hee", "heon", "ho", "hoo", "hoon", "hu", "hui", "hun", "hwa", "hwan", "hyeon", "hyok", "hyon", "hyuk", "hyun", "il", "ja", "jae", "jin", "jo", "joon", "jun", "jung", "ki", "kyu", "kyung", "min", "mo", "mun", "nam", "sam", "sang", "seo", "seok", "seon", "seong", "shik", "sik", "song", "soo", "sook", "su", "sun", "sung", "tae", "u", "won", "woo", "wook", "woong", "yeol", "yeon", "yeong", "yol", "yong", "yoon", "young", "yul"];
	var nm23 = ["b", "ch", "d", "g", "gr", "h", "hy", "j", "k", "ky", "l", "m", "my", "n", "r", "ry", "s", "sh", "t", "w", "y"];
	var nm24 = ["a", "ae", "am", "an", "ang", "ara", "e", "ee", "eh", "eo", "eon", "eong", "eul", "eum", "eun", "eung", "i", "ihye", "ihyon", "im", "imin", "in", "inji", "inso", "it", "iyeon", "iyong", "iyun", "o", "ohyon", "on", "ong", "oo", "ook", "oon", "oung", "oyon", "oyun", "u", "ubin", "uk", "un", "ung", "unji", "unso"];
	var nm25 = ["ae", "ah", "ahn", "bi", "bin", "bon", "byul", "chae", "dong", "eum", "eun", "gyo", "gyong", "gyung", "ha", "hae", "hee", "ho", "hui", "hwa", "hyang", "hye", "hyo", "hyun", "hyung", "in", "ja", "jeong", "ji", "jin", "jong", "joo", "joong", "ju", "jung", "kyeong", "kyung", "min", "na", "neul", "ok", "ra", "rae", "rang", "ri", "rim", "rin", "ryung", "seo", "seon", "shil", "so", "song", "soo", "sook", "soon", "su", "suk", "sun", "u", "un", "won", "woo", "woon", "yeon", "yon", "yong", "yoon", "young", "yun", "yung"];
	var nm26 = ["Ae", "Ah", "An", "Ch'a", "Ch'ae", "Ch'ang", "Ch'o", "Ch'oe", "Ch'on", "Ch'u", "Cha", "Chang", "Changgok", "Che", "Chegal", "Chi", "Chin", "Cho", "Chom", "Chon", "Chong", "Chu", "Chun", "Chung", "Chup", "Chwa", "Eoh", "Ha", "Hae", "Hak", "Ham", "Han", "Ho", "Hong", "Hu", "Hung", "Hwa", "Hwan", "Hwang", "Hwangbo", "Hyon", "Hyong", "Im", "In", "Ka", "Kae", "Kal", "Kam", "Kan", "Kang", "Kangjon", "Ki", "Kil", "Kim", "Ko", "Kok", "Kong", "Ku", "Kuk", "Kum", "Kun", "Kung", "Kwak", "Kwok", "Kwon", "Kye", "Kyo", "Kyon", "Kyong", "Ma", "Mae", "Maeng", "Man", "Mangjol", "Mi", "Min", "Mo", "Mok", "Muk", "Mun", "Myo", "Myong", "Na", "Nae", "Nam", "Namgung", "Nan", "Nang", "No", "Noe", "Nu", "Ogum", "Oh", "Ok", "Om", "On", "Ong", "P'aeng", "P'an", "P'i", "P'il", "P'o", "P'ung", "P'yo", "P'yon", "P'yong", "Pae", "Paek", "Pak", "Pan", "Pang", "Pi", "Pin", "Ping", "Pok", "Pom", "Pong", "Pu", "Pyon", "Ra", "Ran", "Rang", "Ri", "Rim", "Ro", "Roe", "Ru", "Ryang", "Ryo", "Ryom", "Ryon", "Ryong", "Ryu", "Ryuk", "Sa", "Sagong", "Sam", "Sang", "Si", "Sim", "Sin", "Sip", "So", "Sobong", "Sok", "Sol", "Somun", "Son", "Song", "Sonu", "Sop", "Su", "Sun", "Sung", "T'ae", "T'ak", "T'an", "Tae", "Tam", "Tan", "Tang", "To", "Tokko", "Ton", "Tong", "Tongbang", "Tu", "Uh", "Um", "Un", "Wang", "Wi", "Won", "Wu", "Ya", "Yang", "Ye", "Yi", "Yo", "Yom", "Yon", "Yong", "Yop", "Yu", "Yuk", "Yun"];
	/* Tian-La - Mongolian */
	var nm27 = ["", "", "", "b", "c", "ch", "d", "dh", "g", "gh", "h", "j", "k", "kh", "l", "m", "n", "q", "s", "sh", "t", "th", "ts", "x", "y", "z", "zh"];
	var nm28 = ["aie", "aa", "ei", "aiu", "ua", "uu", "eio", "oi", "ai", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm29 = ["b", "cch", "ch", "d", "dk", "dy", "g", "gh", "ght", "gm", "gs", "j", "k", "kh", "khg", "khj", "kt", "l", "lb", "lch", "ld", "lg", "lgh", "lj", "lt", "lz", "m", "mb", "ml", "n", "nb", "ndj", "ng", "ngg", "ngs", "nksh", "nt", "nz", "q", "r", "rch", "rd", "rg", "rgh", "rk", "rkh", "rt", "s", "sg", "sh", "sl", "t", "tb", "tg", "tl", "ts", "y", "z", "zb", "zh"];
	var nm30 = ["", "", "", "d", "g", "gh", "gt", "l", "ld", "m", "n", "nt", "r", "t", "y"];
	var nm31 = ["", "", "", "b", "ch", "c", "d", "dh", "g", "gh", "h", "j", "k", "kh", "l", "m", "n", "s", "sh", "t", "th", "ts", "y", "z", "zh"];
	var nm32 = ["aa", "ui", "ei", "oa", "ui", "ai", "uu", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm33 = ["b", "ch", "d", "dts", "dv", "g", "gch", "gh", "gm", "gtb", "j", "k", "kh", "khg", "khts", "l", "lj", "lm", "lt", "m", "mb", "n", "nb", "nch", "ng", "nkhh", "nkht", "nkhts", "nts", "nts", "nz", "q", "r", "rb", "rd", "rdz", "rg", "rgh", "rm", "rt", "rz", "s", "t", "ts", "tts", "y", "z"];
	var nm34 = ["", "", "", "d", "g", "gh", "l", "m", "n", "r", "sh"];
	/* Tian-Min - Japanese */
	var nm35 = ["a", "ba", "bai", "be", "bo", "bu", "chi", "da", "dai", "ei", "fu", "ga", "ge", "gi", "go", "ha", "hei", "hi", "ho", "hyo", "i", "ie", "jo", "ju", "ka", "ke", "kei", "ki", "ko", "ku", "kyu", "ma", "mi", "mo", "mu", "na", "nao", "ni", "no", "o", "ri", "ro", "ryo", "ryu", "sa", "se", "sei", "shi", "sho", "shu", "so", "su", "ta", "te", "tei", "to", "tsu", "u", "wa", "ya", "yo", "yu"];
	var nm36 = ["bumi", "buro", "buru", "chemon", "chi", "chiro", "chiyo", "chizo", "dayu", "deki", "do", "fu", "fumi", "gobei", "goro", "hari", "haru", "hide", "hiko", "hira", "hiro", "hisa", "hito", "ji", "jio", "jiro", "juro", "kado", "kan", "kao", "karu", "kazu", "kei", "ki", "kichi", "kin", "kio", "kira", "ko", "koto", "kuchu", "kudo", "kumi", "kuni", "kusai", "kushi", "kusho", "kuzo", "mane", "maro", "masu", "matsu", "mei", "miaki", "michi", "mio", "mitsu", "mon", "mori", "moru", "moto", "mune", "nabu", "naga", "nari", "nji", "njiro", "nkei", "nko", "nobu", "nori", "noru", "noto", "noye", "npaku", "nshiro", "ntaro", "nzo", "rata", "rei", "ro", "roji", "roshi", "ru", "sada", "sake", "saku", "sami", "samu", "sashi", "sato", "seki", "setsu", "shashi", "shi", "shige", "shiko", "shiro", "sho", "shushu", "soshi", "su", "suke", "suki", "ta", "tada", "taka", "tane", "tari", "taro", "taru", "toki", "toku", "tomo", "tora", "toshi", "tsu", "tsugu", "tsumi", "tsuna", "tsune", "tsuta", "tsuyo", "tzumi", "wane", "yaki", "yasu", "yori", "yoshi", "yuki", "zane", "zo", "zuka", "zuki", "zuko", "zuma", "zumi", "zumo", "zushi"];
	var nm37 = ["a", "ai", "ba", "be", "chi", "e", "ei", "fu", "ge", "ha", "hai", "hi", "ho", "i", "jo", "ka", "kae", "ki", "ko", "ku", "ma", "mae", "me", "mi", "mo", "mu", "na", "nao", "ni", "no", "o", "rai", "rei", "ri", "ro", "ru", "sa", "sai", "se", "shi", "su", "ta", "te", "to", "tsu", "u", "wa", "ya", "yae", "yo", "yu"];
	var nm38 = ["bari", "chi", "chiha", "chiho", "chiko", "cho", "deko", "doka", "fumi", "fuyu", "gino", "gusa", "haru", "hiro", "ho", "hoko", "homi", "hori", "jiko", "ka", "kage", "kako", "kami", "kane", "kari", "karu", "kaze", "ki", "kichi", "kiko", "kina", "kio", "kira", "ko", "koto", "kuko", "kuma", "kuro", "kyo", "maki", "mako", "mari", "maya", "meka", "meko", "mi", "miho", "mika", "miki", "miko", "mina", "miri", "miya", "mugi", "na", "nae", "nai", "nako", "nami", "natsu", "neka", "neko", "niko", "no", "noka", "nomi", "noue", "nu", "nuko", "nuye", "nuyo", "ra", "rako", "rante", "rari", "rea", "ri", "rika", "riko", "rime", "rimi", "rino", "risa", "risu", "rize", "ro", "roe", "roko", "romi", "roshi", "ru", "rui", "ruka", "ruko", "rumi", "sa", "sae", "sahi", "saji", "saki", "sako", "sami", "samu", "sano", "sato", "se", "shi", "shiko", "shiyo", "soko", "sono", "suka", "suki", "sumi", "suzu", "taba", "tako", "taru", "to", "tomi", "tomo", "tose", "toshi", "tsu", "tsue", "tsuka", "tsuko", "tsumi", "tsune", "tsuyo", "yaka", "yako", "yame", "yano", "yeko", "yo", "yu", "yuka", "yuki", "yuko", "yume", "yumi", "yuri", "zami", "zu", "zue", "zuki", "zuko", "zumi", "zuru", "zusa"];
	var nm39 = ["a", "aka", "ama", "ao", "ara", "asa", "ashi", "azu", "chi", "e", "fu", "fuji", "fuku", "furu", "go", "ha", "hagi", "hama", "hara", "hata", "haya", "hi", "hira", "hiro", "ho", "i", "ichi", "iga", "ike", "ima", "ina", "ise", "ishi", "iwa", "ka", "kaga", "kane", "kawa", "ki", "kishi", "kita", "ko", "koya", "ku", "kura", "kuri", "kuro", "kusu", "ma", "mae", "masu", "matsu", "mi", "mika", "miya", "mo", "mori", "mu", "mura", "na", "naga", "naka", "ni", "nishi", "no", "nomu", "nona", "o", "oga", "oka", "oku", "osa", "sa", "saka", "saku", "sawa", "saza", "se", "shi", "shiba", "shima", "shimi", "shimo", "shino", "so", "su", "suga", "sugi", "sumi", "ta", "taba", "tachi", "taga", "taha", "taka", "tama", "tana", "tani", "te", "tera", "to", "toku", "tsu", "u", "ue", "uye", "wa", "waka", "wata", "ya", "yama", "yoko", "yoshi"];
	var nm40 = ["ba", "bara", "bashi", "bata", "be", "bota", "chi", "chida", "da", "dama", "gai", "gamine", "gano", "gashi", "gata", "gawa", "gi", "guchi", "hara", "hira", "hita", "jima", "jino", "kada", "kaga", "kai", "kaki", "kama", "kami", "kawa", "ki", "kino", "kuchi", "kuda", "kui", "ma", "mada", "magai", "mano", "mari", "matsu", "maya", "mei", "mine", "miya", "mori", "moto", "mura", "naga", "nagi", "nai", "naka", "name", "nda", "ndo", "neko", "nishi", "nno", "no", "ra", "rada", "rai", "rano", "rashi", "rata", "raya", "ri", "rine", "rino", "rita", "roda", "rose", "rota", "ruta", "ruya", "sai", "saki", "sano", "sato", "sawa", "se", "shi", "shida", "shigawa", "shige", "shima", "shino", "shiro", "shita", "suda", "ta", "tani", "to", "tori", "tsuda", "tsuno", "wa", "wano", "wara", "wata", "ya", "yabu", "yake", "yama", "yashi", "yata", "yeda", "yoshi", "zaki", "zuki", "zuma", "zumi"];
	/* Tian-Shu - Chinese */
	var nm41 = ["b", "ch", "d", "f", "g", "h", "j", "k", "l", "m", "p", "q", "r", "sh", "s", "t", "ts", "w", "x", "y", "z", "zh"];
	var nm42 = ["ai", "uo", "ao", "eu", "ia", "ua", "uo", "ei", "ui", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm43 = ["ch", "d", "g", "h", "j", "k", "l", "m", "n", "nch", "nf", "ng", "ngb", "ngf", "ngg", "ngh", "ngk", "ngl", "ngm", "ngp", "ngq", "ngsh", "ngw", "ngx", "ngzh", "nh", "nj", "nl", "nm", "nsh", "ny", "nz", "q", "r", "sh", "t", "w", "x", "y", "z", "zh"];
	var nm44 = ["", "", "", "n", "ng"];
	var nm45 = ["b", "ch", "c", "d", "f", "g", "h", "j", "k", "kw", "l", "m", "n", "p", "q", "r", "sh", "s", "t", "w", "x", "y", "zh", "z"];
	var nm46 = ["ao", "ua", "ai", "ui", "ia", "ei", "ue", "iu", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm47 = ["b", "c", "ch", "d", "f", "h", "hw", "j", "k", "l", "m", "n", "nd", "nf", "ng", "ngch", "ngg", "ngh", "ngj", "ngl", "ngm", "ngt", "ngx", "ngy", "ngzh", "nh", "nl", "nm", "nq", "nr", "nt", "nx", "ny", "nzh", "q", "r", "sh", "t", "w", "x", "y", "zh"];
	var nm48 = ["b", "c", "ch", "d", "f", "g", "h", "hs", "hw", "j", "k", "kh", "kw", "l", "m", "n", "p", "q", "r", "s", "sh", "sz", "t", "ts", "w", "x", "y", "zh", "z"];
	var nm49 = ["ai", "ao", "au", "ee", "ea", "eo", "eu", "ia", "iao", "ie", "io", "ua", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	/* Tian-Sing - Indonesian */
	var nm50 = ["b", "c", "d", "dj", "dw", "g", "h", "j", "kr", "k", "p", "r", "s", "sl", "t", "tr", "w", "y"];
	var nm51 = ["ua", "ia", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm52 = ["b", "d", "dd", "dw", "g", "h", "hy", "j", "k", "l", "m", "mb", "md", "n", "nd", "ndr", "ngk", "nn", "nt", "o", "r", "rj", "rm", "rn", "rt", "rw", "ry", "s", "sk", "sn", "t", "tr", "v", "w", "y"];
	var nm53 = ["", "", "", "h", "n", "ng", "r", "s", "t"];
	var nm54 = ["b", "c", "d", "dw", "f", "gl", "h", "k", "l", "m", "n", "p", "r", "s", "sh", "sr", "tr", "v", "w", "y"];
	var nm55 = ["ia", "eo", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
	var nm56 = ["c", "d", "dy", "g", "h", "hy", "k", "l", "m", "nn", "nt", "nd", "ng", "nn", "nt", "r", "rj", "rl", "rm", "rt", "s", "sk", "st", "t", "th", "tn", "tr", "v", "w", "y"];
	var nm57 = ["", "", "", "h", "n", "r"];


	i = Math.floor(Math.random() * 14); {
		if (type === 1) {
			if (i < 2) {
				rnd = Math.floor(Math.random() * nm4.length);
				rnd2 = Math.floor(Math.random() * nm5.length);
				rnd3 = Math.floor(Math.random() * nm6.length);
				if (rnd < 3) {
					while (rnd3 < 3) {
						rnd3 = Math.floor(Math.random() * nm6.length);
					}
				}
				rnd4 = Math.floor(Math.random() * nm7.length);
				rnd5 = Math.floor(Math.random() * nm8.length);
				rnd6 = Math.floor(Math.random() * nm9.length);
				names = nm7[rnd4] + nm8[rnd5] + nm9[rnd6] + "  " + nm4[rnd] + nm5[rnd2] + nm6[rnd3];
			} else if (i < 4) {
				rnd = Math.floor(Math.random() * nm14.length);
				rnd2 = Math.floor(Math.random() * nm11.length);
				rnd3 = Math.floor(Math.random() * nm15.length);
				rnd4 = Math.floor(Math.random() * nm11.length);
				rnd5 = Math.floor(Math.random() * nm16.length);
				rnd6 = Math.floor(Math.random() * nm17.length);
				rnd7 = Math.floor(Math.random() * nm18.length);
				rnd8 = Math.floor(Math.random() * nm19.length);
				names = nm17[rnd6] + nm18[rnd7] + nm19[rnd8] + "  " + nm14[rnd] + nm11[rnd2] + nm15[rnd3] + nm11[rnd4] + nm16[rnd5];
			} else if (i < 6) {
				rnd = Math.floor(Math.random() * nm23.length);
				rnd2 = Math.floor(Math.random() * nm24.length);
				rnd3 = Math.floor(Math.random() * nm25.length);
				rnd4 = Math.floor(Math.random() * nm26.length);
				names = nm26[rnd4] + "  " + nm23[rnd] + nm24[rnd2] + "  " + nm25[rnd3];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm31.length);
				rnd2 = Math.floor(Math.random() * nm32.length);
				rnd3 = Math.floor(Math.random() * nm33.length);
				rnd4 = Math.floor(Math.random() * nm32.length);
				rnd5 = Math.floor(Math.random() * nm34.length);
				if (rnd < 3) {
					while (rnd5 < 3) {
						rnd5 = Math.floor(Math.random() * nm34.length);
					}
				}
				names = nm31[rnd] + nm32[rnd2] + nm33[rnd3] + nm32[rnd4] + nm34[rnd5];
			} else if (i < 10) {
				rnd = Math.floor(Math.random() * nm37.length);
				rnd2 = Math.floor(Math.random() * nm38.length);
				rnd3 = Math.floor(Math.random() * nm39.length);
				rnd4 = Math.floor(Math.random() * nm40.length);
				names = nm39[rnd3] + nm40[rnd4] + "  " + nm37[rnd] + nm38[rnd2];
			} else if (i < 12) {
				rnd = Math.floor(Math.random() * nm45.length);
				rnd2 = Math.floor(Math.random() * nm46.length);
				rnd3 = Math.floor(Math.random() * nm47.length);
				rnd4 = Math.floor(Math.random() * nm46.length);
				rnd5 = Math.floor(Math.random() * nm44.length);
				rnd6 = Math.floor(Math.random() * nm48.length);
				rnd7 = Math.floor(Math.random() * nm49.length);
				names = nm48[rnd6] + nm49[rnd7] + "  " + nm45[rnd] + nm46[rnd2] + nm47[rnd3] + nm46[rnd4] + nm44[rnd5];
			} else {
				rnd = Math.floor(Math.random() * nm54.length);
				rnd2 = Math.floor(Math.random() * nm55.length);
				rnd3 = Math.floor(Math.random() * nm56.length);
				rnd4 = Math.floor(Math.random() * nm55.length);
				rnd5 = Math.floor(Math.random() * nm57.length);
				names = nm54[rnd] + nm55[rnd2] + nm56[rnd3] + nm55[rnd4] + nm57[rnd5];
			}
		} else {
			if (i < 2) {
				rnd = Math.floor(Math.random() * nm1.length);
				rnd2 = Math.floor(Math.random() * nm2.length);
				rnd3 = Math.floor(Math.random() * nm3.length);
				if (rnd < 3) {
					while (rnd3 === 0) {
						rnd3 = Math.floor(Math.random() * nm3.length);
					}
				}
				rnd4 = Math.floor(Math.random() * nm7.length);
				rnd5 = Math.floor(Math.random() * nm8.length);
				rnd6 = Math.floor(Math.random() * nm9.length);
				names = nm7[rnd4] + nm8[rnd5] + nm9[rnd6] + "  " + nm1[rnd] + nm2[rnd2] + nm3[rnd3];
			} else if (i < 4) {
				rnd = Math.floor(Math.random() * nm10.length);
				rnd2 = Math.floor(Math.random() * nm11.length);
				rnd3 = Math.floor(Math.random() * nm12.length);
				rnd4 = Math.floor(Math.random() * nm11.length);
				rnd5 = Math.floor(Math.random() * nm13.length);
				rnd6 = Math.floor(Math.random() * nm17.length);
				rnd7 = Math.floor(Math.random() * nm18.length);
				rnd8 = Math.floor(Math.random() * nm19.length);
				names = nm17[rnd6] + nm18[rnd7] + nm19[rnd8] + "  " + nm10[rnd] + nm11[rnd2] + nm12[rnd3] + nm11[rnd4] + nm13[rnd5];
			} else if (i < 6) {
				rnd = Math.floor(Math.random() * nm20.length);
				rnd2 = Math.floor(Math.random() * nm21.length);
				rnd3 = Math.floor(Math.random() * nm22.length);
				rnd4 = Math.floor(Math.random() * nm26.length);
				names = nm26[rnd4] + "  " + nm20[rnd] + nm21[rnd2] + "  " + nm22[rnd3];
			} else if (i < 8) {
				rnd = Math.floor(Math.random() * nm27.length);
				rnd2 = Math.floor(Math.random() * nm28.length);
				rnd3 = Math.floor(Math.random() * nm29.length);
				rnd4 = Math.floor(Math.random() * nm28.length);
				rnd5 = Math.floor(Math.random() * nm30.length);
				if (rnd < 3) {
					while (rnd5 < 3) {
						rnd5 = Math.floor(Math.random() * nm30.length);
					}
				}
				names = nm27[rnd] + nm28[rnd2] + nm29[rnd3] + nm28[rnd4] + nm30[rnd5];
			} else if (i < 10) {
				rnd = Math.floor(Math.random() * nm35.length);
				rnd2 = Math.floor(Math.random() * nm36.length);
				rnd3 = Math.floor(Math.random() * nm39.length);
				rnd4 = Math.floor(Math.random() * nm40.length);
				names = nm39[rnd3] + nm40[rnd4] + "  " + nm35[rnd] + nm36[rnd2];
			} else if (i < 12) {
				rnd = Math.floor(Math.random() * nm41.length);
				rnd2 = Math.floor(Math.random() * nm42.length);
				rnd3 = Math.floor(Math.random() * nm43.length);
				rnd4 = Math.floor(Math.random() * nm42.length);
				rnd5 = Math.floor(Math.random() * nm44.length);
				rnd6 = Math.floor(Math.random() * nm48.length);
				rnd7 = Math.floor(Math.random() * nm49.length);
				names = nm48[rnd6] + nm49[rnd7] + "  " + nm41[rnd] + nm42[rnd2] + nm43[rnd3] + nm42[rnd4] + nm44[rnd5];
			} else {
				rnd = Math.floor(Math.random() * nm50.length);
				rnd2 = Math.floor(Math.random() * nm51.length);
				rnd3 = Math.floor(Math.random() * nm52.length);
				rnd4 = Math.floor(Math.random() * nm51.length);
				rnd5 = Math.floor(Math.random() * nm53.length);
				names = nm50[rnd] + nm51[rnd2] + nm52[rnd3] + nm51[rnd4] + nm53[rnd5];
			}
		}
		return names;
	}

}