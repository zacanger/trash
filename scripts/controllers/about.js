'use strict'

angular.module('markvi')

  .controller('AboutCtrl', function ($rootScope, $scope, $state, $stateParams) {
       $scope.search = function () {
      var results = {}
      if ($scope.query) {
        results = files.search($scope.query)
      } else {
        results = files.list()
      }
      $rootScope.$broadcast('file:search', results)
    }

    $scope.create = function () {
      $rootScope.$broadcast('file:create')
    }
  })

  })
