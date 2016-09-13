// Sass
// Compiles Thumbprint to a CSS file.

var gulp          = require('gulp'),
    paths         = require('../config').paths,
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    gulpStylelint = require('gulp-stylelint');
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('sass:compile', function() {
  return gulp.src(paths.thumbprint)
    // .pipe(gulpStylelint({
    //     reporters: [
    //       {formatter: 'string', console: true}
    //     ]
    // }))
    .pipe(sass({
      errLogToConsole: true,
    }))
    .pipe(gulp.dest(paths.cssDest));
});

gulp.task('sass:autoprefix', ['sass:compile'], function() {
  return gulp.src(paths.cssDestName)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.stream());
});

gulp.task('sass', ['sass:compile', 'sass:autoprefix']);
