'use strict';

var Article = require("../models/Article");
var Media = require("../models/Media");
var ArticleController = {};
var notAuthenticated = "user not authenticated";
var ObjectId = require("mongodb").ObjectID;
var Q = require("q");

function generateImage(image) {
	return new Media({ name: image.name, url: image.url });
}

function findImageMedia(id) {
	var mediaDeferred = Q.defer();
	Media.findById(id, function(error, media) {
		mediaDeferred.resolve(media);
	});
	return mediaDeferred;
}

function findImagesForArticles(articles) {
	var deferred = Q.defer();
	for (var i = 0; i < articles.length; i++) {
		for (var j = 0; j < articles[i].images.length; j++) {
			findImageMedia(articles[i].images[j]).then(function(media){
				articles[i].images[j].push(media);
				if ((i + 1) === articles.length && (j+1) === articles[i].images.length) {
					deferred.resolve(articles);
				}
			});
		}
	}
	return deferred;
}

function convertToRegexFilter(key, value) {
	return { $regex: new RegExp(value, "i"), $options: "m"};
}

ArticleController.create = function(req, res) {
	// if (req.isAuthenticated()) {
		var article = new Article({
			name: req.body.name,
			description: req.body.description,
			body: req.body.body,
			image: req.body.image,
			category_id: req.body.category_id
		});

		article.save(function(error, article){
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
		if (options.name === "undefined") {
			delete options.name;
		} else {
			options.name = convertToRegexFilter("name", options.name);
		}
		Article.find(options).exec(options, function(error, articles){
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
	// if (req.isAuthenticated()) {
		Article.findById(req.params.id, function(error, article){
			if (error || !article) {
				res.status(500).json(error);
			} else {
				article.update({
					name: req.body.name || article.name,
					description: req.body.description || article.description,
					body: req.body.body || article.body,
					image: req.body.image || article.image,
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
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

ArticleController.delete = function(req, res) {
	// if (req.isAuthenticated()) {
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
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

module.exports = ArticleController;