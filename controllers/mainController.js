angular.module("app").controller("MainCtrl", function($scope, tracksFactory){
	
	$scope.tracks= tracksFactory.getTracks();

})