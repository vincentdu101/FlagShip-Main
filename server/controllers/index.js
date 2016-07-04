'use strict';
var User = require("./user");
var Role = require("./role");
var Article = require("./article");
var Category = require("./category");
var Section = require("./section");
var Media = require("./media");


module.exports = {
	user: User,
	role: Role,
	article: Article,
	category: Category, 
	section: Section,
	media: Media
};