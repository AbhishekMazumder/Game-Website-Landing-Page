var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

// Compile Sass into CSS & auto-inject into browser

gulp.task('sass', function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());

});

//Move JS files to src/js

gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());

});

//Watching Sass/html files & Server

gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootsrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('default', ['js', 'serve']);