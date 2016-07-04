"use strict";

var Role = require("../models/Role");
var RoleController = {};
var notAuthenticated = "user not authenticated";

RoleController.create = function(req, res) {
	if (req.isAuthenticated()) {
		var role = new Role({
			name: req.body.name,
			description: req.body.description
		});

		role.save(function(error, role){
			if (error) {
				console.log(error);
				res.json(error);
			} else {
				console.log("successfully created role");
				res.json(role);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

RoleController.get = function(req, res) {
	if (req.isAuthenticated()) {
		var id = req.params.id;
		Role.findById(id, function(error, role){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(role);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

RoleController.index = function(req, res) {
	if (req.isAuthenticated()) {
		Role.find({}, function(error, roles){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(roles);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

module.exports = RoleController;