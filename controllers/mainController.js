angular.module("app").controller("MainCtrl", function($scope, tracksFactory){
	// récupere la fonction getTracks sur la factory tracksFactory
	$scope.tracks= console.log(tracksFactory.getTracks());

})