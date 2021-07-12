"use strict";

const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const dartSass = require("sass");

const sass = gulpSass(dartSass);

gulp.task("sass", sassCompiler);
gulp.task("watch", watch);

function sassCompiler() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css/style.css"));
}

function watch() {
  gulp.watch("src/scss/**/*.scss", sassCompiler);
}
