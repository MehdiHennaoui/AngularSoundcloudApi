angular.module("app").factory("tracksFactory", function($http, $q){
	// promesse sur l'api souncloud sur le compte de lolivier pour récupere les chansons
	function getTracks(){
		var deferred = $q.defer();
		
			$http({
				method: "GET",
				url: "http://api.soundcloud.com/users/lolivieretcetera/tracks?client_id=bda4ada8694db06efcac9cf97b872b3e",
				}).then(function(results){
					console.log("results", results);
					console.log("results.data", results.data);
					deferred.resolve(results.data);
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