'use strict';

var Skill = require("../models/Skill");
var SkillController = {};
var notAuthenticated = "user not authenticated";

SkillController.create = function(req, res) {
	// if (req.isAuthenticated()) {
		var skill = new Skill({
			name: req.body.name,
			level: req.body.level,
			category_id: req.body.category_id
		});

		skill.save(function(error, skill){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(skill);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

SkillController.get = function(req, res) {
	// if (req.user) {
		var id = req.params.id;
		Skill.findById(id, function(error, skill){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(skill);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};	

SkillController.index = function(req, res) {
	// if (req.user) {
		Skill.find({}, function(error, skills){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(skills);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

SkillController.update = function(req, res) {
	// if (req.isAuthenticated()) {
		Skill.findById(req.params.id, function(error, skill){
			if (error || !skill) {
				res.status(500).json(error);
			} else {
				skill.update({
					name: req.body.name || skill.name,
					level: req.body.level || skill.level,
					category_id: req.body.category_id || skill.category_id
				}, function(error, skill){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(skill);
					}
				});
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

SkillController.delete = function(req, res) {
	// if (req.isAuthenticated()) {
		var id = req.params.id;

		Skill.findById(id, function(error, skill){
			if (error) {
				res.status(500).json(error);
			} else {
				skill.remove(function(err, skill){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(skill);
					}
				});
			}		
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

module.exports = SkillController;