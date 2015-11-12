angular.module('markvi').controller('ModalCtrl', ['$scope', 'ModalService',
  function($scope, ModalService)
  $scope.show = function() {
    ModalServce.showModal({
      templateUrl: 'file:///home/z/Dropbox/skool/projects/noserver/app/views/modal.html',
      controller: 'ModalCtrl'
    })
  }
])