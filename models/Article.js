"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	description: {type: String},
	body: {type: String},
	created_at: {type: Date, default: Date.now},
	category: {type: String},
	demo: {type: String},
	image: {type: String}
});

module.exports = mongoose.model("Article", schema);