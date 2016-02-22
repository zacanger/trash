angular.module('app', ['ui.router'])

.config(function($urlRouteProvider, $stateProvider){
  $stateProvider
  .state('home', {
    url        : '/home'
  , controller : 'ctrl'
  , template   : '<em>hello!</em><br>{{test}}'
  })
})

