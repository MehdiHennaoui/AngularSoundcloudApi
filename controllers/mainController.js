angular.module("app").controller("MainCtrl", function($scope, tracksFactory){
	
	$scope.getUser = function(userName){
		tracksFactory.getTracks(userName);
	}
	// récupere la fonction getTracks sur la factory tracksFactory
	$scope.tracks= console.log(tracksFactory.getTracks());

})