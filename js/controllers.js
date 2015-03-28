'use strict';

/* Controllers */

var golfApp = angular.module('golfApp', []);

golfApp.controller('GolfCtrl', function($scope) {
  $scope.holes = [
      {'hole': 1,
       'par': 4,
       'length': 300},
      {'hole': 2,
       'par': 4,
       'length': 370},
      {'hole': 3,
       'par': 4,
       'length': 360},
      {'hole': 4,
       'par': 3,
       'length': 135},
      {'hole': 5,
       'par': 5,
       'length': 476},
      {'hole': 6,
       'par': 4,
       'length': 340},
      {'hole': 7,
       'par': 5,
       'length': 550},
      {'hole': 8,
       'par': 4,
       'length': 360},
      {'hole': 9,
       'par': 3,
       'length': 185}
  ];
});
