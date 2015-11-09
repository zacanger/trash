'use strict';

angular.module('vimark', [
  'angular-ladda',
  'ui.router',
  'vimark.home',
  'vimark.register',
  'vimark.welcome',
  'vimark.addPost',
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider
    .otherwise({redirectTo: '/home'});
}]);
