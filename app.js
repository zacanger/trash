angular.module('uiRouteDemo', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
        url: '/',
        template: '<div class="main">' +
                    '<div>shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans shenanigans </div>' +
                    '<a ui-sref="home.sub">' +
                      '<div>GO TO MAIN SUB ROUTE</div>' +
                    '</a>' +
                    '<ui-view></ui-view>' +
                  '</div>',
        controller: 'ctrl'
    })
    .state('home.sub', {
        url: 'sub',
        template: '<div class="sub">' +
                    '<a ui-sref="home.sub.sub1" ng-class="{active: state.name===\'home.sub.sub1\'}">SUBROUTE ONE</a>' +
                    '<a ui-sref="home.sub.sub2({id: \'checkOutThisParam\'})" ng-class="{active: state.name===\'home.sub.sub2\'}">SUBROUTE TWO</a>' +
                    '<a href="/#/sub/sub3/anotherSweetParam" ng-class="{active: state.name===\'home.sub.sub3\'}">SUBROUTE THREE</a>' +
                    '<ui-view></ui-view>' +
                  '</div>'
    })
    .state('home.sub.sub1', {
        url: '/sub1',
        template: '<div class="subsub">' +
                    '<div>SUB SUBROUTE ONE (1)</div>' +
                  '</div>'
    })
    .state('home.sub.sub2', {
        url: '/sub2/:id',
        template: '<div class="subsub">' +
                    '<div>SUB SUBROUTE TWO (2) -- $stateParams.id: {{id}}</div>' +
                  '</div>'
    })
    .state('home.sub.sub3', {
        url: '/sub3/:sweetParam',
        template: '<div class="subsub">' +
                    '<div>SUB SUBROUTE THREE (3) -- $stateParams.sweetParam: {{sweetParam}}</div>' +
                  '</div>',
        controller: function($scope, $stateParams){
          $scope.sweetParam = $stateParams.sweetParam;
        }
    });
})
.controller('ctrl', function($scope, $rootScope, $state){
  $scope.state = $state.current;
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.state = toState;
    $scope.id = toParams.id;
  });
});
