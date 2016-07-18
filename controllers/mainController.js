angular.module("app").controller("MainCtrl", function($scope, tracksFactory){
	// récupérer le userName de l'input et l"envoie à la function getTracks qui se trouve dans la factory.
	$scope.getUser = function(userName){
		tracksFactory.getTracks(userName);
	}
	// récupere la fonction getTracks sur la factory tracksFactory
	$scope.tracks= console.log(tracksFactory.getTracks());

})