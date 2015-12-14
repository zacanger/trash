var films = require('./filmsModel')

module.exports = {

  index: function(req, res, next){
    res.status(200).json(films)
  },

  show: function(req, res, next){
    var filmz = films[req.params.position]
    res.status(200).json(filmz)
  },

  build: function(req, res, next){
    films.push(req.body)
    res.status(200).json({message: 'we done built dat!'})
  },

  update: function(req, res, next){
    var filmsUpdating = films[req.params.id]
    filmsUpdating - true
    films[req.params.id] = filmsUpdating
    res.status(200).json({message: 'updated, yo.'})
  },

  byebye: function(req, res, next){
    films.splice(req.params.id, 1)
    res.status(200).json({message: 'bye bye...'})
  },
}
