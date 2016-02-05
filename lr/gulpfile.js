// https://gist.github.com/Contra/8066801

var gulp    = require('gulp')
  , gutil   = require('gulp-util')
  , express = require('express')
  , path    = require('path')
  , tinylr  = require('tiny-lr')

var createServers = function(port, lrport){
  var lr = tinylr()
  lr.listen(lrport, function(){
    gutil.log('livereload over at', lrport)
  })
  var app = express()
  app.use(express.static(path.resolve('./')))
  app.listen(port, function(){
    gutil.log('express on', port)
  })
  return {
    lr  : lr
  , app : app
  }
}
var servers = createServers(9876, 35729)

gulp.task('default', function(){
  gulp.watch(['./**/*', '!./node_modules/**/*'], function(evt){
    gutil.log(gutil.colors.cyan(evt.path), 'changed')
    servers.lr.changed({
      body: {files: [evt.path]}
    })
  })
})

