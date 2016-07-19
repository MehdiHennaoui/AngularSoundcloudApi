angular.module("app").factory("tracksFactory", function($http, $q){
	// promesse sur l'api souncloud sur le nom du compte souncloud que l'utilisateur a tapé pour le  pour récupere les chansons
	function getTracks(userName){
		var deferred = $q.defer();
		
			$http({
				method: "GET",
				url: "http://api.soundcloud.com/users/" + userName + "/tracks?client_id=bda4ada8694db06efcac9cf97b872b3e",
				}).then(function(results){
					console.log("results", results);
					deferred.resolve(results);
				}).catch(function(error){
					console.log("err: ", error);
					deferred.reject("error", error)
				});
		

		return deferred.promise;	
	}
	return {
		getTracks : getTracks
	}
})