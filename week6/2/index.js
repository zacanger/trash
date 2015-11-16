var express = require('express')
  , app = express()
  , UsersCtrl = require ('./controllers/UsersCtrl')
  , MoviesCtrl = require('./controllers/MoviesCtrl')
  , cors = require('cors')

app.use(bodyParser.json())

app.get('/users', UsersCtrl.index)
app.get('/users/:id', UsersCtrl.show)
app.post('/users', UsersCtrl.build)
app.put('/users/:id', UsersCtrl.update)
app.delete('/users/:id', UsersCtrl.destroy)

// app.get('/movies', MoviesCtrl.index);
// app.get('/movies/:id', MoviesCtrl.show);
// app.post('/movies', MoviesCtrl.build);
// app.put('/movies/:id', MoviesCtrl.update);
// app.delete('/movies/:id', MoviesCtrl.destroy);

var port = 3000;
app.listen(port, function() {
  console.log('listening on port: ', port);
});
