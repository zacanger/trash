var app = angular.module('nbaRoutes', ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor')

  // routing configuration code
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'js/home/homeTmpl.html',
      resolve: {
        allData: function ($stateParams, homeService) {
          return homeService.getAllData()
        }
      }

    })
    .state('teams', {
      url: '/teams/:team',
      controller: 'teamCtrl',
      templateUrl: 'js/teams/teamTmpl.html',
      resolve: {
        teamData: function ($stateParams, teamService) {
          return teamService.getTeamData($stateParams.team)
        }
      }

    })

})
