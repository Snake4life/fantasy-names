function generator$descriptions$rag_clothings(type) {
	var tp = type;
	var nm1 = ["Her", "She", "her", "she", "her", "His", "He", "his", "he", "him"];
	var nm2 = ["shirt", "t-shirt"];
	var nm3 = ["merely a dirt stained piece of fabric, hanging from one of", "barely a piece of clothing at all, the dirt stained fabric hangs onto", "nothing more than pieces of fabric held barely together, it hangs from", "a torn, dirt stained shadow of its former self, only barely able to hang from", "a gross, tattered home to lice and dirt, hanging from one of", "a dirty, flimsy piece of fabric, held together by a handful of fibers hanging from", "a dirty, tattered mess of fibers and fabric, only barely able to hang from", "a ruffled mess of loose fibers, dirt stains and holes, it barely manages to hang from", "a collection of dirt, lice and who knows what else, it barely manages to hang from", "nothing more than a collection of dirt, loose pieces of fabric and holes, only barely able to hang from", "a vile collection of pieces of dirty fabric, grime and muck, it barely manages to hang from", "nothing more than a crummy old piece of fabric full of holes and stained with dirt, it barely manages to hang from", "a nasty mess of holes, muck and dirty stains, hanging from one of", "a foul collection of raggedy pieces of fabric, dirt and holes, barely able to hang from", "nothing more than dirty pieces of fabric barely held together, hanging from"];
	var nm4 = ["There's a massive tear on the right side, which leaves much of", "There are holes all over it. Big, small and anything in between, leaving much of", "There's a huge tear on the left side, which leaves much of", "The bottom's worn and tattered and there's a huge hole in the front, leaving much of", "There are more holes than fabric at this point, leaving much of", "It's filled with holes which have grown over time, leaving much of", "Part of the bottom has been torns of and the sleeves are worn away, leaving much of", "There's a huge hole in one of the shoulders which reaches almost all the way down, leaving much of", "Insects or rodents have chewed hundreds of small holes in it, leaving much of", "Holes and tears are scattered all over and leave much of", "There's a big tear across the backside and holes all over the front, leaving much of", "Both of the sides are torn and worn out, leaving much of", "A big piece has been ripped from the right side and there are holes all over, leaving much of", "A big chunk of fabric has been torn from the left side and there are holes and tears all over, leaving much of", "The neck has been torn on one side and there are dozens of holes, leaving much of"];
	var nm5 = ["a tattered", "a ripped", "a worn out", "an old", "a scraggy", "a rugged"];
	var nm6 = ["vest", "poncho", "hoody", "jacket", "fleece", "coat"];
	var nm7 = ["It's far too big and stained with who knows what", "It's too big, torn and very dirty", "It's dirty, it's torn and it's worn out", "It's a size too small, stained and dirty", "It's too small, dirty and it smells", "It smells, it's dirty and full of stains", "It's in relative good condition apart from the holes", "It's in a fairly good condition, apart from the tears and stains", "It's a size too large, it's dirty and it's torn", "It's worn out, dirty and stained with grime", "It's almost the right size, but dirty, smelly and torn", "It's a torn, dirty, stinking mess", "It's filthy, flimsy and worn out", "It's greasy, full of stains and torn", "It's a nasty mess of stains and dirt"];
	var nm8 = ["stay warm", "fight the elements", "stay protected from the elements", "stay protected", "stay relatively dry", "stay protected from the wind"];

	var nm9 = ["aren't in great shape either", "aren't much better either", "are in terrible shape as well", "aren't what they used to be either", "are a mess as well", "are just as bad", "aren't looking great either", "have seen better times as well"];
	var nm10 = ["Holes everywhere and the legs have been shortened by wear and tear", "The right side is nothing more than a bunch of shreds", "The left side is torn up and nothing more than a bunch shreds", "There are holes all over the bottom part and there's a big tear on the right side", "Dirt stains, holes and tears are scattered all over", "There are holes all over the right side and what's left is covered in stains", "Rips and tears have turned these pants into a dirt stained mess of shreds", "There's a big tear at the backside and holes all across the sides", "A big tear has split the left leg in two and the right leg is full of smaller tears as well", "The pants are covered in small tears and covered in unknown stains", "Wear and tear has turned what were once small tears into big gaping holes", "There's a big tear on the left side which runs from the top to almost the bottom", "Dirt and other substances have stained these pants and gave them a new color", "The right leg has been torn at the knee and the left leg is full of holes", "The knees are torn and there are plenty of other small tears all over"];
	var nm11 = ["old", "dirty", "worn out", "broken", "missing laces", "tattered", "ragged", "grimy", "stained", "murky"];
	var nm12 = ["a size too small", "a size too big", "way too big", "a little too small", "barely the right size", "only just the right size", "a little too big"];
	var nm13 = ["a hole in the sole of the right shoe lets in water and dirt", "a hole in the sole of the left shoe lets in water and dirt", "the heel of the left shoe is worn far more than the right", "the outer fabric is tattered, worn and missing in some places", "the outer sole of the left shoe has long been lost", "the outer sole of the right shoe has long been lost", "the right toebox has come loose from the sole", "the left toebox has come loose from the sole", "the sole of the right shoe has come loose at the heel", "the sole of the left shoe has come loose at the heel", "the soles are worn to barely a sliver of what they were", "there are holes in the right side of the left shoe", "there are holes in the right side of the right shoe", "there's a hole in the left heel which lets in water and dirt", "there's a hole in the left toebox which lets in water and dirt", "there's a hole in the right heel which lets in water and dirt", "there's a hole in the right toebox which lets in water and dirt"];

	var nm14 = ["large scarf", "small scarf", "scarf", "bandana"];
	var nm15 = ["face to just below the nose", "face to just below the eyes", "face in a way that covers the chin"];
	var nm16 = ["dirty and shoddy, but at least it doesn't smell", "old and ragged, but relatively clean", "torn and worn, but otherwise in a decent shape", "ragged and stained, but at least it's not smelly", "full of holes, but still holding together", "old and worn, but otherwise in a good condition", "torn and slightly stained, but otherwise in a decent shape", "worn out, but still holding together"];
	var nm17 = ["beanie, there was once a small pom pom on the top, but all that's left now is a small piece of yarn", "beanie, there's a hole in the top, but that's pretty much its only flaw", "beanie, it's in suprisingly good condition. It's old, but there are no holes or stains", "beanie, which may be old and worn out, but it's still in a relatively good and clean condition", "beanie, there's a small dirt stain on one of the sides, but that's its only real flaw", "bandana, there's a hole at the front, but other than that it's in pretty good shape", "bandana, it's old and ragged, but otherwise in a good and relatively clean condition", "bandana, there are a few small stains here and there, but it's otherwise in a relatively great condition", "bandana, there's a couple of small holes here and there, but it's relatively clean and in a decent condition", "bandana, surprisingly there are no holes or stains or any other major flaws besides its age"];

	var v = 5;
	var w = 6;
	var x = 7;
	var y = 8;
	var z = 9;
	if (tp === 1) {
		v = 0;
		w = 1;
		x = 2;
		y = 3;
		z = 4;
	}

	var rnd1 = Math.floor(Math.random() * nm1.length);
	if (rnd1 < 5) {
		nm2 = ["shirt", "t-shirt", "dress"];
	}
	var rnd2 = Math.floor(Math.random() * nm2.length);
	var rnd3 = Math.floor(Math.random() * nm3.length);
	var rnd4 = Math.floor(Math.random() * nm4.length);
	var rnd5 = Math.floor(Math.random() * nm5.length);
	var rnd6 = Math.floor(Math.random() * nm6.length);
	var rnd7 = Math.floor(Math.random() * nm7.length);
	var rnd8 = Math.floor(Math.random() * nm8.length);
	var rnd9 = Math.floor(Math.random() * nm9.length);
	var rnd10 = Math.floor(Math.random() * nm10.length);
	var rnd11 = Math.floor(Math.random() * nm11.length);
	var rnd12 = Math.floor(Math.random() * nm12.length);
	var rnd13 = Math.floor(Math.random() * nm13.length);
	var rnd14 = Math.floor(Math.random() * nm14.length);
	var rnd15 = Math.floor(Math.random() * nm15.length);
	var rnd16 = Math.floor(Math.random() * nm16.length);
	var rnd17 = Math.floor(Math.random() * nm17.length);

	var name = "What was once a " + nm2[rnd2] + " is now " + nm3[rnd3] + " " + nm1[x] + " shoulders like a discarded old towel.";
	var name2 = nm4[rnd4] + " " + nm1[z] + " exposed to the elements.";

	var name3 = nm1[w] + "'s wearing " + nm5[rnd5] + " " + nm6[rnd6] + " over " + nm1[x] + " " + nm2[rnd2] + ". " + nm7[rnd7] + ", but at least it helps " + nm1[z] + " " + nm8[rnd8] + ", even if only for a little.";

	var name4 = nm1[v] + " pants " + nm9[rnd9] + ". " + nm10[rnd10] + ". But at least " + nm1[y] + " has shoes to protect " + nm1[x] + " feet. Although they're " + nm11[rnd11] + ", " + nm12[rnd12] + " and " + nm13[rnd13] + ".";

	var name5 = nm1[w] + " wears a  " + nm14[rnd14] + " around " + nm1[x] + " neck and has it wrapped around " + nm1[x] + " " + nm15[rnd15] + ". It's " + nm16[rnd16] + ".";
	var name6 = nm1[v] + " head is covered by a " + nm17[rnd17] + ".";



	var result = "";
	result += name;
	result += "\n";
	result += name2;
	result += "\n";
	result += "\n";
	result += name3;
	result += "\n";
	result += "\n";
	result += name4;
	result += "\n";
	result += "\n";
	result += name5;
	result += "\n";
	result += name6;
	return result;
}