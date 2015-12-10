var gulp = require('gulp');
var concat = require('gulp-concat');
var size = require('gulp-filesize');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass =  require('gulp-sass');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var watch = require('gulp-watch');


var js = "./src/js/*.js";
var css = "./src/sass/*.scss";
var components = "./src/sass/**/*.scss";
var img = ["./src/img/*.png", "./src/img/*.jpg"];

// Javascript task
gulp.task('tjs', function() {
  gulp.src(js)
    .pipe(concat('./main.js'))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Sass task
gulp.task('tsass', function() {
  gulp.src(css)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist/css'));
});

// Images tasks
gulp.task('timg', function() {
  gulp.src(img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      //use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img'))
});

// Default task
gulp.task('default', function() {
  gulp.run('tjs', 'tsass', 'timg');

  watch(js, function(){
    gulp.run('tjs');
  });
  watch(css, function(){
    gulp.run('tsass');
  });
  watch(components, function(){
    gulp.run('tsass');
  });
  watch(img, function(){
    gulp.run('timg');
  });
});
