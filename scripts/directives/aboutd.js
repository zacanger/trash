'use strict'

angular.module('markvi')

  .directive('about', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/about.html',
      replace: true
    }
  })

