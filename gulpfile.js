const autoprefixer = require('autoprefixer-stylus'),
      babel = require('gulp-babel'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      plumber = require('gulp-plumber'),
      reload = browserSync.reload,
      rupture = require('rupture'),
      runSequence = require('run-sequence'),
      shell = require('gulp-shell'),
      stylus = require('gulp-stylus'),
      uglify = require('gulp-uglify');

gulp.task('stylus', () =>
  gulp.src('./src/styl/main.styl')
    .pipe(plumber())
    .pipe(stylus({
      compress: true,
      use: [rupture(), autoprefixer()]
    }))
    .pipe(gulp.dest('./dist/css/')));

gulp.task('stylint', shell.task([
  'npm run stylint'
]));

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

gulp.task('default', () =>
  runSequence('stylint', ['images', 'js', 'stylus'], 'server', 'watch'));
