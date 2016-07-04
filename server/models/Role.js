'use strict';

// found inside table roles

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Role", schema);