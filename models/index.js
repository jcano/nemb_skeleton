var mongoose = require('mongoose');

module.exports = function(app){
	var uristring = process.env.MONGOLAB_URI ||
					process.env.MONGOHQ_URL ||
					process.env.DATABASE_URL;

	// Your database URL should go here 
	mongoose.connect(uristring);

	// Add other configuration if needed 

	// Load the models 
	// mongoose.models.ModelName = require('./modelname.js');
	
	// Or declare the models here 
	

	return mongoose;
};
