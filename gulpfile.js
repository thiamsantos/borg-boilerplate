var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass =  require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var include = require('gulp-include');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

var mainjs = './src/js/main.js';
var js = './src/js/**';
var css = './src/sass/*.scss';
var components = './src/sass/**';
var img = './src/img/**';

// Server task
gulp.task('server', function () {
  connect.server({
    root: ['.'],
    port: 3000,
    livereload: true
  });
});

// Javascript task
gulp.task('js-task', function() {
  gulp.src(mainjs)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(uglify().on('error', gutil.log))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'));
});

// Sass Task
gulp.task('sass-task', function() {
  gulp.src(css)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'));
});

// Images tasks
gulp.task('img-task', function() {
  gulp.src(img)
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img'));
});

// Default task
gulp.task('default', function() {
  gulp.run('js-task', 'sass-task', 'img-task', 'server');

  watch(js, function(){
    gulp.run('js-task').pipe(connect.reload());
  });
  watch(components, function(){
    gulp.run('sass-task').pipe(connect.reload());
  });
  watch(img, function(){
    gulp.run('img-task').pipe(connect.reload());
  });
});
