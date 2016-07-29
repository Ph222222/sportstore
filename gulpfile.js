var gulp = require('gulp');

var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
        	ui: {
       			port: 5000
       		},
            baseDir: "./public"
        }
    });
});
/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});


gulp.task('default', ['browser-sync'], function() {
  // place code for your default task here
// gulp.start('browser-sync');
gulp.watch(['public/*.html'], ['bs-reload']);
});
