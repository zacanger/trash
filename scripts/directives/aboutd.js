'use strict'

angular.module('markvi')

  .directive('about', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'file:///home/z/Dropbox/skool/projects/noserver/app/views/about.html',
      replace: true
    }
  })
