var names1 = ["Adjunct", "Adjutant", "Admiral", "Air Marshal", "Airman", "Army General", "Aspirant", "Brigade General", "Brigadier", "Brigadier General", "Cadet", "Captain", "Captain-Commandant", "Chief", "Chief Engineer", "Chief Marshal", "Chief Technician", "Colonel", "Commander", "Commander General", "Commodore", "Corporal", "Corps General", "Divisional General", "Doctor", "Engineer", "Ensign", "Field Marshal", "Flag Officer", "Fleet Captain", "Fleet Commander", "Fleet General", "Fleet Officer", "Flight Captain", "Flight Corporal", "Flight Lieutenant", "Flight Officer", "Flight Sergeant", "General", "Grand Admiral", "Gunnery Sergeant", "High Colonel", "Lance Corporal", "Lieutenant", "Lieutenant Junior ", "Lieutenant Senior ", "Lieutenant-Colonel", "Lieutenant-Commander", "Lieutenant-General", "Major", "Major-General", "Marshal", "Master", "Master Chief", "Master Corporal", "Master Sergeant", "Medic", "Midshipman", "Naval Captain", "Naval Commander", "Naval General", "Naval Officer", "Officer", "Petty Officer", "Pilot", "Pilot Officer", "Principal Master", "Private", "Quartermaster", "Rear Admiral", "Recruit", "Seaman", "Senior Officer", "Sergeant", "Sergeant-Major", "Specialist", "Spy", "Squadron Leader", "Staff Sergeant", "Sub-Lieutenant", "Subcommander", "Supply Officer", "Supreme Admiral", "Supreme Commander", "Supreme General", "Supreme Master", "Technical Sergeant", "Technician", "Vice Admiral", "Vice Captain", "Vice Commander", "Vice General", "Warrant Officer", "Wing Commander", "Wing Commodore"];
var names2 = ["Adjunct", "Aerial Cavalry", "Apprentice", "Archer", "Archmage", "Berzerker", "Besieger", "Buckaneer", "Captain", "City Guard", "Cleaver", "Cloud Rider", "Corporal", "Covert Infantry", "Crusher", "Defender", "Duke", "Earl", "Emperor", "Executor", "Fist", "Footsoldier", "General", "Ground Cavalry", "Ground Infantry", "High Mage", "High Priest", "Justicar", "King", "Knight", "Lawbringer", "Lord", "Lord General", "Major", "Man-at-arms", "Marine", "Marshal", "Mounteneer", "Naval Cavalry", "Naval Infantry", "Paladin", "Patrol", "Peon", "Priest", "Private", "Reaper", "Rescuer", "Rocketeer", "Rusher", "Sage", "Scout", "Seeker", "Seer", "Serpent Rider", "Sniper", "Spec-Ops Captain", "Spec-Ops Cavalry", "Spec-Ops Infantry", "Spelunker", "Spy", "Squad Mage", "Squire", "Stalker", "Supreme Warlock", "Supreme Warlord", "Thunder Trooper", "Tresher", "Tunneler", "Warden", "Warlock", "Warlord", "Warrior"];
var names3 = ["Officer", "General", "Commander", "Lieutenant", "Chief", "Captain", "Colonel", "Sergeant", "Commandant", "Master"];
var names4 = ["Aid", "Air", "Armor", "Armored Vehicles", "Beasts", "Cavalry", "Covert Operations", "Deception", "Defence", "Demolition", "Destruction", "Explosives", "Fear", "Fire", "Flight", "Hostages", "Illusions", "Infantry", "Information", "Justice", "Mages", "Misinformation", "Morale", "Navigation", "Paladins", "Penalties", "Planes", "Planning", "Preparation", "Prisoners", "Propaganda", "Protection", "Public Relations", "Recruits", "Rescues", "Resources", "Sanctions", "Ships", "Siege Weapons", "Spec-Ops", "Supplies", "Support", "Tanks", "Terror", "Traps", "Warlocks", "Warlords", "Water", "Weapons", "Witness Protection", "the Air", "the Army", "the Bezerkers", "the City", "the Code", "the Company", "the Court", "the Covert", "the Deck", "the Fleet", "the Guard", "the Guardians", "the Hounds", "the Law", "the Line", "the Mob", "the Navy", "the Order", "the Reavers", "the Riders", "the Siege", "the Underground", "the Wall", "the Watch"];

function generator$miscellaneous$military_ranks() {

	i = Math.floor(Math.random() * 10); {
		if (i < 4) {
			rnd0 = Math.floor(Math.random() * names3.length);
			rnd1 = Math.floor(Math.random() * names4.length);
			names = names3[rnd0] + " of " + names4[rnd1];
		} else if (i < 7) {
			rnd0 = Math.floor(Math.random() * names1.length);
			names = names1[rnd0];
		} else {
			rnd0 = Math.floor(Math.random() * names2.length);
			names = names2[rnd0];
		}
		return names;
	}

}