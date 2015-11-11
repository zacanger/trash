angular.module('markview')
	.controller('ModalCtrl', ['$scope', 'ModalService', function($scope, ModalService)
		$scope.show = function(){
			ModalServce.showModal({
				templateUrl: '/views/modal.html',
				controller: 'ModalCtrl'
			})
		}])

