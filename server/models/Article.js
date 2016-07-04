"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	description: {type: String},
	created_at: {type: Date, default: Date.now},
	category_id: {type: Schema.ObjectId, ref: "Categories"}
});

module.exports = mongoose.model("Article", schema);