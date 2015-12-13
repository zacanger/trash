var postsModule = angular.module('ayuba.posts', [])

postsModule.service('Posts', function($http){
  return {
    all: function(){
      return $http.get('/api/posts').then(function(postList){
        return postList.data
      })
    },
    add: function(newPost){
      return $http({
        method: 'post',
        url: '/api/posts',
        data: newPost
      }).then(function(res){
        return res.data
      }).catch(function(err){
        console.error('sorry! something went wrong.')
        console.error(err)
        return err
      })
    },
    remove: function(){},
    update: function(){}
  }
})
