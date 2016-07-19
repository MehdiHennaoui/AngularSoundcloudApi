angular.module("app").controller("MainCtrl", function($scope, tracksFactory){
	// récupérer le userName de l'input et l"envoie à la function getTracks qui se trouve dans la factory.
	$scope.getUser = function(userName){
		var promise = tracksFactory.getTracks(userName);
		promise.then(function(results){
			$scope.userData = results.data;
			console.log("myData", $scope.userData);
		})
	}
	// récupere la fonction getTracks sur la factory tracksFactory
	$scope.tracks= tracksFactory.getTracks();

})