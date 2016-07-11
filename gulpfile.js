const gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      rupture = require('rupture'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      plumber = require('gulp-plumber'),
      babel = require('gulp-babel'),
      browserSync = require('browser-sync').create(),
      imagemin = require('gulp-imagemin'),
      reload = browserSync.reload;

gulp.task('stylus', () =>
  gulp.src('./src/styl/main.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [gridus(), rupture()]
    }))
    .pipe(gulp.dest('./dist/css/')));

gulp.task('js', () =>
  gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({
        presets: ['es2015']
      }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/')));

gulp.task('images', () =>
  gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/')));

gulp.task('server', () =>
  browserSync.init({
    server: {
      baseDir: "./"
  }}));

gulp.task('watch', () => {
  gulp.watch('src/styl/**/*.styl', ['stylus']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/img/**/*').on('added', gulp.start('images'));
  gulp.watch('src/img/**/*').on('deleted', gulp.start('images'));

  gulp.watch('dist/*').on('change', reload);
  gulp.watch('index.html').on('change', reload);
});

gulp.task('default', ['images', 'js', 'stylus', 'server', 'watch']);
