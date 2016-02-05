var gulp = requre('gulp')

gulp.task('copy', function(){
  gulp.src('./src/*.html')
    .pipe('./build')
})

