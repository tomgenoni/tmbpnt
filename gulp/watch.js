// Watch
// Watch tasks.

var gulp = require('gulp');

gulp.task('watch:sass', function() {
  gulp.watch(paths.scss.files, ['sass']);
});
