var nm1 = ["Advanced", "Collective", "Common", "Constitutional", "Contemporary", "Eastern", "Extremist", "Fanatical", "Federal", "First", "Free", "Global", "Independent", "Industrial", "International", "Lawful", "Leading", "Liberal", "Moderate", "Modern", "National", "Neo", "New", "Northern", "Organized", "Patriotic", "Peaceful", "People's", "Permanent", "Prime", "Progressive", "Radical", "Rational", "Revolutionary", "Social", "Southern", "Sovereign", "Traditional", "Unconditional", "Undivided", "Unified", "United", "Universal", "Vocal", "Western", "World", "", "", ""];
var nm2 = ["Abolition", "Action", "Administration", "Advancement", "Affinity", "Agrarian", "Alliance", "Amendment", "Animal", "Appreciation", "Autocrat", "Choice", "Citizens", "Civic", "Civil Rights", "Coalition", "Communion", "Communist", "Community", "Compromise", "Conservative", "Constitution", "Defiance", "Democratic", "Denizen", "Diligence", "Earth", "Egalitarian", "Egalitarianism", "Egalitarion", "Emancipation", "Enterprise", "Equality", "Equilibrium", "Evaluation", "Evolution", "Family", "Fascist", "Fatherland", "Federation", "Formation", "Freedom", "Future", "Green", "Homeland", "Honesty", "Household", "Humanitarian", "Identity", "Immunity", "Impartiality", "Independence", "Industry", "Integrity", "Isolation", "Justice", "Labor", "Law", "Left", "Left Wing", "Legislation", "Liberation", "Libertarian", "Liberty", "Life", "Loyalist", "Monarchist", "Motherland", "Nation", "Nationalist", "Nature", "Operation", "Opportunity", "Pacifism", "Pacifist", "Parliamentary", "Patriot", "Peace", "People", "Preservation", "Privilege", "Probation", "Progress", "Progression", "Prohibition", "Proposition", "Prosperity", "Protection", "Reconciliation", "Red", "Reformation", "Regulation", "Rehabilitation", "Renovation", "Republican", "Resistance", "Respect", "Right", "Right Wing", "Science", "Segregation", "Separation", "Separatist", "Socialist", "Solidarity", "State", "Taxpayer", "Theocratic", "Transformation", "Trust", "Uniformity", "Unionist", "Unity", "Voice", "Voter", "Welfare", "Workers", "Working Class"];
var nm3 = ["Party", "League", "Movement", "Group", "Union", "Coalition", "Party", "Party"];

function generator$miscellaneous$political_partys() {

	i = Math.floor(Math.random() * 10); {
		rnd = Math.floor(Math.random() * nm1.length);
		rnd2 = Math.floor(Math.random() * nm2.length);
		rnd3 = Math.floor(Math.random() * nm3.length);
		names = nm1[rnd] + " " + nm2[rnd2] + " " + nm3[rnd3];
		return names;
	}

}