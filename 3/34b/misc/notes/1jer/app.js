var app = angular.module('dm7FirstApp', []);

app.controller('myCtrl', function($scope, $timeout){
  $scope.name = "That lame teacher"
  
  $scope.cars = [
    {name: "Astin Martin", year: 1972},
    {name: "Kia", year: 1973},
    {name: "Jeep", year: 1975},
    {name: "51 Mercury", year: 1951},
    {name: "Tesla", year: 2008}
  ]
  
  $scope.isAwesome = true;
  $scope.isAdmin = true;
  
  $scope.clicked = function(){
     $scope.isAwesome = !$scope.isAwesome;
  }

  $scope.person = {
    name: "namless",
    cereal: "air",
    media: "silence",
    random: "nothing"
  }
  
  $timeout(function(){
    $scope.foo = "bar";
    
    
    $scope.cars[2].name = "Monster Truck"
  }, 3000)
  
})

