"use strict";

const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const dartSass = require("sass");
const browserSync = require("browser-sync").create();

const sass = gulpSass(dartSass);

gulp.task("sass", sassCompiler);

gulp.task("browserSync", function browserInit(done) {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: "./src",
    },
  });
  done();
});

gulp.task(
  "watch",
  gulp.series("browserSync", "sass", function Watch() {
    gulp.watch("src/assets/scss/**/*.scss", sassCompiler);
    gulp.watch("src/*.html", { events: "all" }, siteReload);
    gulp.watch("src/assets/css/**/*.css", { events: "all" }, siteReload);
    gulp.watch("src/assets/js/**/*.js", { events: "all" }, siteReload);
  })
);

function siteReload(cb) {
  browserSync.reload();
  cb();
}

function sassCompiler() {
  return gulp
    .src("src/assets/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/assets/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}
