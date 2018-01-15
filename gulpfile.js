"use strict"

var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

var sassPaths = "app/scss/**/*.scss";
var aggregatedPath = "app/scss/aggregated.scss";
var componentPaths = "./flagship-main/src/app/**/*.scss";

gulp.task("sass-app", function(){
	return gulp.src(aggregatedPath)
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("app/scss"))
});

gulp.task("sass-components", function() {
	return gulp.src(componentPaths)
		.pipe(sass().on("error", sass.logError))
		.pipe(concat("styles.css"))
		.pipe(gulp.dest("./flagship-main/src/"));
});

gulp.task("watch", function(){
	gulp.watch(sassPaths, ["sass-components"]);
});