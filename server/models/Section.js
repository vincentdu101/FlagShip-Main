"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var section = new Schema({
	name: {type: String, required: true},
	body: {type: String},
	article_id: {type: Schema.ObjectId, ref: "Article"},
	created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Section", section);