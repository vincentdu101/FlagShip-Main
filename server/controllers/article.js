'use strict';

var Article = require("../models/Article");
var ArticleController = {};
var notAuthenticated = "user not authenticated";
var ObjectId = require("mongodb").ObjectID;

ArticleController.create = function(req, res) {
	debugger;
	if (req.isAuthenticated()) {
		var article = new Article({
			name: req.body.name,
			description: req.body.description,
			category_id: req.body.category_id
		});

		article.save(function(error, article){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(article);
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

ArticleController.get = function(req, res) {
	// if (req.user) {
		var id = req.params.id;
		Article.findById(id, function(error, article){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(article);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};	

ArticleController.index = function(req, res) {
	// if (req.user) {
		var options = req.query || {};
		if (options.category_id) {
			options.category_id = new ObjectId(options.category_id);
		}
		Article.find(options, function(error, articles){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(articles);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

ArticleController.update = function(req, res) {
	if (req.isAuthenticated()) {
		Article.findById(req.params.id, function(error, article){
			if (error || !article) {
				res.status(500).json(error);
			} else {
				article.update({
					name: req.body.name || article.name,
					description: req.body.description || article.description,
					category_id: req.body.category_id || article.category_id
				}, function(error, article){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(article);
					}
				});
			}
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

ArticleController.delete = function(req, res) {
	if (req.isAuthenticated()) {
		var id = req.params.id;

		Article.findById(id, function(error, article){
			if (error) {
				res.status(500).json(error);
			} else {
				article.remove(function(err, article){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(article);
					}
				});
			}		
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

module.exports = ArticleController;