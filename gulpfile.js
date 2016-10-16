'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webpack = require('gulp-webpack'),
    webserver = require('gulp-webserver');

gulp.task('sass', function() {
  gulp.src('./app/sass/application.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

// sass watch
gulp.task('sass:watch', function() {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

// webserver
gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// copy html
gulp.task('copyhtml', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(gulp.dest('./public/'));
});

// copy js
gulp.task('copyjs', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('public/js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('build', ['sass:watch', 'webserver']);
gulp.task('default', ['build']);

