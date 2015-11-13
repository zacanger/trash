var express     = require('express')
  , bodyparser  = require('body-parser')
  , app         = express()
  , port        = 9999
  , usersCtrl   = require('./usersCtrl')
  , filmsCtrl   = require('./filmsCtrl')

app.use(bodyparser())

app.listen(port, function(){
  console.log('up and active on ' + port + '!')
})

app.get('/users', usersCtrl.index)
app.get('/users/:id', usersCtrl.show)
app.post('/users', usersCtrl.build)
app.put('/users/:id', usersCtrl.update)
app.delete('/users/:id', usersCtrl.byebye)

app.get('/films', filmsCtrl.index)
app.get('/films/:id', filmsCtrl.show)
app.post('/films', filmsCtrl.build)
app.put('/films/:id', filmsCtrl.update)
app.delete('/films/:id', filmsCtrl.byebye)

