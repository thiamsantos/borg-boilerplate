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
var csscss = require('gulp-csscss');
var browserSync = require('browser-sync').create();
var notify = require("gulp-notify");

var mainjs = './src/js/main.js';
var js = './src/js/**';
var css = './src/sass/*.scss';
var components = './src/sass/**';
var img = './src/img/**';

// Server task
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  watch("./*.html").on('change', browserSync.reload);
  watch("./dist/**").on('change', browserSync.reload);
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
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify("JS Compiled!"))
    .pipe(browserSync.stream());
});

// Sass Task
gulp.task('sass-task', function() {
  gulp.src(css)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify("Sass Compiled!"))
    .pipe(browserSync.stream());
});

// Sass Task
gulp.task('csscss-task', function() {
  gulp.src(css)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(csscss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});


// Images tasks
gulp.task('img-task', function() {
  gulp.src(img)
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img'))
    .pipe(notify("Images minified!"));
});

// Default task
gulp.task('default', function() {
  gulp.run('js-task', 'sass-task', 'img-task', 'browser-sync');

  watch(js, function(){
    gulp.run('js-task');
  });
  watch(components, function(){
    gulp.run('sass-task');
  });
  watch(img, function(){
    gulp.run('img-task');
  });
});
