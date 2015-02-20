'use strict';

// Package Requirements
var gulp        = require('gulp'),
    rubySass    = require('gulp-ruby-sass'), // Ruby-Sass because reasons ...
    autoPrefix  = require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify');

// Let's create a task that processes our sass and scss files.
gulp.task('styles', function () {
  // rather than passing in an object of sassSettings directly into the fn call
  // we'll add it via reference to a variable.
  var sassSettings = {
    loadPath: [
      './src/styles'
    ],
    require: 'compass/import-once/activate',
    style: 'expanded',
    trace: true,
    unixNewlines: true
  };
  return rubySass('./src/styles', sassSettings)
    .on('error', function (err) {
      console.error('Error', err.message);
    })
    .pipe(autoPrefix())
    .pipe(gulp.dest('./dist/styles'))
});

gulp.task('scripts', function () {
  // Now we need to concat all of our script files into one
  gulp.src('./src/scripts/**/*.js')
    .pipe(concat('my-scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('default', ['styles', 'scripts']);
