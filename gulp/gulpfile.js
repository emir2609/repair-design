const gulp = require ("gulp");
const browserSync = require('browser-sync').create();


gulp.task("hello", function(done) {
  console.log("Привет, мир!");
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
// слежение за изменениями
  gulp.watch("./*.html").on('change', browserSync.reload);
});