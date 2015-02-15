'use strict';
//http://cacodaemon.de/index.php?id=51

angular.module('app.pages')
    .controller('MainController', function($scope, MovieList) {
        $scope.movies = MovieList.movies;

        MovieList.load();
    })
;