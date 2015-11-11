angular.module('markvi')

app.controller('ModalCtrl', ['$scope', 'close', function($scope, close) {

  $scope.close = close;

}]);
