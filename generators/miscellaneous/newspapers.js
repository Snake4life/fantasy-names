function generator$miscellaneous$newspapers(type) {
	var nm3 = [
		["The ", "Bulletin"],
		["The ", "Chronicle"],
		["The ", "Chronicles"],
		["The ", "Gazette"],
		["The ", "Herald"],
		["The ", "Inquirer"],
		["The ", "Journal"],
		["The ", "Mirror"],
		["", "News"],
		["", "News"],
		["", "News"],
		["The ", "Observer"],
		["The ", "Post"],
		["", "Press"],
		["The ", "Record"],
		["", "Record"],
		["The ", "Register"],
		["The ", "Report"],
		["The ", "Reporter"],
		["The ", "Sentinel"],
		["The ", "Telegram"],
		["", "Time"],
		["", "Times"],
		["The ", "Time"],
		["The ", "Times"],
		["", "Tribune"],
		["The ", "Tribune"]
	];
	var nm4 = ["Daily", "Daily", "Daily", "Weekly", "Morning", "Evening"];

	var nm1 = ["Apex", "Aurora", "Avant-Garde", "Banner", "Beacon", "Break of Day", "Breakfast", "Bulletin", "Business", "Capital", "Capitol", "Carpe Diem", "Citizen", "Community", "Courier", "Crack of Dawn", "Daily", "Daily Watch", "Dawn", "Dawning", "Day Break", "Daybreak", "Daylight", "Dayspring", "Diem", "Dispatch", "Early", "Early Bird", "Eastern", "Echo", "Emerald", "Emporium", "Enterprise", "Epoch", "Era", "Estate", "Evening", "Everyday", "Explorer", "Express", "Eyewitness", "First Light", "Foreday", "Foundation", "Global", "Headline", "Heritage", "Independent", "Inside", "Insider", "Key", "Leading", "Legacy", "Liberty", "Life", "Local", "Local Voice", "Lodestar", "Metropolitan", "Modest", "Monday", "Morn", "Morning", "Morning Star", "Morning Watch", "Morningtide", "Morrow", "National", "New", "Northern", "Nova", "Observer", "Paragon", "Patriot", "Patron", "Pinnacle", "Pioneer", "Plain", "Prime", "Public", "Record", "Relay", "Saturday", "Society", "Southern", "Standard", "Star", "State", "Sun", "Sunday", "Sunrise", "Sunup", "Telegraph", "Today's", "Tribune", "Vertex", "Vista", "Weekly", "Western", "Witness", "World", "Zenith"];
	var nm2 = ["Account", "Alliance", "Apex", "Aurora", "Beacon", "Breakfast", "Bulletin", "Business", "Capital", "Capitol", "Carpe Diem", "Chronicle", "Chronicles", "Citizen", "Community", "Connection", "Courier", "Day Break", "Diem", "Dispatch", "Echo", "Emerald", "Emporium", "Enquirer", "Enterprise", "Epoch", "Era", "Estate", "Evening", "Explorer", "Express", "Eyewitness", "Gazette", "Global", "Globe", "Headline", "Herald", "Heritage", "Home", "Independent", "Inside", "Insider", "Journal", "Leader", "Ledger", "Legacy", "Liberty", "Life", "Local", "Local Voice", "Lodestar", "Look", "Look Back", "Mail", "Metropolitan", "Morn", "Morning Star", "Morning Watch", "Morningtide", "Morrow", "Narrative", "National", "Network", "News", "Nova", "Observer", "Outlook", "Paragon", "Patriot", "Patron", "Pinnacle", "Pioneer", "Prime", "Record", "Register", "Relay", "Report", "Reporter", "Review", "Sentinel", "Society", "Standard", "Star", "Sun", "Telegram", "Telegraph", "Time", "Times", "Tribune", "Union", "Unity", "Vista", "Witness", "World", "Zenith"];


	i = Math.floor(Math.random() * 10); {
		if (i < 6) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			names = nm3[rnd2][0] + nm1[rnd] + " " + nm3[rnd2][1];
			nm1.splice(rnd, 1);
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * nm2.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm2[rnd] + " " + nm4[rnd2];
			nm1.splice(rnd, 1);
		} else {
			rnd = Math.floor(Math.random() * nm2.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm4[rnd2] + " " + nm2[rnd];
			nm1.splice(rnd, 1);
		}
		return names;
	}

}