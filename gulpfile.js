var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass =  require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var include = require('gulp-include');
var pngquant = require('imagemin-pngquant');

var js = "./src/js/main.js";
var css = "./src/sass/*.scss";
var components = "./src/sass/**";
var img = "./src/img/**";

// Javascript task
gulp.task('js-task', function() {
  gulp.src(js)
    .pipe(include())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Sass task
gulp.task('sass-task', function() {
  gulp.src(css)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
});

// Images tasks
gulp.task('img-task', function() {
  gulp.src(img)
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./dist/img'))
});

// Default task
gulp.task('default', function() {
  gulp.run('js-task', 'sass-task', 'img-task');

  watch(js, function(){
    gulp.run('js-task');
  });
  watch(css, function(){
    gulp.run('sass-task');
  });
  watch(components, function(){
    gulp.run('sass-task');
  });
  watch(img, function(){
    gulp.run('img-task');
  });
});
