'use strict';

var Category = require("../models/Category");
var CategoryController = {};
var notAuthenticated = "user not authenticated";

CategoryController.create = function(req, res) {
	// if (req.isAuthenticated()) {
		var category = new Category({
			name: req.body.name,
			description: req.body.description
		});

		category.save(function(error, category){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(category);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

CategoryController.get = function(req, res) {
	// if (req.isAuthenticated()) {
		var id = req.params.id;
		Category.findById(id, function(error, category){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(category);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};	

CategoryController.index = function(req, res) {
	// if (req.user) {
		Category.find({}, function(error, categorys){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(categorys);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

CategoryController.update = function(req, res) {
	// if (req.isAuthenticated()) {
		Category.findById(req.params.id, function(error, category){
			if (error || !category) {
				res.status(500).json(error);
			} else {
				category.update({
					name: req.body.name || category.name,
					description: req.body.description || category.description
				}, function(error, category){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(category);
					}
				});
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

CategoryController.delete = function(req, res) {
	// if (req.isAuthenticated()) {
		var id = req.params.id;

		Category.findById(id, function(error, category){
			if (error) {
				res.status(500).json(error);
			} else {
				category.remove(function(err, category){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(category);
					}
				});
			}		
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

module.exports = CategoryController;