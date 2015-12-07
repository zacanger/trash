var app = angular.module('links', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home'
		, templateUrl: '/home.html'
		, controller: 'mainCtrl'
		})
		.state('posts', {
			url: '/posts/{id}'
		, templateUrl: '/posts.html'
		, controller: 'postCtrl'
		})

	$urlRouterProvider
		.otherwise('home')
}])

app.factory('posts', [function(){
	var o = {
		post: []
	}
	return o
}])

app.controller('mainCtrl', ['$scope', 'posts',
	function($scope, posts){

		$scope.addPost = function(){
			if (!$scope.title || $scope.title === ''){return}
			$scope.posts.push({
				title: $scope.title
			, link: $scope.link
			, upvotes: 0
			, comments: [
					{author: 'you', body: 'HI YOU SUCK', upvotes: 172}
				, {author: 'someone else', body: 'yeah, true dat', upvotes: 49}
				, {author: 'i dunno...', body: 'i did not think it was all that bad, to be honest', upvotes: 1}
			]
			})
			$scope.title = ''
		, $scope.link = ''
		}

		$scope.incrementUpvotes = function(post){
			post.upvotes += 1
		}

		$scope.posts = posts.posts
	}
])

app.controller('postCtrl', ['$scope', '$stateParams', 'posts',
	function($scope, $stateParams, posts){
		$scope.post = posts.posts[$stateParams.id]
	}
])
