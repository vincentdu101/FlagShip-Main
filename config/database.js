var mongoose = require("mongoose");

module.exports = {
	
	connect: function() {
		mongoose.connect("mongodb://localhost/flagship", function(err, db){

			if (err) {
				throw err;
			} else {
				console.log("successful connection to db");
			}

		});
	}

};