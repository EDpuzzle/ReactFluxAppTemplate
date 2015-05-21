var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var less = require("gulp-less");
var stylish = require("jshint-stylish");
var nodemon = require("gulp-nodemon");
var gutil = require("gulp-util");

gulp.task("browserify", function() {
	gulp.src("src/client/js/main.js")
		.pipe(browserify({transform: "reactify"}))
		.pipe(concat("main.js"))
		.pipe(gulp.dest("dist/js"));
});

gulp.task("less", function () {
	return gulp.src("src/client/less/app.less")
		.pipe(less())
		.pipe(gulp.dest("dist/css"));
});

gulp.task("jshint", function () {
	return gulp.src("src/client/js/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task("html", function() {
	gulp.src("src/server/views/index.html")
		.pipe(gulp.dest("dist"));
	gulp.src("src/client/assets/*.*")
		.pipe(gulp.dest("dist/assets"));
});

gulp.task("build", ["browserify", "html", "less"]);

gulp.task("watch", ["build"], function() {
	gulp.watch("src/client/js/*.*", ["browserify"]);
	gulp.watch("src/client/less/*.less", ["less"]);
});

gulp.task("default", ["watch"], function () {
	nodemon({
		script : "src/server/server.js",
		ext    : "html js",
		ignore : ["src/", "node_modules/**/node_modules/", ".git"],
		env    : { "NODE_ENV": "development" }
	})
		.on("start", function () {
			gutil.log(gutil.colors.white.bgRed.bold("Nodemon - Server Started - Development"));
		})
		.on("restart", function () {
			gutil.log(gutil.colors.white.bgRed.bold("Nodemon - Server Restarted - Development"));
		});
});