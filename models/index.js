var mongoose = require('mongoose');

module.exports = function(app){
	var uristring = process.env.MONGOLAB_URI ||
					process.env.MONGOHQ_URL ||
					process.env.DATABASE_URL;

	// Your database URL should go here 
	mongoose.connect(uristring);
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {

		// Add other configuration if needed

		// Load the models 
		// mongoose.models.ModelName = require('./modelname.js');
		
		// Or declare the models here 

	});

	return mongoose;
};
