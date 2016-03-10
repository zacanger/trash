'use strict'

const
  gulp     = require('gulp')
, stylus   = require('gulp-stylus')
, concat   = require('gulp-concat')
, uglify   = require('gulp-uglify')
, server   = require('gulp-webserver')
, ugcss    = require('gulp-uglifycss')
, annotate = require('gulp-ng-annotate')
, tasklist = require('gulp-task-listing')

gulp.task('server', () => {
  gulp.src(['./src', './dist'])
  .pipe(server({
    livereload : true
  , open       : true
  , port       : 9999
  }))
})

gulp.task('html', () => {
  gulp.src('./dist/*.html')
})

gulp.task('stylus', () => {
  gulp.src('./src/styles/*.styl')
  .pipe(stylus())
  .pipe(ugcss())
  .pipe(concat('css.min.css'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('js', () => {
  gulp.src('./src/scripts/*.js')
  .pipe(annotate())
  .pipe(uglify())
  .pipe(concat('js.min.js'))
  .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
  gulp.watch('./src/styles/*.styl', ['stylus'])
  gulp.watch('./src/scripts/*.js', ['js'])
  gulp.watch('./dist/*.html', ['html'])
})

gulp.task('help', tasklist)

gulp.task('default', ['html', 'stylus', 'js', 'server', 'watch'])

