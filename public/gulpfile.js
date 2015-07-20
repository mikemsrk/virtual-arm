// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint'),
    reactify      = require('reactify'),
    browserify    = require('browserify');
    source        = require('vinyl-source-stream'),
    rename        = require('gulp-rename'),


gulp.task('default', function() {
    gulp.start('browserify');
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/gallery/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/gallery/gallery.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(rename('main.built.js'))
    .pipe(gulp.dest('./build'));

});

gulp.task('testbuild', function() {
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/gallery/testapp.js');
  return b.bundle()
    .pipe(source('testapp.js'))
    .pipe(rename('testapp.built.js'))
    .pipe(gulp.dest('./build'));

});

gulp.task('watch', ['browserify'], function() {
  gulp.watch([
    './src/gallery/components/**/*.jsx', 
    './src/gallery/actions/**/*.js', 
    './src/gallery/constants/**/*.js', 
    './src/gallery/stores/**/*.js', 
    './src/gallery/**/*.js',
    './src/gallery/gallery.js'
  ], ['browserify']);

});