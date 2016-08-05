"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var media = new Schema({
	name: {type: String, required: true},
	url: {type: String, required: true},
	created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Media", media);