var apps = angular.module('app',['Ctrls',"ngRoute","ngSanitize"]);
apps.config(["$routeProvider",function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'tpls/index-list.html',
		controller:'home'
	}).when('/show/:id',{
		templateUrl:'tpls/show.html',
		controller:'home-show'
	}).when('/theme/:id',{
		templateUrl:'tpls/theme-list.html',
		controller:'theme-list'
	})
}])
apps.run(function($rootScope){
	$rootScope.ids =0;
})