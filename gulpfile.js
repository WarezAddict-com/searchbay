'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-js', function() {
  return gulp.src('js/custom.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('js/'));
});

gulp.task('minify-css', () => {
  return gulp.src('css/custom.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('css'));
});

gulp.task('default', ['minify-js', 'minify-css'])
