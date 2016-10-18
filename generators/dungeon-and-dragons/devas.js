var namesFem = ["Abea", "Adara", "Asha", "Chana", "Danel", "Darah", "Davi", "Elka", "Eranah", "Hania", "Hava", "Idria", "Isa", "Jael", "Kana", "Kayah", "Lihi", "Mahel", "Marek", "Navah", "Noma", "Paziah", "Ravah", "Riya", "Sada", "Shara", "Tirah"];
var namesFemF = ["Ab", "Ad", "An", "Ar", "Ash", "Chan", "Dan", "Dar", "Dav", "Din", "Elk", "Eran", "Eys", "Han", "Hav", "Hen", "Idr", "Is", "Jan", "Jen", "Kal", "Kan", "Kay", "Len", "Lih", "Mah", "Mar", "Nal", "Nav", "Nom", "Paz", "Rav", "Ren", "Riy", "Sad", "Shar", "Sir", "Tar", "Tel", "Tir"];
var namesFemL = ["a", "ael", "aen", "ah", "ahne", "ana", "anaeh", "anael", "anah", "ane", "anel", "aniah", "ara", "araeh", "are", "ariah", "ea", "ehl", "ek", "el", "ele", "elle", "era", "ey", "eya", "i", "ia", "iah", "im", "ima"];
var namesMale = ["Adiah", "Ansis", "Ayab", "Bavak", "Beriah", "Eben", "Elyas", "Galad", "Gamal", "Hiyal", "Iannes", "Kerem", "Mahar", "Marach", "Mathas", "Natan", "Nehem", "Oris", "Raham", "Ronen", "Samel", "Sered", "Tavar", "Vered", "Zachar"];
var namesMaleF = ["Ad", "Ans", "Ars", "Ay", "Bav", "Ber", "Dar", "Eb", "Ely", "Er", "Ery", "Gal", "Gam", "Gar", "Hiy", "Iann", "Ker", "Mah", "Mahr", "Man", "Mar", "Math", "Mor", "Nat", "Neh", "Ner", "Ob", "Or", "Rah", "Ron", "Sam", "Sav", "Ser", "Sor", "Tar", "Tav", "Vat", "Ver", "Zach", "Zay"];
var namesMaleL = ["ab", "ach", "ad", "ahk", "ahm", "ahn", "ahr", "ak", "al", "am", "an", "ar", "as", "ath", "eb", "ech", "ed", "ehr", "ek", "el", "em", "en", "er", "es", "iah", "ihm", "ihn", "im", "in", "ir", "is"];

function generator$dungeon_and_dragons$devas(type) {

	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			if (i < 9) {
				rnd = Math.floor(Math.random() * namesFemF.length);
				rnd2 = Math.floor(Math.random() * namesFemL.length);
				names = namesFemF[rnd] + namesFemL[rnd2];
			} else {
				rnd = Math.floor(Math.random() * namesFem.length);
				names = namesFem[rnd];
			}
		} else {
			if (i < 9) {
				rnd = Math.floor(Math.random() * namesMaleF.length);
				rnd2 = Math.floor(Math.random() * namesMaleL.length);
				names = namesMaleF[rnd] + namesMaleL[rnd2];
			} else {
				rnd = Math.floor(Math.random() * namesMale.length);
				names = namesMale[rnd];
			}
		}
		return names;
	}

}