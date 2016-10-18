var nm1 = ["B", "D", "F", "G", "H", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "Z"];
var nm2 = ["a", "e", "i", "o", "u"];
var nm3 = ["bb", "bc", "bd", "bk", "bl", "bm", "bn", "br", "bs", "bv", "bw", "bz", "cb", "cc", "cf", "ch", "ck", "cl", "cm", "cn", "cp", "cq", "cr", "cs", "cw", "cz", "db", "dd", "dg", "dh", "dk", "dl", "dm", "dn", "dp", "dr", "ds", "dv", "dw", "dz", "fb", "fd", "ff", "fg", "fk", "fl", "fm", "fn", "fp", "fr", "fs", "ft", "fw", "fz", "gg", "kb", "kd", "kk", "kl", "km", "kn", "kp", "kr", "ks", "kt", "kw", "kz", "lb", "lc", "ld", "lf", "lg", "lk", "ll", "lm", "ln", "lp", "lq", "lr", "ls", "lt", "lv", "lw", "lz", "mb", "md", "mk", "ml", "mm", "mn", "mp", "mr", "ms", "mt", "mv", "mz", "nb", "nc", "nd", "nf", "ng", "nk", "nl", "nm", "nn", "np", "nq", "nr", "ns", "nt", "nv", "nw", "nz", "pc", "pg", "ph", "pk", "pl", "pm", "pn", "pp", "pr", "ps", "pt", "pv", "pz", "qq", "rb", "rc", "rd", "rf", "rg", "rk", "rl", "rm", "rn", "rp", "rq", "rr", "rs", "rt", "rv", "rw", "rz", "sb", "sc", "sd", "sg", "sh", "sk", "sl", "sm", "sn", "sp", "sr", "ss", "st", "sz", "tb", "tc", "tg", "tk", "tl", "tm", "tn", "tp", "tr", "ts", "tt", "tv", "tw", "tz", "vv", "wb", "wd", "wg", "wk", "wl", "wm", "wn", "wp", "wr", "ws", "wt", "ww", "wz", "xx", "zb", "zc", "zf", "zg", "zk", "zl", "zm", "zn", "zp", "zr", "zs", "zt", "zw", "zz"];

function generator$legend_of_zelda$dekus() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		rnd4 = Math.floor(Math.random() * nm2.length);
		if (i < 7) {
			names = "De" + nm3[rnd3] + "i";
		} else {
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4];
		}
		return names;
	}

}