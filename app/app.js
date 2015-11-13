var app = angular.module('directives', ['ui.router']);

app.config(function($urlRouterProvider) {
  $urlRouterProvider
    .when(/* , {
      templateUrl: 'app/home.html',
      controller: 'homeCtrl'
  })
    .otherwise('/');
});
