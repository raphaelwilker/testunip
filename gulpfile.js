var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('default', function() {
  // place code for your default task here
});


//gulp.task('ngdocs', [], function () {
//  var gulpDocs = require('gulp-ngdocs');
//  return gulp.src([
//  	'./view/**/*.js',
//  	'./controller/**/*.js',
//  	'./scripts/**/*.js'])
//    .pipe(gulpDocs.process())
//    .pipe(gulp.dest('./docs'));
//});

gulp.task('compress', function () {

  	gulp.src([
        'node_modules/jquery/**/jquery.min.js',
        'node_modules/bootstrap/**/bootstrap.min.js'])
  	    .pipe(concat('libs-min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('bin/js'))

    gulp.src(['js/*.js'])
  	    .pipe(concat('unip-min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('bin/js'))
        
    gulp.src(['node_modules/bootstrap/**/bootstrap.min.css'])
 		.pipe(concat('libs-min.css'))
 		.pipe(cssMin())
 		.pipe(gulp.dest('bin/css'))    

    gulp.src(['css/**/*.css'])
 		.pipe(concat('unip-min.css'))
 		.pipe(cssMin())
 		.pipe(gulp.dest('bin/css'))

});