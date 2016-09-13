// Watch
// Watch tasks.

var gulp = require('gulp');

gulp.task('watch:sass', function() {
  gulp.watch('src/thumbprint/**/*.scss', ['sass']);
});
