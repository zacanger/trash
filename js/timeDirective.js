angular.module('timeApp');
app.directive('showTime', function() {
    return {
        restrict: 'E',
        template: '<span>{{time}}</span>',
        link: function(scope, elem, attr) {
            var currentTime = new Date();
            scope.time = currentTime.toString;
        }
    }
})
