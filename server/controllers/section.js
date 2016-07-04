'use strict';

var Section = require("../models/Section");
var SectionController = {};
var notAuthenticated = "user not authenticated";

SectionController.create = function(req, res) {
	if (req.isAuthenticated()) {
		var section = new Section({
			name: req.body.name,
			description: req.body.description,
			article_id: req.body.article_id
		});

		section.save(function(error, section){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(section);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

SectionController.get = function(req, res) {
	// if (req.user) {
		var id = req.params.id;
		Section.findById(id, function(error, section){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(section);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};	

SectionController.index = function(req, res) {
	// if (req.user) {
		Section.find({}, function(error, sections){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(sections);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

SectionController.update = function(req, res) {
	if (req.isAuthenticated()) {
		Section.findById(req.params.id, function(error, section){
			if (error || !section) {
				res.status(500).json(error);
			} else {
				section.update({
					name: req.body.name || section.name,
					description: req.body.description || section.description,
					article_id: req.body.article_id || section.article_id
				}, function(error, section){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(section);
					}
				});
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

SectionController.delete = function(req, res) {
	if (req.isAuthenticated()) {
		var id = req.params.id;

		Section.findById(id, function(error, section){
			if (error) {
				res.status(500).json(error);
			} else {
				section.remove(function(err, section){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(section);
					}
				});
			}		
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

module.exports = SectionController;