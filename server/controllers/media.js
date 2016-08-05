'use strict';

var Media = require("../models/Media");
var MediaController = {};
var notAuthenticated = "user not authenticated";

MediaController.create = function(req, res) {
	// if (req.isAuthenticated()) {
		var media = new Media({
			name: req.body.name,
			url: req.body.url
		});

		media.save(function(error, media){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(media);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

MediaController.get = function(req, res) {
	// if (req.user) {
		var id = req.params.id;
		Media.findById(id, function(error, media){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(media);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};	

MediaController.index = function(req, res) {
	// if (req.user) {
		Media.find({}, function(error, medias){
			if (error) {
				res.status(500).json(error);
			} else {
				res.status(200).json(medias);
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

MediaController.update = function(req, res) {
	// if (req.isAuthenticated()) {
		Media.findById(req.params.id, function(error, media){
			if (error || !media) {
				res.status(500).json(error);
			} else {
				media.update({
					name: req.body.name || media.name,
					description: req.body.description || media.description,
					article_id: req.body.article_id || media.article_id,
					category_id: req.body.category_id || media.category_id
				}, function(error, media){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(media);
					}
				});
			}
		});
	// } else {
	// 	res.status(500).json({error: notAuthenticated});
	// }
};

MediaController.delete = function(req, res) {
	if (req.isAuthenticated()) {
		var id = req.params.id;

		Media.findById(id, function(error, media){
			if (error) {
				res.status(500).json(error);
			} else {
				media.remove(function(err, media){
					if (error) {
						res.status(500).json(error);
					} else {
						res.status(200).json(media);
					}
				});
			}		
		});
	} else {
		res.status(500).json({error: notAuthenticated});
	}
};

module.exports = MediaController;