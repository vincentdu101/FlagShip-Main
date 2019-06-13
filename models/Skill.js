"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var skill = new Schema({
	name: {type: String, required: true},
	level: {type: Number},
	category_id: {type: Schema.ObjectId, ref: "Categories"},
	created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Skill", skill);