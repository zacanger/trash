var Post = require('../models/post')

module.exports = function(apiRouter){
  apiRouter.get('/posts', function(req, res){
    Post.find({}, function(err, posts){
      if (err) res.send(err)
      res.json(posts)
    })
  })

  apiRouter.post('/posts', function(req, res){
    var post = new Post()
    post.title = req.body.title
    post.body = req.body.body
    post.save(function(err, post){
      if (err) res.send(err)
      res.json(post)
    })
  })

  apiRouter.get('/posts/:id', function(req, res){
    Post.findById(req.params.id, function(err, post){
      if (err) res.send(err)
      res.json(post)
    })
  })

  apiRouter.put('/posts/:id', function(req, res){
    Post.findById(req.params.id, function(err, post){
      if (err) res.send(err)
      post.title = req.body.title
      post.body = req.body.body
      post.save(function(err){
        if (err) res.send(err)
        res.json({message: 'updated'})
      })
    })
  })

  apiRouter.delete('/posts/:id', function(req, res){
    Post.remove({_id: req.params.id}, function(err, post){
      if (err) res.send(err)
      res.json({message: 'removed'})
    })
  })
}
