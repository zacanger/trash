angular.module('app', ['firebase'])

.controller('ctrl', function($scope, $firebaseObject, $firebaseArray, firebaseSvc){

  var ref = firebaseSvc.getRootRef()

  $scope.game = $firebaseObject(ref.child('game'))

  $scope.createNewGame = function(){
    var newGameObj = {
      chambers       : []
    , currentChamber : 0
    , deadPerson     : false
    }
    var bullet = ~~(Math.random()*6)
    for(var i = 0; i < 6; i++){
      if(i === bullet){
        newGameObj.chambers.push(true)
      }
      else {
        newGameObj.chambers.push(false)
      }
    }
  }

})


.service('fbSvc', function(){
  this.getRootRef = function(){
    return new Firebase('http://dm7.firebase.io')
  }
})


