'use strict';

/**
 * @ngdoc function
 * @name anthroCategoryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anthroCategoryApp
 */
angular.module('anthroCategoryApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
