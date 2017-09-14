const gulp = require('gulp');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');
const browsersyncTasks = require('./gulp_tasks/browsersync');
const karmaTasks = require('./gulp_tasks/karma');
const miscTasks = require('./gulp_tasks/misc');
const webpackTasks = require('./gulp_tasks/webpack');

function addTasks(tasks) {
    for (task in tasks) {
        gulp.task(task, tasks[task]);
    }
}

addTasks(browsersyncTasks);
addTasks(karmaTasks);
addTasks(miscTasks);
addTasks(webpackTasks);

gulp.task('build', ['other', 'webpack:dist']);

gulp.task('watch', watch);
gulp.task('default', ['clean', 'build']);
gulp.task('serve', ['webpack:watch', 'watch', 'browsersync']);
gulp.task('serve:dist', ['default', 'browsersync:dist']);
gulp.task('test', ['karma:single-run']);
gulp.task('test:auto', ['karma:auto-run']);

function reloadBrowserSync(cb) {
    browserSync.reload();
}

function watch(done) {
    gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
    done();
}