var users = require('./usersModel')

module.exports = {

  index: function(req, res, next){
    res.status(200).json(users)
  },

  show: function(req, res, next){
    var yousers = users[req.params.position]
    res.status(200).json(yousers)
  },

  build: function(req, res, next){
    users.push(req.body)
    res.status(200).json({message: 'we done built dat!'})
  },

  update: function(req, res, next){
    var usersUpdating = users[req.params.id]
    usersUpdating = true
    users[req.params.id] = usersUpdating
    res.status(200).json({message: 'updated, yo.'})
  },

  byebye: function(req, res, next){
    users.splice(req.params.id, 1)
    res.status(200).json({message: 'bye bye...'})
  },
}

// curl --data "name=billybob&favFilm=thornton?" http://127.0.0.1:9999/users

// curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://127.0.0.1:9999/users
