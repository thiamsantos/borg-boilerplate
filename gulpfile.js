var gulp = require('gulp');
var concat = require('gulp-concat');
var size = require('gulp-filesize');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass =  require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


var js = "./src/js/*.js";
var css = "./src/sass/*.scss";
var components = "./src/sass/**/*.scss";
var img = ["./src/img/*.png", "./src/img/*.jpg"];

// Javascript task
gulp.task('js-task', function() {
  gulp.src(js)
    .pipe(concat('./main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Sass task
gulp.task('sass-task', function() {
  gulp.src(css)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist/css'));
});

// Images tasks
gulp.task('img-task', function() {
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
