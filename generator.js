var fs = require('fs');

module.exports = function(group, individual, quantity, type) {
	if(arguments.length < 2) {
		console.error("Usage: fantasynames GROUP INDIVIDUAL [QUANTITY] [TYPE]");
	} else {
		if(typeof quantity === 'undefined') quantity = 1;
		if(typeof type === 'undefined') type = 0;
		
		eval(fs.readFileSync('generators/'+group+'/'+individual+'.min.js','utf8'));
		var generator = eval('generator$'+group+'$'+individual);
		
		var output = "";
		for(var i = 0; i < quantity; i++) {
			output += generator(type);
			if(i < quantity - 1) output += '\n';
		}
		return output;
	}
}
