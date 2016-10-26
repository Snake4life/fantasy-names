function generator$halo$san_shyuums() {
	var nm1 = ["", "", "", "", "", "", "", "b", "c", "d", "f", "h", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z"];
	var nm2 = ["o", "a", "u"];
	var nm3 = ["b", "c", "d", "g", "k", "p", "t", "rd", "rb", "rc", "rd", "rg", "rk", "rp", "rt"];
	var nm4 = ["b", "br", "c", "cr", "d", "dr", "f", "fr", "h", "k", "l", "m", "n", "p", "pr", "r", "s", "sr", "t", "tr", "v", "vr", "w", "z", "mr", "kr"];
	var nm5 = ["b", "bt", "c", "ct", "d", "f", "ft", "h", "k", "kt", "l", "m", "mnt", "mt", "n", "nb", "nc", "nct", "nd", "nf", "nft", "nst", "nt", "p", "pt", "r", "rc", "rnt", "rt", "s", "sc", "st", "t", "w", "wt", "z", "zc", "zt"];
	var nm6 = ["o", "a", "u", "", ""];
	var nm7 = ["Prophet", "Minister", "High Prophet"];
	var nm8 = ["Absolution", "Analysis", "Atonement", "Attrition", "Audacity", "Aversion", "Boldness", "Bravery", "Candor", "Caution", "Censure", "Charity", "Civility", "Clemency", "Commitment", "Compassion", "Confidence", "Conscience", "Conservancy", "Constraint", "Contrition", "Control", "Conviction", "Courage", "Courtesy", "Creed", "Decency", "Defiance", "Dignity", "Disdain", "Doubt", "Duty", "Elegance", "Empathy", "Endurance", "Esteem", "Etiology", "Fairness", "Favor", "Fervor", "Forbearance", "Fortitude", "Gallantry", "Generosity", "Goodwill", "Grace", "Honesty", "Honor", "Inhibition", "Inquisition", "Insolence", "Integrity", "Interrogation", "Intrepidity", "Investigation", "Kindness", "Legitimacy", "Lenience", "Mercy", "Moderation", "Nobility", "Objection", "Obligation", "Patience", "Penance", "Penitence", "Pity", "Principles", "Protection", "Protest", "Prowess", "Qualm", "Recognition", "Regret", "Reliance", "Remorse", "Repentance", "Resilience", "Resistance", "Restraint", "Restriction", "Reverence", "Salvation", "Saving", "Silence", "Sincerity", "Sorrow", "Stewardship", "Strength", "Suffering", "Supposition", "Sympathy", "Tenacity", "Tolerance", "Trust", "Truth", "Valiance", "Veracity", "Vigor", "Virtue"];


	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			rnd3 = Math.floor(Math.random() * nm3.length);
			if (rnd < 7) {
				while (rnd3 < 7) {
					rnd3 = Math.floor(Math.random() * nm3.length);
				}
			}
			if (rnd > 6) {
				while (rnd3 < 6) {
					rnd3 = Math.floor(Math.random() * nm3.length);
				}
			}

			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm2.length);
			rnd6 = Math.floor(Math.random() * nm5.length);
			rnd7 = Math.floor(Math.random() * nm6.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + " " + nm4[rnd4] + nm2[rnd5] + nm5[rnd6] + nm6[rnd7];
		} else {
			rnd = Math.floor(Math.random() * nm7.length);
			rnd2 = Math.floor(Math.random() * nm8.length);
			names = nm7[rnd] + " of " + nm8[rnd2];
		}
		return names;
	}

}