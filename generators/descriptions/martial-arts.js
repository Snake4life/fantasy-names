var nm1 = ["Bolenoe", "Chiknu", "Chorea-Crava", "Chu Gwiara", "Chukmul", "Cogre Kenku", "Croonkenzu", "Crucho Bistia", "Deochaju", "Dintingaa", "Dorohla", "Dunari", "Eenshi", "Endia", "Geche Gimpia", "Goupo Vuati", "Grupeo Chuto", "Guthwou", "Hanhim", "Hintihte", "Injashi", "Jorin", "Jothe", "Ju-Monbung", "Kekil", "Khrastao", "Kukmakyu", "Kutte", "Lantirmai", "Let Aeshia", "Maihtihta", "Mindihlu", "Neacela", "Nejaesh", "Nevoo-Crinchi", "Ngairmeni", "Ngobambo", "Nhobyai", "Nhunshulo", "Nogwaimbo", "Nunde-Gagri", "Ochku", "Ostundo", "Oukwom Hwum", "Saambermo", "Stipu Iku", "Taigwambu", "Tosale", "Voitse", "Vusi"];
var nm2 = ["defensive", "mostly defensive", "strictly defensive", "defensive and offensive", "partially offensive and partially defensive", "mixed", "offensive", "mostly offensive", "strictly offensive"];
var nm3 = ["disabling", "disenabling", "subduing", "exhausting", "immobilizing", "incapacitating", "knocking out", "paralyzing", "taking down", "outmaneuvering", "undermining", "defeating", "crushing", "overpowering", "overwhelming", "overthrowing", "beating", "decimating", "demolishing", "thrashing", "crippling", "clobbering", "steamrolling"];
var nm4 = ["with a minimum expenditure of your own energy", "through quick and very specific movements", "by utilizing pressure points on the body", "by taking advantage of every opening in your opponent's defense", "by using your opponents own energy against them", "through quick dodges and steadfast retaliations", "by focusing on weaker parts of your opponents body", "through exploiting weak and vulnerable areas of the body", "by disrupting your opponents movements", "by manipulating your opponents limbs at their joints", "through preferably a single, fierce retaliating movement", "by exploiting weakness in your opponent and using your body's own strengths", "by taking advantage of the openings your opponent will leave whenever they attack", "through a constant build up of momentum and disrupting the momentum of your opponent", "through utilizing every available weakness in your opponents defense and body", "by dodging attacks and thus both exhausting your opponent and causing an exploitable opening", "through keeping an impenetrable defense and thus forcing your opponent to open one in theirs when they attack", "by figuring out your opponents strengths and defending against those, forcing them to change their attack", "by constantly shifting both your and your opponents center of gravity", "by focusing solely on your opponents movements, figuring out their weakness and exploiting it", "through a series of incredibly swift attacks", "by disorienting your opponent through quick movements and disruptive attacks", "by exploiting your body's strongest parts against the weakest of your opponent", "by barraging your opponent with countless fierce strikes and thus forcing him to stay defensive", "through fierce attacks on your opponents weaker body parts", "by constantly hammering your opponent with relentless and often dirty attacks", "through very precise and well timed strikes", "through minimal, but relentless and very precise strikes", "by exploiting sensitive points in your opponents body", "by focusing all your energy into a few precise attacks", "through manipulation and exploitation of your opponents weaknesses", "through swift dodges, quick movements and even faster attacks", "through quick and swift strikes and utilizing different centers of gravity", "by using every stronger point of your body as a possible weapon", "by shifting energies in your body to soften the blows you receive and strengthen the ones you hand out", "by focusing entirely on maximizing your own natural strengths and minimizing your weaknesses", "by patiently waiting for an opening before unleashing your power swiftly", "by converting the energy and momentum of your opponent into that of your own and using it against them", "through subtle body shifts to deflect your opponents attacks and create openings to retaliate", "through a rapid succession of strike after strike on vital and vulnerable parts of your opponents' bodies"];
var nm5 = ["agility", "blocking", "blocks", "choke holds", "deflection", "elbow jabs", "foot sweeps", "grapples", "headbutts", "joint locks", "kicks", "knee strikes", "open hand techniques", "pressure points", "punches", "quick movements", "shifts in balance", "sidesteps", "speed", "throws"];
var nm6 = ["speed", "agility", "reflexes", "strength", "stamina", "endurance", "flexibility", "quick thinking"];
var nm7 = [" of yourself and your opponent", ", or lack thereof, of your opponent", " of yourself primarily, but also of your opponent", " of yourself", " of the defender", " of the attacker", " of both the attacker and defender"];
var nm8 = ["the way your opponents' attacks are used against them", "the element of surprise via quick and sudden movements", "the mastery of your body's strongest points", "being able to fully utilize your body's full arsenal of potential weapons", "the way you're able to deal out strikes without taking too many yourself", "the focus on accuracy and precision when it comes to dealing with your opponent", "that it only takes one solid retaliation to deal with your opponent", "its adaptability, allowing you to change at a moment's notice", "the knowledge of when and where to strike and doing so with incredible precision", "having the exploitable knowledge of where the weak points are in the body", "wielding great power without wielding any actual weapons, just you and your body", "versatility and speed, allowing you to use a wide array of tricks", "high endurance, which makes sure you'll be able to outlast your opponent", "the ability to take a great deal of punishment without allowing any serious damage to be done", "an incredibly strong sense of balance, making you almost immovable", "using the acrobatic movements to your advantage", "the way you're able to use leverage to overpower those who are bigger and stronger than you", "that you'll be able to outlast opponents through patience and taking punishment the right way", "being able to disorient your opponents and thus causing them to leave openings", "being quite well rounded and thus giving you a bag of tricks for all sorts of situations", "the combination of both strength and speed, resulting in powerful strikes", "the speed with which an opponent can be overpowered", "the way practitioners remain calm and calculated at all times, resulting in high precision strikes", "the high amounts of energy put behind every single strike", "the pure and raw amount of both focus and energy given to each movement", "the ability to be both light footed and agile, as well as steady and unmovable", "being able to keep distance between you and your opponent, but all while still being able to strike", "an adaptability to personal styles, strength and weaknesses", "a lack of nonsense and a pure focus on efficiency", "making your opponent do all the work and put in all the energy", "the effective use of all limbs and in fact all body parts", "the ease with which you can learn it, but the dedication that goes into mastering it", "that it's not a pretty style, but focuses more on real life situations", "the ability to continue fighting even after suffering heavy injuries", "its brutality. It's fierce and contains moves illegal in most other arts", "the integration of techniques from other styles, creating a more well rounded style as a result", "the inclusion of weapon, or anti-weapon, based techniques", "an incredible close range power and agility", "physical flexibility, allowing you to move and take punishments in ways others can't", "that it's very in your face and can quickly become overwhelming for the opponent"];
var nm9 = ["exploiting", "capitalizing", "manipulating", "profiting from", "utilizing", "taking advantage of"];
var nm10 = ["yourself", "your challenger", "both fighters"];
var nm11 = ["blocks", "deflections", "pressure points", "quick movements", "shifts in balance", "sidesteps", "speed", "shifts in the centers of gravity", "sense of balance", "sheer strength"];
var nm12 = ["can often be caught off guard", "may overextend themselves", "can be thrown off balance", "is likely to exhaust themselves", "will likely leave an opening", "tends to overexert themselves", "can be driven into a position you want them to be", "will have to adapt and thus leave openings", "has no choice but to change their stance", "tends to tire out pretty quickly", "can become overconfident and leave an opening", "tends to become frustrated as none of their strikes hit", "is often unable to respond in time", "often lacks the knowledge to respond well enough", "may become infuriated or just frustrated"];
var nm13 = ["making them easy to overmaster", "giving you the perfect opportunities to retaliate", "allowing you to become an overwhelming force", "giving you the opportunity to gain the upper hand", "making it easier to overcome their strengths", "further giving your strengths the upper hand", "which helps defend your weaknesses more", "helping you stay in control of the fight", "allowing you to be the dominant force in this encounter", "further giving you leverage to work with", "which just helps pave the road to victory", "which is a huge advantage in and of itself", "which puts them right where you want them to be", "something you'll be able to take full advantage of", "allowing you to capitalize on your biggest strengths"];
var nm14 = ["a lack of ground techniques. Once you're on the ground", "a lack of more circular movements. If you're up against an opponent who dances around you", "that it requires a great deal of mastery. So if you're still relatively new to this style", "that opposite styles tend to gain the upper hand more easily. So if facing such an opponent", "that it often requires the opponent to make the first move. If you're facing an opponent that doesn't", "that it requires you to react incredibly fast. So until you've training your reflexes", "that there are too many different styles. So until you've mastered enough", "a lack of some very crucial real life applicable skills. So if you're in a real fight", "a lack of potentially lethal moves. Not a big weakness, but needed in some situations and in those cases", "the illegal moves in this art are easily used and exploited by others. When your opponent doesn't fight with the same rules", "that multiple opponents can become overwhelming very quickly. If you ever face 3 or more opponents", "that this is a purely one on one style. When facing multiple opponents", "a lack of dirty tricks that are used in real life. So whenever facing an opponent outside of sporting events", "that many moves are predictable to a knowledgeable opponent. If you face an opponent who knows your tricks", "a common feeling of being in control even when you might not be. When you're overconfident"];
var nm15 = ["it's really difficult to gain the upper hand", "the fight may already be over", "you'll need more than your skills to win", "you may be the one that gets caught off guard", "your weaknesses may suddenly become very apparent to your opponent", "you could quickly end up overpowered", "it's near impossible to win", "your own strengths may prove to be lacking", "your strengths quickly become far less viable", "you'll have to rely on a different bag of tricks", "your strengths may suddenly be a weakness", "it's really difficult not to leave an exploitable opening", "you're no longer the one in control of the fight", "your opponent will have a lot of leverage over you", "all you can do is try to force your opponent into a position you can dominate from", "any advantage you may have had are out of the window"];

