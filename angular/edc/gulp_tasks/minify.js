const gulp = require('gulp');
var minify = require('gulp-minify');

module.exports = function() {
  gulp.src('dist/edc-vendor*.js')
    .pipe(minify({
        
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '*-min.js']
    }))
    .pipe(gulp.dest('dist'))
}