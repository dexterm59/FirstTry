'use strict';

/* Controllers */

var golfApp = angular.module('golfApp', []);

golfApp.controller('GolfCtrl', function($scope) {
  $scope.holes = [
      {'hole': 1,
       'par': 4,
       'length': 300,
       'score': 4},
      {'hole': 2,
       'par': 4,
       'length': 370,
       'score': 4},
      {'hole': 3,
       'par': 4,
       'length': 360,
       'score': 4},
      {'hole': 4,
       'par': 3,
       'length': 135,
       'score': 4},
      {'hole': 5,
       'par': 5,
       'length': 476,
       'score': 5},
      {'hole': 6,
       'par': 4,
       'length': 340,
       'score':4},
      {'hole': 7,
       'par': 5,
       'length': 550,
       'score': 5},
      {'hole': 8,
       'par': 4,
       'length': 360,
       'score': 4},
      {'hole': 9,
       'par': 3,
       'length': 185,
       'score': 3}
  ];
});
