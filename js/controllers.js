var ctrl = angular.module('Ctrls',[]);

ctrl.controller('navs',function($scope,$http,$routeParams){
	$http({
		url:'php/api.php?url=http://news-at.zhihu.com/api/4/themes',
		method:'GET'
	}).success(function(data){
		$scope.themes = data.others;
	})

})
ctrl.controller('home',function($scope,$http){
	$http({
		url:'php/api.php?url=http://news-at.zhihu.com/api/4/news/latest',
		method:'GET'
	}).success(function(data){
		$scope.list = data.stories;
		console.log(data)
	})
})
ctrl.controller('home-show',function($scope,$http,$routeParams){
	$http({
		url:'php/api.php?url=http://news-at.zhihu.com/api/4/news/'+$routeParams.id,
		method:'GET'
	}).success(function(data){
		$scope.data=data;
		console.log(data)
	})
})
ctrl.controller('theme-list',function($scope,$http,$routeParams){
	$http({
		url:'php/api.php?url=http://news-at.zhihu.com/api/4/theme/'+$routeParams.id,
		method:'GET'
	}).success(function(data){
		$scope.list = data.stories;
		$scope.title = data.name;
		console.log(data)
	})
})