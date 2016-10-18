var names1 = ["Arida", "Asa", "Bira", "En", "Fuji", "Funa", "Furu", "Hashi", "Haya", "Hon", "Horo", "Iwa", "Jami", "Kamisu", "Ken", "Kiko", "Kimo", "Kiyo", "Kuma", "Kumi", "Kuri", "Kuro", "Kuzu", "Matsu", "Mina", "Miya", "Mutsu", "Naga", "Naka", "Nakashi", "Nara", "Oku", "Ran", "Shako", "Shi", "Shima", "Shin", "Shinto", "Shira", "Sou", "Taka", "Tate", "Tawa", "Tawara", "Tou", "Ura", "Wata", "Ya", "Yaha", "Yaku", "Yama", "Yoko", "Yuga"];
var names2 = ["betsu", "biro", "buchi", "daka", "furano", "gata", "gawa", "haba", "hama", "hidaka", "homa", "horo", "kami", "kanai", "kawa", "kita", "konai", "koshi", "kotan", "kumo", "maki", "mamoto", "matsunai", "moto", "nagawa", "nai", "nobe", "nokawa", "nouchi", "raha", "ramoto", "rano", "raoi", "saki", "sato", "shibetsu", "shihoro", "shina", "shiri", "sunai", "tama", "tari", "tori", "toro", "tsukawa", "wara", "yako", "yama", "zaki", "zawa"];
var names3 = ["Bao", "Chang", "Dan", "Dong", "Feng", "Fu", "Guang", "Gui", "Hang", "Heng", "Jiang", "Jiao", "Jin", "Kara", "Liao", "Mei", "Mian", "Mudan", "Nan", "Pan", "Ping", "Qi", "Qin", "Qing", "Qu", "Quan", "Shan", "Shang", "Shao", "Shi", "Shizui", "Su", "Tai", "Tang", "Teng", "Tong", "Xian", "Xiang", "Xin", "Xu", "Xuan", "Yuan", "Yue", "Zhao", "Zhen", "Zhong", "Zhou", "Zoa"];
var names4 = ["chang", "cheng", "chong", "chun", "dao", "dong", "ging", "gong", "guan", "hai", "har", "hou", "hua", "jiang", "jing", "liang", "may", "men", "ping", "qihar", "qiu", "ramay", "rao", "shan", "shu", "shui", "tong", "tou", "wei", "xiang", "xing", "yang", "ying", "yuan", "zhou", "zihua", "zou", "zuishan"];
var names5 = ["Altan", "Ba", "Baat", "Baga", "Baruun", "Batt", "Bayan", "Bi", "Bu", "Bul", "Bulan", "Buut", "Chand", "Choi", "Chu", "Chuluun", "Dar", "Del", "Dulaan", "Er", "Erdene", "Ga", "Gurvan", "Guu", "Han", "Jan", "Jar", "Jav", "Kha", "Khair", "Khar", "Kher", "Kherlen", "Khon", "Khot", "Khu", "Khyal", "Khyar", "Mal", "Man", "Na", "Naran", "Nogoon", "Nom", "On", "Or", "Sa", "Sai", "Sal", "Shar", "Sharyn", "Shi", "Shine", "Tai", "Taria", "Tsen", "Ulaan", "Zuun"];
var names6 = ["bayan", "bulag", "chivlin", "dene", "ga", "gaa", "gai", "galan", "galant", "galjuut", "gana", "ganuur", "gas", "gat", "ger", "gol", "gon", "gor", "horoot", "jinst", "kh", "khaan", "khan", "khangai", "khet", "khir", "khit", "khlant", "khon", "khorin", "lan", "lig", "lin", "liun", "luut", "mandal", "mani", "nuur", "raat", "ran", "ryngol", "sagaan", "sai", "sengel", "serleg", "shaat", "shir", "sogt", "tai", "teeg", "tont", "tooroi", "tsogt", "turuun", "vi", "yant"];
var names7 = ["An", "Bor", "Cheo", "Chun", "Chung", "Cong", "Dang", "Dong", "Gang", "Gim", "Gwa", "Gwang", "Gyeong", "Gyer", "Hae", "Ham", "Hoer", "Hui", "Hye", "Ik", "Je", "Jeon", "Jin", "Kae", "Kang", "Kim", "Ku", "Man", "Mung", "Na", "Nam", "Non", "Po", "Pyong", "Ra", "Sam", "Sari", "Seo", "Sin", "Sinui", "Sok", "Sun", "Tae", "Tan", "Tok", "Ui", "Won", "Yang", "Yeo"];
var names8 = ["baek", "chaek", "cheok", "cheon", "cho", "chon", "dong", "geup", "gye", "hae", "hung", "je", "jin", "ju", "nan", "neung", "po", "san", "seong", "song", "su", "wang", "won", "yeong", "yong"];

function generator$towns_and_cities$east_asian_towns() {

	i = Math.floor(Math.random() * 10); {
		if (i < 3) {
			rnd0 = Math.floor(Math.random() * names1.length);
			rnd1 = Math.floor(Math.random() * names2.length);
			names = names1[rnd0] + names2[rnd1];
		} else if (i < 5) {
			rnd0 = Math.floor(Math.random() * names3.length);
			rnd1 = Math.floor(Math.random() * names4.length);
			names = names3[rnd0] + names4[rnd1];
		} else if (i < 7) {
			rnd0 = Math.floor(Math.random() * names5.length);
			rnd1 = Math.floor(Math.random() * names6.length);
			names = names5[rnd0] + names6[rnd1];
		} else {
			rnd0 = Math.floor(Math.random() * names7.length);
			rnd1 = Math.floor(Math.random() * names8.length);
			names = names7[rnd0] + names8[rnd1];
		}
		return names;
	}

}