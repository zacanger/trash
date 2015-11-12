'use strict'

angular.module('markvi')

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    })

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'file:///home/z/Dropbox/skool/projects/noserver/app/views/main.html',
      controller: 'MainCtrl'
    }).state('file', {
      url: '/:id',
      templateUrl: 'file:///home/z/Dropbox/skool/projects/noserver/app/views/main.html',
      controller: 'MainCtrl'
    }).state('about', {
      url: '/about',
      templateUrl: 'file:///home/z/Dropbox/skool/projects/noserver/app/views/about.html',
      controller: 'AboutCtrl'
    })
    $urlRouterProvider
			.otherwise('/')
  })

  .run(function ($rootScope) {
    $rootScope.isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())
  })
