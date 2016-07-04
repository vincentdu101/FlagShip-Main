'use strict';

var User = require("../models/User");
var UserController = {};
var notAuthenticated = "user not authenticated";
var passport = require("passport");

UserController.create = function(req, res) {
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		role_id: req.body.role_id
	});

	user.save(function(error, user){
		if (error) {
			res.status(500).json(error);
		} else {
			res.status(200).json(user);
		}
	});
};

UserController.get = function(req, res) {
	if (req.isAuthenticated()) {
		var id = req.params.id;
		User.findById(id, function(error, user){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(user);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};	

UserController.index = function(req, res) {
	if (req.isAuthenticated()) {
		User.find({}, function(error, users){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(users);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

UserController.update = function(req, res) {
	if (req.isAuthenticated()) {
		User.findById(req.params.id, function(error, user){
			if (error || !user) {
				res.status(500).json(error);
			} else {
				user.update({
					username: req.body.username || user.username,
					password: req.body.password || user.password,
					name: req.body.name || user.name,
					role_id: req.body.role_id || user.role_id
				}, function(error, user){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(user);
					}
				});
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

UserController.delete = function(req, res) {
	if (req.isAuthenticated()) {
		var id = req.params.id;

		User.findById(id, function(error, user){
			if (error) {
				res.status(500).json(error);
			} else {
				user.remove(function(err, user){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(user);
					}
				});
			}		
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

UserController.register = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	User.register(new User({
		username: req.body.username,
		password: req.body.password,
		name: req.body.name,
		role_id: req.body.role_id
	}), password, function(err, user){
        if (err) {
            console.log(err.message);
        }

        passport.authenticate('local')(req, res, function () {
            res.status(200).json(user);
        });		
	});
};

UserController.loginSuccess = function(req, res) {
	if (req.isAuthenticated()) {
		res.status(200).json(req.user._doc);
	}
};

UserController.loginFailure = function(req, res) {
	debugger;
};

module.exports = UserController;