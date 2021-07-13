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
    server: {
      baseDir: "./src",
    },
  });
  done();
});

gulp.task(
  "watch",
  gulp.series("browserSync", "sass", function Watch() {
    gulp.watch("src/scss/**/*.scss", sassCompiler);
    gulp.watch("src/*.html", { events: "all" }, function HtmlReload(cb) {
      browserSync.reload();
      cb();
    });
    gulp.watch("src/css/**/*.css", { events: "all" }, function CSSReload(cb) {
      browserSync.reload();
      cb();
    });
  })
);

function sassCompiler() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}
