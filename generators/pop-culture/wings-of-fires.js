var nm1 = ["Anorak", "Avalanche", "Beret", "Bleak", "Blizz", "Blizzard", "Borean", "Brumal", "Calve", "Casaba", "Chill", "Chinook", "Clinch", "Crymodinia", "Cryo", "Crystal", "Diamond", "Draft", "Eranthis", "Ermine", "Flake", "Fleece", "Floe", "Flurry", "Frappe", "Frigid", "Frigor", "Frost", "Glacial", "Hailstone", "Halcyon", "Hiemal", "Hiems", "Hoar", "Humboldt", "Hummock", "Hyemal", "Hyemate", "Icy", "Igloo", "Luge", "Melt", "Miniver", "Mistral", "Neige", "Nippy", "Nivial", "Parka", "Perhiemate", "Polar", "Quilt", "Rime", "Serac", "Sherbet", "Shiver", "Skate", "Ski", "Sledge", "Sleet", "Slide", "Slush", "Snap", "Solstice", "Sorbet", "Stale", "Thaw", "Thaws", "Toboggan", "Uncia", "Woolens"];
var nm2 = ["Amber", "Aroid", "Auburn", "Belute", "Bemire", "Bitternut", "Bog", "Bogmat", "Bonobo", "Calamus", "Cienaga", "Daub", "Deluge", "Dirt", "Draggle", "Drench", "Dun", "Everglade", "Fawn", "Fen", "Flood", "Flow", "Gumbo", "Hazel", "Iva", "Jarble", "Khaki", "Lily", "Lutose", "Mangrove", "Mareis", "Maremma", "Miasma", "Mire", "Morass", "Muck", "Muddle", "Myrtle", "Ooze", "Paludicole", "Paludine", "Papyrus", "Parnassia", "Pocosin", "Puddle", "Puttock", "Quag", "Quaggy", "Recurvine", "Rush", "Russet", "Sabbatia", "Sable", "Salse", "Saute", "Sceliphron", "Sedge", "Sediment", "Shale", "Sienna", "Sleech", "Sleetch", "Slime", "Slit", "Slog", "Slop", "Slosh", "Slough", "Sludge", "Slurry", "Swang", "Tawny", "Umber", "Wallow"];
var nm3 = ["Annihilation", "Carnage", "Massacre", "Destruction", "Extinction", "Ruin", "Elimination", "Abolition", "Bane", "Havoc", "Fury", "Rage", "Ravage", "Wreckage", "Crash", "Undoing", "Extermination", "Demolition", "Revenge", "Retribution", "Wrath", "Ire", "Storm", "Temper", "Frenzy", "Furor", "Mania", "Madness", "Violence", "Bluster", "Hysteria", "Bold", "Confidence", "Aweless", "Gritty", "Sanguine", "Valiant", "Wit", "Foresight", "Savvy", "Prudence", "Poise", "Sapience", "Insight", "Judgment", "Intuition", "Genius", "Sanity", "Insanity", "Chaos", "Mayhem", "Plunder", "Wreck", "Waste", "Calamity", "Cataclysm", "Catastrophe", "Confusion", "Devestation", "Desolation", "Alder", "Arrow", "Battle", "Big", "Blaze", "Bone", "Boulder", "Bright", "Bull", "Burn", "Burning", "Cloud", "Dark", "Dawn", "Death", "Doom", "Dread", "Dream", "Dull", "Dusk", "Elder", "Far", "Fate", "Fear", "Fierce", "Fire", "Flame", "Fury", "Ghost", "Gloom", "Glow", "Great", "Grim", "Hallow", "Hollow", "Hypno", "Iron", "Light", "Little", "Marble", "Master", "Mighty", "Mind", "Moon", "Night", "Phantom", "Power", "Prey", "Rage", "Razor", "Rumble", "Shade", "Shadow", "Shiver", "Silver", "Steel", "Stone", "Storm", "Stout", "Strong", "Sun", "Swift", "Terror", "Thunder", "Whirl", "Wild"];
var nm4 = ["back", "beast", "belly", "brand", "breaker", "breath", "bringer", "brow", "claw", "claws", "cutter", "eye", "eyes", "fang", "fangs", "flayer", "flight", "fly", "forge", "forger", "glide", "grip", "hunter", "jaw", "mind", "mover", "reader", "ripper", "roar", "sight", "speaker", "striker", "tail", "teeth", "tooth", "watcher", "wing", "wings"];
var nm5 = ["Acute", "Alert", "Amplitude", "Argent", "Astute", "August", "Beaming", "Beautiful", "Beauty", "Blazing", "Bold", "Brilliant", "Chic", "Dainty", "Dapper", "Daring", "Dazzle", "Dazzling", "Delicate", "Dignity", "Elegant", "Elevation", "Eminence", "Ethereal", "Exalted", "Excellent", "Flashing", "Flawless", "Fulgent", "Gallant", "Glaring", "Glittering", "Glorious", "Glory", "Gorgeous", "Grand", "Grandeur", "Grandiose", "Imposing", "Jaunty", "Jolly", "Keen", "Lambent", "Lavish", "Light", "Lively", "Luster", "Lustrous", "Luxurious", "Magnefic", "Magnificence", "Majestic", "Majesty", "Merry", "Might", "Nobility", "Noble", "Opulence", "Opulent", "Plucky", "Precious", "Quick", "Radiance", "Radiant", "Rare", "Refined", "Renown", "Royal", "Sanguine", "Sharp", "Smare", "Smart", "Smashing", "Smooth", "Sparkling", "Spectacle", "Splendid", "Splendor", "Striking", "Suave", "Sublime", "Sublimity", "Superb", "Swank", "Sway", "Swish", "Vivid", "Whiz", "Wonderful", "Aerosol", "Aqua", "Basin", "Berain", "Bilge", "Billow", "Blirt", "Cirrus", "Cloudburst", "Coma", "Cumulus", "Dew", "Dowse", "Drench", "Drizzle", "Droplet", "Flush", "Fume", "Gale", "Hail", "Halo", "Hula", "Hydra", "Hydro", "Hyetal", "Miasma", "Misle", "Mist", "Mizzle", "Mottle", "Naga", "Naiad", "Nebula", "Nimbus", "Nubia", "Nymph", "Ombro", "Parjanya", "Patter", "Pelter", "Petrichor", "Pluvial", "Pour", "Reyn", "Saman", "Selva", "Serein", "Sluice", "Smither", "Soak", "Sprinkle", "Storm", "Stratus", "Tempest", "Torrent", "Zamang"];
var nm6 = ["Arenose", "Arenulous", "Atacama", "Bulwark", "Bunker", "Burrow", "Cabana", "Caftan", "Caracal", "Cerastes", "Chilopsis", "Compo", "Coville", "Creosote", "Dene", "Ditch", "Djanet", "Draggle", "Drifter", "Dust", "Eremic", "Firma", "Gerbil", "Gila", "Gobi", "Gopher", "Gravel", "Grind", "Grit", "Gypsum", "Hediondilla", "Hemen", "Hornel", "Iguana", "Jerboa", "Kalahari", "Larrea", "Launce", "Lichanura", "Lido", "Maravilla", "Maroon", "Marram", "Mohave", "Mojava", "Mole", "Moloch", "Namib", "Negev", "Nubian", "Patch", "Pebble", "Plage", "Prime", "Psammoma", "Sahara", "Shore", "Simoom", "Sinai", "Sirocco", "Soil", "Strond", "Tan", "Tannest", "Terra", "Terrain", "Tombolo", "Xerophilous"];
var nm7 = ["Abyss", "Actinia", "Actinian", "Adriatic", "Aegean", "Agonus", "Archipelago", "Ascidian", "Auk", "Baltic", "Bass", "Bathypelagic", "Batture", "Bay", "Beaufort", "Benthos", "Billow", "Bismarck", "Bream", "Brine", "Bromine", "Bryozoan", "Buccaneer", "Caretta", "Caribbean", "Clangula", "Coast", "Conger", "Corsair", "Cove", "Davy", "Dive", "Echinoidea", "Echinus", "Estuary", "Expanse", "Firth", "Fugu", "Fulmar", "Grouper", "Gulf", "Holothurian", "Hydro", "Hydrophid", "Inlet", "Leviathan", "Main", "Manatee", "Marine", "Maritime", "Marmara", "Marmora", "Mew", "Naumachy", "Nautical", "Nereid", "Nereus", "Ocean", "Pelagic", "Peristedion", "Petrel", "Puffin", "Recess", "River", "Rosmarine", "Samphire", "Scoter", "Spindrift", "Squid", "Squill", "Starfish", "Submarine", "Thatch", "Thetis", "Trepang", "Triton", "Ultramarine", "Ulva", "Urchin"];
var nm8 = ["Above", "Aestival", "Aether", "Air", "Amber", "Andromeda", "Anu", "Aquila", "Ara", "Aries", "Atrium", "Aurora", "Azure", "Azured", "Borealis", "Canicula", "Canopus", "Canopy", "Cassiopeia", "Celeste", "Celestial", "Cepheus", "Cerulean", "Cerulific", "Cloud", "Comet", "Constellation", "Cyaneous", "Cyanite", "Draco", "Dyaus", "Either", "Empyreal", "Empyrean", "Ensky", "Expanse", "Gemini", "Heaven", "Hemisphere", "Hypaethral", "Iceblink", "Ionosphere", "Lepus", "Lift", "Lyra", "Meridian", "Meteor", "Nebula", "Nimbus", "Orion", "Pitch", "Rainbow", "Sapphire", "Serein", "Sirius", "Skyey", "Skyward", "Sphere", "Steward", "Stratus", "Supernal", "Taurus", "Toss", "Twilight", "Vault", "Vesper", "Violet", "Welkin", "Yonder", "Zenith", "Zodiac"];

function generator$pop_culture$wings_of_fires(type) {

	i = Math.floor(Math.random() * 14); {
		if (i < 2) {
			rnd = Math.floor(Math.random() * nm1.length);
			names = nm1[rnd];
		} else if (i < 4) {
			rnd = Math.floor(Math.random() * nm2.length);
			names = nm2[rnd];
		} else if (i < 6) {
			rnd = Math.floor(Math.random() * nm3.length);
			if (rnd < 60) {
				names = nm3[rnd];
			} else {
				rnd2 = Math.floor(Math.random() * nm4.length);
				names = nm3[rnd] + nm4[rnd2];
			}
		} else if (i < 8) {
			rnd = Math.floor(Math.random() * nm5.length);
			names = nm5[rnd];
		} else if (i < 10) {
			rnd = Math.floor(Math.random() * nm6.length);
			names = nm6[rnd];
		} else if (i < 12) {
			rnd = Math.floor(Math.random() * nm7.length);
			names = nm7[rnd];
		} else {
			rnd = Math.floor(Math.random() * nm8.length);
			names = nm8[rnd];
		}
		return names;
	}

}