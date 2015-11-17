var frank = {
  name: 'asshole',   location: 'france',   hobbies: [{
    name: 'bitches',       type: 'current'
  }],
  occupations: [{
    name: 'pizza boy',       type: 'current'
  }, {
    name: 'pizza girl',       type: 'past'
  }]
}

var dd = {
  name: 'claffy cluck',   location: 'up yourth',   hobbies: [{
    name: 'thucking cokth',       type: 'current'
  }, {
    name: 'thucking minnie mouth',     type: 'past'
  }],
  occupations: [{
    name: 'death methal thrummer',       type: 'past'
  }, {
    name: 'thekthual devianth',       type: 'current'
  }]
}

module.exports = {
  addHeaders: function (req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self'"
    })
    next()
  },
  generateId: function (req, res, next) {
    req.body.skill.id = req.body.skills.length
    next()
  }
}
