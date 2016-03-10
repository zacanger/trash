'use strict'

const
  gulp     = require('gulp')
, stylus   = require('gulp-stylus')
, connect  = require('gulp-connect')
, concat   = require('gulp-concat')
, uglify   = require('gulp-uglify')
, ugcss    = require('gulp-uglifycss')
, annotate = require('gulp-ng-annotate')
, tasklist = require('gulp-task-listing')

gulp.task('server', () => {
  connect.server({
    livereload : true
  , root       : './dist'
  , port       : 9999
  })
})

gulp.task('stylus', () => {
  gulp.src('./src/styles/*.styl')
  .pipe(stylus())
  .pipe(ugcss())
  .pipe(concat('css.min.css'))
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload())
})

gulp.task('js', () => {
  gulp.src('./src/scripts/*.js')
  .pipe(annotate())
  .pipe(uglify())
  .pipe(concat('js.min.js'))
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch('./src/styles/*.styl', ['stylus'])
  gulp.watch('./src/scripts/*.js', ['js'])
})

gulp.task('help', tasklist)

gulp.task('default', ['stylus', 'js', 'server', 'watch'])

