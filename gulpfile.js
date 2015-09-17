'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('jquery.elevatezoom.js')    
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))   
});

gulp.task('default', ['jshint'], function (cb) {
  
});