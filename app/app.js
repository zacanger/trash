var app = angular.module('directives', ['ui.router']);

app.config(function(){
$stateProvider
  .state('home'
 ,{ templateUrl: 'app/h.html'
 ,  controller: 'ctrl'
 ,  url: '/home'
  })
  .state('weather'
 ,{ templateUrl: 'app/w.html'
 ,  controller: 'wc'
 ,  url: '/weather'
  })


  $urlRouterProvider
    .otherwise('/home');
});






});




