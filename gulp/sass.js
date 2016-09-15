// Sass
// Compiles Thumbprint to a CSS file.

var gulp          = require('gulp'),
    paths         = require('../config').paths,
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    gulpStylelint = require('gulp-stylelint');
    autoprefixer  = require('autoprefixer');
    postcss       = require('gulp-postcss'),
    doiuse        = require('doiuse'),
    reporter      = require('postcss-reporter');

gulp.task('style:compile', function() {
  return gulp.src(paths.scss.files)
    .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [{
            formatter: 'verbose',
            console: true
        }]
    }))
    .pipe(sass({
      errLogToConsole: true,
    }))
    .pipe(gulp.dest(paths.css.directory));
});

gulp.task('style:prefix', ['style:compile'], function () {
  return gulp.src(paths.css.filename)
    .pipe(postcss([
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ]))
    .pipe(gulp.dest(paths.css.directory))
    .pipe(browserSync.stream());
});

// Run it separately against the compiled CSS file
// to check for properties not supported by browsers
gulp.task('style:analyze', function () {
  return gulp.src(paths.css.filename)
    .pipe(postcss([
        doiuse({
            browsers: [
                'last 2 versions'
            ],
            ignore: [
                'flexbox',
                'font-unicode-range'
            ]
        }),
        reporter({
            clearMessages: true
        })
    ]))
});


gulp.task('style', ['style:compile', 'style:prefix']);
