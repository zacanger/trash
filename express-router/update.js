// unfinished. will finish later. mebbe.

const router = require('express').Router()

function changeName(req, res){
  res.send('name changed!')
}

function changeEmail(req, res){
  res.send('email changed!')
}

router
.post('name', changeName)
.post('email', changeEmail)

module.exports = router

