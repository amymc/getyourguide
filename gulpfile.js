var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['watch']);

gulp.task('browser-sync', function() {
    browserSync.init(null, {
      proxy: "localhost:8080"
    });
});

gulp.task('sass-concat', function () {
  return gulp
    .src('./styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('js-concat', function(){
  return gulp
    .src('./scripts/**/*.js')
    .pipe(concat('concat.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('./styles/**/*.scss', ['sass-concat']);
  gulp.watch('./scripts/**/*.js', ['js-concat']);
});
