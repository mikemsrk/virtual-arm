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


gulp.task('build', ['browserify'], function() {

});