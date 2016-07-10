"use strict"

var gulp = require("gulp");
var sass = require("gulp-sass");

var sassPaths = "app/scss/**/*.scss";
var aggregatedPath = "app/scss/aggregated.scss";

gulp.task("sass", function(){
	return gulp.src(aggregatedPath)
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("app/scss"))
})

gulp.task("watch", function(){
	gulp.watch(sassPaths, ["sass"]);
});