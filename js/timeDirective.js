angular.module('timeApp');
app.directive('showTime', function() {
    return {
        restrict: 'A',
        template: '{{time}}',
        link: function(scope, elem, attr) {
            var currentTime = new Date();
            scope.time = currentTime.toString;
        }
    }
})
