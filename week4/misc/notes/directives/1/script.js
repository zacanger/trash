(function(angular) {
  'use strict';
angular.module('docsIsolateScopeDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    $scope.ryan = { name: 'Walshy', address: 'PROVOOOOOOO' };
    $scope.rey = { name: 'tripfag', address: 'coal-uhm-bee-uh' };
  }])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info'
      },
      templateUrl: 'my-customer-iso.html'
    };
  });
})(window.angular);