function generator$descriptions$martial_arts() {
	var rnd1 = Math.floor(Math.random() * nm1.length);
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3 = Math.floor(Math.random() * nm3.length);
	var rnd4 = Math.floor(Math.random() * nm4.length);
	if (rnd2 < 3) {
		while (rnd3 > 11) {
			rnd3 = Math.floor(Math.random() * nm3.length);
		}
		while (rnd4 > 19) {
			rnd4 = Math.floor(Math.random() * nm4.length);
		}
	} else if (rnd2 > 5) {
		while (rnd3 < 12) {
			rnd3 = Math.floor(Math.random() * nm3.length);
		}
		while (rnd4 < 20) {
			rnd4 = Math.floor(Math.random() * nm4.length);
		}
	}
	var rnd5 = Math.floor(Math.random() * nm5.length);
	var rnd5b = Math.floor(Math.random() * nm5.length);
	while (rnd5 === rnd5b) {
		rnd5b = Math.floor(Math.random() * nm5.length);
	}
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd6b = Math.floor(Math.random() * nm6.length);
	while (rnd6 === rnd6b) {
		rnd6b = Math.floor(Math.random() * nm6.length);
	}
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd9 = Math.floor(Math.random() * nm9.length);
	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd13 = Math.floor(Math.random() * nm13.length);
	var rnd14 = Math.floor(Math.random() * nm14.length);
	var rnd15 = Math.floor(Math.random() * nm15.length);

	var name = nm1[rnd1] + " is a " + nm2[rnd2] + " martial art that focuses on " + nm3[rnd3] + " your opponent " + nm4[rnd4] + ". The primary focus lies on both " + nm5[rnd5] + " and " + nm5[rnd5b] + " and it often relies on the " + nm6[rnd6] + " and " + nm6[rnd6b] + nm7[rnd7] + ".";

	var name2 = "The biggest strength of " + nm1[rnd1] + " is " + nm8[rnd8] + ". By " + nm9[rnd9] + " the " + nm11[rnd11] + " of " + nm10[rnd10] + " your opponent " + nm12[rnd12] + ", " + nm13[rnd13] + ".";

	var name3 = "On the other hand the biggest weakness of " + nm1[rnd1] + " is " + nm14[rnd14] + " " + nm15[rnd15] + ".";




	var result = "";
	result += name;
	result += "\n";
	result += "\n";
	result += name2;
	result += "\n";
	result += "\n";
	result += name3;
	return result;
}