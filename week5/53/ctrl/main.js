module.exports = {
  getName: function (req, res) {
    res.send({name: name})
  },
  getLocation: function (req, res) {
    res.send({location: location})
  },
  getOccupations: function (req, res) {
    if (!req.query.order) {
      res.send({occupations: occupations})
    }
    if (req.query.order === 'asc') {
      res.send({occupations: occupations.sort()})
    } else if (req.query.order === 'desc') {
      res.send({occupations: occupations.reverse()})
    }
  },
  latestOccupation: function (req, res) {
    res.send({latestOccupation: occupations[occupations.length - 1]})
  },
  getHobbies: function (req, res) {
    res.send({hobbies: hobbies})
  },
  getHobbiesByType: function (req, res) {
    var hobbiesByType = []
    hobbies.forEach(function (hobby) {
      if (hobby.type === req.params.type) {
        hobbiesByType.push(hobby)
      }
    })
    res.send({hobbiesByType: hobbiesByType})
  },
  getSkillz: function (req, res) {
    if (req.query.experience) {
      var skillzByExperience = []
      skillz.forEach(function (skill) {
        if (skill.experience === req.query.experience) {
          skillzByExperience.push(skill)
        }
      })
      res.send({skillz: skillzByExperience})
    }
    res.send({skillz: skillz})
  },
  changeName: function (req, res) {
    name = req.body.name
    res.send({name: name})
  },
  changeLocation: function (req, res) {
    location = req.body.location
    req.send({location: location})
  },
  addOccupation: function (req, res) {
    occupations.push(req.body.occupation)
    res.send({occupations: occupations})
  },
  addHobby: function (req, res) {
    hobbies.push(req.body.hobby)
    res.send({hobbies: hobbies})
  }
}
