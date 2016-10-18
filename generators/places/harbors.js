var nm1 = ["Albatross Point", "Anchorage", "Angel", "Angelwood", "Arrow Point", "Ashland", "Avalon", "Barnacle Bay", "Barnacle Point", "Baymouth", "Bayport", "Bayside", "Blackbeard", "Blackrock", "Blue Lagoon", "Blue River", "Breakwater", "Broken Reef", "Candlelight", "Cedar Creek", "Claremont", "Clearwater", "Coal", "Cocaobeach", "Coconut", "Crescent Moon", "Dames Point", "Driftwood", "Dry River", "Eagle Rock", "Eastport", "Echo Bay", "Echo Bluff", "Edgewater", "Fair Isle", "Fallen Oak", "False River", "Flamingo Bay", "Forestville", "Golden Beach", "Golden Springs", "Grand Bank", "Grand Canal", "Grand Island", "Grand River", "Greencoast", "Greenport", "Greymouth", "Hallowind", "Heaven Beach", "Heaven Gate", "Hermite", "Hermite Creek", "High Tide", "Hope", "Hopewell", "Hunter", "Huntersville", "Hurricane", "Imperial Beach", "Iron Isle", "Kings Bay", "Kings Cove", "Kingshill", "Kingsville", "Knightstone", "Little Oak", "Little River", "Little Rock", "Lobster Bay", "Long Beach", "Main Brook", "Marblerock", "Mermaid", "Nemo", "New Gardens", "New Haven", "New Hope", "New Meadow", "New Moon", "New Point", "New Wave", "Newcastle", "Newhaven", "Newland Bay", "Nightingale", "No Name", "North Fork", "Northwest", "Oak Island", "Oakland", "Oakwood", "Ocean City", "Ocean Fall", "Ocean Reef", "Oceanside", "Oceansong", "Oceanview", "Old Port", "Oyster", "Oyster Pearl", "Pelican Beach", "Pine Key", "Portsmouth", "Prisoner Point", "Redwood", "Riverfall", "Rivermouth", "Riverport", "Salmon Bay", "Salmon Falls", "Salmonville", "Saltend", "Saltlake", "Saltstone", "Seabreeze", "Seashell Bay", "Settlers Point", "Seven Lake", "Shark Bay", "Shark River", "Silver Bluff", "Silvercove", "Silvercreek", "Silvermoon", "South Fork", "South Point", "Southeast", "Stormbreaker", "Stormfury", "Summer Isle", "Sunken Reef", "Sunset Beach", "Sunset Point", "Thunder Bay", "Torch Key", "Tortoise", "Tortoise Shell", "Tradepost", "Turtle Bay", "Victoria", "Waterfalls", "Westport", "Whale", "Whale Water", "Whalehunter", "Whisperwind", "White Cliff", "Whitehaven", "Winterfall"];
var nm2 = ["Harbor", "Wharf", "Piers", "Landing", "Harbor", "Port"];
var nm3 = ["b", "br", "bl", "c", "cl", "cr", "d", "dr", "f", "fr", "fl", "g", "gr", "gl", "gn", "h", "j", "k", "kr", "kl", "kn", "m", "n", "p", "pr", "pl", "q", "qr", "ql", "r", "s", "st", "sr", "str", "sl", "t", "tr", "tl", "v", "vl", "vr", "w", "wr", "x", "z", "", "", "", "", ""];
var nm4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "y"];
var nm5 = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "", "", "", "", "", ""];
var nm7 = ["b", "d", "g", "gh", "h", "hr", "hs", "ht", "hst", "hsh", "hn", "hm", "hl", "hz", "hx", "hq", "k", "ks", "kx", "l", "ll", "lk", "ln", "lm", "lz", "lp", "lt", "ls", "lst", "lf", "m", "mn", "mm", "mt", "ms", "n", "nn", "nt", "ns", "p", "ps", "pt", "ph", "q", "r", "rs", "rt", "rst", "rq", "rk", "rc", "rf", "rb", "rd", "s", "st", "ss", "sh", "sk", "sp", "t", "th", "ts", "w", "wth", "x", "z"]

function generator$places$harbors() {

	i = Math.floor(Math.random() * 10); {
		rnd2 = Math.floor(Math.random() * nm2.length);
		if (i < 4) {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		} else if (i < 7) {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			names = nm3[rnd3] + nm4[rnd4] + nm7[rnd7] + " " + nm2[rnd2];
		} else {
			rnd3 = Math.floor(Math.random() * nm3.length);
			rnd4 = Math.floor(Math.random() * nm4.length);
			rnd5 = Math.floor(Math.random() * nm5.length);
			rnd6 = Math.floor(Math.random() * nm4.length);
			rnd7 = Math.floor(Math.random() * nm7.length);
			names = nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm4[rnd6] + nm7[rnd7] + " " + nm2[rnd2];
		}
		return names;
	}

}