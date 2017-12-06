'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
let cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

gulp.task('minify-css', () => {
  return gulp.src('css/custom.css')
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('assets/css/'));
});

gulp.task('minify-js', function() {
  return gulp.src('js/custom.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('opti-images', function() {
    return gulp.src('images/*')
      .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 8, // 5 saves 22.9 kB or 18.2%
        svgoPlugins: [{removeViewBox: false}, {removeUselessStrokeAndFill:false}]
      }))
      .pipe(gulp.dest('assets/images/'))
});

gulp.task('default', ['minify-css', 'minify-js', 'opti-images'])
