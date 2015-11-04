var app = angular.module('directives', ['ui.router']);

app.config(function($stateProvider){
  $stateProvider
    .otherwise('/', {
      templateUrl: 'app/home/home.html',
      controller: 'app/home/homeCtrl.js'
    });
});
