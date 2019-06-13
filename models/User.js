'use strict';

// found inside table users

var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	role_id: {type: Schema.ObjectId, ref: "Role"},
	username: {type: String, required: true},
	password: {type: String, required: true},
	created_at: {type: Date, default: Date.now}
});

schema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", schema);