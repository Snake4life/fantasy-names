var nm1 = ["Ahoy", "Anchor", "Barnacle", "Big Horn", "Black Sand", "Black Spot", "Black Water", "Blackbeard's", "Blimey", "Blood", "Bloodmoon", "Booty", "Broken Tooth", "Buccaneer's", "Buried", "Corsair", "Covert", "Crimson", "Crocodile", "Cross", "Crow's Nest", "Cutlass", "Cyclone", "Dagger Tooth", "Danger", "Davy Jones'", "Dead Kraken", "Dead Man's", "Dead Men", "Dead Whale", "Death Curse", "Debris", "Demon", "Devil's", "Dry Rum", "Dubloon", "Execution", "Freebooter", "Full Moon", "Gibbit", "Gold", "Golden Tooth", "Grog", "Gunpowder", "Hazard", "Hempen Halter", "High Tide", "Hornswaggle", "Jagged Reef", "Jolly Roger", "Keelhaul", "Killer Whale", "Kraken", "Landlubber", "Last Words", "Lost Treasure", "Low Tide", "Macaw", "Marauder", "Maroon", "Mermaid", "Monkey", "Monsoon", "Murder", "Mutiny", "Mystery", "Nemo", "No Tale", "Occult", "Old Salt", "Parley", "Parrot", "Peril", "Plunder", "Privateer", "Quartermaster", "Rapier", "Red Sand", "Red Water", "Rum", "Rumrunner", "Salty Sand", "Sanguine", "Scallywag", "Scourge", "Scurvy", "Scuttle", "Scuttlebutt", "Sea Monster", "Seadog", "Seaweed", "Shark", "Shark Fin", "Shipwreck", "Shiver", "Silver", "Skeleton", "Skull", "Stormy", "Sunken", "Sunken Reef", "Swashbuckler", "Tempest", "Thunder", "Timber", "Tortoise", "Trophy", "Turtle", "Unnamed", "Wreckage"];
var nm2 = ["Anchorage", "Atoll", "Bay", "Cave", "Cavern", "Cay", "Cove", "Enclave", "Haven", "Hideout", "Island", "Isle", "Lagoon", "Port", "Reef", "Refuge", "Retreat", "Sanctuary"];
var nm3 = ["Anchors", "Auras", "Barnacles", "Blackbeard", "Blood", "Booty", "Broken Teeth", "Buccaneers", "Corsairs", "Cries", "Crimson", "Crocodiles", "Crosses", "Crow's Nests", "Danger", "Davy Jones'", "Dead Men", "Dead Whales", "Death", "Debris", "Demons", "Destruction", "Dry Rum", "Dubloons", "Executions", "Freebooters", "Gold", "Grog", "Gunpowder", "Hazard", "Hornswaggle", "Hurricanes", "Keelhaul", "Killer Whales", "Landlubbers", "Last Words", "Lost Treasure", "Macaws", "Marauders", "Maroon", "Mermaids", "Monkeys", "Monsters", "Murder", "Mutiny", "Mystery", "Nemo", "No Return", "No Tales", "Old Salt", "Parley", "Parrots", "Peril", "Plunder", "Privateers", "Quartermasters", "Rapiers", "Rum", "Rumrunners", "Salty Sands", "Sanguine", "Scallywags", "Scurvy", "Scuttle", "Scuttlebutt", "Seadogs", "Seaweed", "Shark Fin", "Sharks", "Shipwrecks", "Shivers", "Silver", "Skeletons", "Skulls", "Storms", "Sunken Ships", "Swashbucklers", "Thunder", "Timber", "Turtles", "Voices", "Whispers", "Wreckages", "the Black Sand", "the Black Spot", "the Black Water", "the Blood Moon", "the Cyclone", "the Dead Kraken", "the Death Curse", "the Devil", "the Full Moon", "the High Tide", "the Jolly Roger", "the Kraken", "the Low Tide", "the Monsoon", "the Moon", "the Occult", "the Red Sand", "the Red Water", "the Scourge", "the Sunken Fleet", "the Tempest", "the Tortoise", "the Unknown", "the Unnamed"];

function generator$places$pirate_coves() {

	i = Math.floor(Math.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + " " + nm2[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm2.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			names = nm2[rnd] + " of " + nm3[rnd2];
		}
		return names;
	}

}