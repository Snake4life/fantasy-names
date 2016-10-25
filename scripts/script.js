// Elements
var nametype = document.getElementsByClassName('nametype')[0];
function getnamelist() {return document.getElementById(nametype.value);}
var gender   = document.getElementById('gender');
var quantity = document.getElementById('quantity');
var output   = document.getElementById('output');

// Load cookie
if(readCookie("selectedGenerator") != null) {
	var options = readCookie("selectedGenerator").split("$");
	nametype.value      = options[0];
	getnamelist().value = options[1];
	gender.value        = options[2];
	quantity.value      = options[3];
}

// Generate names
function generate() {
	createCookie("selectedGenerator", nametype.value+"$"+getnamelist().value+"$"+gender.value+"$"+quantity.value, 365);
	
	if(nametype.value == "descriptions") quantity.value = 1; // Fix lagging
	
	// Check if the script is loaded, if not load .min.js, if not error
	var generator = window["generator$"+nametype.value.replace(/-/g, '_')+"$"+getnamelist().value.replace(/-/g, '_')];
	if(typeof generator === 'function') {
		output.setAttribute("data-generator", nametype.value+"$"+getnamelist().value);
		output.innerText = "";
		for(var i = 0; i < quantity.value; i++) output.innerText += generator(gender.value == "female" ? 1 : 0) + "\n";
	} else {
		loadScript("generators/"+nametype.value+"/"+getnamelist().value+".min.js", function() {
			var generator = window["generator$"+nametype.value.replace(/-/g, '_')+"$"+getnamelist().value.replace(/-/g, '_')];
			if(typeof generator === 'function') {
				output.setAttribute("data-generator", nametype.value+"$"+getnamelist().value);
				output.innerText = "";
				for(var i = 0; i < quantity.value; i++) output.innerText += generator(gender.value == "female" ? 1 : 0) + "\n";
			} else {
				console.log("Not found: generator$"+nametype.value.replace(/-/g, '_')+"$"+getnamelist().value.replace(/-/g, '_'));
			}
		});
	}
}

// Listeners that change the form and call generate
nametype.onchange = function() {
	var namelists = document.getElementsByClassName('namelist');
	for(var i = 0; i < namelists.length; i++) namelists[i].style.display = "none";
	getnamelist().style.display = "inline";
	getnamelist().onchange = gender.onchange = quantity.onchange = function() {generate();}
	generate();
}
document.onkeydown = function(evt) {if ((evt || window.event).keyCode == 32) generate();};
nametype.onchange();
