var AWS = require('aws-sdk')
  , Keys = require('./keys.js')

AWS.config.update({
    accessKeyId: Keys.amazonAccess
  , secretAccessKey: Keys.amazonSecret
  , region: Keys.amazonRegion
})

var s3 = new AWS.S3()
  , exports = module.exports = {}

exports.saveImage = function(req, res){
  buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ''), 'base64')

  // bucketName var below crates a "directory" for each user
  var bucketName = 'mailpants/' + req.body.userEmail
  var params = {
      Bucket: bucketName
    , Key: req.body.imageName
    , Body: buf
    , ContentType: 'image/' + req.body.imageExtension
    , ACL: 'public-read'
  }

  s3.upload(params, function(err, data){
    console.log(err, data)
    if (err) return res.status(500).send(err)
    // this is where we'd actually deal with this data, save the metadata to mongo, etc.
    res.json(data)
  })
}
