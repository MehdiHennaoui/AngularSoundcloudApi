angular.module("app").factory("tracksFactory", function($http, $q){
	
	function getTracks(){
		var deferred = $q.defer();
		
			$http({
				method: "GET",
				url: "http://api.soundcloud.com/users/lolivieretcetera/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e",
				}).then(function(results){
					console.log("results", results);
				}).catch(function(error){
					console.log("err: ", error);
				});
		

		return deferred.promise;
	}

	return {
		getTracks : getTracks
	}
})