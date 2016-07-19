angular.module("app").directive("song", function(){
	return {
		restrict: 'E',
		templateUrl : 'templates/song.html'
	}
});