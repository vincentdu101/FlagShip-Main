'use strict';

var User = require("../models/User");
var Role = require("../models/Role");
var UserController = {};
var notAuthenticated = "user not authenticated";
var passport = require("passport");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var keys = require("../config/keys");

function respondWithUserAndRole(user) {
	
}

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
	var password = bcrypt.hashSync(req.body.password, 8);

	User.register(new User({
		username: req.body.username,
		password: password,
		name: req.body.name,
		role_id: req.body.role_id
	}), password, function(err, user){
        if (err) {
            console.log(err.message);
        }

        var token = jwt.sign({id: user._id}, keys.secret, {
        	expiresIn: 6000
        });

        res.status(200).send({auth: true, token: token});
	});
};

UserController.verifyUser = function(req, res) {
	var token = req.body.token;
	if (!token) {
		return res.status(401).send({auth: false, message: "No token provided."});
	} else {
		jwt.verify(token, keys.secret, function(err, decoded) {
			if (err) {
				return res.status(500).send({
					auth: false, message: "Failed to authenticate token."
				});
			}

			User.findById(decoded.id, function(error, user){
				if (error) {
					res.status(500).send(error);
				} else {
					Role.findById(user.role_id, function(err, role) {
						res.status(200).send(user);
					});
				}
			});
		});
	}
};

UserController.login = function(req, res) {
	User.findOne({username: req.body.username}, function(err, user) {
		if (err) {
			return res.status(500).send({
				auth: false, message: "Failed to authenticate user."
			});
		} else if (!user) {
			return res.status(404).send("No user found");
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

		if (!passwordIsValid) {
			return res.status(401).send({auth: false, token: null});
		} else {
			var token = jwt.sign({id: user._id}, keys.secret, {
				expiresIn: 6000
			});
			
			Role.findById(user.role_id, function(err, role) {
				res.status(200).send({
					auth: true, 
					token: token, 
					user: user,
					role: role.name
				});
			});
		}
	});
};

module.exports = UserController;