var gulp = require('gulp');
var paths = require('../paths');
var tslint = require('gulp-tslint');

gulp.task('lint', function() {
  return gulp.src([paths.source, 'test/unit/**/*.ts'])
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError: false
    }));
});
