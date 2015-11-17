var express    = require('express')
 ,  bodyparser = require('body-parser')
 ,  midware    = require('./ctrl/midware.js')
 ,  mainCtrl   = require('./ctrl/main.js')
 ,  port       = 9999
 ,  app        = express()

app.use(bodyparser.json())
app.use(midware.addHeaders)

app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.latestOccupation)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesByType)
app.get('/skillz', mainCtrl.getSkillz)

app.put('/name', mainCtrl.changeName)
app.put('/location', mainCtrl.changeLocation)
app.post('/occupations', mainCtrl.addOccupation)
app.post('/hobbies', mainCtrl.addHobby)
app.post('/skillz', midware.generateId, mainCtrl.addSkill)

app.listen(port, function () {
  console.log('howdy, imma hang out on ' + port)
})
