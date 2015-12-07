var app = angular.module('links', [])

app.factory('posts', [function(){

}])

app.controller('mainCtrl', [
	'$scope',
	function($scope){

		$scope.addPost = function(){
			if (!$scope.title || $scope.title === ''){return}
			$scope.posts.push({
				title: $scope.title
			, link: $scope.link
			, upvotes: 0
			})
			$scope.title = ''
		, $scope.link = ''
		}

		$scope.incrementUpvotes = function(post){
			post.upvotes += 1
		}

		$scope.posts = [
			{title: 'post1', upvotes: 3}
		, {title: 'post2', upvotes: 1324}
		, {title: 'post3', upvotes: 1}
		, {title: 'post4', upvotes: 99}
		, {title: 'post5', upvotes: 67}
		]
	}
])

