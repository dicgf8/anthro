'use strict';

/**
 * @ngdoc overview
 * @name anthroCategoryApp
 * @description
 * # anthroCategoryApp
 *
 * Main module of the application.
 */
angular
	.module('anthroCategoryApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}).controller('routeActive', function($scope, $location) {
		// Compares current path to passed in to add active class for navigation marking

		$scope.isActive = function(route) {
			return route === $location.path();
		};
	});
