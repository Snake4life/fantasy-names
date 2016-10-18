var nm1 = ["Ba", "Bax", "Dan", "Fi", "Fix", "Fiz", "Gi", "Gix", "Giz", "Gri", "Gree", "Greex", "Grex", "Ja", "Jax", "Jaz", "Jex", "Ji", "Jix", "Ka", "Kax", "Kay", "Kaz", "Ki", "Kix", "Kiz", "Klee", "Kleex", "Kwee", "Kweex", "Kwi", "Kwix", "Kwy", "Ma", "Max", "Ni", "Nix", "No", "Nox", "Qi", "Rez", "Ri", "Ril", "Rix", "Riz", "Ro", "Rox", "So", "Sox", "Vish", "Wi", "Wix", "Wiz", "Za", "Zax", "Ze", "Zee", "Zeex", "Zex", "Zi", "Zix", "Zot"];
var nm2 = ["b", "ba", "be", "bi", "d", "da", "de", "di", "e", "eb", "ed", "eg", "ek", "em", "en", "eq", "ev", "ez", "g", "ga", "ge", "gi", "ib", "id", "ig", "ik", "im", "in", "iq", "iv", "iz", "k", "ka", "ke", "ki", "m", "ma", "me", "mi", "n", "na", "ni", "q", "qa", "qe", "qi", "v", "va", "ve", "vi", "z", "za", "ze", "zi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm3 = ["ald", "ard", "art", "az", "azy", "bit", "bles", "eek", "eka", "et", "ex", "ez", "gaz", "geez", "get", "giez", "iek", "igle", "ik", "il", "in", "ink", "inkle", "it", "ix", "ixle", "lax", "le", "lee", "les", "lex", "lyx", "max", "maz", "mex", "mez", "mix", "miz", "mo", "old", "rax", "raz", "reez", "rex", "riez", "tee", "teex", "teez", "to", "uek", "x", "xaz", "xeez", "xik", "xink", "xiz", "xonk", "yx", "zeel", "zil"];
var nm4 = ["Ami", "Amy", "Bli", "Bliz", "Blyz", "Cal", "Eep", "Fiz", "Flux", "Fyz", "Gle", "Glee", "Gly", "Gre", "Gree", "Gui", "Ix", "Iz", "Izi", "Izzi", "Kim", "Kin", "Kle", "Lil", "Lily", "Lin", "Liz", "Ly", "Lyl", "Lyz", "Lys", "Me", "Meg", "Mex", "Mez", "Min", "Mef", "Mix", "Mo", "Myg", "Nal", "Nex", "Nez", "Pen", "Pi", "Pix", "Pixi", "Puzz", "Py", "Pyx", "Pyxi", "Ry", "Sa", "Sal", "Sas", "Saz", "Sli", "Slin", "Sly", "Ti", "Tin", "Tink", "Trix", "Twix", "Yp"];
var nm5 = ["b", "ba", "be", "bi", "d", "da", "de", "di", "e", "eb", "ed", "eg", "ek", "em", "en", "eq", "ev", "ez", "g", "ga", "ge", "gi", "ib", "id", "ig", "ik", "im", "in", "iq", "iv", "iz", "k", "ka", "ke", "ki", "m", "ma", "me", "mi", "n", "na", "ni", "q", "qa", "qe", "qi", "v", "va", "ve", "vi", "z", "za", "ze", "zi", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var nm6 = ["bels", "bles", "els", "ette", "eys", "inee", "ini", "inky", "iz", "ky", "le", "lee", "leex", "les", "lex", "lez", "liz", "lope", "ly", "lyx", "lyz", "nee", "neez", "nex", "ney", "nez", "nix", "ny", "ope", "sal", "see", "sel", "sy", "syl", "tink", "twex", "twinkle", "twizz", "twyx", "twyzz", "wee", "weez", "wiz", "wyz", "xee", "xi", "xie", "xy", "ynee", "yni", "yx", "za", "zee", "zel", "zelly", "zex", "zey", "zi", "zy"];
var nm7 = ["Bolt", "Boom", "Bot", "Cog", "Copper", "Damp", "Dead", "Far", "Fast", "Fiz", "Fizz", "Fizzle", "Fuse", "Gear", "Giga", "Gold", "Grapple", "Grease", "Greasy", "Ground", "Haggle", "Hard", "Knee", "Leaf", "Loose", "Man", "Mega", "Money", "Mud", "Multi", "Peddle", "Pepper", "Pick", "Rocket", "Rust", "Salt", "Salty", "Sand", "Scroll", "Shadow", "Sharp", "Silver", "Spark", "Steam", "Top", "Wrench"];
var nm8 = ["basher", "blade", "blast", "blaster", "bolt", "bomb", "boot", "bottom", "bub", "button", "buttons", "cash", "clamp", "digger", "feet", "fingers", "flare", "fuel", "fuse", "gear", "gleam", "gob", "grinder", "grubber", "hallow", "hammer", "head", "knob", "mine", "nose", "nozzle", "pinch", "pocket", "pot", "racket", "rocket", "screw", "shatter", "shiv", "skimmer", "snap", "snipe", "spark", "sprocket", "task", "tongue", "tooth", "tweak", "twister", "volt", "watts", "well", "wick", "wizzle", "wrench"];

function generator$world_of_warcraft$goblin(type) {

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