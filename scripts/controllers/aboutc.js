'use strict'

angular.module('markvi')

  .controller('AboutCtrl', function ($rootScope, $scope, $state, $stateParams, files) {
    $rootScope.about = $state.about
  })
